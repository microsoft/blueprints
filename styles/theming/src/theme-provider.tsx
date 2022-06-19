import type { FC } from 'react';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';

import { generateCSSVarTuples } from './generate-css-vars';
import { ThemeContext } from './theme-context';
import { themeLight } from './themes';
import type { ThemeProviderProps } from './theming.types';

export const ThemeProvider: FC<ThemeProviderProps<'dark'>> = ({
  defaultTheme: theme = themeLight,
  altThemes,
  children,
}) => {
  const themes = useMemo(
    () => ({
      default: theme,
      ...altThemes,
    }),
    [theme, altThemes],
  );

  const [currentThemeID, setTheme] = useState<keyof typeof themes>('default');
  const currentTheme = useMemo(
    () => themes[currentThemeID] ?? theme,
    [theme, themes, currentThemeID],
  );

  useEffect(() => {
    const cssVarTuples = generateCSSVarTuples(currentTheme);

    cssVarTuples.forEach(([k, v]: [k: string, v: string]) =>
      document.documentElement.style.setProperty(k, v),
    );
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme, themeId: currentThemeID }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
