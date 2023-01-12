import type { ColorVariant, paths } from '@microsoft/arbutus.icon';
import type { ReactNode } from 'react';

export type MarkListProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Selection of icons.
   */
  iconName?: keyof typeof paths;

  /**
   * Selection of icon color options.
   */
  iconColor?: ColorVariant;

  children?: ReactNode | undefined;
};
