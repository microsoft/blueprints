import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const gridClasses = {
  full: {
    gridTemplateColumns: '1fr',
  },
  halves: {
    gridTemplateColumns: '1fr 1fr',
  },
  thirds: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  quarters: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 1fr))',
  },
  small: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
  },
  large: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(24rem, 1fr))',
  },
};

export const useGridStyles = makeStyles({
  root: {
    display: 'grid',
    columnGap: tokens.spacingHorizontalL,
    rowGap: tokens.spacingVerticalXXL,
  },
  ...gridClasses,
});
