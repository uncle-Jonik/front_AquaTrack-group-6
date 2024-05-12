import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        email: form.elements.email.value,
        password: form.elements.password.value,
        // repeat password:form.elements.repeat password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" placeholder="Enter your email" />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </label>
      <label className={css.label}>
        Repeat Password
        <input
          type="password"
          name="repeat password"
          placeholder="Repeat password"
        />
      </label>
      <button className={css.button} type="submit">
        Sign Up
      </button>
    </form>
  );
};
