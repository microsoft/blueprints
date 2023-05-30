import type { ReactNode, TableHTMLAttributes } from 'react';

export type TableListProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Table style variants.
   * @default 'default'.
   */
  variant?: 'default' | 'alternating' | 'borderless';
  /**
   * Table title (accessible caption).
   */
  caption?: string;

  /**
   * Accessible description for the table.
   */
  description?: string;

  /**
   * Table column widths.
   */
  columnWeights?: (number | string)[];

  children?: ReactNode | undefined;
} & TableHTMLAttributes<HTMLTableElement>;
