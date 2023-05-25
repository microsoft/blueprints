import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { PersonTileProps } from '../src/index';
import { PersonTile } from '../src/index';
// @ts-ignore TS doesn’t recognize the image format.
import avatar from './avatar.jpg';
// @ts-ignore TS doesn’t recognize the image format.
import teamsIcon from './teams-icon.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tiles/PersonTile',
  component: PersonTile,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof PersonTile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PersonTile> = (args) => <PersonTile {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<PersonTileProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  firstName: 'Joanne',
  lastName: 'Doe',
  role: 'Software Engineer',
  avatarSrc: avatar as string,
};

export const WithCustomIcon = Template.bind({}) as StoryFn<
  FunctionComponent<PersonTileProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCustomIcon.args = {
  firstName: 'Joanne',
  lastName: 'Doe',
  role: 'Software Engineer',
  avatarSrc: avatar as string,
  iconSrc: teamsIcon as string,
  iconAlt: 'Open in Teams',
};
