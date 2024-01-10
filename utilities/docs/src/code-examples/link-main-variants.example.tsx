import { Link } from '@microsoft/arbutus.link';
import * as React from 'react';

const ExampleComponent = () => (
  <>
    <Link as="a" elementProps={{ href: '#' }} isUnderlined>
      I am a Primary Link.
    </Link>
    <Link variant="caption" as="a" elementProps={{ href: '#' }} isUnderlined>
      I am a Caption Link.
    </Link>
    <Link variant="secondary" as="a" elementProps={{ href: '#' }} isUnderlined>
      I am a Secondary Link.
    </Link>
  </>
);

export default ExampleComponent;
