import type { ReactNode } from 'react';

export type ShellProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * A consumer defined header area.
   */
  headerArea: ReactNode;

  /**
   * A consumer defined footer area.
   */
  footerArea: ReactNode;

  /**
   * A consumer defined navigation area.
   */
  navigationArea: ReactNode;
};
