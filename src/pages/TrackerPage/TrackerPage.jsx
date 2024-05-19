import css from "./TrackerPage.module.css";

import { WaterDetailedInfo } from "../../components/WaterDetailedInfo/WaterDetailedInfo.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useWater } from "../../hooks/useWater.jsx";
import { Loader } from "../../components/Loader/Loader.jsx";
import { WaterMainInfo } from "../../components/WaterMainInfo/WaterMainInfo.jsx";
import { useDispatch } from "react-redux";
import { fetchWaterPerDay } from "../../redux/water/waterOperations.js";
import { useEffect } from "react";

export default function TrackerPage() {
  const refreshUser = useAuth().isRefreshing;
  const refreshWater = useWater().isLoading;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWaterPerDay());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {(refreshUser || refreshWater) && <Loader absolute={true} />}

      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
}
