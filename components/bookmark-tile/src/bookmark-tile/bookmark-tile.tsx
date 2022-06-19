import { Icon } from '@arbutus/component.icon';
import { Text } from '@arbutus/component.text';
import { Tile } from '@arbutus/component.tile';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
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
      className={mergeClasses(classes.root, space.p3, className)}
    >
      <div className={space.p3}>
        <header className={mergeClasses(classes.header, space.mb4)}>
          {iconSrc && iconAlt ? (
            <img src={iconSrc} alt={iconAlt} className={classes.image} />
          ) : (
            <div className={classes.fallbackIcon}>
              <Icon iconName="link" color="brand-accent" />
            </div>
          )}
          <Icon iconName="open" color="secondary" />
        </header>
        <Text as="h3" variant="caption" className={space.mb1}>
          {title}
        </Text>
        <Text variant="description" color="secondary">
          {description}
        </Text>
      </div>
    </Tile>
  );
};
