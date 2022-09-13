import { mapToStyles } from '@arbutus/style.utilities';
import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

import type { ColorMap, ColorValue, SizeMap, SizeValue } from './button.types';

export const colorMap: ColorMap = {
  primary: {
    foreground: tokens.colorBrandForeground1,
    stroke: tokens.colorBrandForeground2,
    background: tokens.colorBrandBackground2,
  },
  secondary: {
    foreground: tokens.colorNeutralForeground1,
    stroke: tokens.colorNeutralStroke1,
    background: tokens.colorNeutralBackground3,
  },
  danger: {
    foreground: tokens.colorPaletteDarkOrangeForeground1,
    stroke: tokens.colorPaletteDarkOrangeBorder1,
    background: tokens.colorPaletteDarkOrangeBackground1,
  },
  warning: {
    foreground: tokens.colorPaletteMarigoldForeground1,
    stroke: tokens.colorPaletteMarigoldBorder1,
    background: tokens.colorPaletteMarigoldBackground1,
  },
  success: {
    foreground: tokens.colorPaletteGreenForeground1,
    stroke: tokens.colorPaletteGreenBorder1,
    background: tokens.colorPaletteGreenBackground1,
  },
};

const colorPillStyleFunction = ({ foreground, background, stroke }: ColorValue) => ({
  color: foreground,
  borderTopColor: stroke,
  borderRightColor: stroke,
  borderLeftColor: stroke,
  borderBottomColor: stroke,
  '&:focus-visible, &:hover': {
    backgroundColor: background,
    boxShadow: `0 0 2px ${background}, 0 8px 16px ${background}, inset 0 0 0px 0.5px ${stroke}`,
  },
});

const colorPillClasses = mapToStyles<ColorValue, ColorMap>(
  colorMap,
  colorPillStyleFunction,
);

const colorBrickStyleFunction = ({ foreground, background, stroke }: ColorValue) => ({
  backgroundColor: background,
  color: foreground,
  borderTopColor: stroke,
  borderRightColor: stroke,
  borderLeftColor: stroke,
  borderBottomColor: stroke,
  '&:focus-visible, &:hover': {
    boxShadow: `0 0 2px ${background}, 0 8px 16px ${background}, inset 0 0 0px 0.5px ${stroke}`,
  },
});

/* @eslint-disable-next-line @typescript-eslint/no-unused-vars */
const { primary, ...restColors } = colorMap;
const colorBrickClasses = mapToStyles<ColorValue, typeof restColors>(
  restColors,
  colorBrickStyleFunction,
);

export const sizeMap: SizeMap = {
  small: {
    x: tokens.spacingHorizontalM,
    y: tokens.spacingVerticalXS,
    fontSize: tokens.fontSizeBase300,
  },
  medium: {
    x: tokens.spacingHorizontalL,
    y: tokens.spacingVerticalS,
    fontSize: tokens.fontSizeBase300,
  },
  large: {
    x: tokens.spacingHorizontalXXL,
    y: tokens.spacingVerticalM,
    fontSize: tokens.fontSizeBase400,
  },
};

const sizeStyleFunction = ({ y, x, fontSize }: SizeValue) => ({
  paddingLeft: x,
  paddingRight: x,
  paddingTop: y,
  paddingBottom: y,
  fontSize,
});

const sizeClasses = mapToStyles<SizeValue, SizeMap>(sizeMap, sizeStyleFunction);

const sizePillStyleFunction = ({ x, fontSize }: SizeValue) => ({
  borderTopLeftRadius: `calc(${x} * 2 + ${fontSize})`,
  borderTopRightRadius: `calc(${x} * 2 + ${fontSize})`,
  borderBottomLeftRadius: `calc(${x} * 2 + ${fontSize})`,
  borderBottomRightRadius: `calc(${x} * 2 + ${fontSize})`,
});

const sizePillClasses = mapToStyles<SizeValue, SizeMap>(sizeMap, sizePillStyleFunction);

export const useButtonStyles = makeStyles({
  root: {
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    fontWeight: tokens.fontWeightSemibold,
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopWidth: tokens.strokeWidthThin,
    borderBottomWidth: tokens.strokeWidthThin,
    borderLeftWidth: tokens.strokeWidthThin,
    borderRightWidth: tokens.strokeWidthThin,
    boxShadow: `0 0 2px transparent, 0 8px 16px transparent`,
    '@media (prefers-reduced-motion)': {
      transitionDuration: '0ms',
    },
    '&:focus-visible': {
      outlineStyle: 'none',
      outlineColor: 'transparent',
    },
  },
  pill: {
    backgroundColor: 'transparent',
  },
  brick: {
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
  },
  ...sizeClasses,
});

export const useButtonPillStyles = makeStyles({
  ...colorPillClasses,
  ...sizePillClasses,
});

export const useButtonBrickStyles = makeStyles({
  primary: {
    color: tokens.colorNeutralBackground1,
    backgroundColor: tokens.colorBrandForegroundInverted,
    borderTopColor: tokens.colorBrandForegroundInverted,
    borderRightColor: tokens.colorBrandForegroundInverted,
    borderLeftColor: tokens.colorBrandForegroundInverted,
    borderBottomColor: tokens.colorBrandForegroundInverted,
    '&:focus-visible, &:hover': {
      backgroundColor: tokens.colorBrandForegroundInvertedHover,
      boxShadow: `0 0 2px ${colorMap.primary.foreground}, 0 8px 16px ${colorMap.primary.background}`,
    },
  },
  ...colorBrickClasses,
});
