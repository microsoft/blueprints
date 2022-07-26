import type { FC } from 'react';
import * as React from 'react';

import { useDataTableStyles } from './data-table.styles';
import type {
  DataTableCellProps,
  DataTableProps,
  DataTableRowProps,
} from './data-table.types';

export const DataCell: FC<DataTableCellProps> = ({ cell, rowIndex, cellIndex }) => {
  const classes = useDataTableStyles();

  return (
    <td className={classes.cell} key={`dataTableRow-${rowIndex}-Cell-${cellIndex}`}>
      {cell?.content && <div className={classes.content}>{cell.content}</div>}
      {cell?.imageSrc && <img src={cell.imageSrc} alt={cell.imageAlt} />}
    </td>
  );
};

export const DataRow: FC<DataTableRowProps> = ({ row, rowIndex }) => {
  const classes = useDataTableStyles();

  return (
    <tr className={classes.row} key={`dataTableRow-${rowIndex}`}>
      {row?.map((cell, cellIndex) => (
        <DataCell key={cellIndex} cell={cell} cellIndex={cellIndex} rowIndex={rowIndex} />
      ))}
    </tr>
  );
};

export const DataTable: FC<DataTableProps> = ({ rows }) => {
  const classes = useDataTableStyles();

  return (
    <table className={classes.root}>
      <tbody>
        {rows?.map((row, rowIndex) => (
          <DataRow key={rowIndex} row={row} rowIndex={rowIndex} />
        ))}
      </tbody>
    </table>
  );
};
