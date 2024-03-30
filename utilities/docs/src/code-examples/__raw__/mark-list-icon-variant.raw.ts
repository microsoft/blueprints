export default `import { Text } from '@microsoft/arbutus.text';
import { MarkList, MarkListItem } from '@microsoft/arbutus.mark-list';
import * as React from 'react';

const ExampleComponent = () => {
  return (
    <MarkList iconName='check' iconColor='positive'>
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
