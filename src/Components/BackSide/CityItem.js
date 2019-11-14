import React from "react";


const CityItem = ({city, index, isSelected, onSelect}) => {

    const onClick = () => {
        onSelect(city)
    };
    return (
        <li className={`list-item ${isSelected? "selected" : " "}`} key={index} onClick={onClick}>{city.title}</li>
    )
}

export default CityItem;