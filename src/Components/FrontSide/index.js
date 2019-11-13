import React, { useEffect, useState } from "react";
import FrontSideView from "./FrontSideView";
import moment from "moment";
import { getWeatherForLocation } from "../../api";

const FrontSide = ({ onClick, currentCity }) => {
  const [weather, setWeather] = useState(null);
  const [daily, setDaily] = useState(null);

  console.log(daily);
  console.log(weather);
  useEffect(() => {
    getWeatherForLocation(currentCity)
      .then(w => {
        setDaily(w.daily);
        setWeather(w.currently);
      })
      .catch(err => console.log(err));
  }, [currentCity]);
  // console.log(weather);

  if (!weather) {
    return null;
  }

  return (
    <>
      <FrontSideView
        date={moment()}
        icon={weather.icon}
        temperature={weather.temperature}
        windSpeed={weather.windSpeed}
        summary={weather.summary}
        data={daily.data}
        currentCityName={currentCity}
        onClick={onClick}
      />
    </>
  );
};

export default FrontSide;
