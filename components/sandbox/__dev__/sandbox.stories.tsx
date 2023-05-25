import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { SandboxProps } from '../src/index';
import { Sandbox } from '../src/index';
import { centered } from './centered-template';
import { wrapper } from './wrapper-template';

const code = `import { Button } from '@microsoft/arbutus.button';

import { Theme } from './theme';
import { Centered } from './centered';

export default function App() {
  return (
    <Theme>
      <Centered>
        <Button>Hello Sandpack</Button>
      </Centered>
    </Theme>
  )
}`;

export default {
  title: 'Examples/Sandbox',
  component: Sandbox,
  decorators: [
    (Story) => (
      <Centered>
        <Story />
      </Centered>
    ),
  ],
} as Meta<typeof Sandbox>;

const Template: StoryFn<typeof Sandbox> = (args) => <Sandbox {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<SandboxProps>>;
Simple.args = {
  files: {
    '/App.tsx': {
      code,
      active: true,
    },
    '/theme.tsx': wrapper,
    '/centered.tsx': centered,
  },
  dependencies: {
    '@griffel/react': '^1.5.1',
    '@microsoft/arbutus.button': '^0.0.2',
    '@microsoft/arbutus.fonts': '0.0.1',
    '@microsoft/arbutus.theming': '0.0.4',
    'normalize.css': '^8.0.1',
  },
};
