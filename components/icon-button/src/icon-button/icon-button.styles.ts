import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useIconButtonStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    lineHeight: tokens.spacingVerticalL,
    ':hover': {
      backgroundColor: 'var(--arbutus-color-tile)',
    },
    ':focus': {
      backgroundColor: 'var(--arbutus-color-tile)',
      ...shorthands.outline('none'),
      boxShadow: 'var(--arbutus-shadow-focus)',
    },
  },
});
