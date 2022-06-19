import { breakpoints, layout } from '../breakpoints';
import { fontSizes } from '../font-sizes';
import { fontWeights } from '../font-weights';
import { lineHeights } from '../line-heights';
import { spaceScale } from '../space-scale';
import type { Theme } from '../theming.types';

export const themeBase: Pick<
  Theme,
  'font' | 'transition' | 'shape' | 'breakpoint' | 'layout' | 'space'
> = {
  font: {
    size: fontSizes,
    weight: fontWeights,
    ['line-height']: lineHeights,
  },
  shape: {
    'corner-radius': '1rem',
  },
  transition: {
    duration: '140ms',
    ['timing-function']: 'ease-in-out',
  },
  breakpoint: breakpoints,
  layout: layout,
  space: spaceScale,
};
