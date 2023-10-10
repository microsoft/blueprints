import { generateTokensMap } from '@microsoft/arbutus.use-css-vars';

export type BlueprintsTheme = {
  color: {
    illustration: {
      '00': string;
      10: string;
      20: string;
      30: string;
      40: string;
    };
  };
};

export const BLUEPRINTS_DOCS_PREFIX = 'blueprints-docs';

export const BLUEPRINTS_DOCS_THEME: {
  light: BlueprintsTheme;
  dark: BlueprintsTheme;
} = {
  light: {
    color: {
      illustration: {
        '00': '#FFFFFF',
        10: '#EFF5FF',
        20: '#EAF0FA',
        30: '#BED5FE',
        40: '#679FFF',
      },
    },
  },
  dark: {
    color: {
      illustration: {
        '00': '#00060F',
        10: '#001B47',
        20: '#142B52',
        30: '#0340AB',
        40: '#005DFF',
      },
    },
  },
};

export const blueprintsDocsTokens = generateTokensMap<BlueprintsTheme>(
  BLUEPRINTS_DOCS_THEME.light,
  BLUEPRINTS_DOCS_PREFIX,
);
