import type { ColorVar } from '@arbutus/style.theming';
import { makeStyles, shorthands } from '@griffel/react';

export const statusMap = {
  alert: 'var(--color-background-negative)',
  info: 'var(--color-tile)',
  success: 'var(--color-background-positive)',
  warning: 'var(--color-background-warning)',
};

type ColorDeclaration = {
  backgroundColor: ColorVar;
};
type StatusClasses = Record<keyof typeof statusMap, ColorDeclaration | never>;
export const statusClasses: StatusClasses = Object.entries(statusMap).reduce(
  (acc, [key, color]: [keyof typeof statusMap, ColorVar]) => {
    acc[key] = {
      backgroundColor: color,
    };

    return acc;
  },
  {} as StatusClasses,
);
export const useCalloutStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'var(--space-6) auto',
    columnGap: 'var(--space-4)',
    ...shorthands.borderRadius('8px'),
    ...shorthands.borderWidth('0.0625rem'),
    ...shorthands.borderColor('var(--color-overlay-accent)'),
    ...shorthands.borderStyle('solid'),
  },
  ...statusClasses,
});
