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
          <button className={css.welcomeButton_tracker}>
            <Link to="/signup">Try tracker</Link>
          </button>
          <button className={css.welcomeButton_sign}>
            <Link to="/signin">Sign In</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
