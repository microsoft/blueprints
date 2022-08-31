import type { ElementType, SyntheticEvent } from 'react';

export type ImageTileProps = {
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
  imageProps?: Record<string, unknown>;

  /**
   * Title text.
   */
  title?: string;

  /**
   * Description text.
   */
  description?: string;

  /**
   * Click handler.
   */
  onClick: (e?: SyntheticEvent) => void;
};
