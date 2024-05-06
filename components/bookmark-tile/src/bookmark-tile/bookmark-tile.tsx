import { mergeClasses } from '@griffel/react';
import { Icon } from '@microsoft/arbutus.icon';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { useBookmarkTileStyles } from './bookmark-tile.styles';
import type { BookmarkTileProps } from './bookmark-tile.types';

export const BookmarkTile: FC<BookmarkTileProps> = ({
  className,
  iconAlt,
  iconSrc,
  title,
  description,
  onClick,
}) => {
  // Styles
  const classes = useBookmarkTileStyles();
  const space = useSpaceStyles();

  return (
    <Tile
      as="button"
      variant="card"
      onClick={onClick}
      className={mergeClasses(classes.root, space.p9, className)}
    >
      <header className={mergeClasses(classes.header, space.mb7)}>
        {iconSrc && iconAlt ? (
          <img src={iconSrc} alt={iconAlt} className={classes.image} />
        ) : (
          <div className={classes.fallbackIcon}>
            <Icon iconName="link" color="accent" />
          </div>
        )}
        <Icon iconName="open" color="secondary" />
      </header>
      <Text block variant="caption" className={space.mb1}>
        {title}
      </Text>
      <Text block variant="description" color="secondary">
        {description}
      </Text>
    </Tile>
  );
};
