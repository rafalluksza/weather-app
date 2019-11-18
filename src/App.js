import React, { useState } from "react";
import FrontSide from "./Components/FrontSide";
import BackSide from "./Components/BackSide/BackSide";
import "./Styles/styles.scss";
import cities from "./cities.json";
import { Provider } from "react-redux";
import store from "./Components/Redux/store";

function App() {
  const [flipped, setFlipped] = useState(false);

  const [currentCity, setCurrentCity] = useState(cities[0]);

  const onFlip = () => {
    setFlipped(!flipped);
  };

  const onSelectCity = city => {
    setCurrentCity(city);
  };

  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
