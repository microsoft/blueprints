import type { TextProps } from '@arbutus/component.text';

export type HeadingUrlProps = {
  /**
   * Link to the heading section.
   */
  headingUrl?: string;

  /**
   * Screen-reader accessible label for the copy heading URL action.
   * @default 'Copy heading URL to clipboard.'
   */
  copyLabel?: string;
};

export type NoHeadingUrlProps = {
  /**
   * Link to the heading section.
   */
  headingUrl?: never;

  /**
   * Screen-reader accessible label for the copy heading URL action.
   * @default 'Copy heading URL to clipboard.'
   */
  copyLabel?: never;
};
export type HeadingProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Heading element.
   * @default 'h1'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & Pick<TextProps, 'color' | 'variant'> &
  (HeadingUrlProps | NoHeadingUrlProps);
