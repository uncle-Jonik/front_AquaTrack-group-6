import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection'
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection'
import css from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={css.generalHomePage}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
}
