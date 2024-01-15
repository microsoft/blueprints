export default `import * as React from 'react';
import { Logo } from '@microsoft/arbutus.logo';
import { Text } from '@microsoft/arbutus.text';

const ExampleComponent = () => (
  <Text block as="p" variant='caption'>
    <Logo isInline logoName='figma' size='small' />
    &ensp;This is Figma.
  </Text>
);

export default ExampleComponent;
`;
