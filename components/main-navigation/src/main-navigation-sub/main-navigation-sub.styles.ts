import { makeStyles, shorthands } from '@griffel/react';

export const useMainNavigationSubStyles = makeStyles({
  button: {
    ...shorthands.padding(0, 'var(--space-3)', 0, 'var(--space-2)'),
    color: 'var(--color-text)',
    fontWeight: 'var(--font-weight-medium)',
    fontSize: 'var(--font-size-small)',
    lineHeight: 'var(--font-line-height-small)',
    textAlign: 'left',
    display: 'grid',
    gridTemplateColumns: 'var(--space-4) auto',
    columnGap: 'var(--space-2)',
    alignItems: 'center',
    width: '100%',
    height: 'var(--space-8)',
    transitionProperty: 'all',
    transitionDuration: 'var(--transition-duration)',
    transitionTimingFunction: 'var(--transition-timing-function)',
    backgroundColor: 'transparent',
    ...shorthands.borderRadius('0.5rem'),

    ':hover': {
      color: 'var(--color-brand-action)',
      backgroundColor: 'var(--color-brand-secondary)',
      '& svg': {
        color: 'var(--color-brand-action)',
      },
      ':focus': {
        ...shorthands.outline('none'),
        boxShadow: 'var(--shadow-focus)',
      },
    },

    '&[data-state="open"]': {
      '& svg': {
        transform: 'rotate(90deg)',
      },
    },
  },
  subList: {
    paddingTop: 'var(--space-2)',
    paddingBottom: 'var(--space-2)',
    paddingLeft: 'var(--space-6)',
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: 'var(--space-2)',
  },
});
