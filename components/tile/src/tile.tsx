import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useTileStyles } from './tile.styles';
import type { TileProps } from './tile.types';

const isCard = ({ variant }: Pick<TileProps, 'variant'>) => variant === 'card';
const isImage = ({ variant }: Pick<TileProps, 'variant'>) => variant === 'image';
const isSolidColor = ({ variant }: Pick<TileProps, 'variant'>) =>
  variant === 'solid-color';

export const Tile: FC<TileProps> = ({
  children,
  variant,
  as: Root = 'div',
  backgroundColor = 'tile',
  imageSrc,
  className,
  onClick,
}) => {
  const classes = useTileStyles();

  let variantClasses = '';

  switch (true) {
    case isCard({ variant }): {
      variantClasses = mergeClasses(
        classes.root,
        classes.card,
        onClick && classes.interactive,
        className,
      );

      break;
    }
    case isImage({ variant }): {
      variantClasses = mergeClasses(
        classes.root,
        classes.image,
        onClick && classes.interactive,
        className,
      );

      break;
    }
    case isSolidColor({ variant }): {
      variantClasses = mergeClasses(
        classes.root,
        classes.solidColor,
        onClick && classes.interactive,
        classes[backgroundColor],
        className,
      );

      break;
    }
    default: {
      variantClasses = mergeClasses(classes.root, className);
    }
  }

  const imageBackground = isImage({ variant })
    ? { style: { backgroundImage: `url("${imageSrc}")` } }
    : {};

  return (
    <Root className={variantClasses} {...imageBackground} onClick={onClick}>
      {children}
    </Root>
  );
};
