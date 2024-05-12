import css from "./WaterMainInfo.module.css";
import { TiPlus } from "react-icons/ti";
import { useState } from "react";

const WaterMainInfo = () => {
  const [waterLevel, setWaterLevel] = useState(0);

  const handleAddWater = () => {
    setWaterLevel((prevLevel) => prevLevel + 10);
  };

  return (
    <div className={css.WaterMainInfoWrapper}>
      <div className={css.wrapper}>
        <h2 className={css.title}>1.5 L</h2>
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
        <h2 className={css.barTitle}>Today</h2>
        <input
          type="range"
          className={css.rangeInput}
          min="0"
          max="100"
          value={waterLevel}
          onChange={(e) => setWaterLevel(e.target.value)}
        />
        <span className={css.progressLabel}>{waterLevel}%</span>
      </div>

      <button onClick={handleAddWater}>
        <TiPlus />
        Add water
      </button>
    </div>
  );
};

export default WaterMainInfo;
