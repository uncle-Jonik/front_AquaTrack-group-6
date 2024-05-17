import { useSelector } from "react-redux";
import CalendarItem from "../CalendarItem/CalendarItem";
import css from './Calendar.module.css';

const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

const Calendar = () => {
    const currentDate = useSelector(state => state.calendar.currentDate);
    const month = new Date(currentDate).getMonth();
    const year = new Date(currentDate).getFullYear();
    const numberOfDays = daysInMonth(month, year);

    const daysArray = Array.from({ length: numberOfDays }, (_, index) => index + 1);

    return (
        <div className={css.container}>
            {daysArray.map(day => (
                <CalendarItem key={day} day={day} />
            ))}
        </div>
    );
};

export default Calendar;
