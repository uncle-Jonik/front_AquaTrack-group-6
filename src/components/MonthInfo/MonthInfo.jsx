import Calendar from "../Calendar";
import CalendarPagination from "../CalendarPagination";
import css from "./MonthInfo.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const MonthInfo = () => {
  return (
    <section className={css.monthSectionInfo}>
      <div className={css.monthPaginationContainer}>
        <h3 className={css.monthTitle}>Month</h3>
        <div className={css.pag_btn}>
          <CalendarPagination />
          <button>
            <FaRegCalendarAlt />
          </button>
        </div>
      </div>

      <Calendar />
    </section>
  );
};

export default MonthInfo;
