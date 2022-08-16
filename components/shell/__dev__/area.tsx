import { Text } from '@arbutus/component.text';
import { Tile } from '@arbutus/component.tile';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import type { FunctionComponent } from 'react';
import React from 'react';

export const Area: FunctionComponent = ({ children }) => (
  <Tile variant="solid-color" backgroundColor="tertiary">
    <Text block variant="caption" className={useSpaceStyles().p8}>
      {children}
    </Text>
  </Tile>
);
