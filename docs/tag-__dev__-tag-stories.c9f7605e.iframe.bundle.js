'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [3779],
  {
    './components/tag/__dev__/tag.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => tag_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js'),
        map_to_styles = __webpack_require__('./styles/utilities/lib/map-to-styles.js');
      const colorMap = {
          new: {
            background: tokens.T.colorPaletteLavenderBackground2,
            text: tokens.T.colorPaletteLavenderForeground2,
          },
          error: {
            background: tokens.T.colorPaletteDarkOrangeBackground2,
            text: tokens.T.colorPaletteDarkOrangeForeground2,
          },
          warning: {
            background: tokens.T.colorPaletteMarigoldBackground2,
            text: tokens.T.colorPaletteMarigoldForeground2,
          },
          success: {
            background: tokens.T.colorPaletteGreenBackground2,
            text: tokens.T.colorPaletteGreenForeground2,
          },
          info: {
            background: tokens.T.colorNeutralBackground3,
            text: tokens.T.colorNeutralForeground3,
          },
          accent: {
            background: tokens.T.colorBrandBackground2,
            text: tokens.T.colorBrandForeground2,
          },
        },
        typeClasses = (0, map_to_styles.f)(colorMap, ({ background, text }) => ({
          backgroundColor: background,
          color: text,
        })),
        useTagStyles = (0, makeStyles_esm.Z)({
          root: {
            color: tokens.T.colorNeutralForeground1,
            display: 'block',
            textTransform: 'uppercase',
            ...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium),
          },
          medium: {
            paddingTop: tokens.T.spacingVerticalXS,
            paddingBottom: tokens.T.spacingVerticalXS,
            paddingLeft: tokens.T.spacingHorizontalS,
            paddingRight: tokens.T.spacingHorizontalS,
            fontSize: tokens.T.fontSizeBase200,
            fontWeight: tokens.T.fontWeightSemibold,
            lineHeight: tokens.T.lineHeightBase200,
          },
          small: {
            paddingTop: tokens.T.spacingVerticalXXS,
            paddingBottom: tokens.T.spacingVerticalXXS,
            paddingLeft: tokens.T.spacingHorizontalXS,
            paddingRight: tokens.T.spacingHorizontalXS,
            fontSize: tokens.T.fontSizeBase100,
            lineHeight: tokens.T.lineHeightBase100,
            fontWeight: tokens.T.fontWeightSemibold,
            letterSpacing: '0.5px',
          },
          ...typeClasses,
          inline: { display: 'inline-block' },
        });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Tag = ({
        children,
        className,
        isInline,
        size = 'medium',
        type = 'accent',
      }) => {
        const classes = useTagStyles();
        return (0, jsx_runtime.jsx)('span', {
          className: (0, mergeClasses_esm.z)(
            classes.root,
            classes[type],
            classes[size],
            isInline && classes.inline,
            className,
          ),
          children,
        });
      };
      Tag.displayName = 'Tag';
      try {
        (Tag.displayName = 'Tag'),
          (Tag.__docgenInfo = {
            description: '',
            displayName: 'Tag',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              type: {
                defaultValue: { value: 'accent' },
                description: 'Type color variant options.',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"accent"' },
                    { value: '"warning"' },
                    { value: '"info"' },
                    { value: '"new"' },
                    { value: '"error"' },
                    { value: '"success"' },
                  ],
                },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: 'Size variant options.',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"small"' }, { value: '"medium"' }],
                },
              },
              isInline: {
                defaultValue: { value: 'false' },
                description: 'Inline variant.',
                name: 'isInline',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/tag/src/tag/tag.tsx#Tag'] = {
              docgenInfo: Tag.__docgenInfo,
              name: 'Tag',
              path: 'components/tag/src/tag/tag.tsx#Tag',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const tag_stories = { title: 'Atoms/Tag', component: Tag },
        Template = (args) => (0, jsx_runtime.jsx)(Tag, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = { type: 'accent', children: 'Future', isInline: !1, size: 'medium' };
      const __namedExportsOrder = ['Simple'];
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
