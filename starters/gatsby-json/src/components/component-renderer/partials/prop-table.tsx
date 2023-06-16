import * as React from 'react';
import { PropTable } from '@microsoft/arbutus.prop-table';

import { PropTableComponentData } from '../component-renderer.types';
import propDocs from '../../../__prop-docs__';

type PropTableComponentProps = PropTableComponentData;

export const PropTableComponent: React.FC<PropTableComponentProps> = ({
  componentName,
  componentPropType,
}) => {
  const propsDoc = propDocs[componentName];

  console.log('propDocs', propsDoc);

  if (!propsDoc) {
    return null;
  }

  return (
    <PropTable propsDoc={propsDoc} caption={`${componentName}: ${componentPropType}`} />
  );
};
