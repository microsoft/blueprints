import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FunctionComponent } from 'react';
import React from 'react';

export const Area: FunctionComponent = ({ children }) => (
  <Tile variant="solid-color" backgroundColor="tertiary">
    <Text block variant="caption" className={useSpaceStyles().p8}>
      {children}
    </Text>
  </Tile>
);
