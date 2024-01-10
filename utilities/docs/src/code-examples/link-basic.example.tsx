import { Link } from '@microsoft/arbutus.link';
import * as React from 'react';

const ExampleComponent = () => (
  <Link as="a" elementProps={{ href: '#' }}>
    I am a Link.
  </Link>
);

export default ExampleComponent;
