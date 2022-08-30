import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useTableCellStyles = makeStyles({
  root: {
    ...shorthands.padding(tokens.spacingVerticalXL),
  },
});
