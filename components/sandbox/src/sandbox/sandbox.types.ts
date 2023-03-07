import type { SandpackProps } from '@codesandbox/sandpack-react';

type SandpackFiles = SandpackProps['files'];

export type SandboxProps = {
  /**
   * Files of the sandboxed application.
   */
  files: SandpackFiles | Record<string, any>;

  /**
   * Dependencies of the sandboxed application.
   */
  dependencies: {
    [dependency: string]: string;
  };
};
