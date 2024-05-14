import css from "./UserPanel.module.css";
import { UserBar } from "../UserBar/UserBar.jsx";

export function UserPanel() {
  return (
    <div className={css.userPanel}>
      <h1 className={css.greeting}>
        Hello<b>, Name!</b>
      </h1>
      <UserBar />
    </div>
  );
}
