import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useOrderedListStyles = makeStyles({
  root: {
    display: 'grid',
    rowGap: tokens.spacingVerticalM,
    ...shorthands.padding(0),
  },
});
