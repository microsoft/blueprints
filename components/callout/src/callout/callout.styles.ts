import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';
import { mapToStyles } from '@arbutus/style.utilities';
import { arbutusTokens } from '@arbutus/style.theming';

import type { ColorValue, ColorMap } from './callout.types';


const colorMap: ColorMap = {
  error: arbutusTokens.color.danger,
  warning: arbutusTokens.color.warning,
  success: arbutusTokens.color.success,
  info: arbutusTokens.color.info,
  accent: arbutusTokens.color.brand,
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
