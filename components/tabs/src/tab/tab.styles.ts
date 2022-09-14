import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useTabStyles = makeStyles({
  root: {
    position: 'relative',
    ...shorthands.margin('0'),
    paddingTop: tokens.spacingHorizontalS,
    paddingBottom: tokens.spacingHorizontalS,
    paddingLeft: tokens.spacingHorizontalL,
    paddingRight: tokens.spacingHorizontalL,
    display: 'inline-block',
    ...shorthands.borderColor('transparent'),
    ...shorthands.borderWidth(0),
    ...shorthands.borderStyle('none'),
    ...shorthands.borderRadius('0.25rem 0.25rem 0 0'),
    boxShadow: `0 0 0 -2px transparent`,
    backgroundColor: 'transparent',
    color: 'inherit',
    cursor: 'pointer',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    transitionProperty: 'box-shadow',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-1px',
      left: '-1px',
      height: 'calc(100% + 2px)',
      width: 'calc(100% + 2px)',
      boxShadow: `0 0 4px 1px transparent`,
      transitionProperty: 'box-shadow',
      transitionDuration: tokens.durationNormal,
      transitionTimingFunction: tokens.curveEasyEase,
      ...shorthands.borderRadius(tokens.borderRadiusMedium),
    },
    '&:focus': {
      outlineColor: 'initial',
      outlineStyle: 'none',
      outlineWidth: 'initial',
      position: 'relative',
    },
    '&:focus-visible': {
      '&::after': {
        boxShadow: `0 0 4px 2px ${tokens.colorBrandForeground1}`,
      },
    },
  },

  active: {
    backgroundColor: tokens.colorNeutralBackground1,
    fontWeight: tokens.fontWeightSemibold,
    boxShadow: `0 2px 0 0 ${tokens.colorBrandForeground1}`,
    '&:focus-visible': {
      boxShadow: `0 2px 0 0 transparent`,
    },
  },

  disabled: {
    opacity: '0.25',
    cursor: 'default',
  },
});
