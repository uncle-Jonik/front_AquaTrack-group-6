import { Link } from "react-router-dom";

import { Logo } from "../Logo";
import css from "./WelcomeSection.module.css";

export const WelcomeSection = () => {
  return (
    <div className={css.welcomeBox}>
      <Logo />
      <div>
        <p className={css.welcomePhrase}>Record daily water intake and track</p>
        <h1 className={css.welcomeName}>Water consumption tracker</h1>
        <div className={css.welcomeButton_blok}>
          <Link to="/signup" className={css.welcomeButton_tracker}>
            Try tracker
          </Link>

          <Link to="/signin" className={css.welcomeButton_sign}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
