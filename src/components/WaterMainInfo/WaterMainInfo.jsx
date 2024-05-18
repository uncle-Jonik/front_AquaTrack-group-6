import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWaterPerDay, addWater } from "../../redux/water/waterOperations";
import { selectWaterPerDay } from "../../redux/water/waterSelectors";
import css from "./WaterMainInfo.module.css";
import { TiPlus } from "react-icons/ti";
import { Logo } from "../Logo";

const WaterMainInfo = () => {
  const dispatch = useDispatch();
  const waterPerDay = useSelector(selectWaterPerDay);
  const [waterLevel, setWaterLevel] = useState(0);

  useEffect(() => {
    const localDate = new Date().toISOString().split("T")[0];
    dispatch(fetchWaterPerDay(localDate));
  }, [dispatch]);

  useEffect(() => {
    if (waterPerDay && waterPerDay.waterRate && waterPerDay.waterRate.total) {
      const { total, consumed } = waterPerDay.waterRate;
      setWaterLevel((consumed / total) * 100);
    }
  }, [waterPerDay]);

  const handleAddWater = () => {
    const localDate = new Date().toISOString().split("T")[0];
    const localTime = new Date().toLocaleTimeString();
    const waterValue = 0.1;

    dispatch(addWater({ localDate, localTime, waterValue })).then(() => {
      dispatch(fetchWaterPerDay(localDate));
    });
  };

  return (
    <div className={css.WaterMainInfoWrapper}>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.wrapper}>
        <h2 className={css.title}>{waterPerDay.waterRate?.total} L</h2>

        <p className={css.text}>My daily norma</p>
      </div>
      <div className={css.img}>
        <img
          srcSet="/src/assets/img/bottle@1x.png 1x, /src/assets/img/bottle@2x.png 2x"
          src="photo.jpg"
          alt="Бутилка води"
        />
      </div>

      <div className={css.waterProgressBar}>
        <div className={css.titleBarBox}>
          <h2 className={css.barTitle}>Today</h2>

          <span className={css.progressLabel}>{Math.round(waterLevel)}%</span>
        </div>

        <input
          type="range"
          className={css.rangeInput}
          min="0"
          max="100"
          value={waterLevel}
          onChange={(e) => setWaterLevel(e.target.value)}
        />

        <div className={css.labels}>
          <span className={css.label}>0%</span>
          <span className={css.label}>50%</span>
          <span className={css.label}>100%</span>
        </div>
      </div>

      <button className={css.addWaterButton} onClick={handleAddWater}>
        <TiPlus />
        Add water
      </button>
    </div>
  );
};

export default WaterMainInfo;
