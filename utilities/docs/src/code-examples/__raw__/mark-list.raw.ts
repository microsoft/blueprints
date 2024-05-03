export default `import { MarkList, MarkListItem } from '@microsoft/arbutus.mark-list';
import { Text } from '@microsoft/arbutus.text';
import * as React from 'react';

const ExampleComponent = () => {
  return (
    <MarkList>
      <MarkListItem>
        <Text variant="description" color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar commodo
          purus.
        </Text>
      </MarkListItem>
      <MarkListItem>
        <Text variant="description" color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar commodo
          purus.
        </Text>
      </MarkListItem>
      <MarkListItem>
        <Text variant="description" color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar commodo
          purus.
        </Text>
      </MarkListItem>
    </MarkList>
  );
};

export default ExampleComponent;
`;
