import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuButton } from "../constants/constants";

export interface menuSidebarState {
  text: MenuButton;
}

const initialState: menuSidebarState = {
  text: MenuButton.ALL,
};

export const menuSidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActiveButton: (state, action: PayloadAction<MenuButton>) => {
      state.text = action.payload;
    },
  },
});

export const { setActiveButton } = menuSidebarSlice.actions;

export default menuSidebarSlice.reducer;
