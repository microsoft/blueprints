import { Text } from '@microsoft/arbutus.text';
import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import { usePrefersColorScheme } from '../src/index';

const DemoComponent: FunctionComponent = () => {
  const colorScheme = usePrefersColorScheme();

  return (
    <div>
      <h1>
        <code>usePrefersColorScheme</code> Demo
      </h1>
      <p>
        <Text variant="code">usePrefersColorScheme</Text> retrieves the value of the color
        theme the user set on their device (dark or light). Use it to theme your app
        according to users’ preferences.
      </p>
      <p>
        Currently selected color scheme*:{' '}
        <Text variant="code">&#34;{colorScheme}&#34;</Text>.
      </p>
      <Text as="p" block variant="description" color="secondary">
        * Test this functionality by changing the settings on your device.
      </Text>
    </div>
  );
};

export default {
  title: 'Hooks/UsePrefersColorScheme',
  decorators: [
    (StoryFn) => (
      <Centered>
        <div style={{ width: '90%' }}>
          <StoryFn />
        </div>
      </Centered>
    ),
  ],
} as Meta;

const Template: StoryFn = () => <DemoComponent />;

export const Simple = Template.bind({}) as StoryFn;
