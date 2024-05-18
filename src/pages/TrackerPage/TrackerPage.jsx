import css from "./TrackerPage.module.css";

import { WaterDetailedInfo } from "../../components/WaterDetailedInfo/WaterDetailedInfo.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useWater } from "../../hooks/useWater.jsx";
// import { WaterMainInfo } from "../../components/WaterMainInfo/WaterMainInfo.jsx";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { useWater } from "../../hooks/useWater.jsx";
// import { fetchWaterPerDay } from "../../redux/water/waterOperations.js";
import { Loader } from "../../components/Loader/Loader.jsx";

export default function TrackerPage() {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useSelector(selectIsRefreshing);

  const refreshUser = useAuth().isRefreshing;
  const refreshWater = useWater().isLoading;
  //   const water = useWater();

  //   useEffect(() => {
  //     const date = new Date();
  //     dispatch(
  //       fetchWaterPerDay(
  //         `${date.getDate()}.0${date.getMonth()}.${date.getFullYear()}`
  //       )
  //     );
  //   }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {(refreshUser || refreshWater) && <Loader absolute={true} />}

      {/* <WaterMainInfo /> */}
      <WaterDetailedInfo />
    </div>
  );
}
