import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className={`navbar dark-mode`}>
      <ul className="navList">
        <li className="navItem">
          <Link to="/">
            <a className={`navLink dark-mode`}>AqueraWars</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
