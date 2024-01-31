export default `import * as React from 'react';
import { Logo } from '@microsoft/arbutus.logo';
import { Text } from '@microsoft/arbutus.text';
import { Tag } from '@microsoft/arbutus.tag';

const ExampleComponent = () => (
  <Text block as="p" variant="caption">
    <Tag isInline>Tag</Tag>
    &ensp;This is Figma.
  </Text>
);

export default ExampleComponent;

`;
