import css from "./DeleteModal.module.css";
import { useDispatch } from "react-redux";
import { ModalBtn } from "../ModalBtn/Modalbtn";
import { deleteWater } from "../../redux/water/waterOperations";

export const DeleteModal = ({ onRequestClose, water }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteWater(water._id));
  };

  return (
    <>
      <p className={css.text}>Are you sure you want to delete the entry?</p>
      <div className={css.box}>
        <ModalBtn text={"Delete"} onClick={onDelete}></ModalBtn>
        <ModalBtn text={"Cancel"} onClick={onRequestClose}></ModalBtn>
      </div>
    </>
  );
};
