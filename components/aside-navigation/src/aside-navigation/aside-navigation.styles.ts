import { makeStyles, shorthands } from '@griffel/react';

export const useAsideNavigationStyles = makeStyles({
  list: {
    display: 'grid',
    position: 'relative',
    gridTemplateColumns: '1fr',
    rowGap: 'var(--space-3)',
    paddingLeft: 'var(--space-2)',
    ...shorthands.borderLeft('0.0625rem', 'solid', 'var(--color-border)'),
  },
  title: {
    ...shorthands.borderLeft('0.0625rem', 'solid', 'var(--color-border)'),
  },
  highlight: {
    transitionProperty: 'all',
    transitionDuration: 'var(--transition-duration)',
    transitionTimingFunction: 'var(--transition-timing-function)',
    position: 'absolute',
    width: '0.125rem',
    left: '-0.0625rem',
    backgroundColor: 'var(--color-brand-accent)',
  },
});
