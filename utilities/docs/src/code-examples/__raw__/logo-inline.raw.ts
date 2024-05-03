export default `import { Logo } from '@microsoft/arbutus.logo';
import { Text } from '@microsoft/arbutus.text';
import * as React from 'react';

const ExampleComponent = () => (
  <Text block as="p" variant="caption">
    <Logo isInline logoName="figma" size="small" />
    &ensp;This is Figma.
  </Text>
);

export default ExampleComponent;
`;
