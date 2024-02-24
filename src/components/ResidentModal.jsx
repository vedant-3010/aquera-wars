import React from "react";
import "../styles/ResidentModal.css";
import ResidentCard from "./ResidentCard";

const ResidentModal = ({ isOpen, onClose, residents }) => {
  if (!isOpen) return null;
  const starWarsColors = [
    "#0000EE",
    "#8B0000",
    "#008000",
    "#B0B0B0",
    "#FFA07A",
    "#80FFFF",
    "#FFC0B0",
    "#FF6666",
  ];
  return (
    <div className="resident-modal-overlay">
      <div className="resident-modal">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <h2>Residents</h2>
        <div className="residents-container">
          {residents.length === 0 ? (
            <p>Loading...</p>
          ) : residents === null ? (
            <p>No residents</p>
          ) : (
            residents.map((resident, index) => (
              <ResidentCard
                key={index}
                resident={resident}
                color={starWarsColors[index % starWarsColors.length]}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ResidentModal;
