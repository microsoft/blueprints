import { mergeClasses } from '@griffel/react';
import { Icon } from '@microsoft/arbutus.icon';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import type { FC } from 'react';
import * as React from 'react';

import { useActionTileStyles } from './action-tile.styles';
import type { ActionTileProps } from './action-tile.types';

export const ActionTile: FC<ActionTileProps> = ({
  className,
  title,
  onClick,
  description,
  imageSrc,
  imageAlt,
}) => {
  // Styles
  const classes = useActionTileStyles();
  const withImage = imageSrc && imageAlt;

  return (
    <Tile
      as="button"
      variant="card"
      className={mergeClasses(
        classes.root,
        withImage ? classes.withImage : classes.withoutImage,
        className,
      )}
      onClick={onClick}
    >
      {withImage && <img src={imageSrc} alt={imageAlt} className={classes.image} />}
      <div>
        <Text block variant="caption">
          {title}
        </Text>
        {description && (
          <Text variant="description" color="secondary">
            {description}
          </Text>
        )}
      </div>
      <Icon iconName="chevron-right" color="tertiary" />
    </Tile>
  );
};
