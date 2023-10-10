'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [3798],
  {
    './node_modules/@fluentui/react-text/lib/components/Text/Text.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { x: () => Text });
      var react = __webpack_require__('./node_modules/react/index.js'),
        getNativeElementProps = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js',
        );
      var createElement = __webpack_require__(
          './node_modules/@fluentui/react-jsx-runtime/lib/createElement.js',
        ),
        getSlotsNext = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js',
        );
      var _styles_esm = __webpack_require__(
          './node_modules/@griffel/react/__styles.esm.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        );
      const textClassNames_root = 'fui-Text',
        useStyles = (0, _styles_esm.s)(
          {
            root: {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fkhj508',
              Bg96gwp: 'f1i3iumi',
              Bhrd7zp: 'figsok6',
              fsow6f: 'fpgzoln',
              mc9l5x: 'f1w7gpdv',
              Huce71: 'f6juhto',
              B68tc82: 'f1mtd64y',
              Bmxbyg5: 'f1y7q3j9',
              ygn44y: 'f2jf649',
            },
            nowrap: { Huce71: 'fz5stix', B68tc82: 'f1p9o1ba', Bmxbyg5: 'f1sil6mw' },
            truncate: { ygn44y: 'f1cmbuwj' },
            block: { mc9l5x: 'ftgm304' },
            italic: { B80ckks: 'f1j4dglz' },
            underline: { w71qe1: 'f13mvf36' },
            strikethrough: { w71qe1: 'fv5q2k7' },
            strikethroughUnderline: { w71qe1: 'f1drk4o6' },
            base100: { Be2twd7: 'f13mqy1h', Bg96gwp: 'fcpl73t' },
            base200: { Be2twd7: 'fy9rknc', Bg96gwp: 'fwrc4pm' },
            base400: { Be2twd7: 'fod5ikn', Bg96gwp: 'faaz57k' },
            base500: { Be2twd7: 'f1pp30po', Bg96gwp: 'f106mvju' },
            base600: { Be2twd7: 'f1x0m3f5', Bg96gwp: 'fb86gi6' },
            hero700: { Be2twd7: 'fojgt09', Bg96gwp: 'fcen8rp' },
            hero800: { Be2twd7: 'fccw675', Bg96gwp: 'f1ebx5kk' },
            hero900: { Be2twd7: 'f15afnhw', Bg96gwp: 'fr3w3wp' },
            hero1000: { Be2twd7: 'fpyltcb', Bg96gwp: 'f1ivgwrt' },
            monospace: { Bahqtrf: 'f1fedwem' },
            numeric: { Bahqtrf: 'f1uq0ln5' },
            weightMedium: { Bhrd7zp: 'fdj6btp' },
            weightSemibold: { Bhrd7zp: 'fl43uef' },
            weightBold: { Bhrd7zp: 'flh3ekv' },
            alignCenter: { fsow6f: 'f17mccla' },
            alignEnd: { fsow6f: 'f12ymhq5' },
            alignJustify: { fsow6f: 'f1j59e10' },
          },
          {
            d: [
              '.fk6fouc{font-family:var(--fontFamilyBase);}',
              '.fkhj508{font-size:var(--fontSizeBase300);}',
              '.f1i3iumi{line-height:var(--lineHeightBase300);}',
              '.figsok6{font-weight:var(--fontWeightRegular);}',
              '.fpgzoln{text-align:start;}',
              '.f1w7gpdv{display:inline;}',
              '.f6juhto{white-space:normal;}',
              '.f1mtd64y{overflow-x:visible;}',
              '.f1y7q3j9{overflow-y:visible;}',
              '.f2jf649{text-overflow:clip;}',
              '.fz5stix{white-space:nowrap;}',
              '.f1p9o1ba{overflow-x:hidden;}',
              '.f1sil6mw{overflow-y:hidden;}',
              '.f1cmbuwj{text-overflow:ellipsis;}',
              '.ftgm304{display:block;}',
              '.f1j4dglz{font-style:italic;}',
              '.f13mvf36{text-decoration-line:underline;}',
              '.fv5q2k7{text-decoration-line:line-through;}',
              '.f1drk4o6{text-decoration-line:line-through underline;}',
              '.f13mqy1h{font-size:var(--fontSizeBase100);}',
              '.fcpl73t{line-height:var(--lineHeightBase100);}',
              '.fy9rknc{font-size:var(--fontSizeBase200);}',
              '.fwrc4pm{line-height:var(--lineHeightBase200);}',
              '.fod5ikn{font-size:var(--fontSizeBase400);}',
              '.faaz57k{line-height:var(--lineHeightBase400);}',
              '.f1pp30po{font-size:var(--fontSizeBase500);}',
              '.f106mvju{line-height:var(--lineHeightBase500);}',
              '.f1x0m3f5{font-size:var(--fontSizeBase600);}',
              '.fb86gi6{line-height:var(--lineHeightBase600);}',
              '.fojgt09{font-size:var(--fontSizeHero700);}',
              '.fcen8rp{line-height:var(--lineHeightHero700);}',
              '.fccw675{font-size:var(--fontSizeHero800);}',
              '.f1ebx5kk{line-height:var(--lineHeightHero800);}',
              '.f15afnhw{font-size:var(--fontSizeHero900);}',
              '.fr3w3wp{line-height:var(--lineHeightHero900);}',
              '.fpyltcb{font-size:var(--fontSizeHero1000);}',
              '.f1ivgwrt{line-height:var(--lineHeightHero1000);}',
              '.f1fedwem{font-family:var(--fontFamilyMonospace);}',
              '.f1uq0ln5{font-family:var(--fontFamilyNumeric);}',
              '.fdj6btp{font-weight:var(--fontWeightMedium);}',
              '.fl43uef{font-weight:var(--fontWeightSemibold);}',
              '.flh3ekv{font-weight:var(--fontWeightBold);}',
              '.f17mccla{text-align:center;}',
              '.f12ymhq5{text-align:end;}',
              '.f1j59e10{text-align:justify;}',
            ],
          },
        );
      var CustomStyleHooksContext = __webpack_require__(
        './node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js',
      );
      const Text = react.forwardRef((props, ref) => {
        const state = ((props, ref) => {
          const {
            wrap,
            truncate,
            block,
            italic,
            underline,
            strikethrough,
            size,
            font,
            weight,
            align,
          } = props;
          var _props_as;
          const as =
            null !== (_props_as = props.as) && void 0 !== _props_as ? _props_as : 'span';
          return {
            align: null != align ? align : 'start',
            block: null != block && block,
            font: null != font ? font : 'base',
            italic: null != italic && italic,
            size: null != size ? size : 300,
            strikethrough: null != strikethrough && strikethrough,
            truncate: null != truncate && truncate,
            underline: null != underline && underline,
            weight: null != weight ? weight : 'regular',
            wrap: null == wrap || wrap,
            components: { root: 'span' },
            root: (0, getNativeElementProps.n)(as, { ref, ...props, as }),
          };
        })(props, ref);
        return (
          ((state) => {
            const styles = useStyles();
            state.root.className = (0, mergeClasses_esm.z)(
              textClassNames_root,
              styles.root,
              !1 === state.wrap && styles.nowrap,
              state.truncate && styles.truncate,
              state.block && styles.block,
              state.italic && styles.italic,
              state.underline && styles.underline,
              state.strikethrough && styles.strikethrough,
              state.underline && state.strikethrough && styles.strikethroughUnderline,
              100 === state.size && styles.base100,
              200 === state.size && styles.base200,
              400 === state.size && styles.base400,
              500 === state.size && styles.base500,
              600 === state.size && styles.base600,
              700 === state.size && styles.hero700,
              800 === state.size && styles.hero800,
              900 === state.size && styles.hero900,
              1e3 === state.size && styles.hero1000,
              'monospace' === state.font && styles.monospace,
              'numeric' === state.font && styles.numeric,
              'medium' === state.weight && styles.weightMedium,
              'semibold' === state.weight && styles.weightSemibold,
              'bold' === state.weight && styles.weightBold,
              'center' === state.align && styles.alignCenter,
              'end' === state.align && styles.alignEnd,
              'justify' === state.align && styles.alignJustify,
              state.root.className,
            );
          })(state),
          (0, CustomStyleHooksContext.oj)('useTextStyles_unstable')(state),
          ((state) => {
            const { slots, slotProps } = (0, getSlotsNext.D)(state);
            return (0, createElement.a)(slots.root, slotProps.root);
          })(state)
        );
      });
      Text.displayName = 'Text';
    },
    './node_modules/@griffel/react/__styles.esm.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { s: () => __styles });
      var _griffel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@griffel/core/__styles.esm.js',
        ),
        _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@griffel/react/RendererContext.esm.js',
        ),
        _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@griffel/react/TextDirectionContext.esm.js',
        );
      function __styles(classesMapBySlot, cssRules) {
        const getStyles = (0, _griffel_core__WEBPACK_IMPORTED_MODULE_0__.s)(
          classesMapBySlot,
          cssRules,
        );
        return function useClasses() {
          const dir = (0, _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__.s)(),
            renderer = (0, _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)();
          return getStyles({ dir, renderer });
        };
      }
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
    './components/shell/__dev__/crown.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ImageOnly: () => ImageOnly,
          Simple: () => Simple,
          TabletLayout: () => TabletLayout,
          WithCustomLogoMarkElement: () => WithCustomLogoMarkElement,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => crown_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var decorators = __webpack_require__('./.storybook/decorators/index.ts'),
        crown = __webpack_require__('./components/shell/src/crown/crown.tsx'),
        fluentui_logo = __webpack_require__(
          './components/shell/__dev__/fluentui-logo.svg',
        );
      const logo_namespaceObject =
        __webpack_require__.p + 'static/media/logo.2527fa69.svg';
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const crown_stories = {
          title: 'Layout/Crown',
          component: crown._,
          argTypes: {
            onClick: { action: 'clicked' },
            onLogoClick: { action: 'clicked' },
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)(decorators.z, {
                children: (0, jsx_runtime.jsx)('div', {
                  style: { maxWidth: '360px' },
                  children: (0, jsx_runtime.jsx)(Story, {}),
                }),
              }),
          ],
        },
        Template = (args) => (0, jsx_runtime.jsx)(crown._, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = {
        logoMarkAlt: 'Arbutus logo',
        logoMarkSrc: fluentui_logo,
        logoText: 'Arbutus',
        isTabletLayout: !1,
      };
      const TabletLayout = Template.bind({});
      TabletLayout.args = {
        logoMarkAlt: 'Arbutus logo',
        logoMarkSrc: logo_namespaceObject,
        logoText: 'Arbutus',
        isTabletLayout: !0,
      };
      const ImageOnly = Template.bind({});
      ImageOnly.args = {
        logoMarkAlt: 'Fluent logo',
        logoMarkSrc: fluentui_logo,
        isTabletLayout: !1,
      };
      const WithCustomLogoMarkElement = Template.bind({});
      WithCustomLogoMarkElement.args = {
        logoAs: ({ title }) =>
          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)('svg', {
                width: '20',
                height: '20',
                viewBox: '0 0 20 20',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                style: { display: 'inline-block' },
                children: (0, jsx_runtime.jsx)('g', {
                  children: (0, jsx_runtime.jsx)('path', {
                    d: 'M10 0C10.4142 0 10.75 0.33579 10.75 0.75V2.25C10.75 2.66421 10.4142 3 10 3C9.5858 3 9.25 2.66421 9.25 2.25V0.75C9.25 0.33579 9.5858 0 10 0ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM19.25 10.75C19.6642 10.75 20 10.4142 20 10C20 9.5858 19.6642 9.25 19.25 9.25H17.75C17.3358 9.25 17 9.5858 17 10C17 10.4142 17.3358 10.75 17.75 10.75H19.25ZM10 17C10.4142 17 10.75 17.3358 10.75 17.75V19.25C10.75 19.6642 10.4142 20 10 20C9.5858 20 9.25 19.6642 9.25 19.25V17.75C9.25 17.3358 9.5858 17 10 17ZM2.25 10.75C2.66421 10.75 3 10.4142 3 10C3 9.5858 2.66421 9.25 2.25 9.25H0.75C0.33579 9.25 0 9.5858 0 10C0 10.4142 0.33579 10.75 0.75 10.75H2.25ZM2.21967 2.22004C2.51256 1.92715 2.98744 1.92715 3.28033 2.22004L4.78033 3.72004C5.07322 4.01294 5.07322 4.48781 4.78033 4.7807C4.48744 5.0736 4.01256 5.0736 3.71967 4.7807L2.21967 3.2807C1.92678 2.98781 1.92678 2.51294 2.21967 2.22004ZM3.28033 17.7807C2.98744 18.0736 2.51256 18.0736 2.21967 17.7807C1.92678 17.4878 1.92678 17.0129 2.21967 16.72L3.71967 15.22C4.01256 14.9271 4.48744 14.9271 4.78033 15.22C5.07322 15.5129 5.07322 15.9878 4.78033 16.2807L3.28033 17.7807ZM17.7803 2.22004C17.4874 1.92715 17.0126 1.92715 16.7197 2.22004L15.2197 3.72004C14.9268 4.01294 14.9268 4.48781 15.2197 4.7807C15.5126 5.0736 15.9874 5.0736 16.2803 4.7807L17.7803 3.2807C18.0732 2.98781 18.0732 2.51294 17.7803 2.22004ZM16.7197 17.7807C17.0126 18.0736 17.4874 18.0736 17.7803 17.7807C18.0732 17.4878 18.0732 17.0129 17.7803 16.72L16.2803 15.22C15.9874 14.9271 15.5126 14.9271 15.2197 15.22C14.9268 15.5129 14.9268 15.9878 15.2197 16.2807L16.7197 17.7807Z',
                    fill: '#212121',
                  }),
                }),
              }),
              (0, jsx_runtime.jsx)('p', { children: title }),
            ],
          }),
        logoProps: { title: 'Custom logo mark' },
      };
      const __namedExportsOrder = [
        'Simple',
        'TabletLayout',
        'ImageOnly',
        'WithCustomLogoMarkElement',
      ];
    },
    './components/shell/src/crown/crown.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { _: () => Crown });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        icon_button = __webpack_require__(
          './components/icon-button/lib/icon-button/icon-button.js',
        ),
        text_text = __webpack_require__('./components/text/lib/text/text.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        context = __webpack_require__('./components/tray/lib/context.js');
      var tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js');
      const useCrownStyles = (0, makeStyles_esm.Z)({
        root: {
          width: '100%',
          display: 'inline-flex',
          alignItems: 'center',
          minHeight: '60px',
          columnGap: tokens.T.spacingHorizontalM,
        },
        image: { width: 'auto', height: tokens.T.spacingHorizontalXXXL },
        logo: {
          display: 'inline-flex',
          alignItems: 'center',
          height: '100%',
          columnGap: tokens.T.spacingHorizontalM,
        },
        interactive: {
          backgroundColor: 'transparent',
          borderLeftWidth: 'none',
          borderRightWidth: 'none',
          borderTopWidth: 'none',
          borderBottomWidth: 'none',
          borderLeftColor: 'none',
          borderRightColor: 'none',
          borderTopColor: 'none',
          borderBottomColor: 'none',
          borderLeftStyle: 'none',
          borderRightStyle: 'none',
          borderTopStyle: 'none',
          borderBottomStyle: 'none',
          cursor: 'pointer',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-1px',
            left: '-1px',
            height: 'calc(100% + 2px)',
            width: 'calc(100% + 2px)',
            boxShadow: '0 0 4px 1px transparent',
            transitionProperty: 'box-shadow',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            ...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium),
          },
          '&:focus': {
            outlineColor: 'initial',
            outlineStyle: 'none',
            outlineWidth: 'initial',
            position: 'relative',
          },
          '&:focus-visible': {
            outlineStyle: 'none',
            '&::after': { boxShadow: `0 0 4px 2px ${tokens.T.colorBrandForeground1}` },
          },
        },
      });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Logo = ({ onClick, children }) => {
          const classes = useCrownStyles();
          return onClick
            ? (0, jsx_runtime.jsx)('button', {
                className: (0, mergeClasses_esm.z)(classes.logo, classes.interactive),
                onClick,
                children,
              })
            : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children });
        },
        Crown = ({
          className,
          onClick,
          closeTrayLabel = 'Close navigation',
          isTabletLayout,
          logoMarkAlt,
          logoMarkSrc,
          logoAs: CustomLogoMark,
          logoProps,
          logoText,
          openTrayLabel = 'Open navigation',
        }) => {
          const { isOpen, setIsOpen } = (0, react.useContext)(context.Se),
            classes = useCrownStyles();
          return (0, jsx_runtime.jsxs)('div', {
            className: (0, mergeClasses_esm.z)(classes.root, className),
            children: [
              isTabletLayout &&
                (0, jsx_runtime.jsx)(icon_button.h, {
                  iconName: isOpen ? 'slide-in' : 'slide-out',
                  label: isOpen ? closeTrayLabel : openTrayLabel,
                  onClick: isOpen ? () => setIsOpen(!1) : () => setIsOpen(!0),
                  'aria-hidden': !0,
                }),
              (0, jsx_runtime.jsxs)(Logo, {
                onClick,
                children: [
                  CustomLogoMark &&
                    (0, jsx_runtime.jsx)(CustomLogoMark, { ...logoProps }),
                  logoMarkSrc &&
                    (0, jsx_runtime.jsx)('img', {
                      src: logoMarkSrc,
                      alt: logoMarkAlt,
                      className: classes.image,
                    }),
                  logoText &&
                    (0, jsx_runtime.jsx)(text_text.x, {
                      as: 'h1',
                      variant: 'subtitle',
                      children: logoText,
                    }),
                ],
              }),
            ],
          });
        };
      Crown.displayName = 'Crown';
      try {
        (Crown.displayName = 'Crown'),
          (Crown.__docgenInfo = {
            description: '',
            displayName: 'Crown',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              logoMarkSrc: {
                defaultValue: null,
                description: 'Logo mark src.',
                name: 'logoMarkSrc',
                required: !1,
                type: { name: 'string' },
              },
              logoMarkAlt: {
                defaultValue: null,
                description: 'Logo mark alt.',
                name: 'logoMarkAlt',
                required: !1,
                type: { name: 'string' },
              },
              logoAs: {
                defaultValue: null,
                description: 'Alternative logo element.',
                name: 'logoAs',
                required: !1,
                type: { name: 'ElementType<any>' },
              },
              logoProps: {
                defaultValue: null,
                description: 'Props to be passed to the alternative logo element.',
                name: 'logoProps',
                required: !1,
                type: { name: 'Record<string, unknown>' },
              },
              logoText: {
                defaultValue: null,
                description: 'Logo text.',
                name: 'logoText',
                required: !1,
                type: { name: 'string' },
              },
              isTabletLayout: {
                defaultValue: null,
                description: 'Adds tablet tray controls.',
                name: 'isTabletLayout',
                required: !1,
                type: { name: 'boolean' },
              },
              closeTrayLabel: {
                defaultValue: { value: 'Close navigation' },
                description: 'Accessible text for the close tray action.',
                name: 'closeTrayLabel',
                required: !1,
                type: { name: 'string' },
              },
              openTrayLabel: {
                defaultValue: { value: 'Open navigation' },
                description: 'Accessible text for the open tray action.',
                name: 'openTrayLabel',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: 'Click handler.',
                name: 'onClick',
                required: !1,
                type: {
                  name: '(event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/shell/src/crown/crown.tsx#Crown'] = {
              docgenInfo: Crown.__docgenInfo,
              name: 'Crown',
              path: 'components/shell/src/crown/crown.tsx#Crown',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
    './components/tray/lib/context.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        QH: () => TrayProvider,
        Se: () => TrayContext,
        i: () => TrayConsumer,
      });
      const TrayContext = (0,
        __webpack_require__('./node_modules/react/index.js').createContext)({
          isOpen: !1,
          setIsOpen: (isOpen) => {},
        }),
        TrayProvider = TrayContext.Provider,
        TrayConsumer = TrayContext.Consumer;
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
    './components/shell/__dev__/fluentui-logo.svg': (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      module.exports = __webpack_require__.p + 'static/media/fluentui-logo.2c059e02.svg';
    },
  },
]);
