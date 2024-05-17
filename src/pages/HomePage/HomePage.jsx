import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection'
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection'
import css from './HomePage.module.css'

export const HomePage = () => {
  return (
    <div className={css.generalHomePage}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  )
}
