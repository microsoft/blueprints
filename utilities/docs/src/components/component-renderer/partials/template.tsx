import type { FC } from 'react';
import * as React from 'react';

// import { ... } from '../component-renderer.types';
// import { makeNavigate } from '../../../utilities';

type TemplateComponentProps = {
  exampleProp?: string;
};

export const TemplateComponent: FC<TemplateComponentProps> = ({ exampleProp }) => {
  // Example of adding a handler that will navigate to a page on click.
  // const onClick = makeNavigate({ isExternal, to });

  return <>{exampleProp}</>;
};
