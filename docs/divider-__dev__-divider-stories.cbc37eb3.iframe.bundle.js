'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [6353],
  {
    './components/divider/__dev__/divider.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => divider_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js');
      const useDividerStyles = (0,
      __webpack_require__('./node_modules/@griffel/react/makeStyles.esm.js').Z)({
        root: {
          width: '100%',
          height: '0.0625rem',
          position: 'relative',
          borderTopStyle: 'none',
          borderRightStyle: 'none',
          borderBottomStyle: 'none',
          borderLeftStyle: 'none',
          backgroundColor: tokens.T.colorNeutralStroke1,
          marginBottom: 0,
          marginTop: 0,
        },
      });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Divider = ({ className }) => {
        const classes = useDividerStyles(),
          rootClasses = (0, mergeClasses_esm.z)(classes.root, className);
        return (0, jsx_runtime.jsx)('hr', { className: rootClasses });
      };
      Divider.displayName = 'Divider';
      try {
        (Divider.displayName = 'Divider'),
          (Divider.__docgenInfo = {
            description: '',
            displayName: 'Divider',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/divider/src/divider/divider.tsx#Divider'
            ] = {
              docgenInfo: Divider.__docgenInfo,
              name: 'Divider',
              path: 'components/divider/src/divider/divider.tsx#Divider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const divider_stories = { title: 'Atoms/Divider', component: Divider },
        Template = (args) => (0, jsx_runtime.jsx)(Divider, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = {};
      const __namedExportsOrder = ['Simple'];
    },
  },
]);
