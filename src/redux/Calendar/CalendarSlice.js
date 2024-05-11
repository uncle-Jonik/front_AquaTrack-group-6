import { createSlice } from '@reduxjs/toolkit';


const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        currentDate: Date.now()
    },
    reducers: {
        setCurrentDate(state, action) {
            state.currentDate = action.payload;
        }
    }
});

export const { setCurrentDate } = calendarSlice.actions;
export default calendarSlice.reducer;