import { type BrandVariants } from '@fluentui/react-theme';
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

export const BLUEPRINTS_DOCS_BRAND_VARIANTS: BrandVariants = {
  10: '#151515',
  20: '#1E1F22',
  30: '#26282E',
  40: '#2D303D',
  50: '#34394F',
  60: '#3A4261',
  70: '#304391',
  80: '#3853BD',
  90: '#405BC6',
  100: '#5E78E0',
  110: '#7188E6',
  120: '#8398EB',
  130: '#9FAFF1',
  140: '#B7C4F7',
  150: '#CFD8FA',
  160: '#EBEEFC',
};

export const blueprintsDocsTokens = generateTokensMap<BlueprintsTheme>(
  BLUEPRINTS_DOCS_THEME.light,
  BLUEPRINTS_DOCS_PREFIX,
);
