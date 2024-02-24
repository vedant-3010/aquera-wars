import React from "react";
import "../styles/ResidentCard.css";

const ResidentCard = ({ resident, color }) => {
  return (
    <div
      className="resident-card"
      style={{
        borderBlockColor: color,
      }}
    >
      <h3>{resident.name}</h3>
      <div className="resident-info">
        <div className="info-item">
          <span>Height:</span>
          <span>{resident.height}</span>
        </div>
        <div className="info-item">
          <span>Mass:</span>
          <span>{resident.mass}</span>
        </div>
        <div className="info-item">
          <span>Gender:</span>
          <span>{resident.gender}</span>
        </div>
      </div>
    </div>
  );
};

export default ResidentCard;
