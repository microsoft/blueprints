import { mapToStyles } from '@arbutus/style.utilities';
import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

import type { ColorMap, ColorValue } from './tag.types';

export const colorMap: ColorMap = {
  new: {
    background: tokens.colorPaletteLavenderBackground2,
    text: tokens.colorPaletteLavenderForeground2,
  },
  error: {
    background: tokens.colorPaletteDarkOrangeBackground2,
    text: tokens.colorPaletteDarkOrangeForeground2,
  },
  warning: {
    background: tokens.colorPaletteMarigoldBackground2,
    text: tokens.colorPaletteMarigoldForeground2,
  },
  success: {
    background: tokens.colorPaletteGreenBackground2,
    text: tokens.colorPaletteGreenForeground2,
  },
  info: {
    background: tokens.colorNeutralBackground3,
    text: tokens.colorNeutralForeground3,
  },
  accent: {
    background: tokens.colorBrandBackground2,
    text: tokens.colorBrandForeground2,
  },
};

const colorStyleFunction = ({ background, text }: ColorValue) => ({
  backgroundColor: background,
  color: text,
});

const typeClasses = mapToStyles<ColorValue, ColorMap>(colorMap, colorStyleFunction);

export const useTagStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    display: 'block',
    paddingTop: tokens.spacingVerticalXS,
    paddingBottom: tokens.spacingVerticalXS,
    paddingLeft: tokens.spacingHorizontalS,
    paddingRight: tokens.spacingHorizontalS,
    columnGap: tokens.spacingHorizontalL,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    textTransform: 'uppercase',
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    // ...shorthands.borderWidth(tokens.strokeWidthThin),
    // ...shorthands.borderStyle('solid'),
  },
  ...typeClasses,
  inline: {
    display: 'inline-block',
  },
});
