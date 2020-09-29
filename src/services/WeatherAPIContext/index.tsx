import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  WeatherDataModel,
  WeatherAPIError,
  IWeatherContextStore,
} from "./types";
import {
  initialWeatherAPIState,
  initialWeatherState,
} from "./initialWeatherState";

const weatherApiUrl =
  process.env.REACT_APP_WEATHER_API ||
  "http://api.openweathermap.org/data/2.5/weather";

const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

const weatherAPILang = process.env.REACT_APP_WEATHER_API_LANG;

// desde acá defino la ciudad que quiero mostrar en la app por ahora
const cityName = "necochea";

export const WeatherAPIContext = createContext<IWeatherContextStore>(
  initialWeatherAPIState
);

// context que obtiene datos de la api de clima de openweather
const WeatherAPIContextProvider: React.FC = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataModel>(
    initialWeatherState
  );

  const [isLoading, setLoadingState] = useState(true);

  const [error, setError] = useState("");

  const getWeather = useCallback(() => {
    setLoadingState(true);
    axios
      .get(weatherApiUrl, {
        params: { q: cityName, appid: weatherAPIKey, lang: weatherAPILang },
      })
      .then((res: AxiosResponse<WeatherDataModel>) => setWeatherData(res.data))
      .catch((err: AxiosError<WeatherAPIError>) => {
        if (err.response) {
          setError(err.response.data.message);
        }
      })
      .finally(() => setLoadingState(false));
  }, [setLoadingState]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  const store = useMemo(
    () => ({
      weatherData,
      isLoading,
      error,
    }),
    [error, isLoading, weatherData]
  );

  return (
    <WeatherAPIContext.Provider value={store}>
      {children}
    </WeatherAPIContext.Provider>
  );
};

export default WeatherAPIContextProvider;
