import { SVGAttributes } from 'react';
import type { sizeClasses } from './icon.styles';
import type { paths } from './icons';

export type ColorVariant =
  | 'accent'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'negative'
  | 'positive'
  | 'warning'
  | 'danger'
  | 'info'
  | 'accent-inverse'
  | 'primary-inverse'
  | 'secondary-inverse'
  | 'tertiary-inverse'
  | 'quaternary-inverse'
  | 'negative-inverse'
  | 'positive-inverse'
  | 'warning-inverse'
  | 'danger-inverse'
  | 'info-inverse';
export type ColorValue = string;
export type ColorMap = Record<ColorVariant, ColorValue>;

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
  color?: ColorVariant;

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
} & SVGAttributes<SVGSVGElement>;
