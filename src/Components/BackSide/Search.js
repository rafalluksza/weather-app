import React, { useState, useEffect } from "react";
import opencage from "opencage-api-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

const API_KEY = "0c3d44c6993c417cacf9c6f22129858c";

const Search = () => {
  const [location, setLocation] = useState("");

  const onChange = e => {
    setLocation(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    getGeo();
  };

  const getGeo = () => {
    opencage
      .geocode({ q: location, key: API_KEY })
      .then(data => {
        console.log(data);
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
            value={location}
            onChange={e => onChange(e)}
          />
        </label>
        <button className="form-btn"><FontAwesomeIcon icon={faArrowRight} /></button>
      </form>
    </div>
  );
};

export default Search;
