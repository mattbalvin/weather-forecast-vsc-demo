import { useState, useEffect } from 'react';

export interface Geolocation {
  lat: number;
  lon: number;
}

export function useGeolocation() {
  const [location, setLocation] = useState<Geolocation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLoading(false);
      },
      () => {
        setError('Unable to retrieve your location');
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading };
}
