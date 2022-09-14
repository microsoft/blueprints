export type TypeVariant = 'new' | 'error' | 'warning' | 'info' | 'success' | 'accent';

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
   * Inline variant.
   * @default false
   */
  isInline?: boolean;
};
