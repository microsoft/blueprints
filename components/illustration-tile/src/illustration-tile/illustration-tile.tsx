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
