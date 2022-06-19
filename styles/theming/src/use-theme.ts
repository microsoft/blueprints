import { useContext } from 'react';

import { ThemeContext } from './theme-context';

export const useTheme = () => {
  const { theme, themeId, setTheme } = useContext(ThemeContext);

  return { theme, themeId, setTheme };
};
