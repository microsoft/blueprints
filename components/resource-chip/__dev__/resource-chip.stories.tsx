import { Text } from '@microsoft/arbutus.text';
import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { ResourceChipProps } from '../src/index';
import { ResourceChip } from '../src/index';

export default {
  title: 'Atoms/ResourceChip',
  component: ResourceChip,
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
} as Meta<typeof ResourceChip>;

const Template: StoryFn<typeof ResourceChip> = (args) => <ResourceChip {...args} />;

const InlineTemplate: StoryFn<typeof ResourceChip> = (args) => (
  <Text style={{ maxWidth: 640 }}>
    Repudiandae corporis facilis minima fugiat, aut magni delectus suscipit iste ipsa.
    Inventore sapiente repellendus. This is a <ResourceChip {...args} />. Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Ex maxime soluta ducimus deserunt
    veritatis repellat odio.
  </Text>
);

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<ResourceChipProps>>;
Simple.args = {
  text: '@microsoft/arbutus.button',
  actionIconName: 'copy',
};

export const WithFileLogo = Template.bind({}) as StoryFn<
  FunctionComponent<ResourceChipProps>
>;
WithFileLogo.args = {
  text: 'Figma Toolkit',
  actionIconName: 'link',
  logoName: 'figma',
  logoLabel: 'Figma',
};

export const InlineExample = InlineTemplate.bind({}) as StoryFn<
  FunctionComponent<ResourceChipProps>
>;
InlineExample.args = {
  text: 'ResourceChip Story',
  logoName: 'storybook',
  logoLabel: 'Storybook',
  size: 'small',
};
