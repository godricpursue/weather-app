import React from "react";
import cities from "../../env/cities";
import { useCity } from "../../context/CityContext";

function DropdownList() {
  const { selectedCity, setSelectedCity } = useCity();

  function handleSelectCity(event) {
    setSelectedCity(event.target.value);
  }

  return (
    <div className="drop-container">
      <div className="selectdiv">
        <select id="cities" value={selectedCity} onChange={handleSelectCity}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropdownList;
