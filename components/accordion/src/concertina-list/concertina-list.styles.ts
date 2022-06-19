import { makeStyles } from '@griffel/react';

export const useConcertinaListStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    width: '100%',
    marginTop: '1rem',

    '& p': {
      fontSize: 'var(--font-size-micro)',
      fontWeight: 'var(--font-weight-regular)',
      letterSpacing: '-0.01rem',
    },
  },
});
