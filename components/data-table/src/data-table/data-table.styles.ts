import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useDataTableStyles = makeStyles({
  root: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: tokens.colorNeutralStroke1,
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
    borderBottomColor: tokens.colorNeutralStroke1,
    paddingTop: '0.6rem',
    paddingRight: '1.2rem',
    paddingBottom: '0.6rem',
    paddingLeft: '1.2rem',
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground1,

    '& p': {
      fontSize: tokens.fontSizeBase200,
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
        fontSize: tokens.fontSizeBase200,
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
      color: tokens.colorNeutralForeground1,
      textDecorationLine: 'underline',

      '&:hover': {
        color: tokens.colorNeutralForeground2,
      },
    },

    '& pre, & code': {
      backgroundColor: tokens.colorNeutralBackground6,
      paddingTop: '0',
      paddingRight: tokens.spacingHorizontalSNudge,
      paddingBottom: '0',
      paddingLeft: tokens.spacingHorizontalSNudge,
      borderTopLeftRadius: tokens.borderRadiusSmall,
      borderTopRightRadius: tokens.borderRadiusSmall,
      borderBottomRightRadius: tokens.borderRadiusSmall,
      borderBottomLeftRadius: tokens.borderRadiusSmall,
      fontSize: tokens.fontSizeBase200,

      '& span, & li, & p': {
        fontSize: tokens.fontSizeBase200,
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
        fontSize: tokens.fontSizeBase200,
      },
    },
  },
  content: {
    width: '100%',
  },
});
