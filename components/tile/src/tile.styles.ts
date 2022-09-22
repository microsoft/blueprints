import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';
import { mapToStyles } from '@microsoft/arbutus.style-utilities';

import type { ColorVariant } from './tile.types';

const colorMap: Record<ColorVariant, string> = {
  none: 'transparent',
  primary: tokens.colorNeutralBackground1,
  secondary: tokens.colorNeutralBackground2,
  tertiary: tokens.colorNeutralBackground3,
  quaternary: tokens.colorNeutralBackground4,
  tile: tokens.colorNeutralBackground6,
  negative: tokens.colorPaletteDarkOrangeBackground1,
  positive: tokens.colorPaletteGreenBackground1,
  warning: tokens.colorPaletteMarigoldBackground1,
  danger: tokens.colorPaletteDarkOrangeBackground1,
  info: tokens.colorNeutralBackground2,
  accent: tokens.colorBrandBackground2,
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
    ...shorthands.borderStyle('none'),
    ...shorthands.borderColor('transparent'),
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    ':focus': {
      outlineColor: tokens.colorBrandForeground2,
    },
  },
  card: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    boxShadow: tokens.shadow4,
  },
  interactiveCard: {
    ':hover': {
      boxShadow: tokens.shadow16,
    },
  },
  image: {
    backgroundColor: tokens.colorNeutralBackground6,
    ...shorthands.borderRadius('var(--arbutus--shape-border-radius)'),
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
  },
  solidColor: {
    ...shorthands.borderRadius('var(--arbutus--shape-border-radius)'),
  },
  ...colorClasses,
});
