import { makeStyles } from '@griffel/react';

export const useMainNavigationSubStyles = makeStyles({
  subList: {
    paddingTop: 'var(--space-2)',
    paddingBottom: 'var(--space-2)',
    paddingLeft: 'var(--space-6)',
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: 'var(--space-2)',
  },
});
