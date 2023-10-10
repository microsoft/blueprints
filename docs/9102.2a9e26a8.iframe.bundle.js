'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [9102],
  {
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
    './components/main-navigation/lib/main-navigation-link/main-navigation-link.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { G: () => MainNavigationLink });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js');
      const useMainNavigationLinkStyles = (0, makeStyles_esm.Z)({
          root: {
            ...index_esm.q5.padding(
              0,
              tokens.T.spacingHorizontalM,
              0,
              tokens.T.spacingHorizontalXXXL,
            ),
            alignItems: 'center',
            backgroundColor: 'transparent',
            color: tokens.T.colorNeutralForeground1,
            cursor: 'pointer',
            display: 'grid',
            fontSize: tokens.T.fontSizeBase300,
            fontWeight: tokens.T.fontWeightRegular,
            height: tokens.T.spacingHorizontalXXXL,
            lineHeight: tokens.T.lineHeightBase300,
            marginBottom: tokens.T.spacingHorizontalS,
            marginTop: tokens.T.spacingHorizontalS,
            paddingLeft: tokens.T.spacingHorizontalXXL,
            textAlign: 'left',
            textDecorationLine: 'none',
            transitionDuration: tokens.T.durationNormal,
            transitionProperty: 'all',
            transitionTimingFunction: tokens.T.curveEasyEase,
            width: '100%',
            ...index_esm.q5.borderRadius('0.5rem'),
            ...index_esm.q5.borderStyle('none'),
            ...index_esm.q5.borderColor('transparent'),
            ...index_esm.q5.borderStyle('none'),
            ...index_esm.q5.borderColor('transparent'),
            ':hover': {
              backgroundColor: tokens.T.colorBrandBackground2,
              color: tokens.T.colorBrandForeground2,
              ':focus': { outlineColor: tokens.T.colorBrandForeground2 },
            },
          },
          active: {
            backgroundColor: tokens.T.colorBrandBackground2,
            '& a': { color: tokens.T.colorBrandForeground2 },
          },
        }),
        MainNavigationLink = ({
          as: Link,
          children,
          elementProps,
          isActive,
          className,
        }) => {
          const classes = useMainNavigationLinkStyles();
          return react.createElement(
            Link,
            {
              className: (0, mergeClasses_esm.z)(
                classes.root,
                isActive && classes.active,
                className,
              ),
              ...elementProps,
            },
            children,
          );
        };
      MainNavigationLink.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MainNavigationLink',
      };
    },
    './components/main-navigation/lib/main-navigation-sub/main-navigation-sub.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { S: () => MainNavigationSub });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        AnimatePresence = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js');
      const useMainNavigationSubStyles = (0, makeStyles_esm.Z)({
        button: {
          ...index_esm.q5.padding(
            0,
            tokens.T.spacingHorizontalM,
            0,
            tokens.T.spacingHorizontalS,
          ),
          marginBottom: tokens.T.spacingHorizontalS,
          color: tokens.T.colorNeutralForeground1,
          fontWeight: tokens.T.fontWeightSemibold,
          fontSize: tokens.T.fontSizeBase300,
          lineHeight: tokens.T.lineHeightBase300,
          textAlign: 'left',
          display: 'grid',
          gridTemplateColumns: `${tokens.T.spacingHorizontalL} auto`,
          columnGap: tokens.T.spacingHorizontalS,
          alignItems: 'center',
          width: '100%',
          height: tokens.T.spacingHorizontalXXXL,
          transitionProperty: 'all',
          transitionDuration: tokens.T.durationNormal,
          transitionTimingFunction: tokens.T.curveEasyEase,
          backgroundColor: 'transparent',
          cursor: 'pointer',
          ...index_esm.q5.borderStyle('none'),
          ...index_esm.q5.borderColor('transparent'),
          ...index_esm.q5.borderRadius('0.5rem'),
          ':hover': {
            color: tokens.T.colorBrandForeground2,
            backgroundColor: tokens.T.colorBrandBackground2,
            '& svg': { color: tokens.T.colorBrandForeground2 },
            ':focus': { outlineColor: tokens.T.colorBrandForeground2 },
          },
          '&[data-state="open"]': { '& svg': { transform: 'rotate(90deg)' } },
        },
        subList: { paddingLeft: tokens.T.spacingHorizontalXXL },
        toggle: {
          transitionProperty: 'transform',
          transitionDuration: tokens.T.durationNormal,
          transitionTimingFunction: tokens.T.curveEasyEase,
        },
        toggleExpanded: { transform: 'rotate(90deg)' },
        toggleIdle: { transform: 'rotate(0deg)' },
      });
      var motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/dom/motion.mjs',
        ),
        use_reduced_motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs',
        );
      const slideVariants = ({ shouldReduceMotion }) => ({
          expanded: {
            height: 'auto',
            transition: { ease: 'easeOut', duration: shouldReduceMotion ? 0 : 0.2 },
          },
          collapsed: {
            height: 0,
            transition: {
              delay: shouldReduceMotion ? 0 : 0.075,
              ease: 'easeOut',
              duration: shouldReduceMotion ? 0 : 0.2,
            },
          },
        }),
        SlideMotion = ({ children, initial, a11yLabelId, a11yContentId, className }) =>
          react.createElement(
            motion.E.section,
            {
              initial,
              animate: 'expanded',
              exit: 'collapsed',
              variants: slideVariants({
                shouldReduceMotion: (0, use_reduced_motion.J)(),
              }),
              className,
              id: a11yContentId,
              'aria-labelledby': a11yLabelId,
              role: 'region',
            },
            children,
          ),
        fadeVariants = ({ shouldReduceMotion }) => ({
          expanded: {
            opacity: 1,
            top: '0',
            transition: {
              delay: shouldReduceMotion ? 0 : 0.125,
              ease: 'easeOut',
              duration: shouldReduceMotion ? 0 : 0.15,
            },
          },
          collapsed: {
            opacity: 0,
            top: '-4px',
            transition: { ease: 'easeOut', duration: shouldReduceMotion ? 0 : 0.15 },
          },
        }),
        FadeMotion = ({ children, initial }) =>
          react.createElement(
            motion.E.div,
            {
              style: { position: 'relative' },
              initial,
              animate: 'expanded',
              exit: 'collapsed',
              variants: fadeVariants({ shouldReduceMotion: (0, use_reduced_motion.J)() }),
            },
            children,
          );
      (SlideMotion.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'SlideMotion',
      }),
        (FadeMotion.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'FadeMotion',
        });
      const MainNavigationSub = ({
        className,
        children,
        title,
        initial = 'collapsed',
      }) => {
        const [isExpanded, setIsExpanded] = (0, react.useState)(!1),
          a11yLabelId = (0, react.useId)(),
          a11yContentId = (0, react.useId)(),
          classes = useMainNavigationSubStyles();
        return react.createElement(
          'div',
          { className },
          react.createElement(
            'button',
            {
              className: classes.button,
              id: a11yLabelId,
              'aria-controls': a11yContentId,
              'aria-expanded': isExpanded,
              onClick: () => setIsExpanded(!isExpanded),
            },
            react.createElement(icon.J, {
              iconName: 'chevron-right',
              color: 'tertiary',
              className: (0, mergeClasses_esm.z)(
                classes.toggle,
                isExpanded ? classes.toggleExpanded : classes.toggleIdle,
              ),
            }),
            title,
          ),
          react.createElement(
            AnimatePresence.M,
            { initial: !1 },
            isExpanded &&
              react.createElement(
                SlideMotion,
                { initial, a11yContentId, a11yLabelId },
                react.createElement(
                  FadeMotion,
                  { initial },
                  react.createElement('div', { className: classes.subList }, children),
                ),
              ),
          ),
        );
      };
      MainNavigationSub.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MainNavigationSub',
        props: {
          initial: { defaultValue: { value: "'collapsed'", computed: !1 }, required: !1 },
        },
      };
    },
    './components/main-navigation/lib/main-navigation/main-navigation.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { o: () => MainNavigation });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js',
      );
      const MainNavigation = ({ className, children }) =>
        react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', { className }, children);
      MainNavigation.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MainNavigation',
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
    './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { M: () => AnimatePresence });
      var react = __webpack_require__('./node_modules/react/index.js'),
        frameloop = __webpack_require__(
          './node_modules/framer-motion/dist/es/frameloop/index.mjs',
        ),
        use_isomorphic_effect = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs',
        );
      function useIsMounted() {
        const isMounted = (0, react.useRef)(!1);
        return (
          (0, use_isomorphic_effect.L)(
            () => (
              (isMounted.current = !0),
              () => {
                isMounted.current = !1;
              }
            ),
            [],
          ),
          isMounted
        );
      }
      var PresenceContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/PresenceContext.mjs',
        ),
        use_constant = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-constant.mjs',
        );
      class PopChildMeasure extends react.Component {
        getSnapshotBeforeUpdate(prevProps) {
          const element = this.props.childRef.current;
          if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            (size.height = element.offsetHeight || 0),
              (size.width = element.offsetWidth || 0),
              (size.top = element.offsetTop),
              (size.left = element.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function PopChild({ children, isPresent }) {
        const id = (0, react.useId)(),
          ref = (0, react.useRef)(null),
          size = (0, react.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, react.useInsertionEffect)(() => {
            const { width, height, top, left } = size.current;
            if (isPresent || !ref.current || !width || !height) return;
            ref.current.dataset.motionPopId = id;
            const style = document.createElement('style');
            return (
              document.head.appendChild(style),
              style.sheet &&
                style.sheet.insertRule(
                  `\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `,
                ),
              () => {
                document.head.removeChild(style);
              }
            );
          }, [isPresent]),
          react.createElement(
            PopChildMeasure,
            { isPresent, childRef: ref, sizeRef: size },
            react.cloneElement(children, { ref }),
          )
        );
      }
      const PresenceChild = ({
        children,
        initial,
        isPresent,
        onExitComplete,
        custom,
        presenceAffectsLayout,
        mode,
      }) => {
        const presenceChildren = (0, use_constant.h)(newChildrenMap),
          id = (0, react.useId)(),
          context = (0, react.useMemo)(
            () => ({
              id,
              initial,
              isPresent,
              custom,
              onExitComplete: (childId) => {
                presenceChildren.set(childId, !0);
                for (const isComplete of presenceChildren.values())
                  if (!isComplete) return;
                onExitComplete && onExitComplete();
              },
              register: (childId) => (
                presenceChildren.set(childId, !1), () => presenceChildren.delete(childId)
              ),
            }),
            presenceAffectsLayout ? void 0 : [isPresent],
          );
        return (
          (0, react.useMemo)(() => {
            presenceChildren.forEach((_, key) => presenceChildren.set(key, !1));
          }, [isPresent]),
          react.useEffect(() => {
            !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
          }, [isPresent]),
          'popLayout' === mode &&
            (children = react.createElement(PopChild, { isPresent }, children)),
          react.createElement(PresenceContext.O.Provider, { value: context }, children)
        );
      };
      function newChildrenMap() {
        return new Map();
      }
      var LayoutGroupContext = __webpack_require__(
        './node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs',
      );
      var errors = __webpack_require__(
        './node_modules/framer-motion/dist/es/utils/errors.mjs',
      );
      const getChildKey = (child) => child.key || '';
      const AnimatePresence = ({
        children,
        custom,
        initial = !0,
        onExitComplete,
        exitBeforeEnter,
        presenceAffectsLayout = !0,
        mode = 'sync',
      }) => {
        (0, errors.k)(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
        const forceRender =
            (0, react.useContext)(LayoutGroupContext.p).forceRender ||
            (function useForceUpdate() {
              const isMounted = useIsMounted(),
                [forcedRenderCount, setForcedRenderCount] = (0, react.useState)(0),
                forceRender = (0, react.useCallback)(() => {
                  isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
                }, [forcedRenderCount]);
              return [
                (0, react.useCallback)(
                  () => frameloop.Wi.postRender(forceRender),
                  [forceRender],
                ),
                forcedRenderCount,
              ];
            })()[0],
          isMounted = useIsMounted(),
          filteredChildren = (function onlyElements(children) {
            const filtered = [];
            return (
              react.Children.forEach(children, (child) => {
                (0, react.isValidElement)(child) && filtered.push(child);
              }),
              filtered
            );
          })(children);
        let childrenToRender = filteredChildren;
        const exitingChildren = (0, react.useRef)(new Map()).current,
          presentChildren = (0, react.useRef)(childrenToRender),
          allChildren = (0, react.useRef)(new Map()).current,
          isInitialRender = (0, react.useRef)(!0);
        if (
          ((0, use_isomorphic_effect.L)(() => {
            (isInitialRender.current = !1),
              (function updateChildLookup(children, allChildren) {
                children.forEach((child) => {
                  const key = getChildKey(child);
                  allChildren.set(key, child);
                });
              })(filteredChildren, allChildren),
              (presentChildren.current = childrenToRender);
          }),
          (function useUnmountEffect(callback) {
            return (0, react.useEffect)(() => () => callback(), []);
          })(() => {
            (isInitialRender.current = !0), allChildren.clear(), exitingChildren.clear();
          }),
          isInitialRender.current)
        )
          return react.createElement(
            react.Fragment,
            null,
            childrenToRender.map((child) =>
              react.createElement(
                PresenceChild,
                {
                  key: getChildKey(child),
                  isPresent: !0,
                  initial: !!initial && void 0,
                  presenceAffectsLayout,
                  mode,
                },
                child,
              ),
            ),
          );
        childrenToRender = [...childrenToRender];
        const presentKeys = presentChildren.current.map(getChildKey),
          targetKeys = filteredChildren.map(getChildKey),
          numPresent = presentKeys.length;
        for (let i = 0; i < numPresent; i++) {
          const key = presentKeys[i];
          -1 !== targetKeys.indexOf(key) ||
            exitingChildren.has(key) ||
            exitingChildren.set(key, void 0);
        }
        return (
          'wait' === mode && exitingChildren.size && (childrenToRender = []),
          exitingChildren.forEach((component, key) => {
            if (-1 !== targetKeys.indexOf(key)) return;
            const child = allChildren.get(key);
            if (!child) return;
            const insertionIndex = presentKeys.indexOf(key);
            let exitingComponent = component;
            if (!exitingComponent) {
              const onExit = () => {
                allChildren.delete(key), exitingChildren.delete(key);
                const removeIndex = presentChildren.current.findIndex(
                  (presentChild) => presentChild.key === key,
                );
                if (
                  (presentChildren.current.splice(removeIndex, 1), !exitingChildren.size)
                ) {
                  if (
                    ((presentChildren.current = filteredChildren),
                    !1 === isMounted.current)
                  )
                    return;
                  forceRender(), onExitComplete && onExitComplete();
                }
              };
              (exitingComponent = react.createElement(
                PresenceChild,
                {
                  key: getChildKey(child),
                  isPresent: !1,
                  onExitComplete: onExit,
                  custom,
                  presenceAffectsLayout,
                  mode,
                },
                child,
              )),
                exitingChildren.set(key, exitingComponent);
            }
            childrenToRender.splice(insertionIndex, 0, exitingComponent);
          }),
          (childrenToRender = childrenToRender.map((child) => {
            const key = child.key;
            return exitingChildren.has(key)
              ? child
              : react.createElement(
                  PresenceChild,
                  { key: getChildKey(child), isPresent: !0, presenceAffectsLayout, mode },
                  child,
                );
          })),
          react.createElement(
            react.Fragment,
            null,
            exitingChildren.size
              ? childrenToRender
              : childrenToRender.map((child) => (0, react.cloneElement)(child)),
          )
        );
      };
    },
  },
]);
