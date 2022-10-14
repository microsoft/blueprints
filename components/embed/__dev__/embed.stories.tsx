import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { EmbedProps } from '../src/index';
import { Embed } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Blocks/Embed',
  component: Embed,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    allowFullScreen: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Embed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Embed> = (args) => (
  <div style={{ width: '90%' }}>
    <Embed {...args} />
  </div>
);

export const FigmaEmbed = Template.bind({}) as ComponentStory<
  FunctionComponent<EmbedProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FigmaEmbed.args = {
  type: 'figma',
  url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  title: 'Sample Figma file',
  openButtonLabel: 'Open Figma file in a new tab',
  allowFullScreen: true,
};

export const StorybookEmbed = Template.bind({}) as ComponentStory<
  FunctionComponent<EmbedProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StorybookEmbed.args = {
  type: 'storybook',
  url: 'https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/iframe.html?id=shadowboxcta--default&viewMode=story&shortcuts=false&singleStory=true',
  title: 'Sample Storybook component',
  openButtonLabel: 'Open Storybook preview in a new tab',
};
