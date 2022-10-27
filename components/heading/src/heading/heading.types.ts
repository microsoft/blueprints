import type { TextProps } from '@microsoft/arbutus.text';

export type OnCopyArgs = { url: string };

export type HeadingUrlProps = {
  /**
   * Link to the heading section.
   */
  headingUrl: string;

  /**
   * Screen-reader accessible label for the copy heading URL action.
   * @default 'Copy heading URL to clipboard.'
   */
  copyLabel?: string;

  /**
   * onCopy callback that fires after a successful copy heading URL action.
   */
  onCopy?: (args0: OnCopyArgs) => void;
};

export type NoHeadingUrlProps = {
  headingUrl: undefined;
  copyLabel?: never;
  onCopy?: (args0: OnCopyArgs) => void;
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

  /**
   * Heading id.
   */
  id?: string;
} & Pick<TextProps, 'color' | 'variant'> &
  (HeadingUrlProps | NoHeadingUrlProps);
