import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import css from "./SignUpForm.module.css";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser, loginUser } from "../../redux/user/userOperations";
import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email field is required"),
  password: yup
    .string()
    .required("Password field is required")
    .min(6, "Password must contain at least 6 characters"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
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
      <Logo />
      <div className={css.formContainer}>
        <p className={css.title}>Sign Up</p>
        <form
          className={css.form}
          onSubmit={handleSubmit(async (data) => {
            try {
              const resultAction = await dispatch(registerUser(data)).then(
                (res) => {
                  if (res.type === "auth/register/rejected")
                    throw new Error(res.payload);
                  dispatch(loginUser(data));
                  toast.success("You were successfully signed up!");
                }
              );

              if (registerUser.fulfilled.match(resultAction)) {
                toast.success("You were successfully signed up!");
                reset();
              } else if (registerUser.rejected.match(resultAction)) {
                toast.error("Something went wrong. Please try again.");
              }
            } catch (error) {
              toast.error("Unexpected error. Please try again.");
            }
          })}
        >
          <label className={css.label}>Email</label>
          <div className={css.input_field}>
            <input
              required={true}
              className={`${css.input} ${errors.email ? css.error : ""}`}
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
              <span className={css.errors}>{errors.email.message}</span>
            )}
          </div>
          <label className={css.label}>Password</label>
          <div className={css.input_field}>
            <input
              required={true}
              className={`${css.input} ${errors.password ? css.error : ""}`}
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Enter your Password"
            />
            {errors.password && (
              <span className={css.errors}>{errors.password.message}</span>
            )}
            {!showPassword && (
              <svg
                className={css.icon_eye}
                onClick={() => setShowPassword(!showPassword)}
              >
                <use
                  width={20}
                  height={20}
                  xlinkHref={`${sprite}#icon-eye-off`}
                ></use>
              </svg>
            )}

            {showPassword && (
              <svg
                className={css.eyeIconOff}
                onClick={() => setShowPassword(!showPassword)}
              >
                <use
                  width={20}
                  height={20}
                  xlinkHref={`${sprite}#icon-eye`}
                ></use>
              </svg>
            )}
          </div>
          <label className={css.label}>Repeat Password</label>
          <div className={css.input_field}>
            <input
              required={true}
              className={`${css.input} ${
                errors.repeatPassword ? css.error : ""
              }`}
              type={showPassword ? "text" : "password"}
              {...register("repeatPassword")}
              placeholder="Repeat Password"
            />
            {errors.repeatPassword && (
              <span className={css.errors}>
                {errors.repeatPassword.message}
              </span>
            )}

            {!showPassword && (
              <svg
                className={css.icon_eye}
                onClick={() => setShowPassword(!showPassword)}
              >
                <use
                  width={20}
                  height={20}
                  xlinkHref={`${sprite}#icon-eye-off`}
                ></use>
              </svg>
            )}

            {showPassword && (
              <svg
                className={css.eyeIconOff}
                onClick={() => setShowPassword(!showPassword)}
              >
                <use
                  width={20}
                  height={20}
                  xlinkHref={`${sprite}#icon-eye`}
                ></use>
              </svg>
            )}
          </div>

          <button className={css.button} type="submit">
            Sign Up
          </button>
        </form>
        <p className={css.description}>
          Already have an account?&nbsp;
          <Link className={css.link} to={"/signin"}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
