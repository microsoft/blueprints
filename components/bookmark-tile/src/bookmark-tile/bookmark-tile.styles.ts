import { makeStyles, shorthands } from '@griffel/react';

export const useBookmarkTileStyles = makeStyles({
  root: {
    textAlign: 'left',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 'var(--space-8)',
    width: 'var(--space-8)',
    objectFit: 'cover',
  },
  fallbackIcon: {
    height: 'var(--space-8)',
    width: 'var(--space-8)',
    ...shorthands.borderRadius('var(--space-4)'),
    backgroundColor: 'var(--color-brand-secondary)',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
  },
});
