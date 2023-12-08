import { PropTable } from '@microsoft/arbutus.prop-table';
import * as React from 'react';

import propDocs from '../../../__prop-docs__';
import type { PropTableComponentData } from '../component-renderer.types';

type PropTableComponentProps = PropTableComponentData;

export const PropTableComponent: React.FC<PropTableComponentProps> = ({
  componentName,
  componentPropType,
}) => {
  const propsDoc = propDocs[componentName];

  if (!propsDoc) {
    return null;
  }

  return <PropTable propsDoc={propsDoc} caption={componentPropType} />;
};
