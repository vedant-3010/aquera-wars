// Aquerawars.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/HomePage.css"; // Import the HomePage.css file

const Aquerawars = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1 className="home-title">
          Welcome to Aquerawars
          <br className="" />
          <span className="home-subtitle">
            The Ultimate Star Wars Experience
          </span>
        </h1>
        <p className="home-description">
          Dive into the Star Wars Universe with Aquerawars! Explore the
          galaxies, meet iconic characters, and embark on thrilling adventures.
        </p>
        <div className="home-buttons">
          <Link to="/planets" className="home-button">
            Go to Planets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Aquerawars;
