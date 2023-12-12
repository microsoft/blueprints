export type QuickResourceCopyTextProps = {
  copyText: string;
  className?: string;
}

export type QuickResourceLinkProps = {
  label: string;
  url: string;
  type: 'figma' | 'storybook';
  className?: string;
}

export type QuickResourceProps = {
  data: QuickResourceLinkProps | QuickResourceCopyTextProps
  className?: string;
}