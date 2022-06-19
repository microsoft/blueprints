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

export const useTileStyles = makeStyles({
  root: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  interactive: {
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: 'var(--transition-duration)',
    transitionTimingFunction: 'var(--transition-timing-function)',
    ':focus': {
      ...shorthands.outline('none'),
      boxShadow: 'var(--shadow-focus)',
    },
  },
  card: {
    backgroundColor: 'var(--color-background)',
    ...shorthands.borderWidth('1px'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderColor('var(--color-border-shadow)'),
    ...shorthands.borderRadius('0.5rem'),
    boxShadow: 'var(--shadow-cards)',
  },
  image: {
    backgroundColor: 'var(--color-tile)',
    ...shorthands.borderRadius('var(--shape-corner-radius)'),
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
  },
  solidColor: {
    ...shorthands.borderRadius('var(--shape-corner-radius)'),
  },
  ...colorClasses,
});
