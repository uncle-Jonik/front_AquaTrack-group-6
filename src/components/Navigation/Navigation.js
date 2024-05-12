import { useAuth } from "../../hooks";

import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/water">Contacts</NavLink>}
    </nav>
  );
};
