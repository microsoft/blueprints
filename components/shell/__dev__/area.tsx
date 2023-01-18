import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FunctionComponent, ReactNode } from 'react';
import React from 'react';

export const Area: FunctionComponent<{
  children?: ReactNode | undefined;
  className?: string;
}> = ({ children, className }) => (
  <Tile className={className} variant="solid-color" backgroundColor="tertiary">
    <Text block variant="caption" className={useSpaceStyles().p8}>
      {children}
    </Text>
  </Tile>
);
