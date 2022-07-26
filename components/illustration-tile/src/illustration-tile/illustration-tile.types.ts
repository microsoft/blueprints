import type { SyntheticEvent } from 'react';

export type IllustrationTileProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Title of the bookmark.
   */
  title: string;

  /**
   * Custom optional icon.
   */
  illustrationSrc: string;

  /**
   * Accessible icon description.
   */
  illustrationAlt: string;

  /**
   * Click handler.
   */
  onClick?: (e?: SyntheticEvent) => void;
};
