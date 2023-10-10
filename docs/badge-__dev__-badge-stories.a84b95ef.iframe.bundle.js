'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [4429],
  {
    './components/badge/__dev__/badge.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Inline: () => Inline,
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => badge_stories,
        });
      var icons = __webpack_require__('./components/icon/lib/icon/icons/index.js'),
        tokens =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js')),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js'),
        map_to_styles = __webpack_require__('./styles/utilities/lib/map-to-styles.js');
      const colorMap = {
          accent: tokens.T.colorBrandBackground2,
          primary: tokens.T.colorNeutralForeground1,
          secondary: tokens.T.colorNeutralForeground2,
          tertiary: tokens.T.colorNeutralForeground3,
          quaternary: tokens.T.colorNeutralForeground4,
          negative: tokens.T.colorPaletteDarkOrangeForeground1,
          positive: tokens.T.colorPaletteGreenForeground1,
          warning: tokens.T.colorPaletteMarigoldForeground1,
          danger: tokens.T.colorPaletteDarkOrangeForeground1,
          info: tokens.T.colorBrandForeground2,
        },
        colorClasses = (0, map_to_styles.f)(colorMap, (color) => ({
          backgroundColor: color,
        })),
        useBadgeStyles = (0, makeStyles_esm.Z)({
          root: {
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
            height: tokens.T.spacingHorizontalXXL,
            width: tokens.T.spacingHorizontalXXL,
            ...index_esm.q5.borderRadius(tokens.T.spacingHorizontalXXL),
          },
          inline: { display: 'inline-grid', verticalAlign: 'center' },
          ...colorClasses,
        });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Badge = ({ className, iconName, color = 'primary', isInline }) => {
        const classes = useBadgeStyles();
        return (0, jsx_runtime.jsx)('span', {
          className: (0, mergeClasses_esm.z)(
            classes.root,
            classes[color],
            isInline && classes.inline,
            className,
          ),
          children: (0, jsx_runtime.jsx)(icon.J, {
            size: 'small',
            iconName,
            color: `${color}-inverse`,
          }),
        });
      };
      Badge.displayName = 'Badge';
      try {
        (Badge.displayName = 'Badge'),
          (Badge.__docgenInfo = {
            description: '',
            displayName: 'Badge',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: 'primary' },
                description: 'Selection of color options.',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"accent"' },
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"tertiary"' },
                    { value: '"quaternary"' },
                    { value: '"negative"' },
                    { value: '"positive"' },
                    { value: '"warning"' },
                    { value: '"danger"' },
                    { value: '"info"' },
                  ],
                },
              },
              iconName: {
                defaultValue: null,
                description: 'Selection of icons.',
                name: 'iconName',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"code"' },
                    { value: '"link"' },
                    { value: '"open"' },
                    { value: '"copy"' },
                    { value: '"arrow-right"' },
                    { value: '"chevron-right"' },
                    { value: '"full-screen"' },
                    { value: '"slide-in"' },
                    { value: '"slide-out"' },
                    { value: '"check"' },
                    { value: '"download"' },
                    { value: '"exclamation"' },
                    { value: '"moon"' },
                    { value: '"sun"' },
                    { value: '"x"' },
                  ],
                },
              },
              isInline: {
                defaultValue: null,
                description: 'Sets the Badge to be an inline element.',
                name: 'isInline',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/badge/src/badge/badge.tsx#Badge'] = {
              docgenInfo: Badge.__docgenInfo,
              name: 'Badge',
              path: 'components/badge/src/badge/badge.tsx#Badge',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const badge_stories = {
          title: 'Atoms/Badge',
          component: Badge,
          argTypes: {
            options: Object.keys(colorMap),
            color: { control: { type: 'select' } },
            iconName: { options: Object.keys(icons.H), control: { type: 'select' } },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(Badge, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = { color: 'positive', iconName: 'check' };
      const InlineTemplate = (args) =>
        (0, jsx_runtime.jsxs)('p', {
          children: [(0, jsx_runtime.jsx)(Badge, { ...args }), ' Lorem ipsum dolor.'],
        });
      InlineTemplate.displayName = 'InlineTemplate';
      const Inline = InlineTemplate.bind({});
      Inline.args = { color: 'positive', iconName: 'exclamation', isInline: !0 };
      const __namedExportsOrder = ['Simple', 'Inline'];
    },
  },
]);
