import { colorClasses, paths } from '@microsoft/arbutus.icon';
import { Text } from '@microsoft/arbutus.text';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { MarkList, MarkListItem } from '../src/index';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Lists/MarkList',
  component: MarkList,
  argTypes: {
    iconName: {
      options: Object.keys(paths),
      control: { type: 'select' },
    },
    iconColor: {
      options: Object.keys(colorClasses),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof MarkList>;

export const Base: Story = {
  render: (args) => (
    <MarkList {...args}>
      <MarkListItem>
        <Text as="span" variant="caption">
          Natural on every platform.{' '}
        </Text>
        <Text as="span" color="secondary">
          You want to know what to do. Your experiences should adapt to the device you’re
          on and should build off the familiar — designing for what you already
          understand. You want to know what to do. Your experiences should adapt to the
          device you’re on and should build off the familiar — designing for what you
          already understand.
        </Text>
      </MarkListItem>
      <MarkListItem>
        <Text as="span" variant="caption">
          One for all, all for one. You want to be included.{' '}
        </Text>
        <Text as="span" color="secondary">
          Your experiences should consider, learn, and reflect a range of perspectives and
          abilities for the benefit of all.
        </Text>
      </MarkListItem>
      <MarkListItem>
        <Text as="span" variant="caption">
          Built for focus. You want to stay in the flow.{' '}
        </Text>

        <Text as="span" color="secondary">
          Your experiences should inspire action, drawing you forward, simply and
          seamlessly.
        </Text>
      </MarkListItem>
      <MarkListItem>
        <Text as="span" variant="caption">
          Unmistakably Microsoft.{' '}
        </Text>

        <Text as="span" color="secondary">
          You want to recognize what you’re looking for. Your experiences should feel like
          one Microsoft. One moment, one product, one experience at a time.
        </Text>
      </MarkListItem>
    </MarkList>
  ),
};

export const WithIcon: Story = {
  args: {
    iconName: 'check',
    iconColor: 'positive',
  },
  render: (args) => (
    <MarkList {...args}>
      {Array.from({ length: 3 }).map((_, i) => (
        <MarkListItem key={i}>
          <Text variant="description" color="secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
            commodo purus.
          </Text>
        </MarkListItem>
      ))}
    </MarkList>
  ),
};

export default meta;
