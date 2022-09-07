import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useCommandStyles = makeStyles({
  root: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: tokens.spacingHorizontalXL,
    paddingRight: 0,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground6,
    display: 'grid',
    gridTemplateColumns: 'auto 44px',
    columnGap: tokens.spacingHorizontalM,
    overflowX: 'hidden',
    overflowY: 'hidden',
  },

  command: {
    paddingTop: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalM,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    color: tokens.colorNeutralForeground2,
    lineHeight: tokens.lineHeightBase300,
  },
  button: {
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    height: '100%',
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
  },
  idle: {
    backgroundColor: tokens.colorNeutralBackground4,
  },
  complete: {
    backgroundColor: tokens.colorPaletteGreenForeground1,
  },
});
