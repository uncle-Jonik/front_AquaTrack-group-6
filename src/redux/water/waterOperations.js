import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://back-aquatrack-group-6.onrender.com/api/water";

export const fetchWater = createAsyncThunk(
  "waterPerMonth/fetch",
  async (_, thunkAPI) => {
    //////////////////
  }
);
export const deleteWater = createAsyncThunk(
  "water/delete",
  async (id, thunkAPI) => {
    ////////////////
  }
);
export const addWater = createAsyncThunk(
  "water/add",
  async (contact, thunkAPI) => {
    /////////////////
  }
);
export const changeWater = createAsyncThunk(
  "water/change",
  async (contact, thunkAPI) => {
    /////////////////
  }
);
