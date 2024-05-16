import React, { useCallback, useEffect } from "react";
import Modal from "react-modal";
import css from "./globalModal.module.css";
import { MdClose } from "react-icons/md";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(47, 47, 47, 0.6)",
  },
};

Modal.setAppElement("#root");

export const GlobalModal = ({
  isOpen,
  onRequestClose,
  children,
  title,
  onRequestSave,
}) => {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onRequestClose();
      }
    },
    [onRequestClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      className={css.box}
      style={customStyles}
    >
      <div className={css.modalHeader}>
        <div className={css.textBox}>
          <p className={css.titleHeader}>{title}</p>
        </div>
        <div className={css.closeBtn}>
          <MdClose onClick={onRequestClose} size={"24px"} />
        </div>
      </div>
      {children}
      <btn className={css.saveBtn} onClick={onRequestSave}>
        <p className={css.saveBtnText}>Save</p>
      </btn>
    </Modal>
  );
};
