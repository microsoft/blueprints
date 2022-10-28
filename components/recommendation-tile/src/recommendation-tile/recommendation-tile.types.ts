import type { ElementType } from 'react';

type WithImage = {
  /**
   * Image element.
   */
  imageAs: ElementType;

  /**
   * Image element props.
   */
  imageProps?: Record<string, unknown>;
};

type WithoutImage = {
  imageAs?: never;
  imageProps?: never;
};

type WithLink = {
  /**
   * Link text.
   */
  linkText: string;
  /**
   * Link element.
   */
  linkAs: ElementType;

  /**
   * Link element props.
   */
  linkProps?: Record<string, unknown>;

  /**
   * Adds an icon that indicates that the link will open in a new tab.
   */
  linkWithIcon?: boolean;
};

type WithoutLink = {
  linkAs?: never;
  linkText?: never;
  linkProps?: never;
  linkWithIcon?: never;
};

export type RecommendationTileProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Title of the bookmark.
   */
  title: string;

  /**
   * Description of the bookmark.
   */
  description: string;

  /**
   * Sets whether this tile represents an encouraged or discouraged example
   */
  recommendation: 'positive' | 'negative';
} & (WithImage | WithoutImage) &
  (WithLink | WithoutLink);
