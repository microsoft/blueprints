export type FontSizes = {
  micro: string;
  small: string;
  medium: string;
  large: string;
  jumbo: string;
};

export type Breakpoints = {
  /** This is the smallest supported size */
  micro: string;
  xxs: string;
  xs: string;
  small: string;
  medium: string;
  large: string;
};

export type FontWeights = {
  light: string;
  semilight: string;
  regular: string;
  medium: string;
  bold: string;
};

export type SpaceUnit = `${number}rem`;
export type SpaceScale = {
  ['1']: SpaceUnit;
  ['2']: SpaceUnit;
  ['3']: SpaceUnit;
  ['4']: SpaceUnit;
  ['5']: SpaceUnit;
  ['6']: SpaceUnit;
  ['7']: SpaceUnit;
  ['8']: SpaceUnit;
  ['9']: SpaceUnit;
  ['10']: SpaceUnit;
  ['11']: SpaceUnit;
  ['12']: SpaceUnit;
};

export type ColorScheme = {
  text: string;
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  positive: string;
  negative: string;
  warning: string;
  ['background-positive']: string;
  ['background-negative']: string;
  ['background-warning']: string;
  tile: string;
  border: string;
  background: string;
  overlay: string;
  'border-shadow': string;
  'overlay-accent': string;
  'brand-accent': string;
  'brand-action': string;
  'brand-secondary': string;
};

export type ColorVar = `var(--color-${string | number})`;

export type Theme = {
  color: ColorScheme;
  shape: {
    'corner-radius': string;
  };
  shadow: {
    popover: string;
    cards: string;
    focus: string;
  };
  font: {
    weight: {
      light: string;
      semilight: string;
      regular: string;
      medium: string;
      bold: string;
    };
    size: FontSizes;
    ['line-height']: FontSizes;
  };
  space: SpaceScale;
  transition: {
    duration: string;
    ['timing-function']: string;
  };
  breakpoint: Breakpoints;
  layout: Breakpoints;
};

export type ThemeProviderProps<Key extends string> = {
  defaultTheme?: Theme;
  altThemes?: Record<Key, Theme>;
  children: JSX.Element | JSX.Element[];
};

export type ThemeContextValue = {
  theme: Theme;
  themeId: string;
  setTheme: (theme?: unknown) => void;
};
