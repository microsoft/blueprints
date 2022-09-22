import { mergeClasses } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { useIllustrationTileStyles } from './illustration-tile.styles';
import type { IllustrationTileProps } from './illustration-tile.types';

export const IllustrationTile: FC<IllustrationTileProps> = ({
  className,
  title,
  description,
  illustrationAlt,
  illustrationSrc,
  onClick,
}) => {
  // Styles
  const classes = useIllustrationTileStyles();
  const space = useSpaceStyles();

  return (
    <Tile
      as={onClick ? 'button' : 'div'}
      variant={onClick ? 'card' : 'solid-color'}
      className={mergeClasses(
        classes.root,
        onClick && classes.isInteractive,
        space.p9,
        className,
      )}
      onClick={onClick}
    >
      <img src={illustrationSrc} alt={illustrationAlt} />
      {title && (
        <Text block variant="caption" align="center" className={space.mt4}>
          {title}
        </Text>
      )}
      {description && (
        <Text
          block
          variant="description"
          color="secondary"
          align="center"
          className={space.mt4}
        >
          {description}
        </Text>
      )}
    </Tile>
  );
};
