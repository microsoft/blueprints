import { Divider } from '@microsoft/arbutus.divider';
import type { HeadingProps } from '@microsoft/arbutus.heading';
import { Heading } from '@microsoft/arbutus.heading';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { useLocation } from '@reach/router';
import type { FC } from 'react';
import * as React from 'react';
import { useMemo } from 'react';

import { textToUrlString } from '../../../utilities';
import type { HeadingComponentData } from '../component-renderer.types';

type HeadingComponentProps = HeadingComponentData;

export const HeadingComponent: FC<HeadingComponentProps> = ({
  title,
  leading,
  withCopyLink,
  size = 'headline',
  as = 'h2',
  withDivider,
}) => {
  const space = useSpaceStyles();
  const { href } = useLocation();
  const headingId = useMemo(() => textToUrlString(title), [title]);
  const headingUrl = useMemo(() => `${href}#${headingId}`, [href, headingId]);

  const copyProps: Pick<HeadingProps, 'headingUrl' | 'copyLabel'> = {};

  if (withCopyLink) {
    copyProps.headingUrl = headingUrl;
    copyProps.copyLabel = 'Copy link to this section';
  }

  return (
    <div>
      {withDivider && <Divider className={space.my7} />}
      {/* @ts-ignore TS incorrectly assumes that headingUrl cannot receive undefined, when in fact it is necessary for the component to render the correct variant. */}
      <Heading variant={size} as={as} id={headingId} {...copyProps}>
        {title}
      </Heading>
      {leading && (
        <Text block variant="leading" color="secondary" className={space.mt7}>
          {leading}
        </Text>
      )}
    </div>
  );
};
