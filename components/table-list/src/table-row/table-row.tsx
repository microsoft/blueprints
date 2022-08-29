import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useTableListContext } from '../table-list-context';
import { useTableRowStyles } from './table-row.styles';
import type { TableRowProps } from './table-row.types';

export const TableRow: FC<TableRowProps> = ({ className, children }) => {
  const { isAlternating } = useTableListContext();
  // Styles
  const classes = useTableRowStyles();

  return (
    <tr
      className={mergeClasses(
        classes.root,
        isAlternating ? classes.alternating : classes.simple,
        className,
      )}
    >
      {children}
    </tr>
  );
};
