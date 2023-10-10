'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [8026],
  {
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
    './components/sandbox/__dev__/sandbox.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => sandbox_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var decorators = __webpack_require__('./.storybook/decorators/index.ts'),
        dist = __webpack_require__(
          './node_modules/@codesandbox/sandpack-react/dist/index.mjs',
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Sandbox = ({ files, dependencies }) => {
        const customSetup = {};
        return (
          dependencies && (customSetup.dependencies = dependencies),
          (0, jsx_runtime.jsx)(dist.xR, { template: 'react-ts', files, customSetup })
        );
      };
      Sandbox.displayName = 'Sandbox';
      try {
        (Sandbox.displayName = 'Sandbox'),
          (Sandbox.__docgenInfo = {
            description: '',
            displayName: 'Sandbox',
            props: {
              files: {
                defaultValue: null,
                description: 'Files of the sandboxed application.',
                name: 'files',
                required: !0,
                type: { name: 'SandpackFiles | Record<string, any>' },
              },
              dependencies: {
                defaultValue: null,
                description: 'Dependencies of the sandboxed application.',
                name: 'dependencies',
                required: !0,
                type: { name: '{ [dependency: string]: string; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/sandbox/src/sandbox/sandbox.tsx#Sandbox'
            ] = {
              docgenInfo: Sandbox.__docgenInfo,
              name: 'Sandbox',
              path: 'components/sandbox/src/sandbox/sandbox.tsx#Sandbox',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const sandbox_stories = {
          title: 'Examples/Sandbox',
          component: Sandbox,
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)(decorators.z, {
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        Template = (args) => (0, jsx_runtime.jsx)(Sandbox, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = {
        files: {
          '/App.tsx': {
            code: "import { Button } from '@microsoft/arbutus.button';\n\nimport { Theme } from './theme';\nimport { Centered } from './centered';\n\nexport default function App() {\n  return (\n    <Theme>\n      <Centered>\n        <Button>Hello Sandpack</Button>\n      </Centered>\n    </Theme>\n  )\n}",
            active: !0,
          },
          '/theme.tsx':
            "import 'normalize.css';\n\nimport { makeStaticStyles } from '@griffel/react';\nimport {\n  useSegoeUI100,\n  useSegoeUI200,\n  useSegoeUI400,\n  useSegoeUI600,\n  useSegoeUI700,\n} from '@microsoft/arbutus.fonts';\nimport { ThemeProvider } from '@microsoft/arbutus.theming';\nimport type { FC } from 'react';\nimport React from 'react';\n\nconst useGlobalStyles = makeStaticStyles({\n  '*': {\n    boxSizing: 'border-box',\n  },\n  div: {\n    width: '100%',\n  },\n});\n\nexport const Theme: FC = ({ children }) => {\n  useSegoeUI100();\n  useSegoeUI200();\n  useSegoeUI400();\n  useSegoeUI600();\n  useSegoeUI700();\n  useGlobalStyles();\n\n  return <ThemeProvider>{children}</ThemeProvider>;\n};",
          '/centered.tsx':
            "import { makeStyles } from '@griffel/react';\nimport type { FC, ReactNode } from 'react';\nimport * as React from 'react';\n\nconst useCenteredClasses = makeStyles({\n  root: {\n    minHeight: '100vh',\n    width: '100%',\n    display: 'grid',\n    alignItems: 'center',\n    justifyItems: 'center',\n  },\n});\n\nexport const Centered: FC<{ children?: ReactNode }> = ({ children }) => {\n  const classes = useCenteredClasses();\n\n  return <div className={classes.root}>{children}</div>;\n};",
        },
        dependencies: {
          '@griffel/react': '^1.5.1',
          '@microsoft/arbutus.button': '^0.0.2',
          '@microsoft/arbutus.fonts': '0.0.1',
          '@microsoft/arbutus.theming': '0.0.4',
          'normalize.css': '^8.0.1',
        },
      };
      const __namedExportsOrder = ['Simple'];
    },
  },
]);
