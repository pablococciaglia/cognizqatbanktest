import { FetchStatus, MenuButton } from "./constants/constants";
import { RootState } from "./store/store";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/dataUserSlice";
import sidebarReducer from "./slices/menuSidebarSlice";
import blogsReducer from "./slices/blogsSlice";

export const initialState: RootState = {
  user: {
    user: {
      id: 1,
      name: "Pablo Cocciaglia",
      username: "",
      email: "",
      address: undefined,
      phone: "",
      website: "",
      company: undefined,
    },
    status: FetchStatus.IDLE,
    logged: false,
  },
  blogs: {
    blogs: [],
    status: FetchStatus.IDLE,
    pagination: 1,
    modalOpen: false,
  },
  sidebar: {
    text: MenuButton.ALL,
  },
};

export const mockStore = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    blogs: blogsReducer,
  },
  preloadedState: initialState,
});
