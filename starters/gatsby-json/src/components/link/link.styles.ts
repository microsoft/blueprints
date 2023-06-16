import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useLinkStyles = makeStyles({
  root: {
    color: 'inherit',
    textDecorationLine: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    '& svg:first-child': {
      marginTop: 0,
      marginRight: tokens.spacingHorizontalM,
    },
  },
});
