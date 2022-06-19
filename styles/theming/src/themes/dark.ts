import { NeutralColors, SharedColors } from '@fluentui/theme';

import type { Theme } from '../theming.types';
import { themeBase } from './base';

export const themeDark: Theme = {
  ...themeBase,
  color: {
    'border-shadow': 'rgb(255 255 255 / 40%)',
    'brand-accent': `#FF2A89`,
    'brand-action': `#FF8CA5`,
    'brand-secondary': `#4B4747`,
    'overlay-accent': 'rgb(255 255 255 / 10%)',
    background: `${NeutralColors.gray200}`,
    border: `${NeutralColors.gray130}`,
    negative: `${SharedColors.red10}`,
    overlay: `${NeutralColors.white}`,
    positive: `${SharedColors.greenCyan10}`,
    primary: `${NeutralColors.gray10}`,
    quaternary: `${NeutralColors.gray40}`,
    secondary: `${NeutralColors.gray20}`,
    tertiary: `${NeutralColors.gray30}`,
    text: `${NeutralColors.white}`,
    tile: `${NeutralColors.gray160}`,
    warning: '#9D5D00',
    ['background-positive']: 'rgb(255 255 255 / 10%)',
    ['background-negative']: 'rgb(255 255 255 / 10%)',
    ['background-warning']: 'rgb(255 255 255 / 10%)',
  },
  shadow: {
    popover:
      '0px 8px 10px rgba(255, 255, 255, 0.07), 0px 3px 14px rgba(255, 255, 255, 0.06), 0px 5px 5px rgba(255, 255, 255, 0.1)',
    cards: '0px 0px 4px rgb(255 255 255 / 15%)',
    focus:
      '0 0 0.125rem 0.125rem var(--color-brand-accent), 0 0 0.375rem var(--color-brand-accent)',
  },
};
