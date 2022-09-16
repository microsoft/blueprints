import { Spinner } from '@fluentui/react-spinner';
import { mergeClasses } from '@griffel/react';
import { Divider } from '@microsoft/arbutus.divider';
import { IconButton } from '@microsoft/arbutus.icon-button';
import { Logo } from '@microsoft/arbutus.logo';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';
import { useState } from 'react';

import { useEmbedStyles } from './embed.styles';
import type { EmbedProps } from './embed.types';
import { getUrl } from './get-url';

export const Embed: FC<EmbedProps> = ({
  allowFullScreen = true,
  className,
  openButtonLabel = 'Open in a new tab.',
  size = 'medium',
  title,
  type,
  url,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const loadedHandler = () => setIsLoading(false);

  // Styles
  const classes = useEmbedStyles();
  const space = useSpaceStyles();
  const openClickHandler = () => {
    window?.open(url, '_blank')?.focus();
  };

  const overlayClasses = mergeClasses(classes.overlay, isLoading && classes.loading);

  return (
    <div className={mergeClasses(classes.root, className)}>
      <header className={mergeClasses(classes.header, space.px5, space.my5)}>
        <Logo logoName={type} size="medium" />
        <Text as="h3" variant="caption" className={space.mt2}>
          {title}
        </Text>
        <div>
          <IconButton
            label={openButtonLabel}
            iconName="open"
            onClick={openClickHandler}
          />
        </div>
      </header>
      <Divider />
      <div className={classes.content}>
        <div className={overlayClasses}>{isLoading && <Spinner />}</div>
        <iframe
          onLoad={loadedHandler}
          title={title}
          className={mergeClasses(classes.iframe, classes[size])}
          src={getUrl({ type, url })}
          allowFullScreen={allowFullScreen}
        />
      </div>
    </div>
  );
};
