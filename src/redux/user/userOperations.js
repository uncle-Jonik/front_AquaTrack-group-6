import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const SetAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const ClearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

axios.defaults.baseURL = "https://back-aquatrack-group-6.onrender.com/api/";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post("/users/register", { email, password });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", { email, password });
      SetAuthHeader(res.data.accessToken);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    ////////////////////////
  }
);
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    ///////////////////
    const state = thunkAPI.getState();
    const persistedToken = state.user.refreshToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      const res = await axios.post("/users/refresh", {
        refreshToken: persistedToken,
      });

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  "auth/update",
  async (data, thunkAPI) => {
    try {
      const res = await axios.put("users/current", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

