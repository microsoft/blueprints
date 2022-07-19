import { useCSSVars } from '@arbutus/hook.use-css-vars';
import { usePrefersColorScheme } from '@arbutus/hook.use-prefers-color-scheme';
import { FluentProvider } from '@fluentui/react-provider';
import type { Theme } from '@fluentui/react-theme';
import { createDarkTheme, createLightTheme } from '@fluentui/react-theme';
import type { FC } from 'react';
import * as React from 'react';
import { useState } from 'react';

import { ThemeContext } from './theme-context';
import { arbutusBrandRamp, arbutusTokens } from './themes';
import type { ThemeOption, ThemeProviderProps } from './theming.types';

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  brandVariants = arbutusBrandRamp,
  defaultTheme = 'light',
  themes: _themes,
}) => {
  useCSSVars({ theme: arbutusTokens, prefix: 'arbutus' });

  const defaultThemes: Record<ThemeOption, Theme> = {
    light: createLightTheme(brandVariants),
    dark: createDarkTheme(brandVariants),
  };
  const themes = _themes ?? defaultThemes;

  const preferredTheme = usePrefersColorScheme();

  const themeOption: ThemeOption = preferredTheme ?? defaultTheme;
  const [currentThemeKey, setTheme] = useState<ThemeOption>(themeOption);
  const theme = themes[currentThemeKey];

  return (
    <ThemeContext.Provider value={{ setTheme, themeKey: themeOption, theme }}>
      <FluentProvider theme={theme}>{children}</FluentProvider>
    </ThemeContext.Provider>
  );
};
