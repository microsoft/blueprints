export default `import { tokens } from '@fluentui/react-theme';
import { Link } from '@microsoft/arbutus.link';
import * as React from 'react';

const ExampleComponent = () => (
  <div
    style={{
      padding: '2rem',
      backgroundColor: tokens.colorNeutralBackgroundInverted,
      borderRadius: tokens.borderRadiusLarge,
    }}
  >
    <Link as="a" elementProps={{ href: '#' }} isUnderlined variant="inverse">
      I am an inverse Link.
    </Link>
  </div>
);

export default ExampleComponent;
`;
