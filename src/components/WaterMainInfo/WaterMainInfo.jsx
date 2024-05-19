import css from "./WaterMainInfo.module.css";

import { Logo } from "../Logo";
import { useAuth } from "../../hooks/useAuth";
import { AddWaterBtn } from "../AddWaterBtn/AddWaterBtn";
import { Feasibility } from "../../helpers/feasibility";

export const WaterMainInfo = () => {
  const day = Feasibility();

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
          <p>Today</p>
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
