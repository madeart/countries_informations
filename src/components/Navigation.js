import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/a-propos"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>a propos</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
