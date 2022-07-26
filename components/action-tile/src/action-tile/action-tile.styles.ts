import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useActionTileStyles = makeStyles({
  root: {
    display: 'grid',
    columnGap: tokens.spacingHorizontalL,
    minHeight: '60px',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    paddingLeft: tokens.spacingHorizontalXXL,
    paddingRight: tokens.spacingHorizontalXXL,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    ...shorthands.borderStyle('none'),
    ...shorthands.borderColor('transparent'),
  },
  withImage: {
    gridTemplateColumns: '1.75rem auto 1rem',
  },
  withoutImage: {
    gridTemplateColumns: 'auto 1rem',
  },
  image: {
    height: '1.75rem',
    width: '1.75rem',
    objectFit: 'cover',
  },
});
