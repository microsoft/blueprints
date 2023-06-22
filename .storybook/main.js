const webpack = require('webpack');
module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../hooks/**/*.stories.@(js|jsx|ts|tsx)',
    '../utilities/**/*.stories.@(js|jsx|ts|tsx)',
    '../styles/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        // https://github.com/storybookjs/storybook/issues/15901
        // docs not compatible with webpack 5.
        docs: false,
      },
    },
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ];
    config.resolve.fallback = {
      ...config.resolve.fallback,
      assert: require.resolve('assert/'),
      buffer: require.resolve('buffer/'),
      fs: false,
      module: false,
      os: require.resolve('os-browserify/browser'),
      process: require.resolve('process/browser'),
    };

    // Return the altered config
    return config;
  },
  docs: {
    autodocs: true,
  },
};
