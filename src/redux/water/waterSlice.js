import { createSlice } from "@reduxjs/toolkit";
import {
  fetchWaterPerDay,
  fetchWaterPerMonth,
  addWater,
  changeWater,
  deleteWater,
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
      waterPerMonth: {},
      waterPerDay: {
        waterRate: {},
        waterRecord: [],
      },
    },
    loading: false,
    error: false,
    activeDay: localDate(),
    currentDate: Date.now(),
  },
  reducers: {
    setActiveDay(state, action) {
      state.activeDay = action.payload;
    },
    setCurrentDate(state, action) {
      state.currentDate = action.payload;
    },
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
          (water) => water._id === action.payload.waterRecord._id
        );
        state.waters.waterPerDay.waterRecord.splice(index, 1);

        if (state.waters.waterPerMonth[action.payload.waterRecord.localDate]) {
          const index = state.waters.waterPerMonth[
            action.payload.waterRecord.localDate
          ].findIndex((water) => water._id === action.payload.waterRecord._id);
          state.waters.waterPerMonth[
            action.payload.waterRecord.localDate
          ].splice(index, 1);
        }
      })
      .addCase(deleteWater.rejected, handleError)
      .addCase(addWater.pending, handleLoading)
      .addCase(addWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.waters.waterPerDay.waterRecord.push(action.payload.waterRecord);

        const date = new Date(state.currentDate);
        const month =
          date.getMonth() < 9
            ? "0" + (date.getMonth() + 1)
            : String(date.getMonth() + 1);
        if (state.waters.waterPerMonth[action.payload.waterRecord.localDate]) {
          state.waters.waterPerMonth[action.payload.waterRecord.localDate].push(
            action.payload.waterRecord
          );
        } else if (
          action.payload.waterRecord.localDate.split(".")[1] === month
        ) {
          state.waters.waterPerMonth[action.payload.waterRecord.localDate] = [
            action.payload.waterRecord,
          ];
        }
      })
      .addCase(addWater.rejected, handleError)
      .addCase(changeWater.pending, handleLoading)
      .addCase(changeWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        const index = state.waters.waterPerDay.waterRecord.findIndex(
          (water) => water._id === action.payload.waterRecord._id
        );
        state.waters.waterPerDay.waterRecord[index] =
          action.payload.waterRecord;
        state.waters.waterPerDay.waterRecord[index] =
          action.payload.waterRecord;

        if (state.waters.waterPerMonth[action.payload.waterRecord.localDate]) {
          const index = state.waters.waterPerMonth[
            action.payload.waterRecord.localDate
          ].findIndex((water) => water._id === action.payload.waterRecord._id);
          state.waters.waterPerMonth[action.payload.waterRecord.localDate][
            index
          ] = action.payload.waterRecord;
        }
      })
      .addCase(changeWater.rejected, handleError),
});

export const waterReducer = waterSlice.reducer;
export const { setActiveDay, setCurrentDate } = waterSlice.actions;
