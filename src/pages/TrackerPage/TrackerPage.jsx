import css from "./TrackerPage.module.css";

import { WaterDetailedInfo } from "../../components/WaterDetailedInfo/WaterDetailedInfo.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useWater } from "../../hooks/useWater.jsx";
import { Loader } from "../../components/Loader/Loader.jsx";
import { WaterMainInfo } from "../../components/WaterMainInfo/WaterMainInfo.jsx";

export default function TrackerPage() {
  const refreshUser = useAuth().isRefreshing;
  const refreshWater = useWater().isLoading;

  return (
    <div className={css.wrapper}>
      {(refreshUser || refreshWater) && <Loader absolute={true} />}

      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
}
