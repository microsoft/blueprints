'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [5130],
  {
    './hooks/use-copy-to-clipboard/__dev__/use-copy-to-clipboard.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Demo: () => Demo,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => use_copy_to_clipboard_stories,
        });
      var react = __webpack_require__('./node_modules/react/index.js');
      const isBrowser = 'undefined' != typeof window,
        useCopyToClipboard = (options) => {
          const { resetTimeout = 2500 } = options ?? {},
            [isCopied, setIsCopied] = (0, react.useState)(!1),
            [error, setError] = (0, react.useState)(),
            [status, setStatus] = (0, react.useState)('ready');
          (0, react.useEffect)(() => {
            if ('ready' === status) return;
            const timeoutId = setTimeout(() => {
              setIsCopied(!1), setError(void 0), setStatus('ready');
            }, resetTimeout);
            return () => clearTimeout(timeoutId);
          }, [status, resetTimeout]);
          return {
            copy: (0, react.useCallback)((text) => {
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
      try {
        (useCopyToClipboard.displayName = 'useCopyToClipboard'),
          (useCopyToClipboard.__docgenInfo = {
            description: '',
            displayName: 'useCopyToClipboard',
            props: {
              resetTimeout: {
                defaultValue: null,
                description: '',
                name: 'resetTimeout',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'hooks/use-copy-to-clipboard/src/use-copy-to-clipboard/use-copy-to-clipboard.tsx#useCopyToClipboard'
            ] = {
              docgenInfo: useCopyToClipboard.__docgenInfo,
              name: 'useCopyToClipboard',
              path: 'hooks/use-copy-to-clipboard/src/use-copy-to-clipboard/use-copy-to-clipboard.tsx#useCopyToClipboard',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const DemoComponent = () => {
        const { copy, error, isCopied, status } = useCopyToClipboard({}),
          text = 'UseCopyToClipboard test';
        return (0, jsx_runtime.jsxs)('div', {
          children: [
            (0, jsx_runtime.jsxs)('h1', {
              children: [
                (0, jsx_runtime.jsx)('code', { children: 'UseCopyToClipboard' }),
                ' Demo',
              ],
            }),
            (0, jsx_runtime.jsxs)('p', {
              children: ['Status: ', isCopied && '✅', !!error && '❌', status],
            }),
            (0, jsx_runtime.jsxs)('button', {
              onClick: () => copy(text),
              disabled: isCopied || !!error,
              children: ['Copy text: “', text, '”'],
            }),
          ],
        });
      };
      DemoComponent.displayName = 'DemoComponent';
      const use_copy_to_clipboard_stories = { title: 'Hooks/UseCopyToClipboard' },
        Template = () => (0, jsx_runtime.jsx)(DemoComponent, {});
      Template.displayName = 'Template';
      const Demo = Template.bind({}),
        __namedExportsOrder = ['Demo'];
    },
  },
]);
