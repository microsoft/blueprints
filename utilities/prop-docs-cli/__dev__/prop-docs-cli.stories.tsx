import type { Meta, Story } from '@storybook/react';
import React from 'react';
import { Text } from '@microsoft/arbutus.text';
import { Command } from '@microsoft/arbutus.command';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';

import { Centered } from '../../../.storybook/decorators';

const DemoComponent = () => {
  const space = useSpaceStyles();
  return (
    <div>
      <Text as="h1" block variant="headline" className={space.mb4}>
        Prop Docs CLI
      </Text>
      <Text as="h2" block variant="caption" className={space.mb4}>
        Configuration:
      </Text>
      <div className={space.mb4}>
        <Text variant="code">arbutus-prop-docs.config.json</Text>
      </div>
      <div className={space.mb4}>
        <Text variant="code">
          {`
{
  "componentPaths": ["__dev__/demo-component/demo-component.tsx"],
  "outputDir": "__prop-docs__"
}
        `}
        </Text>
      </div>
      <Text as="h2" block variant="caption" className={space.my4}>
        Generate component props documentation:
      </Text>
      <Command command="arbutus-prop-docs generate" isCopyable />
      <Text as="h2" block variant="caption" className={space.my4}>
        Clean:
      </Text>
      <Command command="arbutus-prop-docs clean" isCopyable />
    </div>
  );
};

export default {
  title: 'Utilities/Prop Docs CLI',
  decorators: [
    (Story) => (
      <Centered>
        <div>
          <Story />
        </div>
      </Centered>
    ),
  ],
} as Meta;

const Template: Story = () => <DemoComponent />;

export const Demo = Template.bind({}) as Story;
