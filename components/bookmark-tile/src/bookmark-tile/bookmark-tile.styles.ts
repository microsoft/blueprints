import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useBookmarkTileStyles = makeStyles({
  root: {
    textAlign: 'left',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    ...shorthands.borderStyle('none'),
    ...shorthands.borderColor('transparent'),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: tokens.spacingHorizontalXXXL,
    width: tokens.spacingHorizontalXXXL,
    objectFit: 'cover',
  },
  fallbackIcon: {
    height: tokens.spacingHorizontalXXXL,
    width: tokens.spacingHorizontalXXXL,
    ...shorthands.borderRadius(tokens.spacingHorizontalL),
    backgroundColor: tokens.colorBrandBackground2,
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
  },
});
