import SharedLayout from "../../components/SharedLayout";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";

const TrackerPage = () => {
  return (
    <SharedLayout>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </SharedLayout>
  );
};

export default TrackerPage;
