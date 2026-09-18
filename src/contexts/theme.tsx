import { createContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeContextValue {
  themeName: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeName: 'light',
  toggleTheme: () => {}
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('themeName');

    if (storedTheme) {
      setThemeName(storedTheme);
    } else {
      setThemeName('light');
    }
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
