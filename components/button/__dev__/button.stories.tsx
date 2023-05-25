import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { ButtonProps } from '../src/index';
import { Button, colorMap } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      options: Object.keys(colorMap),
      control: {
        type: 'select',
      },
    },
  },
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<ButtonProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  color: 'primary',
  size: 'medium',
  shape: 'brick',
  children: 'Click me!',
};
