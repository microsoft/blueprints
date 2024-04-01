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
