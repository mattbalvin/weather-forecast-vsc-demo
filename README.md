# Weather Forecast App

This is a React + Vite + TypeScript app that shows the current weather and a 5-day forecast for any city or zip code, using the OpenWeather API.

## Features

- Responsive design for mobile and desktop
- Search by city name or zip code
- Uses browser geolocation to show weather for your current location by default
- Shows current weather and 5-day forecast
- Background changes based on weather
- Loading and error states
- Settings panel:
  - Toggle units (Celsius/Fahrenheit)
  - Toggle theme (light/dark)
  - Font size slider
  - Language dropdown (English, Spanish, French)
- Accessible and uses semantic HTML
- Functional React components and hooks
- TypeScript throughout
- Styled with styled-components
- API keys and secrets via environment variables
- ESLint and Prettier for code quality
- Unit tests for key components and utilities

## Setup

1. Clone this repo
2. Run `npm install`
3. Copy `.env.sample` to `.env` and add your OpenWeather API key:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint
- `npm run format` — Run Prettier

## Testing

Unit tests are in `src/__tests__`. Run with:
```
npm test
```

## Notes

- Do **not** commit your `.env` file to version control.
- Works in latest Chrome, Firefox, and Safari.

---
Powered by [OpenWeather](https://openweathermap.org/)
