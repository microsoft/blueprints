import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useAsideNavigationLinkStyles = makeStyles({
  root: {
    ...shorthands.padding(0, tokens.spacingHorizontalS),
    textAlign: 'left',
    height: tokens.lineHeightBase600,
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    backgroundColor: 'transparent',
    ...shorthands.borderRadius('0.5rem'),
    ':hover': {
      backgroundColor: tokens.colorBrandBackground2,
      '& > *': {
        color: tokens.colorBrandForeground2,
      },
      ':focus': {
        ...shorthands.outline('none'),
        boxShadow: 'var(--arbutus--shadow-focus)',
      },
    },
  },
  active: {
    fontWeight: tokens.fontWeightSemibold,
  },
});
