import { Tile } from '@arbutus/component.tile';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import type { ActionListTileProps } from './action-list-tile.types';

export const ActionListTile: FC<ActionListTileProps> = ({ className, children }) => {
  // Styles
  const space = useSpaceStyles();

  return (
    <Tile variant="card">
      <div className={mergeClasses(space.p6, className)}>{children}</div>
    </Tile>
  );
};
