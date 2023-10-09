import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../slices/dataUserSlice";
import sidebarReducer from "../slices/menuSidebarSlice";
import blogsReducer from "../slices/blogsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    blogs: blogsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
