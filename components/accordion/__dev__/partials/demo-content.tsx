import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import * as React from 'react';

export const DemoContent: React.FC = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gridGap: '1rem',
    }}
  >
    <Text block as="p" variant="paragraph">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus iure iusto ipsa
      labore placeat nulla veniam. Odit possimus praesentium enim blanditiis. Quis
      quisquam esse eos amet dolore odit vel asperiores.
    </Text>
    <Tile variant="solid-color">&nbsp;</Tile>
  </div>
);
