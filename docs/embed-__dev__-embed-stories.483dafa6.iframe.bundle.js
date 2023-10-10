'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [3287],
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
    './components/divider/lib/divider/divider.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { i: () => Divider });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
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
        }),
        Divider = ({ className }) => {
          const classes = useDividerStyles(),
            rootClasses = (0, mergeClasses_esm.z)(classes.root, className);
          return react.createElement('hr', { className: rootClasses });
        };
      Divider.__docgenInfo = { description: '', methods: [], displayName: 'Divider' };
    },
    './components/embed/__dev__/embed.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          FigmaEmbed: () => FigmaEmbed,
          StorybookEmbed: () => StorybookEmbed,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => embed_stories,
        });
      var react = __webpack_require__('./node_modules/react/index.js'),
        decorators = __webpack_require__('./.storybook/decorators/index.ts'),
        Spinner = __webpack_require__(
          './node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        divider = __webpack_require__('./components/divider/lib/divider/divider.js'),
        icon_button = __webpack_require__(
          './components/icon-button/lib/icon-button/icon-button.js',
        ),
        logo = __webpack_require__('./components/logo/lib/logo/logo.js'),
        text_text = __webpack_require__('./components/text/lib/text/text.js'),
        use_space_styles = __webpack_require__(
          './hooks/use-space-styles/lib/use-space-styles.js',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js');
      const sizeClasses = {
          small: { height: `calc(${tokens.T.spacingVerticalXS} * 76)` },
          medium: { height: `calc(${tokens.T.spacingVerticalXS} * 96)` },
          large: { height: `calc(${tokens.T.spacingVerticalXS} * 116)` },
        },
        useEmbedStyles = (0, makeStyles_esm.Z)({
          root: {
            width: '100%',
            ...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium),
            ...index_esm.q5.border('1px', 'solid', tokens.T.colorNeutralStroke1),
            overflowX: 'hidden',
            overflowY: 'hidden',
          },
          header: {
            height: `calc(${tokens.T.spacingVerticalXL} + ${tokens.T.spacingVerticalSNudge}) + ${tokens.T.spacingVerticalSNudge}`,
            display: 'grid',
            columnGap: tokens.T.spacingHorizontalXS,
            gridTemplateColumns: `${tokens.T.spacingHorizontalXXL} auto ${tokens.T.spacingHorizontalXXL}`,
          },
          ...sizeClasses,
          content: { width: '100%', height: '100%', position: 'relative' },
          overlay: {
            position: 'absolute',
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transitionProperty: 'all',
            transitionDuration: tokens.T.durationSlow,
            transitionTimingFunction: tokens.T.curveAccelerateMax,
            backgroundColor: 'transparent',
          },
          removeOverlay: { display: 'none' },
          loading: { backgroundColor: tokens.T.colorNeutralBackground1 },
          iframe: {
            width: '100%',
            ...index_esm.q5.borderWidth(0),
            ...index_esm.q5.borderColor('transparent'),
            ...index_esm.q5.borderStyle('none'),
          },
        }),
        getUrl = ({ type, url }) => {
          switch (type) {
            case 'figma':
              return `https://www.figma.com/embed?embed_host=arbutus&url=      ${url}`;
            case 'storybook':
              return url;
          }
        };
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Embed = ({
        allowFullScreen = !0,
        className,
        openButtonLabel = 'Open in a new tab.',
        size = 'medium',
        title,
        type,
        url,
      }) => {
        const [isLoading, setIsLoading] = (0, react.useState)(!0),
          [isAnimationComplete, setIsAnimationComplete] = (0, react.useState)(!1),
          classes = useEmbedStyles(),
          space = (0, use_space_styles.z)(),
          overlayClasses = (0, mergeClasses_esm.z)(
            classes.overlay,
            isLoading && classes.loading,
            isAnimationComplete && classes.removeOverlay,
          );
        return (
          (0, react.useEffect)(() => {
            isLoading || setTimeout(() => setIsAnimationComplete(!0), 300);
          }, [isLoading]),
          (0, jsx_runtime.jsxs)('div', {
            className: (0, mergeClasses_esm.z)(classes.root, className),
            children: [
              (0, jsx_runtime.jsxs)('header', {
                className: (0, mergeClasses_esm.z)(classes.header, space.px5, space.my5),
                children: [
                  (0, jsx_runtime.jsx)(logo.T, { logoName: type, size: 'medium' }),
                  (0, jsx_runtime.jsx)(text_text.x, {
                    as: 'h3',
                    variant: 'caption',
                    className: space.mt2,
                    children: title,
                  }),
                  (0, jsx_runtime.jsx)('div', {
                    children: (0, jsx_runtime.jsx)(icon_button.h, {
                      label: openButtonLabel,
                      iconName: 'open',
                      onClick: () => {
                        window?.open(url, '_blank')?.focus();
                      },
                    }),
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(divider.i, {}),
              (0, jsx_runtime.jsxs)('div', {
                className: classes.content,
                children: [
                  (0, jsx_runtime.jsx)('div', {
                    className: overlayClasses,
                    children: isLoading && (0, jsx_runtime.jsx)(Spinner.$, {}),
                  }),
                  (0, jsx_runtime.jsx)('iframe', {
                    onLoad: () => setIsLoading(!1),
                    title,
                    className: (0, mergeClasses_esm.z)(classes.iframe, classes[size]),
                    src: getUrl({ type, url }),
                    allowFullScreen,
                  }),
                ],
              }),
            ],
          })
        );
      };
      Embed.displayName = 'Embed';
      try {
        (Embed.displayName = 'Embed'),
          (Embed.__docgenInfo = {
            description: '',
            displayName: 'Embed',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              type: {
                defaultValue: null,
                description: 'Embed types supported.',
                name: 'type',
                required: !0,
                type: {
                  name: 'enum',
                  value: [{ value: '"figma"' }, { value: '"storybook"' }],
                },
              },
              title: {
                defaultValue: null,
                description: 'Title of the embed.',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
              openButtonLabel: {
                defaultValue: { value: 'Open in a new tab.' },
                description: 'Descriptive label of the open button.',
                name: 'openButtonLabel',
                required: !1,
                type: { name: 'string' },
              },
              url: {
                defaultValue: null,
                description: 'The URL of the Figma file you want to embed.',
                name: 'url',
                required: !0,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: 'Size options.',
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
              allowFullScreen: {
                defaultValue: { value: 'true' },
                description:
                  'This is optional. If you include it, people viewing an embedded Figma design will have the option of seeing it in\nfullscreen. If you don’t include it, then your embed will not display any fullscreen option.\n@see https://www.figma.com/developers/embed\n@see https://www.figma.com/developers/embed',
                name: 'allowFullScreen',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/embed/src/embed/embed.tsx#Embed'] = {
              docgenInfo: Embed.__docgenInfo,
              name: 'Embed',
              path: 'components/embed/src/embed/embed.tsx#Embed',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const embed_stories = {
          title: 'Blocks/Embed',
          component: Embed,
          argTypes: {
            size: { options: ['small', 'medium', 'large'], control: { type: 'select' } },
            allowFullScreen: { control: 'boolean' },
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)(decorators.z, {
                children: (0, jsx_runtime.jsx)('div', {
                  style: { width: '90%' },
                  children: (0, jsx_runtime.jsx)(Story, {}),
                }),
              }),
          ],
        },
        Template = (args) => (0, jsx_runtime.jsx)(Embed, { ...args });
      Template.displayName = 'Template';
      const FigmaEmbed = Template.bind({});
      FigmaEmbed.args = {
        type: 'figma',
        url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
        title: 'Sample Figma file',
        openButtonLabel: 'Open Figma file in a new tab',
        allowFullScreen: !0,
      };
      const StorybookEmbed = Template.bind({});
      StorybookEmbed.args = {
        type: 'storybook',
        url: 'https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/iframe.html?id=shadowboxcta--default&viewMode=story&shortcuts=false&singleStory=true',
        title: 'Sample Storybook component',
        openButtonLabel: 'Open Storybook preview in a new tab',
      };
      const __namedExportsOrder = ['FigmaEmbed', 'StorybookEmbed'];
    },
    './components/icon-button/lib/icon-button/icon-button.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { h: () => IconButton });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        use_space_styles = __webpack_require__(
          './hooks/use-space-styles/lib/use-space-styles.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
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
        }),
        IconButton = ({ className, label, iconName, onClick, color = 'primary' }) => {
          const classes = useIconButtonStyles(),
            space = (0, use_space_styles.z)();
          return react.createElement(
            'button',
            {
              onClick,
              'aria-label': label,
              className: (0, mergeClasses_esm.z)(
                classes.root,
                classes[color],
                space.p2,
                className,
              ),
            },
            react.createElement(icon.J, { iconName }),
          );
        };
      IconButton.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'IconButton',
        props: {
          color: { defaultValue: { value: "'primary'", computed: !1 }, required: !1 },
        },
      };
    },
    './components/logo/lib/logo/logo.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { T: () => Logo });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js');
      const Figma = ({ className, label = 'Figma logo' }) => {
        const a11yId = `FigmaLogoSVG--${(0, react.useId)()}`;
        return react.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 200 300',
            className,
            role: 'img',
            'aria-labelledby': a11yId,
          },
          react.createElement('title', { id: a11yId }, label),
          react.createElement('path', {
            fill: '#0acf83',
            d: 'M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z',
          }),
          react.createElement('path', {
            fill: '#a259ff',
            d: 'M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z',
          }),
          react.createElement('path', {
            fill: '#f24e1e',
            d: 'M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z',
          }),
          react.createElement('path', {
            fill: '#ff7262',
            d: 'M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z',
          }),
          react.createElement('path', {
            fill: '#1abcfe',
            d: 'M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z',
          }),
        );
      };
      Figma.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Figma',
        props: {
          label: { defaultValue: { value: "'Figma logo'", computed: !1 }, required: !1 },
        },
      };
      const Storybook = ({ className, label = 'Storybook logo' }) => {
        const a11yId = `FigmaLogoSVG--${(0, react.useId)()}`,
          path1Id = `FigmaLogoSVG-path1-${(0, react.useId)()}`,
          mask2Id = `FigmaLogoSVG-mask2-${(0, react.useId)()}`;
        return react.createElement(
          'svg',
          {
            className,
            role: 'img',
            'aria-labelledby': a11yId,
            viewBox: '0 0 256 319',
            preserveAspectRatio: 'xMidYMid',
          },
          react.createElement('title', { id: a11yId }, label),
          react.createElement(
            'defs',
            null,
            react.createElement('path', {
              d: 'M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z',
              id: path1Id,
            }),
          ),
          react.createElement(
            'g',
            null,
            react.createElement(
              'mask',
              { id: mask2Id, fill: 'white' },
              react.createElement('use', { xlinkHref: `#${path1Id}` }),
            ),
            react.createElement('use', {
              fill: '#FF4785',
              fillRule: 'nonzero',
              xlinkHref: `#${path1Id}`,
            }),
            react.createElement('path', {
              d: 'M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z',
              fill: '#FFFFFF',
              fillRule: 'nonzero',
              mask: `url(#${mask2Id})`,
            }),
          ),
        );
      };
      Storybook.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Storybook',
        props: {
          label: {
            defaultValue: { value: "'Storybook logo'", computed: !1 },
            required: !1,
          },
        },
      };
      const logos = { figma: Figma, storybook: Storybook };
      var tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        );
      const sizeClasses = {
          small: { height: tokens.T.spacingVerticalXL },
          medium: { height: tokens.T.spacingVerticalXXL },
          large: { height: tokens.T.spacingVerticalXXXL },
          fill: { height: '100%' },
        },
        useLogoStyles = (0, makeStyles_esm.Z)({
          root: { width: 'auto' },
          inline: { display: 'inline-block', verticalAlign: 'middle' },
          ...sizeClasses,
        }),
        Logo = ({ className, logoName, size = 'fill', isInline, label }) => {
          const classes = useLogoStyles(),
            LogoSVG = (0, react.useMemo)(() => logos[logoName], [logoName]),
            rootClasses = (0, mergeClasses_esm.z)(
              classes[size],
              isInline && classes.inline,
              className,
            );
          return react.createElement(LogoSVG, { className: rootClasses, label });
        };
      Logo.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Logo',
        props: {
          size: { defaultValue: { value: "'fill'", computed: !1 }, required: !1 },
        },
      };
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
