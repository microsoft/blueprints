import * as React from 'react';
import type { FC } from 'react';
import { RecommendationTile } from '@microsoft/arbutus.recommendation-tile';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import type { RecommendationTileProps } from '@microsoft/arbutus.recommendation-tile';

import { RecommendationComponentData } from '../component-renderer.types';

type RecommendationTileComponentProps = RecommendationComponentData;

export const RecommendationTileComponent: FC<RecommendationTileComponentProps> = ({
  title,
  description,
  recommendation,
  recommendationsList,
  image,
}) => {
  const recommendationsListItems = recommendationsList?.map(
    (recommendation) =>
      `${recommendation.headline ? `${recommendation.headline} ` : ''}${
        recommendation.text
      }`,
  );

  const imageProps: Pick<RecommendationTileProps, 'imageAs' | 'imageProps'> = {};

  if (image) {
    imageProps.imageAs = GatsbyImage;
    imageProps.imageProps = {
      image: getImage(image.localFile),
      alt: image.alternativeText,
    };
  }

  return (
    // @ts-ignore TS incorrectly assumes that imageAs cannot receive undefined, when in fact it is necessary for the
    // component to render the correct variant.
    <RecommendationTile
      title={title}
      description={description}
      recommendation={recommendation}
      recommendationsList={recommendationsListItems}
      {...imageProps}
    />
  );
};
