import React from "react";
import CityItem from "./CityItem";
import { connect } from "react-redux";

const CitiesList = ({ cities, currentCity, onSelect }) => {
  return (
    <ul className="cities-list">
      {cities.map((city,index) => {
        return (
          <CityItem
            key={index}
            index={index}
            city={city}
            isSelected={currentCity.title === city.title}
            onSelect={onSelect}
          />
        );
      })}
    </ul>
  );
};

const mapState = state => {
  return {
    cities: state
  };
};

export default connect(mapState)(CitiesList);
