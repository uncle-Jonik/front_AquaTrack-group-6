import css from "./UserBarPopover.module.css";
import sprite from "../../assets/sprite.svg";
import { GlobalModal } from "../globalModal/globalModal";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm";
import { useState } from "react";

export function UserBarPopover() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={css.popover}>
        <button type="button" className={css.button} onClick={handleOpenModal}>
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

      <GlobalModal
        isOpen={isModalOpen}
        title={"Setting"}
        onRequestClose={handleCloseModal}
      >
        <UserSettingsForm onClose={handleCloseModal} />
      </GlobalModal>
    </>
  );
}
