import { OrderedList, OrderedListItem } from '@microsoft/arbutus.ordered-list';
import { Text } from '@microsoft/arbutus.text';
import * as React from 'react';

const ExampleComponent = () => {
  return (
    <OrderedList>
      <OrderedListItem variant="primary">
        <Text variant="description" color="secondary">
          Primary
        </Text>
      </OrderedListItem>
      <OrderedListItem variant="secondary">
        <Text variant="description" color="secondary">
          Secondary
        </Text>
      </OrderedListItem>
      <OrderedListItem variant="accent">
        <Text variant="description" color="secondary">
          Accent
        </Text>
      </OrderedListItem>
    </OrderedList>
  );
};

export default ExampleComponent;
