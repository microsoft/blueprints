import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { LogoProps } from '../src/index';
import { Logo, logos } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    logoName: {
      control: {
        type: 'select',
        options: Object.keys(logos),
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'fill'],
      },
    },
  },
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<LogoProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  logoName: 'figma',
  size: 'medium',
};
