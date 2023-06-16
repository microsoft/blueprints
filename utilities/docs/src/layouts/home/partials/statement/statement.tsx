import type { FC } from 'react';
import * as React from 'react';

import { useStatementStyles } from './statement.styles';
import type { StatementProps } from './statement.types';

export const Statement: FC<StatementProps> = ({ children }) => {
  const classes = useStatementStyles();

  return <ol className={classes.statementList}>{children}</ol>;
};
