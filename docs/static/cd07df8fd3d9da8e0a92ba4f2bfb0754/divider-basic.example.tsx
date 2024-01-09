import { Divider } from '@microsoft/arbutus.divider';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import * as React from 'react';

const ExampleComponent = () => {
  /**
   * [optional] Use the `useSpaceStyles` hook to easily apply spacing to any component. In this case, we will use `my`,
   * which will translate to margin top and bottom. `my6` will apply a margin of 6 vertical units or
   * `tokens.spacingHorizontalM`.
   *
   * @see https://microsoft.github.io/blueprints/utilities/hooks/use-space-styles/
   */
  const space = useSpaceStyles();

  return <Divider className={space.my6} />;
};

export default ExampleComponent;
