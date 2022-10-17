import { colorClasses, variantClasses } from '@microsoft/arbutus.text';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { HeadingProps } from '../src/index';
import { Heading } from '../src/index';

export default {
  title: 'Blocks/Heading',
  component: Heading,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.keys(variantClasses),
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(colorClasses),
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<HeadingProps>
>;
Simple.args = {
  as: 'h1',
  children: 'Heading',
  color: 'primary',
  variant: 'headline',
};

export const WithCopyLinkButton = Template.bind({}) as ComponentStory<
  FunctionComponent<HeadingProps>
>;
WithCopyLinkButton.args = {
  as: 'h1',
  children: 'Section title',
  color: 'primary',
  variant: 'subtitle',
  headingUrl: 'example.com',
  copyLabel: 'Copy heading URL to clipboard.',
};
