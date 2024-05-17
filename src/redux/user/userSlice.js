import { createSlice } from "@reduxjs/toolkit";
import {
  RefreshUser,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
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
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
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
      .addCase(updateUser.fulfilled, (state, action) => {
        state.error = null;

        state.userInfo.email = action.payload.email;
        state.userInfo.name = action.payload.name;
        state.userInfo.gender = action.payload.gender;
        state.userInfo.avatar = action.payload.avatarUrl;
        state.userInfo.weight = action.payload.weight;
        state.userInfo.sportsActivity = action.payload.sportsActivity;
        state.userInfo.waterRate = action.payload.waterRate;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(RefreshUser.rejected, (state) => {
        //////////////////////////////
      }),
});

export const {
  //////////////////////////////
} = userSlice.actions;

export const userReducer = userSlice.reducer;
