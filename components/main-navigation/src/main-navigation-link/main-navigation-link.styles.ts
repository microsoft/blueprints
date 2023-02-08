import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useMainNavigationLinkStyles = makeStyles({
  root: {
    ...shorthands.padding(0, tokens.spacingHorizontalM, 0, tokens.spacingHorizontalXXXL),
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: tokens.colorNeutralForeground1,
    cursor: 'pointer',
    display: 'grid',
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    height: tokens.spacingHorizontalXXXL,
    lineHeight: tokens.lineHeightBase300,
    marginBottom: tokens.spacingHorizontalS,
    marginTop: tokens.spacingHorizontalS,
    paddingLeft: tokens.spacingHorizontalXXL,
    textAlign: 'left',
    textDecorationLine: 'none',
    transitionDuration: tokens.durationNormal,
    transitionProperty: 'all',
    transitionTimingFunction: tokens.curveEasyEase,
    width: '100%',
    ...shorthands.borderRadius('0.5rem'),
    ...shorthands.borderStyle('none'),
    ...shorthands.borderColor('transparent'),
    ...shorthands.borderStyle('none'),
    ...shorthands.borderColor('transparent'),
    ':hover': {
      backgroundColor: tokens.colorBrandBackground2,
      color: tokens.colorBrandForeground2,
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
