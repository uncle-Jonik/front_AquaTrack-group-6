import { AdvantagesSection } from "../../components/AdvantagesSection/AdvantagesSection";
import css from "./NotFoundPage.module.css";
import { NotFoundComponent } from "../../components/NotFoundComponent/NotFoundComponent";

export default function NotFoundPage() {
  return (
    <div className={css.generalHomePage}>
      <NotFoundComponent />
      <AdvantagesSection />
    </div>
  );
}
