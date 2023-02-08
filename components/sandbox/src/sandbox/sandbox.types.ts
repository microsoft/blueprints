import type { SandpackProps } from '@codesandbox/sandpack-react';

type SandpackFiles = SandpackProps['files'];

export type SandboxProps = {
  /**
   * Files of the sandboxed application.
   */
  files: SandpackFiles;

  /**
   * Dependencies of the sandboxed application.
   */
  dependencies: {
    [dependency: string]: string;
  };
};
