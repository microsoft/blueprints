import { generateTokensMap } from '@microsoft/arbutus.use-css-vars';

import { dark } from './dark';
import { light } from './light';
import type { ArbutusTheme, ArbutusTokens } from './themes.types';

export const arbutusTokens = generateTokensMap<ArbutusTokens>(light, 'arbutus');

export const arbutusTheme: ArbutusTheme = {
  light,
  dark,
};
