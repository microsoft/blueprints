import { paths } from '@arbutus/component.icon';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { IconButtonProps } from '../src/index';
import { IconButton } from '../src/index';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked' },
    iconName: {
      control: {
        type: 'select',
        options: Object.keys(paths),
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<IconButtonProps>
>;
Simple.args = {
  label: 'Simple IconButton Example',
  iconName: 'x',
};
