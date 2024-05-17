import css from "./Loader.module.css";
import { BounceLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className={css.container}>
      <BounceLoader color="#9BE1A0" size={150} />
    </div>
  );
};
