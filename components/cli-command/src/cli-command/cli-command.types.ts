export type CLICommandProps = {
  command: string;
  isCopyable?: boolean;
  onCopy?: (command?: string) => void;
};
