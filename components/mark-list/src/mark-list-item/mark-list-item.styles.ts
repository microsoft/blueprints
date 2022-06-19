import { makeStyles } from '@griffel/react';

export const useMarkListItemStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'var(--space-4) auto',
    columnGap: 'var(--space-3)',
  },
  mark: {
    color: 'var(--color-quaternary)',
  },
});
