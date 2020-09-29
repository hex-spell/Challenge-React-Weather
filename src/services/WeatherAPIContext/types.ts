export type MainWeatherData = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type WeatherDescription = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherDataModel = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherDescription[];
  base: string;
  main: MainWeatherData;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type WeatherAPIError = {
  cod: string;
  message: string;
};

export interface IWeatherContextStore {
  weatherData: WeatherDataModel;
  error: string;
  isLoading: boolean;
}
