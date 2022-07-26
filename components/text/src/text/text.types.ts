import type { TextProps as FluentTextProps } from '@fluentui/react-text';

export type StyleVariant = 'jumbo' | 'headline' | 'subheading' | 'leading' | 'paragraph' | 'caption' | 'description';

export type ColorVariant = 'accent' | 'action' | 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'negative' | 'positive' | 'warning' | 'danger' | 'info' | 'background';

export type TextProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Selection of text styles.
   */
  variant?: StyleVariant;

  /**
   * Selection of color options.
   */
  color?: ColorVariant;
} & FluentTextProps;
