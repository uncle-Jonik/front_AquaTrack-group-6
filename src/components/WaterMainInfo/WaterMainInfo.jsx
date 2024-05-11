import css from "./WaterMainInfo.module.css";
import { TiPlus } from "react-icons/ti";

const WaterMainInfo = () => {
  return (
    <div className={css.WaterMainInfoWrapper}>
      <div className={css.wrapper}>
        <h2 className={css.title}>1.5 L</h2>
        <p className={css.text}>My daily norma</p>
      </div>
      <div className={css.img}>
        <img src="/src/assets/img/bottle@1x.png" alt="Бутилка води" />
      </div>
      <button>
        <TiPlus />
        Add water
      </button>
    </div>
  );
};

export default WaterMainInfo;
