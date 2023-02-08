import type { ElementType, ReactNode } from 'react';

export type MainNavigationLinkProps = {
  /**
   * Link element.
   */
  as: ElementType;

  /**
   * Link element props.
   */
  elementProps: Record<string, unknown>;

  /**
   * Whether this link is currently active.
   */
  isActive?: boolean;

  children?: ReactNode | undefined;

  className?: string;
};
