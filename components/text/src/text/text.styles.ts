import { mapToStyles } from '@arbutus/style.utilities';
import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

import type { ColorVariant } from './text.types';

const colorMap: Record<ColorVariant, string> = {
  accent: tokens.colorBrandForeground1,
  action: tokens.colorBrandForeground2,
  primary: tokens.colorNeutralForeground1,
  secondary: tokens.colorNeutralForeground2,
  tertiary: tokens.colorNeutralForeground3,
  quaternary: tokens.colorNeutralForeground4,
  negative: tokens.colorPaletteDarkOrangeForeground1,
  positive: tokens.colorPaletteGreenForeground1,
  warning: tokens.colorPaletteMarigoldForeground1,
  danger: tokens.colorPaletteDarkOrangeForeground1,
  info: tokens.colorBrandForeground2,
  background: tokens.colorNeutralBackground1,
};
const colorStyleFunction = (color: string) => ({
  color,
});

export const colorClasses = mapToStyles<string, Record<ColorVariant, string>>(
  colorMap,
  colorStyleFunction,
);

export const variantClasses = {
  jumbo: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeHero1000,
    lineHeight: tokens.lineHeightHero1000,
    fontWeight: tokens.fontWeightSemibold,
  },
  headline: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeHero900,
    lineHeight: tokens.lineHeightHero900,
    fontWeight: tokens.fontWeightSemibold,
  },
  subheading: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeHero800,
    lineHeight: tokens.lineHeightHero800,
    fontWeight: tokens.fontWeightSemibold,
  },
  leading: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeHero700,
    lineHeight: tokens.lineHeightHero700,
    fontWeight: tokens.fontWeightRegular,
  },
  paragraph: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    fontWeight: tokens.fontWeightRegular,
  },
  caption: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    fontWeight: tokens.fontWeightSemibold,
  },
  description: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    fontWeight: tokens.fontWeightRegular,
  },
};
export const useTextStyles = makeStyles({
  ...colorClasses,
  ...variantClasses,
  root: {
    ...shorthands.margin(0),
    ...shorthands.padding(0),
  },
});
