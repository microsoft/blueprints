import { Spinner } from '@fluentui/react-spinner';
import { tokens } from '@fluentui/react-theme';
import { makeStyles, mergeClasses } from '@griffel/react';
import { Guidance } from '@microsoft/arbutus.guidance';
import type { FC } from 'react';
import * as React from 'react';
import { useEffect, useState } from 'react';

import type { AnatomyComponentData } from '../component-renderer.types';

type AnatomyComponentProps = AnatomyComponentData;

const formatListItemData = (listItems: AnatomyComponentProps['listItems']) =>
  listItems?.map(({ text, headline }) => ({ heading: headline, description: text }));

export const usePreviewStyles = makeStyles({
  content: {
    width: '100%',
    height: '360px',
    position: 'relative',
    borderTopWidth: tokens.strokeWidthThin,
    borderTopStyle: 'solid',
    borderTopColor: tokens.colorNeutralStroke1,
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.colorNeutralStroke1,
    borderLeftWidth: tokens.strokeWidthThin,
    borderLeftStyle: 'solid',
    borderLeftColor: tokens.colorNeutralStroke1,
    borderRightWidth: tokens.strokeWidthThin,
    borderRightStyle: 'solid',
    borderRightColor: tokens.colorNeutralStroke1,
    overflowY: 'hidden',
    overflowX: 'hidden',
  },
  overlay: {
    position: 'absolute',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transitionProperty: 'all',
    transitionDuration: tokens.durationSlow,
    transitionTimingFunction: tokens.curveAccelerateMax,
    backgroundColor: 'transparent',
  },
  removeOverlay: {
    display: 'none',
  },
  loading: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  iframe: {
    height: '360px',
    width: '100%',
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
  },
});

const Preview: FC<Pick<AnatomyComponentProps, 'embedUrl'> & { className: string }> = ({
  embedUrl,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const loadedHandler = () => setIsLoading(false);

  const classes = usePreviewStyles();
  const overlayClasses = mergeClasses(
    classes.overlay,
    isLoading && classes.loading,
    isAnimationComplete && classes.removeOverlay,
  );

  // NOTE: This effect will remove the loading overlay after the blur-in animation is complete. See `embed.styles.ts`,
  // tokens.durationSlow is 300ms.
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setIsAnimationComplete(true), 300);
    }
  }, [isLoading]);

  return (
    <div className={mergeClasses(classes.content, className)}>
      <div className={overlayClasses}>{isLoading && <Spinner />}</div>
      <iframe
        title="Component Preview"
        onLoad={loadedHandler}
        className={classes.iframe}
        src={embedUrl}
      />
    </div>
  );
};

export const AnatomyComponent: FC<AnatomyComponentProps> = ({
  embedUrl,
  description,
  heading,
  listItems,
}) => {
  const legendListItems = formatListItemData(listItems);

  return (
    <Guidance
      imageAs={Preview}
      imageProps={{ embedUrl }}
      heading={heading}
      description={description}
      legendListItems={legendListItems}
    />
  );
};
