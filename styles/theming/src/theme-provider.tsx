import { useCSSVars } from '@arbutus/hook.use-css-vars';
import { usePrefersColorScheme } from '@arbutus/hook.use-prefers-color-scheme';
import { FluentProvider } from '@fluentui/react-provider';
import type { Theme } from '@fluentui/react-theme';
import { createDarkTheme, createLightTheme } from '@fluentui/react-theme';
import type { FC } from 'react';
import * as React from 'react';
import { useMemo, useState } from 'react';

import { ThemeContext } from './theme-context';
import { arbutusBrandRamp, arbutusTokens } from './themes';
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

  const themeKey = isControlled ? userThemeKey : internalThemeKey;

  const setTheme = isControlled ? userSetThemeKey : internalSetTheme;

  const theme = themes[themeKey];

  // Injecting CSS Vars
  useCSSVars({ theme: arbutusTokens[themeKey], prefix: 'arbutus' });

  return (
    <ThemeContext.Provider value={{ setTheme, themeKey: themeOption, theme }}>
      <FluentProvider theme={theme}>{children}</FluentProvider>
    </ThemeContext.Provider>
  );
};
