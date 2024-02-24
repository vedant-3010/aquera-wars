// PlanetsPage.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlanets } from "../redux/PlanetsSlice";
import PlanetCard from "../components/PlanetCard";
import "../styles/PlanetsPage.css";

const PlanetsPage = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets.planets);
  const currentPage = useSelector((state) => state.planets.currentPage);
  const next = useSelector((state) => state.planets.next);
  const previous = useSelector((state) => state.planets.previous);
  const status = useSelector((state) => state.planets.status);

  const starWarsColors = [
    "#0000EE", // Star Wars Blue (duller)
    "#8B0000", // Star Wars Red (duller)
    "#008000", // Star Wars Green (duller)
    "#B0B0B0", // Star Wars Silver (duller)
    "#FFA07A", // Star Wars Orange (duller)
    "#80FFFF", // Star Wars Cyan (duller)
    "#FFC0B0", // Star Wars Pink (duller)
    "#FF6666", // Star Wars Hot Pink (duller)
  ];

  useEffect(() => {
    dispatch(fetchPlanets(currentPage));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    if (next) {
      dispatch(fetchPlanets(currentPage + 1));
    }
  };

  const handlePreviousPage = () => {
    if (previous) {
      dispatch(fetchPlanets(currentPage - 1));
    }
  };

  return (
    <div>
      <div className="planets-flex-container">
        <div className="planets-container">
          {status === "loading" ? (
            <div className="loading-spinner spinner"/>
          ) : (
            planets.map((planet, index) => (
              <PlanetCard
                key={planet.name}
                planet={planet}
                color={starWarsColors[index % starWarsColors.length]}
              />
            ))
          )}
        </div>
      </div>
      {status !== "loading" && (
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={!previous}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={!next}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PlanetsPage;
