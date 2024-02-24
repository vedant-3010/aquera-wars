import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchResidents } from "../redux/ResidentSlice";
import ResidentModal from "./ResidentModal";
import "../styles/PlanetCard.css";
const PlanetCard = ({ planet, color }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [residents, setResidents] = useState([]);
  const dispatch = useDispatch();

  const toggleModal = async () => {
    setIsModalOpen(!isModalOpen);
    if (!residents.length) {
      const fetchedResidents = await dispatch(fetchResidents(planet.residents));
      setResidents(fetchedResidents.payload);
    }
  };

  return (
    <div className="planet-card" style={{ borderBlockColor: color }}>
      <h2>{planet.name}</h2>
      <div className="planet-info">
        <div className="info-item">
          <span>Climate: </span>
          <span>{planet.climate}</span>
        </div>
        <div className="info-item">
          <span>Population: </span>
          <span>{planet.population}</span>
        </div>
        <div className="info-item">
          <span>Terrain: </span>
          <span>
            {planet.terrain.length > 20
              ? `${planet.terrain.substring(0, 22)}...`
              : planet.terrain}
          </span>
        </div>
        <div className="info-item">
          <span>Gravity: </span>
          <span>{planet.gravity}</span>
        </div>
      </div>
      <button className="resident-button" onClick={toggleModal}>
        Residents
      </button>
      <ResidentModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        residents={residents}
      />
    </div>
  );
};

export default PlanetCard;
