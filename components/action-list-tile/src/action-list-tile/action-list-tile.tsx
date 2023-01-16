import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import type { ActionListTileProps } from './action-list-tile.types';

export const ActionListTile: FC<ActionListTileProps> = ({ className, children }) => {
  // Styles
  const space = useSpaceStyles();

  return (
    <Tile variant="card" className={className}>
      <div className={space.p9}>{children}</div>
    </Tile>
  );
};
