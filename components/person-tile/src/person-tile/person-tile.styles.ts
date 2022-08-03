import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const usePersonTileStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '40px auto min-content',
    columnGap: tokens.spacingHorizontalXL,
    alignItems: 'center',
  },
  image: {
    height: tokens.spacingVerticalXL,
  },
});
