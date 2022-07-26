import type { SpaceScale } from '@arbutus/style.theming';

export type LonghandProperty = 'margin' | 'padding';
export type ShorthandProperty = 'margin' | 'padding';
export type Scale = keyof SpaceScale;
export type Direction = 't' | 'b' | 'l' | 'r' | 'x' | 'y';
export type Selector = `${'m' | 'p'}${Scale}` | `${'m' | 'p'}${Direction}${Scale}`;
export type Declaration = Record<`${'margin' | 'padding'}${'Top' | 'Bottom' | 'Left' | 'Right'}`, string | never>;
export type RuleSets = Record<Selector, Declaration>;
