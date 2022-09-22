import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';
import { mapToStyles } from '@microsoft/arbutus.style-utilities';

import type { ColorMap, ColorValue } from './badge.types';

export const colorMap: ColorMap = {
  accent: tokens.colorBrandBackground2,
  primary: tokens.colorNeutralForeground1,
  secondary: tokens.colorNeutralForeground2,
  tertiary: tokens.colorNeutralForeground3,
  quaternary: tokens.colorNeutralForeground4,
  negative: tokens.colorPaletteDarkOrangeForeground1,
  positive: tokens.colorPaletteGreenForeground1,
  warning: tokens.colorPaletteMarigoldForeground1,
  danger: tokens.colorPaletteDarkOrangeForeground1,
  info: tokens.colorBrandForeground2,
};

const colorStyleFunction = (color: ColorValue) => ({ backgroundColor: color });

const colorClasses = mapToStyles<ColorValue, ColorMap>(colorMap, colorStyleFunction);

export const useBadgeStyles = makeStyles({
  root: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    height: tokens.spacingHorizontalXXL,
    width: tokens.spacingHorizontalXXL,
    ...shorthands.borderRadius(tokens.spacingHorizontalXXL),
  },
  inline: {
    display: 'inline-grid',
    verticalAlign: 'center',
  },
  ...colorClasses,
});
