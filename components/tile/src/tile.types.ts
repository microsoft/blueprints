import type { ElementType, SyntheticEvent } from 'react';

export type ColorVariant = 'none' | 'accent' | 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'negative' | 'positive' | 'warning' | 'danger' | 'info' | 'tile';

export type SolidColorTileProps = {
  variant: 'solid-color';

  /**
   * Selection of color options.
   */
  backgroundColor?: ColorVariant;

  /**
   * [NOTE] Don not use with Solid Color variant.
   */
  imageSrc?: never;
};

export type ImageTileProps = {
  variant: 'image';

  /**
   * Background image source.
   */
  imageSrc: string;

  /**
   * [NOTE] Don not use with Solid Color variant.
   */
  backgroundColor?: never;
};

export type CardTileProps = {
  variant: 'card';

  /**
   * [NOTE] Don not use with Solid Color variant.
   */
  imageSrc?: never;

  /**
   * [NOTE] Don not use with Solid Color variant.
   */
  backgroundColor?: never;
};

export type TileProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Custom root element.
   */
  as?: ElementType;

  /**
   * Click handler.
   */
  onClick?: (e?: SyntheticEvent) => void;
} & (CardTileProps | ImageTileProps | SolidColorTileProps);
