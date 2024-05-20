import css from './SignUpPage.module.css'

import { Logo } from '../../components/Logo'
import { SignUpForm } from '../../components/SignUpForm/SignUpForm'
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection'

export default function SignUpPage() {
  return (
    <div className={css.signUpPageWrapper}>
      <div className={css.signUpPageContainer}>
        <Logo />
        <SignUpForm />
      </div>

      <div className={css.AdvantagesSection_up}>
        <AdvantagesSection />
      </div>
    </div>
  )
}
