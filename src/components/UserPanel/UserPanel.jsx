import css from "./UserPanel.module.css";
import { useAuth } from "../../hooks/useAuth.jsx";
import { UserBar } from "../UserBar/UserBar.jsx";

export function UserPanel() {
  const user = useAuth().user;

  return (
    <div className={css.userPanel}>
      <h1 className={css.greeting}>
        Hello<b>, {user.name}!</b>
      </h1>
      <UserBar />
    </div>
  );
}
