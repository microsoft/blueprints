export type UseCopyToClipboardOptions = {
  resetTimeout?: number;
};

export type UseCopyToClipboard = (options?: UseCopyToClipboardOptions) => {
  copy: (text: string) => void;
  isCopied: boolean;
  error: string | undefined;
  status: 'ready' | 'success' | 'error';
};
