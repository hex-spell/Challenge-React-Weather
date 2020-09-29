import React from "react";
import {
  MainWeatherData,
  WeatherDescription,
} from "../../services/WeatherAPIContext/types";
import styles from "./WeatherDisplay.module.css";
import {
  makeIconUrl,
  kelvinToCelsius,
} from "../../services/WeatherAPIContext/helpers";

interface IWeatherDisplayProps {
  weather: WeatherDescription;
  city: string;
  country: string;
  main: MainWeatherData;
}

const WeatherDisplay: React.FC<IWeatherDisplayProps> = ({
  weather: { description, icon },
  city,
  country,
  main: { temp, temp_max, temp_min, feels_like, pressure, humidity },
}) => {
  return (
    <article className={styles.WeatherDisplay}>
      <div>
        <h1>
          {city} | {country}
        </h1>
        <h2>{description}</h2>
        <div className={styles.temp}>
          <img
            src={makeIconUrl(icon)}
            className={styles.icon}
            alt="Weather Icon"
          />
          {kelvinToCelsius(temp)}
        </div>
      </div>
      <div className={styles.list}>
        <ul>
          <li>Temperatura Máxima: {kelvinToCelsius(temp_max)}</li>
          <li>Temperatura Mínima: {kelvinToCelsius(temp_min)}</li>
          <li>Sensación Térmica: {kelvinToCelsius(feels_like)}</li>
        </ul>
        <ul>
          <li>Presión: {pressure} mbar</li>
          <li>Humedad: {humidity}%</li>
        </ul>
      </div>
    </article>
  );
};

export default WeatherDisplay;
