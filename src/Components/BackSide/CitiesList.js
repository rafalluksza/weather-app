import React from "react";
import CityItem from "./CityItem";

export default ({ cities, currentCity, onSelect }) => {
  return (
    <ul className="cities-list">
      {cities.map(city => {
        return (
          <CityItem city={city} isSelected={currentCity.title === city.title} onSelect={onSelect} />
        );
      })}
    </ul>
  );
};
