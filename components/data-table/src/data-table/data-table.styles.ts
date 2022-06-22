import { makeStyles } from '@griffel/react';

export const useDataTableStyles = makeStyles({
  root: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'var(--color-border)',
    paddingTop: '0',
    paddingRight: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    marginTop: '0',
    marginRight: '0',
    marginBottom: '0',
    marginLeft: '0',
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
  },
  row: {
    width: '100%',
  },
  cell: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'var(--color-border)',
    paddingTop: '0.6rem',
    paddingRight: '1.2rem',
    paddingBottom: '0.6rem',
    paddingLeft: '1.2rem',
    fontSize: 'var(--font-size-micro)',
    color: 'var(--color-text)',

    '& p': {
      fontSize: 'var(--font-size-micro)',
      marginTop: '0',
      marginRight: '0',
      marginBottom: '1.2rem',
      marginLeft: '0',

      '&:last-child': {
        marginTop: '0',
        marginRight: '0',
        marginBottom: '0',
        marginLeft: '0',
      },
    },

    '& ul, & ol': {
      width: '100%',
      marginTop: '0',
      marginRight: '0',
      marginBottom: '1.2rem',
      marginLeft: '0',
      paddingTop: '0',
      paddingRight: '0',
      paddingBottom: '0',
      paddingLeft: '0.875rem',

      '& li': {
        width: '100%',
        fontSize: 'var(--font-size-micro)',
        marginTop: '0',
        marginRight: '0',
        marginBottom: '1rem',
        marginLeft: '0',

        '&:last-child': {
          marginTop: '0',
          marginRight: '0',
          marginBottom: '0',
          marginLeft: '0',
        },
      },

      '&:last-child': {
        marginTop: '0',
        marginRight: '0',
        marginBottom: '0',
        marginLeft: '0',
      },
    },

    '& a': {
      color: 'var(--color-primary)',
      textDecorationLine: 'underline',

      '&:hover': {
        color: 'var(--color-secondary)',
      },
    },

    '& pre, & code': {
      backgroundColor: 'var(--color-tile)',
      paddingTop: '0',
      paddingRight: '0',
      paddingBottom: '0',
      paddingLeft: '0',
      borderTopLeftRadius: '0.375rem',
      borderTopRightRadius: '0.375rem',
      borderBottomRightRadius: '0.375rem',
      borderBottomLeftRadius: '0.375rem',
      fontSize: 'var(--font-size-micro)',

      '& span, & li, & p': {
        fontSize: 'var(--font-size-micro)',
      },

      '& code': {
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        borderBottomLeftRadius: '0',
        paddingTop: '0',
        paddingRight: '0',
        paddingBottom: '0',
        paddingLeft: '0',
        fontSize: 'var(--font-size-micro)',
      },
    },
  },
  content: {
    width: '100%',
  },
});
