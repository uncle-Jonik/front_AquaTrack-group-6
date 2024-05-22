import css from "./LogOutModal.module.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/user/userOperations";
import { ModalBtn } from "../ModalBtn/Modalbtn";
import toast from "react-hot-toast";

export const LogOutModal = ({ onRequestClose }) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    
    try {
      dispatch(logoutUser());
      toast.success(
        "Successfully log out!"
      );
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <p className={css.text}>Do you really want to leave?</p>
      <div className={css.box}>
        <ModalBtn text={"Log out"} onClick={onLogOut}></ModalBtn>
        <ModalBtn text={"Cancel"} onClick={onRequestClose}></ModalBtn>
      </div>
    </>
  );
};
