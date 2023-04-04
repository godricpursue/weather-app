import React from "react";
import cities from "../../env/cities"; // Import the list of cities from the 'cities' file
import { useCity } from "../../context/CityContext"; // Import the 'useCity' hook from the CityContext

function DropdownList() {
  const { selectedCity, setSelectedCity } = useCity(); // Access the 'selectedCity' and 'setSelectedCity' values from the CityContext

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
