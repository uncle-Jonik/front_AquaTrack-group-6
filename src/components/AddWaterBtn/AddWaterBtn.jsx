import { FaPlus } from "react-icons/fa6";
import css from "./AddWaterBtn.module.css";
import clsx from "clsx";
import { useState } from "react";
// import { WaterModal } from "../WaterModal/WaterModal.jsx";

export function AddWaterBtn({ section }) {
  const [showWaterModal, setshowWaterModal] = useState(false);
  const closeModal = () => setshowWaterModal(false);
  const classes = (mainClass) =>
    clsx(mainClass, {
      [css.waterMain]: section === "waterMain",
      [css.daily]: section === "daily",
    });

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
      {/* {showWaterModal && <WaterModal/>} */}
    </>
  );
}
