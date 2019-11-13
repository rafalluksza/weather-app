import React from "react";


export  default ({icon}) => {
    return <img className="icon" src={`/icons/${icon}.svg`} alt="weather icon" />
}