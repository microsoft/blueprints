import type { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />;

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<ThemeSwitchProps>
>;
Simple.args = {
  isDark: false,
};
