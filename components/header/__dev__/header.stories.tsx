import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { HeaderProps } from '../src/index';
import { Header } from '../src/index';

export default {
  title: 'Layout/Header',
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<HeaderProps>>;
Simple.args = {
  children: 'Simple Header Example',
};
