import css from "./WaterMainInfo.module.css";

import { Logo } from "../Logo";
import { useAuth } from "../../hooks/useAuth";
import { AddWaterBtn } from "../AddWaterBtn/AddWaterBtn";
import { Feasibility } from "../../helpers/feasibility";
import { useSelector } from "react-redux";
import { selectActiveDay } from "../../redux/water/waterSelectors";

export const WaterMainInfo = () => {
  const day = Feasibility();

  const currentDate = useSelector(selectActiveDay);

    const localDate = () => {
      const milliseconds = Date.now();
      const date = new Date(milliseconds);
    
      return date.toLocaleDateString().replace(/\//g, '.');
    };

    const dayToday = currentDate.replace(/\//g, '.').split('.')[0];

  

    const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];

    const month = months[+currentDate.split('/')[1] -1];
    const monthDot = months[+currentDate.split('.')[1] -1];

  const user = useAuth().user;
  return (
    <div className={css.wrapper}>
      <div className={css.logoBox}>
        <Logo />
      </div>

      <div className={css.dailyNorma}>
        <b>{user.waterRate} L</b>
        <p>My daily norma</p>
      </div>

      <div className={css.statusBar}>
        <div className={css.titleProsentBox}>
          <p>{currentDate.replace(/\//g, '.') === localDate() ? "Today" : `${dayToday}, ${month || monthDot}`}</p>
          <span>{Math.round(day) ? Math.round(day) : 0}%</span>
        </div>

        <input
          type="range"
          className={css.rangeInput}
          min="0"
          max="100"
          value={Math.round(day) ? Math.round(day) : 0}
          readOnly={true}
        />

        <div className={css.labels}>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>

      <div className={css.btnContainer}>
        <AddWaterBtn section="waterMain" />
      </div>
    </div>
  );
};
