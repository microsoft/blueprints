import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useTableCellStyles = makeStyles({
  root: {
    display: 'block',
  },
  largePadding: {
    ...shorthands.padding(tokens.spacingVerticalXL),
  },
  smallPadding: {
    paddingLeft: tokens.spacingHorizontalXL,
    paddingRight: tokens.spacingHorizontalXL,
    paddingTop: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalM,
  },
  collapsedWithHeader: {
    display: 'grid',
    gridTemplateColumns: '100px auto',
    gridGap: tokens.spacingHorizontalM,
  },
});
