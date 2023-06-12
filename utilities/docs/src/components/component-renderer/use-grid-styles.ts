import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { ComponentType } from './component-renderer.types';

const gridClasses = {
  full: {
    gridTemplateColumns: '1fr'
  },
  halves: {
    gridTemplateColumns: '1fr 1fr'
  },
  thirds: {
    gridTemplateColumns: '1fr 1fr 1fr'
  },
  small: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))'
  },
  large: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(24rem, 1fr))'
  }
};

export const GRID_SETTINGS: Record<ComponentType, keyof typeof gridClasses> = {
  'atoms.link': 'full',
  'blocks.code-snippet': 'full',
  'blocks.embed': 'full',
  'blocks.guidance': 'full',
  'blocks.heading': 'full',
  'blocks.image': 'halves',
  'lists.mark-list': 'halves',
  'lists.ordered-list': 'halves',
  'tiles.action-list-tile': 'small',
  'tiles.bookmark-tile': 'small',
  'tiles.image-tile': 'small',
  'tiles.person-tile': 'small',
  'tiles.recommendation': 'halves',
  "blocks.prop-table": 'full',
  "tiles.illustration-tile": 'small',
};

export const useGridStyles = makeStyles({
  container: {
    paddingTop: tokens.spacingVerticalXXL,
    paddingBottom: tokens.spacingVerticalXXL
  },
  root: {
    display: 'grid',
    columnGap: tokens.spacingHorizontalL,
    rowGap: tokens.spacingVerticalXXL
  },
  ...gridClasses
});
