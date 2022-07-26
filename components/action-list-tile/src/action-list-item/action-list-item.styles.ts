import { makeStyles, shorthands } from '@griffel/react';

export const useActionListItemStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 1rem',
    textAlign: 'left',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 0,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    ...shorthands.borderStyle('none'),
    ...shorthands.borderColor('transparent'),
  },
});
