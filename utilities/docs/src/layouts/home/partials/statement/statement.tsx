import * as React from 'react';
import type { FC } from 'react';
import { Text } from '@fluentui/react-text';

import { useStatementStyles } from './statement.styles';
import { StatementProps } from './statement.types';

export const Statement: FC<StatementProps> = ({ children }) => {
  const classes = useStatementStyles();
  return <ol className={classes.statementList}>{children}</ol>;
};
