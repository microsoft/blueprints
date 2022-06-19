import { Text } from '@arbutus/component.text';
import { Tile } from '@arbutus/component.tile';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useIllustrationTileStyles } from './illustration-tile.styles';
import type { IllustrationTileProps } from './illustration-tile.types';

export const IllustrationTile: FC<IllustrationTileProps> = ({
  className,
  title,
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
      className={mergeClasses(classes.root, space.p4, className)}
      onClick={onClick}
    >
      <img src={illustrationSrc} alt={illustrationAlt} className={space.mb4} />
      <Text variant="caption">{title}</Text>
    </Tile>
  );
};
