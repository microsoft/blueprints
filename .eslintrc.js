const project = ['components/*/tsconfig.json', 'hooks/*/tsconfig.json',
// 'layouts/*/tsconfig.json',
// 'sections/*/tsconfig.json',
'styles/*/tsconfig.json', 'utilities/*/tsconfig.json'];
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],
  plugins: ['@rnx-kit', '@typescript-eslint', 'simple-import-sort', 'deprecation'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'react/prop-types': 'off',
    // Sorts imports and exports.
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // Adds rules for blank lines.
    'padding-line-between-statements': ['warn', {
      blankLine: 'always',
      prev: '*',
      next: 'return'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'break'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'block-like'
    }, {
      blankLine: 'any',
      prev: 'case',
      next: 'case'
    }, {
      blankLine: 'any',
      prev: 'case',
      next: 'default'
    }, {
      blankLine: 'always',
      prev: 'import',
      next: '*'
    }, {
      blankLine: 'any',
      prev: 'import',
      next: 'import'
    }, {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: '*'
    }, {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var']
    }],
    // Disallows export *
    '@rnx-kit/no-export-all': 'error',
    // Enforces consistent usage of type imports and exports
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    // Enforces using comments when escaping TS errors
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': true,
      'ts-check': false,
      minimumDescriptionLength: 5
    }],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    // Deprecation warning
    'deprecation/deprecation': 'warn',
    // TEMP
    'import/no-unresolved': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', ...project]
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  }
};