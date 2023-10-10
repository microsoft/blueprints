'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [9605],
  {
    './components/data-table/__dev__/data-table.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => data_table_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js');
      const useDataTableStyles = (0,
      __webpack_require__('./node_modules/@griffel/react/makeStyles.esm.js').Z)({
        root: {
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: tokens.T.colorNeutralStroke1,
          paddingTop: '0',
          paddingRight: '0',
          paddingBottom: '0',
          paddingLeft: '0',
          marginTop: '0',
          marginRight: '0',
          marginBottom: '0',
          marginLeft: '0',
          width: '100%',
          borderCollapse: 'collapse',
          tableLayout: 'fixed',
        },
        row: { width: '100%' },
        cell: {
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: tokens.T.colorNeutralStroke1,
          paddingTop: '0.6rem',
          paddingRight: '1.2rem',
          paddingBottom: '0.6rem',
          paddingLeft: '1.2rem',
          fontSize: tokens.T.fontSizeBase200,
          color: tokens.T.colorNeutralForeground1,
          '& p': {
            fontSize: tokens.T.fontSizeBase200,
            marginTop: '0',
            marginRight: '0',
            marginBottom: '1.2rem',
            marginLeft: '0',
            '&:last-child': {
              marginTop: '0',
              marginRight: '0',
              marginBottom: '0',
              marginLeft: '0',
            },
          },
          '& ul, & ol': {
            width: '100%',
            marginTop: '0',
            marginRight: '0',
            marginBottom: '1.2rem',
            marginLeft: '0',
            paddingTop: '0',
            paddingRight: '0',
            paddingBottom: '0',
            paddingLeft: '0.875rem',
            '& li': {
              width: '100%',
              fontSize: tokens.T.fontSizeBase200,
              marginTop: '0',
              marginRight: '0',
              marginBottom: '1rem',
              marginLeft: '0',
              '&:last-child': {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0',
              },
            },
            '&:last-child': {
              marginTop: '0',
              marginRight: '0',
              marginBottom: '0',
              marginLeft: '0',
            },
          },
          '& a': {
            color: tokens.T.colorNeutralForeground1,
            textDecorationLine: 'underline',
            '&:hover': { color: tokens.T.colorNeutralForeground2 },
          },
          '& pre, & code': {
            backgroundColor: tokens.T.colorNeutralBackground6,
            paddingTop: '0',
            paddingRight: tokens.T.spacingHorizontalSNudge,
            paddingBottom: '0',
            paddingLeft: tokens.T.spacingHorizontalSNudge,
            borderTopLeftRadius: tokens.T.borderRadiusSmall,
            borderTopRightRadius: tokens.T.borderRadiusSmall,
            borderBottomRightRadius: tokens.T.borderRadiusSmall,
            borderBottomLeftRadius: tokens.T.borderRadiusSmall,
            fontSize: tokens.T.fontSizeBase200,
            '& span, & li, & p': { fontSize: tokens.T.fontSizeBase200 },
            '& code': {
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',
              borderBottomRightRadius: '0',
              borderBottomLeftRadius: '0',
              paddingTop: '0',
              paddingRight: '0',
              paddingBottom: '0',
              paddingLeft: '0',
              fontSize: tokens.T.fontSizeBase200,
            },
          },
        },
        content: { width: '100%' },
      });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const DataCell = ({ cell, rowIndex, cellIndex }) => {
        const classes = useDataTableStyles();
        return (0, jsx_runtime.jsxs)(
          'td',
          {
            className: classes.cell,
            children: [
              cell?.content &&
                (0, jsx_runtime.jsx)('div', {
                  className: classes.content,
                  children: cell.content,
                }),
              cell?.imageSrc &&
                (0, jsx_runtime.jsx)('img', { src: cell.imageSrc, alt: cell.imageAlt }),
            ],
          },
          `dataTableRow-${rowIndex}-Cell-${cellIndex}`,
        );
      };
      DataCell.displayName = 'DataCell';
      const DataRow = ({ row, rowIndex }) => {
        const classes = useDataTableStyles();
        return (0, jsx_runtime.jsx)(
          'tr',
          {
            className: classes.row,
            children: row?.map((cell, cellIndex) =>
              (0, jsx_runtime.jsx)(DataCell, { cell, cellIndex, rowIndex }, cellIndex),
            ),
          },
          `dataTableRow-${rowIndex}`,
        );
      };
      DataRow.displayName = 'DataRow';
      const DataTable = ({ rows }) => {
        const classes = useDataTableStyles();
        return (0, jsx_runtime.jsx)('table', {
          className: classes.root,
          children: (0, jsx_runtime.jsx)('tbody', {
            children: rows?.map((row, rowIndex) =>
              (0, jsx_runtime.jsx)(DataRow, { row, rowIndex }, rowIndex),
            ),
          }),
        });
      };
      DataTable.displayName = 'DataTable';
      try {
        (DataCell.displayName = 'DataCell'),
          (DataCell.__docgenInfo = {
            description: '',
            displayName: 'DataCell',
            props: {
              cell: {
                defaultValue: null,
                description: '',
                name: 'cell',
                required: !1,
                type: { name: 'DataTableCell' },
              },
              cellIndex: {
                defaultValue: null,
                description: '',
                name: 'cellIndex',
                required: !0,
                type: { name: 'number' },
              },
              rowIndex: {
                defaultValue: null,
                description: '',
                name: 'rowIndex',
                required: !0,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/data-table/src/data-table/data-table.tsx#DataCell'
            ] = {
              docgenInfo: DataCell.__docgenInfo,
              name: 'DataCell',
              path: 'components/data-table/src/data-table/data-table.tsx#DataCell',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (DataRow.displayName = 'DataRow'),
          (DataRow.__docgenInfo = {
            description: '',
            displayName: 'DataRow',
            props: {
              row: {
                defaultValue: null,
                description: '',
                name: 'row',
                required: !1,
                type: { name: 'DataTableRow' },
              },
              rowIndex: {
                defaultValue: null,
                description: '',
                name: 'rowIndex',
                required: !0,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/data-table/src/data-table/data-table.tsx#DataRow'
            ] = {
              docgenInfo: DataRow.__docgenInfo,
              name: 'DataRow',
              path: 'components/data-table/src/data-table/data-table.tsx#DataRow',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (DataTable.displayName = 'DataTable'),
          (DataTable.__docgenInfo = {
            description: '',
            displayName: 'DataTable',
            props: {
              rows: {
                defaultValue: null,
                description: '',
                name: 'rows',
                required: !1,
                type: { name: 'DataTableRow[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/data-table/src/data-table/data-table.tsx#DataTable'
            ] = {
              docgenInfo: DataTable.__docgenInfo,
              name: 'DataTable',
              path: 'components/data-table/src/data-table/data-table.tsx#DataTable',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const data_table_stories_image = ({ text }) => ({
          imageSrc: 'https://via.placeholder.com/200x150.png/f0f0f0',
          imageAlt: `Placeholder ${text}`,
        }),
        Content = ({ text }) =>
          (0, jsx_runtime.jsxs)('section', {
            children: [
              (0, jsx_runtime.jsxs)('p', { children: ['Content ', text, '.'] }),
              (0, jsx_runtime.jsxs)('ul', {
                children: [
                  (0, jsx_runtime.jsx)('li', { children: 'Item One' }),
                  (0, jsx_runtime.jsx)('li', { children: 'Item Two' }),
                  (0, jsx_runtime.jsx)('li', { children: 'Item Three' }),
                ],
              }),
              (0, jsx_runtime.jsx)('code', { children: 'npm i black-hole' }),
            ],
          });
      Content.displayName = 'Content';
      const data = ['One', 'Two', 'Three'].map((text) => [
          { content: (0, jsx_runtime.jsx)(Content, { text }) },
          data_table_stories_image({ text }),
        ]),
        data_table_stories = { title: 'Blocks/DataTable', component: DataTable },
        Template = (args) => (0, jsx_runtime.jsx)(DataTable, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = { rows: data };
      const __namedExportsOrder = ['Simple'];
    },
  },
]);
