import { Text } from '@arbutus/component.text';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { CalloutBadge } from '../callout-badge/callout-badge';
import { useCalloutStyles } from './callout.styles';
import type { CalloutProps } from './callout.types';

export const Callout: FC<CalloutProps> = ({ status = 'info', title, children }) => {
  // Styles
  const classes = useCalloutStyles();
  const space = useSpaceStyles();

  return (
    <div className={mergeClasses(classes.root, space.p4, classes[status])}>
      <CalloutBadge status={status} />
      <div>
        <Text as="h3" variant="caption" className={space.mb1}>
          {title}
        </Text>
        <Text as="p" variant="description">
          {children}
        </Text>
      </div>
    </div>
  );
};
