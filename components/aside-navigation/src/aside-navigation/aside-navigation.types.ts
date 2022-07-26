import type { ElementType } from 'react';

export type AsideNavigationProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Currently active tab.
   */
  currentIndex: number;

  /**
   * Custom root element.
   */
  as?: ElementType;

  /**
   * Title of the navigation group.
   */
  title?: string;
};
