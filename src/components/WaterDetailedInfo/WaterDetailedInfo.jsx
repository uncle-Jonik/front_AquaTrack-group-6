import { UserPanel } from "../UserPanel/UserPanel.jsx";
import { DailyInfo } from "../DailyInfo/DailyInfo.jsx";
import MonthInfo from "../MonthInfo/MonthInfo.jsx";
import css from "./WaterDetailedInfo.module.css";

export function WaterDetailedInfo() {
  return (
    <div className={css.wrapper}>
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
}
