import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const SetAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const ClearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

axios.defaults.baseURL = "https://back-aquatrack-group-6.onrender.com/api/users";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        /////////////////
    }
);
export const loginUser = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        ///////////////////////
    }
);
export const logoutUser = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    ////////////////////////
});
export const RefreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        ///////////////////
    }
);