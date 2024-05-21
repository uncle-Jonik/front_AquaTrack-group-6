import css from "./SignUpPage.module.css";

import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { AdvantagesSection } from "../../components/AdvantagesSection/AdvantagesSection";

export default function SignUpPage() {
  return (
    <div className={css.signUpPageWrapper}>
      <SignUpForm />
      <div className={css.AdvantagesSection_up}>
        <AdvantagesSection />
      </div>
    </div>
  );
}
