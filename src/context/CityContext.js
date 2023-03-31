import { createContext, useContext, useState } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("Adana");

  const values = {
    selectedCity,
    setSelectedCity,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);
