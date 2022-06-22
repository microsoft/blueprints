import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { CLICommandProps } from '../src/index';
import { CLICommand } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/CLICommand',
  component: CLICommand,
} as ComponentMeta<typeof CLICommand>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CLICommand> = (args) => <CLICommand {...args} />;

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<CLICommandProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  command: 'npm i @fluent/react-button',
  isCopyable: true,
};
