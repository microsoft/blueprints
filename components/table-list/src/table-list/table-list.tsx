import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { TableListProvider } from '../table-list-context';
import { useTableListStyles } from './table-list.styles';
import type { TableListProps } from './table-list.types';

export const TableList: FC<TableListProps> = ({
  className,
  isAlternating,
  children,
  caption,
}) => {
  // Styles
  const classes = useTableListStyles();

  return (
    <TableListProvider value={{ isAlternating }}>
      <table className={mergeClasses(classes.root, className)}>
        {caption && <caption className={classes.caption}>{caption}</caption>}
        {children}
      </table>
    </TableListProvider>
  );
};
