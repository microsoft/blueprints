import type { SandpackProps } from '@codesandbox/sandpack-react';

type SandpackFiles = SandpackProps['files'];

export type SandboxProps = {
  /**
   * Files of the sandboxed application.
   */
  // This is passed to a third-party component, so we have to use any here.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files: SandpackFiles | Record<string, any>;

  /**
   * Dependencies of the sandboxed application.
   */
  dependencies: {
    [dependency: string]: string;
  };
};
