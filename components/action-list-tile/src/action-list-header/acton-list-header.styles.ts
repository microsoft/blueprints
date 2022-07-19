import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useActionListTileStyles = makeStyles({
  image: {
    height: tokens.spacingHorizontalXXXL,
    width: tokens.spacingHorizontalXXXL,
    objectFit: 'cover',
  },
});
