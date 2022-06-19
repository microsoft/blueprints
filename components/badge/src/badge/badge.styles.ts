import type { ColorScheme, ColorVar } from '@arbutus/style.theming';
import { colorVars } from '@arbutus/style.theming';
import { makeStyles, shorthands } from '@griffel/react';

type ColorDeclaration = {
  backgroundColor: ColorVar;
};

type ColorClasses = Record<keyof ColorScheme, ColorDeclaration | never>;
export const colorClasses: ColorClasses = Object.entries(colorVars).reduce(
  (acc, [key, color]: [keyof ColorScheme, ColorVar]) => {
    acc[key] = {
      backgroundColor: color,
    };

    return acc;
  },
  {} as ColorClasses,
);

export const useBadgeStyles = makeStyles({
  ...colorClasses,
  root: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    height: 'var(--space-6)',
    width: 'var(--space-6)',
    ...shorthands.borderRadius('var(--space-6)'),
  },
  inline: {
    display: 'inline-grid',
    verticalAlign: 'center',
  },
});
