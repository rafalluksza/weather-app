import React, { useState } from "react";
import { connect } from "react-redux";
import opencage from "opencage-api-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { addCity } from "../Redux/actions";

const API_KEY = "0c3d44c6993c417cacf9c6f22129858c";

const Search = ({ addCityToList }) => {
  const [inputControl, setInputControl] = useState("");
  // const [location, setLocation] = useState("");
  // console.log(inputControl);
  // console.log(location);

  const onChange = e => {
    setInputControl(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    getGeo();
  };

  const getGeo = () => {
    opencage
      .geocode({ q: inputControl, key: API_KEY })
      .then(data => {
        // console.log(data);
        // setLocation(data);
        addCityToList({
          title: `${data.results[0].components.city}`,
          latt_long: `${data.results[0].geometry.lat}, ${data.results[0].geometry.lng}`
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={e => onSubmit(e)}>
        <label className="input-label">
          <input
            className="input"
            name="city"
            type="text"
            placeholder="Add location"
            value={inputControl}
            onChange={e => onChange(e)}
          />
        </label>
        <button className="form-btn">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
};

const mapDispatch = dispatch => {
  return {
    addCityToList: city => dispatch(addCity(city))
  };
};

export default connect(null, mapDispatch)(Search);
