import css from "./SignUpPage.module.css";

import { Logo } from "../../components/Logo";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";

export default function SignUpPage() {
  return (
    <div className={css.signUpPageWrapper}>
      <div className={css.signUpPageContainer}>
        <Logo />
        <SignUpForm />
      </div>
    </div>
  );
}
