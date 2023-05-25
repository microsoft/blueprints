import { makeStyles } from '@griffel/react';
import { Tile } from '@microsoft/arbutus.tile';
import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { BookmarkTileProps } from '../src/index';
import { BookmarkTile } from '../src/index';
// @ts-ignore TS doesn’t recognize the image format.
import themeDesigner from './theme-designer.png';

export default {
  title: 'Tiles/BookmarkTile',
  component: BookmarkTile,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof BookmarkTile>;

const useTileGridStyles = makeStyles({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
    columnGap: '2.5rem',
    rowGap: '2.5rem',

    '@media screen and (max-width: var(--arbutus--breakpoint-xxs))': {
      gridTemplateColumns: '100%',
    },
  },
});

const Template: StoryFn<typeof BookmarkTile> = (args) => {
  const classes = useTileGridStyles();

  return (
    <div className={classes.root}>
      <Tile variant="solid-color">&nbsp;</Tile>
      <BookmarkTile {...args} />
      <Tile variant="solid-color">&nbsp;</Tile>
    </div>
  );
};

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<BookmarkTileProps>>;
Simple.args = {
  title: 'Link Name',
  description: 'BookmarkTile communicates to the user that this is a link to a resource.',
};
export const WithCustomIcon = Template.bind({}) as StoryFn<
  FunctionComponent<BookmarkTileProps>
>;
WithCustomIcon.args = {
  title: 'Fluent Theme Designer',
  description: 'Figma plugin',
  iconSrc: themeDesigner as string,
  iconAlt: 'Fluent Theme Designer',
};
