import * as React from 'react';
import type { FC } from 'react';
import { OrderedList, OrderedListItem } from '@microsoft/arbutus.ordered-list';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';

import type { OrderedListComponentData } from '../component-renderer.types';

type OrderedListComponentProps = OrderedListComponentData;

export const OrderedListComponent: FC<OrderedListComponentProps> = ({ listItems }) => {
  const space = useSpaceStyles();
  
  return (
    <OrderedList className={space.mx5}>
      {listItems.map(({ headline, text }) => (
        <OrderedListItem key={headline}>
          {headline && (
            <Text as="span" variant="caption">
              {headline}<br />
            </Text>
          )}
          <Text as="span" color="secondary">
            {text}
          </Text>
        </OrderedListItem>
      ))}
    </OrderedList>
  );
};
