import type { ComponentDoc } from 'react-docgen-typescript';

export type Config = {
  /**
   * A list of component paths to be parsed for prop docs.
   * @example ['path/to/my-component.tsx', 'path/to/another-component.tsx]
   */
  componentPaths: string[];

  /**
   * Directory to output the prop docs files.
   * @default '__prop-docs__'
   */
  outputDir: string;
};

export type Manifest = Record<string, ComponentDoc | never>;

export type PropDoc = ComponentDoc;
