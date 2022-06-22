import { NeutralColors, SharedColors } from '@fluentui/theme';

import type { Theme } from '../theming.types';
import { themeBase } from './base';

export const themeLight: Theme = {
  ...themeBase,
  color: {
    'brand-accent': `#DB2476`,
    'brand-action': `#AF4E63`,
    'brand-secondary': `#FFF2F4`,
    'overlay-accent': 'rgb(0 0 0 / 10%)',
    'overlay-background': 'rgb(255 255 255 / 50%)',
    background: `${NeutralColors.white}`,
    border: `${NeutralColors.gray40}`,
    'border-shadow': 'rgb(0 0 0 / 9%)',
    negative: `${SharedColors.red10}`,
    overlay: `${NeutralColors.black}`,
    positive: `${SharedColors.greenCyan10}`,
    primary: `${NeutralColors.gray220}`,
    quaternary: `${NeutralColors.gray100}`,
    secondary: `${NeutralColors.gray140}`,
    tertiary: `${NeutralColors.gray120}`,
    text: `${NeutralColors.gray220}`,
    tile: `${NeutralColors.gray20}`,
    warning: '#9D5D00',
    ['background-positive']: '#DFF6DD',
    ['background-negative']: '#FDE7E9',
    ['background-warning']: '#FFF4CE',
  },
  shadow: {
    popover:
      '0px 8px 10px rgba(0, 0, 0, 0.07), 0px 3px 14px rgba(0, 0, 0, 0.06), 0px 5px 5px rgba(0, 0, 0, 0.1)',
    cards: '0px 0.125rem 0.1875rem 0.125rem rgb(0 0 0 / 4%)',
    focus:
      '0 0 0.125rem 0.125rem var(--color-brand-action), 0 0 0.375rem var(--color-brand-action)',
  },
};
