import { makeStyles, shorthands } from '@griffel/react';

export const useTabsStyles = makeStyles({
  root: {
    color: 'var(--color-primary)',
    ':global(:root)': { '--reach-tabs': 1 },

    '& [data-reach-tabs][data-orientation="vertical"]': {
      display: 'flex',
    },

    '& [data-reach-tab-list]': {
      display: 'flex',
      backgroundColor: 'var(--color-background)',
      borderBottomWidth: '0.0625rem',
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--color-border)',
    },

    '& [data-reach-tab-list][aria-orientation="vertical"]': {
      flexDirection: 'column',
    },

    '& [data-reach-tab]': {
      ...shorthands.margin('0'),
      paddingTop: 'var(--space-2)',
      paddingBottom: 'var(--space-2)',
      paddingLeft: 'var(--space-4)',
      paddingRight: 'var(--space-4)',
      display: 'inline-block',
      ...shorthands.border('none'),
      ...shorthands.borderRadius('0.25rem 0.25rem 0 0'),
      boxShadow: '0 0 0 var(--color-brand-accent)',
      backgroundColor: 'none',
      color: 'inherit',
      cursor: 'pointer',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--font-size-small)',
      lineHeight: 'var(--font-line-height-small)',
      '&:focus': {
        outlineColor: 'initial',
        outlineStyle: 'none',
        outlineWidth: 'initial',
      },
    },

    '& [data-reach-tab]:active': {
      backgroundColor: 'var(--color-background)',
    },

    '& [data-reach-tab]:disabled': {
      opacity: '0.25',
      cursor: 'default',
    },

    '& [data-reach-tab][data-selected]': {
      fontWeight: 'var(--font-weight-medium)',
      boxShadow: '0 0.125rem 0 0 var(--color-brand-accent)',
    },
  },
});
