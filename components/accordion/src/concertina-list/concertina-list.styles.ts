import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useConcertinaListStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    width: '100%',
    marginTop: '1rem',

    '& p': {
      fontSize: tokens.fontSizeBase200,
      fontWeight: tokens.fontWeightRegular,
    },
  },
});
