import type { logos } from '@arbutus/component.logo';
import type { ElementType } from 'react';

export type GuidanceLegendListItem = {
  /**
   * Heading text.
   */
  heading?: string;

  /**
   * Description text.
   */
  description?: string;
};

export type GuidanceProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Image element.
   * @default 'img'
   */
  imageAs: ElementType;

  /**
   * Image element props.
   */
  imageProps: Record<string, unknown>;

  /**
   * Selection of logos.
   */
  logoName?: keyof typeof logos;

  /**
   * Accessible label for the logo.
   */
  logoLabel?: string;

  /**
   * File name of the image.
   */
  fileTitle: string;

  /**
   * Descriptive label of the open button.
   */
  openButtonLabel?: string;

  /**
   * The URL of the Figma file you want to embed.
   */
  url: string;

  /**
   * Heading text.
   */
  heading?: string;

  /**
   * Description text.
   */
  description?: string;

  /**
   * Legend list items.
   */
  legendListItems?: GuidanceLegendListItem[];
};
