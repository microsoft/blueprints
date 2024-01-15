export default `import { Link } from '@microsoft/arbutus.link';
import * as React from 'react';

const ExampleComponent = () => (
  <>
    <Link as="a" elementProps={{ href: '#' }} isUnderlined withIcon>
      I am a Link.
    </Link>
    <Link
      as="a"
      elementProps={{ href: '#' }}
      isUnderlined
      withIcon
      iconName="arrow-right"
    >
      I am a Link.
    </Link>
  </>
);

export default ExampleComponent;
`;
