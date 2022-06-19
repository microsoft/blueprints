import type { ColorScheme, ColorVar } from '@arbutus/style.theming';
import { colorVars } from '@arbutus/style.theming';
import { makeStyles } from '@griffel/react';

type ColorDeclaration = {
  color: ColorVar;
};
type ColorClasses = Record<keyof ColorScheme, ColorDeclaration | never>;
export const colorClasses: ColorClasses = Object.entries(colorVars).reduce(
  (acc, [key, color]: [keyof ColorScheme, ColorVar]) => {
    acc[key] = {
      color,
    };

    return acc;
  },
  {} as ColorClasses,
);

export const sizeClasses = {
  small: {
    height: 'var(--space-3)',
  },
  medium: {
    height: 'var(--space-4)',
  },
  large: {
    height: 'var(--space-5)',
  },
};

export const useIconStyles = makeStyles({
  ...colorClasses,
  ...sizeClasses,
  root: {
    width: 'auto',
  },
});
