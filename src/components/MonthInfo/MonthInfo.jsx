import Calendar from "../Calendar";
import CalendarPagination from "../CalendarPagination";

import css from './MonthInfo.module.css'

const MonthInfo = () => {
    return (
        <section className={css.monthSectionInfo}>
            <div className={css.monthPaginationContainer}>
                <h3 className={css.monthTitle}>Month</h3>
                <CalendarPagination />
            </div>
            
            <Calendar />
        </section>
        )
}

export default MonthInfo;
