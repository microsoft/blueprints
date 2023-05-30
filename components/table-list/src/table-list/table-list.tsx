import { mergeClasses } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { type FC, useId } from 'react';
import * as React from 'react';

import { TableListProvider } from '../table-list-context';
import { useTableListStyles } from './table-list.styles';
import type { TableListProps } from './table-list.types';

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

  return (
    <TableListProvider value={{ variant, columnWeights }}>
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
          className,
        )}
        {...(caption ? { 'aria-labelledby': labelById } : {})}
        {...(description ? { 'aria-describedby': describedById } : {})}
        {...rest}
      >
        {children}
      </table>
    </TableListProvider>
  );
};
