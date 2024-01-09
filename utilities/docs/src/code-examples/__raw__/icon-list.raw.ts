export default `import { makeStyles } from '@griffel/react';
import { Icon, paths as icons } from '@microsoft/arbutus.icon';
import { Text } from '@microsoft/arbutus.text';
import { TableList, TableRow, TableCell } from '@microsoft/arbutus.table-list';
import * as React from 'react';

const useTableListStyles = makeStyles({
  root: {
    minWidth: '642px',
  },
});

type Key = keyof typeof icons;

const ExampleComponent = () => {
  const classes = useTableListStyles();

  return (
    <TableList className={classes.root} columnSizing={['40px', 'auto']}>
      {Object.keys(icons).map((key) => (
        <TableRow>
          <TableCell>
            {/** Icon 👇 */}
            <Icon iconName={key as Key} />
            {/** Icon 👆 */}
          </TableCell>
          <TableCell>
            <Text variant="caption">{key}</Text>
          </TableCell>
        </TableRow>
      ))}
    </TableList>
  );
};

export default ExampleComponent;
`;
