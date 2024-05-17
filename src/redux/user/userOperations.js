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
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", data);
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
export const RefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    ///////////////////
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
