import type { ReactNode } from 'react';

export type AccordionItemProps = {
  /**
   * Consumer-provided class name.
   */
  className?: string;

  /**
   * The title of the accordion item that renders in the trigger.
   */
  title: string;

  /**
   * Initial state of the accordion item.
   */
  initial?: 'collapsed' | 'expanded';

  children?: ReactNode | undefined;
};
