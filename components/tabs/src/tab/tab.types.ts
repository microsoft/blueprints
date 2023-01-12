import type { ReactNode } from 'react';

export type TabProps = {
  /**
   * Consumer provided class.
   */
  className?: string;
  /**
   * Set the tab to be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * [INTERNAL] Do not use.
   */
  __index?: number;

  /**
   * [INTERNAL] Do not use.
   */
  __total?: number;

  children?: ReactNode | undefined;
};
