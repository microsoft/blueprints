import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useMarkListStyles = makeStyles({
  root: {
    listStyleType: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: tokens.spacingHorizontalM,
  },
});
