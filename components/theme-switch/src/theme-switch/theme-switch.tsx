import { mergeClasses } from '@griffel/react';
import { Icon } from '@microsoft/arbutus.icon';
import { VisuallyHidden } from '@reach/visually-hidden';
import type { FC } from 'react';
import * as React from 'react';

import { useThemeSwitchStyles } from './theme-switch.styles';
import type { ThemeSwitchProps } from './theme-switch.types';

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  label = 'Dark mode',
  isDark,
  onToggle,
}) => {
  // Styles
  const classes = useThemeSwitchStyles();

  const clickHandler = () => onToggle?.();

  return (
    <button
      aria-pressed={isDark}
      className={mergeClasses(classes.root, className)}
      onClick={clickHandler}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <div
        aria-hidden
        className={mergeClasses(
          classes.toggle,
          isDark ? classes.toggleOn : classes.toggleOff,
        )}
      />
      <Icon
        iconName="sun"
        className={mergeClasses(classes.iconSun, !isDark && classes.iconOff)}
      />
      <Icon
        iconName="moon"
        className={mergeClasses(classes.iconMoon, isDark && classes.iconOff)}
      />
    </button>
  );
};
