import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo" onClick={() => navigate("/")}>
          MGNREGA Dashboard
        </h2>

        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/About")}>About</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
