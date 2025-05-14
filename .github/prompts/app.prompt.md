# Base instructions
- Create the full MVP, don't stop until it's done. Don't wait for the user to ask for the next step.
- Create it in this current directory, not a new directory.
- Create a .env file for my api keys and other secrets.

# Feature
- Create a react app that shows a 5 day weather forecast. Use react with vite and typescript.
- Use the OpenWeather API to get the weather data. You can use the free tier.
- Use Vite 6.3.1

# Functionality
- The app should show the current weather and a 5 day forecast.
- The app should be responsive and work on mobile and desktop.
- The app should have a search bar to search for a city or location using zip code. The app should try to use the geolocation API to get the user's current location and show the weather for that location by default.
- The app should show the weather data in a user friendly way.
- The background should change based on the weather data.
- The app should have a loading state while fetching the data.
- The app should have error handling for invalid city names or zip codes.
- The app should have a settings page with the following options
    - A toggle to change the units of measurement (Celsius/Fahrenheit).
    - A toggle to change the theme of the app (light/dark).
    - A slider to change the font size of the app.
    - A dropdown to change the language of the app (English, Spanish, French, etc.).
- Use semantic HTML and accessible ARIA attributes where appropriate.
- Use functional React components and React hooks.
- Use TypeScript for all source files.
- Use CSS modules or styled-components for styling; do not use plain CSS files.
- Do not commit the .env file to version control.
- Write clear and concise commit messages.
- Include a README.md with setup and usage instructions.
- Use environment variables for all API keys and secrets.
- Validate user input in the search bar.
- Use ESLint and Prettier for code formatting and linting.
- Write unit tests for key components and utility functions.
- Do not use any deprecated React APIs.
- Prefer open source libraries for UI components if needed.
- Ensure the app works in the latest versions of Chrome, Firefox, and Safari.
