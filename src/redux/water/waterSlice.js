import { createSlice } from "@reduxjs/toolkit";
import { addWater, changeWater, deleteWater, fetchWater } from "./waterOperations";

const waterSlice = createSlice({
    name: "waterPerMonth",
    initialState: {
        items: [],
        loading: false,
        error: "",
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchWater.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchWater.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchWater.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(deleteWater.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(deleteWater.fulfilled, (state, action) => {
                //////////////////////////////
            })
            .addCase(addWater.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(addWater.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(changeWater.fulfilled, (state, action) => {
                ///////////////////////
            }),
});

export const waterReducer = waterSlice.reducer;