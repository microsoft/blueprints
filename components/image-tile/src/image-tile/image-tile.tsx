import { mergeClasses } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { useImageTileStyles } from './image-tile.styles';
import type { ImageTileProps } from './image-tile.types';

export const ImageTile: FC<ImageTileProps> = ({
  className,
  description,
  imageAs: Image = 'img',
  imageProps,
  onClick,
  title,
}) => {
  // Styles
  const classes = useImageTileStyles();
  const space = useSpaceStyles();

  return (
    <Tile variant="card" className={className} onClick={onClick}>
      <Image {...imageProps} className={classes.image} />
      {(title || description) && (
        <div className={mergeClasses(space.px9, space.pb7, space.pt4)}>
          {title && (
            <Text block variant="caption" className={description ? space.mb2 : ''}>
              {title}
            </Text>
          )}
          {description && (
            <Text block variant="description">
              {description}
            </Text>
          )}
        </div>
      )}
    </Tile>
  );
};
