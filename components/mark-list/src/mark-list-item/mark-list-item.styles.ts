import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useMarkListItemStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: `${tokens.spacingHorizontalL} auto`,
    columnGap: tokens.spacingHorizontalM,
  },
  mark: {
    color: 'var(--arbutus--color-text-quaternary)',
  },
});
