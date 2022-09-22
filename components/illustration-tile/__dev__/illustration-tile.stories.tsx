import { makeStyles } from '@griffel/react';
import { Tile } from '@microsoft/arbutus.tile';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { IllustrationTileProps } from '../src/index';
import { IllustrationTile } from '../src/index';
// @ts-ignore TS doesn’t recognize the image format.
import illustrationInteractive from './interactive.svg';
// @ts-ignore TS doesn’t recognize the image format.
import illustrationStatic from './static.svg';

export default {
  title: 'Tiles/IllustrationTile',
  component: IllustrationTile,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof IllustrationTile>;

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

const Template: ComponentStory<typeof IllustrationTile> = (args) => {
  const classes = useTileGridStyles();

  return (
    <div className={classes.root}>
      <Tile variant="solid-color">&nbsp;</Tile>
      <IllustrationTile {...args} />
      <Tile variant="solid-color">&nbsp;</Tile>
    </div>
  );
};

export const Interactive = Template.bind({}) as ComponentStory<
  FunctionComponent<IllustrationTileProps>
>;
Interactive.args = {
  title: 'Accessibility',
  description: 'Guidance on how you can make your products accessible with our library.',
  illustrationAlt: 'Icon representing accessibility',
  illustrationSrc: illustrationInteractive as string,
};

export const Static = Template.bind({}) as ComponentStory<
  FunctionComponent<IllustrationTileProps>
>;
Static.args = {
  illustrationAlt: 'Icon representing accessibility',
  illustrationSrc: illustrationStatic as string,
  onClick: undefined,
};
