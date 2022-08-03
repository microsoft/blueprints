import type { paths } from '@arbutus/component.icon';
import type { SyntheticEvent } from 'react';

export type ColorVariant = 'accent' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

export type ColorValue = {
  background: string;
  backgroundHover: string;
  outline: string;
  stroke: string;
  strokeHover: string;
};
export type ColorMap = Record<ColorVariant, ColorValue>;

export type IconButtonProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Descriptive label of the button.
   */
  label: string;

  /**
   * Selection of icons.
   */
  iconName: keyof typeof paths;

  /**
   * Selection of color options.
   */
  color?: ColorVariant;

  /**
   * Click handler.
   */
  onClick: (e?: SyntheticEvent) => void;
};
