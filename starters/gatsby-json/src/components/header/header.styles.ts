import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useHeaderStyles = makeStyles({
  root: {
    display: 'flex',
    columnGap: tokens.spacingHorizontalXL,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalM,
  },
});
