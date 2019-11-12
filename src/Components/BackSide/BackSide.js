import React from "react";
import CitiesList from "./CitiesList";

export default ({ onClick, cities, currentCity, onSelect }) => {
  return (
    <div className="backSide-container">
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          onSelect={onSelect}
        />
        <button className="backBtn" onClick={onClick}>
          Back
        </button>

    </div>
  );
};
