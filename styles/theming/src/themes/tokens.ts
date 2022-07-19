/* eslint-disable */
import { tokens } from '@fluentui/react-theme';
import { layout } from '../layout';
import { breakpoints } from '../breakpoints';

export const arbutusTokens = {
  color: {
    text: {
      primary: tokens.colorNeutralForeground1,
      secondary: tokens.colorNeutralForeground2,
      tertiary: tokens.colorNeutralForeground3,
      quaternary: tokens.colorNeutralForeground4,
    },
    background: {
      primary: tokens.colorNeutralBackground1,
      secondary: tokens.colorNeutralBackground2,
      tertiary: tokens.colorNeutralBackground3,
      quaternary: tokens.colorNeutralBackground4,
    },
    tile: tokens.colorNeutralBackground6,
    negative: {
      text: tokens.colorPaletteDarkOrangeForeground1,
      foreground: tokens.colorPaletteDarkOrangeForeground1,
      background: tokens.colorPaletteDarkOrangeBackground1,
      stroke: tokens.colorPaletteDarkOrangeBorder1,
    },
    positive: {
      text: tokens.colorPaletteGreenForeground1,
      foreground: tokens.colorPaletteGreenForeground1,
      background: tokens.colorPaletteGreenBackground1,
      stroke: tokens.colorPaletteGreenBorder1,
    },
    success: {
      text: tokens.colorPaletteGreenForeground1,
      foreground: tokens.colorPaletteGreenForeground1,
      background: tokens.colorPaletteGreenBackground1,
      stroke: tokens.colorPaletteGreenBorder1,
    },
    warning: {
      text: tokens.colorPaletteMarigoldForeground1,
      foreground: tokens.colorPaletteMarigoldForeground1,
      background: tokens.colorPaletteMarigoldBackground1,
      stroke: tokens.colorPaletteMarigoldBorder1,
    },
    danger: {
      text: tokens.colorPaletteDarkOrangeForeground1,
      foreground: tokens.colorPaletteDarkOrangeForeground1,
      background: tokens.colorPaletteDarkOrangeBackground1,
      stroke: tokens.colorPaletteDarkOrangeBorder1,
    },
    info: {
      text: tokens.colorNeutralForeground2,
      foreground: tokens.colorNeutralForeground2,
      background: tokens.colorNeutralBackground2,
      stroke: tokens.colorNeutralStroke2,
    },
    brand: {
      text: tokens.colorBrandForeground1,
      foreground: tokens.colorBrandForeground1,
      background: tokens.colorBrandBackground2,
      stroke: tokens.colorBrandStroke2,
    },
  },
  shadow: {
    popover: tokens.shadow16,
    card: tokens.shadow8,
    focus: `0 0 0.125rem 0.125rem ${tokens.colorBrandForeground1}, 0 0 0.375rem ${tokens.colorBrandForeground1}`,
  },
  breakpoints,
  layout,
};
