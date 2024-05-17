import { Link } from "react-router-dom";
import css from "./SignUpForm.module.css";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser, loginUser } from "../../redux/user/userOperations";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Введіть дійсну email адресу")
    .required("Поле Email є обов'язковим"),
  password: yup
    .string()
    .required("Поле Password є обов'язковим")
    .min(6, "Пароль має містити принаймні 6 символів"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Паролі повинні співпадати"),
});
export function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
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
  const password = React.useRef({});
  password.current = watch("password", "");

  return (
    <div className={css.wrapper}>
      <div className={css.formContainer}>
        <p className={css.title}>Sign Up</p>
        <form
          className={css.form}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            dispatch(registerUser(data))
              .then((res) => {
                console.log(res);
                if (res.type === "auth/register/rejected")
                  throw new Error(res.payload);
                dispatch(loginUser(data));
              })
              .catch((err) => {
                console.log(err);
              });

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
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
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

          <label className={css.label}>Repeat Password</label>
          <input
            className={css.input}
            type="password"
            {...register("repeatPassword")}
            placeholder="Repeat Password"
          />
          {errors.repeatPassword && (
            <span style={{ color: "red" }}>
              {errors.repeatPassword.message}
            </span>
          )}

          <button className={css.button} type="submit">
            Sign Up
          </button>
        </form>
        <p className={css.description}>
          Already have an account?&nbsp;
          <Link to={"/signin"}>Sign In</Link>
        </p>
      </div>
    </div>
  );
}
