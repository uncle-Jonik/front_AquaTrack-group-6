import css from "./UserBarPopover.module.css";
import sprite from "../../assets/sprite.svg";

export function UserBarPopover() {
  return (
    <div className={css.popover}>
      <button type="button" className={css.button} style={{ color: "#323f47" }}>
        <svg className={css.icon} stroke="#323f47">
          <use href={sprite + "#icon-settings"}></use>
        </svg>
        Settings
      </button>
      <button
        type="button"
        className={css.button}
        style={{ color: "rgba(50, 63, 71, 0.4)" }}
      >
        <svg className={css.icon} stroke="rgba(50, 63, 71, 0.4)">
          <use href={sprite + "#icon-log-out"}></use>
        </svg>
        Log out
      </button>
    </div>
  );
}
