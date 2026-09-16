import { createContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeContextValue {
  themeName: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeName: 'dark',
  toggleTheme: () => {}
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('themeName');

    if (storedTheme) {
      setThemeName(storedTheme);
    } else {
      setThemeName('dark');
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
