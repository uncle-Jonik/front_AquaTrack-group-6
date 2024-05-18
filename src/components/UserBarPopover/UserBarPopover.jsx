import css from "./UserBarPopover.module.css";
import sprite from "../../assets/sprite.svg";

export function UserBarPopover() {
  return (
    <div className={css.popover}>
      <button type="button" className={css.button}>
        <svg className={css.icon} stroke="#323f47">
          <use href={sprite + "#icon-settings"}></use>
        </svg>
        Settings
      </button>
      <button type="button" className={`${css.button} ${css.logOutBtn}`}>
        <svg className={css.icon}>
          <use href={sprite + "#icon-log-out"}></use>
        </svg>
        Log out
      </button>
    </div>
  );
}
