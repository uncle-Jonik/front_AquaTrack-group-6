import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './Calendar/CalendarSlice';

export default configureStore({
    reducer: {
        calendar: calendarReducer
    }
});