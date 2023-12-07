import type { logos } from '@microsoft/arbutus.logo';
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

type GuidanceWithFileProps = {
  /**
   * The URL of the Figma file you want to embed.
   */
  url: string;
  /**
   * File name of the image.
   */
  fileTitle: string;

  /**
   * Selection of logos.
   */
  logoName?: keyof typeof logos;

  /**
   * Accessible label for the logo.
   */
  logoLabel?: string;

  /**
   * Descriptive label of the open button.
   */
  openButtonLabel?: string;
};

type GuidanceWithoutFileProps = {
  /**
   * The URL of the Figma file you want to embed.
   */
  url?: never;
  /**
   * File name of the image.
   */
  fileTitle?: never;

  /**
   * Selection of logos.
   */
  logoName?: never;

  /**
   * Accessible label for the logo.
   */
  logoLabel?: never;

  /**
   * Descriptive label of the open button.
   */
  openButtonLabel?: never;
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
} & (GuidanceWithFileProps | GuidanceWithoutFileProps);
