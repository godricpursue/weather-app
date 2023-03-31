import "./App.css";
import Home from "./components/Home";

import { WeatherProvider } from "./context/WeatherContext";
import { CityProvider } from "./context/CityContext";
function App() {
  return (
    <div className="App">
      <CityProvider>
        <WeatherProvider>
          <Home />
        </WeatherProvider>
      </CityProvider>
    </div>
  );
}

export default App;
