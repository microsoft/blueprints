import { makeStyles, shorthands } from '@griffel/react';

export const useAsideNavigationLinkStyles = makeStyles({
  root: {
    ...shorthands.padding(0, 'var(--space-2)'),
    textAlign: 'left',
    height: 'var(--font-line-height-medium)',
    transitionProperty: 'all',
    transitionDuration: 'var(--transition-duration)',
    transitionTimingFunction: 'var(--transition-timing-function)',
    backgroundColor: 'transparent',
    ...shorthands.borderRadius('0.5rem'),
    ':hover': {
      backgroundColor: 'var(--color-brand-secondary)',
      '& > *': {
        color: 'var(--color-brand-action)',
      },
      ':focus': {
        ...shorthands.outline('none'),
        boxShadow: 'var(--shadow-focus)',
      },
    },
  },
  active: {
    fontWeight: 'var(--font-weight-medium)',
  },
});
