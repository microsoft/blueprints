import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const CROWN_HEIGHT = '60px';

export const useCrownStyles = makeStyles({
  root: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: CROWN_HEIGHT,
    columnGap: tokens.spacingHorizontalM,
  },
  image: {
    width: 'auto',
    height: tokens.spacingHorizontalXXXL,
  },
});
