import { arbutusTokens } from '@arbutus/style.theming';
import { mapToStyles } from '@arbutus/style.utilities';
import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

import type { ColorVariant } from './tile.types';

const colorMap: Record<ColorVariant, string> = {
  ...arbutusTokens.color.background,
  tile: arbutusTokens.color.tile,
  negative: arbutusTokens.color.negative.background,
  positive: arbutusTokens.color.positive.background,
  warning: arbutusTokens.color.warning.background,
  danger: arbutusTokens.color.danger.background,
  info: arbutusTokens.color.info.background,
  accent: arbutusTokens.color.brand.background,
};

const colorStyleFunction = (color: string) => ({
  backgroundColor: color,
});
const colorClasses = mapToStyles<string, Record<ColorVariant, string>>(
  colorMap,
  colorStyleFunction,
);

export const useTileStyles = makeStyles({
  root: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  interactive: {
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    ':focus': {
      ...shorthands.outline('none'),
      boxShadow: 'var(--arbutus-shadow-focus)',
    },
  },
  card: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius('0.5rem'),
    boxShadow: 'var(--arbutus-shadow-card)',
  },
  image: {
    backgroundColor: 'var(--color-tile)',
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
  },
  solidColor: {
    ...shorthands.borderRadius('var(--arbutus-shape-border-radius)'),
  },
  ...colorClasses,
});
