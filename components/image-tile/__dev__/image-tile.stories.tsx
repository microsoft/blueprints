import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { ImageTileProps } from '../src/index';
import { ImageTile } from '../src/index';
// @ts-ignore TS doesn’t recognize the image format.
import image from './image.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tiles/ImageTile',
  component: ImageTile,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof ImageTile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageTile> = (args) => <ImageTile {...args} />;

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<ImageTileProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  title: 'InfoTip',
  description: 'A simple info tip lorem ipsum dolor sit amet, consectetur.',
  imageProps: {
    src: image,
    alt: 'InfoTip graphic',
  },
};

export const TitleOnly = Template.bind({}) as ComponentStory<
  FunctionComponent<ImageTileProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TitleOnly.args = {
  title: 'InfoTip',
  imageProps: {
    src: image,
    alt: 'InfoTip graphic',
  },
};

export const DescriptionOnly = Template.bind({}) as ComponentStory<
  FunctionComponent<ImageTileProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DescriptionOnly.args = {
  description: 'A simple info tip lorem ipsum dolor sit amet, consectetur.',
  imageProps: {
    src: image,
    alt: 'InfoTip graphic',
  },
};
