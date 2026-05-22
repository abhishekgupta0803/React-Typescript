import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      style={{
        padding: "16px 24px",
        backgroundColor: "#1e293b",
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#38bdf8" : "#ffffff",
                textDecoration: "none",
                fontWeight: "bold",
              })}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/trad"
              style={({ isActive }) => ({
                color: isActive ? "#38bdf8" : "#ffffff",
                textDecoration: "none",
                fontWeight: "bold",
              })}
            >
              FetchOld
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/infinite"
              style={({ isActive }) => ({
                color: isActive ? "#38bdf8" : "#ffffff",
                textDecoration: "none",
                fontWeight: "bold",
              })}
            >
              Infinite Scroll
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/rq"
              style={({ isActive }) => ({
                color: isActive ? "#38bdf8" : "#ffffff",
                textDecoration: "none",
                fontWeight: "bold",
              })}
            >
              FetchRQ
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;