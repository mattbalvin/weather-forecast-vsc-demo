# Weather Forecast App

This is a React + Vite + TypeScript sample app based on a [Visual Studio Code Agent Mode Demo](https://www.youtube.com/watch?v=uG5Vcjr5vxQ) that shows the current weather and a 5-day forecast for any city or zip code, using the OpenWeather API.

## Features

- Responsive design for mobile and desktop
- Search by city name
- Uses browser geolocation to show weather for your current location by default
- Shows current weather and 5-day forecast
- Background changes based on weather

## Setup

1. Clone this repo
2. Run `npm install`
3. Get an OpenWeather API key (Free tier is fine for test purposes).
4. Copy `.env.sample` to `.env` and add your OpenWeather API key:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
5. Start the dev server:
   ```
   npm run dev
   ```
6. Open [http://localhost:5173](http://localhost:5173) in your browser

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

- Do **not** commit your `.env` file to version control. It is in the `.gitignore` file to avoid accidents.
- Works in latest Chrome, Firefox, and Safari.

---
Powered by [OpenWeather](https://openweathermap.org/)
