import { Tile } from '@arbutus/component.tile';
import { makeStyles } from '@griffel/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { ActionTileProps } from '../src/index';
import { ActionTile } from '../src/index';
// @ts-ignore TS doesn't recognize the image format.
import icon from './icon.svg';

export default {
  title: 'Tiles/ActionTile',
  component: ActionTile,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof ActionTile>;

const useTileGridStyles = makeStyles({
  root: {
    minWidth: '22.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridAutoRows: '3.75rem',
    columnGap: 'var(--space-3)',
    rowGap: 'var(--space-3)',

    '@media screen and (max-width: var(--breakpoint-xxs))': {
      gridTemplateColumns: '100%',
    },
  },
});

const Template: ComponentStory<typeof ActionTile> = (args) => {
  const classes = useTileGridStyles();

  return (
    <div className={classes.root}>
      <Tile variant="solid-color">&nbsp;</Tile>
      <ActionTile {...args} />
      <Tile variant="solid-color">&nbsp;</Tile>
      <Tile variant="solid-color">&nbsp;</Tile>
      <Tile variant="solid-color">&nbsp;</Tile>
    </div>
  );
};

export const WithoutImage = Template.bind({}) as ComponentStory<
  FunctionComponent<ActionTileProps>
>;
WithoutImage.args = {
  title: 'ActionTile',
  description: 'Component',
};

export const WithImage = Template.bind({}) as ComponentStory<
  FunctionComponent<ActionTileProps>
>;
WithImage.args = {
  title: 'ActionTile',
  description: 'Component',
  imageAlt: 'Component icon',
  imageSrc: icon as string,
};
