import { makeStyles } from '@griffel/react';

export const useCenteredClasses = makeStyles({
  root: {
    minHeight: '100vh',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
  },
});

