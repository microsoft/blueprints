import { ResourceChip } from '@microsoft/arbutus.resource-chip';
import * as React from 'react';

const ExampleComponent = () => (
  <div>
    <ResourceChip text="@example/example-package" actionIconName="copy" size='small' />
    &emsp;
    <ResourceChip text="@example/example-package" actionIconName="copy" size="medium" />
    &emsp;
    <ResourceChip text="@example/example-package" actionIconName="copy" size='large' />
  </div>
);

export default ExampleComponent;
