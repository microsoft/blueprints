import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { TagProps } from '../src/index';
import { Tag } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Tag',
  component: Tag,
} as Meta<typeof Tag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tag> = (args) => <Tag {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<TagProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  type: 'accent',
  children: 'Future',
  isInline: false,
  size: 'medium',
};
