import type { SyntheticEvent } from 'react';

type WithIcon = {
  /**
   * Custom optional icon.
   */
  iconSrc?: string;

  /**
   * Accessible icon description.
   */
  iconAlt: string;
};

type WithoutIcon = {
  /**
   * Custom optional icon.
   */
  iconSrc?: never;

  /**
   * Accessible icon description.
   */
  iconAlt?: never;
};

export type BookmarkTileProps = {
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
   * Click handler.
   */
  onClick: (e?: SyntheticEvent) => void;
} & (WithIcon | WithoutIcon);
