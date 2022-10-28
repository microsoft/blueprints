import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const sizeClasses = {
  small: {
    height: `calc(${tokens.spacingVerticalXS} * 76)`,
  },
  medium: {
    height: `calc(${tokens.spacingVerticalXS} * 96)`,
  },
  large: {
    height: `calc(${tokens.spacingVerticalXS} * 116)`,
  },
};

export const useEmbedStyles = makeStyles({
  root: {
    width: '100%',
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke1),
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  header: {
    height: `calc(${tokens.spacingVerticalXL} + ${tokens.spacingVerticalSNudge}) + ${tokens.spacingVerticalSNudge}`,
    display: 'grid',
    columnGap: tokens.spacingHorizontalXS,
    gridTemplateColumns: `${tokens.spacingHorizontalXXL} auto ${tokens.spacingHorizontalXXL}`,
  },
  ...sizeClasses,
  content: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transitionProperty: 'all',
    transitionDuration: tokens.durationSlow,
    transitionTimingFunction: tokens.curveAccelerateMax,
    backgroundColor: 'transparent',
  },
  removeOverlay: {
    display: 'none',
  },
  loading: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  iframe: {
    width: '100%',
    ...shorthands.borderWidth(0),
    ...shorthands.borderColor('transparent'),
    ...shorthands.borderStyle('none'),
  },
});
