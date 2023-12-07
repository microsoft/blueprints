import type { SandpackProps } from '@codesandbox/sandpack-react';

type SandpackFiles = SandpackProps['files'];

export type SandboxProps = {
  /**
   * Component code to render.
   */
  componentCode: string;

  /**
   * Dependencies of the sandboxed application.
   */
  dependencies?: (string | [string, string])[];
};
