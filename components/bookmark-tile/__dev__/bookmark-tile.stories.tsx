import { Tile } from '@arbutus/component.tile';
import { makeStyles } from '@griffel/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { BookmarkTileProps } from '../src/index';
import { BookmarkTile } from '../src/index';
// @ts-ignore TS doesn't recognize the image format.
import themeDesigner from './theme-designer.png';

export default {
  title: 'Tiles/BookmarkTile',
  component: BookmarkTile,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof BookmarkTile>;

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

const Template: ComponentStory<typeof BookmarkTile> = (args) => {
  const classes = useTileGridStyles();

  return (
    <div className={classes.root}>
      <Tile variant="solid-color">&nbsp;</Tile>
      <BookmarkTile {...args} />
      <Tile variant="solid-color">&nbsp;</Tile>
    </div>
  );
};

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<BookmarkTileProps>
>;
Simple.args = {
  title: 'Link Name',
  description: 'BookmarkTile communicates to the user that this is a link to a resource.',
};
export const WithCustomIcon = Template.bind({}) as ComponentStory<
  FunctionComponent<BookmarkTileProps>
>;
WithCustomIcon.args = {
  title: 'Fluent Theme Designer',
  description: 'Figma plugin',
  iconSrc: themeDesigner as string,
  iconAlt: 'Fluent Theme Designer',
};
