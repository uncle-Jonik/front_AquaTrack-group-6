import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TrackerPage from "./pages/TrackerPage/TrackerPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tracker" element={<TrackerPage />} />
    </Routes>
  );
};

export default App;
