import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const CROWN_HEIGHT = '60px';

export const useCrownStyles = makeStyles({
  root: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: CROWN_HEIGHT,
    columnGap: tokens.spacingHorizontalM,
  },
  image: {
    width: 'auto',
    height: tokens.spacingHorizontalXXXL,
  },
  logo: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    columnGap: tokens.spacingHorizontalM,
  },
  interactive: {
    backgroundColor: 'transparent',
    borderLeftWidth: 'none',
    borderRightWidth: 'none',
    borderTopWidth: 'none',
    borderBottomWidth: 'none',
    borderLeftColor: 'none',
    borderRightColor: 'none',
    borderTopColor: 'none',
    borderBottomColor: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    cursor: 'pointer',
    position: 'relative',
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
      outlineStyle: 'none',
      '&::after': {
        boxShadow: `0 0 4px 2px ${tokens.colorBrandForeground1}`,
      },
    },
  },
});
