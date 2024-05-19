import css from "./WaterMainInfo.module.css";

import { Logo } from "../Logo";
import { AddWaterBtn } from "../AddWaterBtn/AddWaterBtn";

export const WaterMainInfo = () => {
  return (
    <div className={css.wrapper}>
      <Logo />

      <div className={css.statusBar}>
        <p>Today</p>

        <input
          type="range"
          className={css.rangeInput}
          min="0"
          max="100"
          value={50}
          // onChange={(e) => setWaterLevel(e.target.value)}
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
