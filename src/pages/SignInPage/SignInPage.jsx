// import { Logo } from "../../components/Logo";
import css from "./SignInPage.module.css";
import { AdvantagesSection } from "../../components/AdvantagesSection/AdvantagesSection";
import { SignInForm } from "../../components/SignInForm/SignInForm";

export default function SignInPage() {
  return (
    <div className={css.generalSignInForm}>
      <SignInForm />
      <div className={css.AdvantagesSection_in}>
        <AdvantagesSection />
      </div>
    </div>
  );
}
