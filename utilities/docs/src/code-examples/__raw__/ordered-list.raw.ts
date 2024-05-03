export default `import { OrderedList, OrderedListItem } from '@microsoft/arbutus.ordered-list';
import { Text } from '@microsoft/arbutus.text';
import * as React from 'react';

const ExampleComponent = () => {
  return (
    <OrderedList>
      <OrderedListItem>
        <Text variant="description" color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar commodo
          purus.
        </Text>
      </OrderedListItem>
      <OrderedListItem>
        <Text variant="description" color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar commodo
          purus.
        </Text>
      </OrderedListItem>
      <OrderedListItem>
        <Text variant="description" color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar commodo
          purus.
        </Text>
      </OrderedListItem>
    </OrderedList>
  );
};

export default ExampleComponent;
`;
