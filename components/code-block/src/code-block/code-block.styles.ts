import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useCodeBlockStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    paddingTop: '1rem',
    paddingBottom: '1.125rem',
    paddingLeft: '1.375rem',
    paddingRight: '1.375rem',
    borderTopLeftRadius: 'var(--arbutus--shape-border-radius)',
    borderTopRightRadius: 'var(--arbutus--shape-border-radius)',
    borderBottomRightRadius: 'var(--arbutus--shape-border-radius)',
    borderBottomLeftRadius: 'var(--arbutus--shape-border-radius)',
    backgroundColor: tokens.colorNeutralBackground6,
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
