import type { HTMLAttributes } from 'react';

export type OrderedListProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Start value for the ordered list.
   * @default 1
   */
  start?: number;
} & HTMLAttributes<HTMLOListElement>;
