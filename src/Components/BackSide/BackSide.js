import React from "react";
import CitiesList from "./CitiesList";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt} from "@fortawesome/free-solid-svg-icons/faUndoAlt";

export default ({ onClick, cities, currentCity, onSelect }) => {
  return (
    <div className="backSide-container">
      <div className="backSide-content">
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          onSelect={onSelect}
        />
        <Search />
        <button className="backBtn" onClick={onClick}>
          <FontAwesomeIcon icon={faUndoAlt}/>
        </button>
      </div>
    </div>
  );
};
