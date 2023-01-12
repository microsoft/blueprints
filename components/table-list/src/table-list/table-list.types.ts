import type { ReactNode, TableHTMLAttributes } from 'react';

export type TableListProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Alternating row colors variant.
   */
  isAlternating?: boolean;

  children?: ReactNode | undefined;
} & TableHTMLAttributes<HTMLTableElement>;
