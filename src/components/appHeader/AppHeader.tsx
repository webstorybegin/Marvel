import { NavLink } from "react-router-dom";

import "./appHeader.scss";

export const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <NavLink
          to="/Marvel"
        >
          <span>Marvel</span> information portal
        </NavLink>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              to="/Marvel"
              style={({ isActive }) => ({
                color: isActive ? "#9F0013" : "inherit",
              })}
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              to="/comics"
              style={({ isActive }) => ({
                color: isActive ? "#9F0013" : "inherit",
              })}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
