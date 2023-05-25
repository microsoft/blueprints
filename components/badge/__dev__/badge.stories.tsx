import { paths } from '@microsoft/arbutus.icon';
import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { colorMap } from '../src/badge/badge.styles';
import type { BadgeProps } from '../src/index';
import { Badge } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    options: Object.keys(colorMap),
    color: {
      control: {
        type: 'select',
      },
    },
    iconName: {
      options: Object.keys(paths),
      control: {
        type: 'select',
      },
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<BadgeProps>>;
Simple.args = {
  color: 'positive',
  iconName: 'check',
};

const InlineTemplate: StoryFn<typeof Badge> = (args) => (
  <p>
    <Badge {...args} /> Lorem ipsum dolor.
  </p>
);

export const Inline = InlineTemplate.bind({}) as StoryFn<FunctionComponent<BadgeProps>>;
Inline.args = {
  color: 'positive',
  iconName: 'exclamation',
  isInline: true,
};
