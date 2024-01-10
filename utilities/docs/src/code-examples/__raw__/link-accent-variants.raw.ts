export default `import { Link } from '@microsoft/arbutus.link';
import * as React from 'react';

const ExampleComponent = () => (
  <>
    <Link variant="display" as="a" elementProps={{ href: '#' }}>
      I am a Display Link.
    </Link>
    <Link variant="accent" as="a" elementProps={{ href: '#' }}>
      I am an Accent Link.
    </Link>
  </>
);

export default ExampleComponent;
`;
