import { makeStyles, shorthands } from '@griffel/react';

export const useRecommendationTileStyles = makeStyles({
  image: {
    ...shorthands.borderRadius('var(--arbutus-shape-border-radius)'),
    height: '13.75rem',
    width: '100%',
    objectFit: 'cover',
  },
  imageContainer: {
    position: 'relative',
  },
  overlayBadge: {
    position: 'absolute',
    left: 'var(--space-3)',
    top: 'var(--space-3)',
  },
  badgePositive: {
    backgroundColor: 'var(--color-positive)',
  },
  badgeNegative: {
    backgroundColor: 'var(--color-negative)',
  },
});
