import React from "react";

function WeatherCard(props) {
  return (
    <div className={props.class}>
      <p>{props.day}</p>
      <div className="image">
        <img src={props.images} alt={props.desc} />
      </div>
      <p id="desc">{props.desc}</p>
      <p>
        <span id="max">{props.max}°</span> <span id="min">{props.min}°</span>
      </p>
    </div>
  );
}

export default WeatherCard;
