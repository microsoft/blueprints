import * as React from 'react';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import { ThemeProvider, useTheme, themeLight, themeDark } from '@arbutus/style.theming';
import {
  useSegoeUI100,
  useSegoeUI200,
  useSegoeUI400,
  useSegoeUI600,
  useSegoeUI700,
} from '../../styles/fonts/src';
import { useGlobalStyles } from '../../styles/global/src';
import { useFrameClasses, useStoryStyles, useThemeSwitchStyles } from './frame.styles';

initializeIcons();

const themes = { light: themeLight, dark: themeDark };

const ThemeSwitch = () => {
  const classes = useThemeSwitchStyles();

  const { setTheme } = useTheme();
  const turnLight = () => setTheme('default');
  const turnDark = () => setTheme('dark');

  return (
    <div className={classes.root}>
      <button className={classes.button} onClick={turnLight}>
        ☀️ Light theme
      </button>
      <button className={classes.button} onClick={turnDark}>
        🌒 Dark theme
      </button>
    </div>
  );
};

export const Frame = ({ children }) => {
  useSegoeUI100();
  useSegoeUI200();
  useSegoeUI400();
  useSegoeUI600();
  useSegoeUI700();
  useGlobalStyles();
  useStoryStyles();

  const classes = useFrameClasses();

  return (
    <ThemeProvider altThemes={themes}>
      <div className={classes.root}>
        <nav className={classes.nav}>
          <ThemeSwitch />
        </nav>
        <div className={classes.canvas}>{children}</div>
      </div>
    </ThemeProvider>
  );
};
