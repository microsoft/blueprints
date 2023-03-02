import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

const buttonHeight = tokens.spacingVerticalXXL;
const toggleHeight = tokens.spacingVerticalL;
const gap = '-2px';

export const useThemeSwitchStyles = makeStyles({
  root: {
    position: 'relative',
    backgroundColor: tokens.colorNeutralBackground2,
    height: buttonHeight,
    width: `calc(${buttonHeight} * 2 + ${gap})`,
    paddingTop: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
    paddingBottom: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
    paddingLeft: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
    paddingRight: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
    outlineStyle: 'none',
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    boxShadow: tokens.shadow2,
    ...shorthands.borderRadius(`calc(${buttonHeight} / 2)`),
  },
  toggle: {
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    position: 'absolute',
    top: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
    height: toggleHeight,
    width: toggleHeight,
    backgroundColor: tokens.colorNeutralForeground2,
    boxShadow: tokens.shadow4,
    ...shorthands.borderRadius(toggleHeight),
  },
  toggleOff: {
    transform: `translateX(0)`,
  },
  toggleOn: {
    transform: `translateX(calc(${buttonHeight} + ${gap}))`,
  },
  iconSun: {
    position: 'absolute',
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    top: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
    left: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
    color: tokens.colorPaletteMarigoldBackground3,
    opacity: 1,
  },
  iconMoon: {
    position: 'absolute',
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    top: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
    right: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
    color: tokens.colorPaletteMarigoldBackground3,
    opacity: 1,
  },
  iconOff: {
    opacity: 0,
  },
});
