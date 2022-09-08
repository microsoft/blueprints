import type { HTMLAttributes } from 'react';

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

  /**
   * @private [INTERNAL] DO NOT USE.
   */
  __index?: number;
} & HTMLAttributes<HTMLLIElement>;
