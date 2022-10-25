module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../hooks/**/*.stories.mdx',
    '../hooks/**/*.stories.@(js|jsx|ts|tsx)',
    '../styles/**/*.stories.mdx',
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
  framework: '@storybook/react',
  core: {
    // builder: 'webpack5',
    // Bug in @storybook/builder-vite: https://github.com/storybookjs/storybook/issues/18920
    builder: '@storybook/builder-vite',
  },
};
