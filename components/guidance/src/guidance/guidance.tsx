import { mergeClasses } from '@griffel/react';
import { IconButton } from '@microsoft/arbutus.icon-button';
import { Logo } from '@microsoft/arbutus.logo';
import { OrderedList, OrderedListItem } from '@microsoft/arbutus.ordered-list';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import useResizeObserver from '@react-hook/resize-observer';
import type { FC, MutableRefObject } from 'react';
import * as React from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

import { useGuidanceStyles } from './guidance.styles';
import type { GuidanceProps } from './guidance.types';

const useSize = (target: MutableRefObject<null>): { width: number; height: number } => {
  const [size, setSize] = useState();

  useLayoutEffect(() => {
    // @ts-ignore-next-line Need to access the bounding client rect on mount.
    setSize(target?.current?.getBoundingClientRect());
  }, [target]);

  // @ts-ignore-next-line
  useResizeObserver(target, (entry) => setSize(entry.contentRect));

  // @ts-ignore-next-line
  return size as { width: number; height: number };
};

export const Guidance: FC<GuidanceProps> = ({
  className,
  description,
  fileTitle,
  heading,
  imageAs: Image = 'img',
  imageProps,
  legendListItems,
  logoLabel,
  logoName,
  openButtonLabel,
  url,
}) => {
  const ref = useRef(null);
  const value = useSize(ref);
  const width = value?.width ?? 726;
  let lists = [legendListItems];
  let middle = 0;
  const isTwoColumn = legendListItems && width > 726;
  const withLogo = logoName && logoLabel;

  if (isTwoColumn) {
    middle = Math.ceil(legendListItems.length / 2);
    lists = [legendListItems.slice(0, middle), legendListItems.slice(middle)];
  }

  // Styles
  const classes = useGuidanceStyles();
  const space = useSpaceStyles();

  const openClickHandler = () => {
    window?.open(url, '_blank')?.focus();
  };

  return (
    <article className={className} ref={ref}>
      <figure className={classes.figure}>
        <Image {...imageProps} className={classes.image} />
        <figcaption
          className={mergeClasses(
            classes.figcaption,
            space.p5,
            withLogo ? classes.figcaptionWithLogo : classes.figcaptionWithoutLogo,
          )}
        >
          {withLogo && <Logo logoName={logoName} label={logoLabel} size="medium" />}
          <Text as="h3" variant="caption" className={space.mt2}>
            {fileTitle}
          </Text>
          <IconButton
            label={openButtonLabel ?? 'Open file.'}
            iconName="open"
            onClick={openClickHandler}
          />
        </figcaption>
      </figure>
      {(heading || description) && (
        <div className={space.mt7}>
          {heading && (
            <Text as="h2" variant="headline" block>
              {heading}
            </Text>
          )}
          {description && (
            <Text as="p" block>
              {description}
            </Text>
          )}
        </div>
      )}
      {legendListItems && (
        <div className={isTwoColumn ? classes.twoColumn : ''}>
          {lists.map((list, index) => (
            <OrderedList
              className={space.mt7}
              key={index}
              start={index === 0 ? 1 : middle + 1}
            >
              {list?.map(({ heading, description }) => (
                <OrderedListItem key={heading} variant="primary">
                  <Text block variant="caption">
                    {heading}
                  </Text>
                  <Text block variant="description">
                    {description}
                  </Text>
                </OrderedListItem>
              ))}
            </OrderedList>
          ))}
        </div>
      )}
    </article>
  );
};
