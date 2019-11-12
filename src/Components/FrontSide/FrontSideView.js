import React from "react";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faWind } from "@fortawesome/free-solid-svg-icons/faWind";

const FrontSideView = ({
  date,
  icon,
  temperature,
  windSpeed,
  summary,
  currentCityName,
  onClick
}) => {
  return (
    <div className="container">
      <div className="header">
        <div className="city">{`${currentCityName.title}`}</div>
        <div>
          <button className="btn" onClick={onClick}>
            <FontAwesomeIcon icon={faCog} />
          </button>
        </div>
      </div>
      <div className="main-container">
        <div className="time-item"> {date.format("h:mm")}</div>
        <div className="temp-item">
          {`${Number(temperature).toFixed(0)}`}&deg;
        </div>
        <WeatherIcon icon={icon} />
      </div>
      <div className="info-container">
        <div className="info-item">
          <span>
            <FontAwesomeIcon style={{ fontSize: "1rem" }} icon={faWind} />{" "}
            &nbsp;
          </span>
          {`${Number(windSpeed).toFixed(0)}`} <span>km/h</span>
        </div>
          <div className="info-item"> {summary} </div>

      </div>
      <div className="date-container">
        <div className="date-item">{date.format("dddd")}</div>
        <div className="date-item">{date.format("MMM Do")}</div>
      </div>
    </div>
  );
};

export default FrontSideView;
