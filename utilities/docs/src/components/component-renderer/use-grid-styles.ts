import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

import type { ComponentType } from './component-renderer.types';

const gridClasses = {
  full: {
    gridTemplateColumns: '1fr',
  },
  halves: {
    gridTemplateColumns: '1fr 1fr',
  },
  thirds: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  small: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
  },
  large: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(24rem, 1fr))',
  },
};

export const GRID_SETTINGS: Record<ComponentType, keyof typeof gridClasses> = {
  'atoms.link': 'full',
  'blocks.anatomy': 'full',
  'blocks.code-snippet': 'full',
  'blocks.component-preview': 'full',
  'blocks.embed': 'full',
  'blocks.guidance': 'full',
  'blocks.heading': 'full',
  'blocks.image': 'halves',
  'blocks.introduction-text': 'full',
  'blocks.prop-table': 'full',
  'blocks.sandbox': 'full',
  'blocks.sidenote': 'halves',
  'blocks.text': 'full',
  'lists.mark-list': 'halves',
  'lists.ordered-list': 'halves',
  'lists.table-list': 'full',
  'tiles.action-list-tile': 'small',
  'tiles.bookmark-tile': 'small',
  'tiles.illustration-tile': 'small',
  'tiles.image-tile': 'small',
  'tiles.person-tile': 'small',
  'tiles.recommendation': 'halves',
};

export const useGridStyles = makeStyles({
  container: {
    paddingTop: tokens.spacingVerticalXXL,
    paddingBottom: tokens.spacingVerticalXXL,
  },
  root: {
    display: 'grid',
    columnGap: tokens.spacingHorizontalL,
    rowGap: tokens.spacingVerticalXL,
  },
  ...gridClasses,
});
