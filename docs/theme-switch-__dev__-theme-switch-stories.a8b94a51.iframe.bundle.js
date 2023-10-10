/*! For license information please see theme-switch-__dev__-theme-switch-stories.a8b94a51.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [3362],
  {
    './node_modules/@reach/visually-hidden/dist/reach-visually-hidden.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { T: () => VisuallyHidden });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        VisuallyHidden = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          function VisuallyHidden2({ as: Comp = 'span', style = {}, ...props }, ref) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, {
              ref,
              style: {
                border: 0,
                clip: 'rect(0 0 0 0)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: '1px',
                whiteSpace: 'nowrap',
                wordWrap: 'normal',
                ...style,
              },
              ...props,
            });
          },
        );
      VisuallyHidden.displayName = 'VisuallyHidden';
    },
    './.storybook/decorators/index.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => Centered });
      __webpack_require__('./node_modules/react/index.js');
      const useCenteredClasses = (0,
      __webpack_require__('./node_modules/@griffel/react/makeStyles.esm.js').Z)({
        root: {
          minHeight: '100vh',
          width: '100%',
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center',
        },
      });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Centered = ({ children }) => {
        const classes = useCenteredClasses();
        return (0, jsx_runtime.jsx)('div', { className: classes.root, children });
      };
      Centered.displayName = 'Centered';
      try {
        (Centered.displayName = 'Centered'),
          (Centered.__docgenInfo = {
            description: '',
            displayName: 'Centered',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['.storybook/decorators/centered.tsx#Centered'] = {
              docgenInfo: Centered.__docgenInfo,
              name: 'Centered',
              path: '.storybook/decorators/centered.tsx#Centered',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/theme-switch/__dev__/theme-switch.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => theme_switch_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var decorators = __webpack_require__('./.storybook/decorators/index.ts'),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        reach_visually_hidden = __webpack_require__(
          './node_modules/@reach/visually-hidden/dist/reach-visually-hidden.mjs',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js');
      const buttonHeight = tokens.T.spacingVerticalXXL,
        toggleHeight = tokens.T.spacingVerticalL,
        useThemeSwitchStyles = (0, makeStyles_esm.Z)({
          root: {
            position: 'relative',
            backgroundColor: tokens.T.colorNeutralBackground2,
            height: buttonHeight,
            width: `calc(${buttonHeight} * 2 + -2px)`,
            paddingTop: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
            paddingBottom: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
            paddingLeft: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
            paddingRight: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
            outlineStyle: 'none',
            cursor: 'pointer',
            transitionProperty: 'all',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            borderTopStyle: 'none',
            borderBottomStyle: 'none',
            borderLeftStyle: 'none',
            borderRightStyle: 'none',
            boxShadow: tokens.T.shadow2,
            ...index_esm.q5.borderRadius(`calc(${buttonHeight} / 2)`),
          },
          toggle: {
            transitionProperty: 'all',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            position: 'absolute',
            top: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
            height: toggleHeight,
            width: toggleHeight,
            backgroundColor: tokens.T.colorNeutralForeground2,
            boxShadow: tokens.T.shadow4,
            ...index_esm.q5.borderRadius(toggleHeight),
          },
          toggleOff: { transform: 'translateX(0)' },
          toggleOn: { transform: `translateX(calc(${buttonHeight} + -2px))` },
          iconSun: {
            position: 'absolute',
            transitionProperty: 'all',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            top: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
            left: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
            color: tokens.T.colorPaletteMarigoldBackground3,
            opacity: 1,
          },
          iconMoon: {
            position: 'absolute',
            transitionProperty: 'all',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            top: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
            right: `calc((${buttonHeight} - ${toggleHeight}) / 2)`,
            color: tokens.T.colorPaletteMarigoldBackground3,
            opacity: 1,
          },
          iconOff: { opacity: 0 },
        });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const ThemeSwitch = ({ className, label = 'Dark mode', isDark, onToggle }) => {
        const classes = useThemeSwitchStyles();
        return (0, jsx_runtime.jsxs)('button', {
          'aria-pressed': isDark,
          className: (0, mergeClasses_esm.z)(classes.root, className),
          onClick: () => onToggle?.(),
          children: [
            (0, jsx_runtime.jsx)(reach_visually_hidden.T, { children: label }),
            (0, jsx_runtime.jsx)('div', {
              'aria-hidden': !0,
              className: (0, mergeClasses_esm.z)(
                classes.toggle,
                isDark ? classes.toggleOn : classes.toggleOff,
              ),
            }),
            (0, jsx_runtime.jsx)(icon.J, {
              iconName: 'sun',
              className: (0, mergeClasses_esm.z)(
                classes.iconSun,
                !isDark && classes.iconOff,
              ),
            }),
            (0, jsx_runtime.jsx)(icon.J, {
              iconName: 'moon',
              className: (0, mergeClasses_esm.z)(
                classes.iconMoon,
                isDark && classes.iconOff,
              ),
            }),
          ],
        });
      };
      ThemeSwitch.displayName = 'ThemeSwitch';
      try {
        (ThemeSwitch.displayName = 'ThemeSwitch'),
          (ThemeSwitch.__docgenInfo = {
            description: '',
            displayName: 'ThemeSwitch',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              label: {
                defaultValue: { value: 'Dark mode' },
                description:
                  'Label for assistive technologies to indicate whether the theme is light or dark.',
                name: 'label',
                required: !1,
                type: { name: 'string' },
              },
              isDark: {
                defaultValue: null,
                description: 'Whether the theme is light or dark.',
                name: 'isDark',
                required: !0,
                type: { name: 'boolean' },
              },
              onToggle: {
                defaultValue: null,
                description:
                  'Callback to be called when the theme is toggled.\n@param isDark - Whether the theme is light or dark.',
                name: 'onToggle',
                required: !1,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/theme-switch/src/theme-switch/theme-switch.tsx#ThemeSwitch'
            ] = {
              docgenInfo: ThemeSwitch.__docgenInfo,
              name: 'ThemeSwitch',
              path: 'components/theme-switch/src/theme-switch/theme-switch.tsx#ThemeSwitch',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const theme_switch_stories = {
          title: 'Atoms/ThemeSwitch',
          component: ThemeSwitch,
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)(decorators.z, {
                children: (0, jsx_runtime.jsx)('div', {
                  style: { maxWidth: ' ' },
                  children: (0, jsx_runtime.jsx)(Story, {}),
                }),
              }),
          ],
        },
        Template = (args) => (0, jsx_runtime.jsx)(ThemeSwitch, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = { isDark: !1 };
      const __namedExportsOrder = ['Simple'];
    },
  },
]);
