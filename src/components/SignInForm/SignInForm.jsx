import css from "./SignInForm.module.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user/userOperations";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Введіть дійсну email адресу")
    .required("Поле Email є обов'язковим"),
  password: yup
    .string()
    .required("Поле Password є обов'язковим")
    .min(6, "Пароль має містити принаймні 6 символів"),
});
export const SignInForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  return (
    <div className={css.loginContainer}>
      <Logo />
      <div className={css.formContainer}>
        <h1 className={css.title}>Sign In</h1>
        <form
          className={css.form}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            dispatch(loginUser(data));
            reset();
          })}
        >
          <label className={css.label}>Email</label>
          <input
            className={css.input}
            type="email"
            {...register("email", {
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please enter valid email",
              },
            })}
            placeholder="Enter your email"
            autoComplete="off"
          />
          {errors.email && (
            <span style={{ color: "rgba(239, 80, 80, 1)" }}>
              {errors.email.message}
            </span>
          )}

          <label className={css.label}>Password</label>
          <input
            className={css.input}
            type="password"
            {...register("password")}
            placeholder="Enter your Password"
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
          <button className={css.button} type="submit">
            Sign In
          </button>
        </form>
        <p className={css.description}>
          Don’t have an account?&nbsp;
          <NavLink className={css.link} to={"/signup"}>
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};
