export type StatusVariant = 'error' | 'warning' | 'info' | 'success' | 'accent';

export type CalloutIconProps = {
  status?: StatusVariant;
};

export type ColorValue = {
  text: string;
  foreground: string;
  background: string;
  stroke: string;
};
export type ColorMap = Record<StatusVariant, ColorValue>;

export type CalloutProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * String that renders as the Header text
   */
  title: string;

  /**
   * String that renders as the Header text
   */
  status?: StatusVariant;
};
