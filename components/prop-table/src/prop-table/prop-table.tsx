import { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';
import { Text } from '@microsoft/arbutus.text';
import type { FC } from 'react';
import * as React from 'react';

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
        <TableRow key={prop.name}>
          <TableCell isHeader>{prop.name ?? ''}</TableCell>
          <TableCell>{prop.type?.name ?? ''}</TableCell>
          <TableCell>{prop.description ?? ''}</TableCell>
          <TableCell>
            {/* `defaultValue` is meant to be `any`. */}
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
            <Text variant="code">{prop.defaultValue?.value ?? ''}</Text>
          </TableCell>
        </TableRow>
      ))}
    </TableList>
  );
};
