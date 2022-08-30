import type { TableHTMLAttributes } from 'react';

export type TableListProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Alternating row colors variant.
   */
  isAlternating?: boolean;
} & TableHTMLAttributes<HTMLTableElement>;
