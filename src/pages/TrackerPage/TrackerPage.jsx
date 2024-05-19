import css from "./TrackerPage.module.css";

import { WaterDetailedInfo } from "../../components/WaterDetailedInfo/WaterDetailedInfo.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useWater } from "../../hooks/useWater.jsx";
import { Loader } from "../../components/Loader/Loader.jsx";
import { WaterMainInfo } from "../../components/WaterMainInfo/WaterMainInfo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchWaterPerDay } from "../../redux/water/waterOperations.js";
import { useEffect } from "react";
import { selectActiveDay } from "../../redux/water/waterSelectors.js";

export default function TrackerPage() {
  const refreshUser = useAuth().isRefreshing;
  const refreshWater = useWater().isLoading;

  const dispatch = useDispatch();

  const activeDay = useSelector(selectActiveDay);

  useEffect(() => {
    dispatch(fetchWaterPerDay(activeDay));
  }, [dispatch, activeDay]);

  return (
    <div className={css.wrapper}>
      {(refreshUser || refreshWater) && <Loader absolute={true} />}

      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
}
