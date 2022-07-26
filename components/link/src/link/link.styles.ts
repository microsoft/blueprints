import { makeStyles } from '@griffel/react';

export const useLinkStyles = makeStyles({
  root: {
    cursor: 'pointer',
  },
  isUnderlined: {
    textDecorationLine: 'underline',
    textDecorationSkipInk: 'all',
  },
});
