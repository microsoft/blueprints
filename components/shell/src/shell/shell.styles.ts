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
    paddingLeft: 'var(--space-7)',
    paddingRight: 'var(--space-7)',
    gridTemplateColumns: '17.5rem auto',
    columnGap: 'var(--space-7)',
  },
  footer: {
    minHeight: footerHeight,
  },
  header: {
    minHeight: headerHeight,
  },
});
