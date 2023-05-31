import { mergeClasses } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import useResizeObserver from '@react-hook/resize-observer';
import {
  Children,
  type FC,
  type MutableRefObject,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import * as React from 'react';

import type { TableListContextProps } from '../table-list-context';
import { TableListProvider } from '../table-list-context';
import { useTableListStyles } from './table-list.styles';
import type { TableListProps } from './table-list.types';

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

export const TableList: FC<TableListProps> = ({
  className,
  variant = 'default',
  children,
  description,
  caption,
  columnWeights,
  ...rest
}) => {
  // Styles
  const classes = useTableListStyles();

  const labelById = useId();
  const describedById = useId();

  // Small Screen Layout

  const tableRef = useRef<HTMLTableElement | null>(null);
  const size = useSize<HTMLTableElement>(tableRef);
  const width = size?.width ?? 0;
  const isCollapsed = width < 640;

  const hasHeader = Children.toArray(children).some((child) => {
    if (React.isValidElement(child)) {
      return child.type === 'thead';
    }

    return false;
  });

  // In a mobile view, we are going to restructure the table into a vertical layout. For that we need to extract the
  // header items, if any, so that we can render them as a column in the mobile view.
  let headerItems: TableListContextProps['headerItems'] = [];

  if (hasHeader) {
    const header = Children.toArray(children).find((child) => {
      if (React.isValidElement(child)) {
        return child.type === 'thead';
      }

      return undefined;
    });

    if (header && React.isValidElement(header)) {
      const row = Children.toArray(header.props.children)[0];

      if (row && React.isValidElement(row)) {
        const cells = Children.toArray(row.props.children);

        headerItems = cells.map((cell) => {
          if (React.isValidElement(cell)) {
            return cell.props.children;
          }
        });
      }
    }
  }

  return (
    <TableListProvider value={{ variant, columnWeights, headerItems, isCollapsed }}>
      {caption && (
        <Text block variant="headline" id={labelById} className={classes.caption}>
          {caption}
        </Text>
      )}
      {description && (
        <Text block variant="description" id={describedById} className={classes.caption}>
          {description}
        </Text>
      )}
      <table
        className={mergeClasses(
          classes.root,
          variant === 'default' && classes.boundary,
          isCollapsed && classes.collapsed,
          className,
        )}
        ref={tableRef}
        {...(caption ? { 'aria-labelledby': labelById } : {})}
        {...(description ? { 'aria-describedby': describedById } : {})}
        {...rest}
      >
        {children}
      </table>
    </TableListProvider>
  );
};
