import { themeLight } from './themes/light';
import type { ColorScheme, ColorVar } from './theming.types';

type ColorVars = Record<keyof ColorScheme, ColorVar | never>;
export const colorVars: ColorVars = Object.keys(themeLight.color).reduce(
  (acc, key: keyof ColorScheme) => {
    acc[key] = `var(--color-${key})` as ColorVar;

    return acc;
  },
  {} as ColorVars,
);
