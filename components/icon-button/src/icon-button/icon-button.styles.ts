import { mapToStyles } from '@arbutus/style.utilities';
import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

import type { ColorMap, ColorValue } from './icon-button.types';

export const colorMap: ColorMap = {
  primary: {
    background: tokens.colorNeutralBackground1,
    backgroundHover: tokens.colorNeutralBackground1Hover,
    outline: tokens.colorBrandStroke1,
    stroke: tokens.colorNeutralForeground1,
    strokeHover: tokens.colorNeutralForeground1Hover,
  },
  secondary: {
    background: tokens.colorNeutralBackground1,
    backgroundHover: tokens.colorNeutralBackground2Hover,
    outline: tokens.colorBrandStroke1,
    stroke: tokens.colorNeutralForeground2,
    strokeHover: tokens.colorNeutralForeground2Hover,
  },
  danger: {
    background: tokens.colorNeutralBackground1,
    backgroundHover: tokens.colorPaletteDarkOrangeBackground1,
    outline: tokens.colorPaletteDarkOrangeBorderActive,
    stroke: tokens.colorPaletteDarkOrangeForeground3,
    strokeHover: tokens.colorPaletteDarkOrangeForeground1,
  },
  warning: {
    background: tokens.colorNeutralBackground1,
    backgroundHover: tokens.colorPaletteMarigoldBackground1,
    outline: tokens.colorPaletteMarigoldBorderActive,
    stroke: tokens.colorPaletteMarigoldForeground3,
    strokeHover: tokens.colorPaletteMarigoldForeground1,
  },
  success: {
    background: tokens.colorNeutralBackground1,
    backgroundHover: tokens.colorPaletteLightGreenBackground1,
    outline: tokens.colorPaletteLightGreenBorderActive,
    stroke: tokens.colorPaletteLightGreenForeground1,
    strokeHover: tokens.colorPaletteLightGreenForeground3,
  },
  info: {
    background: tokens.colorNeutralBackground1,
    backgroundHover: tokens.colorNeutralBackground2Hover,
    outline: tokens.colorBrandStroke1,
    stroke: tokens.colorNeutralForeground2,
    strokeHover: tokens.colorNeutralForeground2Hover,
  },
  accent: {
    background: tokens.colorNeutralBackground1,
    backgroundHover: tokens.colorBrandBackgroundInvertedHover,
    outline: tokens.colorBrandStroke1,
    stroke: tokens.colorCompoundBrandStroke,
    strokeHover: tokens.colorCompoundBrandStrokeHover,
  },
};

const colorStyleFunction = ({
  background,
  backgroundHover,
  outline,
  stroke,
  strokeHover,
}: ColorValue) => ({
  backgroundColor: background,
  '& > svg': {
    color: stroke,
  },
  ':hover': {
    backgroundColor: backgroundHover,
    '& > svg': {
      color: strokeHover,
    },
  },
  ':focus': {
    backgroundColor: backgroundHover,
    outlineColor: outline,
  },
});

export const colorClasses = mapToStyles<ColorValue, ColorMap>(
  colorMap,
  colorStyleFunction,
);

export const useIconButtonStyles = makeStyles({
  ...colorClasses,
  root: {
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    lineHeight: 0,
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
  },
});
