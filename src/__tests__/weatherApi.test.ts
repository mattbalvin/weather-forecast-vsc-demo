import { fetchCurrentWeather } from '../utils/weatherApi';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchCurrentWeather', () => {
  it('fetches weather data for a city', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { name: 'Berlin' } });
    const data = await fetchCurrentWeather('Berlin', 'metric', 'en');
    expect(data.name).toBe('Berlin');
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});
