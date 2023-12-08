export const themeProvider = `import 'normalize.css';

import { makeStaticStyles } from '@griffel/react';
import {
  useSegoeUI100,
  useSegoeUI200,
  useSegoeUI400,
  useSegoeUI600,
  useSegoeUI700,
} from '@microsoft/arbutus.fonts';
import { ThemeProvider } from '@microsoft/arbutus.theming';
import type { FC } from 'react';
import React from 'react';

const useGlobalStyles = makeStaticStyles({
  '*': {
    boxSizing: 'border-box',
  },
  div: {
    width: '100%',
  },
});

export const Theme: FC = ({ children }) => {
  useSegoeUI100();
  useSegoeUI200();
  useSegoeUI400();
  useSegoeUI600();
  useSegoeUI700();
  useGlobalStyles();

  return <ThemeProvider>{children}</ThemeProvider>;
};`;
