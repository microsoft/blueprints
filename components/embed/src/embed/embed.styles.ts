import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const sizeClasses = {
  small: {
    height: `calc(${tokens.spacingVerticalXS} * 50)`,
  },
  medium: {
    height: `calc(${tokens.spacingVerticalXS} * 80)`,
  },
  large: {
    height: `calc(${tokens.spacingVerticalXS} * 100)`,
  },
};

export const useEmbedStyles = makeStyles({
  root: {
    width: '100%',
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke1),
    transitionProperty: 'background-color',
    transitionDuration: tokens.durationSlow,
    transitionTimingFunction: tokens.curveDecelerateMax,
    backgroundColor: 'transparent',
  },
  header: {
    height: `calc(${tokens.spacingVerticalXL} + ${tokens.spacingVerticalSNudge}) + ${tokens.spacingVerticalSNudge}`,
    display: 'grid',
    columnGap: tokens.spacingHorizontalXS,
    gridTemplateColumns: `${tokens.spacingHorizontalXXL} auto ${tokens.spacingHorizontalXXL}`,
  },
  loading: {
    backgroundColor: tokens.colorNeutralBackground4,
  },
  iframe: {
    width: '100%',
    ...shorthands.borderWidth(0),
    ...shorthands.borderColor('transparent'),
    ...shorthands.borderStyle('none'),
  },
  ...sizeClasses,
});
