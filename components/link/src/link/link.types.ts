import type { ElementType } from 'react';

type LinkVariant = 'primary' | 'secondary' | 'inverse' | 'caption';

export type LinkProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Link element.
   */
  as: ElementType;

  /**
   * Link element props.
   */
  elementProps?: Record<string, unknown>;

  /**
   * Selection of link styles.
   */
  variant?: LinkVariant;

  /**
   * Adds an icon that indicates that the link will open in a new tab.
   */
  withIcon?: boolean;

  /**
   * Adds an underline to the link.
   */
  isUnderlined?: boolean;
};
