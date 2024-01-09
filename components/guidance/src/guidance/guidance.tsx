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

/**
 * @todo [Extract useSize into its own package #103](https://github.com/microsoft/arbutus/issues/103)
 * */
type Size = { width: number; height: number };

function useSize<T extends HTMLElement>(
  target: MutableRefObject<T | null>,
): Size | undefined {
  const [size, setSize] = useState<Size>();

  useLayoutEffect(() => {
    setSize(target?.current?.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));

  return size;
}

export const Guidance: FC<GuidanceProps> = ({
  className,
  description,
  fileTitle,
  heading,
  imageAs: Image = 'img',
  imageProps = {},
  legendListItems,
  logoLabel,
  logoName,
  openButtonLabel,
  url,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const size = useSize<HTMLDivElement>(ref);
  const width = size?.width ?? 726;
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

  const isFile = Boolean(fileTitle && url);

  return (
    <article className={className} ref={ref}>
      {isFile ? (
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
      ) : (
        <Image
          {...imageProps}
          className={mergeClasses(classes.image, classes.imageStandalone)}
        />
      )}
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
              {list?.map(({ heading, description }, index) => (
                <OrderedListItem key={`${heading ?? ''}--${index}`} variant="primary">
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
