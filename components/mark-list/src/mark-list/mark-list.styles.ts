import { makeStyles } from '@griffel/react';

export const useMarkListStyles = makeStyles({
  root: {
    listStyleType: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: 'var(--space-3)',
  },
});
