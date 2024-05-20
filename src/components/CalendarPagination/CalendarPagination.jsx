import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDate } from '../../redux/water/waterSlice';
import { fetchWaterPerMonth } from '../../redux/water/waterOperations';
import css from './CalendarPagination.module.css';
import sprite from '../../assets/sprite.svg';

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

const CalendarPagination = () => {
    const dispatch = useDispatch();
    const currentDate = useSelector(state => state.water.currentDate);

    const fetchAndSetDate = (newDate) => {
        const localDate = newDate.toLocaleDateString();
        dispatch(setCurrentDate(newDate.getTime()));
        dispatch(fetchWaterPerMonth(localDate));
    };

    const goToPreviousMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() - 1);
        fetchAndSetDate(newDate);
    };

    const goToNextMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + 1);
        fetchAndSetDate(newDate);
    };

    return (
        <div className={css.container}>
            <button className={css.button} type="button" onClick={goToPreviousMonth}>
                <svg className={css.icons}>
                    <use width={18} height={18} xlinkHref={`${sprite}#icon-left`} />
                </svg>
            </button>
            <p>{months[new Date(currentDate).getMonth()]}, {new Date(currentDate).getFullYear()}</p>
            <button className={css.button} type="button" onClick={goToNextMonth}>
                <svg className={css.icons}>
                    <use width={18} height={18} xlinkHref={`${sprite}#icon-right`} />
                </svg>
            </button>
        </div>
    );
};

export default CalendarPagination;
