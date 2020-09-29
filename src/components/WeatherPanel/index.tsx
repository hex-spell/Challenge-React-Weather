import React, { useContext } from "react";
import { WeatherAPIContext } from "../../services/WeatherAPIContext";
import WeatherDisplay from "./WeatherDisplay";

const WeatherPanel: React.FC = () => {
  const {
    isLoading,
    error,
    weatherData: {
      weather,
      name,
      main,
      sys: { country },
    },
  } = useContext(WeatherAPIContext);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <WeatherDisplay
      country={country}
      weather={weather[0]}
      city={name}
      main={main}
    />
  );
};

export default WeatherPanel;
