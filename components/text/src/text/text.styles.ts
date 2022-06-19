import type { ColorScheme, ColorVar } from '@arbutus/style.theming';
import { colorVars } from '@arbutus/style.theming';
import { makeStyles, shorthands } from '@griffel/react';

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

export const useTextStyles = makeStyles({
  ...colorClasses,
  root: {
    ...shorthands.margin(0),
    ...shorthands.padding(0),
  },
  jumbo: {
    fontSize: 'var(--font-size-jumbo)',
    lineHeight: 'var(--font-line-height-jumbo)',
    fontWeight: 'var(--font-weight-bold)',
  },
  headline: {
    fontSize: 'var(--font-size-large)',
    lineHeight: 'var(--font-line-height-large)',
    fontWeight: 'var(--font-weight-bold)',
  },
  subheading: {
    fontSize: 'var(--font-size-medium)',
    lineHeight: 'var(--font-line-height-medium)',
    fontWeight: 'var(--font-weight-medium)',
  },
  leading: {
    fontSize: 'var(--font-size-medium)',
    lineHeight: 'var(--font-line-height-medium)',
  },
  paragraph: {
    fontSize: 'var(--font-size-small)',
    lineHeight: 'var(--font-line-height-small)',
  },
  caption: {
    fontSize: 'var(--font-size-small)',
    lineHeight: 'var(--font-line-height-small)',
    fontWeight: 'var(--font-weight-medium)',
  },
  description: {
    fontSize: 'var(--font-size-micro)',
    lineHeight: 'var(--font-line-height-micro)',
  },
});
