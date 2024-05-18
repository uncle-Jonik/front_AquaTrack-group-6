import css from "./ModalBtn.module.css";

export const ModalBtn = () => {
  return (
    <button className={css.saveBtn} type="submit">
      <p className={css.saveBtnText}>Save</p>
    </button>
  );
};
