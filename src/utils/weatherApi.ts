import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  dt: number;
}

export interface ForecastData {
  list: Array<WeatherData & { dt_txt: string }>;
  city: {
    name: string;
    country: string;
  };
}

export const fetchCurrentWeather = async (
  query: string,
  units: string,
  lang: string
): Promise<WeatherData> => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: query,
      appid: API_KEY,
      units,
      lang,
    },
  });
  return res.data;
};

export const fetchWeatherByCoords = async (
  lat: number,
  lon: number,
  units: string,
  lang: string
): Promise<WeatherData> => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units,
      lang,
    },
  });
  return res.data;
};

export const fetchForecast = async (
  query: string,
  units: string,
  lang: string
): Promise<ForecastData> => {
  const res = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: query,
      appid: API_KEY,
      units,
      lang,
    },
  });
  return res.data;
};

export const fetchForecastByCoords = async (
  lat: number,
  lon: number,
  units: string,
  lang: string
): Promise<ForecastData> => {
  const res = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units,
      lang,
    },
  });
  return res.data;
};
