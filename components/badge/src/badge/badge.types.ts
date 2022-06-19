import type { paths } from '@arbutus/component.icon';
import type { ColorScheme } from '@arbutus/style.theming';

export type BadgeProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Selection of background color options.
   */
  backgroundColor?: keyof ColorScheme;

  /**
   * Selection of icon color options.
   */
  iconColor?: keyof ColorScheme;

  /**
   * Selection of icons.
   */
  iconName: keyof typeof paths;

  /**
   * Sets the Badge to be an inline element.
   */
  isInline?: boolean;
};
