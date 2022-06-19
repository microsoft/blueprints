import { createContext } from 'react';

import { themeLight } from './themes';
import type { ThemeContextValue } from './theming.types';

export const ThemeContext = createContext<ThemeContextValue>({
  theme: themeLight,
  themeId: 'default',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});
