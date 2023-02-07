import type { FC } from 'react';
import * as React from 'react';
import { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';
import { Text } from '@microsoft/arbutus.text';

import type { PropTableProps } from './prop-table.types';

export const PropTable: FC<PropTableProps> = ({ className, propDoc }) => {
  if (!propDoc) {
    return null;
  }

  return (
    <TableList className={className}>
      <TableRow>
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Type</TableCell>
        <TableCell isHeader>Description</TableCell>
        <TableCell isHeader>Default</TableCell>
      </TableRow>
      {Object.values(propDoc.props).map((prop) => (
        <TableRow>
          <TableCell isHeader>{prop.name ?? ''}</TableCell>
          <TableCell>{prop.type?.name ?? ''}</TableCell>
          <TableCell>{prop.description ?? ''}</TableCell>
          <TableCell>
            <Text variant="code">{prop.defaultValue?.value ?? ''}</Text>
          </TableCell>
        </TableRow>
      ))}
    </TableList>
  );
};
