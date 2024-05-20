import { useSelector } from "react-redux";
import { selectWaterPerDay } from "../redux/water/waterSelectors";
import { useAuth } from "../hooks/useAuth";

export const Feasibility = () => {
  const day = useSelector(selectWaterPerDay).waterRecord;
  const user = useAuth().user;

  let totalValue = 0;
  day.forEach((i) => (totalValue += i.waterValue));

  if (totalValue >= Number(user.waterRate) * 1000) return 100;

  const feasibility = (totalValue / (Number(user.waterRate) * 1000)) * 100;
  return feasibility;
};
