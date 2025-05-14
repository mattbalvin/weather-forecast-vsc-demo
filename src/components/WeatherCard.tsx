import React from 'react';
import styled from 'styled-components';
import { WeatherData } from '../utils/weatherApi';

interface WeatherCardProps {
  weather: WeatherData;
  units: 'metric' | 'imperial';
}

const Card = styled.div`
  background: rgba(255,255,255,0.8);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Temp = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

const WeatherIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const Info = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather, units }) => {
  const tempUnit = units === 'metric' ? '°C' : '°F';
  return (
    <Card aria-label="Current weather">
      <h2>{weather.name}</h2>
      <WeatherIcon
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <Temp>
        {Math.round(weather.main.temp)}{tempUnit}
      </Temp>
      <Info>{weather.weather[0].description}</Info>
      <Info>Humidity: {weather.main.humidity}%</Info>
      <Info>Wind: {weather.wind.speed} {units === 'metric' ? 'm/s' : 'mph'}</Info>
    </Card>
  );
};
