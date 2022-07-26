import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useMarkListItemStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: `${tokens.spacingHorizontalL} auto`,
    columnGap: tokens.spacingHorizontalM,
  },
  mark: {
    color: tokens.colorNeutralForeground4,
  },
});
