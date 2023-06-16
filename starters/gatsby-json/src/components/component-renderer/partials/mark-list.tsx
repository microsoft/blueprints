import * as React from 'react';
import type { FC } from 'react';
import { MarkList, MarkListItem } from '@microsoft/arbutus.mark-list';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';

import type { MarkListComponentData } from '../component-renderer.types';

export const MarkListComponent: FC<MarkListComponentData> = ({ listItems }) => {
  const space = useSpaceStyles();

  return (
    <MarkList className={space.mx5}>
      {listItems.map(({ headline, text }) => (
        <MarkListItem key={headline}>
          {headline && (
            <Text as="span" variant="caption">
              {headline}
              <br />
            </Text>
          )}
          <Text as="span" color="secondary">
            {text}
          </Text>
        </MarkListItem>
      ))}
    </MarkList>
  );
};
