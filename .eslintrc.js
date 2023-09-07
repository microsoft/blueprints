const project = [
  'components/*/tsconfig.json',
  'hooks/*/tsconfig.json',
  'styles/*/tsconfig.json',
  'utilities/*/tsconfig.json',
];

module.exports = {
  extends: ['@microsoft/eslint-config-arbutus', 'plugin:storybook/recommended'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', ...project],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
