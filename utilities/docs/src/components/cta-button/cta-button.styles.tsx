import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const makeCTAButtonStyles = makeStyles({
  root: {
    display: 'inline-block',
    textDecorationLine: 'none',
    position: 'relative',
    paddingTop: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalM,
    paddingLeft: tokens.spacingVerticalL,
    paddingRight: tokens.spacingVerticalL,
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    color: tokens.colorNeutralForegroundInverted,
    boxShadow: tokens.shadow4,
    backdropFilter: 'blur(8px)',
    borderTopLeftRadius: '24px',
    borderBottomLeftRadius: '24px',
    borderTopRightRadius: '24px',
    borderBottomRightRadius: '24px',
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    fontWeight: tokens.fontWeightSemibold,
    transitionProperty: 'all',
    transitionDelay: '0.05s',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    cursor: 'pointer',

    '&:hover': {
      paddingRight: '44px',

      '& > svg': {
        opacity: 1,
      },
    },
  },

  icon: {
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0,
    position: 'absolute',
    right: tokens.spacingVerticalL,
    top: tokens.spacingVerticalL,
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
  },
});
