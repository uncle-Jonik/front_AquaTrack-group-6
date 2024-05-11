import css from "./SharedLayout.module.css";

const SharedLayout = ({ children }) => {
  return (
    <div className={css.mainWrapper}>
      <div className={css.LayoutWrupper}>{children}</div>
    </div>
  );
};

export default SharedLayout;
