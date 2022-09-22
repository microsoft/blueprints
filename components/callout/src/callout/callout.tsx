import { mergeClasses } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
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
    <div className={mergeClasses(classes.root, space.p7, classes[status])}>
      <CalloutBadge status={status} />
      <div>
        <Text block as="h3" variant="caption" className={space.mb1}>
          {title}
        </Text>
        <Text block variant="description">
          {children}
        </Text>
      </div>
    </div>
  );
};
