import axios from "axios";

// Import the OpenWeatherMap API key from the environment variables
import apiKey from "./env/apiKey";

// Define a function that fetches weather information for a given city
export default async function handleWeather(city) {
  // Set the limit of search results to 1
  const limit = 1;

  try {
    // Use the OpenWeatherMap Geocoding API to get the latitude and longitude of the given city
    const {
      data: [{ lat, lon }],
    } = await axios(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${apiKey}`
    );

    // Use the latitude and longitude to get the weather forecast for the next 5 days
    const {
      data: { list },
    } = await axios(
      `//api.openweathermap.org/data/2.5/forecast?lat=${lat.toFixed(
        2
      )}&lon=${lon.toFixed(2)}&units=metric&appid=${apiKey}`
    );

    // Select the weather information for every 24 hours to get the forecast for 5 days
    const predictions = [
      list[0],
      list[8],
      list[16],
      list[24],
      list[32],
      list[39],
    ];

    // Return the weather information for the next 5 days
    return predictions;
  } catch (err) {
    // Log any errors that occur
    console.log(err);
  }
}
