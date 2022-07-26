import { paths } from '@arbutus/component.icon';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
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
    color: {
      control: {
        type: 'select',
        options: Object.keys(colorMap),
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: Object.keys(paths),
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<BadgeProps>>;
Simple.args = {
  color: 'positive',
  iconName: 'check',
};

const InlineTemplate: ComponentStory<typeof Badge> = (args) => (
  <p>
    <Badge {...args} /> Lorem ipsum dolor.
  </p>
);

export const Inline = InlineTemplate.bind({}) as ComponentStory<
  FunctionComponent<BadgeProps>
>;
Inline.args = {
  color: 'positive',
  iconName: 'exclamation',
  isInline: true,
};
