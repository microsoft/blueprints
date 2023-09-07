import { generateTokensMap } from '../src/generate-tokens-map';

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

const expectedOutput = {
  color: {
    overlay: {
      background: 'var(--color-overlay-background)',
    },
  },
  shape: {
    ['border-radius']: 'var(--shape-border-radius)',
  },
};

const expectedOutputWithPrefix = {
  color: {
    overlay: {
      background: 'var(--test--color-overlay-background)',
    },
  },
  shape: {
    ['border-radius']: 'var(--test--shape-border-radius)',
  },
};

describe('Generate tokens map', () => {
  it('should generate tokens map', () => {
    const tokensMap = generateTokensMap(testTheme.light);

    expect(tokensMap).toStrictEqual(expectedOutput);
  });
  it('should generate tokens map with prefix', () => {
    const tokensMap = generateTokensMap(testTheme.light, 'test');

    expect(tokensMap).toStrictEqual(expectedOutputWithPrefix);
  });
});
