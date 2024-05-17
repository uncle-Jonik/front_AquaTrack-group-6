import { createSlice } from "@reduxjs/toolkit";
import {
  RefreshUser,
  loginUser,
  logoutUser,
  registerUser,
} from "./userOperations";

export const initialState = {
  userInfo: {
    email: null,
    name: null,
    gender: null,
    avatar: null,
    weight: null,
    sportsActivity: null,
    waterRate: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
  refreshToken: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        //////////////////////////////
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        //////////////////////////////
      })
      .addCase(RefreshUser.fulfilled, (state, action) => {
        //////////////////////////////
      })

      .addCase(RefreshUser.rejected, (state) => {
        //////////////////////////////
      }),
});

export const {
  //////////////////////////////
} = userSlice.actions;

export const userReducer = userSlice.reducer;
