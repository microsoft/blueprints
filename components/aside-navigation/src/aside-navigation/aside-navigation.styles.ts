import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useAsideNavigationStyles = makeStyles({
  list: {
    display: 'grid',
    position: 'relative',
    gridTemplateColumns: '1fr',
    rowGap: tokens.spacingVerticalS,
    paddingLeft: tokens.spacingHorizontalS,
    ...shorthands.borderLeft(tokens.strokeWidthThin, 'solid', tokens.colorNeutralStroke1),
  },
  title: {
    ...shorthands.borderLeft(tokens.strokeWidthThin, 'solid', tokens.colorNeutralStroke1),
  },
  highlight: {
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    position: 'absolute',
    height: tokens.lineHeightBase600,
    width: tokens.strokeWidthThick,
    left: `-${tokens.strokeWidthThin}`,
    backgroundColor: tokens.colorBrandForeground1,
  },
});
