import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useTableCellStyles } from './table-cell.styles';
import type { TableCellProps } from './table-cell.types';

export const TableCell: FC<TableCellProps> = ({
  className,
  isHeader,
  children,
  ...props
}) => {
  // Styles
  const classes = useTableCellStyles();

  if (isHeader) {
    return (
      <th className={mergeClasses(classes.root, className)} {...props}>
        {children}
      </th>
    );
  }

  return (
    <td className={mergeClasses(classes.root, className)} {...props}>
      {children}
    </td>
  );
};
