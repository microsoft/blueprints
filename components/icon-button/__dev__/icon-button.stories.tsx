import { paths } from '@microsoft/arbutus.icon';
import type { Meta, StoryFn } from '@storybook/react';
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
      options: Object.keys(paths),
      control: {
        type: 'select',
      },
    },
    color: {
      options: Object.keys(colorMap),
      control: {
        type: 'select',
      },
    },
  },
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<IconButtonProps>>;
Simple.args = {
  label: 'Simple IconButton Example',
  iconName: 'x',
};
