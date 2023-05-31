import { mergeClasses } from '@griffel/react';
import { Children, type FC } from 'react';
import * as React from 'react';

import { type TableListContextProps, useTableListContext } from '../table-list-context';
import { injectIndex } from '../utilities';
import { useTableRowStyles } from './table-row.styles';
import type { TableRowProps } from './table-row.types';

const makeGridColumns = (
  columnWeights: TableListContextProps['columnWeights'],
  isCollapsed = false,
  numberOfColumns = 1,
) => {
  switch (true) {
    // On smaller screens, the table collapses into one column.
    case isCollapsed:
      return { gridTemplateColumns: '1fr' };

    // If the consumer passes custom column weights, use them.
    case Array.isArray(columnWeights):
      return {
        gridTemplateColumns: columnWeights
          ?.map((weight) => {
            if (typeof weight === 'number') {
              return `${weight}fr`;
            } else {
              return weight;
            }
          })
          .join(' '),
      };

    // By default, the table will have equal column widths.
    default:
      return { gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` };
  }
};

export const TableRow: FC<TableRowProps> = ({ className, children }) => {
  const { variant, columnWeights } = useTableListContext();
  const isDefault = variant === 'default';
  const isAlternating = variant === 'alternating';
  const numberOfColumns = Children.count(children);

  const { isCollapsed } = useTableListContext();
  // Styles
  const classes = useTableRowStyles();

  const customColumnWeightStyles = makeGridColumns(
    columnWeights,
    isCollapsed,
    numberOfColumns,
  );

  return (
    <tr
      style={customColumnWeightStyles}
      className={mergeClasses(
        classes.root,
        isCollapsed && classes.collapsed,
        isAlternating && classes.alternating,
        isDefault && classes.default,
        className,
      )}
    >
      {injectIndex({ children })}
    </tr>
  );
};
