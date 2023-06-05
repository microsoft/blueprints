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
   * Table column widths or weights. See [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
   * specification.
   *
   * @example [1, 1, 2, 1]
   * @example ['230px', auto, auto, auto]
   */
  columnSizing?: (number | string)[];

  children?: ReactNode | undefined;
} & TableHTMLAttributes<HTMLTableElement>;
