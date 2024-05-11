import SharedLayout from "../../components/SharedLayout";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";

const HomePage = () => {
  return (
    <SharedLayout>
      <WelcomeSection />
      <AdvantagesSection />
    </SharedLayout>
  );
};

export default HomePage;
