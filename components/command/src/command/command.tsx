import { Icon } from '@arbutus/component.icon';
import { useCopyToClipboard } from '@arbutus/hook.use-copy-to-clipboard';
import { mergeClasses } from '@griffel/react';
import { VisuallyHidden } from '@reach/visually-hidden';
import type { FC } from 'react';
import * as React from 'react';

import { useCommandStyles } from './command.styles';
import type { CommandProps } from './command.types';

export const Command: FC<CommandProps> = ({
  isCopyable,
  command,
  copyLabel = 'Copy command.',
}) => {
  const { copy, isCopied } = useCopyToClipboard();
  // Styles
  const classes = useCommandStyles();
  const buttonClasses = mergeClasses(
    classes.button,
    isCopied ? classes.complete : classes.idle,
  );

  return (
    <div className={classes.root}>
      <span className={classes.command}>{command}</span>
      {isCopyable && (
        <button onClick={() => copy(command)} className={buttonClasses}>
          <Icon
            iconName={isCopied ? 'check' : 'copy'}
            color={isCopied ? 'positive-inverse' : 'secondary'}
          />
          <VisuallyHidden>{copyLabel}</VisuallyHidden>
        </button>
      )}
    </div>
  );
};
