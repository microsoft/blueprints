'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [5063],
  {
    './components/prop-table/__dev__/prop-table.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => prop_table_stories,
        });
      var react = __webpack_require__('./node_modules/react/index.js');
      const demo_component_props = {
        tags: {},
        filePath: '__dev__/demo-component/demo-component.tsx',
        description: '',
        displayName: 'DemoComponent',
        methods: [],
        props: {
          title: {
            defaultValue: null,
            description: 'The title of the DemoComponent.',
            name: 'title',
            declarations: [
              {
                fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
                name: 'TypeLiteral',
              },
            ],
            required: !0,
            type: { name: 'string' },
          },
          description: {
            defaultValue: null,
            description: 'Description of the DemoComponent.',
            name: 'description',
            declarations: [
              {
                fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
                name: 'TypeLiteral',
              },
            ],
            required: !1,
            type: { name: 'string' },
          },
          callToAction: {
            defaultValue: { value: 'Hello 👋' },
            description: 'Call to action text.',
            name: 'callToAction',
            declarations: [
              {
                fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
                name: 'TypeLiteral',
              },
            ],
            required: !1,
            type: { name: 'string' },
          },
          className: {
            defaultValue: null,
            description: 'Custom class name for the component root.',
            name: 'className',
            declarations: [
              {
                fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
                name: 'TypeLiteral',
              },
            ],
            required: !1,
            type: { name: 'string' },
          },
          onClick: {
            defaultValue: null,
            description: 'Click handler.',
            name: 'onClick',
            declarations: [
              {
                fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
                name: 'TypeLiteral',
              },
            ],
            required: !0,
            type: { name: '() => void' },
          },
          text: {
            defaultValue: null,
            description: 'Text to display.\n@deprecated Use `title` instead.',
            name: 'text',
            declarations: [
              {
                fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
                name: 'TypeLiteral',
              },
            ],
            required: !1,
            type: { name: 'string' },
          },
        },
      };
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        text_text = __webpack_require__('./components/text/lib/text/text.js'),
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
        return react.createElement(
          TableListProvider,
          { value: { variant, columnSizing, headerItems, isCollapsed } },
          caption &&
            react.createElement(
              text_text.x,
              {
                block: !0,
                variant: 'headline',
                id: labelById,
                className: classes.caption,
              },
              caption,
            ),
          description &&
            react.createElement(
              text_text.x,
              {
                block: !0,
                variant: 'description',
                id: describedById,
                className: classes.caption,
              },
              description,
            ),
          react.createElement(
            'table',
            {
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
            },
            children,
          ),
        );
      };
      TableList.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableList',
        props: {
          variant: { defaultValue: { value: "'default'", computed: !1 }, required: !1 },
        },
      };
      const useTableRowStyles = (0, makeStyles_esm.Z)({
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
          return react.createElement(
            'tr',
            {
              style: customColumnSizingStyles,
              className: (0, mergeClasses_esm.z)(
                classes.root,
                isCollapsed && classes.collapsed,
                isAlternating && classes.alternating,
                isDefault && classes.default,
                className,
              ),
            },
            (({ children }) =>
              react.Children.map(children, (child, i) =>
                (0, react.isValidElement)(child)
                  ? (0, react.cloneElement)(child, { __index: i })
                  : child,
              ))({ children }),
          );
        };
      TableRow.__docgenInfo = { description: '', methods: [], displayName: 'TableRow' };
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
            ? react.createElement(
                Root,
                {
                  className: (0, mergeClasses_esm.z)(
                    classes.root,
                    classes.smallPadding,
                    hasHeader && classes.collapsedWithHeader,
                    className,
                  ),
                  ...props,
                },
                react.createElement('span', { 'aria-hidden': !0 }, header),
                react.createElement('span', null, children),
              )
            : react.createElement(
                Root,
                {
                  className: (0, mergeClasses_esm.z)(
                    classes.root,
                    isCollapsed ? classes.smallPadding : classes.largePadding,
                    className,
                  ),
                  ...props,
                },
                children,
              );
        };
      TableCell.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableCell',
        props: { __index: { defaultValue: { value: '0', computed: !1 }, required: !1 } },
      };
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const useTableRowsStyles = (0, makeStyles_esm.Z)({
          deprecated: { textDecorationLine: 'line-through' },
        }),
        TableRows = ({ propsDocItems, isRequired, isDeprecated }) => {
          const classes = useTableRowsStyles();
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: propsDocItems.map((prop) =>
              (0, jsx_runtime.jsxs)(
                TableRow,
                {
                  children: [
                    (0, jsx_runtime.jsxs)(TableCell, {
                      isHeader: !0,
                      scope: 'row',
                      children: [
                        (0, jsx_runtime.jsx)(text_text.x, {
                          className: isDeprecated ? classes.deprecated : '',
                          children: prop.name ?? '',
                        }),
                        isRequired
                          ? (0, jsx_runtime.jsx)(text_text.x, {
                              color: 'danger',
                              children: ' *',
                            })
                          : '',
                        isDeprecated
                          ? (0, jsx_runtime.jsx)(text_text.x, {
                              color: 'tertiary',
                              children: ' (deprecated)',
                            })
                          : '',
                      ],
                    }),
                    (0, jsx_runtime.jsx)(TableCell, {
                      children: (0, jsx_runtime.jsx)(text_text.x, {
                        variant: 'code',
                        children: prop.type?.name ?? '',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(TableCell, { children: prop.description ?? '' }),
                    (0, jsx_runtime.jsx)(TableCell, {
                      children: (0, jsx_runtime.jsx)(text_text.x, {
                        variant: 'code',
                        children: prop.defaultValue?.value ?? '',
                      }),
                    }),
                  ],
                },
                prop.name,
              ),
            ),
          });
        };
      try {
        (TableRows.displayName = 'TableRows'),
          (TableRows.__docgenInfo = {
            description: '',
            displayName: 'TableRows',
            props: {
              propsDocItems: {
                defaultValue: null,
                description: '',
                name: 'propsDocItems',
                required: !0,
                type: { name: 'PropItem[]' },
              },
              isRequired: {
                defaultValue: null,
                description: '',
                name: 'isRequired',
                required: !0,
                type: { name: 'boolean' },
              },
              isDeprecated: {
                defaultValue: null,
                description: '',
                name: 'isDeprecated',
                required: !0,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/prop-table/src/prop-table/partials/table-rows.tsx#TableRows'
            ] = {
              docgenInfo: TableRows.__docgenInfo,
              name: 'TableRows',
              path: 'components/prop-table/src/prop-table/partials/table-rows.tsx#TableRows',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const PropTable = ({ className, propsDoc, caption }) => {
        if (!propsDoc) return null;
        const { required, deprecated, optional } = ((props) => {
          const required = [],
            deprecated = [],
            optional = [];
          return (
            Object.values(props).forEach((prop) => {
              prop.description?.includes('@deprecated')
                ? deprecated.push(prop)
                : prop.required
                ? required.push(prop)
                : optional.push(prop);
            }),
            { required, deprecated, optional }
          );
        })(propsDoc.props);
        return (0, jsx_runtime.jsxs)(TableList, {
          className,
          caption,
          children: [
            (0, jsx_runtime.jsx)('thead', {
              children: (0, jsx_runtime.jsxs)(TableRow, {
                children: [
                  (0, jsx_runtime.jsx)(TableCell, {
                    isHeader: !0,
                    scope: 'col',
                    children: 'Name',
                  }),
                  (0, jsx_runtime.jsx)(TableCell, {
                    isHeader: !0,
                    scope: 'col',
                    children: 'Type',
                  }),
                  (0, jsx_runtime.jsx)(TableCell, {
                    isHeader: !0,
                    scope: 'col',
                    children: 'Description',
                  }),
                  (0, jsx_runtime.jsx)(TableCell, {
                    isHeader: !0,
                    scope: 'col',
                    children: 'Default',
                  }),
                ],
              }),
            }),
            (0, jsx_runtime.jsxs)('tbody', {
              children: [
                (0, jsx_runtime.jsx)(TableRows, {
                  propsDocItems: required,
                  isRequired: !0,
                  isDeprecated: !1,
                }),
                (0, jsx_runtime.jsx)(TableRows, {
                  propsDocItems: optional,
                  isRequired: !1,
                  isDeprecated: !1,
                }),
                (0, jsx_runtime.jsx)(TableRows, {
                  propsDocItems: deprecated,
                  isRequired: !1,
                  isDeprecated: !0,
                }),
              ],
            }),
          ],
        });
      };
      PropTable.displayName = 'PropTable';
      try {
        (PropTable.displayName = 'PropTable'),
          (PropTable.__docgenInfo = {
            description: '',
            displayName: 'PropTable',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              propsDoc: {
                defaultValue: null,
                description:
                  'A component from the manifest generated by the `@microsoft/arbutus.prop-docs-cli`.',
                name: 'propsDoc',
                required: !0,
                type: { name: 'ComponentDoc' },
              },
              caption: {
                defaultValue: null,
                description: 'Caption for the table.',
                name: 'caption',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/prop-table/src/prop-table/prop-table.tsx#PropTable'
            ] = {
              docgenInfo: PropTable.__docgenInfo,
              name: 'PropTable',
              path: 'components/prop-table/src/prop-table/prop-table.tsx#PropTable',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const prop_table_stories = {
          title: 'Blocks/PropTable',
          component: PropTable,
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { maxWidth: '980px', padding: '24px', margin: '0 auto' },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        Template = (args) => (0, jsx_runtime.jsx)(PropTable, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = { propsDoc: demo_component_props, caption: 'DemoComponent' };
      const __namedExportsOrder = ['Simple'];
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
