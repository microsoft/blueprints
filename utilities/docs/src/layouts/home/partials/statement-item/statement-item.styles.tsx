import { makeStyles } from '@griffel/react';

export const useStatementItemStyles = makeStyles({
  statementHeading: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    columnGap: '24px',
  },
  statementHeadingText: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accentText: {
    color: 'hsla(167, 60%, 38%, 1)',
  },
});
