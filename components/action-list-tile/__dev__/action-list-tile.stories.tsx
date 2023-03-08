import { makeStyles } from '@griffel/react';
import { Tile } from '@microsoft/arbutus.tile';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { ActionListTileProps } from '../src/index';
import {
  ActionListHeader,
  ActionListItem,
  ActionListItems,
  ActionListTile,
} from '../src/index';
// @ts-ignore TS doesn’t recognize the image format.
import figmaLogo from './figma.png';

export default {
  title: 'Tiles/ActionListTile',
  component: ActionListTile,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <Centered>
        <Story />
      </Centered>
    ),
  ],
} as ComponentMeta<typeof ActionListTile>;

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

const actions = {
  downloads: ['Toolkit', 'Examples', 'Tokens', 'Utilities'],
  links: [
    'Did you know about this?',
    'Interesting blog post 🤔',
    'I like cats and dogs and it is a longer title.',
    'Fourth item in this list.',
  ],
};
const TileExample = ({ type }: { type: 'downloads' | 'links' }) => {
  const createOnClick = (label: string) => () =>
    alert(`ActionItemList clicked: ${label}`);

  return (
    <ActionListTile>
      {type === 'downloads' ? (
        <ActionListHeader
          title="Figma Resources"
          iconSrc={figmaLogo as string}
          iconAlt="Figma logo"
        />
      ) : (
        <ActionListHeader title="Useful Links" />
      )}
      <ActionListItems>
        {actions[type].map((action, i) => (
          <ActionListItem
            key={`${i}-${action}`}
            label={action}
            description={type === 'downloads' ? 'Download' : 'Go to'}
            iconName={type === 'downloads' ? 'download' : 'open'}
            onClick={createOnClick(action)}
          />
        ))}
      </ActionListItems>
    </ActionListTile>
  );
};

const DownloadsTemplate: ComponentStory<typeof ActionListTile> = () => {
  const classes = useTileGridStyles();

  return (
    <div className={classes.root}>
      <Tile variant="solid-color">&nbsp;</Tile>
      <TileExample type="downloads" />
      <Tile variant="solid-color">&nbsp;</Tile>
    </div>
  );
};

export const DownloadsExample = DownloadsTemplate.bind({}) as ComponentStory<
  FunctionComponent<ActionListTileProps>
>;

const LinksTemplate: ComponentStory<typeof ActionListTile> = () => {
  const classes = useTileGridStyles();

  return (
    <div className={classes.root}>
      <Tile variant="solid-color">&nbsp;</Tile>
      <TileExample type="links" />
      <Tile variant="solid-color">&nbsp;</Tile>
    </div>
  );
};

export const LinksExample = LinksTemplate.bind({}) as ComponentStory<
  FunctionComponent<ActionListTileProps>
>;
