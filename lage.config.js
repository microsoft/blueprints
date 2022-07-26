/**
 * For configuration documentation @see https://microsoft.github.io/lage/guide/config.html
 */

module.exports = {
  npmClient: 'npm',

  pipeline: {
    build: ['^build'],
    lint: [],
  },

  /**
   * Ignores these minimatch patterns when considers what packages have changed for the
   * --since flag.
   */
  ignore: ['README.md'],

  /**
   * Optional priority to set on tasks in a package to make the scheduler give priority to
   * tasks on the critical path for high priority tasks.
   */

  /**
   * Disables --since flag when any of this list of files changed.
   * */
  repoWideChanges: [
    'lage.config.js',
    'tsconfig.json',
    '.eslintrc',
    '.eslintignore',
    '.prettierrc',
    '.prettierignore',
  ],

  /**
   * All of these options are sent to `backfill`.
   * @see https://github.com/microsoft/backfill/blob/master/README.md
   */

  cacheOptions: {
    cacheStorageConfig: { provider: 'local' },
    internalCacheFolder: '.cache/backfill',
    logFolder: '.cache/backfill',

    /**
     * Subset of files in package directories that will be saved into the cache.
     */
    outputGlob: ['lib/**/*', 'build/**/*', 'dist/**/*'],

    producePerformanceLogs: true,
  },
};
