import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { mapToStyles } from '@microsoft/arbutus.style-utilities';

import type { ColorMap, ColorValue } from './icon.types';

export const colorMap: ColorMap = {
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
  ['accent-inverse']: tokens.colorBrandBackground,
  ['primary-inverse']: tokens.colorNeutralBackground1,
  ['secondary-inverse']: tokens.colorNeutralBackground2,
  ['tertiary-inverse']: tokens.colorNeutralBackground3,
  ['quaternary-inverse']: tokens.colorNeutralBackground4,
  ['negative-inverse']: tokens.colorPaletteDarkOrangeBackground1,
  ['positive-inverse']: tokens.colorPaletteGreenBackground1,
  ['warning-inverse']: tokens.colorPaletteMarigoldBackground1,
  ['danger-inverse']: tokens.colorPaletteDarkOrangeBackground1,
  ['info-inverse']: tokens.colorBrandBackground2,
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
