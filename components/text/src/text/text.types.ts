import type { TextProps as FluentTextProps } from '@fluentui/react-text';
import type { ReactNode } from 'react';

export type StyleVariant = 'jumbo' | 'title' | 'headline' | 'subtitle' | 'leading' | 'paragraph' | 'caption' | 'description';

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

  children?: ReactNode | undefined;
} & FluentTextProps;
