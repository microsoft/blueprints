import { Badge } from '@microsoft/arbutus.badge';
import type { FC } from 'react';
import * as React from 'react';

import type { CalloutBadgeProps } from './callout-badge.types';

export const CalloutBadge: FC<CalloutBadgeProps> = ({ status, className }) => {
  switch (status) {
    case 'success':
      return <Badge color="positive" iconName="check" className={className} />;
    case 'error':
      return <Badge color="negative" iconName="x" className={className} />;
    case 'warning':
      return <Badge color="warning" iconName="exclamation" className={className} />;
    case 'accent':
      return <Badge color="accent" iconName="exclamation" className={className} />;
    case 'info':
    default:
      return <Badge color="secondary" iconName="exclamation" className={className} />;
  }
};
