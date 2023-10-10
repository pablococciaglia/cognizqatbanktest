import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PersonData } from "../types/personTypes";
import { fetchApi } from "../service/serviceApi";
import { BASE_URL, FetchStatus } from "../constants/constants";

export interface DataUserState {
  user: PersonData;
  status: FetchStatus;
  logged: boolean;
}

const initialState: DataUserState = {
  user: {
    id: undefined,
    name: "",
    username: "",
    email: "",
    address: undefined,
    phone: "",
    website: "",
    company: undefined,
  },
  status: FetchStatus.IDLE,
  logged: false,
};

export const getUserData = createAsyncThunk(
  "dataUser/fetchUser",
  async (userNumber: string) => {
    const url = `${BASE_URL}/users/${userNumber}`;
    const response = await fetchApi<PersonData>(url);
    return response;
  }
);

export const dataUserSlice = createSlice({
  name: "dataUser",
  initialState,
  reducers: {
    logOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = FetchStatus.IDLE;
        if (action.payload) {
          state.user = action.payload;
          state.logged = true;
        }
      })
      .addCase(getUserData.rejected, (state) => {
        state.status = FetchStatus.FAILED;
      });
  },
});

export const { logOut } = dataUserSlice.actions;

export default dataUserSlice.reducer;
