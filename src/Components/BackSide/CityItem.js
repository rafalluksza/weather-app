import React from "react";


const CityItem = ({city, isSelected, onSelect}) => {

    const onClick = () => {
        onSelect(city)
    };

    return (
        <li className={`list-item ${isSelected? "selected" : " "}`} key={city.woeid} onClick={onClick}>{city.title}</li>
    )
}

export default CityItem;