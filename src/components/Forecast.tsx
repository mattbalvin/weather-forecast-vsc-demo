import React from 'react';
import styled from 'styled-components';
import { ForecastData } from '../utils/weatherApi';

interface ForecastProps {
  forecast: ForecastData;
  units: 'metric' | 'imperial';
}

const ForecastWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const DayCard = styled.div`
  background: rgba(255,255,255,0.7);
  border-radius: 10px;
  padding: 1rem;
  min-width: 120px;
  text-align: center;
`;

const WeatherIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const getDay = (dt_txt: string) => {
  const date = new Date(dt_txt);
  return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
};

export const Forecast: React.FC<ForecastProps> = ({ forecast, units }) => {
  // OpenWeather returns 3-hour intervals; pick one per day (e.g., 12:00)
  const daily = forecast.list.filter((item) => item.dt_txt.includes('12:00:00'));
  const tempUnit = units === 'metric' ? '°C' : '°F';
  return (
    <ForecastWrapper aria-label="5 day forecast">
      {daily.map((item) => (
        <DayCard key={item.dt}>
          <div>{getDay(item.dt_txt)}</div>
          <WeatherIcon
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={item.weather[0].description}
          />
          <div>
            {Math.round(item.main.temp)}{tempUnit}
          </div>
          <div>{item.weather[0].main}</div>
        </DayCard>
      ))}
    </ForecastWrapper>
  );
};
