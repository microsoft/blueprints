import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent, ReactNode } from 'react';
import React from 'react';

import type { GuidanceProps } from '../src/index';
import { Guidance } from '../src/index';
// @ts-ignore TS doesn’t recognize the image format.
import image from './image.png';

const Wrapper = ({ children }: { children?: ReactNode | undefined }) => (
  <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px' }}>{children}</div>
);

export default {
  title: 'Blocks/Guidance',
  component: Guidance,
} as ComponentMeta<typeof Guidance>;

const legendListItems = Array.from({ length: 7 }, (_, index) => ({
  heading: `Heading ${index + 1}`,
  description: `Description ${
    index + 1
  }. Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.`,
}));

const Template: ComponentStory<typeof Guidance> = (args) => (
  <Wrapper>
    <Guidance {...args} />
  </Wrapper>
);

export const Full = Template.bind({}) as ComponentStory<FunctionComponent<GuidanceProps>>;

Full.args = {
  imageProps: {
    src: image,
    alt: 'Image alt text',
  },
  fileTitle: 'Component grid',
  logoName: 'figma',
  logoLabel: 'Figma',
  url: 'https://www.figma.com',
  heading: 'Complete Example',
  description:
    'Component grid is a collection of similar components. This is a description of the guidance.',
  openButtonLabel: 'Open in Figma',
  legendListItems: legendListItems,
};

export const Minimal = Template.bind({}) as ComponentStory<
  FunctionComponent<GuidanceProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Minimal.args = {
  imageProps: {
    src: image,
    alt: 'Image alt text',
  },
  fileTitle: 'Component grid',
  url: 'https://www.figma.com',
  openButtonLabel: 'Open in Figma',
};
