import * as React from 'react';

import { Frame } from './custom/frame';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Atoms', 'Tiles', 'Lists', 'Content'],
    },
  },
};

export const decorators = [
  (Story) => (
    <Frame>
      <Story />
    </Frame>
  ),
];
