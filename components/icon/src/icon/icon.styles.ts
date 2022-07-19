import { mapToStyles } from '@arbutus/style.utilities';
import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

import type { ColorMap, ColorValue } from './icon.types';

const colorMap: ColorMap = {
  accent: tokens.colorBrandForeground1,
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
const colorStyleFunction = (color: ColorValue) => ({
  color,
});

export const colorClasses = mapToStyles<ColorValue, ColorMap>(
  colorMap,
  colorStyleFunction,
);

export const sizeClasses = {
  small: {
    height: tokens.spacingVerticalM,
  },
  medium: {
    height: tokens.spacingVerticalL,
  },
  large: {
    height: tokens.spacingVerticalXL,
  },
};

export const useIconStyles = makeStyles({
  ...colorClasses,
  ...sizeClasses,
  root: {
    width: 'auto',
  },
  inline: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
});
