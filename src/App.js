import React, { useState } from "react";
import FrontSide from "./Components/FrontSide";
import BackSide from "./Components/BackSide/BackSide";
import "./Styles/styles.scss"
import cities from "./cities.json";

function App() {
  const [flipped, setFlipped] = useState(true);

  const [currentCity, setCurrentCity] = useState(cities[0]);

  const onFlip = () => {
    setFlipped(!flipped);
  };

  const onSelectCity = city => {
    setCurrentCity(city);
  };

  return (
    <>
      <div className={`panel ${flipped ? "flip" : ""}`}>
        <div className="panel-front">
          <FrontSide onClick={onFlip} currentCity={currentCity} />
        </div>
        <div className="panel-back">
          {" "}
          <BackSide
            onClick={onFlip}
            currentCity={currentCity}
            cities={cities}
            onSelect={onSelectCity}
          />{" "}
        </div>
      </div>
    </>
  );
}

export default App;
