import { makeStyles, shorthands } from '@griffel/react';

export const useLinkStyles = makeStyles({
  root: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    ...shorthands.border('none'),
    outlineStyle: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  },
  isUnderlined: {
    textDecorationLine: 'underline',
    textDecorationSkipInk: 'all',
  },
});
