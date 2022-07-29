import type { logos } from '@arbutus/component.logo';

import type { sizeClasses } from './embed.styles';

export type EmbedTypes = keyof typeof logos;

export type StorybookEmbedProps = {
  type: 'storybook';

  /**
   * This is optional. If you include it, people viewing an embedded Figma design will have the option of seeing it in
   * fullscreen. If you don’t include it, then your embed will not display any fullscreen option.
   * @see https://www.figma.com/developers/embed
   * @default true
   */
  allowFullScreen?: never;
};

export type FigmaEmbedProps = {
  type: 'figma';

  /**
   * This is optional. If you include it, people viewing an embedded Figma design will have the option of seeing it in
   * fullscreen. If you don’t include it, then your embed will not display any fullscreen option.
   * @see https://www.figma.com/developers/embed
   * @default true
   */
  allowFullScreen?: boolean;
};

export type EmbedProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Embed types supported.
   */
  type: EmbedTypes;

  /**
   * Title of the embed.
   */
  title: string;

  /**
   * Descriptive label of the open button.
   */
  openButtonLabel?: string;

  /**
   * The URL of the Figma file you want to embed.
   */
  url: string;

  /**
   * Size options.
   */
  size?: keyof typeof sizeClasses;
} & (FigmaEmbedProps | StorybookEmbedProps);
