import { FluentProvider } from '@fluentui/react-provider';
import type { Theme } from '@fluentui/react-theme';
import { createDarkTheme, createLightTheme } from '@fluentui/react-theme';
import { useCSSVars } from '@microsoft/arbutus.use-css-vars';
import { usePrefersColorScheme } from '@microsoft/arbutus.use-prefers-color-scheme';
import type { FC } from 'react';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';

import { ThemeContext } from './theme-context';
import { arbutusBrandRamp, arbutusTheme } from './themes';
import type { ThemeOption, ThemeProviderProps } from './theming.types';

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  brandVariants = arbutusBrandRamp,
  defaultTheme = 'light',
  themes: _themes,
  currentThemeKey: userThemeKey,
  setThemeKey: userSetThemeKey,
}) => {
  // Generating themes
  const defaultThemes: Record<ThemeOption, Theme> = useMemo(
    () => ({
      light: createLightTheme(brandVariants),
      dark: createDarkTheme(brandVariants),
    }),
    [brandVariants],
  );

  const themes = _themes ?? defaultThemes;

  // Getting preferred color scheme from the OS if set.
  const preferredTheme = usePrefersColorScheme();

  const themeOption: ThemeOption = preferredTheme ?? defaultTheme;

  // Controlled / Uncontrolled theme
  const isControlled = userThemeKey !== undefined;

  const [internalThemeKey, internalSetTheme] = useState<ThemeOption>(themeOption);

  useEffect(() => {
    if (!isControlled) {
      internalSetTheme(themeOption);
    }
  }, [preferredTheme, themeOption, isControlled]);

  const themeKey = isControlled ? userThemeKey : internalThemeKey;

  const setTheme = isControlled ? userSetThemeKey : internalSetTheme;

  const theme = themes[themeKey];

  // Injecting CSS Vars
  useCSSVars({ theme: arbutusTheme, currentThemeKey: themeKey, prefix: 'arbutus' });

  return (
    <ThemeContext.Provider value={{ setTheme, themeKey, theme }}>
      <FluentProvider theme={theme}>{children}</FluentProvider>
    </ThemeContext.Provider>
  );
};
