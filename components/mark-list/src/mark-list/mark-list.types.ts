import type { paths } from '@arbutus/component.icon';
import type { ColorScheme } from '@arbutus/style.theming';

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
  iconColor?: keyof ColorScheme;
};
