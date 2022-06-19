import { makeStyles } from '@griffel/react';

export const useActionListItemsStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: 'var(--space-2)',
  },
});
