import React, { useEffect, useState } from "react";
import handleWeather from "../weatherService";
import { useWeather } from "../context/WeatherContext";
import { useCity } from "../context/CityContext";
import DropdownList from "./Dropdown/DropdownList";
import WeatherCard from "./WeatherCard/WeatherCard";

function Home() {
  const { weatherInfo, setWeatherInfo } = useWeather();
  const { selectedCity } = useCity();
  const [isLoading, setIsLoading] = useState(false);
  const dayIndex = new Date().getDay();
  const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  // Get the printed days of the week starting from today
  const printedDays = weekDays.slice(dayIndex, dayIndex + 6);

  useEffect(() => {
    // Get the weather data when the selected city is changed
    const getWeatherInfo = async () => {
      setIsLoading(true);
      const res = await handleWeather(selectedCity);
      setWeatherInfo(res);
      setIsLoading(false);
    };
    getWeatherInfo();
  }, [selectedCity]);

  return (
    <div className="parent-container">
      {/* Render the dropdown list */}
      <DropdownList />

      {/* Render the weather container */}
      {isLoading ? (
        <p>Loading weather data...</p>
      ) : weatherInfo ? (
        <div className="wc-container">
          {/* Map through the weatherInfo array and render the WeatherCards */}
          {weatherInfo.map((item, index) => {
            return (
              <WeatherCard
                key={item.dt}
                class={index === 0 ? "weather-card selected" : "weather-card"}
                day={printedDays[index]}
                images={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                desc={item.weather[0].description}
                max={Math.round(item.main.temp_max)}
                min={Math.round(item.main.temp_min)}
              />
            );
          })}
        </div>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
}

export default Home;
