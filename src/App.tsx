import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { SettingsProvider } from './context/SettingsContext';
import { useSettings } from './context/useSettings';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { Forecast } from './components/Forecast';
import { SettingsPanel } from './components/SettingsPanel';
import { Loader } from './components/Loader';
import { GlobalStyle } from './styles/GlobalStyle';
import { fetchCurrentWeather, fetchForecast, fetchWeatherByCoords, fetchForecastByCoords, WeatherData, ForecastData } from './utils/weatherApi';
import { useGeolocation } from './hooks/useGeolocation';

const AppContent: React.FC = () => {
  const { units, theme, fontSize, language } = useSettings();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const { location, error: geoError, loading: geoLoading } = useGeolocation();

  // Fetch weather by geolocation on mount
  useEffect(() => {
    if (location) {
      setLoading(true);
      setError(null);
      Promise.all([
        fetchWeatherByCoords(location.lat, location.lon, units, language),
        fetchForecastByCoords(location.lat, location.lon, units, language),
      ])
        .then(([weatherData, forecastData]) => {
          setWeather(weatherData);
          setForecast(forecastData);
        })
        .catch(() => setError('Could not fetch weather for your location.'))
        .finally(() => setLoading(false));
    }
    // intentionally not including setWeather/setForecast in deps
  }, [location, units, language]);

  const handleSearch = (query: string) => {
    setLoading(true);
    setError(null);
    Promise.all([
      fetchCurrentWeather(query, units, language),
      fetchForecast(query, units, language),
    ])
      .then(([weatherData, forecastData]) => {
        setWeather(weatherData);
        setForecast(forecastData);
      })
      .catch(() => setError('City or zip code not found.'))
      .finally(() => setLoading(false));
  };

  // Change background based on weather
  const getBg = () => {
    if (!weather) return theme;
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes('rain')) return 'linear-gradient(135deg, #667db6 0%, #0082c8 100%)';
    if (main.includes('cloud')) return 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)';
    if (main.includes('clear')) return 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)';
    if (main.includes('snow')) return 'linear-gradient(135deg, #e6dada 0%, #274046 100%)';
    return theme === 'dark'
      ? 'linear-gradient(135deg, #232526 0%, #414345 100%)'
      : 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)';
  };

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <GlobalStyle themeMode={theme} fontSize={fontSize} />
      <div style={{ minHeight: '100vh', background: getBg(), transition: 'background 0.5s' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
          <h1 style={{ margin: 0, fontSize: '2rem' }}>Weather Forecast</h1>
          <button
            onClick={() => setShowSettings((s) => !s)}
            aria-label="Open settings"
            style={{ fontSize: '1.2rem', borderRadius: 8, padding: '0.5rem 1rem', cursor: 'pointer' }}
          >
            ⚙️
          </button>
        </header>
        {showSettings && <SettingsPanel />}
        <main style={{ maxWidth: 600, margin: '0 auto', padding: '1rem' }}>
          <SearchBar onSearch={handleSearch} loading={loading} />
          {geoLoading || loading ? <Loader /> : null}
          {geoError && <div role="alert" style={{ color: '#d32f2f' }}>{geoError}</div>}
          {error && <div role="alert" style={{ color: '#d32f2f' }}>{error}</div>}
          {weather && <WeatherCard weather={weather} units={units} />}
          {forecast && <Forecast forecast={forecast} units={units} />}
        </main>
        <footer style={{ textAlign: 'center', padding: '1rem', opacity: 0.7 }}>
          <small>Powered by <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeather</a></small>
        </footer>
      </div>
    </ThemeProvider>
  );
};

const App: React.FC = () => (
  <SettingsProvider>
    <AppContent />
  </SettingsProvider>
);

export default App;
