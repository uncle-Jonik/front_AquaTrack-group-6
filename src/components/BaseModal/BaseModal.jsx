import Modal from "react-modal";
import css from "./BaseModal.module.css";

Modal.setAppElement("#root");

export const BaseModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
      overlayClassName={css.overlay}
    >
      <button type="button" className={css.close} onClick={() => onClose()}>
        <svg className={css.svgClose} width="28" height="28">
          <use xlinkHref={"../../assets/sprite.svg#icon-exit"}></use>
        </svg>
      </button>
      {children}
    </Modal>
  );
};
