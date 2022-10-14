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
      order: ['Atoms', 'Tiles', 'Lists', 'Blocks', 'Examples'],
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    title: 'Theme',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

const withThemeProvider = (Story, context) => (
  <Frame theme={context.globals.theme}>
    <Story {...context} />
  </Frame>
);

export const decorators = [withThemeProvider];
