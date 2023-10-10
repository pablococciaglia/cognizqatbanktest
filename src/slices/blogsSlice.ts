import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getRandomTime } from "../helpers/getRandomTime";
import { fetchApi, Method } from "../service/serviceApi";
import { Blog, Blogs, BlogsPlusDateAndImage } from "../types/blogsTypes";
import {
  BASE_URL,
  FetchStatus,
  PICTURES_IN_STORE,
} from "../constants/constants";

export interface DataBlogsState {
  blogs: BlogsPlusDateAndImage;
  status: FetchStatus;
  pagination: number;
  modalOpen: boolean;
}

const initialState: DataBlogsState = {
  blogs: [],
  status: FetchStatus.IDLE,
  pagination: 1,
  modalOpen: false,
};

export const getBlogsData = createAsyncThunk(
  "blogs/fetchBlogs",
  async (userNumber: string) => {
    const url = `${BASE_URL}/users/${userNumber}/posts`;
    const response = await fetchApi<Blogs>(url);
    return response;
  }
);

export const editPost = createAsyncThunk(
  "blogs/editPost",
  async (payload: Blog) => {
    const url = `${BASE_URL}/posts/${payload.userId}`;
    const response = await fetchApi<Blog>(url, Method.PUT, payload);
    return response;
  }
);

export const dataBlogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<number>) => {
      state.pagination = action.payload;
    },
    deletePostFromStore: (state, action: PayloadAction<number>) => {
      state.blogs = state.blogs.filter(({ id }) => id !== action.payload);
    },
    archivePostFromStore: (state, action: PayloadAction<number>) => {
      state.blogs = state.blogs.map(function (post) {
        if (post.id === action.payload) {
          post.archived = true;
        }
        return post;
      });
    },
    markForEditThisPost: (state, action: PayloadAction<number>) => {
      state.blogs = state.blogs.map(function (post) {
        if (post.id === action.payload) {
          post.editing = true;
        }
        return post;
      });
    },
    unarchivePostFromStore: (state, action: PayloadAction<number>) => {
      state.blogs = state.blogs.map(function (post) {
        if (post.id === action.payload) {
          post.archived = false;
        }
        return post;
      });
    },
    createPost: (
      state,
      action: PayloadAction<{
        title: string;
        body: string;
      }>
    ) => {
      const lastPost = state.blogs[state.blogs.length - 1];
      state.blogs = [
        ...state.blogs,
        {
          title: action.payload.title,
          body: action.payload.body,
          userId: lastPost.userId,
          date: new Date().getTime(),
          photoId: (lastPost.id + 1) % PICTURES_IN_STORE,
          archived: false,
          id: lastPost.id + 1,
        },
      ];
      console.log(action.payload);
    },
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogsData.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(getBlogsData.fulfilled, (state, action) => {
        state.status = FetchStatus.IDLE;
        if (action.payload) {
          const payloadWithDatePhotoNum = (action.payload).map(
            (blog) => ({
              ...blog,
              date: getRandomTime(),
              photoId: blog.id % PICTURES_IN_STORE,
              archived: false,
            })
          );
          state.blogs = payloadWithDatePhotoNum;
        }
      })
      .addCase(getBlogsData.rejected, (state) => {
        state.status = FetchStatus.FAILED;
      })
      .addCase(editPost.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.status = FetchStatus.IDLE;
        state.blogs = state.blogs.map(function (post) {
          if (post.editing) {
            const { editing, ...restOfTheArgs } = post;
            return {
              ...restOfTheArgs,
              ...action.payload,
              id: restOfTheArgs.id,
            };
          }
          return post;
        });
      })
      .addCase(editPost.rejected, (state) => {
        state.status = FetchStatus.FAILED;
      });
  },
});

export const {
  archivePostFromStore,
  closeModal,
  createPost,
  deletePostFromStore,
  markForEditThisPost,
  openModal,
  setPagination,
  unarchivePostFromStore,
} = dataBlogsSlice.actions;

export default dataBlogsSlice.reducer;
