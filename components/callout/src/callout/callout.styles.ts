import { mapToStyles } from '@arbutus/style.utilities';
import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

import type { ColorMap, ColorValue } from './callout.types';

export const colorMap: ColorMap = {
  error: {
    background: tokens.colorPaletteDarkOrangeBackground1,
    stroke: tokens.colorPaletteDarkOrangeBorder1,
  },
  warning: {
    background: tokens.colorPaletteMarigoldBackground1,
    stroke: tokens.colorPaletteMarigoldBorder1,
  },
  success: {
    background: tokens.colorPaletteGreenBackground1,
    stroke: tokens.colorPaletteGreenBorder1,
  },
  info: {
    background: tokens.colorNeutralBackground2,
    stroke: tokens.colorNeutralStroke2,
  },
  accent: {
    background: tokens.colorBrandBackground2,
    stroke: tokens.colorBrandStroke2,
  },
};

const colorStyleFunction = ({ background, stroke }: ColorValue) => ({
  backgroundColor: background,
  ...shorthands.borderColor(stroke),
});

const statusClasses = mapToStyles<ColorValue, ColorMap>(colorMap, colorStyleFunction);

export const useCalloutStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    display: 'grid',
    gridTemplateColumns: `${tokens.spacingVerticalXXL} auto`,
    columnGap: tokens.spacingHorizontalL,
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    ...shorthands.borderWidth(tokens.strokeWidthThin),
    ...shorthands.borderStyle('solid'),
  },
  ...statusClasses,
});
