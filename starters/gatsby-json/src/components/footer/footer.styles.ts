import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useFooterStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
  },
  links: {
    display: 'flex',
    justifyContent: 'flex-end',
    columnGap: tokens.spacingHorizontalM
  }
});
