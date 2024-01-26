export default `import { ResourceChip } from '@microsoft/arbutus.resource-chip';
import * as React from 'react';

const ExampleComponent = () => (
  <div>
    <ResourceChip text="Example resource" logoLabel="Figma file" logoName="figma" actionIconName="link" />
    &emsp;
    <ResourceChip text="@example/example-package" actionIconName="copy" />
  </div>
);

export default ExampleComponent;
`;
