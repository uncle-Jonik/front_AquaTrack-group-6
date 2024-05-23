import { createSlice } from "@reduxjs/toolkit";
import {
  refreshUser,
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
    waterRate: null
  },
  isLoggedIn: false,
  isRefreshing: false,
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
        state.isRefreshing = false;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem("refreshToken", action.payload.refreshToken);
        state.userInfo = action.payload.user;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.accessToken = null;
        localStorage.setItem("refreshToken", "");
      })

      .addCase(refreshUser.pending, (state, action) => {
        //////////////////////////////
        // ТУТ МАЄ ВАШ ЛОУДЕР;
        state.isRefreshing = true;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;

        state.accessToken = action.payload.accessToken;
        localStorage.setItem("refreshToken", action.payload.refreshToken);

        state.userInfo.email = action.payload.user.email;
        state.userInfo.name = action.payload.user.name;
        state.userInfo.gender = action.payload.user.gender;
        state.userInfo.avatar = action.payload.user.avatarUrl;
        state.userInfo.weight = action.payload.user.weight;
        state.userInfo.sportsActivity = action.payload.user.sportsActivity;
        state.userInfo.waterRate = action.payload.user.waterRate;
      })

      .addCase(updateUser.pending, (state) => {
        //////////////////////////////
        // ТУТ МАЄ ВАШ ЛОУДЕР;
        state.isRefreshing = true;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.error = "";
        state.isRefreshing = false;

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

      .addCase(refreshUser.rejected, (state) => {
        //////////////////////////////
      }),
});

export const userReducer = userSlice.reducer;
