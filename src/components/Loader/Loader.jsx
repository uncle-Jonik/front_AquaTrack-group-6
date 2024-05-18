import clsx from "clsx";
import css from "./Loader.module.css";

import { PuffLoader } from "react-spinners";

export const Loader = ({ absolute }) => {
  return (
    <div className={clsx(css.container, { [css.absolute]: absolute })}>
      <PuffLoader color="#9BE1A0" size={150} speedMultiplier={2} />
    </div>
  );
};
