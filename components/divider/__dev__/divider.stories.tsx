import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { DividerProps } from '../src/index';
import { Divider } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Divider',
  component: Divider,
} as Meta<typeof Divider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Divider> = (args) => <Divider {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<DividerProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {};
