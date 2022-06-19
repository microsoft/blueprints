import { makeStyles } from '@griffel/react';

export const useActionListItemStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 1rem',
    textAlign: 'left',
    paddingLeft: 0,
    paddingRight: 0,
  },
});
