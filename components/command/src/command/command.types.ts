export type CommandProps = {
  /**
   * The command to render.
   */
  command: string;

  /**
   * Whether the user should be able to copy the command to the clipboard.
   */
  isCopyable?: boolean;

  /**
   * Screen-reader accessible label for the copy command action.
   * @default 'Copy command.'
   */
  copyLabel?: string;
};
