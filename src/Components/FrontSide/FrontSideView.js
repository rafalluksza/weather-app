import React from "react";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";

const FrontSideView = ({
  date,
  icon,
  temperature,
  currentCityName,
  onClick,
  data
}) => {
  // console.log(data);
  // console.log(icon);
  return (
    <div className={`card is-${icon}`}>
      <div className="header">
        <div className="city">{`${currentCityName.title}`}</div>
      </div>
      <div className="card-line" />
      <div className="main-container">
        <div className="time-item"> {date.format("h:mm")}</div>
        <div className="temp-item">
          {`${Number(temperature).toFixed(0)}`}&deg;
        </div>
        <WeatherIcon icon={icon} />
      </div>
      {/*<div className="info-container">*/}
      {/*  <div className="info-item">*/}
      {/*    <span>*/}
      {/*      <FontAwesomeIcon style={{ fontSize: "1rem" }} icon={faWind} />{" "}*/}
      {/*      &nbsp;*/}
      {/*    </span>*/}
      {/*    {`${Number(windSpeed).toFixed(0)}`} <span>km/h</span>*/}
      {/*  </div>*/}
      {/*  <div className="info-item"> {summary} </div>*/}
      {/*</div>*/}
      <div className="date-container">
        <div className="date-item">{date.format("dddd")}</div>
      </div>
      <div className="card-line" />

      <div className="nextDay-container">
        <div className="nextDay-item">
          <div className="item-date">{date.add(1, "days").format("dddd")}</div>
          <div className="item-temperature">
            {Number(data[0].apparentTemperatureHigh).toFixed(0)}&deg;
          </div>
          <div className="item-icon">
            <WeatherIcon icon={data[0].icon} />
          </div>
        </div>

        <div className="nextDay-item">
          <div className="item-date">{date.add(1, "days").format("dddd")}</div>
          <div className="item-temperature">
            {Number(data[1].apparentTemperatureHigh).toFixed(0)}&deg;
          </div>
          <div className="item-icon">
            <WeatherIcon icon={data[1].icon} />
          </div>
        </div>
      </div>
      <button className="btn" onClick={onClick}>
        <FontAwesomeIcon icon={faCog} />
      </button>
    </div>
  );
};

export default FrontSideView;
