import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { HeaderProps } from '../src/index';
import { Header } from '../src/index';

export default {
  title: 'Layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<HeaderProps>>;
Simple.args = {
  children: 'Simple Header Example',
};
