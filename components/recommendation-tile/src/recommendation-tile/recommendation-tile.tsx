import { mergeClasses } from '@griffel/react';
import { Badge } from '@microsoft/arbutus.badge';
import { Link } from '@microsoft/arbutus.link';
import { MarkList, MarkListItem } from '@microsoft/arbutus.mark-list';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { useRecommendationTileStyles } from './recommendation-tile.styles';
import type { RecommendationTileProps } from './recommendation-tile.types';
import { getBackgroundColor } from './utilities';

export const RecommendationTile: FC<RecommendationTileProps> = ({
  className,
  description,
  imageAs: Image,
  imageProps,
  linkAs,
  linkProps,
  linkText,
  linkWithIcon,
  recommendation,
  recommendationsList,
  title,
}) => {
  // Styles
  const classes = useRecommendationTileStyles();
  const space = useSpaceStyles();

  return (
    <Tile
      variant="solid-color"
      backgroundColor={getBackgroundColor({ withImage: Boolean(Image), recommendation })}
      className={mergeClasses(!Image && space.p9, className)}
    >
      {Image && (
        <div className={classes.imageContainer}>
          <Badge
            iconName={recommendation === 'positive' ? 'check' : 'x'}
            color={recommendation === 'positive' ? 'positive' : 'negative'}
            className={classes.overlayBadge}
          />
          <Image {...imageProps} className={mergeClasses(classes.image, space.mb4)} />
        </div>
      )}
      <Text
        block
        variant={recommendationsList ? 'headline' : 'caption'}
        color={recommendation}
        className={recommendationsList ? space.mb7 : space.mb5}
      >
        {!Image ||
          (recommendationsList && (
            <Badge
              iconName={recommendation === 'positive' ? 'check' : 'x'}
              color={recommendation === 'positive' ? 'positive' : 'negative'}
              isInline
              className={space.mr5}
            />
          ))}
        {title}
      </Text>
      {description && (
        <Text block variant="description">
          {description}
        </Text>
      )}
      {recommendationsList && (
        <MarkList
          iconName={recommendation === 'positive' ? 'check' : 'x'}
          iconColor={recommendation === 'positive' ? 'positive' : 'negative'}
          className={mergeClasses(classes.recommendationList, space.mt5)}
        >
          {recommendationsList.map((recommendation, index) => (
            <MarkListItem key={index}>{recommendation}</MarkListItem>
          ))}
        </MarkList>
      )}
      {linkAs && linkText && (
        <Link
          as={linkAs}
          variant="caption"
          elementProps={linkProps}
          className={space.mt5}
          withIcon={linkWithIcon}
        >
          {linkText}
        </Link>
      )}
    </Tile>
  );
};
