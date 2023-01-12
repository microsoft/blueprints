import type { ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';

export type TableData = {
  /**
   * Sets the cell to be a header cell (`<th>`).
   */
  isHeader?: false;
} & TdHTMLAttributes<HTMLTableCellElement>;

export type TableHeader = {
  /**
   * Sets the cell to be a header cell (`<th>`).
   */
  isHeader: true;
} & ThHTMLAttributes<HTMLTableCellElement>;

export type TableCellProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Sets the cell to be a header cell (`<th>`).
   */
  isHeader?: boolean;

  children?: ReactNode | undefined;
} & (TableData | TableHeader);
