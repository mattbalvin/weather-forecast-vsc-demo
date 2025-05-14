import { render } from '@testing-library/react';
import { WeatherCard } from '../components/WeatherCard';
import { WeatherData } from '../utils/weatherApi';

describe('WeatherCard', () => {
  const mockWeather: WeatherData = {
    name: 'Paris',
    main: { temp: 20, temp_min: 18, temp_max: 22, humidity: 60 },
    weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
    wind: { speed: 3 },
    dt: 123456,
  };

  it('renders city name and temperature', () => {
    const { getByText } = render(<WeatherCard weather={mockWeather} units="metric" />);
    expect(getByText(/Paris/)).toBeInTheDocument();
    expect(getByText(/20°C/)).toBeInTheDocument();
  });
});
