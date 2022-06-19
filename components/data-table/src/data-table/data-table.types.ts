import type * as React from 'react';

export type DataTableCell = { content?: React.ReactNode; imageSrc: string; imageAlt: string } | { content?: React.ReactNode; imageSrc?: undefined; imageAlt?: undefined };

export type DataTableRow = DataTableCell[];

export type DataTableCellProps = {
  cell?: DataTableCell;
  cellIndex: number;
  rowIndex: number;
};

export type DataTableRowProps = {
  row?: DataTableRow;
  rowIndex: number;
};

export type DataTableProps = {
  rows?: DataTableRow[];
};
