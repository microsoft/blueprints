import { paths } from '@arbutus/component.icon';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { colorMap } from '../src/icon-button/icon-button.styles';
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
    color: {
      control: {
        type: 'select',
        options: Object.keys(colorMap),
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
