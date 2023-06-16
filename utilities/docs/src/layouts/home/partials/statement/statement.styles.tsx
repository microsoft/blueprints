import { makeStyles } from '@griffel/react';

export const useStatementStyles = makeStyles({
  statementList: {
    paddingLeft: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    listStyleType: 'none',
    width: '100%',
    columnGap: '68px',
    rowGap: '68px',
  },
});
