import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/users" activeStyle={activeStyle} isActive={() => ['/users', '/'].includes(pathname)}  exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/login" activeStyle={activeStyle}>
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
