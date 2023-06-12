import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import type { ThemeOption } from '@microsoft/arbutus.theming';
import { ThemeProvider } from '@microsoft/arbutus.theming';
import type { FC } from 'react';
import * as React from 'react';
import type { WrapperProps } from '@microsoft/arbutus.component-preview';

const useWrapperStyles = makeStyles({
  root: {
    minHeight: '480px',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: '40px',
    paddingBottom: '40px',
    paddingLeft: '40px',
    paddingRight: '40px',
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

export const ExampleWrapper: FC<WrapperProps> = ({ children, themeKey }) => {
  const classes = useWrapperStyles();

  return (
    <ThemeProvider currentThemeKey={themeKey as ThemeOption}>
      <div className={classes.root}>{children}</div>
    </ThemeProvider>
  );
};
