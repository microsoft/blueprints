import { createLightTheme } from '@fluentui/react-theme';
import { createContext } from 'react';

import { arbutusBrandRamp } from './themes';
import type { ThemeContextValue, ThemeOption } from './theming.types';

const defaultThemeKey: ThemeOption = 'light';

export const ThemeContext = createContext<ThemeContextValue>({
  theme: createLightTheme(arbutusBrandRamp),
  themeKey: defaultThemeKey,
});
