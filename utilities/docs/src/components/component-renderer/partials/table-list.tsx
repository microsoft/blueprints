import { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';
import type { FC } from 'react';
import * as React from 'react';

import { MarkdownRenderer } from '../../markdown-renderer';
import type { TableListComponentData } from '../component-renderer.types';

type TableListComponentProps = TableListComponentData;

export const TableListComponent: FC<TableListComponentProps> = ({
  data,
  headers,
  variant = 'default',
  columnSizing,
}) => {
  return (
    <TableList variant={variant} {...(columnSizing ? { columnSizing } : {})}>
      {headers && (
        <thead>
          <TableRow>
            {headers.map(({ text }, i) => (
              <TableCell isHeader scope="col" key={i}>
                {text}
              </TableCell>
            ))}
          </TableRow>
        </thead>
      )}
      {data && (
        <tbody>
          {data.map((row, i) => (
            <TableRow key={i}>
              {row.map((cell, i) => (
                <TableCell key={i}>
                  <MarkdownRenderer markdown={cell} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      )}
    </TableList>
  );
};
