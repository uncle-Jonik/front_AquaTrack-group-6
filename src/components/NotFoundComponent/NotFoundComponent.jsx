import { Link } from "react-router-dom";
import cactus from "../../assets/img/cactus-svgrepo-com.svg";
import { Logo } from "../Logo";
import css from "./NotFoundComponent.module.css";

export const NotFoundComponent = () => {
  return (
    <div className={css.welcomeBox}>
      <Logo />
      <div className={css.welcomeBox2}>
        <img src={cactus} alt="Cactus" className={css.img} />
        <h1 className={css.welcomeName}>Page not found</h1>
        <h1 className={css.welcomeName2}>404</h1>
        <div className={css.welcomeButton_blok}>
          <Link to="/" className={css.welcomeButton_tracker}>
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};
