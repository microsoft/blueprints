export default `import { makeStyles } from '@griffel/react';
import { Icon, paths as icons } from '@microsoft/arbutus.icon';
import { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';
import { Text } from '@microsoft/arbutus.text';
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
        <TableRow key={key}>
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
