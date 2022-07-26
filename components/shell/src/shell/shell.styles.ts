import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

const footerHeight = '10rem';
const headerHeight = '5rem';

export const useShellStyles = makeStyles({
  root: {
    width: '100%',
  },
  main: {
    minHeight: `calc(100vh - (${headerHeight} + ${footerHeight}))`,
  },
  mainDesktop: {
    display: 'grid',
    paddingLeft: tokens.spacingHorizontalXXL,
    paddingRight: tokens.spacingHorizontalXXL,
    gridTemplateColumns: '17.5rem auto',
    columnGap: tokens.spacingHorizontalXXL,
  },
  footer: {
    minHeight: footerHeight,
  },
  header: {
    minHeight: headerHeight,
  },
});
