import type { ColorScheme } from '@arbutus/style.theming';

import type { sizeClasses } from './icon.styles';
import type { paths } from './icons';

export type IconProps = {
  /**
   * Selection of icons.
   */
  iconName: keyof typeof paths;

  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Selection of color options.
   */
  color?: keyof ColorScheme;

  /**
   * Selection of size options.
   */
  size?: keyof typeof sizeClasses;

  /**
   * Description of the icon for assistive technology. No label hides the icon from assistive technology
   * (applicable for purely decorative elements).
   */
  label?: string;

  /**
   * Sets the Icon to be an inline element.
   */
  isInline?: boolean;
};
