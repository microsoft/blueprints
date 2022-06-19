import { makeStyles } from '@griffel/react';

export const useCodeBlockStyles = makeStyles({
  root: {
    width: '100%',
    paddingTop: '1rem',
    paddingBottom: '1.125rem',
    paddingLeft: '1.375rem',
    paddingRight: '1.375rem',
    borderTopLeftRadius: 'var(--shape-corner-radius)',
    borderTopRightRadius: 'var(--shape-corner-radius)',
    borderBottomRightRadius: 'var(--shape-corner-radius)',
    borderBottomLeftRadius: 'var(--shape-corner-radius)',
    backgroundColor: 'var(--color-tile-background)',
    display: 'block',
    position: 'relative',

    '& pre': {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      /** Code block needs to be tab-able if overflow occurs.  Moving overflow up to codeblock and adding tabIndex */
      overflowX: 'unset',
    },
  },
  overflow: {
    overflowX: 'auto',
  },
});
