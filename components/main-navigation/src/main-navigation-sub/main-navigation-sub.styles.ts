import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useMainNavigationSubStyles = makeStyles({
  button: {
    ...shorthands.padding(0, tokens.spacingHorizontalM, 0, tokens.spacingHorizontalS),
    marginBottom: tokens.spacingHorizontalS,
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    textAlign: 'left',
    display: 'grid',
    gridTemplateColumns: `${tokens.spacingHorizontalL} auto`,
    columnGap: tokens.spacingHorizontalS,
    alignItems: 'center',
    width: '100%',
    height: tokens.spacingHorizontalXXXL,
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    ...shorthands.borderStyle('none'),
    ...shorthands.borderColor('transparent'),
    ...shorthands.borderRadius('0.5rem'),

    ':hover': {
      color: tokens.colorBrandForeground2,
      backgroundColor: tokens.colorBrandBackground2,
      '& svg': {
        color: tokens.colorBrandForeground2,
      },
      ':focus': {
        outlineColor: tokens.colorBrandForeground2,
      },
    },

    '&[data-state="open"]': {
      '& svg': {
        transform: 'rotate(90deg)',
      },
    },
  },
  subList: {
    paddingLeft: tokens.spacingHorizontalXXL,
  },
  toggle: {
    transitionProperty: 'transform',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
  },
  toggleExpanded: {
    transform: 'rotate(90deg)',
  },
  toggleIdle: {
    transform: 'rotate(0deg)',
  },
});
