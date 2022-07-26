import type { RecommendationTileProps } from './recommendation-tile.types';

type GetBackgroundColorArgs = Pick<RecommendationTileProps, 'recommendation'> & {
  withImage: boolean;
};

export const getBackgroundColor = ({ withImage, recommendation }: GetBackgroundColorArgs) => {
  switch (true) {
    case withImage: {
      return 'none';
    }

    case !withImage && recommendation === 'positive': {
      return 'positive';
    }

    case !withImage && recommendation === 'negative': {
      return 'negative';
    }

    default: {
      return 'none';
    }
  }
};
