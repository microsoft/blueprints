import { makeStyles, shorthands } from '@griffel/react';

export const useMainNavigationLinkStyles = makeStyles({
  root: {
    ...shorthands.padding(0, 'var(--space-6)'),
    color: 'var(--color-text)',
    fontWeight: 'var(--font-weight-medium)',
    fontSize: 'var(--font-size-small)',
    lineHeight: 'var(--font-line-height-small)',
    textAlign: 'left',
    display: 'grid',
    alignItems: 'center',
    width: '100%',
    height: 'var(--space-8)',
    transitionProperty: 'all',
    transitionDuration: 'var(--transition-duration)',
    transitionTimingFunction: 'var(--transition-timing-function)',
    backgroundColor: 'transparent',
    ...shorthands.borderRadius('0.5rem'),
    '& a': {
      textDecorationLine: 'none',
      color: 'var(--color-text)',
    },
    ':hover': {
      backgroundColor: 'var(--color-brand-secondary)',
      '& a': {
        color: 'var(--color-brand-action)',
      },
      ':focus': {
        ...shorthands.outline('none'),
        boxShadow: 'var(--shadow-focus)',
      },
    },
  },
});
