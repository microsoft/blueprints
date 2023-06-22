import 'normalize.css';

import { tokens } from '@fluentui/react-theme';
import { makeStaticStyles } from '@griffel/react';
import {
  useSegoeUI100,
  useSegoeUI200,
  useSegoeUI400,
  useSegoeUI600,
  useSegoeUI700,
} from '@microsoft/arbutus.fonts';
import { ThemeProvider } from '@microsoft/arbutus.theming';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

const useGlobalStyles = makeStaticStyles({
  '*': {
    boxSizing: 'border-box',
  },
  // This prevents the default link underline on the nav items, but should be removed when MainNavigation passes that
  // style override to the Link component.
  a: {
    textDecoration: 'none',
  },
  body: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

export const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  useSegoeUI100();
  useSegoeUI200();
  useSegoeUI400();
  useSegoeUI600();
  useSegoeUI700();
  useGlobalStyles();

  return <ThemeProvider>{children}</ThemeProvider>;
};
