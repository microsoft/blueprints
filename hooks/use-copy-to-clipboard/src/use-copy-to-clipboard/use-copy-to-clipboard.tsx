import { useCallback, useEffect, useState } from 'react';

import type { UseCopyToClipboard } from './use-copy-to-clipboard.types';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== 'undefined';

export const useCopyToClipboard: UseCopyToClipboard = (options) => {
  const { resetTimeout = 2500 } = options || {};

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [error, setError] = useState<undefined | string>();
  const [status, setStatus] = useState<'ready' | 'success' | 'error'>('ready');

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

  const copy = useCallback((text: string) => {
    // Checking for Clipboard API availability.
    let Clipboard: Clipboard | undefined;

    if (isBrowser) {
      Clipboard = window.navigator.clipboard;
    }

    if (!Clipboard) {
      setError('Clipboard API is not supported.');
      setStatus('error');
    }

    // Copy callback.
    Clipboard?.writeText(text)
      .then(() => {
        setIsCopied(true);
        setStatus('success');
      })
      .catch(() => {
        setError('Could not copy to clipboard.');
        setStatus('error');
      });
  }, []);

  return { copy, isCopied, error, status };
};
