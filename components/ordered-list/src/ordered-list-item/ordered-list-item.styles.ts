import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useOrderedListItemStyles = makeStyles({
  root: {
    listStyleType: 'none',
    ...shorthands.padding(0),
    ...shorthands.margin(0),
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    columnGap: tokens.spacingHorizontalS,
  },
  puck: {
    height: tokens.lineHeightBase400,
    width: tokens.lineHeightBase400,
    display: 'grid',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: tokens.fontWeightSemibold,
    ...shorthands.borderRadius('50%'),
  },
  accent: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorBrandBackground2,
  },
  primary: {
    color: tokens.colorNeutralBackground1,
    backgroundColor: tokens.colorNeutralForeground2,
  },
  secondary: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground3,
  },
});
