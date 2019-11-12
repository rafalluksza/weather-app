import React, { useEffect, useState} from "react";
import FrontSideView from "./FrontSideView";
import moment from "moment";
import { getWeatherForLocation } from "../../api";

const FrontSide = ({onClick, currentCity}) => {

    const [weather, setWeather] = useState(null)

    console.log(currentCity)
    useEffect(()=> {
        getWeatherForLocation(currentCity)
            .then(w => {
            setWeather(w.currently);
        })
            .catch( err => console.log(err))
    },[currentCity]);
    console.log(weather)

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
        currentCityName={currentCity}
        onClick={onClick}
      />
    </>
  );
};

export default FrontSide;
