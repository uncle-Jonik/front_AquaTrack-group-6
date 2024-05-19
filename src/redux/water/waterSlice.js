import { createSlice } from "@reduxjs/toolkit";
import {
  addWater,
  changeWater,
  deleteWater,
  fetchWaterPerDay,
  fetchWaterPerMonth,
} from "./waterOperations";

const localDate = () => {
  const milliseconds = Date.now();
  const date = new Date(milliseconds);

  return date.toLocaleDateString();
};

function handleLoading(state) {
  state.loading = true;
  state.error = null;
}

function handleError(state, action) {
  state.error = action.payload;
  state.loading = false;
}

const waterSlice = createSlice({
  name: "water",
  initialState: {
    waters: {
      waterPerMonth: { waterRecord: {} },
      waterPerDay: {
        waterRate: {},
        waterRecord: [],
      },
    },
    loading: false,
    error: false,
    activeDay: localDate(),
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchWaterPerDay.pending, handleLoading)
      .addCase(fetchWaterPerDay.fulfilled, (state, action) => {
        const { waterRate, waterRecord } = action.payload;

        state.error = false;
        state.loading = false;
        state.waters.waterPerDay.waterRate = waterRate;
        state.waters.waterPerDay.waterRecord = waterRecord;
      })
      .addCase(fetchWaterPerDay.rejected, handleError)
      .addCase(fetchWaterPerMonth.pending, handleLoading)
      .addCase(fetchWaterPerMonth.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.waters.waterPerMonth = action.payload.waterRecord;
      })
      .addCase(fetchWaterPerMonth.rejected, handleError)
      .addCase(deleteWater.pending, handleLoading)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        const index = state.waters.waterPerDay.waterRecord.findIndex(
          (water) => water.id === action.payload.waterRecord.id
        );
        state.waters.waterPerDay.waterRecord.splice(index, 1);
      })
      .addCase(deleteWater.rejected, handleError)
      .addCase(addWater.pending, handleLoading)
      .addCase(addWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.waters.waterPerDay.waterRecord.push(action.payload.waterRecord);
      })
      .addCase(addWater.rejected, handleError)
      .addCase(changeWater.pending, handleLoading)
      .addCase(changeWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        const index = state.waters.waterPerDay.waterRecord.findIndex(
          (water) => water.id === action.payload.waterRecord.id
        );
        state.waters.waterPerDay.waterRecord[index] =
          action.payload.waterRecord;
      })
      .addCase(changeWater.rejected, handleError),
});

export const waterReducer = waterSlice.reducer;
