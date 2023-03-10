export type Config = {
  /**
   * The directory to output the files to.
   * @default '__raw__'
   */
  outputDir?: string;

  /**
   * The files to convert to strings.
   * @example ['path/to/file1.txt', 'path/to/file2.txt']
   */
  files: string[];

  /**
   * File extension.
   * @default 'ts'
   * @example 'js'
   */
  extension?: 'ts' | 'js';
};

export type FileToStringArgs = {
  config: Config;
};
