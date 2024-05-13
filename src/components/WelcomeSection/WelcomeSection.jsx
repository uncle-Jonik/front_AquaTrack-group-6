import { Logo } from '../Logo'
import css from './WelcomeSection.module.css'

export const WelcomeSection = () => {
  return (
    <div className={css.welcomeBox}>
      <Logo />
      <div>
        <p className={css.welcomePhrase}>Record daily water intake and track</p>
        <h1 className={css.welcomeName}>Water consumption tracker</h1>
        <div className={css.welcomeButton_blok}>
          <button className={css.welcomeButton_tracker}>
            <p>Try tracker</p>
          </button>
          <button className={css.welcomeButton_sign}>
            <p>Sign In</p>
          </button>
        </div>
      </div>
    </div>
  )
}
