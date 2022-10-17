import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { CommandProps } from '../src/index';
import { Command } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Blocks/Command',
  component: Command,
} as ComponentMeta<typeof Command>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Command> = (args) => <Command {...args} />;

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<CommandProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  command: 'npm i @fluent/react-button',
  isCopyable: true,
};
