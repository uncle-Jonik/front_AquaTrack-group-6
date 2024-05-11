import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <div>
      <h2>WelcomeSection</h2>
      <Link to="/tracker">
        <button>Try tracker</button>
      </Link>
    </div>
  );
};

export default WelcomeSection;
