export default `import { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';
import { Text } from '@microsoft/arbutus.text';
import * as React from 'react';

const ExampleComponent = () => {
  return (
    <TableList variant="alternating">
      <thead>
        <TableRow>
          <TableCell isHeader scope="col">
            Component
          </TableCell>
          <TableCell isHeader scope="col">
            Domain
          </TableCell>
          <TableCell isHeader scope="col">
            Example
          </TableCell>
          <TableCell isHeader scope="col">
            Notes
          </TableCell>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell isHeader scope="row">
            Table
          </TableCell>
          <TableCell>Lists</TableCell>
          <TableCell>
            <Text variant="code">{\`<TableList>{children}</TableList>\`}</Text>
          </TableCell>
          <TableCell>No additional info.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader scope="row">
            Button
          </TableCell>
          <TableCell>Actions</TableCell>
          <TableCell>
            <Text variant="code">{\`<Button onClick={() => {}}>Click me!</Button>\`}</Text>
          </TableCell>
          <TableCell>No additional info.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader scope="row">
            Text
          </TableCell>
          <TableCell>Typography</TableCell>
          <TableCell>
            <Text variant="code">{\`<Link href="#">Click me!</Link>\`}</Text>
          </TableCell>
          <TableCell>No additional info.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader scope="row">
            Link
          </TableCell>
          <TableCell>Navigation</TableCell>
          <TableCell>
            <Text variant="code">{\`<Link onClick={() => {}}>Click me!</Link>\`}</Text>
          </TableCell>
          <TableCell>Deprecated</TableCell>
        </TableRow>
      </tbody>
    </TableList>
  );
};

export default ExampleComponent;
`;
