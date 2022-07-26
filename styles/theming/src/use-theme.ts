import { useContext } from 'react';

import { ThemeContext } from './theme-context';

export const useTheme = () => {
  const { theme, themeKey, setTheme } = useContext(ThemeContext);

  return { theme, themeKey, setTheme };
};
