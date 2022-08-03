import { useCallback, useEffect, useState } from 'react';

import type { UseCopyToClipboard } from './use-copy-to-clipboard.types';

export const useCopyToClipboard: UseCopyToClipboard = (options) => {
  const { resetTimeout = 2500 } = options || {};

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [error, setError] = useState<undefined | string>();
  const [status, setStatus] = useState<'ready' | 'success' | 'error'>('ready');

  // Checking for Clipboard API availability.
  const Clipboard = navigator?.clipboard;

  if (!Clipboard) {
    setError('Clipboard API is not supported');
    setStatus('error');
  }

  // Resetting the state, to allow the user to copy again.
  useEffect(() => {
    if (status === 'ready') {
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsCopied(false);
      setError(undefined);
      setStatus('ready');
    }, resetTimeout);

    return () => clearTimeout(timeoutId);
  }, [status, resetTimeout]);

  // Copy callback.
  const copy = useCallback(
    (text: string) => {
      Clipboard?.writeText(text)
        .then(() => {
          setIsCopied(true);
          setStatus('success');
        })
        .catch(() => {
          setError('Could not copy to clipboard');
          setStatus('error');
        });
    },
    [Clipboard],
  );

  return { copy, isCopied, error, status };
};
