import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useRecommendationTileStyles = makeStyles({
  image: {
    ...shorthands.borderRadius('var(--arbutus--shape-border-radius)'),
    height: '13.75rem',
    width: '100%',
    objectFit: 'cover',
  },
  imageContainer: {
    position: 'relative',
  },
  overlayBadge: {
    position: 'absolute',
    left: tokens.spacingHorizontalM,
    top: tokens.spacingHorizontalM,
  },
  recommendationList: {
    paddingLeft: 0,
  },
});
