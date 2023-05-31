import type { PropItem, PropsDoc } from '@microsoft/arbutus.prop-docs-cli';
import { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';
import type { FC } from 'react';
import * as React from 'react';

import { TableRows } from './partials/table-rows';
import type { PropTableProps } from './prop-table.types';

const filterPropsDoc = (props: PropsDoc['props']) => {
  const required: PropItem[] = [];
  const deprecated: PropItem[] = [];
  const optional: PropItem[] = [];

  Object.values(props).forEach((prop) => {
    if (prop.description?.includes('@deprecated')) {
      deprecated.push(prop);
    } else if (prop.required) {
      required.push(prop);
    } else {
      optional.push(prop);
    }
  });

  return {
    required,
    deprecated,
    optional,
  };
};

export const PropTable: FC<PropTableProps> = ({ className, propsDoc, caption }) => {
  if (!propsDoc) {
    return null;
  }

  const { required, deprecated, optional } = filterPropsDoc(propsDoc.props);

  return (
    <TableList className={className} caption={caption}>
      <thead>
        <TableRow>
          <TableCell isHeader scope="col">
            Name
          </TableCell>
          <TableCell isHeader scope="col">
            Type
          </TableCell>
          <TableCell isHeader scope="col">
            Description
          </TableCell>
          <TableCell isHeader scope="col">
            Default
          </TableCell>
        </TableRow>
      </thead>
      <tbody>
        <TableRows propsDocItems={required} isRequired isDeprecated={false} />
        <TableRows propsDocItems={optional} isRequired={false} isDeprecated={false} />
        <TableRows propsDocItems={deprecated} isRequired={false} isDeprecated />
      </tbody>
    </TableList>
  );
};
