import { makeStyles, shorthands } from '@griffel/react';

export const useLinkStyles = makeStyles({
  root: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    ...shorthands.borderStyle('none'),
    outlineStyle: 'none',
    display: 'inline-flex',
    textDecorationLine: 'none',
    alignItems: 'center',
  },
  isUnderlined: {
    textDecorationLine: 'underline',
    textDecorationSkipInk: 'all',
  },
});
