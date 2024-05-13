import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Welcome!!!</h2>
      <Link to="/signin">Login</Link>
    </div>
  );
}
