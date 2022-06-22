import * as React from 'react';
import { useMemo, useEffect } from 'react';
import type { FC } from 'react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import {
  ThemeContext,
  themeLight,
  themeDark,
  generateCSSVarTuples,
} from '@arbutus/style.theming';

import {
  useSegoeUI100,
  useSegoeUI200,
  useSegoeUI400,
  useSegoeUI600,
  useSegoeUI700,
} from '../../styles/fonts/src';
import { useGlobalStyles } from '../../styles/global/src';
import { useFrameClasses, useStoryStyles } from './frame.styles';

initializeIcons();

const altThemes = { light: themeLight, dark: themeDark };

/**
 * This is an alternative implementation of ThemeProvider specifically for Storybook.
 */
type FrameProps = { theme: keyof typeof altThemes };
export const Frame: FC<FrameProps> = ({ children, theme }) => {
  const setTheme = () => {
    // This is controlled in Storybook UI.
  };

  // Injecting CSS vars
  useEffect(() => {
    const cssVarTuples = generateCSSVarTuples(altThemes[theme]);

    cssVarTuples.forEach(([k, v]: [k: string, v: string]) =>
      document.documentElement.style.setProperty(k, v),
    );
  }, [theme]);

  // Styles
  useSegoeUI100();
  useSegoeUI200();
  useSegoeUI400();
  useSegoeUI600();
  useSegoeUI700();
  useGlobalStyles();
  useStoryStyles();
  const classes = useFrameClasses();

  return (
    <ThemeContext.Provider value={{ theme: altThemes[theme], setTheme, themeId: theme }}>
      <div className={classes.root}>{children}</div>
    </ThemeContext.Provider>
  );
};
