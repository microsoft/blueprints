import type { SyntheticEvent } from 'react';

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

export type ActionTileProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Title of the action.
   */
  title: string;

  /**
   * Concise description of the action.
   */
  description?: string;

  /**
   * Click handler.
   */
  onClick: (e?: SyntheticEvent) => void;
} & (WithImage | WithoutImage);
