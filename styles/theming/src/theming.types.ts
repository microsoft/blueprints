import type { ColorScheme } from '@arbutus/hook.use-prefers-color-scheme';
import type { BrandVariants, Theme } from '@fluentui/react-theme';

export type ThemeOption = ColorScheme;

export type ThemeProviderProps = {
  defaultTheme?: ThemeOption;
  brandVariants?: BrandVariants;
  themes?: Record<ThemeOption, Theme>;
  children: JSX.Element | JSX.Element[];
  currentThemeKey?: ThemeOption;
  setThemeKey?: (themeKey: ThemeOption) => void;
};

export type ThemeContextValue = {
  theme: Theme;
  themeKey: ThemeOption;
  setTheme?: (themeKey: ThemeOption) => void;
};
