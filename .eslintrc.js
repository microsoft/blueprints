const project = [
  'apps/*/tsconfig.json',
  'components/*/tsconfig.json',
  'sections/*/tsconfig.json',
  'layouts/*/tsconfig.json',
  'styles/*/tsconfig.json',
];

module.exports = {
  extends: ['@m365-admin/eslint-config'],
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
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
};
