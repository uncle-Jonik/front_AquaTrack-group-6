import css from "./Loader.module.css";
import { PuffLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className={css.container}>
      <PuffLoader color="#9BE1A0" size={150} speedMultiplier={2} />
    </div>
  );
};
