import { makeStyles } from '@griffel/react';
import { colorClasses, Icon } from '@microsoft/arbutus.icon';
import { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';
import { Text } from '@microsoft/arbutus.text';
import * as React from 'react';

type Color = keyof typeof colorClasses;

const useTableListStyles = makeStyles({
  root: {
    minWidth: '642px',
  },
});

const ExampleComponent = () => {
  const classes = useTableListStyles();

  return (
    <TableList className={classes.root} columnSizing={['40px', 'auto']}>
      {Object.keys(colorClasses).map((color) => (
        <TableRow key={color}>
          <TableCell>
            {/** Icon 👇 */}
            <Icon iconName="moon" color={color as Color} />
            {/** Icon 👆 */}
          </TableCell>
          <TableCell>
            <Text variant="caption">{color}</Text>
          </TableCell>
        </TableRow>
      ))}
    </TableList>
  );
};

export default ExampleComponent;
