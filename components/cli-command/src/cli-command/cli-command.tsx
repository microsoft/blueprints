import { mergeClasses } from '@griffel/react';
import { VisuallyHidden } from '@reach/visually-hidden';
import * as copy from 'copy-to-clipboard';
import type { FC } from 'react';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { useCLICommandStyles } from './cli-command.styles';
import type { CLICommandProps } from './cli-command.types';

export const CLICommand: FC<CLICommandProps> = ({ isCopyable, command, onCopy }) => {
  const [isCopied, setCopied] = useState(false);

  // Styles
  const classes = useCLICommandStyles();
  const buttonClasses = mergeClasses(
    classes.copy,
    isCopied ? classes.complete : classes.idle,
  );

  const handleCopy = () => {
    if (!isCopied) {
      setCopied(true);
      copy(command);
      onCopy?.(command);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1800);
  }, [isCopied]);

  return (
    <div className={classes.root}>
      <span className={classes.command}>{command}</span>
      {isCopyable && (
        <button onClick={handleCopy} className={buttonClasses}>
          {isCopied ? (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.53033 12.9697C4.23744 12.6768 3.76256 12.6768 3.46967 12.9697C3.17678 13.2626 3.17678 13.7374 3.46967 14.0303L7.96967 18.5303C8.26256 18.8232 8.73744 18.8232 9.03033 18.5303L20.0303 7.53033C20.3232 7.23744 20.3232 6.76256 20.0303 6.46967C19.7374 6.17678 19.2626 6.17678 18.9697 6.46967L8.5 16.9393L4.53033 12.9697Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5028 4.62704L5.5 6.75V17.2542C5.5 19.0491 6.95507 20.5042 8.75 20.5042L17.3663 20.5045C17.0573 21.3782 16.224 22.0042 15.2444 22.0042H8.75C6.12665 22.0042 4 19.8776 4 17.2542V6.75C4 5.76929 4.62745 4.93512 5.5028 4.62704ZM17.75 2C18.9926 2 20 3.00736 20 4.25V17.25C20 18.4926 18.9926 19.5 17.75 19.5H8.75C7.50736 19.5 6.5 18.4926 6.5 17.25V4.25C6.5 3.00736 7.50736 2 8.75 2H17.75ZM17.75 3.5H8.75C8.33579 3.5 8 3.83579 8 4.25V17.25C8 17.6642 8.33579 18 8.75 18H17.75C18.1642 18 18.5 17.6642 18.5 17.25V4.25C18.5 3.83579 18.1642 3.5 17.75 3.5Z" />
            </svg>
          )}
          <VisuallyHidden>Copy text</VisuallyHidden>
        </button>
      )}
    </div>
  );
};
