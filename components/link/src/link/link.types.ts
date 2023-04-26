import type { paths } from '@microsoft/arbutus.icon';
import type { ElementType, ReactNode } from 'react';

type LinkVariant = 'primary' | 'secondary' | 'inverse' | 'caption' | 'display' | 'accent';

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
   * @default 'primary'
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

  /**
   * Additional icon variants.
   * @default 'open'
   */
  iconName?: keyof typeof paths;

  children?: ReactNode | undefined;
};
