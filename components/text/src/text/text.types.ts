import type { ColorScheme } from '@arbutus/style.theming';
import type { ElementType } from 'react';

export type TextProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Custom root element.
   */
  as?: ElementType;

  /**
   * Selection of text styles.
   */
  variant?: 'jumbo' | 'headline' | 'subheading' | 'leading' | 'paragraph' | 'caption' | 'description';

  /**
   * Selection of color options.
   */
  color?: keyof ColorScheme;
};
