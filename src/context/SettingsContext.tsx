import React, { createContext, useState, ReactNode } from 'react';

export type Units = 'metric' | 'imperial';
export type Theme = 'light' | 'dark';
export type Language = 'en' | 'es' | 'fr';

interface SettingsContextProps {
  units: Units;
  setUnits: (units: Units) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [units, setUnits] = useState<Units>('metric');
  const [theme, setTheme] = useState<Theme>('light');
  const [fontSize, setFontSize] = useState<number>(16);
  const [language, setLanguage] = useState<Language>('en');

  return (
    <SettingsContext.Provider
      value={{ units, setUnits, theme, setTheme, fontSize, setFontSize, language, setLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
};


