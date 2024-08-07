import type { ReactNode } from 'react';

export type TabPanelProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * [INTERNAL] Do not use. Index in the array of tabs.
   */
  __index?: number;

  children?: ReactNode | undefined;
};
