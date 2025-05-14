import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ themeMode: 'light' | 'dark'; fontSize: number }>`
  html {
    font-size: ${(props) => props.fontSize}px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    background: ${(props) =>
      props.themeMode === 'dark'
        ? 'linear-gradient(135deg, #232526 0%, #414345 100%)'
        : 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)'};
    color: ${(props) => (props.themeMode === 'dark' ? '#fff' : '#222')};
    min-height: 100vh;
    transition: background 0.5s, color 0.5s;
  }
  * {
    box-sizing: border-box;
  }
`;
