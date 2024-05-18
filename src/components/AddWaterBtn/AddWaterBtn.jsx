import { FaPlus } from "react-icons/fa6";
import css from "./AddWaterBtn.module.css";
import clsx from "clsx";
import { useState } from "react";
// import { BaseModal } from "../BaseModal/BaseModal";
// import { WaterModal } from "../WaterModal/WaterModal";
// import { WaterModal } from "../WaterModal/WaterModal.jsx";

export function AddWaterBtn({ section }) {
  const [showWaterModal, setshowWaterModal] = useState(false);
  const closeModal = () => setshowWaterModal(false);
  const classes = (mainClass) =>
    clsx(mainClass, {
      [css.waterMain]: section === "waterMain",
      [css.daily]: section === "daily",
    });

  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };
  // const onCloseModal = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      <button
        onClick={() => setshowWaterModal(true)}
        type="button"
        className={classes(css.wrapper)}
      >
        <FaPlus className={classes(css.plusIcon)} />
        <p className={classes(css.text)}>Add water</p>
      </button>

      {/* <button onClick={openModal} type="button" className={classes(css.wrapper)}>
        <FaPlus className={classes(css.plusIcon)} />
        <p className={classes(css.text)}>Add water</p>
      </button>

      <BaseModal isOpen={isOpen} onClose={onCloseModal}>
        <WaterModal mode={"add"} onClose={onCloseModal} />
      </BaseModal> */}

      {/* {showWaterModal && <WaterModal/>} */}
    </>
  );
}
