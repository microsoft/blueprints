import type { ReactNode } from 'react';

export type TrayProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Controls whether the tray is open or closed.
   */
  isOpen: boolean;

  children?: ReactNode | undefined;
};
