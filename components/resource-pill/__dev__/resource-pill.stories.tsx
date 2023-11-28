import { Text } from '@microsoft/arbutus.text';
import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { ResourcePillProps } from '../src/index';
import { ResourcePill } from '../src/index';

export default {
  title: 'Atoms/ResourcePill',
  component: ResourcePill,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <Centered>
        <Story />
      </Centered>
    ),
  ],
} as Meta<typeof ResourcePill>;

const Template: StoryFn<typeof ResourcePill> = (args) => <ResourcePill {...args} />;

const InlineTemplate: StoryFn<typeof ResourcePill> = (args) => (
  <Text style={{ maxWidth: 640 }}>
    Repudiandae corporis facilis minima fugiat, aut magni delectus suscipit iste ipsa.
    Inventore sapiente repellendus. This is a <ResourcePill {...args} />. Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Ex maxime soluta ducimus deserunt
    veritatis repellat odio.
  </Text>
);

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<ResourcePillProps>>;
Simple.args = {
  text: '@microsoft/arbutus.button',
  actionIconName: 'copy',
};

export const WithFileLogo = Template.bind({}) as StoryFn<
  FunctionComponent<ResourcePillProps>
>;
WithFileLogo.args = {
  text: 'Figma Toolkit',
  actionIconName: 'link',
  logoName: 'figma',
  logoLabel: 'Figma',
};

export const InlineExample = InlineTemplate.bind({}) as StoryFn<
  FunctionComponent<ResourcePillProps>
>;
InlineExample.args = {
  text: 'ResourcePill Story',
  actionIconName: 'link',
  logoName: 'storybook',
  logoLabel: 'Storybook',
  size: 'small',
};
