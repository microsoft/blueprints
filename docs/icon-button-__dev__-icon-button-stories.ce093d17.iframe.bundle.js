'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [164],
  {
    './components/icon-button/__dev__/icon-button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => icon_button_stories,
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
          primary: {
            background: tokens.T.colorNeutralBackground1,
            backgroundHover: tokens.T.colorNeutralBackground1Hover,
            outline: tokens.T.colorBrandStroke1,
            stroke: tokens.T.colorNeutralForeground1,
            strokeHover: tokens.T.colorNeutralForeground1Hover,
          },
          secondary: {
            background: tokens.T.colorNeutralBackground1,
            backgroundHover: tokens.T.colorNeutralBackground2Hover,
            outline: tokens.T.colorBrandStroke1,
            stroke: tokens.T.colorNeutralForeground2,
            strokeHover: tokens.T.colorNeutralForeground2Hover,
          },
          danger: {
            background: tokens.T.colorNeutralBackground1,
            backgroundHover: tokens.T.colorPaletteDarkOrangeBackground1,
            outline: tokens.T.colorPaletteDarkOrangeBorderActive,
            stroke: tokens.T.colorPaletteDarkOrangeForeground3,
            strokeHover: tokens.T.colorPaletteDarkOrangeForeground1,
          },
          warning: {
            background: tokens.T.colorNeutralBackground1,
            backgroundHover: tokens.T.colorPaletteMarigoldBackground1,
            outline: tokens.T.colorPaletteMarigoldBorderActive,
            stroke: tokens.T.colorPaletteMarigoldForeground3,
            strokeHover: tokens.T.colorPaletteMarigoldForeground1,
          },
          success: {
            background: tokens.T.colorNeutralBackground1,
            backgroundHover: tokens.T.colorPaletteLightGreenBackground1,
            outline: tokens.T.colorPaletteLightGreenBorderActive,
            stroke: tokens.T.colorPaletteLightGreenForeground1,
            strokeHover: tokens.T.colorPaletteLightGreenForeground3,
          },
          info: {
            background: tokens.T.colorNeutralBackground1,
            backgroundHover: tokens.T.colorNeutralBackground2Hover,
            outline: tokens.T.colorBrandStroke1,
            stroke: tokens.T.colorNeutralForeground2,
            strokeHover: tokens.T.colorNeutralForeground2Hover,
          },
          accent: {
            background: tokens.T.colorNeutralBackground1,
            backgroundHover: tokens.T.colorBrandBackgroundInvertedHover,
            outline: tokens.T.colorBrandStroke1,
            stroke: tokens.T.colorCompoundBrandStroke,
            strokeHover: tokens.T.colorCompoundBrandStrokeHover,
          },
        },
        colorClasses = (0, map_to_styles.f)(
          colorMap,
          ({ background, backgroundHover, outline, stroke, strokeHover }) => ({
            backgroundColor: background,
            '& > svg': { color: stroke },
            ':hover': {
              backgroundColor: backgroundHover,
              '& > svg': { color: strokeHover },
            },
            ':focus': { backgroundColor: backgroundHover, outlineColor: outline },
          }),
        ),
        useIconButtonStyles = (0, makeStyles_esm.Z)({
          ...colorClasses,
          root: {
            ...index_esm.q5.borderRadius(tokens.T.borderRadiusXLarge),
            cursor: 'pointer',
            transitionProperty: 'all',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            lineHeight: 0,
            borderTopStyle: 'none',
            borderRightStyle: 'none',
            borderBottomStyle: 'none',
            borderLeftStyle: 'none',
          },
        });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        use_space_styles = __webpack_require__(
          './hooks/use-space-styles/lib/use-space-styles.js',
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const IconButton = ({ className, label, iconName, onClick, color = 'primary' }) => {
        const classes = useIconButtonStyles(),
          space = (0, use_space_styles.z)();
        return (0, jsx_runtime.jsx)('button', {
          onClick,
          'aria-label': label,
          className: (0, mergeClasses_esm.z)(
            classes.root,
            classes[color],
            space.p2,
            className,
          ),
          children: (0, jsx_runtime.jsx)(icon.J, { iconName }),
        });
      };
      IconButton.displayName = 'IconButton';
      try {
        (IconButton.displayName = 'IconButton'),
          (IconButton.__docgenInfo = {
            description: '',
            displayName: 'IconButton',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: 'Descriptive label of the button.',
                name: 'label',
                required: !0,
                type: { name: 'string' },
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
                    { value: '"warning"' },
                    { value: '"danger"' },
                    { value: '"info"' },
                    { value: '"success"' },
                  ],
                },
              },
              onClick: {
                defaultValue: null,
                description: 'Click handler.',
                name: 'onClick',
                required: !0,
                type: { name: '(e?: SyntheticEvent<Element, Event>) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/icon-button/src/icon-button/icon-button.tsx#IconButton'
            ] = {
              docgenInfo: IconButton.__docgenInfo,
              name: 'IconButton',
              path: 'components/icon-button/src/icon-button/icon-button.tsx#IconButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const icon_button_stories = {
          title: 'Atoms/IconButton',
          component: IconButton,
          argTypes: {
            onClick: { action: 'clicked' },
            iconName: { options: Object.keys(icons.H), control: { type: 'select' } },
            color: { options: Object.keys(colorMap), control: { type: 'select' } },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(IconButton, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = { label: 'Simple IconButton Example', iconName: 'x' };
      const __namedExportsOrder = ['Simple'];
    },
    './hooks/use-space-styles/lib/use-space-styles.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => useSpaceStyles });
      var makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js');
      const spaceScale = {
          1: tokens.T.spacingHorizontalXXS,
          2: tokens.T.spacingHorizontalXS,
          3: tokens.T.spacingHorizontalSNudge,
          4: tokens.T.spacingHorizontalS,
          5: tokens.T.spacingHorizontalMNudge,
          6: tokens.T.spacingHorizontalM,
          7: tokens.T.spacingHorizontalL,
          8: tokens.T.spacingHorizontalXL,
          9: tokens.T.spacingHorizontalXXL,
          10: tokens.T.spacingHorizontalXXXL,
          11: '40px',
          12: '52px',
        },
        spaceEntries = Object.entries(spaceScale),
        margin = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`m${key}`] = {
              marginTop: value,
              marginBottom: value,
              marginLeft: value,
              marginRight: value,
            }),
            acc
          ),
          {},
        ),
        marginY = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`my${key}`] = { marginTop: value, marginBottom: value }), acc
          ),
          {},
        ),
        marginX = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`mx${key}`] = { marginLeft: value, marginRight: value }), acc
          ),
          {},
        ),
        marginTop = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`mt${key}`] = { marginTop: value }), acc),
          {},
        ),
        marginBottom = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`mb${key}`] = { marginBottom: value }), acc),
          {},
        ),
        marginLeft = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`ml${key}`] = { marginLeft: value }), acc),
          {},
        ),
        marginRight = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`mr${key}`] = { marginRight: value }), acc),
          {},
        ),
        padding = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`p${key}`] = {
              paddingTop: value,
              paddingBottom: value,
              paddingLeft: value,
              paddingRight: value,
            }),
            acc
          ),
          {},
        ),
        paddingY = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`py${key}`] = { paddingTop: value, paddingBottom: value }), acc
          ),
          {},
        ),
        paddingX = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`px${key}`] = { paddingLeft: value, paddingRight: value }), acc
          ),
          {},
        ),
        paddingTop = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`pt${key}`] = { paddingTop: value }), acc),
          {},
        ),
        paddingBottom = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`pb${key}`] = { paddingBottom: value }), acc),
          {},
        ),
        paddingLeft = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`pl${key}`] = { paddingLeft: value }), acc),
          {},
        ),
        paddingRight = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`pr${key}`] = { paddingRight: value }), acc),
          {},
        ),
        useSpaceStyles = (0, makeStyles_esm.Z)({
          ...margin,
          ...marginY,
          ...marginX,
          ...marginTop,
          ...marginBottom,
          ...marginLeft,
          ...marginRight,
          ...padding,
          ...paddingBottom,
          ...paddingLeft,
          ...paddingRight,
          ...paddingTop,
          ...paddingX,
          ...paddingY,
        });
    },
  },
]);
