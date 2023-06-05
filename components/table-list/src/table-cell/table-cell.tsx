import { mergeClasses } from '@griffel/react';
import { type FC } from 'react';
import * as React from 'react';

import { useTableListContext } from '../table-list-context';
import { useTableCellStyles } from './table-cell.styles';
import type { TableCellProps } from './table-cell.types';

export const TableCell: FC<TableCellProps> = ({
  className,
  isHeader,
  children,
  __index = 0,
  ...props
}) => {
  const Root = isHeader ? 'th' : 'td';

  // Styles
  const classes = useTableCellStyles();

  // Small view layout
  const { headerItems, isCollapsed } = useTableListContext();
  const header = headerItems?.[__index] ?? null;
  const hasHeader = Boolean(header);

  if (isCollapsed && hasHeader) {
    return (
      <Root
        className={mergeClasses(
          classes.root,
          classes.smallPadding,
          hasHeader && classes.collapsedWithHeader,
          className,
        )}
        {...props}
      >
        <span aria-hidden>{header}</span>
        <span>{children}</span>
      </Root>
    );
  }

  // Default layout
  return (
    <Root
      className={mergeClasses(
        classes.root,
        isCollapsed ? classes.smallPadding : classes.largePadding,
        className,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
