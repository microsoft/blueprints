import type { ReactNode } from 'react';

export type MainNavigationSubProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Subsection title
   */
  title: string;

  /**
   * Initial state of the accordion item.
   */
  initial?: 'collapsed' | 'expanded';

  children?: ReactNode | undefined;
};
