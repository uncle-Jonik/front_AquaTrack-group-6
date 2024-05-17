import { WaterDetailedInfo } from "../../components/WaterDetailedInfo/WaterDetailedInfo.jsx";
// import { WaterMainInfo } from "../../components/WaterMainInfo/WaterMainInfo.jsx";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { useWater } from "../../hooks/useWater.jsx";
// import { fetchWaterPerDay } from "../../redux/water/waterOperations.js";

export default function TrackerPage() {
  //   const dispatch = useDispatch();
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
    <>
      {/* <WaterMainInfo /> */}
      <WaterDetailedInfo />
    </>
  );
}
