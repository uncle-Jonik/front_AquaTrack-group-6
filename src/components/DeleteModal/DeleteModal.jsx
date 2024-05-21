import css from "./DeleteModal.module.css";
import { useDispatch } from "react-redux";
import { ModalBtn } from "../ModalBtn/Modalbtn";
import { deleteWater } from "../../redux/water/waterOperations";
import toast from "react-hot-toast";

export const DeleteModal = ({ onRequestClose, water }) => {
  const dispatch = useDispatch();

  const onDelete = () => {

    try {
      dispatch(deleteWater(water._id));
      toast.success(
        "The amount of water consumed has been successfully deleted."
      );
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
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
