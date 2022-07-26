import { Badge } from '@arbutus/component.badge';
import { Text } from '@arbutus/component.text';
import { Tile } from '@arbutus/component.tile';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useRecommendationTileStyles } from './recommendation-tile.styles';
import type { RecommendationTileProps } from './recommendation-tile.types';
import { getBackgroundColor } from './utilities';

export const RecommendationTile: FC<RecommendationTileProps> = ({
  className,
  title,
  description,
  recommendation,
  imageSrc,
  imageAlt,
}) => {
  // Styles
  const classes = useRecommendationTileStyles();
  const space = useSpaceStyles();

  const withImage = Boolean(imageSrc && imageAlt);

  return (
    <Tile
      variant="solid-color"
      backgroundColor={getBackgroundColor({ withImage, recommendation })}
      className={mergeClasses(!withImage && space.p9, className)}
    >
      {withImage && (
        <div className={classes.imageContainer}>
          <Badge
            iconName={recommendation === 'positive' ? 'check' : 'x'}
            color={recommendation === 'positive' ? 'positive' : 'negative'}
            className={classes.overlayBadge}
          />
          <img
            src={imageSrc}
            alt={imageAlt}
            className={mergeClasses(classes.image, space.mb4)}
          />
        </div>
      )}
      <Text block variant="caption" color={recommendation} className={space.mb5}>
        {!withImage && (
          <Badge
            iconName={recommendation === 'positive' ? 'check' : 'x'}
            color={recommendation === 'positive' ? 'positive' : 'negative'}
            isInline
            className={space.mr5}
          />
        )}
        {title}
      </Text>
      <Text block variant="description">
        {description}
      </Text>
    </Tile>
  );
};
