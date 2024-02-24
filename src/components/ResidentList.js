// ResidentList.js
import React from 'react';

const ResidentList = ({ residents }) => {
  return (
    <div>
      <h2>Residents</h2>
      <ul>
        {residents.map((resident) => (
          <li key={resident.name}>{resident.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResidentList;
