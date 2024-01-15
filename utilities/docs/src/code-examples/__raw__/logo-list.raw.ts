export default `import { makeStyles } from '@griffel/react';
import { Logo, logos } from '@microsoft/arbutus.logo';
import { Text } from '@microsoft/arbutus.text';
import { TableList, TableRow, TableCell } from '@microsoft/arbutus.table-list';
import * as React from 'react';

const useTableListStyles = makeStyles({
  root: {
    minWidth: '642px',
  },
});

type Key = keyof typeof logos;

const ExampleComponent = () => {
  const classes = useTableListStyles();

  return (
    <TableList className={classes.root} columnSizing={['40px', 'auto']}>
      {Object.keys(logos).map((key) => (
        <TableRow>
          <TableCell>
            {/** Logo 👇 */}
            <Logo logoName={key as Key} />
            {/** Logo 👆 */}
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
