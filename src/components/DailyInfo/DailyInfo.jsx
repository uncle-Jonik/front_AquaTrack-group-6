import css from "./DailyInfo.module.css";
import { ChooseDate } from "../ChooseDate/ChooseDate.jsx";
// import { AddWaterBtn } from "../AddWaterBtn/AddWaterBtn.jsx";
import { WaterList } from "../WaterList/WaterList.jsx";

export function DailyInfo() {
  return (
    <>
      <div>
        <ChooseDate />
        {/* <AddWaterBtn /> */}
      </div>
      <WaterList />
    </>
  );
}
