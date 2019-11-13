import React from "react";
import CitiesList from "./CitiesList";

export default ({ onClick, cities, currentCity, onSelect }) => {
  return (
    <div className="backSide-container">
      <div className="backSide-content">
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          onSelect={onSelect}
        />
        <button className="backBtn" onClick={onClick}>
          Back
        </button>
      </div>
    </div>
  );
};
