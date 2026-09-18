import { createContext, useCallback, useState, type ReactNode } from 'react';

type ThemeName = 'light' | 'dark';

interface ThemeContextValue {
  themeName: ThemeName;
  toggleTheme: () => void;
}

const THEME_STORAGE_KEY = 'themeName';

const getInitialTheme = (): ThemeName => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

const ThemeContext = createContext<ThemeContextValue>({
  themeName: 'light',
  toggleTheme: () => {}
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setThemeName((prev) => {
      const next: ThemeName = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // Ignore storage failures (e.g. private mode); theme still toggles in-memory.
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
