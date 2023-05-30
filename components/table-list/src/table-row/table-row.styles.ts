import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useTableRowStyles = makeStyles({
  root: {
    display: 'grid',
  },
  alternating: {
    '&:nth-child(even) td, &:nth-child(even) th': {
      backgroundColor: tokens.colorNeutralBackground3,
      ...shorthands.borderRadius(tokens.borderRadiusMedium),
    },
  },
  default: {
    '&:not(:last-child)': {
      borderBottomStyle: 'solid',
      borderBottomWidth: tokens.strokeWidthThin,
      borderBottomColor: tokens.colorNeutralStroke1,
    },
  },
});
