'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [451],
  {
    './components/button/__dev__/button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => button_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        map_to_styles = __webpack_require__('./styles/utilities/lib/map-to-styles.js');
      const colorMap = {
          primary: {
            foreground: tokens.T.colorBrandForeground1,
            stroke: tokens.T.colorBrandForeground2,
            background: tokens.T.colorBrandBackground2,
          },
          secondary: {
            foreground: tokens.T.colorNeutralForeground1,
            stroke: tokens.T.colorNeutralStroke1,
            background: tokens.T.colorNeutralBackground3,
          },
          danger: {
            foreground: tokens.T.colorPaletteDarkOrangeForeground1,
            stroke: tokens.T.colorPaletteDarkOrangeBorder1,
            background: tokens.T.colorPaletteDarkOrangeBackground1,
          },
          warning: {
            foreground: tokens.T.colorPaletteMarigoldForeground1,
            stroke: tokens.T.colorPaletteMarigoldBorder1,
            background: tokens.T.colorPaletteMarigoldBackground1,
          },
          success: {
            foreground: tokens.T.colorPaletteGreenForeground1,
            stroke: tokens.T.colorPaletteGreenBorder1,
            background: tokens.T.colorPaletteGreenBackground1,
          },
        },
        colorPillClasses = (0, map_to_styles.f)(
          colorMap,
          ({ foreground, background, stroke }) => ({
            color: foreground,
            borderTopColor: stroke,
            borderRightColor: stroke,
            borderLeftColor: stroke,
            borderBottomColor: stroke,
            '&:focus-visible, &:hover': {
              backgroundColor: background,
              boxShadow: `0 0 2px ${background}, 0 8px 16px ${background}, inset 0 0 0px 0.5px ${stroke}`,
            },
          }),
        ),
        { primary, ...restColors } = colorMap,
        colorBrickClasses = (0, map_to_styles.f)(
          restColors,
          ({ foreground, background, stroke }) => ({
            backgroundColor: background,
            color: foreground,
            borderTopColor: stroke,
            borderRightColor: stroke,
            borderLeftColor: stroke,
            borderBottomColor: stroke,
            '&:focus-visible, &:hover': {
              boxShadow: `0 0 2px ${background}, 0 8px 16px ${background}, inset 0 0 0px 0.5px ${stroke}`,
            },
          }),
        ),
        sizeMap = {
          small: {
            x: tokens.T.spacingHorizontalM,
            y: tokens.T.spacingVerticalXS,
            fontSize: tokens.T.fontSizeBase300,
          },
          medium: {
            x: tokens.T.spacingHorizontalL,
            y: tokens.T.spacingVerticalS,
            fontSize: tokens.T.fontSizeBase300,
          },
          large: {
            x: tokens.T.spacingHorizontalXXL,
            y: tokens.T.spacingVerticalM,
            fontSize: tokens.T.fontSizeBase400,
          },
        },
        sizeClasses = (0, map_to_styles.f)(sizeMap, ({ y, x, fontSize }) => ({
          paddingLeft: x,
          paddingRight: x,
          paddingTop: y,
          paddingBottom: y,
          fontSize,
        })),
        sizePillClasses = (0, map_to_styles.f)(sizeMap, ({ x, fontSize }) => ({
          borderTopLeftRadius: `calc(${x} * 2 + ${fontSize})`,
          borderTopRightRadius: `calc(${x} * 2 + ${fontSize})`,
          borderBottomLeftRadius: `calc(${x} * 2 + ${fontSize})`,
          borderBottomRightRadius: `calc(${x} * 2 + ${fontSize})`,
        })),
        useButtonStyles = (0, makeStyles_esm.Z)({
          root: {
            cursor: 'pointer',
            transitionProperty: 'all',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            fontWeight: tokens.T.fontWeightSemibold,
            borderTopStyle: 'solid',
            borderBottomStyle: 'solid',
            borderLeftStyle: 'solid',
            borderRightStyle: 'solid',
            borderTopWidth: tokens.T.strokeWidthThin,
            borderBottomWidth: tokens.T.strokeWidthThin,
            borderLeftWidth: tokens.T.strokeWidthThin,
            borderRightWidth: tokens.T.strokeWidthThin,
            boxShadow: '0 0 2px transparent, 0 8px 16px transparent',
            '@media (prefers-reduced-motion)': { transitionDuration: '0ms' },
            '&:focus-visible': { outlineStyle: 'none', outlineColor: 'transparent' },
          },
          pill: { backgroundColor: 'transparent' },
          brick: {
            borderTopLeftRadius: tokens.T.borderRadiusMedium,
            borderTopRightRadius: tokens.T.borderRadiusMedium,
            borderBottomLeftRadius: tokens.T.borderRadiusMedium,
            borderBottomRightRadius: tokens.T.borderRadiusMedium,
          },
          ...sizeClasses,
        }),
        useButtonPillStyles = (0, makeStyles_esm.Z)({
          ...colorPillClasses,
          ...sizePillClasses,
        }),
        useButtonBrickStyles = (0, makeStyles_esm.Z)({
          primary: {
            color: tokens.T.colorNeutralBackground1,
            backgroundColor: tokens.T.colorBrandForegroundInverted,
            borderTopColor: tokens.T.colorBrandForegroundInverted,
            borderRightColor: tokens.T.colorBrandForegroundInverted,
            borderLeftColor: tokens.T.colorBrandForegroundInverted,
            borderBottomColor: tokens.T.colorBrandForegroundInverted,
            '&:focus-visible, &:hover': {
              backgroundColor: tokens.T.colorBrandForegroundInvertedHover,
              boxShadow: `0 0 2px ${colorMap.primary.foreground}, 0 8px 16px ${colorMap.primary.background}`,
            },
          },
          ...colorBrickClasses,
        });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Button = ({
        className,
        color = 'primary',
        size = 'medium',
        shape = 'brick',
        children,
        ...rest
      }) => {
        const classes = useButtonStyles(),
          brickClasses = useButtonBrickStyles(),
          pillClasses = useButtonPillStyles(),
          isBrick = 'brick' === shape,
          isPill = 'pill' === shape;
        return (0, jsx_runtime.jsx)('button', {
          className: (0, mergeClasses_esm.z)(
            classes.root,
            classes[size],
            isBrick && brickClasses[color],
            isBrick && classes.brick,
            isPill && classes.pill,
            isPill && pillClasses[color],
            isPill && pillClasses[size],
            className,
          ),
          ...rest,
          children,
        });
      };
      Button.displayName = 'Button';
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              size: {
                defaultValue: { value: 'medium' },
                description: 'Size of the button.',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"small"' },
                    { value: '"medium"' },
                    { value: '"large"' },
                  ],
                },
              },
              shape: {
                defaultValue: { value: 'brick' },
                description: 'Shape variant options.',
                name: 'shape',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"pill"' }, { value: '"brick"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/button/src/button/button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'components/button/src/button/button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const button_stories = {
          title: 'Atoms/Button',
          component: Button,
          argTypes: {
            color: { options: Object.keys(colorMap), control: { type: 'select' } },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(Button, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = {
        color: 'primary',
        size: 'medium',
        shape: 'brick',
        children: 'Click me!',
      };
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
