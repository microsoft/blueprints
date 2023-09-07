import { generateCSSVarTuples } from '../src/generate-css-vars';

const testTheme = {
  light: {
    color: {
      overlay: {
        background: 'rgb(255 255 255 / 75%)',
      },
    },
    shape: {
      ['border-radius']: '1rem',
    },
  },
};

const cssVarLightTuples = [
  ['--color-overlay-background', 'rgb(255 255 255 / 75%)'],
  ['--shape-border-radius', '1rem'],
];

const cssVarLightTuplesWithPrefix = [
  ['--test--color-overlay-background', 'rgb(255 255 255 / 75%)'],
  ['--test--shape-border-radius', '1rem'],
];

describe('Generate CSS vars', () => {
  it('should generate CSS vars', () => {
    const cssVarTuples = generateCSSVarTuples(testTheme.light);

    expect(cssVarTuples).toStrictEqual(cssVarLightTuples);
  });
  it('should generate CSS vars with a prefix', () => {
    const cssVarTuples = generateCSSVarTuples(testTheme.light, 'test');

    expect(cssVarTuples).toStrictEqual(cssVarLightTuplesWithPrefix);
  });
});
