/*! For license information please see command-__dev__-command-block-stories.05c27332.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [14],
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
    './components/command/__dev__/command-block.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => command_block_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        use_copy_to_clipboard = __webpack_require__(
          './hooks/use-copy-to-clipboard/lib/use-copy-to-clipboard/use-copy-to-clipboard.js',
        ),
        reach_visually_hidden = __webpack_require__(
          './node_modules/@reach/visually-hidden/dist/reach-visually-hidden.mjs',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js');
      const useCommandStyles = (0,
      __webpack_require__('./node_modules/@griffel/react/makeStyles.esm.js').Z)({
        root: {
          paddingBottom: 0,
          paddingTop: 0,
          paddingLeft: tokens.T.spacingHorizontalXL,
          paddingRight: 0,
          borderTopLeftRadius: tokens.T.borderRadiusMedium,
          borderTopRightRadius: tokens.T.borderRadiusMedium,
          borderBottomRightRadius: tokens.T.borderRadiusMedium,
          borderBottomLeftRadius: tokens.T.borderRadiusMedium,
          backgroundColor: tokens.T.colorNeutralBackground6,
          display: 'grid',
          gridTemplateColumns: 'auto 44px',
          columnGap: tokens.T.spacingHorizontalM,
          overflowX: 'hidden',
          overflowY: 'hidden',
        },
        command: {
          paddingTop: tokens.T.spacingVerticalM,
          paddingBottom: tokens.T.spacingVerticalM,
          fontSize: tokens.T.fontSizeBase300,
          fontWeight: tokens.T.fontWeightRegular,
          color: tokens.T.colorNeutralForeground2,
          lineHeight: tokens.T.lineHeightBase300,
        },
        button: {
          borderTopStyle: 'none',
          borderBottomStyle: 'none',
          borderLeftStyle: 'none',
          borderRightStyle: 'none',
          height: '100%',
          cursor: 'pointer',
          transitionProperty: 'all',
          transitionDuration: tokens.T.durationNormal,
          transitionTimingFunction: tokens.T.curveEasyEase,
        },
        idle: { backgroundColor: tokens.T.colorNeutralBackground4 },
        complete: {
          backgroundColor: tokens.T.colorPaletteGreenBackground2,
          '& > svg': { color: tokens.T.colorPaletteGreenForeground2 },
        },
      });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Command = ({ isCopyable, command, copyLabel = 'Copy command.' }) => {
        const { copy, isCopied } = (0, use_copy_to_clipboard.m)(),
          classes = useCommandStyles(),
          buttonClasses = (0, mergeClasses_esm.z)(
            classes.button,
            isCopied ? classes.complete : classes.idle,
          );
        return (0, jsx_runtime.jsxs)('div', {
          className: classes.root,
          children: [
            (0, jsx_runtime.jsx)('span', {
              className: classes.command,
              children: command,
            }),
            isCopyable &&
              (0, jsx_runtime.jsxs)('button', {
                onClick: () => copy(command),
                className: buttonClasses,
                children: [
                  (0, jsx_runtime.jsx)(icon.J, {
                    iconName: isCopied ? 'check' : 'copy',
                    color: isCopied ? 'positive-inverse' : 'secondary',
                  }),
                  (0, jsx_runtime.jsx)(reach_visually_hidden.T, { children: copyLabel }),
                ],
              }),
          ],
        });
      };
      Command.displayName = 'Command';
      try {
        (Command.displayName = 'Command'),
          (Command.__docgenInfo = {
            description: '',
            displayName: 'Command',
            props: {
              command: {
                defaultValue: null,
                description: 'The command to render.',
                name: 'command',
                required: !0,
                type: { name: 'string' },
              },
              isCopyable: {
                defaultValue: null,
                description:
                  'Whether the user should be able to copy the command to the clipboard.',
                name: 'isCopyable',
                required: !1,
                type: { name: 'boolean' },
              },
              copyLabel: {
                defaultValue: { value: 'Copy command.' },
                description:
                  'Screen-reader accessible label for the copy command action.',
                name: 'copyLabel',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/command/src/command/command.tsx#Command'
            ] = {
              docgenInfo: Command.__docgenInfo,
              name: 'Command',
              path: 'components/command/src/command/command.tsx#Command',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const command_block_stories = { title: 'Blocks/Command', component: Command },
        Template = (args) => (0, jsx_runtime.jsx)(Command, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = { command: 'npm i @fluent/react-button', isCopyable: !0 };
      const __namedExportsOrder = ['Simple'];
    },
    './hooks/use-copy-to-clipboard/lib/use-copy-to-clipboard/use-copy-to-clipboard.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { m: () => useCopyToClipboard });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js',
      );
      const isBrowser = 'undefined' != typeof window,
        useCopyToClipboard = (options) => {
          const { resetTimeout = 2500 } = options ?? {},
            [isCopied, setIsCopied] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
              !1,
            ),
            [error, setError] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
            [status, setStatus] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
              'ready',
            );
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if ('ready' === status) return;
            const timeoutId = setTimeout(() => {
              setIsCopied(!1), setError(void 0), setStatus('ready');
            }, resetTimeout);
            return () => clearTimeout(timeoutId);
          }, [status, resetTimeout]);
          return {
            copy: (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text) => {
              let Clipboard;
              isBrowser && (Clipboard = window.navigator.clipboard),
                Clipboard ||
                  (setError('Clipboard API is not supported.'), setStatus('error')),
                Clipboard?.writeText(text)
                  .then(() => {
                    setIsCopied(!0), setStatus('success');
                  })
                  .catch(() => {
                    setError('Could not copy to clipboard.'), setStatus('error');
                  });
            }, []),
            isCopied,
            error,
            status,
          };
        };
    },
  },
]);
