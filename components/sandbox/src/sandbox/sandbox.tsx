import type { SandpackSetup } from '@codesandbox/sandpack-react';
import { Sandpack } from '@codesandbox/sandpack-react';
import type { FC } from 'react';
import * as React from 'react';

import type { SandboxProps } from './sandbox.types';

export const Sandbox: FC<SandboxProps> = ({ files, dependencies }) => {
  const customSetup: SandpackSetup = {};

  if (dependencies) {
    customSetup.dependencies = dependencies;
  }

  return <Sandpack template="react-ts" files={files} customSetup={customSetup} />;
};
