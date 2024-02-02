import * as React from 'react';
import { Text } from '@microsoft/arbutus.text';

const ExampleComponent = () => (
  <>
    <Text block variant="caption" color="accent">
      Accent
    </Text>
    <Text block variant="caption" color="primary">
      Primary
    </Text>
    <Text block variant="caption" color="secondary">
      Secondary
    </Text>
    <Text block variant="caption" color="tertiary">
      Tertiary
    </Text>
    <Text block variant="caption" color="quaternary">
      Quaternary
    </Text>
    <Text block variant="caption" color="background">
      Background
    </Text>
    <Text block variant="caption" color="action">
      Action
    </Text>
    <Text block variant="caption" color="info">
      Info
    </Text>
    <Text block variant="caption" color="warning">
      Warning
    </Text>
    <Text block variant="caption" color="danger">
      Danger
    </Text>
    <Text block variant="caption" color="positive">
      Positive
    </Text>
    <Text block variant="caption" color="negative">
      Negative
    </Text>
  </>
);

export default ExampleComponent;
