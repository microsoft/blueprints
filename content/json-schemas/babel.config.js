/**
 * Babel is used for writing Jest tests in `.ts`.
 */

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    "@babel/plugin-syntax-import-attributes"
  ]
};
