import { makeStyles, shorthands } from '@griffel/react';

export const useIllustrationTileStyles = makeStyles({
  root: {
    textAlign: 'center',
    '& img': {
      display: 'inline-block',
      maxWidth: '100%',
    },
  },
  isInteractive: {
    cursor: 'pointer',
    ...shorthands.borderStyle('none'),
    ...shorthands.borderColor('transparent'),
  },
});
