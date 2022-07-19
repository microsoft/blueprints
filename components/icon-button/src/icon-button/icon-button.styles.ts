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
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
    ':focus': {
      backgroundColor: tokens.colorNeutralBackground1Selected,
      ...shorthands.outline('none'),
      ':focus': {
        outlineColor: tokens.colorBrandForeground2,
      },
    },
  },
});
