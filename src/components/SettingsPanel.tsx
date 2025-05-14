import React from 'react';
import styled from 'styled-components';
import { useSettings } from '../context/useSettings';

const Panel = styled.div`
  background: rgba(255,255,255,0.9);
  border-radius: 12px;
  padding: 2rem;
  max-width: 400px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Select = styled.select`
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
`;

const Slider = styled.input`
  width: 120px;
`;

const Toggle = styled.input`
  margin-left: 0.5rem;
`;

export const SettingsPanel: React.FC = () => {
  const { units, setUnits, theme, setTheme, fontSize, setFontSize, language, setLanguage } = useSettings();

  return (
    <Panel aria-label="Settings panel">
      <Row>
        <Label htmlFor="units">Units:</Label>
        <Select
          id="units"
          value={units}
          onChange={(e) => setUnits(e.target.value as 'metric' | 'imperial')}
        >
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
        </Select>
      </Row>
      <Row>
        <Label htmlFor="theme">Theme:</Label>
        <Toggle
          id="theme"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-checked={theme === 'dark'}
        />
        <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
      </Row>
      <Row>
        <Label htmlFor="fontSize">Font Size:</Label>
        <Slider
          id="fontSize"
          type="range"
          min={12}
          max={24}
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
        <span>{fontSize}px</span>
      </Row>
      <Row>
        <Label htmlFor="language">Language:</Label>
        <Select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'fr')}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </Select>
      </Row>
    </Panel>
  );
};
