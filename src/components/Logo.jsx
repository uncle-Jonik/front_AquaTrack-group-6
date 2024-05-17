import css from "./Logo.module.css";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className={css.logoFont}>
      AQUATRACK
    </Link>
  );
};
