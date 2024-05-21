import { useState, useEffect } from "react";
import { AdvantagesSection } from "../../components/AdvantagesSection/AdvantagesSection";
import css from "./NotFoundPage.module.css";
import { NotFoundComponent } from "../../components/NotFoundComponent/NotFoundComponent";

export default function NotFoundPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={css.generalHomePage}>
      <NotFoundComponent />
      {windowWidth > 1439 && <AdvantagesSection />}
    </div>
  );
}
