import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user/userOperations";
import { NavLink } from "react-router-dom";
import css from "./SignInForm.module.css";

export const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.formContainer}>
        <h1 className={css.title}>Sign In</h1>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>
            Email
            <input
              className={css.input}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>
          <label className={css.label}>
            Password
            <input
              className={css.input}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </label>

          <button className={css.button} type="submit">
            Sign In
          </button>
        </form>
        <p className={css.description}>
          Already have an account?&nbsp;
          <NavLink className={css.link} to={"/signup"}>
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};
