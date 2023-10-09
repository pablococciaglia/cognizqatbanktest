import { createSelector } from "@reduxjs/toolkit";
import { MenuButton } from "../constants/constants";
import { RootState } from "../store/store";

export const selectUserData = ({ user }: RootState) => user.user;

export const selectUserFetchStatus = ({ user }: RootState) => user.status;

export const selectIsLogged = ({ user }: RootState) => user.logged;

export const buttonSelected = ({ sidebar }: RootState) => sidebar.text;

export const selectBlogs = createSelector(
  (state: RootState) => state,
  (store: RootState) => {
    const button = store.sidebar.text;
    let posts;
    switch (button) {
      case MenuButton.ARCHIVED:
        posts = store.blogs.blogs.filter((posts) => posts.archived);
        break;
      case MenuButton.LATEST:
        const newOrder = [...store.blogs.blogs];
        posts = newOrder
          .sort((a, b) => {
            const dateA = a.date;
            const dateB = b.date;
            if (dateA > dateB) {
              return -1;
            }
            if (dateA < dateB) {
              return 1;
            }
            return 0;
          })
          .splice(0, 1);
        break;

      default:
        posts = store.blogs.blogs;
        break;
    }

    return posts;
  }
);

export const selectPost = ({ blogs }: RootState, id: number) => {
  return blogs.blogs.find((post) => id === post.id);
};

export const selectPagination = ({ blogs }: RootState) => blogs.pagination - 1;

export const selectModalState = ({ blogs }: RootState) => blogs.modalOpen;
