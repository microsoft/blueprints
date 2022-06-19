import { Badge } from '@arbutus/component.badge';
import { Text } from '@arbutus/component.text';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useRecommendationTileStyles } from './recommendation-tile.styles';
import type { RecommendationTileProps } from './recommendation-tile.types';

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

  return (
    <div className={className}>
      {imageSrc && imageAlt && (
        <div className={classes.imageContainer}>
          <Badge
            iconName={recommendation === 'positive' ? 'check' : 'x'}
            backgroundColor={recommendation === 'positive' ? 'positive' : 'negative'}
            className={classes.overlayBadge}
          />
          <img
            src={imageSrc}
            alt={imageAlt}
            className={mergeClasses(classes.image, space.mb4)}
          />
        </div>
      )}
      <Text variant="caption" color={recommendation} className={space.mb1}>
        {(!imageSrc || !imageAlt) && (
          <Badge
            iconName={recommendation === 'positive' ? 'check' : 'x'}
            backgroundColor={recommendation === 'positive' ? 'positive' : 'negative'}
            isInline
            className={space.mr2}
          />
        )}
        {title}
      </Text>
      <Text variant="description">{description}</Text>
    </div>
  );
};
