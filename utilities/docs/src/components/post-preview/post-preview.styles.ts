import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const usePostPreviewStyles = makeStyles({
  root: {
    columnGap: tokens.spacingHorizontalM,
    ...shorthands.border('none'),
    ...shorthands.borderWidth(0),
    ...shorthands.borderRadius('none'),
    ...shorthands.outline('none'),
    ...shorthands.padding(0),
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
});
