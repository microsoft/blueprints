import { makeStyles } from '@griffel/react';

export const useActionTileStyles = makeStyles({
  root: {
    display: 'grid',
    columnGap: 'var(--space-4)',
    minHeight: '60px',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    paddingLeft: 'var(--space-6)',
    paddingRight: 'var(--space-6)',
  },
  withImage: {
    gridTemplateColumns: '1.75rem auto 1rem',
  },
  withoutImage: {
    gridTemplateColumns: 'auto 1rem',
  },
  image: {
    height: '1.75rem',
    width: '1.75rem',
    objectFit: 'cover',
  },
});
