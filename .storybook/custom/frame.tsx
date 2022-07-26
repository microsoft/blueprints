import * as React from 'react';
import type { FC } from 'react';
import { ThemeProvider } from '@arbutus/style.theming';

import {
  useSegoeUI100,
  useSegoeUI200,
  useSegoeUI400,
  useSegoeUI600,
  useSegoeUI700,
} from '../../styles/fonts/src';
import { useFrameClasses, useStoryStyles } from './frame.styles';

type FrameProps = { theme: 'light' | 'dark' };
export const Frame: FC<FrameProps> = ({ children, theme }) => {
  useSegoeUI100();
  useSegoeUI200();
  useSegoeUI400();
  useSegoeUI600();
  useSegoeUI700();
  useStoryStyles();
  const classes = useFrameClasses();
  return (
    <div className={classes.provider}>
      <ThemeProvider currentThemeKey={theme}>
          <div className={classes.root}>{children}</div>
      </ThemeProvider>
    </div>
  );
};
