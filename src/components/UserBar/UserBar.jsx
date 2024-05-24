import css from "./UserBar.module.css";
import defaultAvatar from "../../assets/img/avatar-default.svg";
import { UserBarPopover } from "../UserBarPopover/UserBarPopover.jsx";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { useAuth } from "../../hooks/useAuth.jsx";
export function UserBar() {
  const user = useAuth().user;

  const [showPopOver, setShowPopOver] = useState(false);

  const handleOutsideClick = (e) => {
    const isClickInsideModal = e.target.closest("#userSettingsModal");

    if (
      showPopOver &&
      !isClickInsideModal &&
      !e.target.closest("#userBar") &&
      e.target.tagName.toLowerCase() !== "svg"
    ) {
      setShowPopOver(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showPopOver]);

  return (
    <div id="userBar" style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        className={css.button}
        onClick={() => setShowPopOver(!showPopOver)}
      >
        <p className={css.name}>{user.name}</p>

        {
          <img
            className={css.avatar}
            src={!user.avatar ? defaultAvatar : user.avatar}
            alt="AVATAR"
          />
        }

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
