import type { FC } from 'react';
import * as React from 'react';
import { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';

import { TableListComponentData } from '../component-renderer.types';
import { MarkdownRenderer } from '../../markdown-renderer';

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
            {headers.map(({ text }) => (
              <TableCell isHeader scope="col">
                {text}
              </TableCell>
            ))}
          </TableRow>
        </thead>
      )}
      {data && (
        <tbody>
          {data.map((row) => (
            <TableRow>
              {row.map((cell) => (
                <TableCell>
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
