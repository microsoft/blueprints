import { makeStyles } from '@griffel/react';
import type { PropItem } from '@microsoft/arbutus.prop-docs-cli';
import { TableCell, TableRow } from '@microsoft/arbutus.table-list';
import { Text } from '@microsoft/arbutus.text';
import type { FC } from 'react';
import * as React from 'react';

type TableRowsProps = {
  propsDocItems: PropItem[];
  isRequired: boolean;
  isDeprecated: boolean;
};

const useTableRowsStyles = makeStyles({
  deprecated: {
    textDecorationLine: 'line-through',
  },
});

export const TableRows: FC<TableRowsProps> = ({
  propsDocItems,
  isRequired,
  isDeprecated,
}) => {
  const classes = useTableRowsStyles();

  return (
    <>
      {propsDocItems.map((prop) => (
        <TableRow key={prop.name}>
          <TableCell isHeader scope="row">
            <Text className={isDeprecated ? classes.deprecated : ''}>
              {prop.name ?? ''}
            </Text>
            {isRequired ? <Text color="danger">&thinsp;*</Text> : ''}
            {isDeprecated ? <Text color="tertiary"> (deprecated)</Text> : ''}
          </TableCell>
          <TableCell>
            <Text variant="code">{prop.type?.name ?? ''}</Text>
          </TableCell>
          <TableCell>{prop.description ?? ''}</TableCell>
          <TableCell>
            {/* `defaultValue` is meant to be `any`. */}
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
            <Text variant="code">{prop.defaultValue?.value ?? ''}</Text>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
