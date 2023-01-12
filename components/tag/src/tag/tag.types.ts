import type { ReactNode } from 'react';

export type TypeVariant = 'new' | 'error' | 'warning' | 'info' | 'success' | 'accent';
export type SizeVariant = 'small' | 'medium';

export type CalloutIconProps = {
  status?: TypeVariant;
};

export type ColorValue = {
  background: string;
  text: string;
};

export type ColorMap = Record<TypeVariant, ColorValue>;

export type TagProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Type color variant options.
   * @default 'accent'
   */
  type?: TypeVariant;

  /**
   * Size variant options.
   * @default 'medium'
   */
  size?: SizeVariant;

  /**
   * Inline variant.
   * @default false
   */
  isInline?: boolean;

  children?: ReactNode | undefined;
};
