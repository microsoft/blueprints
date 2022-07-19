import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useAsideNavigationStyles = makeStyles({
  list: {
    display: 'grid',
    position: 'relative',
    gridTemplateColumns: '1fr',
    rowGap: tokens.spacingVerticalM,
    paddingLeft: tokens.spacingHorizontalS,
    ...shorthands.borderLeft('0.0625rem', 'solid', tokens.colorNeutralStroke1),
  },
  title: {
    ...shorthands.borderLeft('0.0625rem', 'solid', tokens.colorNeutralStroke1),
  },
  highlight: {
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    position: 'absolute',
    width: '0.125rem',
    left: '-0.0625rem',
    backgroundColor: tokens.colorBrandForeground1,
  },
});
