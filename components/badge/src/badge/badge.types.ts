import type { paths } from '@arbutus/component.icon';

export type ColorVariant = 'accent' | 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'negative' | 'positive' | 'warning' | 'danger' | 'info';

export type ColorValue = string;
export type ColorMap = Record<ColorVariant, ColorValue>;

export type BadgeProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Selection of color options.
   */
  color?: ColorVariant;

  /**
   * Selection of icons.
   */
  iconName: keyof typeof paths;

  /**
   * Sets the Badge to be an inline element.
   */
  isInline?: boolean;
};
