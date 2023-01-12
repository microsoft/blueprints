import type { ReactNode } from 'react';

export type TabsProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Optional initial open tab
   * @default 0
   */
  initialIndex?: number;

  children?: ReactNode | undefined;
};
