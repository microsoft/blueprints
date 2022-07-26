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
    ...shorthands.borderRadius('0.5rem'),
    cursor: 'pointer',
    backgroundColor: 'transparent',
    ...shorthands.borderStyle('none'),
    ...shorthands.borderColor('transparent'),
    '& button': {
      textAlign: 'left',
      backgroundColor: 'transparent',
      ...shorthands.borderStyle('none'),
      ...shorthands.borderColor('transparent'),
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
        outlineColor: tokens.colorBrandForeground2,
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
