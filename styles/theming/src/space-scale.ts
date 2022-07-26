import { tokens } from '@fluentui/react-theme';

export type SpaceScale = Record<
  '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12',
  string
>;

export const spaceScale: SpaceScale = {
  ['1']: tokens.spacingHorizontalXXS,
  ['2']: tokens.spacingHorizontalXS,
  ['3']: tokens.spacingHorizontalSNudge,
  ['4']: tokens.spacingHorizontalS,
  ['5']: tokens.spacingHorizontalMNudge,
  ['6']: tokens.spacingHorizontalM,
  ['7']: tokens.spacingHorizontalL,
  ['8']: tokens.spacingHorizontalXL,
  ['9']: tokens.spacingHorizontalXXL,
  ['10']: tokens.spacingHorizontalXXXL,
  ['11']: '40px',
  ['12']: '52px',
};
