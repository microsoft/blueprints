'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [353],
  {
    './components/table-list/__dev__/table-list.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Alternating: () => Alternating,
          Borderless: () => Borderless,
          CustomColumnSizing: () => CustomColumnSizing,
          Headless: () => Headless,
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => table_list_stories,
        });
      var text_text = __webpack_require__('./components/text/lib/text/text.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        dist_module = __webpack_require__(
          './node_modules/@react-hook/resize-observer/dist/module/index.js',
        );
      const TableListContext = (0, react.createContext)({ variant: 'default' }),
        TableListProvider = TableListContext.Provider,
        useTableListContext = () => (0, react.useContext)(TableListContext);
      var tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js');
      const useTableListStyles = (0, makeStyles_esm.Z)({
        root: {
          borderSpacing: 0,
          width: '100%',
          display: 'block',
          '& > tbody, & > thead': { display: 'block', width: '100%' },
          '& > thead > tr': {
            borderBottomStyle: 'solid',
            borderBottomWidth: tokens.T.strokeWidthThin,
            borderBottomColor: tokens.T.colorNeutralStroke1,
          },
        },
        collapsed: {
          '& > thead': {
            borderBottomStyle: 'none',
            borderBottomWidth: 0,
            borderLeftStyle: 'none',
            borderLeftWidth: 0,
            borderRightStyle: 'none',
            borderRightWidth: 0,
            borderTopStyle: 'none',
            borderTopWidth: 0,
            clip: 'rect(0 0 0 0)',
            height: '1px',
            marginBottom: '-1px',
            marginLeft: '-1px',
            marginRight: '-1px',
            marginTop: '-1px',
            overflowX: 'hidden',
            overflowY: 'hidden',
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            position: 'absolute',
            width: '1px',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
          },
        },
        boundary: {
          ...index_esm.q5.borderColor(tokens.T.colorNeutralStroke1),
          ...index_esm.q5.borderWidth(tokens.T.strokeWidthThin),
          ...index_esm.q5.borderStyle('solid'),
          ...index_esm.q5.borderRadius(tokens.T.borderRadiusXLarge),
        },
        caption: {
          width: '100%',
          textAlign: 'left',
          '&:last-of-type': { marginBottom: tokens.T.spacingHorizontalL },
        },
      });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const TableList = ({
        className,
        variant = 'default',
        children,
        description,
        caption,
        columnSizing,
        ...rest
      }) => {
        const classes = useTableListStyles(),
          labelById = (0, react.useId)(),
          describedById = (0, react.useId)(),
          tableRef = (0, react.useRef)(null),
          size = (function useSize(target) {
            const [size, setSize] = (0, react.useState)();
            return (
              (0, react.useLayoutEffect)(() => {
                setSize(target?.current?.getBoundingClientRect());
              }, [target]),
              (0, dist_module.Z)(target, (entry) => setSize(entry.contentRect)),
              size
            );
          })(tableRef),
          isCollapsed = (size?.width ?? 0) < 640;
        let headerItems = [];
        if (
          react.Children.toArray(children).some(
            (child) => !!react.isValidElement(child) && 'thead' === child.type,
          )
        ) {
          const header = react.Children.toArray(children).find((child) => {
            if (react.isValidElement(child)) return 'thead' === child.type;
          });
          if (header && react.isValidElement(header)) {
            const row = react.Children.toArray(header.props.children)[0];
            if (row && react.isValidElement(row)) {
              headerItems = react.Children.toArray(row.props.children).map((cell) => {
                if (react.isValidElement(cell)) return cell.props.children;
              });
            }
          }
        }
        return (0, jsx_runtime.jsxs)(TableListProvider, {
          value: { variant, columnSizing, headerItems, isCollapsed },
          children: [
            caption &&
              (0, jsx_runtime.jsx)(text_text.x, {
                block: !0,
                variant: 'headline',
                id: labelById,
                className: classes.caption,
                children: caption,
              }),
            description &&
              (0, jsx_runtime.jsx)(text_text.x, {
                block: !0,
                variant: 'description',
                id: describedById,
                className: classes.caption,
                children: description,
              }),
            (0, jsx_runtime.jsx)('table', {
              className: (0, mergeClasses_esm.z)(
                classes.root,
                'default' === variant && classes.boundary,
                isCollapsed && classes.collapsed,
                className,
              ),
              ref: tableRef,
              ...(caption ? { 'aria-labelledby': labelById } : {}),
              ...(description ? { 'aria-describedby': describedById } : {}),
              ...rest,
              children,
            }),
          ],
        });
      };
      TableList.displayName = 'TableList';
      try {
        (TableList.displayName = 'TableList'),
          (TableList.__docgenInfo = {
            description: '',
            displayName: 'TableList',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              variant: {
                defaultValue: { value: 'default' },
                description: 'Table style variants.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"default"' },
                    { value: '"alternating"' },
                    { value: '"borderless"' },
                  ],
                },
              },
              caption: {
                defaultValue: null,
                description: 'Table title (accessible caption).',
                name: 'caption',
                required: !1,
                type: { name: 'string' },
              },
              description: {
                defaultValue: null,
                description: 'Accessible description for the table.',
                name: 'description',
                required: !1,
                type: { name: 'string' },
              },
              columnSizing: {
                defaultValue: null,
                description:
                  "Table column widths or weights. See [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)\nspecification.\n@example [1, 1, 2, 1]\n@example ['230px', auto, auto, auto]",
                name: 'columnSizing',
                required: !1,
                type: { name: '(string | number)[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/table-list/src/table-list/table-list.tsx#TableList'
            ] = {
              docgenInfo: TableList.__docgenInfo,
              name: 'TableList',
              path: 'components/table-list/src/table-list/table-list.tsx#TableList',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const injectIndex = ({ children }) =>
          react.Children.map(children, (child, i) =>
            (0, react.isValidElement)(child)
              ? (0, react.cloneElement)(child, { __index: i })
              : child,
          ),
        useTableRowStyles = (0, makeStyles_esm.Z)({
          root: { display: 'grid' },
          alternating: {
            '&:nth-child(even)': {
              backgroundColor: tokens.T.colorNeutralBackground3,
              ...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium),
            },
          },
          default: {
            '&:not(:last-child)': {
              borderBottomStyle: 'solid',
              borderBottomWidth: tokens.T.strokeWidthThin,
              borderBottomColor: tokens.T.colorNeutralStroke1,
            },
          },
          collapsed: {
            paddingTop: tokens.T.spacingVerticalXL,
            paddingBottom: tokens.T.spacingVerticalXL,
          },
        }),
        TableRow = ({ className, children }) => {
          const { variant, columnSizing } = useTableListContext(),
            isDefault = 'default' === variant,
            isAlternating = 'alternating' === variant,
            numberOfColumns = react.Children.count(children),
            { isCollapsed } = useTableListContext(),
            classes = useTableRowStyles(),
            customColumnSizingStyles = ((
              columnSizing,
              isCollapsed = !1,
              numberOfColumns = 1,
            ) => {
              switch (!0) {
                case isCollapsed:
                  return { gridTemplateColumns: '1fr' };
                case Array.isArray(columnSizing):
                  return {
                    gridTemplateColumns: columnSizing
                      ?.map((weight) =>
                        'number' == typeof weight ? `${weight}fr` : weight,
                      )
                      .join(' '),
                  };
                default:
                  return { gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` };
              }
            })(columnSizing, isCollapsed, numberOfColumns);
          return (0, jsx_runtime.jsx)('tr', {
            style: customColumnSizingStyles,
            className: (0, mergeClasses_esm.z)(
              classes.root,
              isCollapsed && classes.collapsed,
              isAlternating && classes.alternating,
              isDefault && classes.default,
              className,
            ),
            children: injectIndex({ children }),
          });
        };
      TableRow.displayName = 'TableRow';
      try {
        (TableRow.displayName = 'TableRow'),
          (TableRow.__docgenInfo = {
            description: '',
            displayName: 'TableRow',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/table-list/src/table-row/table-row.tsx#TableRow'
            ] = {
              docgenInfo: TableRow.__docgenInfo,
              name: 'TableRow',
              path: 'components/table-list/src/table-row/table-row.tsx#TableRow',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const useTableCellStyles = (0, makeStyles_esm.Z)({
          root: { display: 'block' },
          largePadding: { ...index_esm.q5.padding(tokens.T.spacingVerticalXL) },
          smallPadding: {
            paddingLeft: tokens.T.spacingHorizontalXL,
            paddingRight: tokens.T.spacingHorizontalXL,
            paddingTop: tokens.T.spacingVerticalM,
            paddingBottom: tokens.T.spacingVerticalM,
          },
          collapsedWithHeader: {
            display: 'grid',
            gridTemplateColumns: '100px auto',
            gridGap: tokens.T.spacingHorizontalM,
          },
        }),
        TableCell = ({ className, isHeader, children, __index = 0, ...props }) => {
          const Root = isHeader ? 'th' : 'td',
            classes = useTableCellStyles(),
            { headerItems, isCollapsed } = useTableListContext(),
            header = headerItems?.[__index] ?? null,
            hasHeader = Boolean(header);
          return isCollapsed && hasHeader
            ? (0, jsx_runtime.jsxs)(Root, {
                className: (0, mergeClasses_esm.z)(
                  classes.root,
                  classes.smallPadding,
                  hasHeader && classes.collapsedWithHeader,
                  className,
                ),
                ...props,
                children: [
                  (0, jsx_runtime.jsx)('span', { 'aria-hidden': !0, children: header }),
                  (0, jsx_runtime.jsx)('span', { children }),
                ],
              })
            : (0, jsx_runtime.jsx)(Root, {
                className: (0, mergeClasses_esm.z)(
                  classes.root,
                  isCollapsed ? classes.smallPadding : classes.largePadding,
                  className,
                ),
                ...props,
                children,
              });
        };
      TableCell.displayName = 'TableCell';
      try {
        (TableCell.displayName = 'TableCell'),
          (TableCell.__docgenInfo = {
            description: '',
            displayName: 'TableCell',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              isHeader: {
                defaultValue: null,
                description: 'Sets the cell to be a header cell (`<th>`).',
                name: 'isHeader',
                required: !1,
                type: { name: 'boolean' },
              },
              __index: {
                defaultValue: { value: '0' },
                description: '@private [INTERNAL] DO NOT USE.',
                name: '__index',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/table-list/src/table-cell/table-cell.tsx#TableCell'
            ] = {
              docgenInfo: TableCell.__docgenInfo,
              name: 'TableCell',
              path: 'components/table-list/src/table-cell/table-cell.tsx#TableCell',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const table_list_stories = {
          title: 'Lists/TableList',
          component: TableList,
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { maxWidth: '980px', padding: '24px', margin: '0 auto' },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        Template = (args) =>
          (0, jsx_runtime.jsxs)(TableList, {
            ...args,
            children: [
              (0, jsx_runtime.jsx)('thead', {
                children: (0, jsx_runtime.jsxs)(TableRow, {
                  children: [
                    (0, jsx_runtime.jsx)(TableCell, {
                      isHeader: !0,
                      scope: 'col',
                      children: 'Component',
                    }),
                    (0, jsx_runtime.jsx)(TableCell, {
                      isHeader: !0,
                      scope: 'col',
                      children: 'Domain',
                    }),
                    (0, jsx_runtime.jsx)(TableCell, {
                      isHeader: !0,
                      scope: 'col',
                      children: 'Example',
                    }),
                    (0, jsx_runtime.jsx)(TableCell, {
                      isHeader: !0,
                      scope: 'col',
                      children: 'Notes',
                    }),
                  ],
                }),
              }),
              (0, jsx_runtime.jsxs)('tbody', {
                children: [
                  (0, jsx_runtime.jsxs)(TableRow, {
                    children: [
                      (0, jsx_runtime.jsx)(TableCell, {
                        isHeader: !0,
                        scope: 'row',
                        children: 'Table',
                      }),
                      (0, jsx_runtime.jsx)(TableCell, { children: 'Lists' }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        children: (0, jsx_runtime.jsx)(text_text.x, {
                          variant: 'code',
                          children: '<TableList>{children}</TableList>',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        children: 'No additional info.',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)(TableRow, {
                    children: [
                      (0, jsx_runtime.jsx)(TableCell, {
                        isHeader: !0,
                        scope: 'row',
                        children: 'Button',
                      }),
                      (0, jsx_runtime.jsx)(TableCell, { children: 'Actions' }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        children: (0, jsx_runtime.jsx)(text_text.x, {
                          variant: 'code',
                          children: '<Button onClick={() => {}}>Click me!</Button>',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        children: 'No additional info.',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)(TableRow, {
                    children: [
                      (0, jsx_runtime.jsx)(TableCell, {
                        isHeader: !0,
                        scope: 'row',
                        children: 'Text',
                      }),
                      (0, jsx_runtime.jsx)(TableCell, { children: 'Typography' }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        children: (0, jsx_runtime.jsx)(text_text.x, {
                          variant: 'code',
                          children: '<Link href="#">Click me!</Link>',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        children: 'No additional info.',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)(TableRow, {
                    children: [
                      (0, jsx_runtime.jsx)(TableCell, {
                        isHeader: !0,
                        scope: 'row',
                        children: 'Link',
                      }),
                      (0, jsx_runtime.jsx)(TableCell, { children: 'Navigation' }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        children: (0, jsx_runtime.jsx)(text_text.x, {
                          variant: 'code',
                          children: '<Link onClick={() => {}}>Click me!</Link>',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(TableCell, { children: 'Deprecated' }),
                    ],
                  }),
                ],
              }),
            ],
          });
      Template.displayName = 'Template';
      const HeadlessTemplate = (args) =>
        (0, jsx_runtime.jsxs)(TableList, {
          ...args,
          children: [
            (0, jsx_runtime.jsxs)(TableRow, {
              children: [
                (0, jsx_runtime.jsx)(TableCell, { isHeader: !0, children: 'Table' }),
                (0, jsx_runtime.jsx)(TableCell, { children: 'Lists' }),
                (0, jsx_runtime.jsx)(TableCell, {
                  children: (0, jsx_runtime.jsx)(text_text.x, {
                    variant: 'code',
                    children: '<TableList>{children}</TableList>',
                  }),
                }),
                (0, jsx_runtime.jsx)(TableCell, { children: 'No additional info.' }),
              ],
            }),
            (0, jsx_runtime.jsxs)(TableRow, {
              children: [
                (0, jsx_runtime.jsx)(TableCell, { isHeader: !0, children: 'Button' }),
                (0, jsx_runtime.jsx)(TableCell, { children: 'Actions' }),
                (0, jsx_runtime.jsx)(TableCell, {
                  children: (0, jsx_runtime.jsx)(text_text.x, {
                    variant: 'code',
                    children: '<Button onClick={() => {}}>Click me!</Button>',
                  }),
                }),
                (0, jsx_runtime.jsx)(TableCell, { children: 'No additional info.' }),
              ],
            }),
            (0, jsx_runtime.jsxs)(TableRow, {
              children: [
                (0, jsx_runtime.jsx)(TableCell, { isHeader: !0, children: 'Text' }),
                (0, jsx_runtime.jsx)(TableCell, { children: 'Typography' }),
                (0, jsx_runtime.jsx)(TableCell, {
                  children: (0, jsx_runtime.jsx)(text_text.x, {
                    variant: 'code',
                    children: '<Link href="#">Click me!</Link>',
                  }),
                }),
                (0, jsx_runtime.jsx)(TableCell, { children: 'No additional info.' }),
              ],
            }),
            (0, jsx_runtime.jsxs)(TableRow, {
              children: [
                (0, jsx_runtime.jsx)(TableCell, { isHeader: !0, children: 'Link' }),
                (0, jsx_runtime.jsx)(TableCell, { children: 'Navigation' }),
                (0, jsx_runtime.jsx)(TableCell, {
                  children: (0, jsx_runtime.jsx)(text_text.x, {
                    variant: 'code',
                    children: '<Link onClick={() => {}}>Click me!</Link>',
                  }),
                }),
                (0, jsx_runtime.jsx)(TableCell, { children: 'Deprecated' }),
              ],
            }),
          ],
        });
      HeadlessTemplate.displayName = 'HeadlessTemplate';
      const Simple = Template.bind({});
      Simple.args = {
        variant: 'default',
        caption: 'TableList Example',
        description:
          'This is an example of a TableList description. This helps users understand the context of the data.',
      };
      const Alternating = Template.bind({});
      Alternating.args = { variant: 'alternating' };
      const Borderless = Template.bind({});
      Borderless.args = { variant: 'borderless' };
      const CustomColumnSizing = Template.bind({});
      CustomColumnSizing.args = { columnSizing: [1, 1, 2, 1] };
      const Headless = HeadlessTemplate.bind({}),
        __namedExportsOrder = [
          'Simple',
          'Alternating',
          'Borderless',
          'CustomColumnSizing',
          'Headless',
        ];
    },
    './components/text/lib/text/text.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { x: () => Text });
      var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/@fluentui/react-text/lib/components/Text/Text.js',
        ),
        _griffel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _text_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/text/lib/text/text.styles.js',
        );
      const Text = ({
        children,
        color = 'primary',
        variant,
        className,
        weight,
        size,
        font,
        ...props
      }) => {
        const classes = (0, _text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();
        let variantClass = '';
        (weight && size && font) ||
          (variantClass = variant ? classes[variant] : classes.paragraph);
        const rootClasses = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(
          classes.root,
          classes[color],
          variantClass,
          className,
        );
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,
          { weight, size, font, className: rootClasses, ...props },
          children,
        );
      };
      Text.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Text',
        props: {
          color: { defaultValue: { value: "'primary'", computed: !1 }, required: !1 },
        },
      };
    },
    './components/text/lib/text/text.styles.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        AD: () => variantClasses,
        Ke: () => useTextStyles,
        bG: () => colorClasses,
      });
      var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@fluentui/tokens/lib/tokens.js',
        ),
        _griffel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        _griffel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/@griffel/core/index.esm.js',
        ),
        _microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./styles/utilities/lib/map-to-styles.js');
      const colorMap = {
          accent:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,
          action:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,
          primary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,
          secondary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,
          tertiary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,
          quaternary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,
          negative:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteDarkOrangeForeground1,
          positive:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteGreenForeground1,
          warning:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteMarigoldForeground1,
          danger:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteDarkOrangeForeground1,
          info: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
            .colorBrandForeground2,
          background:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1,
        },
        colorClasses = (0,
        _microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(
          colorMap,
          (color) => ({ color }),
        ),
        variantClasses = {
          jumbo: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold,
          },
          title: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold,
          },
          subtitle: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold,
          },
          headline: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold,
          },
          leading: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular,
          },
          paragraph: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular,
          },
          caption: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold,
          },
          description: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular,
          },
        },
        useTextStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({
          ...colorClasses,
          ...variantClasses,
          root: {
            ..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),
            ..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0),
          },
          code: {
            display: 'inline-block',
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,
            backgroundColor:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
                .colorNeutralBackground3,
            ..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall,
            ),
            paddingLeft:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,
            paddingRight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,
          },
        });
    },
    './styles/utilities/lib/map-to-styles.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function mapToStyles(map, styleFunction) {
        return Object.entries(map).reduce(
          (acc, [key, value]) => ((acc[key] = styleFunction(value)), acc),
          {},
        );
      }
      __webpack_require__.d(__webpack_exports__, { f: () => mapToStyles });
    },
  },
]);
