import type { HTMLAttributes, ReactNode } from 'react';

export type OrderedListItemProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Color variants.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'accent';

  children?: ReactNode | undefined;

  /**
   * @private [INTERNAL] DO NOT USE.
   */
  __index?: number;
} & HTMLAttributes<HTMLLIElement>;
