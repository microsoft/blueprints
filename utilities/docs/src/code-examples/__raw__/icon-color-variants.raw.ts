export default `import { makeStyles } from '@griffel/react';
import { Icon, colorClasses } from '@microsoft/arbutus.icon';
import * as React from 'react';
import { Text } from '@microsoft/arbutus.text';
import { TableList, TableRow, TableCell } from '@microsoft/arbutus.table-list';

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
        <TableRow>
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
`;
