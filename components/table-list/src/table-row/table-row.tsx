import { mergeClasses } from '@griffel/react';
import useResizeObserver from '@react-hook/resize-observer';
import {
  Children,
  type FC,
  type MutableRefObject,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import * as React from 'react';

import { type TableListContextProps, useTableListContext } from '../table-list-context';
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

/**
 * @todo [Extract useSize into its own package #103](https://github.com/microsoft/arbutus/issues/103)
 * */
type Size = { width: number; height: number };

function useSize<T extends HTMLElement>(
  target: MutableRefObject<T | null>,
): Size | undefined {
  const [size, setSize] = useState<Size>();

  useLayoutEffect(() => {
    setSize(target?.current?.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));

  return size;
}

export const TableRow: FC<TableRowProps> = ({ className, children }) => {
  const { variant, columnWeights } = useTableListContext();
  const isDefault = variant === 'default';
  const isAlternating = variant === 'alternating';
  const numberOfColumns = Children.count(children);

  const ref = useRef<HTMLTableRowElement | null>(null);
  const size = useSize<HTMLTableRowElement>(ref);
  const width = size?.width ?? 0;
  const isCollapsed = width < 640;

  console.log('isCollapsed', isCollapsed);

  // Styles
  const classes = useTableRowStyles();

  const customColumnWeightStyles = makeGridColumns(
    columnWeights,
    isCollapsed,
    numberOfColumns,
  );

  console.log('customColumnWeightStyles', customColumnWeightStyles);

  return (
    <tr
      ref={ref}
      style={customColumnWeightStyles}
      className={mergeClasses(
        classes.root,
        isAlternating && classes.alternating,
        isDefault && classes.default,
        className,
      )}
    >
      {children}
    </tr>
  );
};
