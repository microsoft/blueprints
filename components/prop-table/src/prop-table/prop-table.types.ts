import type { PropDoc } from '@microsoft/arbutus.prop-docs-cli';

export type PropTableProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * A component from the manifest generated by the `@microsoft/arbutus.prop-docs-cli`.
   */
  propDoc: PropDoc;
};