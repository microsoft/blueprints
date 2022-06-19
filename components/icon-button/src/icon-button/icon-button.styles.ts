import { makeStyles, shorthands } from '@griffel/react';

export const useIconButtonStyles = makeStyles({
  root: {
    backgroundColor: 'var(--color-background)',
    ...shorthands.borderRadius('0.5rem'),
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: 'var(--transition-duration)',
    transitionTimingFunction: 'var(--transition-timing-function)',
    lineHeight: 'var(--space-3)',
    ':hover': {
      backgroundColor: 'var(--color-tile)',
    },
    ':focus': {
      backgroundColor: 'var(--color-tile)',
      ...shorthands.outline('none'),
      boxShadow: 'var(--shadow-focus)',
    },
  },
});
