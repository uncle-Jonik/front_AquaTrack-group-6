import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Link, NavLink } from "react-router-dom";
import css from "./SignUpForm.module.css";

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        email: form.elements.email.value,
        password: form.elements.password.value,
        repeat: form.elements.repeat.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <Link to="/">Home</Link>
      <div className={css.formContainer}>
        <h1 className={css.title}>Sign Up</h1>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
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
          <label className={css.label}>
            Repeat Password
            <input
              className={css.input}
              type="password"
              name="repeat password"
              placeholder="Repeat password"
            />
          </label>
          <button className={css.button} type="submit">
            Sign Up
          </button>
        </form>
        <p className={css.description}>
          Already have an account?&nbsp;
          <NavLink className={css.link} to={"/signin"}>
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
};
