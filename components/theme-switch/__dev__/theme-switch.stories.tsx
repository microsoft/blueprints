import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { ThemeSwitchProps } from '../src/index';
import { ThemeSwitch } from '../src/index';

export default {
  title: 'Atoms/ThemeSwitch',
  component: ThemeSwitch,
  decorators: [
    (Story) => (
      <Centered>
        <div style={{ maxWidth: ' ' }}>
          <Story />
        </div>
      </Centered>
    ),
  ],
} as Meta<typeof ThemeSwitch>;

const Template: StoryFn<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<ThemeSwitchProps>>;
Simple.args = {
  isDark: false,
};
