import { createSlice } from '@reduxjs/toolkit';


const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        currentDate: Date.now(),
        activeDay: null
    },
    reducers: {
        setCurrentDate(state, action) {
            state.currentDate = action.payload;
        },
        setActiveDay(state, action) {
            state.activeDay = action.payload;
        }
    }
});

export const { setCurrentDate, setActiveDay } = calendarSlice.actions;
export default calendarSlice.reducer;