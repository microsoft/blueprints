const project = [
  'components/*/tsconfig.json',
  'hooks/*/tsconfig.json',
  'styles/*/tsconfig.json',
  // 'utilities/*/tsconfig.json',
];

module.exports = {
  extends: [
    '@microsoft/eslint-config-arbutus',
    'plugin:storybook/recommended',
  ],
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
};
