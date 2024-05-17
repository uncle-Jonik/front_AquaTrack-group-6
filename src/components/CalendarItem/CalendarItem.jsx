import { useDispatch, useSelector } from 'react-redux';
import { setActiveDay } from '../../redux/Calendar/CalendarSlice';
import css from './CalendarItem.module.css';

const CalendarItem = ({ percentage = 0, day }) => {
    const dispatch = useDispatch();
    const activeDay = useSelector(state => state.calendar.activeDay);

    const containerStyle = {
        backgroundColor: day === activeDay ? '#323f47' : (percentage < 100 ? 'rgba(50, 63, 71, 0.2)' : '#FFFFFF'),
        color: day === activeDay && '#9be1a0'
    };

    const handleClick = () => {
        dispatch(setActiveDay(day));
    };

    return (
        <div className={css.container} >
            <button className={css.button} style={containerStyle} onClick={handleClick}>{day}</button>
            <p className={css.text}>{percentage}%</p>
        </div>
    );
};

export default CalendarItem;