import type { ColorVariant, paths } from '@arbutus/component.icon';

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
};
