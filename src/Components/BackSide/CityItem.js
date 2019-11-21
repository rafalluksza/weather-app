import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { deleteCity } from "../Redux/actions";

const CityItem = ({ city, isSelected, onSelect, deleteCity,index }) => {
  // console.log()

  const handleSelect = () => {
    onSelect(city);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();

    deleteCity(index);
  };

  return (
    <li className={`list-item ${isSelected ? "selected" : " "}`}>
      <div onClick={handleSelect}>{city.title}</div>
      <button className="btn-del" onClick={e => handleDelete(e, index)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
};

const mapDispatch = dispatch => {
  return {
    deleteCity: id => dispatch(deleteCity(id))
  };
};

export default connect(null, mapDispatch)(CityItem);
