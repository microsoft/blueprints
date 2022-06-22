import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { FooterProps } from '../src/index';
import { Footer } from '../src/index';

export default {
  title: 'Layout/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<FooterProps>>;
Simple.args = {
  children: 'Simple Footer Example',
};
