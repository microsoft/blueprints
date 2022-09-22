import { IconButton } from '@microsoft/arbutus.icon-button';
import { Text } from '@microsoft/arbutus.text';
import { useCopyToClipboard } from '@microsoft/arbutus.use-copy-to-clipboard';
import type { FC } from 'react';
import * as React from 'react';

import type { HeadingProps } from './heading.types';

export const Heading: FC<HeadingProps> = ({
  as = 'h1',
  children,
  className,
  copyLabel = 'Copy heading URL to clipboard.',
  headingUrl,
  ...textProps
}) => {
  const { copy } = useCopyToClipboard();

  return (
    <Text className={className} as={as} block {...textProps}>
      {children}
      {headingUrl && (
        <>
          &ensp;
          <IconButton
            onClick={() => copy(headingUrl)}
            label={copyLabel}
            iconName="link"
            color="secondary"
          />
        </>
      )}
    </Text>
  );
};
