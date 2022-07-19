import { mapToStyles } from '@arbutus/style.utilities';
import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

import type { ColorMap, ColorValue } from './badge.types';

const colorMap: ColorMap = {
  accent: {
    color: tokens.colorBrandForeground1,
    backgroundColor: tokens.colorBrandBackground2,
  },
  primary: {
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
  },
  secondary: {
    backgroundColor: tokens.colorNeutralBackground2,
    color: tokens.colorNeutralForeground2,
  },
  tertiary: {
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground3,
  },
  quaternary: {
    backgroundColor: tokens.colorNeutralBackground4,
    color: tokens.colorNeutralForeground4,
  },
  negative: {
    backgroundColor: tokens.colorPaletteDarkOrangeBackground1,
    color: tokens.colorPaletteDarkOrangeForeground1,
  },
  positive: {
    backgroundColor: tokens.colorPaletteGreenBackground1,
    color: tokens.colorPaletteGreenForeground1,
  },
  warning: {
    backgroundColor: tokens.colorPaletteMarigoldBackground1,
    color: tokens.colorPaletteMarigoldForeground1,
  },
  danger: {
    backgroundColor: tokens.colorPaletteDarkOrangeBackground1,
    color: tokens.colorPaletteDarkOrangeForeground1,
  },
  info: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
  },
};

const colorStyleFunction = ({ backgroundColor, color }: ColorValue) => ({
  backgroundColor,
  color,
});
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
