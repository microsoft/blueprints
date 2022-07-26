import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useActionListHeaderStyles = makeStyles({
  image: {
    height: tokens.spacingHorizontalXXXL,
    width: tokens.spacingHorizontalXXXL,
    objectFit: 'cover',
  },
});
