import css from "./UserBar.module.css";
import { UserBarPopover } from "../UserBarPopover/UserBarPopover.jsx";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

export function UserBar() {
  const [showPopOver, setShowPopOver] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        className={css.button}
        onClick={() => setShowPopOver(!showPopOver)}
      >
        <span className={css.name}>Catherine</span>
        <div className={css.avatar}></div>
        {showPopOver ? (
          <FaChevronUp className={css.icon} />
        ) : (
          <FaChevronDown className={css.icon} />
        )}
      </button>
      {showPopOver && <UserBarPopover />}
    </div>
  );
}
