import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { PropTableProps } from '../src/index';
import { PropTable } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/PropTable',
  component: PropTable,
} as ComponentMeta<typeof PropTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PropTable> = (args) => (
  <PropTable {...args} />
);

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<PropTableProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  text: 'Simple PropTable Example',
};
