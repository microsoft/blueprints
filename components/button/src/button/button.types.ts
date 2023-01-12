import type { HTMLAttributes, ReactNode } from 'react';

export type ColorKey = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
export type ColorValue = {
  foreground: string;
  background: string;
  stroke: string;
};

export type ColorMap = Record<ColorKey, ColorValue>;

export type SizeKey = 'small' | 'medium' | 'large';
export type SizeValue = {
  x: string;
  y: string;
  fontSize: string;
};

export type SizeMap = Record<SizeKey, SizeValue>;

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  /**
   * Color of the button.
   */
  color?: ColorKey;

  /**
   * Size of the button.
   * @default 'medium'
   * */
  size?: SizeKey;

  /**
   * Shape variant options.
   * @default 'brick'
   */
  shape?: 'pill' | 'brick';

  children?: ReactNode | undefined;
};
