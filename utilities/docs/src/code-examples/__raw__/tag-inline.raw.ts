export default `import { Tag } from '@microsoft/arbutus.tag';
import { Text } from '@microsoft/arbutus.text';
import * as React from 'react';

const ExampleComponent = () => (
  <Text block as="p" variant="caption">
    <Tag isInline>Tag</Tag>
    &ensp;This is Figma.
  </Text>
);

export default ExampleComponent;
`;
