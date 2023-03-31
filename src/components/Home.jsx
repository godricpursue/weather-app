import React from "react";

import DropdownList from "./Dropdown/DropdownList";
import WeatherCard from "./WeatherCard/WeatherCard";
function Home() {
  return (
    <div className="parent-container">
      <DropdownList />
      <div className="wc-container">
        <WeatherCard day="Thu" images="./WeatherPNG/gunesli.png" max="20" min="12"/>
        <WeatherCard day="Fri" images="./WeatherPNG/parcali.png" max="20" min="12"/>
        <WeatherCard day="Sat" images="./WeatherPNG/yagmurlu.png" max="20" min="12"/>
        <WeatherCard day="Sun" images="./WeatherPNG/yagmurlu.png" max="20" min="12"/>
        <WeatherCard day="Mon" images="./WeatherPNG/yagmurlu.png" max="20" min="12"/>
        <WeatherCard day="Tue" images="./WeatherPNG/karli.png" max="20" min="12"/>
        <WeatherCard day="Wed" images="./WeatherPNG/yagmurlu.png" max="20" min="12"/>
        <WeatherCard day="Thu" images="./WeatherPNG/parcali.png" max="20" min="12"/>
      </div>
    </div>
  );
}

export default Home;
