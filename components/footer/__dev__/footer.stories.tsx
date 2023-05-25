import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { FooterProps } from '../src/index';
import { Footer } from '../src/index';

export default {
  title: 'Layout/Footer',
  component: Footer,
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<FooterProps>>;
Simple.args = {
  children: 'Simple Footer Example',
};
