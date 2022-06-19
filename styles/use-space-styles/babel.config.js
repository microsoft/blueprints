/**
 * Babel is used for writing Jest tests in `.tsx`.
 *
 * NOTE: Babel is NOT used for the actual `./src` > `./lib` code compilation. The compiler
 * for that is `typescript`. @see `addTSTasks` in `"@m365-admin/config.just-tasks"`.
 */

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
};
