import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { EmbedProps } from '../src/index';
import { Embed } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Blocks/Embed',
  component: Embed,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    allowFullScreen: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <Centered>
        <div style={{ width: '90%' }}>
          <Story />
        </div>
      </Centered>
    ),
  ],
} as Meta<typeof Embed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Embed> = (args) => <Embed {...args} />;

export const FigmaEmbed = Template.bind({}) as StoryFn<FunctionComponent<EmbedProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FigmaEmbed.args = {
  type: 'figma',
  url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  title: 'Sample Figma file',
  openButtonLabel: 'Open Figma file in a new tab',
  allowFullScreen: true,
};

export const StorybookEmbed = Template.bind({}) as StoryFn<FunctionComponent<EmbedProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StorybookEmbed.args = {
  type: 'storybook',
  url: 'https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/iframe.html?id=shadowboxcta--default&viewMode=story&shortcuts=false&singleStory=true',
  title: 'Sample Storybook component',
  openButtonLabel: 'Open Storybook preview in a new tab',
};
