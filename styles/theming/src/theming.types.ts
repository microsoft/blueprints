import type { BrandVariants, Theme } from '@fluentui/react-theme';
import type { ColorScheme } from '@microsoft/arbutus.use-prefers-color-scheme';
import type { ReactNode } from 'react';

export type ThemeOption = ColorScheme;

export type ThemeProviderProps = {
  defaultTheme?: ThemeOption;
  brandVariants?: BrandVariants;
  themes?: Record<ThemeOption, Theme>;
  currentThemeKey?: ThemeOption;
  children?: ReactNode | undefined;
  setThemeKey?: (themeKey: ThemeOption) => void;
};

export type ThemeContextValue = {
  theme: Theme;
  themeKey: ThemeOption;
  setTheme?: (themeKey: ThemeOption) => void;
};
