import type { ElementType, SyntheticEvent } from 'react';

export type AsideNavigationLinkProps = {
  /**
   * Link element.
   */
  as?: ElementType;

  /**
   * Link element click handler.
   */
  onClick: (e?: SyntheticEvent) => void;

  /**
   * Element’s index (position) in the navigation.
   */
  index: number;
};
