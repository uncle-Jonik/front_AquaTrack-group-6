import css from "./WaterItem.module.css";
import sprite from "../../assets/sprite.svg";

export function WaterItem({ item }) {
  const water =
    item.waterValue >= 999
      ? Math.round((item.waterValue / 1000) * 100) / 100 + " L"
      : item.waterValue + " ml";

  return (
    <div className={css.card}>
      <svg className={css.bottleIcon}>
        <use href={sprite + "#icon-water-glass"}></use>
      </svg>
      <div className={css.textBox}>
        <p className={css.ml}>{water}</p>
        <p className={css.time}>{item.localTime}</p>
      </div>
      <div className={css.btnBox}>
        <button className={css.button} type="button">
          <svg className={css.btnIcon}>
            <use href={sprite + "#icon-edit"}></use>
          </svg>
        </button>
        <button className={css.button} type="button">
          <svg className={css.btnIcon}>
            <use href={sprite + "#icon-trash"}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
