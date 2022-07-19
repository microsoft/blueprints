import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useMainNavigationLinkStyles = makeStyles({
  root: {
    ...shorthands.padding(0, tokens.spacingHorizontalM, 0, tokens.spacingHorizontalXXXL),
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    display: 'grid',
    textAlign: 'left',
    alignItems: 'center',
    width: '100%',
    height: tokens.spacingHorizontalXXXL,
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    backgroundColor: 'transparent',
    ...shorthands.borderRadius('0.5rem'),
    '& button': {
      textAlign: 'left',
    },
    '& a': {
      textDecorationLine: 'none',
      color: tokens.colorNeutralForeground1,
    },
    ':hover': {
      backgroundColor: tokens.colorBrandBackground2,
      '& a': {
        color: tokens.colorBrandForeground2,
      },
      ':focus': {
        ...shorthands.outline('none'),
        boxShadow: 'var(--arbutus--shadow-focus)',
      },
    },
  },
  active: {
    backgroundColor: tokens.colorBrandBackground2,
    '& a': {
      color: tokens.colorBrandForeground2,
    },
  },
});
