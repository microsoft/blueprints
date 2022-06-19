type WithImage = {
  /**
   * Custom optional icon.
   */
  imageSrc?: string;

  /**
   * Accessible icon description.
   */
  imageAlt: string;
};

type WithoutImage = {
  /**
   * Custom optional icon.
   */
  imageSrc?: never;

  /**
   * Accessible icon description.
   */
  imageAlt?: never;
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
} & (WithImage | WithoutImage);
