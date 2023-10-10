'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [5708],
  {
    './node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => is_prop_valid_browser_esm });
      var reactPropsRegex =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      const is_prop_valid_browser_esm = (function memoize(fn) {
        var cache = {};
        return function (arg) {
          return void 0 === cache[arg] && (cache[arg] = fn(arg)), cache[arg];
        };
      })(function (prop) {
        return (
          reactPropsRegex.test(prop) ||
          (111 === prop.charCodeAt(0) &&
            110 === prop.charCodeAt(1) &&
            prop.charCodeAt(2) < 91)
        );
      });
    },
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
    './node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { p: () => LayoutGroupContext });
      const LayoutGroupContext = (0,
      __webpack_require__('./node_modules/react/index.js').createContext)({});
    },
    './node_modules/framer-motion/dist/es/context/PresenceContext.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { O: () => PresenceContext });
      const PresenceContext = (0,
      __webpack_require__('./node_modules/react/index.js').createContext)(null);
    },
    './node_modules/framer-motion/dist/es/frameloop/data.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { frameData: () => frameData });
      const frameData = { delta: 0, timestamp: 0, isProcessing: !1 };
    },
    './node_modules/framer-motion/dist/es/frameloop/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Pn: () => cancelFrame,
        Wi: () => frameloop_frame,
        S6: () => steps,
      });
      var data = __webpack_require__(
        './node_modules/framer-motion/dist/es/frameloop/data.mjs',
      );
      let useDefaultElapsed = !0,
        runNextFrame = !1;
      const stepsOrder = ['read', 'update', 'preRender', 'render', 'postRender'],
        steps = stepsOrder.reduce(
          (acc, key) => (
            (acc[key] = (function createRenderStep(runNextFrame) {
              let toRun = [],
                toRunNextFrame = [],
                numToRun = 0,
                isProcessing = !1,
                flushNextFrame = !1;
              const toKeepAlive = new WeakSet(),
                step = {
                  schedule: (callback, keepAlive = !1, immediate = !1) => {
                    const addToCurrentFrame = immediate && isProcessing,
                      buffer = addToCurrentFrame ? toRun : toRunNextFrame;
                    return (
                      keepAlive && toKeepAlive.add(callback),
                      -1 === buffer.indexOf(callback) &&
                        (buffer.push(callback),
                        addToCurrentFrame && isProcessing && (numToRun = toRun.length)),
                      callback
                    );
                  },
                  cancel: (callback) => {
                    const index = toRunNextFrame.indexOf(callback);
                    -1 !== index && toRunNextFrame.splice(index, 1),
                      toKeepAlive.delete(callback);
                  },
                  process: (frameData) => {
                    if (isProcessing) flushNextFrame = !0;
                    else {
                      if (
                        ((isProcessing = !0),
                        ([toRun, toRunNextFrame] = [toRunNextFrame, toRun]),
                        (toRunNextFrame.length = 0),
                        (numToRun = toRun.length),
                        numToRun)
                      )
                        for (let i = 0; i < numToRun; i++) {
                          const callback = toRun[i];
                          callback(frameData),
                            toKeepAlive.has(callback) &&
                              (step.schedule(callback), runNextFrame());
                        }
                      (isProcessing = !1),
                        flushNextFrame &&
                          ((flushNextFrame = !1), step.process(frameData));
                    }
                  },
                };
              return step;
            })(() => (runNextFrame = !0))),
            acc
          ),
          {},
        ),
        processStep = (stepId) => steps[stepId].process(data.frameData),
        processFrame = (timestamp) => {
          (runNextFrame = !1),
            (data.frameData.delta = useDefaultElapsed
              ? 1e3 / 60
              : Math.max(Math.min(timestamp - data.frameData.timestamp, 40), 1)),
            (data.frameData.timestamp = timestamp),
            (data.frameData.isProcessing = !0),
            stepsOrder.forEach(processStep),
            (data.frameData.isProcessing = !1),
            runNextFrame &&
              ((useDefaultElapsed = !1), requestAnimationFrame(processFrame));
        },
        frameloop_frame = stepsOrder.reduce((acc, key) => {
          const step = steps[key];
          return (
            (acc[key] = (process, keepAlive = !1, immediate = !1) => (
              runNextFrame ||
                ((runNextFrame = !0),
                (useDefaultElapsed = !0),
                data.frameData.isProcessing || requestAnimationFrame(processFrame)),
              step.schedule(process, keepAlive, immediate)
            )),
            acc
          );
        }, {});
      function cancelFrame(process) {
        stepsOrder.forEach((key) => steps[key].cancel(process));
      }
    },
    './node_modules/framer-motion/dist/es/render/dom/motion.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { E: () => motion });
      var react = __webpack_require__('./node_modules/react/index.js');
      const MotionConfigContext = (0, react.createContext)({
          transformPagePoint: (p) => p,
          isStatic: !1,
          reducedMotion: 'never',
        }),
        MotionContext = (0, react.createContext)({});
      var context_PresenceContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/PresenceContext.mjs',
        ),
        use_isomorphic_effect = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs',
        );
      const LazyContext = (0, react.createContext)({ strict: !1 });
      function isRefObject(ref) {
        return (
          'object' == typeof ref && Object.prototype.hasOwnProperty.call(ref, 'current')
        );
      }
      function isVariantLabel(v) {
        return 'string' == typeof v || Array.isArray(v);
      }
      function isAnimationControls(v) {
        return 'object' == typeof v && 'function' == typeof v.start;
      }
      const variantPriorityOrder = [
          'animate',
          'whileInView',
          'whileFocus',
          'whileHover',
          'whileTap',
          'whileDrag',
          'exit',
        ],
        variantProps = ['initial', ...variantPriorityOrder];
      function isControllingVariants(props) {
        return (
          isAnimationControls(props.animate) ||
          variantProps.some((name) => isVariantLabel(props[name]))
        );
      }
      function isVariantNode(props) {
        return Boolean(isControllingVariants(props) || props.variants);
      }
      function useCreateMotionContext(props) {
        const { initial, animate } = (function getCurrentTreeVariants(props, context) {
          if (isControllingVariants(props)) {
            const { initial, animate } = props;
            return {
              initial: !1 === initial || isVariantLabel(initial) ? initial : void 0,
              animate: isVariantLabel(animate) ? animate : void 0,
            };
          }
          return !1 !== props.inherit ? context : {};
        })(props, (0, react.useContext)(MotionContext));
        return (0, react.useMemo)(
          () => ({ initial, animate }),
          [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)],
        );
      }
      function variantLabelsAsDependency(prop) {
        return Array.isArray(prop) ? prop.join(' ') : prop;
      }
      const featureProps = {
          animation: [
            'animate',
            'variants',
            'whileHover',
            'whileTap',
            'exit',
            'whileInView',
            'whileFocus',
            'whileDrag',
          ],
          exit: ['exit'],
          drag: ['drag', 'dragControls'],
          focus: ['whileFocus'],
          hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
          tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
          pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
          inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
          layout: ['layout', 'layoutId'],
        },
        featureDefinitions = {};
      for (const key in featureProps)
        featureDefinitions[key] = {
          isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
        };
      var is_browser = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/is-browser.mjs',
        ),
        LayoutGroupContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs',
        );
      const SwitchLayoutGroupContext = (0, react.createContext)({}),
        motionComponentSymbol = Symbol.for('motionComponentSymbol');
      function motion_createMotionComponent({
        preloadedFeatures,
        createVisualElement,
        useRender,
        useVisualState,
        Component,
      }) {
        preloadedFeatures &&
          (function loadFeatures(features) {
            for (const key in features)
              featureDefinitions[key] = { ...featureDefinitions[key], ...features[key] };
          })(preloadedFeatures);
        const ForwardRefComponent = (0, react.forwardRef)(function MotionComponent(
          props,
          externalRef,
        ) {
          let MeasureLayout;
          const configAndProps = {
              ...(0, react.useContext)(MotionConfigContext),
              ...props,
              layoutId: useLayoutId(props),
            },
            { isStatic } = configAndProps,
            context = useCreateMotionContext(props),
            visualState = useVisualState(props, isStatic);
          if (!isStatic && is_browser.j) {
            context.visualElement = (function useVisualElement(
              Component,
              visualState,
              props,
              createVisualElement,
            ) {
              const { visualElement: parent } = (0, react.useContext)(MotionContext),
                lazyContext = (0, react.useContext)(LazyContext),
                presenceContext = (0, react.useContext)(context_PresenceContext.O),
                reducedMotionConfig = (0, react.useContext)(
                  MotionConfigContext,
                ).reducedMotion,
                visualElementRef = (0, react.useRef)();
              (createVisualElement = createVisualElement || lazyContext.renderer),
                !visualElementRef.current &&
                  createVisualElement &&
                  (visualElementRef.current = createVisualElement(Component, {
                    visualState,
                    parent,
                    props,
                    presenceContext,
                    blockInitialAnimation:
                      !!presenceContext && !1 === presenceContext.initial,
                    reducedMotionConfig,
                  }));
              const visualElement = visualElementRef.current;
              return (
                (0, react.useInsertionEffect)(() => {
                  visualElement && visualElement.update(props, presenceContext);
                }),
                (0, use_isomorphic_effect.L)(() => {
                  visualElement && visualElement.render();
                }),
                (0, react.useEffect)(() => {
                  visualElement && visualElement.updateFeatures();
                }),
                (window.HandoffAppearAnimations
                  ? use_isomorphic_effect.L
                  : react.useEffect)(() => {
                  visualElement &&
                    visualElement.animationState &&
                    visualElement.animationState.animateChanges();
                }),
                visualElement
              );
            })(Component, visualState, configAndProps, createVisualElement);
            const initialLayoutGroupConfig = (0, react.useContext)(
                SwitchLayoutGroupContext,
              ),
              isStrict = (0, react.useContext)(LazyContext).strict;
            context.visualElement &&
              (MeasureLayout = context.visualElement.loadFeatures(
                configAndProps,
                isStrict,
                preloadedFeatures,
                initialLayoutGroupConfig,
              ));
          }
          return react.createElement(
            MotionContext.Provider,
            { value: context },
            MeasureLayout && context.visualElement
              ? react.createElement(MeasureLayout, {
                  visualElement: context.visualElement,
                  ...configAndProps,
                })
              : null,
            useRender(
              Component,
              props,
              (function useMotionRef(visualState, visualElement, externalRef) {
                return (0, react.useCallback)(
                  (instance) => {
                    instance && visualState.mount && visualState.mount(instance),
                      visualElement &&
                        (instance
                          ? visualElement.mount(instance)
                          : visualElement.unmount()),
                      externalRef &&
                        ('function' == typeof externalRef
                          ? externalRef(instance)
                          : isRefObject(externalRef) && (externalRef.current = instance));
                  },
                  [visualElement],
                );
              })(visualState, context.visualElement, externalRef),
              visualState,
              isStatic,
              context.visualElement,
            ),
          );
        });
        return (
          (ForwardRefComponent[motionComponentSymbol] = Component), ForwardRefComponent
        );
      }
      function useLayoutId({ layoutId }) {
        const layoutGroupId = (0, react.useContext)(LayoutGroupContext.p).id;
        return layoutGroupId && void 0 !== layoutId
          ? layoutGroupId + '-' + layoutId
          : layoutId;
      }
      function createMotionProxy(createConfig) {
        function custom(Component, customMotionComponentConfig = {}) {
          return motion_createMotionComponent(
            createConfig(Component, customMotionComponentConfig),
          );
        }
        if ('undefined' == typeof Proxy) return custom;
        const componentCache = new Map();
        return new Proxy(custom, {
          get: (_target, key) => (
            componentCache.has(key) || componentCache.set(key, custom(key)),
            componentCache.get(key)
          ),
        });
      }
      const lowercaseSVGElements = [
        'animate',
        'circle',
        'defs',
        'desc',
        'ellipse',
        'g',
        'image',
        'line',
        'filter',
        'marker',
        'mask',
        'metadata',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'rect',
        'stop',
        'switch',
        'symbol',
        'svg',
        'text',
        'tspan',
        'use',
        'view',
      ];
      function isSVGComponent(Component) {
        return (
          'string' == typeof Component &&
          !Component.includes('-') &&
          !!(lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component))
        );
      }
      const scaleCorrectors = {};
      const transformPropOrder = [
          'transformPerspective',
          'x',
          'y',
          'z',
          'translateX',
          'translateY',
          'translateZ',
          'scale',
          'scaleX',
          'scaleY',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skew',
          'skewX',
          'skewY',
        ],
        transformProps = new Set(transformPropOrder);
      function isForcedMotionValue(key, { layout, layoutId }) {
        return (
          transformProps.has(key) ||
          key.startsWith('origin') ||
          ((layout || void 0 !== layoutId) &&
            (!!scaleCorrectors[key] || 'opacity' === key))
        );
      }
      const isMotionValue = (value) => Boolean(value && value.getVelocity),
        translateAlias = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        },
        numTransforms = transformPropOrder.length;
      const checkStringStartsWith = (token) => (key) =>
          'string' == typeof key && key.startsWith(token),
        isCSSVariableName = checkStringStartsWith('--'),
        isCSSVariableToken = checkStringStartsWith('var(--'),
        getValueAsType = (value, type) =>
          type && 'number' == typeof value ? type.transform(value) : value,
        clamp = (min, max, v) => Math.min(Math.max(v, min), max),
        number = {
          test: (v) => 'number' == typeof v,
          parse: parseFloat,
          transform: (v) => v,
        },
        alpha = { ...number, transform: (v) => clamp(0, 1, v) },
        scale = { ...number, default: 1 },
        sanitize = (v) => Math.round(1e5 * v) / 1e5,
        floatRegex = /(-)?([\d]*\.?[\d])+/g,
        colorRegex =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        singleColorRegex =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function isString(v) {
        return 'string' == typeof v;
      }
      const createUnitType = (unit) => ({
          test: (v) => isString(v) && v.endsWith(unit) && 1 === v.split(' ').length,
          parse: parseFloat,
          transform: (v) => `${v}${unit}`,
        }),
        degrees = createUnitType('deg'),
        percent = createUnitType('%'),
        px = createUnitType('px'),
        vh = createUnitType('vh'),
        vw = createUnitType('vw'),
        progressPercentage = {
          ...percent,
          parse: (v) => percent.parse(v) / 100,
          transform: (v) => percent.transform(100 * v),
        },
        type_int_int = { ...number, transform: Math.round },
        numberValueTypes = {
          borderWidth: px,
          borderTopWidth: px,
          borderRightWidth: px,
          borderBottomWidth: px,
          borderLeftWidth: px,
          borderRadius: px,
          radius: px,
          borderTopLeftRadius: px,
          borderTopRightRadius: px,
          borderBottomRightRadius: px,
          borderBottomLeftRadius: px,
          width: px,
          maxWidth: px,
          height: px,
          maxHeight: px,
          size: px,
          top: px,
          right: px,
          bottom: px,
          left: px,
          padding: px,
          paddingTop: px,
          paddingRight: px,
          paddingBottom: px,
          paddingLeft: px,
          margin: px,
          marginTop: px,
          marginRight: px,
          marginBottom: px,
          marginLeft: px,
          rotate: degrees,
          rotateX: degrees,
          rotateY: degrees,
          rotateZ: degrees,
          scale,
          scaleX: scale,
          scaleY: scale,
          scaleZ: scale,
          skew: degrees,
          skewX: degrees,
          skewY: degrees,
          distance: px,
          translateX: px,
          translateY: px,
          translateZ: px,
          x: px,
          y: px,
          z: px,
          perspective: px,
          transformPerspective: px,
          opacity: alpha,
          originX: progressPercentage,
          originY: progressPercentage,
          originZ: px,
          zIndex: type_int_int,
          fillOpacity: alpha,
          strokeOpacity: alpha,
          numOctaves: type_int_int,
        };
      function buildHTMLStyles(state, latestValues, options, transformTemplate) {
        const { style, vars, transform, transformOrigin } = state;
        let hasTransform = !1,
          hasTransformOrigin = !1,
          transformIsNone = !0;
        for (const key in latestValues) {
          const value = latestValues[key];
          if (isCSSVariableName(key)) {
            vars[key] = value;
            continue;
          }
          const valueType = numberValueTypes[key],
            valueAsType = getValueAsType(value, valueType);
          if (transformProps.has(key)) {
            if (((hasTransform = !0), (transform[key] = valueAsType), !transformIsNone))
              continue;
            value !== (valueType.default || 0) && (transformIsNone = !1);
          } else
            key.startsWith('origin')
              ? ((hasTransformOrigin = !0), (transformOrigin[key] = valueAsType))
              : (style[key] = valueAsType);
        }
        if (
          (latestValues.transform ||
            (hasTransform || transformTemplate
              ? (style.transform = (function buildTransform(
                  transform,
                  { enableHardwareAcceleration = !0, allowTransformNone = !0 },
                  transformIsDefault,
                  transformTemplate,
                ) {
                  let transformString = '';
                  for (let i = 0; i < numTransforms; i++) {
                    const key = transformPropOrder[i];
                    void 0 !== transform[key] &&
                      (transformString += `${translateAlias[key] || key}(${
                        transform[key]
                      }) `);
                  }
                  return (
                    enableHardwareAcceleration &&
                      !transform.z &&
                      (transformString += 'translateZ(0)'),
                    (transformString = transformString.trim()),
                    transformTemplate
                      ? (transformString = transformTemplate(
                          transform,
                          transformIsDefault ? '' : transformString,
                        ))
                      : allowTransformNone &&
                        transformIsDefault &&
                        (transformString = 'none'),
                    transformString
                  );
                })(state.transform, options, transformIsNone, transformTemplate))
              : style.transform && (style.transform = 'none')),
          hasTransformOrigin)
        ) {
          const { originX = '50%', originY = '50%', originZ = 0 } = transformOrigin;
          style.transformOrigin = `${originX} ${originY} ${originZ}`;
        }
      }
      const createHtmlRenderState = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function copyRawValuesOnly(target, source, props) {
        for (const key in source)
          isMotionValue(source[key]) ||
            isForcedMotionValue(key, props) ||
            (target[key] = source[key]);
      }
      function useStyle(props, visualState, isStatic) {
        const style = {};
        return (
          copyRawValuesOnly(style, props.style || {}, props),
          Object.assign(
            style,
            (function useInitialMotionValues(
              { transformTemplate },
              visualState,
              isStatic,
            ) {
              return (0, react.useMemo)(() => {
                const state = createHtmlRenderState();
                return (
                  buildHTMLStyles(
                    state,
                    visualState,
                    { enableHardwareAcceleration: !isStatic },
                    transformTemplate,
                  ),
                  Object.assign({}, state.vars, state.style)
                );
              }, [visualState]);
            })(props, visualState, isStatic),
          ),
          props.transformValues ? props.transformValues(style) : style
        );
      }
      function useHTMLProps(props, visualState, isStatic) {
        const htmlProps = {},
          style = useStyle(props, visualState, isStatic);
        return (
          props.drag &&
            !1 !== props.dragListener &&
            ((htmlProps.draggable = !1),
            (style.userSelect =
              style.WebkitUserSelect =
              style.WebkitTouchCallout =
                'none'),
            (style.touchAction =
              !0 === props.drag ? 'none' : 'pan-' + ('x' === props.drag ? 'y' : 'x'))),
          void 0 === props.tabIndex &&
            (props.onTap || props.onTapStart || props.whileTap) &&
            (htmlProps.tabIndex = 0),
          (htmlProps.style = style),
          htmlProps
        );
      }
      const validMotionProps = new Set([
        'animate',
        'exit',
        'variants',
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'transformValues',
        'custom',
        'inherit',
        'onLayoutAnimationStart',
        'onLayoutAnimationComplete',
        'onLayoutMeasure',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        '_dragX',
        '_dragY',
        'onHoverStart',
        'onHoverEnd',
        'onViewportEnter',
        'onViewportLeave',
        'ignoreStrict',
        'viewport',
      ]);
      function isValidMotionProp(key) {
        return (
          key.startsWith('while') ||
          (key.startsWith('drag') && 'draggable' !== key) ||
          key.startsWith('layout') ||
          key.startsWith('onTap') ||
          key.startsWith('onPan') ||
          validMotionProps.has(key)
        );
      }
      let shouldForward = (key) => !isValidMotionProp(key);
      try {
        !(function loadExternalIsValidProp(isValidProp) {
          isValidProp &&
            (shouldForward = (key) =>
              key.startsWith('on') ? !isValidMotionProp(key) : isValidProp(key));
        })(
          __webpack_require__(
            './node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js',
          ).Z,
        );
      } catch (_a) {}
      function calcOrigin(origin, offset, size) {
        return 'string' == typeof origin ? origin : px.transform(offset + size * origin);
      }
      const dashKeys = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        camelKeys = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      function buildSVGAttrs(
        state,
        {
          attrX,
          attrY,
          attrScale,
          originX,
          originY,
          pathLength,
          pathSpacing = 1,
          pathOffset = 0,
          ...latest
        },
        options,
        isSVGTag,
        transformTemplate,
      ) {
        if ((buildHTMLStyles(state, latest, options, transformTemplate), isSVGTag))
          return void (
            state.style.viewBox && (state.attrs.viewBox = state.style.viewBox)
          );
        (state.attrs = state.style), (state.style = {});
        const { attrs, style, dimensions } = state;
        attrs.transform &&
          (dimensions && (style.transform = attrs.transform), delete attrs.transform),
          dimensions &&
            (void 0 !== originX || void 0 !== originY || style.transform) &&
            (style.transformOrigin = (function calcSVGTransformOrigin(
              dimensions,
              originX,
              originY,
            ) {
              return `${calcOrigin(originX, dimensions.x, dimensions.width)} ${calcOrigin(
                originY,
                dimensions.y,
                dimensions.height,
              )}`;
            })(
              dimensions,
              void 0 !== originX ? originX : 0.5,
              void 0 !== originY ? originY : 0.5,
            )),
          void 0 !== attrX && (attrs.x = attrX),
          void 0 !== attrY && (attrs.y = attrY),
          void 0 !== attrScale && (attrs.scale = attrScale),
          void 0 !== pathLength &&
            (function buildSVGPath(
              attrs,
              length,
              spacing = 1,
              offset = 0,
              useDashCase = !0,
            ) {
              attrs.pathLength = 1;
              const keys = useDashCase ? dashKeys : camelKeys;
              attrs[keys.offset] = px.transform(-offset);
              const pathLength = px.transform(length),
                pathSpacing = px.transform(spacing);
              attrs[keys.array] = `${pathLength} ${pathSpacing}`;
            })(attrs, pathLength, pathSpacing, pathOffset, !1);
      }
      const createSvgRenderState = () => ({ ...createHtmlRenderState(), attrs: {} }),
        isSVGTag = (tag) => 'string' == typeof tag && 'svg' === tag.toLowerCase();
      function useSVGProps(props, visualState, _isStatic, Component) {
        const visualProps = (0, react.useMemo)(() => {
          const state = createSvgRenderState();
          return (
            buildSVGAttrs(
              state,
              visualState,
              { enableHardwareAcceleration: !1 },
              isSVGTag(Component),
              props.transformTemplate,
            ),
            { ...state.attrs, style: { ...state.style } }
          );
        }, [visualState]);
        if (props.style) {
          const rawStyles = {};
          copyRawValuesOnly(rawStyles, props.style, props),
            (visualProps.style = { ...rawStyles, ...visualProps.style });
        }
        return visualProps;
      }
      function createUseRender(forwardMotionProps = !1) {
        return (Component, props, ref, { latestValues }, isStatic) => {
          const visualProps = (isSVGComponent(Component) ? useSVGProps : useHTMLProps)(
              props,
              latestValues,
              isStatic,
              Component,
            ),
            filteredProps = (function filterProps(props, isDom, forwardMotionProps) {
              const filteredProps = {};
              for (const key in props)
                ('values' === key && 'object' == typeof props.values) ||
                  ((shouldForward(key) ||
                    (!0 === forwardMotionProps && isValidMotionProp(key)) ||
                    (!isDom && !isValidMotionProp(key)) ||
                    (props.draggable && key.startsWith('onDrag'))) &&
                    (filteredProps[key] = props[key]));
              return filteredProps;
            })(props, 'string' == typeof Component, forwardMotionProps),
            elementProps = { ...filteredProps, ...visualProps, ref },
            { children } = props,
            renderedChildren = (0, react.useMemo)(
              () => (isMotionValue(children) ? children.get() : children),
              [children],
            );
          return (0, react.createElement)(Component, {
            ...elementProps,
            children: renderedChildren,
          });
        };
      }
      const camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      function renderHTML(element, { style, vars }, styleProp, projection) {
        Object.assign(
          element.style,
          style,
          projection && projection.getProjectionStyles(styleProp),
        );
        for (const key in vars) element.style.setProperty(key, vars[key]);
      }
      const camelCaseAttributes = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
        'startOffset',
        'textLength',
        'lengthAdjust',
      ]);
      function renderSVG(element, renderState, _styleProp, projection) {
        renderHTML(element, renderState, void 0, projection);
        for (const key in renderState.attrs)
          element.setAttribute(
            camelCaseAttributes.has(key) ? key : camelToDash(key),
            renderState.attrs[key],
          );
      }
      function scrapeMotionValuesFromProps(props, prevProps) {
        const { style } = props,
          newValues = {};
        for (const key in style)
          (isMotionValue(style[key]) ||
            (prevProps.style && isMotionValue(prevProps.style[key])) ||
            isForcedMotionValue(key, props)) &&
            (newValues[key] = style[key]);
        return newValues;
      }
      function scrape_motion_values_scrapeMotionValuesFromProps(props, prevProps) {
        const newValues = scrapeMotionValuesFromProps(props, prevProps);
        for (const key in props)
          if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
            newValues[
              -1 !== transformPropOrder.indexOf(key)
                ? 'attr' + key.charAt(0).toUpperCase() + key.substring(1)
                : key
            ] = props[key];
          }
        return newValues;
      }
      function resolveVariantFromProps(
        props,
        definition,
        custom,
        currentValues = {},
        currentVelocity = {},
      ) {
        return (
          'function' == typeof definition &&
            (definition = definition(
              void 0 !== custom ? custom : props.custom,
              currentValues,
              currentVelocity,
            )),
          'string' == typeof definition &&
            (definition = props.variants && props.variants[definition]),
          'function' == typeof definition &&
            (definition = definition(
              void 0 !== custom ? custom : props.custom,
              currentValues,
              currentVelocity,
            )),
          definition
        );
      }
      var use_constant = __webpack_require__(
        './node_modules/framer-motion/dist/es/utils/use-constant.mjs',
      );
      const isKeyframesTarget = (v) => Array.isArray(v),
        isCustomValue = (v) => Boolean(v && 'object' == typeof v && v.mix && v.toValue),
        resolveFinalValueInKeyframes = (v) =>
          isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
      function resolveMotionValue(value) {
        const unwrappedValue = isMotionValue(value) ? value.get() : value;
        return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
      }
      const makeUseVisualState = (config) => (props, isStatic) => {
        const context = (0, react.useContext)(MotionContext),
          presenceContext = (0, react.useContext)(context_PresenceContext.O),
          make = () =>
            (function makeState(
              { scrapeMotionValuesFromProps, createRenderState, onMount },
              props,
              context,
              presenceContext,
            ) {
              const state = {
                latestValues: makeLatestValues(
                  props,
                  context,
                  presenceContext,
                  scrapeMotionValuesFromProps,
                ),
                renderState: createRenderState(),
              };
              return (
                onMount && (state.mount = (instance) => onMount(props, instance, state)),
                state
              );
            })(config, props, context, presenceContext);
        return isStatic ? make() : (0, use_constant.h)(make);
      };
      function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
        const values = {},
          motionValues = scrapeMotionValues(props, {});
        for (const key in motionValues)
          values[key] = resolveMotionValue(motionValues[key]);
        let { initial, animate } = props;
        const isControllingVariants$1 = isControllingVariants(props),
          isVariantNode$1 = isVariantNode(props);
        context &&
          isVariantNode$1 &&
          !isControllingVariants$1 &&
          !1 !== props.inherit &&
          (void 0 === initial && (initial = context.initial),
          void 0 === animate && (animate = context.animate));
        let isInitialAnimationBlocked =
          !!presenceContext && !1 === presenceContext.initial;
        isInitialAnimationBlocked = isInitialAnimationBlocked || !1 === initial;
        const variantToSet = isInitialAnimationBlocked ? animate : initial;
        if (
          variantToSet &&
          'boolean' != typeof variantToSet &&
          !isAnimationControls(variantToSet)
        ) {
          (Array.isArray(variantToSet) ? variantToSet : [variantToSet]).forEach(
            (definition) => {
              const resolved = resolveVariantFromProps(props, definition);
              if (!resolved) return;
              const { transitionEnd, transition, ...target } = resolved;
              for (const key in target) {
                let valueTarget = target[key];
                if (Array.isArray(valueTarget)) {
                  valueTarget =
                    valueTarget[isInitialAnimationBlocked ? valueTarget.length - 1 : 0];
                }
                null !== valueTarget && (values[key] = valueTarget);
              }
              for (const key in transitionEnd) values[key] = transitionEnd[key];
            },
          );
        }
        return values;
      }
      const svgMotionConfig = {
          useVisualState: makeUseVisualState({
            scrapeMotionValuesFromProps: scrape_motion_values_scrapeMotionValuesFromProps,
            createRenderState: createSvgRenderState,
            onMount: (props, instance, { renderState, latestValues }) => {
              try {
                renderState.dimensions =
                  'function' == typeof instance.getBBox
                    ? instance.getBBox()
                    : instance.getBoundingClientRect();
              } catch (e) {
                renderState.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              buildSVGAttrs(
                renderState,
                latestValues,
                { enableHardwareAcceleration: !1 },
                isSVGTag(instance.tagName),
                props.transformTemplate,
              ),
                renderSVG(instance, renderState);
            },
          }),
        },
        htmlMotionConfig = {
          useVisualState: makeUseVisualState({
            scrapeMotionValuesFromProps,
            createRenderState: createHtmlRenderState,
          }),
        };
      function addDomEvent(target, eventName, handler, options = { passive: !0 }) {
        return (
          target.addEventListener(eventName, handler, options),
          () => target.removeEventListener(eventName, handler)
        );
      }
      const isPrimaryPointer = (event) =>
        'mouse' === event.pointerType
          ? 'number' != typeof event.button || event.button <= 0
          : !1 !== event.isPrimary;
      function extractEventInfo(event, pointType = 'page') {
        return { point: { x: event[pointType + 'X'], y: event[pointType + 'Y'] } };
      }
      const addPointerInfo = (handler) => (event) =>
        isPrimaryPointer(event) && handler(event, extractEventInfo(event));
      function addPointerEvent(target, eventName, handler, options) {
        return addDomEvent(target, eventName, addPointerInfo(handler), options);
      }
      const combineFunctions = (a, b) => (v) => b(a(v)),
        pipe = (...transformers) => transformers.reduce(combineFunctions);
      function createLock(name) {
        let lock = null;
        return () => {
          const openLock = () => {
            lock = null;
          };
          return null === lock && ((lock = name), openLock);
        };
      }
      const globalHorizontalLock = createLock('dragHorizontal'),
        globalVerticalLock = createLock('dragVertical');
      function getGlobalLock(drag) {
        let lock = !1;
        if ('y' === drag) lock = globalVerticalLock();
        else if ('x' === drag) lock = globalHorizontalLock();
        else {
          const openHorizontal = globalHorizontalLock(),
            openVertical = globalVerticalLock();
          openHorizontal && openVertical
            ? (lock = () => {
                openHorizontal(), openVertical();
              })
            : (openHorizontal && openHorizontal(), openVertical && openVertical());
        }
        return lock;
      }
      function isDragActive() {
        const openGestureLock = getGlobalLock(!0);
        return !openGestureLock || (openGestureLock(), !1);
      }
      class Feature {
        constructor(node) {
          (this.isMounted = !1), (this.node = node);
        }
        update() {}
      }
      var frameloop = __webpack_require__(
        './node_modules/framer-motion/dist/es/frameloop/index.mjs',
      );
      function addHoverEvent(node, isActive) {
        const eventName = 'pointer' + (isActive ? 'enter' : 'leave'),
          callbackName = 'onHover' + (isActive ? 'Start' : 'End');
        return addPointerEvent(
          node.current,
          eventName,
          (event, info) => {
            if ('touch' === event.type || isDragActive()) return;
            const props = node.getProps();
            node.animationState &&
              props.whileHover &&
              node.animationState.setActive('whileHover', isActive),
              props[callbackName] &&
                frameloop.Wi.update(() => props[callbackName](event, info));
          },
          { passive: !node.getProps()[callbackName] },
        );
      }
      const isNodeOrChild = (parent, child) =>
        !!child && (parent === child || isNodeOrChild(parent, child.parentElement));
      var noop = __webpack_require__(
        './node_modules/framer-motion/dist/es/utils/noop.mjs',
      );
      function fireSyntheticPointerEvent(name, handler) {
        if (!handler) return;
        const syntheticPointerEvent = new PointerEvent('pointer' + name);
        handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
      }
      const observerCallbacks = new WeakMap(),
        observers = new WeakMap(),
        fireObserverCallback = (entry) => {
          const callback = observerCallbacks.get(entry.target);
          callback && callback(entry);
        },
        fireAllObserverCallbacks = (entries) => {
          entries.forEach(fireObserverCallback);
        };
      function observeIntersection(element, options, callback) {
        const rootInteresectionObserver = (function initIntersectionObserver({
          root,
          ...options
        }) {
          const lookupRoot = root || document;
          observers.has(lookupRoot) || observers.set(lookupRoot, {});
          const rootObservers = observers.get(lookupRoot),
            key = JSON.stringify(options);
          return (
            rootObservers[key] ||
              (rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
                root,
                ...options,
              })),
            rootObservers[key]
          );
        })(options);
        return (
          observerCallbacks.set(element, callback),
          rootInteresectionObserver.observe(element),
          () => {
            observerCallbacks.delete(element),
              rootInteresectionObserver.unobserve(element);
          }
        );
      }
      const thresholdNames = { some: 0, all: 1 };
      const gestureAnimations = {
        inView: {
          Feature: class InViewFeature extends Feature {
            constructor() {
              super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
            }
            startObserver() {
              this.unmount();
              const { viewport = {} } = this.node.getProps(),
                { root, margin: rootMargin, amount = 'some', once } = viewport,
                options = {
                  root: root ? root.current : void 0,
                  rootMargin,
                  threshold: 'number' == typeof amount ? amount : thresholdNames[amount],
                };
              return observeIntersection(this.node.current, options, (entry) => {
                const { isIntersecting } = entry;
                if (this.isInView === isIntersecting) return;
                if (
                  ((this.isInView = isIntersecting),
                  once && !isIntersecting && this.hasEnteredView)
                )
                  return;
                isIntersecting && (this.hasEnteredView = !0),
                  this.node.animationState &&
                    this.node.animationState.setActive('whileInView', isIntersecting);
                const { onViewportEnter, onViewportLeave } = this.node.getProps(),
                  callback = isIntersecting ? onViewportEnter : onViewportLeave;
                callback && callback(entry);
              });
            }
            mount() {
              this.startObserver();
            }
            update() {
              if ('undefined' == typeof IntersectionObserver) return;
              const { props, prevProps } = this.node;
              ['amount', 'margin', 'root'].some(
                (function hasViewportOptionChanged(
                  { viewport = {} },
                  { viewport: prevViewport = {} } = {},
                ) {
                  return (name) => viewport[name] !== prevViewport[name];
                })(props, prevProps),
              ) && this.startObserver();
            }
            unmount() {}
          },
        },
        tap: {
          Feature: class PressGesture extends Feature {
            constructor() {
              super(...arguments),
                (this.removeStartListeners = noop.Z),
                (this.removeEndListeners = noop.Z),
                (this.removeAccessibleListeners = noop.Z),
                (this.startPointerPress = (startEvent, startInfo) => {
                  if ((this.removeEndListeners(), this.isPressing)) return;
                  const props = this.node.getProps(),
                    removePointerUpListener = addPointerEvent(
                      window,
                      'pointerup',
                      (endEvent, endInfo) => {
                        if (!this.checkPressEnd()) return;
                        const { onTap, onTapCancel } = this.node.getProps();
                        frameloop.Wi.update(() => {
                          isNodeOrChild(this.node.current, endEvent.target)
                            ? onTap && onTap(endEvent, endInfo)
                            : onTapCancel && onTapCancel(endEvent, endInfo);
                        });
                      },
                      { passive: !(props.onTap || props.onPointerUp) },
                    ),
                    removePointerCancelListener = addPointerEvent(
                      window,
                      'pointercancel',
                      (cancelEvent, cancelInfo) =>
                        this.cancelPress(cancelEvent, cancelInfo),
                      { passive: !(props.onTapCancel || props.onPointerCancel) },
                    );
                  (this.removeEndListeners = pipe(
                    removePointerUpListener,
                    removePointerCancelListener,
                  )),
                    this.startPress(startEvent, startInfo);
                }),
                (this.startAccessiblePress = () => {
                  const removeKeydownListener = addDomEvent(
                      this.node.current,
                      'keydown',
                      (keydownEvent) => {
                        if ('Enter' !== keydownEvent.key || this.isPressing) return;
                        this.removeEndListeners(),
                          (this.removeEndListeners = addDomEvent(
                            this.node.current,
                            'keyup',
                            (keyupEvent) => {
                              'Enter' === keyupEvent.key &&
                                this.checkPressEnd() &&
                                fireSyntheticPointerEvent('up', (event, info) => {
                                  const { onTap } = this.node.getProps();
                                  onTap && frameloop.Wi.update(() => onTap(event, info));
                                });
                            },
                          )),
                          fireSyntheticPointerEvent('down', (event, info) => {
                            this.startPress(event, info);
                          });
                      },
                    ),
                    removeBlurListener = addDomEvent(this.node.current, 'blur', () => {
                      this.isPressing &&
                        fireSyntheticPointerEvent('cancel', (cancelEvent, cancelInfo) =>
                          this.cancelPress(cancelEvent, cancelInfo),
                        );
                    });
                  this.removeAccessibleListeners = pipe(
                    removeKeydownListener,
                    removeBlurListener,
                  );
                });
            }
            startPress(event, info) {
              this.isPressing = !0;
              const { onTapStart, whileTap } = this.node.getProps();
              whileTap &&
                this.node.animationState &&
                this.node.animationState.setActive('whileTap', !0),
                onTapStart && frameloop.Wi.update(() => onTapStart(event, info));
            }
            checkPressEnd() {
              this.removeEndListeners(), (this.isPressing = !1);
              return (
                this.node.getProps().whileTap &&
                  this.node.animationState &&
                  this.node.animationState.setActive('whileTap', !1),
                !isDragActive()
              );
            }
            cancelPress(event, info) {
              if (!this.checkPressEnd()) return;
              const { onTapCancel } = this.node.getProps();
              onTapCancel && frameloop.Wi.update(() => onTapCancel(event, info));
            }
            mount() {
              const props = this.node.getProps(),
                removePointerListener = addPointerEvent(
                  this.node.current,
                  'pointerdown',
                  this.startPointerPress,
                  { passive: !(props.onTapStart || props.onPointerStart) },
                ),
                removeFocusListener = addDomEvent(
                  this.node.current,
                  'focus',
                  this.startAccessiblePress,
                );
              this.removeStartListeners = pipe(
                removePointerListener,
                removeFocusListener,
              );
            }
            unmount() {
              this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners();
            }
          },
        },
        focus: {
          Feature: class FocusGesture extends Feature {
            constructor() {
              super(...arguments), (this.isActive = !1);
            }
            onFocus() {
              let isFocusVisible = !1;
              try {
                isFocusVisible = this.node.current.matches(':focus-visible');
              } catch (e) {
                isFocusVisible = !0;
              }
              isFocusVisible &&
                this.node.animationState &&
                (this.node.animationState.setActive('whileFocus', !0),
                (this.isActive = !0));
            }
            onBlur() {
              this.isActive &&
                this.node.animationState &&
                (this.node.animationState.setActive('whileFocus', !1),
                (this.isActive = !1));
            }
            mount() {
              this.unmount = pipe(
                addDomEvent(this.node.current, 'focus', () => this.onFocus()),
                addDomEvent(this.node.current, 'blur', () => this.onBlur()),
              );
            }
            unmount() {}
          },
        },
        hover: {
          Feature: class HoverGesture extends Feature {
            mount() {
              this.unmount = pipe(
                addHoverEvent(this.node, !0),
                addHoverEvent(this.node, !1),
              );
            }
            unmount() {}
          },
        },
      };
      function shallowCompare(next, prev) {
        if (!Array.isArray(prev)) return !1;
        const prevLength = prev.length;
        if (prevLength !== next.length) return !1;
        for (let i = 0; i < prevLength; i++) if (prev[i] !== next[i]) return !1;
        return !0;
      }
      function resolveVariant(visualElement, definition, custom) {
        const props = visualElement.getProps();
        return resolveVariantFromProps(
          props,
          definition,
          void 0 !== custom ? custom : props.custom,
          (function getCurrent(visualElement) {
            const current = {};
            return (
              visualElement.values.forEach((value, key) => (current[key] = value.get())),
              current
            );
          })(visualElement),
          (function getVelocity(visualElement) {
            const velocity = {};
            return (
              visualElement.values.forEach(
                (value, key) => (velocity[key] = value.getVelocity()),
              ),
              velocity
            );
          })(visualElement),
        );
      }
      const optimizedAppearDataAttribute = 'data-' + camelToDash('framerAppearId');
      var errors = __webpack_require__(
        './node_modules/framer-motion/dist/es/utils/errors.mjs',
      );
      const secondsToMilliseconds = (seconds) => 1e3 * seconds,
        millisecondsToSeconds = (milliseconds) => milliseconds / 1e3,
        instantAnimationState_current = !1,
        isBezierDefinition = (easing) =>
          Array.isArray(easing) && 'number' == typeof easing[0];
      function isWaapiSupportedEasing(easing) {
        return Boolean(
          !easing ||
            ('string' == typeof easing && supportedWaapiEasing[easing]) ||
            isBezierDefinition(easing) ||
            (Array.isArray(easing) && easing.every(isWaapiSupportedEasing)),
        );
      }
      const cubicBezierAsString = ([a, b, c, d]) =>
          `cubic-bezier(${a}, ${b}, ${c}, ${d})`,
        supportedWaapiEasing = {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
          circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
          circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
          backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
          backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
        };
      function mapEasingToNativeEasing(easing) {
        if (easing)
          return isBezierDefinition(easing)
            ? cubicBezierAsString(easing)
            : Array.isArray(easing)
            ? easing.map(mapEasingToNativeEasing)
            : supportedWaapiEasing[easing];
      }
      const featureTests = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
        },
        results = {},
        supports = {};
      for (const key in featureTests)
        supports[key] = () => (
          void 0 === results[key] && (results[key] = featureTests[key]()), results[key]
        );
      const calcBezier = (t, a1, a2) =>
          (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t,
        subdivisionPrecision = 1e-7,
        subdivisionMaxIterations = 12;
      function cubicBezier(mX1, mY1, mX2, mY2) {
        if (mX1 === mY1 && mX2 === mY2) return noop.Z;
        const getTForX = (aX) =>
          (function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
            let currentX,
              currentT,
              i = 0;
            do {
              (currentT = lowerBound + (upperBound - lowerBound) / 2),
                (currentX = calcBezier(currentT, mX1, mX2) - x),
                currentX > 0 ? (upperBound = currentT) : (lowerBound = currentT);
            } while (
              Math.abs(currentX) > subdivisionPrecision &&
              ++i < subdivisionMaxIterations
            );
            return currentT;
          })(aX, 0, 1, mX1, mX2);
        return (t) => (0 === t || 1 === t ? t : calcBezier(getTForX(t), mY1, mY2));
      }
      const easeIn = cubicBezier(0.42, 0, 1, 1),
        easeOut = cubicBezier(0, 0, 0.58, 1),
        easeInOut = cubicBezier(0.42, 0, 0.58, 1),
        isEasingArray = (ease) => Array.isArray(ease) && 'number' != typeof ease[0],
        mirrorEasing = (easing) => (p) =>
          p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2,
        reverseEasing = (easing) => (p) => 1 - easing(1 - p),
        circIn = (p) => 1 - Math.sin(Math.acos(p)),
        circOut = reverseEasing(circIn),
        circInOut = mirrorEasing(circOut),
        backOut = cubicBezier(0.33, 1.53, 0.69, 0.99),
        backIn = reverseEasing(backOut),
        backInOut = mirrorEasing(backIn),
        easingLookup = {
          linear: noop.Z,
          easeIn,
          easeInOut,
          easeOut,
          circIn,
          circInOut,
          circOut,
          backIn,
          backInOut,
          backOut,
          anticipate: (p) =>
            (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1))),
        },
        easingDefinitionToFunction = (definition) => {
          if (Array.isArray(definition)) {
            (0, errors.k)(
              4 === definition.length,
              'Cubic bezier arrays must contain four numerical values.',
            );
            const [x1, y1, x2, y2] = definition;
            return cubicBezier(x1, y1, x2, y2);
          }
          return 'string' == typeof definition
            ? ((0, errors.k)(
                void 0 !== easingLookup[definition],
                `Invalid easing type '${definition}'`,
              ),
              easingLookup[definition])
            : definition;
        },
        isColorString = (type, testProp) => (v) =>
          Boolean(
            (isString(v) && singleColorRegex.test(v) && v.startsWith(type)) ||
              (testProp && Object.prototype.hasOwnProperty.call(v, testProp)),
          ),
        splitColor = (aName, bName, cName) => (v) => {
          if (!isString(v)) return v;
          const [a, b, c, alpha] = v.match(floatRegex);
          return {
            [aName]: parseFloat(a),
            [bName]: parseFloat(b),
            [cName]: parseFloat(c),
            alpha: void 0 !== alpha ? parseFloat(alpha) : 1,
          };
        },
        rgbUnit = {
          ...number,
          transform: (v) => Math.round(((v) => clamp(0, 255, v))(v)),
        },
        rgba = {
          test: isColorString('rgb', 'red'),
          parse: splitColor('red', 'green', 'blue'),
          transform: ({ red, green, blue, alpha: alpha$1 = 1 }) =>
            'rgba(' +
            rgbUnit.transform(red) +
            ', ' +
            rgbUnit.transform(green) +
            ', ' +
            rgbUnit.transform(blue) +
            ', ' +
            sanitize(alpha.transform(alpha$1)) +
            ')',
        };
      const hex = {
          test: isColorString('#'),
          parse: function parseHex(v) {
            let r = '',
              g = '',
              b = '',
              a = '';
            return (
              v.length > 5
                ? ((r = v.substring(1, 3)),
                  (g = v.substring(3, 5)),
                  (b = v.substring(5, 7)),
                  (a = v.substring(7, 9)))
                : ((r = v.substring(1, 2)),
                  (g = v.substring(2, 3)),
                  (b = v.substring(3, 4)),
                  (a = v.substring(4, 5)),
                  (r += r),
                  (g += g),
                  (b += b),
                  (a += a)),
              {
                red: parseInt(r, 16),
                green: parseInt(g, 16),
                blue: parseInt(b, 16),
                alpha: a ? parseInt(a, 16) / 255 : 1,
              }
            );
          },
          transform: rgba.transform,
        },
        hsla = {
          test: isColorString('hsl', 'hue'),
          parse: splitColor('hue', 'saturation', 'lightness'),
          transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) =>
            'hsla(' +
            Math.round(hue) +
            ', ' +
            percent.transform(sanitize(saturation)) +
            ', ' +
            percent.transform(sanitize(lightness)) +
            ', ' +
            sanitize(alpha.transform(alpha$1)) +
            ')',
        },
        color = {
          test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
          parse: (v) =>
            rgba.test(v) ? rgba.parse(v) : hsla.test(v) ? hsla.parse(v) : hex.parse(v),
          transform: (v) =>
            isString(v)
              ? v
              : v.hasOwnProperty('red')
              ? rgba.transform(v)
              : hsla.transform(v),
        },
        mix = (from, to, progress) => -progress * from + progress * to + from;
      function hueToRgb(p, q, t) {
        return (
          t < 0 && (t += 1),
          t > 1 && (t -= 1),
          t < 1 / 6
            ? p + 6 * (q - p) * t
            : t < 0.5
            ? q
            : t < 2 / 3
            ? p + (q - p) * (2 / 3 - t) * 6
            : p
        );
      }
      const mixLinearColor = (from, to, v) => {
          const fromExpo = from * from;
          return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
        },
        colorTypes = [hex, rgba, hsla];
      function asRGBA(color) {
        const type = ((v = color), colorTypes.find((type) => type.test(v)));
        var v;
        (0, errors.k)(
          Boolean(type),
          `'${color}' is not an animatable color. Use the equivalent color code instead.`,
        );
        let model = type.parse(color);
        return (
          type === hsla &&
            (model = (function hslaToRgba({ hue, saturation, lightness, alpha }) {
              (hue /= 360), (lightness /= 100);
              let red = 0,
                green = 0,
                blue = 0;
              if ((saturation /= 100)) {
                const q =
                    lightness < 0.5
                      ? lightness * (1 + saturation)
                      : lightness + saturation - lightness * saturation,
                  p = 2 * lightness - q;
                (red = hueToRgb(p, q, hue + 1 / 3)),
                  (green = hueToRgb(p, q, hue)),
                  (blue = hueToRgb(p, q, hue - 1 / 3));
              } else red = green = blue = lightness;
              return {
                red: Math.round(255 * red),
                green: Math.round(255 * green),
                blue: Math.round(255 * blue),
                alpha,
              };
            })(model)),
          model
        );
      }
      const mixColor = (from, to) => {
        const fromRGBA = asRGBA(from),
          toRGBA = asRGBA(to),
          blended = { ...fromRGBA };
        return (v) => (
          (blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v)),
          (blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v)),
          (blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v)),
          (blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v)),
          rgba.transform(blended)
        );
      };
      const cssVarTokeniser = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: 'Vars',
          token: '${v}',
          parse: noop.Z,
        },
        colorTokeniser = {
          regex: colorRegex,
          countKey: 'Colors',
          token: '${c}',
          parse: color.parse,
        },
        numberTokeniser = {
          regex: floatRegex,
          countKey: 'Numbers',
          token: '${n}',
          parse: number.parse,
        };
      function tokenise(info, { regex, countKey, token, parse }) {
        const matches = info.tokenised.match(regex);
        matches &&
          ((info['num' + countKey] = matches.length),
          (info.tokenised = info.tokenised.replace(regex, token)),
          info.values.push(...matches.map(parse)));
      }
      function analyseComplexValue(value) {
        const originalValue = value.toString(),
          info = {
            value: originalValue,
            tokenised: originalValue,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return (
          info.value.includes('var(--') && tokenise(info, cssVarTokeniser),
          tokenise(info, colorTokeniser),
          tokenise(info, numberTokeniser),
          info
        );
      }
      function parseComplexValue(v) {
        return analyseComplexValue(v).values;
      }
      function createTransformer(source) {
        const { values, numColors, numVars, tokenised } = analyseComplexValue(source),
          numValues = values.length;
        return (v) => {
          let output = tokenised;
          for (let i = 0; i < numValues; i++)
            output =
              i < numVars
                ? output.replace(cssVarTokeniser.token, v[i])
                : i < numVars + numColors
                ? output.replace(colorTokeniser.token, color.transform(v[i]))
                : output.replace(numberTokeniser.token, sanitize(v[i]));
          return output;
        };
      }
      const convertNumbersToZero = (v) => ('number' == typeof v ? 0 : v);
      const complex = {
          test: function test(v) {
            var _a, _b;
            return (
              isNaN(v) &&
              isString(v) &&
              ((null === (_a = v.match(floatRegex)) || void 0 === _a
                ? void 0
                : _a.length) || 0) +
                ((null === (_b = v.match(colorRegex)) || void 0 === _b
                  ? void 0
                  : _b.length) || 0) >
                0
            );
          },
          parse: parseComplexValue,
          createTransformer,
          getAnimatableNone: function getAnimatableNone(v) {
            const parsed = parseComplexValue(v);
            return createTransformer(v)(parsed.map(convertNumbersToZero));
          },
        },
        mixImmediate = (origin, target) => (p) => `${p > 0 ? target : origin}`;
      function getMixer(origin, target) {
        return 'number' == typeof origin
          ? (v) => mix(origin, target, v)
          : color.test(origin)
          ? mixColor(origin, target)
          : origin.startsWith('var(')
          ? mixImmediate(origin, target)
          : mixComplex(origin, target);
      }
      const mixArray = (from, to) => {
          const output = [...from],
            numValues = output.length,
            blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
          return (v) => {
            for (let i = 0; i < numValues; i++) output[i] = blendValue[i](v);
            return output;
          };
        },
        mixObject = (origin, target) => {
          const output = { ...origin, ...target },
            blendValue = {};
          for (const key in output)
            void 0 !== origin[key] &&
              void 0 !== target[key] &&
              (blendValue[key] = getMixer(origin[key], target[key]));
          return (v) => {
            for (const key in blendValue) output[key] = blendValue[key](v);
            return output;
          };
        },
        mixComplex = (origin, target) => {
          const template = complex.createTransformer(target),
            originStats = analyseComplexValue(origin),
            targetStats = analyseComplexValue(target);
          return originStats.numVars === targetStats.numVars &&
            originStats.numColors === targetStats.numColors &&
            originStats.numNumbers >= targetStats.numNumbers
            ? pipe(mixArray(originStats.values, targetStats.values), template)
            : ((0, errors.K)(
                !0,
                `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              ),
              mixImmediate(origin, target));
        },
        progress = (from, to, value) => {
          const toFromDifference = to - from;
          return 0 === toFromDifference ? 1 : (value - from) / toFromDifference;
        },
        mixNumber = (from, to) => (p) => mix(from, to, p);
      function createMixers(output, ease, customMixer) {
        const mixers = [],
          mixerFactory =
            customMixer ||
            (function detectMixerFactory(v) {
              return 'number' == typeof v
                ? mixNumber
                : 'string' == typeof v
                ? color.test(v)
                  ? mixColor
                  : mixComplex
                : Array.isArray(v)
                ? mixArray
                : 'object' == typeof v
                ? mixObject
                : mixNumber;
            })(output[0]),
          numMixers = output.length - 1;
        for (let i = 0; i < numMixers; i++) {
          let mixer = mixerFactory(output[i], output[i + 1]);
          if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || noop.Z : ease;
            mixer = pipe(easingFunction, mixer);
          }
          mixers.push(mixer);
        }
        return mixers;
      }
      function interpolate(input, output, { clamp: isClamp = !0, ease, mixer } = {}) {
        const inputLength = input.length;
        if (
          ((0, errors.k)(
            inputLength === output.length,
            'Both input and output ranges must be the same length',
          ),
          1 === inputLength)
        )
          return () => output[0];
        input[0] > input[inputLength - 1] &&
          ((input = [...input].reverse()), (output = [...output].reverse()));
        const mixers = createMixers(output, ease, mixer),
          numMixers = mixers.length,
          interpolator = (v) => {
            let i = 0;
            if (numMixers > 1) for (; i < input.length - 2 && !(v < input[i + 1]); i++);
            const progressInRange = progress(input[i], input[i + 1], v);
            return mixers[i](progressInRange);
          };
        return isClamp
          ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v))
          : interpolator;
      }
      function defaultOffset(arr) {
        const offset = [0];
        return (
          (function fillOffset(offset, remaining) {
            const min = offset[offset.length - 1];
            for (let i = 1; i <= remaining; i++) {
              const offsetProgress = progress(0, remaining, i);
              offset.push(mix(min, 1, offsetProgress));
            }
          })(offset, arr.length - 1),
          offset
        );
      }
      function keyframes({
        duration = 300,
        keyframes: keyframeValues,
        times,
        ease = 'easeInOut',
      }) {
        const easingFunctions = isEasingArray(ease)
            ? ease.map(easingDefinitionToFunction)
            : easingDefinitionToFunction(ease),
          state = { done: !1, value: keyframeValues[0] },
          absoluteTimes = (function convertOffsetToTimes(offset, duration) {
            return offset.map((o) => o * duration);
          })(
            times && times.length === keyframeValues.length
              ? times
              : defaultOffset(keyframeValues),
            duration,
          ),
          mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
            ease: Array.isArray(easingFunctions)
              ? easingFunctions
              : ((values = keyframeValues),
                (easing = easingFunctions),
                values.map(() => easing || easeInOut).splice(0, values.length - 1)),
          });
        var values, easing;
        return {
          calculatedDuration: duration,
          next: (t) => (
            (state.value = mapTimeToKeyframe(t)), (state.done = t >= duration), state
          ),
        };
      }
      function velocityPerSecond(velocity, frameDuration) {
        return frameDuration ? velocity * (1e3 / frameDuration) : 0;
      }
      const velocitySampleDuration = 5;
      function calcGeneratorVelocity(resolveValue, t, current) {
        const prevT = Math.max(t - velocitySampleDuration, 0);
        return velocityPerSecond(current - resolveValue(prevT), t - prevT);
      }
      const safeMin = 0.001,
        minDuration = 0.01,
        maxDuration = 10,
        minDamping = 0.05,
        maxDamping = 1;
      function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
        let envelope, derivative;
        (0, errors.K)(
          duration <= secondsToMilliseconds(maxDuration),
          'Spring duration must be 10 seconds or less',
        );
        let dampingRatio = 1 - bounce;
        (dampingRatio = clamp(minDamping, maxDamping, dampingRatio)),
          (duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration))),
          dampingRatio < 1
            ? ((envelope = (undampedFreq) => {
                const exponentialDecay = undampedFreq * dampingRatio,
                  delta = exponentialDecay * duration,
                  a = exponentialDecay - velocity,
                  b = calcAngularFreq(undampedFreq, dampingRatio),
                  c = Math.exp(-delta);
                return safeMin - (a / b) * c;
              }),
              (derivative = (undampedFreq) => {
                const delta = undampedFreq * dampingRatio * duration,
                  d = delta * velocity + velocity,
                  e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration,
                  f = Math.exp(-delta),
                  g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
                return (
                  ((-envelope(undampedFreq) + safeMin > 0 ? -1 : 1) * ((d - e) * f)) / g
                );
              }))
            : ((envelope = (undampedFreq) =>
                Math.exp(-undampedFreq * duration) *
                  ((undampedFreq - velocity) * duration + 1) -
                safeMin),
              (derivative = (undampedFreq) =>
                Math.exp(-undampedFreq * duration) *
                (duration * duration * (velocity - undampedFreq))));
        const undampedFreq = (function approximateRoot(
          envelope,
          derivative,
          initialGuess,
        ) {
          let result = initialGuess;
          for (let i = 1; i < rootIterations; i++)
            result -= envelope(result) / derivative(result);
          return result;
        })(envelope, derivative, 5 / duration);
        if (((duration = secondsToMilliseconds(duration)), isNaN(undampedFreq)))
          return { stiffness: 100, damping: 10, duration };
        {
          const stiffness = Math.pow(undampedFreq, 2) * mass;
          return {
            stiffness,
            damping: 2 * dampingRatio * Math.sqrt(mass * stiffness),
            duration,
          };
        }
      }
      const rootIterations = 12;
      function calcAngularFreq(undampedFreq, dampingRatio) {
        return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
      }
      const durationKeys = ['duration', 'bounce'],
        physicsKeys = ['stiffness', 'damping', 'mass'];
      function isSpringType(options, keys) {
        return keys.some((key) => void 0 !== options[key]);
      }
      function spring({ keyframes, restDelta, restSpeed, ...options }) {
        const origin = keyframes[0],
          target = keyframes[keyframes.length - 1],
          state = { done: !1, value: origin },
          { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } =
            (function getSpringOptions(options) {
              let springOptions = {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
                ...options,
              };
              if (
                !isSpringType(options, physicsKeys) &&
                isSpringType(options, durationKeys)
              ) {
                const derived = findSpring(options);
                (springOptions = { ...springOptions, ...derived, velocity: 0, mass: 1 }),
                  (springOptions.isResolvedFromDuration = !0);
              }
              return springOptions;
            })(options),
          initialVelocity = velocity ? -millisecondsToSeconds(velocity) : 0,
          dampingRatio = damping / (2 * Math.sqrt(stiffness * mass)),
          initialDelta = target - origin,
          undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass)),
          isGranularScale = Math.abs(initialDelta) < 5;
        let resolveSpring;
        if (
          (restSpeed || (restSpeed = isGranularScale ? 0.01 : 2),
          restDelta || (restDelta = isGranularScale ? 0.005 : 0.5),
          dampingRatio < 1)
        ) {
          const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
          resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (
              target -
              envelope *
                (((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) /
                  angularFreq) *
                  Math.sin(angularFreq * t) +
                  initialDelta * Math.cos(angularFreq * t))
            );
          };
        } else if (1 === dampingRatio)
          resolveSpring = (t) =>
            target -
            Math.exp(-undampedAngularFreq * t) *
              (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
        else {
          const dampedAngularFreq =
            undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
          resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t),
              freqForT = Math.min(dampedAngularFreq * t, 300);
            return (
              target -
              (envelope *
                ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) *
                  Math.sinh(freqForT) +
                  dampedAngularFreq * initialDelta * Math.cosh(freqForT))) /
                dampedAngularFreq
            );
          };
        }
        return {
          calculatedDuration: (isResolvedFromDuration && duration) || null,
          next: (t) => {
            const current = resolveSpring(t);
            if (isResolvedFromDuration) state.done = t >= duration;
            else {
              let currentVelocity = initialVelocity;
              0 !== t &&
                (currentVelocity =
                  dampingRatio < 1
                    ? calcGeneratorVelocity(resolveSpring, t, current)
                    : 0);
              const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed,
                isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
              state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            return (state.value = state.done ? target : current), state;
          },
        };
      }
      function inertia({
        keyframes,
        velocity = 0,
        power = 0.8,
        timeConstant = 325,
        bounceDamping = 10,
        bounceStiffness = 500,
        modifyTarget,
        min,
        max,
        restDelta = 0.5,
        restSpeed,
      }) {
        const origin = keyframes[0],
          state = { done: !1, value: origin },
          nearestBoundary = (v) =>
            void 0 === min
              ? max
              : void 0 === max || Math.abs(min - v) < Math.abs(max - v)
              ? min
              : max;
        let amplitude = power * velocity;
        const ideal = origin + amplitude,
          target = void 0 === modifyTarget ? ideal : modifyTarget(ideal);
        target !== ideal && (amplitude = target - origin);
        const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant),
          calcLatest = (t) => target + calcDelta(t),
          applyFriction = (t) => {
            const delta = calcDelta(t),
              latest = calcLatest(t);
            (state.done = Math.abs(delta) <= restDelta),
              (state.value = state.done ? target : latest);
          };
        let timeReachedBoundary, spring$1;
        const checkCatchBoundary = (t) => {
          var v;
          ((v = state.value),
          (void 0 !== min && v < min) || (void 0 !== max && v > max)) &&
            ((timeReachedBoundary = t),
            (spring$1 = spring({
              keyframes: [state.value, nearestBoundary(state.value)],
              velocity: calcGeneratorVelocity(calcLatest, t, state.value),
              damping: bounceDamping,
              stiffness: bounceStiffness,
              restDelta,
              restSpeed,
            })));
        };
        return (
          checkCatchBoundary(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let hasUpdatedFrame = !1;
              return (
                spring$1 ||
                  void 0 !== timeReachedBoundary ||
                  ((hasUpdatedFrame = !0), applyFriction(t), checkCatchBoundary(t)),
                void 0 !== timeReachedBoundary && t > timeReachedBoundary
                  ? spring$1.next(t - timeReachedBoundary)
                  : (!hasUpdatedFrame && applyFriction(t), state)
              );
            },
          }
        );
      }
      var data = __webpack_require__(
        './node_modules/framer-motion/dist/es/frameloop/data.mjs',
      );
      const frameloopDriver = (update) => {
          const passTimestamp = ({ timestamp }) => update(timestamp);
          return {
            start: () => frameloop.Wi.update(passTimestamp, !0),
            stop: () => (0, frameloop.Pn)(passTimestamp),
            now: () =>
              data.frameData.isProcessing ? data.frameData.timestamp : performance.now(),
          };
        },
        maxGeneratorDuration = 2e4;
      function calcGeneratorDuration(generator) {
        let duration = 0;
        let state = generator.next(duration);
        for (; !state.done && duration < maxGeneratorDuration; )
          (duration += 50), (state = generator.next(duration));
        return duration >= maxGeneratorDuration ? 1 / 0 : duration;
      }
      const types = { decay: inertia, inertia, tween: keyframes, keyframes, spring };
      function animateValue({
        autoplay = !0,
        delay = 0,
        driver = frameloopDriver,
        keyframes: keyframes$1,
        type = 'keyframes',
        repeat = 0,
        repeatDelay = 0,
        repeatType = 'loop',
        onPlay,
        onStop,
        onComplete,
        onUpdate,
        ...options
      }) {
        let resolveFinishedPromise,
          currentFinishedPromise,
          speed = 1,
          hasStopped = !1;
        const updateFinishedPromise = () => {
          resolveFinishedPromise && resolveFinishedPromise(),
            (currentFinishedPromise = new Promise((resolve) => {
              resolveFinishedPromise = resolve;
            }));
        };
        let animationDriver;
        updateFinishedPromise();
        const generatorFactory = types[type] || keyframes;
        let mapNumbersToKeyframes;
        generatorFactory !== keyframes &&
          'number' != typeof keyframes$1[0] &&
          ((mapNumbersToKeyframes = interpolate([0, 100], keyframes$1, { clamp: !1 })),
          (keyframes$1 = [0, 100]));
        const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
        let mirroredGenerator;
        'mirror' === repeatType &&
          (mirroredGenerator = generatorFactory({
            ...options,
            keyframes: [...keyframes$1].reverse(),
            velocity: -(options.velocity || 0),
          }));
        let playState = 'idle',
          holdTime = null,
          startTime = null,
          cancelTime = null;
        null === generator.calculatedDuration &&
          repeat &&
          (generator.calculatedDuration = calcGeneratorDuration(generator));
        const { calculatedDuration } = generator;
        let resolvedDuration = 1 / 0,
          totalDuration = 1 / 0;
        null !== calculatedDuration &&
          ((resolvedDuration = calculatedDuration + repeatDelay),
          (totalDuration = resolvedDuration * (repeat + 1) - repeatDelay));
        let currentTime = 0;
        const tick = (timestamp) => {
            if (null === startTime) return;
            speed > 0 && (startTime = Math.min(startTime, timestamp)),
              (currentTime =
                null !== holdTime ? holdTime : (timestamp - startTime) * speed);
            const timeWithoutDelay = currentTime - delay,
              isInDelayPhase = timeWithoutDelay < 0;
            (currentTime = Math.max(timeWithoutDelay, 0)),
              'finished' === playState &&
                null === holdTime &&
                (currentTime = totalDuration);
            let elapsed = currentTime,
              frameGenerator = generator;
            if (repeat) {
              const progress = currentTime / resolvedDuration;
              let currentIteration = Math.floor(progress),
                iterationProgress = progress % 1;
              !iterationProgress && progress >= 1 && (iterationProgress = 1),
                1 === iterationProgress && currentIteration--,
                (currentIteration = Math.min(currentIteration, repeat + 1));
              const iterationIsOdd = Boolean(currentIteration % 2);
              iterationIsOdd &&
                ('reverse' === repeatType
                  ? ((iterationProgress = 1 - iterationProgress),
                    repeatDelay && (iterationProgress -= repeatDelay / resolvedDuration))
                  : 'mirror' === repeatType && (frameGenerator = mirroredGenerator));
              let p = clamp(0, 1, iterationProgress);
              currentTime > totalDuration &&
                (p = 'reverse' === repeatType && iterationIsOdd ? 1 : 0),
                (elapsed = p * resolvedDuration);
            }
            const state = isInDelayPhase
              ? { done: !1, value: keyframes$1[0] }
              : frameGenerator.next(elapsed);
            mapNumbersToKeyframes && (state.value = mapNumbersToKeyframes(state.value));
            let { done } = state;
            isInDelayPhase ||
              null === calculatedDuration ||
              (done = currentTime >= totalDuration);
            const isAnimationFinished =
              null === holdTime &&
              ('finished' === playState ||
                ('running' === playState && done) ||
                (speed < 0 && currentTime <= 0));
            return (
              onUpdate && onUpdate(state.value), isAnimationFinished && finish(), state
            );
          },
          stopAnimationDriver = () => {
            animationDriver && animationDriver.stop(), (animationDriver = void 0);
          },
          cancel = () => {
            (playState = 'idle'),
              stopAnimationDriver(),
              updateFinishedPromise(),
              (startTime = cancelTime = null);
          },
          finish = () => {
            (playState = 'finished'),
              onComplete && onComplete(),
              stopAnimationDriver(),
              updateFinishedPromise();
          },
          play = () => {
            if (hasStopped) return;
            animationDriver || (animationDriver = driver(tick));
            const now = animationDriver.now();
            onPlay && onPlay(),
              null !== holdTime
                ? (startTime = now - holdTime)
                : (startTime && 'finished' !== playState) || (startTime = now),
              (cancelTime = startTime),
              (holdTime = null),
              (playState = 'running'),
              animationDriver.start();
          };
        autoplay && play();
        const controls = {
          then: (resolve, reject) => currentFinishedPromise.then(resolve, reject),
          get time() {
            return millisecondsToSeconds(currentTime);
          },
          set time(newTime) {
            (newTime = secondsToMilliseconds(newTime)),
              (currentTime = newTime),
              null === holdTime && animationDriver && 0 !== speed
                ? (startTime = animationDriver.now() - newTime / speed)
                : (holdTime = newTime);
          },
          get duration() {
            const duration =
              null === generator.calculatedDuration
                ? calcGeneratorDuration(generator)
                : generator.calculatedDuration;
            return millisecondsToSeconds(duration);
          },
          get speed() {
            return speed;
          },
          set speed(newSpeed) {
            newSpeed !== speed &&
              animationDriver &&
              ((speed = newSpeed), (controls.time = millisecondsToSeconds(currentTime)));
          },
          get state() {
            return playState;
          },
          play,
          pause: () => {
            (playState = 'paused'), (holdTime = currentTime);
          },
          stop: () => {
            (hasStopped = !0),
              'idle' !== playState &&
                ((playState = 'idle'), onStop && onStop(), cancel());
          },
          cancel: () => {
            null !== cancelTime && tick(cancelTime), cancel();
          },
          complete: () => {
            playState = 'finished';
          },
          sample: (elapsed) => ((startTime = 0), tick(elapsed)),
        };
        return controls;
      }
      const acceleratedValues = new Set([
        'opacity',
        'clipPath',
        'filter',
        'transform',
        'backgroundColor',
      ]);
      function createAcceleratedAnimation(
        value,
        valueName,
        { onUpdate, onComplete, ...options },
      ) {
        if (
          !(
            supports.waapi() &&
            acceleratedValues.has(valueName) &&
            !options.repeatDelay &&
            'mirror' !== options.repeatType &&
            0 !== options.damping &&
            'inertia' !== options.type
          )
        )
          return !1;
        let resolveFinishedPromise,
          currentFinishedPromise,
          hasStopped = !1;
        const updateFinishedPromise = () => {
          currentFinishedPromise = new Promise((resolve) => {
            resolveFinishedPromise = resolve;
          });
        };
        updateFinishedPromise();
        let { keyframes, duration = 300, ease, times } = options;
        if (
          ((valueName, options) =>
            'spring' === options.type ||
            'backgroundColor' === valueName ||
            !isWaapiSupportedEasing(options.ease))(valueName, options)
        ) {
          const sampleAnimation = animateValue({ ...options, repeat: 0, delay: 0 });
          let state = { done: !1, value: keyframes[0] };
          const pregeneratedKeyframes = [];
          let t = 0;
          for (; !state.done && t < 2e4; )
            (state = sampleAnimation.sample(t)),
              pregeneratedKeyframes.push(state.value),
              (t += 10);
          (times = void 0),
            (keyframes = pregeneratedKeyframes),
            (duration = t - 10),
            (ease = 'linear');
        }
        const animation = (function animateStyle(
            element,
            valueName,
            keyframes,
            { delay = 0, duration, repeat = 0, repeatType = 'loop', ease, times } = {},
          ) {
            const keyframeOptions = { [valueName]: keyframes };
            times && (keyframeOptions.offset = times);
            const easing = mapEasingToNativeEasing(ease);
            return (
              Array.isArray(easing) && (keyframeOptions.easing = easing),
              element.animate(keyframeOptions, {
                delay,
                duration,
                easing: Array.isArray(easing) ? 'linear' : easing,
                fill: 'both',
                iterations: repeat + 1,
                direction: 'reverse' === repeatType ? 'alternate' : 'normal',
              })
            );
          })(value.owner.current, valueName, keyframes, {
            ...options,
            duration,
            ease,
            times,
          }),
          cancelAnimation = () => animation.cancel(),
          safeCancel = () => {
            frameloop.Wi.update(cancelAnimation),
              resolveFinishedPromise(),
              updateFinishedPromise();
          };
        return (
          (animation.onfinish = () => {
            value.set(
              (function getFinalKeyframe(keyframes, { repeat, repeatType = 'loop' }) {
                return keyframes[
                  repeat && 'loop' !== repeatType && repeat % 2 == 1
                    ? 0
                    : keyframes.length - 1
                ];
              })(keyframes, options),
            ),
              onComplete && onComplete(),
              safeCancel();
          }),
          {
            then: (resolve, reject) => currentFinishedPromise.then(resolve, reject),
            get time() {
              return millisecondsToSeconds(animation.currentTime || 0);
            },
            set time(newTime) {
              animation.currentTime = secondsToMilliseconds(newTime);
            },
            get speed() {
              return animation.playbackRate;
            },
            set speed(newSpeed) {
              animation.playbackRate = newSpeed;
            },
            get duration() {
              return millisecondsToSeconds(duration);
            },
            play: () => {
              hasStopped || (animation.play(), (0, frameloop.Pn)(cancelAnimation));
            },
            pause: () => animation.pause(),
            stop: () => {
              if (((hasStopped = !0), 'idle' === animation.playState)) return;
              const { currentTime } = animation;
              if (currentTime) {
                const sampleAnimation = animateValue({ ...options, autoplay: !1 });
                value.setWithVelocity(
                  sampleAnimation.sample(currentTime - 10).value,
                  sampleAnimation.sample(currentTime).value,
                  10,
                );
              }
              safeCancel();
            },
            complete: () => animation.finish(),
            cancel: safeCancel,
          }
        );
      }
      const underDampedSpring = {
          type: 'spring',
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        },
        keyframesTransition = { type: 'keyframes', duration: 0.8 },
        ease = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        getDefaultTransition = (valueKey, { keyframes }) =>
          keyframes.length > 2
            ? keyframesTransition
            : transformProps.has(valueKey)
            ? valueKey.startsWith('scale')
              ? {
                  type: 'spring',
                  stiffness: 550,
                  damping: 0 === keyframes[1] ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10,
                }
              : underDampedSpring
            : ease,
        isAnimatable = (key, value) =>
          'zIndex' !== key &&
          (!('number' != typeof value && !Array.isArray(value)) ||
            !(
              'string' != typeof value ||
              (!complex.test(value) && '0' !== value) ||
              value.startsWith('url(')
            )),
        maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
      function applyDefaultFilter(v) {
        const [name, value] = v.slice(0, -1).split('(');
        if ('drop-shadow' === name) return v;
        const [number] = value.match(floatRegex) || [];
        if (!number) return v;
        const unit = value.replace(number, '');
        let defaultValue = maxDefaults.has(name) ? 1 : 0;
        return (
          number !== value && (defaultValue *= 100),
          name + '(' + defaultValue + unit + ')'
        );
      }
      const functionRegex = /([a-z-]*)\(.*?\)/g,
        filter = {
          ...complex,
          getAnimatableNone: (v) => {
            const functions = v.match(functionRegex);
            return functions ? functions.map(applyDefaultFilter).join(' ') : v;
          },
        },
        defaultValueTypes = {
          ...numberValueTypes,
          color,
          backgroundColor: color,
          outlineColor: color,
          fill: color,
          stroke: color,
          borderColor: color,
          borderTopColor: color,
          borderRightColor: color,
          borderBottomColor: color,
          borderLeftColor: color,
          filter,
          WebkitFilter: filter,
        },
        getDefaultValueType = (key) => defaultValueTypes[key];
      function animatable_none_getAnimatableNone(key, value) {
        let defaultValueType = getDefaultValueType(key);
        return (
          defaultValueType !== filter && (defaultValueType = complex),
          defaultValueType.getAnimatableNone
            ? defaultValueType.getAnimatableNone(value)
            : void 0
        );
      }
      const isZeroValueString = (v) => /^0[^.\s]+$/.test(v);
      function isNone(value) {
        return 'number' == typeof value
          ? 0 === value
          : null !== value
          ? 'none' === value || '0' === value || isZeroValueString(value)
          : void 0;
      }
      function getValueTransition(transition, key) {
        return transition[key] || transition.default || transition;
      }
      const animateMotionValue =
        (valueName, value, target, transition = {}) =>
        (onComplete) => {
          const valueTransition = getValueTransition(transition, valueName) || {},
            delay = valueTransition.delay || transition.delay || 0;
          let { elapsed = 0 } = transition;
          elapsed -= secondsToMilliseconds(delay);
          const keyframes = (function getKeyframes(value, valueName, target, transition) {
              const isTargetAnimatable = isAnimatable(valueName, target);
              let keyframes;
              keyframes = Array.isArray(target) ? [...target] : [null, target];
              const defaultOrigin =
                void 0 !== transition.from ? transition.from : value.get();
              let animatableTemplateValue;
              const noneKeyframeIndexes = [];
              for (let i = 0; i < keyframes.length; i++)
                null === keyframes[i] &&
                  (keyframes[i] = 0 === i ? defaultOrigin : keyframes[i - 1]),
                  isNone(keyframes[i]) && noneKeyframeIndexes.push(i),
                  'string' == typeof keyframes[i] &&
                    'none' !== keyframes[i] &&
                    '0' !== keyframes[i] &&
                    (animatableTemplateValue = keyframes[i]);
              if (
                isTargetAnimatable &&
                noneKeyframeIndexes.length &&
                animatableTemplateValue
              )
                for (let i = 0; i < noneKeyframeIndexes.length; i++)
                  keyframes[noneKeyframeIndexes[i]] = animatable_none_getAnimatableNone(
                    valueName,
                    animatableTemplateValue,
                  );
              return keyframes;
            })(value, valueName, target, valueTransition),
            originKeyframe = keyframes[0],
            targetKeyframe = keyframes[keyframes.length - 1],
            isOriginAnimatable = isAnimatable(valueName, originKeyframe),
            isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
          (0, errors.K)(
            isOriginAnimatable === isTargetAnimatable,
            `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`,
          );
          let options = {
            keyframes,
            velocity: value.getVelocity(),
            ease: 'easeOut',
            ...valueTransition,
            delay: -elapsed,
            onUpdate: (v) => {
              value.set(v), valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: () => {
              onComplete(), valueTransition.onComplete && valueTransition.onComplete();
            },
          };
          if (
            ((function isTransitionDefined({
              when,
              delay: _delay,
              delayChildren,
              staggerChildren,
              staggerDirection,
              repeat,
              repeatType,
              repeatDelay,
              from,
              elapsed,
              ...transition
            }) {
              return !!Object.keys(transition).length;
            })(valueTransition) ||
              (options = { ...options, ...getDefaultTransition(valueName, options) }),
            options.duration &&
              (options.duration = secondsToMilliseconds(options.duration)),
            options.repeatDelay &&
              (options.repeatDelay = secondsToMilliseconds(options.repeatDelay)),
            !isOriginAnimatable ||
              !isTargetAnimatable ||
              instantAnimationState_current ||
              !1 === valueTransition.type)
          )
            return (function createInstantAnimation({
              keyframes,
              delay,
              onUpdate,
              onComplete,
            }) {
              const setValue = () => (
                onUpdate && onUpdate(keyframes[keyframes.length - 1]),
                onComplete && onComplete(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: noop.Z,
                  pause: noop.Z,
                  stop: noop.Z,
                  then: (resolve) => (resolve(), Promise.resolve()),
                  cancel: noop.Z,
                  complete: noop.Z,
                }
              );
              return delay
                ? animateValue({
                    keyframes: [0, 1],
                    duration: 0,
                    delay,
                    onComplete: setValue,
                  })
                : setValue();
            })(options);
          if (
            value.owner &&
            value.owner.current instanceof HTMLElement &&
            !value.owner.getProps().onUpdate
          ) {
            const acceleratedAnimation = createAcceleratedAnimation(
              value,
              valueName,
              options,
            );
            if (acceleratedAnimation) return acceleratedAnimation;
          }
          return animateValue(options);
        };
      function isWillChangeMotionValue(value) {
        return Boolean(isMotionValue(value) && value.add);
      }
      function addUniqueItem(arr, item) {
        -1 === arr.indexOf(item) && arr.push(item);
      }
      function removeItem(arr, item) {
        const index = arr.indexOf(item);
        index > -1 && arr.splice(index, 1);
      }
      class SubscriptionManager {
        constructor() {
          this.subscriptions = [];
        }
        add(handler) {
          return (
            addUniqueItem(this.subscriptions, handler),
            () => removeItem(this.subscriptions, handler)
          );
        }
        notify(a, b, c) {
          const numSubscriptions = this.subscriptions.length;
          if (numSubscriptions)
            if (1 === numSubscriptions) this.subscriptions[0](a, b, c);
            else
              for (let i = 0; i < numSubscriptions; i++) {
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      class MotionValue {
        constructor(init, options = {}) {
          var value;
          (this.version = '10.12.16'),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (v, render = !0) => {
              (this.prev = this.current), (this.current = v);
              const { delta, timestamp } = data.frameData;
              this.lastUpdated !== timestamp &&
                ((this.timeDelta = delta),
                (this.lastUpdated = timestamp),
                frameloop.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                render &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              frameloop.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp }) => {
              timestamp !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = init),
            (this.canTrackVelocity = ((value = this.current), !isNaN(parseFloat(value)))),
            (this.owner = options.owner);
        }
        onChange(subscription) {
          return this.on('change', subscription);
        }
        on(eventName, callback) {
          this.events[eventName] || (this.events[eventName] = new SubscriptionManager());
          const unsubscribe = this.events[eventName].add(callback);
          return 'change' === eventName
            ? () => {
                unsubscribe(),
                  frameloop.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : unsubscribe;
        }
        clearListeners() {
          for (const eventManagers in this.events) this.events[eventManagers].clear();
        }
        attach(passiveEffect, stopPassiveEffect) {
          (this.passiveEffect = passiveEffect),
            (this.stopPassiveEffect = stopPassiveEffect);
        }
        set(v, render = !0) {
          render && this.passiveEffect
            ? this.passiveEffect(v, this.updateAndNotify)
            : this.updateAndNotify(v, render);
        }
        setWithVelocity(prev, current, delta) {
          this.set(current), (this.prev = prev), (this.timeDelta = delta);
        }
        jump(v) {
          this.updateAndNotify(v),
            (this.prev = v),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? velocityPerSecond(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta,
              )
            : 0;
        }
        start(startAnimation) {
          return (
            this.stop(),
            new Promise((resolve) => {
              (this.hasAnimated = !0),
                (this.animation = startAnimation(resolve)),
                this.events.animationStart && this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function motionValue(init, options) {
        return new MotionValue(init, options);
      }
      const testValueType = (v) => (type) => type.test(v),
        dimensionValueTypes = [
          number,
          px,
          percent,
          degrees,
          vw,
          vh,
          { test: (v) => 'auto' === v, parse: (v) => v },
        ],
        findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v)),
        valueTypes = [...dimensionValueTypes, color, complex],
        findValueType = (v) => valueTypes.find(testValueType(v));
      function setMotionValue(visualElement, key, value) {
        visualElement.hasValue(key)
          ? visualElement.getValue(key).set(value)
          : visualElement.addValue(key, motionValue(value));
      }
      function setTarget(visualElement, definition) {
        const resolved = resolveVariant(visualElement, definition);
        let {
          transitionEnd = {},
          transition = {},
          ...target
        } = resolved ? visualElement.makeTargetAnimatable(resolved, !1) : {};
        target = { ...target, ...transitionEnd };
        for (const key in target) {
          setMotionValue(visualElement, key, resolveFinalValueInKeyframes(target[key]));
        }
      }
      function getOriginFromTransition(key, transition) {
        if (!transition) return;
        return (transition[key] || transition.default || transition).from;
      }
      function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
        const shouldBlock =
          protectedKeys.hasOwnProperty(key) && !0 !== needsAnimating[key];
        return (needsAnimating[key] = !1), shouldBlock;
      }
      function animateTarget(
        visualElement,
        definition,
        { delay = 0, transitionOverride, type } = {},
      ) {
        let {
          transition = visualElement.getDefaultTransition(),
          transitionEnd,
          ...target
        } = visualElement.makeTargetAnimatable(definition);
        const willChange = visualElement.getValue('willChange');
        transitionOverride && (transition = transitionOverride);
        const animations = [],
          animationTypeState =
            type &&
            visualElement.animationState &&
            visualElement.animationState.getState()[type];
        for (const key in target) {
          const value = visualElement.getValue(key),
            valueTarget = target[key];
          if (
            !value ||
            void 0 === valueTarget ||
            (animationTypeState && shouldBlockAnimation(animationTypeState, key))
          )
            continue;
          const valueTransition = { delay, elapsed: 0, ...transition };
          if (window.HandoffAppearAnimations && !value.hasAnimated) {
            const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
            appearId &&
              (valueTransition.elapsed = window.HandoffAppearAnimations(
                appearId,
                key,
                value,
                frameloop.Wi,
              ));
          }
          value.start(
            animateMotionValue(
              key,
              value,
              valueTarget,
              visualElement.shouldReduceMotion && transformProps.has(key)
                ? { type: !1 }
                : valueTransition,
            ),
          );
          const animation = value.animation;
          isWillChangeMotionValue(willChange) &&
            (willChange.add(key), animation.then(() => willChange.remove(key))),
            animations.push(animation);
        }
        return (
          transitionEnd &&
            Promise.all(animations).then(() => {
              transitionEnd && setTarget(visualElement, transitionEnd);
            }),
          animations
        );
      }
      function animateVariant(visualElement, variant, options = {}) {
        const resolved = resolveVariant(visualElement, variant, options.custom);
        let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
        options.transitionOverride && (transition = options.transitionOverride);
        const getAnimation = resolved
            ? () => Promise.all(animateTarget(visualElement, resolved, options))
            : () => Promise.resolve(),
          getChildAnimations =
            visualElement.variantChildren && visualElement.variantChildren.size
              ? (forwardDelay = 0) => {
                  const {
                    delayChildren = 0,
                    staggerChildren,
                    staggerDirection,
                  } = transition;
                  return (function animateChildren(
                    visualElement,
                    variant,
                    delayChildren = 0,
                    staggerChildren = 0,
                    staggerDirection = 1,
                    options,
                  ) {
                    const animations = [],
                      maxStaggerDuration =
                        (visualElement.variantChildren.size - 1) * staggerChildren,
                      generateStaggerDuration =
                        1 === staggerDirection
                          ? (i = 0) => i * staggerChildren
                          : (i = 0) => maxStaggerDuration - i * staggerChildren;
                    return (
                      Array.from(visualElement.variantChildren)
                        .sort(sortByTreeOrder)
                        .forEach((child, i) => {
                          child.notify('AnimationStart', variant),
                            animations.push(
                              animateVariant(child, variant, {
                                ...options,
                                delay: delayChildren + generateStaggerDuration(i),
                              }).then(() => child.notify('AnimationComplete', variant)),
                            );
                        }),
                      Promise.all(animations)
                    );
                  })(
                    visualElement,
                    variant,
                    delayChildren + forwardDelay,
                    staggerChildren,
                    staggerDirection,
                    options,
                  );
                }
              : () => Promise.resolve(),
          { when } = transition;
        if (when) {
          const [first, last] =
            'beforeChildren' === when
              ? [getAnimation, getChildAnimations]
              : [getChildAnimations, getAnimation];
          return first().then(() => last());
        }
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
      }
      function sortByTreeOrder(a, b) {
        return a.sortNodePosition(b);
      }
      const reversePriorityOrder = [...variantPriorityOrder].reverse(),
        numAnimationTypes = variantPriorityOrder.length;
      function animateList(visualElement) {
        return (animations) =>
          Promise.all(
            animations.map(({ animation, options }) =>
              (function animateVisualElement(visualElement, definition, options = {}) {
                let animation;
                if (
                  (visualElement.notify('AnimationStart', definition),
                  Array.isArray(definition))
                ) {
                  const animations = definition.map((variant) =>
                    animateVariant(visualElement, variant, options),
                  );
                  animation = Promise.all(animations);
                } else if ('string' == typeof definition)
                  animation = animateVariant(visualElement, definition, options);
                else {
                  const resolvedDefinition =
                    'function' == typeof definition
                      ? resolveVariant(visualElement, definition, options.custom)
                      : definition;
                  animation = Promise.all(
                    animateTarget(visualElement, resolvedDefinition, options),
                  );
                }
                return animation.then(() =>
                  visualElement.notify('AnimationComplete', definition),
                );
              })(visualElement, animation, options),
            ),
          );
      }
      function createAnimationState(visualElement) {
        let animate = animateList(visualElement);
        const state = (function createState() {
          return {
            animate: createTypeState(!0),
            whileInView: createTypeState(),
            whileHover: createTypeState(),
            whileTap: createTypeState(),
            whileDrag: createTypeState(),
            whileFocus: createTypeState(),
            exit: createTypeState(),
          };
        })();
        let isInitialRender = !0;
        const buildResolvedTypeValues = (acc, definition) => {
          const resolved = resolveVariant(visualElement, definition);
          if (resolved) {
            const { transition, transitionEnd, ...target } = resolved;
            acc = { ...acc, ...target, ...transitionEnd };
          }
          return acc;
        };
        function animateChanges(options, changedActiveType) {
          const props = visualElement.getProps(),
            context = visualElement.getVariantContext(!0) || {},
            animations = [],
            removedKeys = new Set();
          let encounteredKeys = {},
            removedVariantIndex = 1 / 0;
          for (let i = 0; i < numAnimationTypes; i++) {
            const type = reversePriorityOrder[i],
              typeState = state[type],
              prop = void 0 !== props[type] ? props[type] : context[type],
              propIsVariant = isVariantLabel(prop),
              activeDelta = type === changedActiveType ? typeState.isActive : null;
            !1 === activeDelta && (removedVariantIndex = i);
            let isInherited =
              prop === context[type] && prop !== props[type] && propIsVariant;
            if (
              (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount &&
                (isInherited = !1),
              (typeState.protectedKeys = { ...encounteredKeys }),
              (!typeState.isActive && null === activeDelta) ||
                (!prop && !typeState.prevProp) ||
                isAnimationControls(prop) ||
                'boolean' == typeof prop)
            )
              continue;
            const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType =
              variantDidChange ||
              (type === changedActiveType &&
                typeState.isActive &&
                !isInherited &&
                propIsVariant) ||
              (i > removedVariantIndex && propIsVariant);
            const definitionList = Array.isArray(prop) ? prop : [prop];
            let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            !1 === activeDelta && (resolvedValues = {});
            const { prevResolvedValues = {} } = typeState,
              allKeys = { ...prevResolvedValues, ...resolvedValues },
              markToAnimate = (key) => {
                (shouldAnimateType = !0),
                  removedKeys.delete(key),
                  (typeState.needsAnimating[key] = !0);
              };
            for (const key in allKeys) {
              const next = resolvedValues[key],
                prev = prevResolvedValues[key];
              encounteredKeys.hasOwnProperty(key) ||
                (next !== prev
                  ? isKeyframesTarget(next) && isKeyframesTarget(prev)
                    ? !shallowCompare(next, prev) || variantDidChange
                      ? markToAnimate(key)
                      : (typeState.protectedKeys[key] = !0)
                    : void 0 !== next
                    ? markToAnimate(key)
                    : removedKeys.add(key)
                  : void 0 !== next && removedKeys.has(key)
                  ? markToAnimate(key)
                  : (typeState.protectedKeys[key] = !0));
            }
            (typeState.prevProp = prop),
              (typeState.prevResolvedValues = resolvedValues),
              typeState.isActive &&
                (encounteredKeys = { ...encounteredKeys, ...resolvedValues }),
              isInitialRender &&
                visualElement.blockInitialAnimation &&
                (shouldAnimateType = !1),
              shouldAnimateType &&
                !isInherited &&
                animations.push(
                  ...definitionList.map((animation) => ({
                    animation,
                    options: { type, ...options },
                  })),
                );
          }
          if (removedKeys.size) {
            const fallbackAnimation = {};
            removedKeys.forEach((key) => {
              const fallbackTarget = visualElement.getBaseTarget(key);
              void 0 !== fallbackTarget && (fallbackAnimation[key] = fallbackTarget);
            }),
              animations.push({ animation: fallbackAnimation });
          }
          let shouldAnimate = Boolean(animations.length);
          return (
            isInitialRender &&
              !1 === props.initial &&
              !visualElement.manuallyAnimateOnMount &&
              (shouldAnimate = !1),
            (isInitialRender = !1),
            shouldAnimate ? animate(animations) : Promise.resolve()
          );
        }
        return {
          animateChanges,
          setActive: function setActive(type, isActive, options) {
            var _a;
            if (state[type].isActive === isActive) return Promise.resolve();
            null === (_a = visualElement.variantChildren) ||
              void 0 === _a ||
              _a.forEach((child) => {
                var _a;
                return null === (_a = child.animationState) || void 0 === _a
                  ? void 0
                  : _a.setActive(type, isActive);
              }),
              (state[type].isActive = isActive);
            const animations = animateChanges(options, type);
            for (const key in state) state[key].protectedKeys = {};
            return animations;
          },
          setAnimateFunction: function setAnimateFunction(makeAnimator) {
            animate = makeAnimator(visualElement);
          },
          getState: () => state,
        };
      }
      function checkVariantsDidChange(prev, next) {
        return 'string' == typeof next
          ? next !== prev
          : !!Array.isArray(next) && !shallowCompare(next, prev);
      }
      function createTypeState(isActive = !1) {
        return {
          isActive,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let id = 0;
      const animations = {
          animation: {
            Feature: class AnimationFeature extends Feature {
              constructor(node) {
                super(node),
                  node.animationState ||
                    (node.animationState = createAnimationState(node));
              }
              updateAnimationControlsSubscription() {
                const { animate } = this.node.getProps();
                this.unmount(),
                  isAnimationControls(animate) &&
                    (this.unmount = animate.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                const { animate } = this.node.getProps(),
                  { animate: prevAnimate } = this.node.prevProps || {};
                animate !== prevAnimate && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class ExitAnimationFeature extends Feature {
              constructor() {
                super(...arguments), (this.id = id++);
              }
              update() {
                if (!this.node.presenceContext) return;
                const { isPresent, onExitComplete, custom } = this.node.presenceContext,
                  { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || isPresent === prevIsPresent) return;
                const exitAnimation = this.node.animationState.setActive(
                  'exit',
                  !isPresent,
                  { custom: null != custom ? custom : this.node.getProps().custom },
                );
                onExitComplete &&
                  !isPresent &&
                  exitAnimation.then(() => onExitComplete(this.id));
              }
              mount() {
                const { register } = this.node.presenceContext || {};
                register && (this.unmount = register(this.id));
              }
              unmount() {}
            },
          },
        },
        distance = (a, b) => Math.abs(a - b);
      class PanSession {
        constructor(event, handlers, { transformPagePoint } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const info = getPanInfo(this.lastMoveEventInfo, this.history),
                isPanStarted = null !== this.startEvent,
                isDistancePastThreshold =
                  (function distance2D(a, b) {
                    const xDelta = distance(a.x, b.x),
                      yDelta = distance(a.y, b.y);
                    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
                  })(info.offset, { x: 0, y: 0 }) >= 3;
              if (!isPanStarted && !isDistancePastThreshold) return;
              const { point } = info,
                { timestamp } = data.frameData;
              this.history.push({ ...point, timestamp });
              const { onStart, onMove } = this.handlers;
              isPanStarted ||
                (onStart && onStart(this.lastMoveEvent, info),
                (this.startEvent = this.lastMoveEvent)),
                onMove && onMove(this.lastMoveEvent, info);
            }),
            (this.handlePointerMove = (event, info) => {
              (this.lastMoveEvent = event),
                (this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint)),
                frameloop.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (event, info) => {
              if ((this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo)) return;
              const { onEnd, onSessionEnd } = this.handlers,
                panInfo = getPanInfo(
                  'pointercancel' === event.type
                    ? this.lastMoveEventInfo
                    : transformPoint(info, this.transformPagePoint),
                  this.history,
                );
              this.startEvent && onEnd && onEnd(event, panInfo),
                onSessionEnd && onSessionEnd(event, panInfo);
            }),
            !isPrimaryPointer(event))
          )
            return;
          (this.handlers = handlers), (this.transformPagePoint = transformPagePoint);
          const initialInfo = transformPoint(
              extractEventInfo(event),
              this.transformPagePoint,
            ),
            { point } = initialInfo,
            { timestamp } = data.frameData;
          this.history = [{ ...point, timestamp }];
          const { onSessionStart } = handlers;
          onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history)),
            (this.removeListeners = pipe(
              addPointerEvent(window, 'pointermove', this.handlePointerMove),
              addPointerEvent(window, 'pointerup', this.handlePointerUp),
              addPointerEvent(window, 'pointercancel', this.handlePointerUp),
            ));
        }
        updateHandlers(handlers) {
          this.handlers = handlers;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, frameloop.Pn)(this.updatePoint);
        }
      }
      function transformPoint(info, transformPagePoint) {
        return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
      }
      function subtractPoint(a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
      }
      function getPanInfo({ point }, history) {
        return {
          point,
          delta: subtractPoint(point, lastDevicePoint(history)),
          offset: subtractPoint(point, startDevicePoint(history)),
          velocity: PanSession_getVelocity(history, 0.1),
        };
      }
      function startDevicePoint(history) {
        return history[0];
      }
      function lastDevicePoint(history) {
        return history[history.length - 1];
      }
      function PanSession_getVelocity(history, timeDelta) {
        if (history.length < 2) return { x: 0, y: 0 };
        let i = history.length - 1,
          timestampedPoint = null;
        const lastPoint = lastDevicePoint(history);
        for (
          ;
          i >= 0 &&
          ((timestampedPoint = history[i]),
          !(
            lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta)
          ));

        )
          i--;
        if (!timestampedPoint) return { x: 0, y: 0 };
        const time = millisecondsToSeconds(
          lastPoint.timestamp - timestampedPoint.timestamp,
        );
        if (0 === time) return { x: 0, y: 0 };
        const currentVelocity = {
          x: (lastPoint.x - timestampedPoint.x) / time,
          y: (lastPoint.y - timestampedPoint.y) / time,
        };
        return (
          currentVelocity.x === 1 / 0 && (currentVelocity.x = 0),
          currentVelocity.y === 1 / 0 && (currentVelocity.y = 0),
          currentVelocity
        );
      }
      function calcLength(axis) {
        return axis.max - axis.min;
      }
      function isNear(value, target = 0, maxDistance = 0.01) {
        return Math.abs(value - target) <= maxDistance;
      }
      function calcAxisDelta(delta, source, target, origin = 0.5) {
        (delta.origin = origin),
          (delta.originPoint = mix(source.min, source.max, delta.origin)),
          (delta.scale = calcLength(target) / calcLength(source)),
          (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale)) && (delta.scale = 1),
          (delta.translate =
            mix(target.min, target.max, delta.origin) - delta.originPoint),
          (isNear(delta.translate) || isNaN(delta.translate)) && (delta.translate = 0);
      }
      function calcBoxDelta(delta, source, target, origin) {
        calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0),
          calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
      }
      function calcRelativeAxis(target, relative, parent) {
        (target.min = parent.min + relative.min),
          (target.max = target.min + calcLength(relative));
      }
      function calcRelativeAxisPosition(target, layout, parent) {
        (target.min = layout.min - parent.min),
          (target.max = target.min + calcLength(layout));
      }
      function calcRelativePosition(target, layout, parent) {
        calcRelativeAxisPosition(target.x, layout.x, parent.x),
          calcRelativeAxisPosition(target.y, layout.y, parent.y);
      }
      function calcRelativeAxisConstraints(axis, min, max) {
        return {
          min: void 0 !== min ? axis.min + min : void 0,
          max: void 0 !== max ? axis.max + max - (axis.max - axis.min) : void 0,
        };
      }
      function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
        let min = constraintsAxis.min - layoutAxis.min,
          max = constraintsAxis.max - layoutAxis.max;
        return (
          constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min &&
            ([min, max] = [max, min]),
          { min, max }
        );
      }
      const defaultElastic = 0.35;
      function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
        return {
          min: resolvePointElastic(dragElastic, minLabel),
          max: resolvePointElastic(dragElastic, maxLabel),
        };
      }
      function resolvePointElastic(dragElastic, label) {
        return 'number' == typeof dragElastic ? dragElastic : dragElastic[label] || 0;
      }
      const createDelta = () => ({
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        }),
        createBox = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
      function eachAxis(callback) {
        return [callback('x'), callback('y')];
      }
      function convertBoundingBoxToBox({ top, left, right, bottom }) {
        return { x: { min: left, max: right }, y: { min: top, max: bottom } };
      }
      function isIdentityScale(scale) {
        return void 0 === scale || 1 === scale;
      }
      function hasScale({ scale, scaleX, scaleY }) {
        return (
          !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY)
        );
      }
      function hasTransform(values) {
        return (
          hasScale(values) ||
          has2DTranslate(values) ||
          values.z ||
          values.rotate ||
          values.rotateX ||
          values.rotateY
        );
      }
      function has2DTranslate(values) {
        return is2DTranslate(values.x) || is2DTranslate(values.y);
      }
      function is2DTranslate(value) {
        return value && '0%' !== value;
      }
      function scalePoint(point, scale, originPoint) {
        return originPoint + scale * (point - originPoint);
      }
      function applyPointDelta(point, translate, scale, originPoint, boxScale) {
        return (
          void 0 !== boxScale && (point = scalePoint(point, boxScale, originPoint)),
          scalePoint(point, scale, originPoint) + translate
        );
      }
      function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
        (axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale)),
          (axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale));
      }
      function applyBoxDelta(box, { x, y }) {
        applyAxisDelta(box.x, x.translate, x.scale, x.originPoint),
          applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
      }
      function snapToDefault(scale) {
        return Number.isInteger(scale) ||
          scale > 1.0000000000001 ||
          scale < 0.999999999999
          ? scale
          : 1;
      }
      function translateAxis(axis, distance) {
        (axis.min = axis.min + distance), (axis.max = axis.max + distance);
      }
      function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
        const axisOrigin = void 0 !== transforms[originKey] ? transforms[originKey] : 0.5,
          originPoint = mix(axis.min, axis.max, axisOrigin);
        applyAxisDelta(
          axis,
          transforms[key],
          transforms[scaleKey],
          originPoint,
          transforms.scale,
        );
      }
      const xKeys = ['x', 'scaleX', 'originX'],
        yKeys = ['y', 'scaleY', 'originY'];
      function transformBox(box, transform) {
        transformAxis(box.x, transform, xKeys), transformAxis(box.y, transform, yKeys);
      }
      function measureViewportBox(instance, transformPoint) {
        return convertBoundingBoxToBox(
          (function transformBoxPoints(point, transformPoint) {
            if (!transformPoint) return point;
            const topLeft = transformPoint({ x: point.left, y: point.top }),
              bottomRight = transformPoint({ x: point.right, y: point.bottom });
            return {
              top: topLeft.y,
              left: topLeft.x,
              bottom: bottomRight.y,
              right: bottomRight.x,
            };
          })(instance.getBoundingClientRect(), transformPoint),
        );
      }
      const elementDragControls = new WeakMap();
      class VisualElementDragControls {
        constructor(visualElement) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = createBox()),
            (this.visualElement = visualElement);
        }
        start(originEvent, { snapToCursor = !1 } = {}) {
          const { presenceContext } = this.visualElement;
          if (presenceContext && !1 === presenceContext.isPresent) return;
          this.panSession = new PanSession(
            originEvent,
            {
              onSessionStart: (event) => {
                this.stopAnimation(),
                  snapToCursor &&
                    this.snapToCursor(extractEventInfo(event, 'page').point);
              },
              onStart: (event, info) => {
                const { drag, dragPropagation, onDragStart } = this.getProps();
                if (
                  drag &&
                  !dragPropagation &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = getGlobalLock(drag)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  eachAxis((axis) => {
                    let current = this.getAxisMotionValue(axis).get() || 0;
                    if (percent.test(current)) {
                      const { projection } = this.visualElement;
                      if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                          current =
                            calcLength(measuredAxis) * (parseFloat(current) / 100);
                        }
                      }
                    }
                    this.originPoint[axis] = current;
                  }),
                  onDragStart &&
                    frameloop.Wi.update(() => onDragStart(event, info), !1, !0);
                const { animationState } = this.visualElement;
                animationState && animationState.setActive('whileDrag', !0);
              },
              onMove: (event, info) => {
                const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } =
                  this.getProps();
                if (!dragPropagation && !this.openGlobalLock) return;
                const { offset } = info;
                if (dragDirectionLock && null === this.currentDirection)
                  return (
                    (this.currentDirection = (function getCurrentDirection(
                      offset,
                      lockThreshold = 10,
                    ) {
                      let direction = null;
                      Math.abs(offset.y) > lockThreshold
                        ? (direction = 'y')
                        : Math.abs(offset.x) > lockThreshold && (direction = 'x');
                      return direction;
                    })(offset)),
                    void (
                      null !== this.currentDirection &&
                      onDirectionLock &&
                      onDirectionLock(this.currentDirection)
                    )
                  );
                this.updateAxis('x', info.point, offset),
                  this.updateAxis('y', info.point, offset),
                  this.visualElement.render(),
                  onDrag && onDrag(event, info);
              },
              onSessionEnd: (event, info) => this.stop(event, info),
            },
            { transformPagePoint: this.visualElement.getTransformPagePoint() },
          );
        }
        stop(event, info) {
          const isDragging = this.isDragging;
          if ((this.cancel(), !isDragging)) return;
          const { velocity } = info;
          this.startAnimation(velocity);
          const { onDragEnd } = this.getProps();
          onDragEnd && frameloop.Wi.update(() => onDragEnd(event, info));
        }
        cancel() {
          this.isDragging = !1;
          const { projection, animationState } = this.visualElement;
          projection && (projection.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          const { dragPropagation } = this.getProps();
          !dragPropagation &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            animationState && animationState.setActive('whileDrag', !1);
        }
        updateAxis(axis, _point, offset) {
          const { drag } = this.getProps();
          if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
          const axisValue = this.getAxisMotionValue(axis);
          let next = this.originPoint[axis] + offset[axis];
          this.constraints &&
            this.constraints[axis] &&
            (next = (function applyConstraints(point, { min, max }, elastic) {
              return (
                void 0 !== min && point < min
                  ? (point = elastic
                      ? mix(min, point, elastic.min)
                      : Math.max(point, min))
                  : void 0 !== max &&
                    point > max &&
                    (point = elastic
                      ? mix(max, point, elastic.max)
                      : Math.min(point, max)),
                point
              );
            })(next, this.constraints[axis], this.elastic[axis])),
            axisValue.set(next);
        }
        resolveConstraints() {
          const { dragConstraints, dragElastic } = this.getProps(),
            { layout } = this.visualElement.projection || {},
            prevConstraints = this.constraints;
          dragConstraints && isRefObject(dragConstraints)
            ? this.constraints || (this.constraints = this.resolveRefConstraints())
            : (this.constraints =
                !(!dragConstraints || !layout) &&
                (function calcRelativeConstraints(
                  layoutBox,
                  { top, left, bottom, right },
                ) {
                  return {
                    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
                    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
                  };
                })(layout.layoutBox, dragConstraints)),
            (this.elastic = (function resolveDragElastic(dragElastic = defaultElastic) {
              return (
                !1 === dragElastic
                  ? (dragElastic = 0)
                  : !0 === dragElastic && (dragElastic = defaultElastic),
                {
                  x: resolveAxisElastic(dragElastic, 'left', 'right'),
                  y: resolveAxisElastic(dragElastic, 'top', 'bottom'),
                }
              );
            })(dragElastic)),
            prevConstraints !== this.constraints &&
              layout &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eachAxis((axis) => {
                this.getAxisMotionValue(axis) &&
                  (this.constraints[axis] = (function rebaseAxisConstraints(
                    layout,
                    constraints,
                  ) {
                    const relativeConstraints = {};
                    return (
                      void 0 !== constraints.min &&
                        (relativeConstraints.min = constraints.min - layout.min),
                      void 0 !== constraints.max &&
                        (relativeConstraints.max = constraints.max - layout.min),
                      relativeConstraints
                    );
                  })(layout.layoutBox[axis], this.constraints[axis]));
              });
        }
        resolveRefConstraints() {
          const { dragConstraints: constraints, onMeasureDragConstraints } =
            this.getProps();
          if (!constraints || !isRefObject(constraints)) return !1;
          const constraintsElement = constraints.current;
          (0, errors.k)(
            null !== constraintsElement,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          const { projection } = this.visualElement;
          if (!projection || !projection.layout) return !1;
          const constraintsBox = (function measurePageBox(
            element,
            rootProjectionNode,
            transformPagePoint,
          ) {
            const viewportBox = measureViewportBox(element, transformPagePoint),
              { scroll } = rootProjectionNode;
            return (
              scroll &&
                (translateAxis(viewportBox.x, scroll.offset.x),
                translateAxis(viewportBox.y, scroll.offset.y)),
              viewportBox
            );
          })(
            constraintsElement,
            projection.root,
            this.visualElement.getTransformPagePoint(),
          );
          let measuredConstraints = (function calcViewportConstraints(
            layoutBox,
            constraintsBox,
          ) {
            return {
              x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
              y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
            };
          })(projection.layout.layoutBox, constraintsBox);
          if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints(
              (function convertBoxToBoundingBox({ x, y }) {
                return { top: y.min, right: x.max, bottom: y.max, left: x.min };
              })(measuredConstraints),
            );
            (this.hasMutatedConstraints = !!userConstraints),
              userConstraints &&
                (measuredConstraints = convertBoundingBoxToBox(userConstraints));
          }
          return measuredConstraints;
        }
        startAnimation(velocity) {
          const {
              drag,
              dragMomentum,
              dragElastic,
              dragTransition,
              dragSnapToOrigin,
              onDragTransitionEnd,
            } = this.getProps(),
            constraints = this.constraints || {},
            momentumAnimations = eachAxis((axis) => {
              if (!shouldDrag(axis, drag, this.currentDirection)) return;
              let transition = (constraints && constraints[axis]) || {};
              dragSnapToOrigin && (transition = { min: 0, max: 0 });
              const bounceStiffness = dragElastic ? 200 : 1e6,
                bounceDamping = dragElastic ? 40 : 1e7,
                inertia = {
                  type: 'inertia',
                  velocity: dragMomentum ? velocity[axis] : 0,
                  bounceStiffness,
                  bounceDamping,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...dragTransition,
                  ...transition,
                };
              return this.startAxisValueAnimation(axis, inertia);
            });
          return Promise.all(momentumAnimations).then(onDragTransitionEnd);
        }
        startAxisValueAnimation(axis, transition) {
          const axisValue = this.getAxisMotionValue(axis);
          return axisValue.start(animateMotionValue(axis, axisValue, 0, transition));
        }
        stopAnimation() {
          eachAxis((axis) => this.getAxisMotionValue(axis).stop());
        }
        getAxisMotionValue(axis) {
          const dragKey = '_drag' + axis.toUpperCase(),
            props = this.visualElement.getProps(),
            externalMotionValue = props[dragKey];
          return (
            externalMotionValue ||
            this.visualElement.getValue(
              axis,
              (props.initial ? props.initial[axis] : void 0) || 0,
            )
          );
        }
        snapToCursor(point) {
          eachAxis((axis) => {
            const { drag } = this.getProps();
            if (!shouldDrag(axis, drag, this.currentDirection)) return;
            const { projection } = this.visualElement,
              axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
              const { min, max } = projection.layout.layoutBox[axis];
              axisValue.set(point[axis] - mix(min, max, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          const { drag, dragConstraints } = this.getProps(),
            { projection } = this.visualElement;
          if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
          this.stopAnimation();
          const boxProgress = { x: 0, y: 0 };
          eachAxis((axis) => {
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue) {
              const latest = axisValue.get();
              boxProgress[axis] = (function constraints_calcOrigin(source, target) {
                let origin = 0.5;
                const sourceLength = calcLength(source),
                  targetLength = calcLength(target);
                return (
                  targetLength > sourceLength
                    ? (origin = progress(
                        target.min,
                        target.max - sourceLength,
                        source.min,
                      ))
                    : sourceLength > targetLength &&
                      (origin = progress(
                        source.min,
                        source.max - targetLength,
                        target.min,
                      )),
                  clamp(0, 1, origin)
                );
              })({ min: latest, max: latest }, this.constraints[axis]);
            }
          });
          const { transformTemplate } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = transformTemplate
            ? transformTemplate({}, '')
            : 'none'),
            projection.root && projection.root.updateScroll(),
            projection.updateLayout(),
            this.resolveConstraints(),
            eachAxis((axis) => {
              if (!shouldDrag(axis, drag, null)) return;
              const axisValue = this.getAxisMotionValue(axis),
                { min, max } = this.constraints[axis];
              axisValue.set(mix(min, max, boxProgress[axis]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          elementDragControls.set(this.visualElement, this);
          const stopPointerListener = addPointerEvent(
              this.visualElement.current,
              'pointerdown',
              (event) => {
                const { drag, dragListener = !0 } = this.getProps();
                drag && dragListener && this.start(event);
              },
            ),
            measureDragConstraints = () => {
              const { dragConstraints } = this.getProps();
              isRefObject(dragConstraints) &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection } = this.visualElement,
            stopMeasureLayoutListener = projection.addEventListener(
              'measure',
              measureDragConstraints,
            );
          projection &&
            !projection.layout &&
            (projection.root && projection.root.updateScroll(),
            projection.updateLayout()),
            measureDragConstraints();
          const stopResizeListener = addDomEvent(window, 'resize', () =>
              this.scalePositionWithinConstraints(),
            ),
            stopLayoutUpdateListener = projection.addEventListener(
              'didUpdate',
              ({ delta, hasLayoutChanged }) => {
                this.isDragging &&
                  hasLayoutChanged &&
                  (eachAxis((axis) => {
                    const motionValue = this.getAxisMotionValue(axis);
                    motionValue &&
                      ((this.originPoint[axis] += delta[axis].translate),
                      motionValue.set(motionValue.get() + delta[axis].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            stopResizeListener(),
              stopPointerListener(),
              stopMeasureLayoutListener(),
              stopLayoutUpdateListener && stopLayoutUpdateListener();
          };
        }
        getProps() {
          const props = this.visualElement.getProps(),
            {
              drag = !1,
              dragDirectionLock = !1,
              dragPropagation = !1,
              dragConstraints = !1,
              dragElastic = defaultElastic,
              dragMomentum = !0,
            } = props;
          return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum,
          };
        }
      }
      function shouldDrag(direction, drag, currentDirection) {
        return !(
          (!0 !== drag && drag !== direction) ||
          (null !== currentDirection && currentDirection !== direction)
        );
      }
      const asyncHandler = (handler) => (event, info) => {
        handler && frameloop.Wi.update(() => handler(event, info));
      };
      const globalProjectionState = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function pixelsToPercent(pixels, axis) {
        return axis.max === axis.min ? 0 : (pixels / (axis.max - axis.min)) * 100;
      }
      const correctBorderRadius = {
          correct: (latest, node) => {
            if (!node.target) return latest;
            if ('string' == typeof latest) {
              if (!px.test(latest)) return latest;
              latest = parseFloat(latest);
            }
            return `${pixelsToPercent(latest, node.target.x)}% ${pixelsToPercent(
              latest,
              node.target.y,
            )}%`;
          },
        },
        correctBoxShadow = {
          correct: (latest, { treeScale, projectionDelta }) => {
            const original = latest,
              shadow = complex.parse(latest);
            if (shadow.length > 5) return original;
            const template = complex.createTransformer(latest),
              offset = 'number' != typeof shadow[0] ? 1 : 0,
              xScale = projectionDelta.x.scale * treeScale.x,
              yScale = projectionDelta.y.scale * treeScale.y;
            (shadow[0 + offset] /= xScale), (shadow[1 + offset] /= yScale);
            const averageScale = mix(xScale, yScale, 0.5);
            return (
              'number' == typeof shadow[2 + offset] &&
                (shadow[2 + offset] /= averageScale),
              'number' == typeof shadow[3 + offset] &&
                (shadow[3 + offset] /= averageScale),
              template(shadow)
            );
          },
        };
      class MeasureLayoutWithContext extends react.Component {
        componentDidMount() {
          const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props,
            { projection } = visualElement;
          !(function addScaleCorrector(correctors) {
            Object.assign(scaleCorrectors, correctors);
          })(defaultScaleCorrectors),
            projection &&
              (layoutGroup.group && layoutGroup.group.add(projection),
              switchLayoutGroup &&
                switchLayoutGroup.register &&
                layoutId &&
                switchLayoutGroup.register(projection),
              projection.root.didUpdate(),
              projection.addEventListener('animationComplete', () => {
                this.safeToRemove();
              }),
              projection.setOptions({
                ...projection.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (globalProjectionState.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(prevProps) {
          const { layoutDependency, visualElement, drag, isPresent } = this.props,
            projection = visualElement.projection;
          return projection
            ? ((projection.isPresent = isPresent),
              drag ||
              prevProps.layoutDependency !== layoutDependency ||
              void 0 === layoutDependency
                ? projection.willUpdate()
                : this.safeToRemove(),
              prevProps.isPresent !== isPresent &&
                (isPresent
                  ? projection.promote()
                  : projection.relegate() ||
                    frameloop.Wi.postRender(() => {
                      const stack = projection.getStack();
                      (stack && stack.members.length) || this.safeToRemove();
                    })),
              null)
            : null;
        }
        componentDidUpdate() {
          const { projection } = this.props.visualElement;
          projection &&
            (projection.root.didUpdate(),
            queueMicrotask(() => {
              !projection.currentAnimation && projection.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          const {
              visualElement,
              layoutGroup,
              switchLayoutGroup: promoteContext,
            } = this.props,
            { projection } = visualElement;
          projection &&
            (projection.scheduleCheckAfterUnmount(),
            layoutGroup && layoutGroup.group && layoutGroup.group.remove(projection),
            promoteContext &&
              promoteContext.deregister &&
              promoteContext.deregister(projection));
        }
        safeToRemove() {
          const { safeToRemove } = this.props;
          safeToRemove && safeToRemove();
        }
        render() {
          return null;
        }
      }
      function MeasureLayout(props) {
        const [isPresent, safeToRemove] = (function usePresence() {
            const context = (0, react.useContext)(context_PresenceContext.O);
            if (null === context) return [!0, null];
            const { isPresent, onExitComplete, register } = context,
              id = (0, react.useId)();
            return (
              (0, react.useEffect)(() => register(id), []),
              !isPresent && onExitComplete
                ? [!1, () => onExitComplete && onExitComplete(id)]
                : [!0]
            );
          })(),
          layoutGroup = (0, react.useContext)(LayoutGroupContext.p);
        return react.createElement(MeasureLayoutWithContext, {
          ...props,
          layoutGroup,
          switchLayoutGroup: (0, react.useContext)(SwitchLayoutGroupContext),
          isPresent,
          safeToRemove,
        });
      }
      const defaultScaleCorrectors = {
          borderRadius: {
            ...correctBorderRadius,
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          },
          borderTopLeftRadius: correctBorderRadius,
          borderTopRightRadius: correctBorderRadius,
          borderBottomLeftRadius: correctBorderRadius,
          borderBottomRightRadius: correctBorderRadius,
          boxShadow: correctBoxShadow,
        },
        borders = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        numBorders = borders.length,
        asNumber = (value) => ('string' == typeof value ? parseFloat(value) : value),
        isPx = (value) => 'number' == typeof value || px.test(value);
      function getRadius(values, radiusName) {
        return void 0 !== values[radiusName] ? values[radiusName] : values.borderRadius;
      }
      const easeCrossfadeIn = compress(0, 0.5, circOut),
        easeCrossfadeOut = compress(0.5, 0.95, noop.Z);
      function compress(min, max, easing) {
        return (p) => (p < min ? 0 : p > max ? 1 : easing(progress(min, max, p)));
      }
      function copyAxisInto(axis, originAxis) {
        (axis.min = originAxis.min), (axis.max = originAxis.max);
      }
      function copyBoxInto(box, originBox) {
        copyAxisInto(box.x, originBox.x), copyAxisInto(box.y, originBox.y);
      }
      function removePointDelta(point, translate, scale, originPoint, boxScale) {
        return (
          (point = scalePoint((point -= translate), 1 / scale, originPoint)),
          void 0 !== boxScale && (point = scalePoint(point, 1 / boxScale, originPoint)),
          point
        );
      }
      function removeAxisTransforms(
        axis,
        transforms,
        [key, scaleKey, originKey],
        origin,
        sourceAxis,
      ) {
        !(function removeAxisDelta(
          axis,
          translate = 0,
          scale = 1,
          origin = 0.5,
          boxScale,
          originAxis = axis,
          sourceAxis = axis,
        ) {
          percent.test(translate) &&
            ((translate = parseFloat(translate)),
            (translate =
              mix(sourceAxis.min, sourceAxis.max, translate / 100) - sourceAxis.min));
          if ('number' != typeof translate) return;
          let originPoint = mix(originAxis.min, originAxis.max, origin);
          axis === originAxis && (originPoint -= translate),
            (axis.min = removePointDelta(
              axis.min,
              translate,
              scale,
              originPoint,
              boxScale,
            )),
            (axis.max = removePointDelta(
              axis.max,
              translate,
              scale,
              originPoint,
              boxScale,
            ));
        })(
          axis,
          transforms[key],
          transforms[scaleKey],
          transforms[originKey],
          transforms.scale,
          origin,
          sourceAxis,
        );
      }
      const delta_remove_xKeys = ['x', 'scaleX', 'originX'],
        delta_remove_yKeys = ['y', 'scaleY', 'originY'];
      function removeBoxTransforms(box, transforms, originBox, sourceBox) {
        removeAxisTransforms(
          box.x,
          transforms,
          delta_remove_xKeys,
          originBox ? originBox.x : void 0,
          sourceBox ? sourceBox.x : void 0,
        ),
          removeAxisTransforms(
            box.y,
            transforms,
            delta_remove_yKeys,
            originBox ? originBox.y : void 0,
            sourceBox ? sourceBox.y : void 0,
          );
      }
      function isAxisDeltaZero(delta) {
        return 0 === delta.translate && 1 === delta.scale;
      }
      function isDeltaZero(delta) {
        return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
      }
      function boxEquals(a, b) {
        return (
          a.x.min === b.x.min &&
          a.x.max === b.x.max &&
          a.y.min === b.y.min &&
          a.y.max === b.y.max
        );
      }
      function aspectRatio(box) {
        return calcLength(box.x) / calcLength(box.y);
      }
      class NodeStack {
        constructor() {
          this.members = [];
        }
        add(node) {
          addUniqueItem(this.members, node), node.scheduleRender();
        }
        remove(node) {
          if (
            (removeItem(this.members, node),
            node === this.prevLead && (this.prevLead = void 0),
            node === this.lead)
          ) {
            const prevLead = this.members[this.members.length - 1];
            prevLead && this.promote(prevLead);
          }
        }
        relegate(node) {
          const indexOfNode = this.members.findIndex((member) => node === member);
          if (0 === indexOfNode) return !1;
          let prevLead;
          for (let i = indexOfNode; i >= 0; i--) {
            const member = this.members[i];
            if (!1 !== member.isPresent) {
              prevLead = member;
              break;
            }
          }
          return !!prevLead && (this.promote(prevLead), !0);
        }
        promote(node, preserveFollowOpacity) {
          const prevLead = this.lead;
          if (
            node !== prevLead &&
            ((this.prevLead = prevLead), (this.lead = node), node.show(), prevLead)
          ) {
            prevLead.instance && prevLead.scheduleRender(),
              node.scheduleRender(),
              (node.resumeFrom = prevLead),
              preserveFollowOpacity && (node.resumeFrom.preserveOpacity = !0),
              prevLead.snapshot &&
                ((node.snapshot = prevLead.snapshot),
                (node.snapshot.latestValues =
                  prevLead.animationValues || prevLead.latestValues)),
              node.root && node.root.isUpdating && (node.isLayoutDirty = !0);
            const { crossfade } = node.options;
            !1 === crossfade && prevLead.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((node) => {
            const { options, resumingFrom } = node;
            options.onExitComplete && options.onExitComplete(),
              resumingFrom &&
                resumingFrom.options.onExitComplete &&
                resumingFrom.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((node) => {
            node.instance && node.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function buildProjectionTransform(delta, treeScale, latestTransform) {
        let transform = '';
        const xTranslate = delta.x.translate / treeScale.x,
          yTranslate = delta.y.translate / treeScale.y;
        if (
          ((xTranslate || yTranslate) &&
            (transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `),
          (1 === treeScale.x && 1 === treeScale.y) ||
            (transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `),
          latestTransform)
        ) {
          const { rotate, rotateX, rotateY } = latestTransform;
          rotate && (transform += `rotate(${rotate}deg) `),
            rotateX && (transform += `rotateX(${rotateX}deg) `),
            rotateY && (transform += `rotateY(${rotateY}deg) `);
        }
        const elementScaleX = delta.x.scale * treeScale.x,
          elementScaleY = delta.y.scale * treeScale.y;
        return (
          (1 === elementScaleX && 1 === elementScaleY) ||
            (transform += `scale(${elementScaleX}, ${elementScaleY})`),
          transform || 'none'
        );
      }
      const compareByDepth = (a, b) => a.depth - b.depth;
      class FlatTree {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(child) {
          addUniqueItem(this.children, child), (this.isDirty = !0);
        }
        remove(child) {
          removeItem(this.children, child), (this.isDirty = !0);
        }
        forEach(callback) {
          this.isDirty && this.children.sort(compareByDepth),
            (this.isDirty = !1),
            this.children.forEach(callback);
        }
      }
      const transformAxes = ['', 'X', 'Y', 'Z'];
      let create_projection_node_id = 0;
      const projectionFrameData = {
        type: 'projectionFrame',
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0,
      };
      function createProjectionNode({
        attachResizeListener,
        defaultParent,
        measureScroll,
        checkIsScrollRoot,
        resetTransform,
      }) {
        return class ProjectionNode {
          constructor(
            latestValues = {},
            parent = null == defaultParent ? void 0 : defaultParent(),
          ) {
            (this.id = create_projection_node_id++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (projectionFrameData.totalNodes =
                  projectionFrameData.resolvedTargetDeltas =
                  projectionFrameData.recalculatedProjection =
                    0),
                  this.nodes.forEach(propagateDirtyNodes),
                  this.nodes.forEach(resolveTargetDelta),
                  this.nodes.forEach(calcProjection),
                  this.nodes.forEach(cleanDirtyNodes),
                  (function record(data) {
                    window.MotionDebug && window.MotionDebug.record(data);
                  })(projectionFrameData);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = latestValues),
              (this.root = parent ? parent.root || parent : this),
              (this.path = parent ? [...parent.path, parent] : []),
              (this.parent = parent),
              (this.depth = parent ? parent.depth + 1 : 0);
            for (let i = 0; i < this.path.length; i++)
              this.path[i].shouldResetTransform = !0;
            this.root === this && (this.nodes = new FlatTree());
          }
          addEventListener(name, handler) {
            return (
              this.eventHandlers.has(name) ||
                this.eventHandlers.set(name, new SubscriptionManager()),
              this.eventHandlers.get(name).add(handler)
            );
          }
          notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
          }
          hasListeners(name) {
            return this.eventHandlers.has(name);
          }
          mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (function isSVGElement(element) {
              return element instanceof SVGElement && 'svg' !== element.tagName;
            })(instance)),
              (this.instance = instance);
            const { layoutId, layout, visualElement } = this.options;
            if (
              (visualElement && !visualElement.current && visualElement.mount(instance),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              isLayoutDirty && (layout || layoutId) && (this.isLayoutDirty = !0),
              attachResizeListener)
            ) {
              let cancelDelay;
              const resizeUnblockUpdate = () => (this.root.updateBlockedByResize = !1);
              attachResizeListener(instance, () => {
                (this.root.updateBlockedByResize = !0),
                  cancelDelay && cancelDelay(),
                  (cancelDelay = (function delay(callback, timeout) {
                    const start = performance.now(),
                      checkElapsed = ({ timestamp }) => {
                        const elapsed = timestamp - start;
                        elapsed >= timeout &&
                          ((0, frameloop.Pn)(checkElapsed), callback(elapsed - timeout));
                      };
                    return (
                      frameloop.Wi.read(checkElapsed, !0),
                      () => (0, frameloop.Pn)(checkElapsed)
                    );
                  })(resizeUnblockUpdate, 250)),
                  globalProjectionState.hasAnimatedSinceResize &&
                    ((globalProjectionState.hasAnimatedSinceResize = !1),
                    this.nodes.forEach(finishAnimation));
              });
            }
            layoutId && this.root.registerSharedNode(layoutId, this),
              !1 !== this.options.animate &&
                visualElement &&
                (layoutId || layout) &&
                this.addEventListener(
                  'didUpdate',
                  ({
                    delta,
                    hasLayoutChanged,
                    hasRelativeTargetChanged,
                    layout: newLayout,
                  }) => {
                    if (this.isTreeAnimationBlocked())
                      return (this.target = void 0), void (this.relativeTarget = void 0);
                    const layoutTransition =
                        this.options.transition ||
                        visualElement.getDefaultTransition() ||
                        defaultLayoutTransition,
                      { onLayoutAnimationStart, onLayoutAnimationComplete } =
                        visualElement.getProps(),
                      targetChanged =
                        !this.targetLayout ||
                        !boxEquals(this.targetLayout, newLayout) ||
                        hasRelativeTargetChanged,
                      hasOnlyRelativeTargetChanged =
                        !hasLayoutChanged && hasRelativeTargetChanged;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      hasOnlyRelativeTargetChanged ||
                      (hasLayoutChanged && (targetChanged || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                      const animationOptions = {
                        ...getValueTransition(layoutTransition, 'layout'),
                        onPlay: onLayoutAnimationStart,
                        onComplete: onLayoutAnimationComplete,
                      };
                      (visualElement.shouldReduceMotion || this.options.layoutRoot) &&
                        ((animationOptions.delay = 0), (animationOptions.type = !1)),
                        this.startAnimation(animationOptions);
                    } else
                      hasLayoutChanged || finishAnimation(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = newLayout;
                  },
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, frameloop.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            this.isUpdateBlocked() ||
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(resetRotation),
              this.animationId++);
          }
          getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
          }
          willUpdate(shouldNotifyListeners = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
              return void (this.options.onExitComplete && this.options.onExitComplete());
            if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty))
              return;
            this.isLayoutDirty = !0;
            for (let i = 0; i < this.path.length; i++) {
              const node = this.path[i];
              (node.shouldResetTransform = !0),
                node.updateScroll('snapshot'),
                node.options.layoutRoot && node.willUpdate(!1);
            }
            const { layoutId, layout } = this.options;
            if (void 0 === layoutId && !layout) return;
            const transformTemplate = this.getTransformTemplate();
            (this.prevTransformTemplateValue = transformTemplate
              ? transformTemplate(this.latestValues, '')
              : void 0),
              this.updateSnapshot(),
              shouldNotifyListeners && this.notifyListeners('willUpdate');
          }
          update() {
            this.updateScheduled = !1;
            if (this.isUpdateBlocked())
              return (
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                void this.nodes.forEach(clearMeasurements)
              );
            this.isUpdating || this.nodes.forEach(clearIsLayoutDirty),
              (this.isUpdating = !1),
              this.nodes.forEach(resetTransformStyle),
              this.nodes.forEach(updateLayout),
              this.nodes.forEach(notifyLayoutUpdate),
              this.clearAllSnapshots();
            const now = performance.now();
            (data.frameData.delta = clamp(0, 1e3 / 60, now - data.frameData.timestamp)),
              (data.frameData.timestamp = now),
              (data.frameData.isProcessing = !0),
              frameloop.S6.update.process(data.frameData),
              frameloop.S6.preRender.process(data.frameData),
              frameloop.S6.render.process(data.frameData),
              (data.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot),
              this.sharedNodes.forEach(removeLeadSnapshots);
          }
          scheduleUpdateProjection() {
            frameloop.Wi.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            frameloop.Wi.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (!this.instance) return;
            if (
              (this.updateScroll(),
              !(
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                this.isLayoutDirty
              ))
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let i = 0; i < this.path.length; i++) {
                this.path[i].updateScroll();
              }
            const prevLayout = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = createBox()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners('measure', this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement &&
              visualElement.notify(
                'LayoutMeasure',
                this.layout.layoutBox,
                prevLayout ? prevLayout.layoutBox : void 0,
              );
          }
          updateScroll(phase = 'measure') {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === phase &&
              (needsMeasurement = !1),
              needsMeasurement &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase,
                  isRoot: checkIsScrollRoot(this.instance),
                  offset: measureScroll(this.instance),
                });
          }
          resetTransform() {
            if (!resetTransform) return;
            const isResetRequested = this.isLayoutDirty || this.shouldResetTransform,
              hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta),
              transformTemplate = this.getTransformTemplate(),
              transformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, '')
                : void 0,
              transformTemplateHasChanged =
                transformTemplateValue !== this.prevTransformTemplateValue;
            isResetRequested &&
              (hasProjection ||
                hasTransform(this.latestValues) ||
                transformTemplateHasChanged) &&
              (resetTransform(this.instance, transformTemplateValue),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(removeTransform = !0) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            return (
              removeTransform && (layoutBox = this.removeTransform(layoutBox)),
              (function roundBox(box) {
                roundAxis(box.x), roundAxis(box.y);
              })(layoutBox),
              {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            const { visualElement } = this.options;
            if (!visualElement) return createBox();
            const box = visualElement.measureViewportBox(),
              { scroll } = this.root;
            return (
              scroll &&
                (translateAxis(box.x, scroll.offset.x),
                translateAxis(box.y, scroll.offset.y)),
              box
            );
          }
          removeElementScroll(box) {
            const boxWithoutScroll = createBox();
            copyBoxInto(boxWithoutScroll, box);
            for (let i = 0; i < this.path.length; i++) {
              const node = this.path[i],
                { scroll, options } = node;
              if (node !== this.root && scroll && options.layoutScroll) {
                if (scroll.isRoot) {
                  copyBoxInto(boxWithoutScroll, box);
                  const { scroll: rootScroll } = this.root;
                  rootScroll &&
                    (translateAxis(boxWithoutScroll.x, -rootScroll.offset.x),
                    translateAxis(boxWithoutScroll.y, -rootScroll.offset.y));
                }
                translateAxis(boxWithoutScroll.x, scroll.offset.x),
                  translateAxis(boxWithoutScroll.y, scroll.offset.y);
              }
            }
            return boxWithoutScroll;
          }
          applyTransform(box, transformOnly = !1) {
            const withTransforms = createBox();
            copyBoxInto(withTransforms, box);
            for (let i = 0; i < this.path.length; i++) {
              const node = this.path[i];
              !transformOnly &&
                node.options.layoutScroll &&
                node.scroll &&
                node !== node.root &&
                transformBox(withTransforms, {
                  x: -node.scroll.offset.x,
                  y: -node.scroll.offset.y,
                }),
                hasTransform(node.latestValues) &&
                  transformBox(withTransforms, node.latestValues);
            }
            return (
              hasTransform(this.latestValues) &&
                transformBox(withTransforms, this.latestValues),
              withTransforms
            );
          }
          removeTransform(box) {
            const boxWithoutTransform = createBox();
            copyBoxInto(boxWithoutTransform, box);
            for (let i = 0; i < this.path.length; i++) {
              const node = this.path[i];
              if (!node.instance) continue;
              if (!hasTransform(node.latestValues)) continue;
              hasScale(node.latestValues) && node.updateSnapshot();
              const sourceBox = createBox();
              copyBoxInto(sourceBox, node.measurePageBox()),
                removeBoxTransforms(
                  boxWithoutTransform,
                  node.latestValues,
                  node.snapshot ? node.snapshot.layoutBox : void 0,
                  sourceBox,
                );
            }
            return (
              hasTransform(this.latestValues) &&
                removeBoxTransforms(boxWithoutTransform, this.latestValues),
              boxWithoutTransform
            );
          }
          setTargetDelta(delta) {
            (this.targetDelta = delta),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(options) {
            this.options = {
              ...this.options,
              ...options,
              crossfade: void 0 === options.crossfade || options.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== data.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(forceRecalculation = !1) {
            var _a;
            const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty),
              this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            if (
              !(
                forceRecalculation ||
                (isShared && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (_a = this.parent) || void 0 === _a
                  ? void 0
                  : _a.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            const { layout, layoutId } = this.options;
            if (this.layout && (layout || layoutId)) {
              if (
                ((this.resolvedRelativeTargetAt = data.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                const relativeParent = this.getClosestProjectingParent();
                relativeParent && relativeParent.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = relativeParent),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = createBox()),
                    (this.relativeTargetOrigin = createBox()),
                    calcRelativePosition(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      relativeParent.layout.layoutBox,
                    ),
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = createBox()),
                    (this.targetWithTransforms = createBox())),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target
                    ? (this.forceRelativeParentToResolveTarget(),
                      (function calcRelativeBox(target, relative, parent) {
                        calcRelativeAxis(target.x, relative.x, parent.x),
                          calcRelativeAxis(target.y, relative.y, parent.y);
                      })(this.target, this.relativeTarget, this.relativeParent.target))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(this.layout.layoutBox))
                        : copyBoxInto(this.target, this.layout.layoutBox),
                      applyBoxDelta(this.target, this.targetDelta))
                    : copyBoxInto(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  const relativeParent = this.getClosestProjectingParent();
                  relativeParent &&
                  Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) &&
                  !relativeParent.options.layoutScroll &&
                  relativeParent.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = relativeParent),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = createBox()),
                      (this.relativeTargetOrigin = createBox()),
                      calcRelativePosition(
                        this.relativeTargetOrigin,
                        this.target,
                        relativeParent.target,
                      ),
                      copyBoxInto(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                projectionFrameData.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            if (
              this.parent &&
              !hasScale(this.parent.latestValues) &&
              !has2DTranslate(this.parent.latestValues)
            )
              return this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return Boolean(
              (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
                this.layout,
            );
          }
          calcProjection() {
            var _a;
            const lead = this.getLead(),
              isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (_a = this.parent) || void 0 === _a
                  ? void 0
                  : _a.isProjectionDirty)) &&
                (canSkip = !1),
              isShared &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (canSkip = !1),
              this.resolvedRelativeTargetAt === data.frameData.timestamp &&
                (canSkip = !1),
              canSkip)
            )
              return;
            const { layout, layoutId } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (this.parent && this.parent.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation,
              )),
              this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || (!layout && !layoutId))
            )
              return;
            copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
            const prevTreeScaleX = this.treeScale.x,
              prevTreeScaleY = this.treeScale.y;
            !(function applyTreeDeltas(
              box,
              treeScale,
              treePath,
              isSharedTransition = !1,
            ) {
              const treeLength = treePath.length;
              if (!treeLength) return;
              let node, delta;
              treeScale.x = treeScale.y = 1;
              for (let i = 0; i < treeLength; i++) {
                (node = treePath[i]), (delta = node.projectionDelta);
                const instance = node.instance;
                (instance && instance.style && 'contents' === instance.style.display) ||
                  (isSharedTransition &&
                    node.options.layoutScroll &&
                    node.scroll &&
                    node !== node.root &&
                    transformBox(box, {
                      x: -node.scroll.offset.x,
                      y: -node.scroll.offset.y,
                    }),
                  delta &&
                    ((treeScale.x *= delta.x.scale),
                    (treeScale.y *= delta.y.scale),
                    applyBoxDelta(box, delta)),
                  isSharedTransition &&
                    hasTransform(node.latestValues) &&
                    transformBox(box, node.latestValues));
              }
              (treeScale.x = snapToDefault(treeScale.x)),
                (treeScale.y = snapToDefault(treeScale.y));
            })(this.layoutCorrected, this.treeScale, this.path, isShared),
              !lead.layout ||
                lead.target ||
                (1 === this.treeScale.x && 1 === this.treeScale.y) ||
                (lead.target = lead.layout.layoutBox);
            const { target } = lead;
            if (!target)
              return void (
                this.projectionTransform &&
                ((this.projectionDelta = createDelta()),
                (this.projectionTransform = 'none'),
                this.scheduleRender())
              );
            this.projectionDelta ||
              ((this.projectionDelta = createDelta()),
              (this.projectionDeltaWithTransform = createDelta()));
            const prevProjectionTransform = this.projectionTransform;
            calcBoxDelta(
              this.projectionDelta,
              this.layoutCorrected,
              target,
              this.latestValues,
            ),
              (this.projectionTransform = buildProjectionTransform(
                this.projectionDelta,
                this.treeScale,
              )),
              (this.projectionTransform === prevProjectionTransform &&
                this.treeScale.x === prevTreeScaleX &&
                this.treeScale.y === prevTreeScaleY) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', target)),
              projectionFrameData.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(notifyAll = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), notifyAll)
            ) {
              const stack = this.getStack();
              stack && stack.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = !1) {
            const snapshot = this.snapshot,
              snapshotLatestValues = snapshot ? snapshot.latestValues : {},
              mixedValues = { ...this.latestValues },
              targetDelta = createDelta();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged);
            const relativeLayout = createBox(),
              isSharedLayoutAnimation =
                (snapshot ? snapshot.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              stack = this.getStack(),
              isOnlyMember = !stack || stack.members.length <= 1,
              shouldCrossfadeOpacity = Boolean(
                isSharedLayoutAnimation &&
                  !isOnlyMember &&
                  !0 === this.options.crossfade &&
                  !this.path.some(hasOpacityCrossfade),
              );
            let prevRelativeTarget;
            (this.animationProgress = 0),
              (this.mixTargetDelta = (latest) => {
                const progress = latest / 1e3;
                mixAxisDelta(targetDelta.x, delta.x, progress),
                  mixAxisDelta(targetDelta.y, delta.y, progress),
                  this.setTargetDelta(targetDelta),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (calcRelativePosition(
                      relativeLayout,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox,
                    ),
                    (function mixBox(output, from, to, p) {
                      mixAxis(output.x, from.x, to.x, p),
                        mixAxis(output.y, from.y, to.y, p);
                    })(
                      this.relativeTarget,
                      this.relativeTargetOrigin,
                      relativeLayout,
                      progress,
                    ),
                    prevRelativeTarget &&
                      boxEquals(this.relativeTarget, prevRelativeTarget) &&
                      (this.isProjectionDirty = !1),
                    prevRelativeTarget || (prevRelativeTarget = createBox()),
                    copyBoxInto(prevRelativeTarget, this.relativeTarget)),
                  isSharedLayoutAnimation &&
                    ((this.animationValues = mixedValues),
                    (function mixValues(
                      target,
                      follow,
                      lead,
                      progress,
                      shouldCrossfadeOpacity,
                      isOnlyMember,
                    ) {
                      shouldCrossfadeOpacity
                        ? ((target.opacity = mix(
                            0,
                            void 0 !== lead.opacity ? lead.opacity : 1,
                            easeCrossfadeIn(progress),
                          )),
                          (target.opacityExit = mix(
                            void 0 !== follow.opacity ? follow.opacity : 1,
                            0,
                            easeCrossfadeOut(progress),
                          )))
                        : isOnlyMember &&
                          (target.opacity = mix(
                            void 0 !== follow.opacity ? follow.opacity : 1,
                            void 0 !== lead.opacity ? lead.opacity : 1,
                            progress,
                          ));
                      for (let i = 0; i < numBorders; i++) {
                        const borderLabel = `border${borders[i]}Radius`;
                        let followRadius = getRadius(follow, borderLabel),
                          leadRadius = getRadius(lead, borderLabel);
                        (void 0 === followRadius && void 0 === leadRadius) ||
                          (followRadius || (followRadius = 0),
                          leadRadius || (leadRadius = 0),
                          0 === followRadius ||
                          0 === leadRadius ||
                          isPx(followRadius) === isPx(leadRadius)
                            ? ((target[borderLabel] = Math.max(
                                mix(
                                  asNumber(followRadius),
                                  asNumber(leadRadius),
                                  progress,
                                ),
                                0,
                              )),
                              (percent.test(leadRadius) || percent.test(followRadius)) &&
                                (target[borderLabel] += '%'))
                            : (target[borderLabel] = leadRadius));
                      }
                      (follow.rotate || lead.rotate) &&
                        (target.rotate = mix(
                          follow.rotate || 0,
                          lead.rotate || 0,
                          progress,
                        ));
                    })(
                      mixedValues,
                      snapshotLatestValues,
                      this.latestValues,
                      progress,
                      shouldCrossfadeOpacity,
                      isOnlyMember,
                    )),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = progress);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(options) {
            this.notifyListeners('animationStart'),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, frameloop.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = frameloop.Wi.update(() => {
                (globalProjectionState.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function animateSingleValue(
                    value,
                    keyframes,
                    options,
                  ) {
                    const motionValue$1 = isMotionValue(value)
                      ? value
                      : motionValue(value);
                    return (
                      motionValue$1.start(
                        animateMotionValue('', motionValue$1, keyframes, options),
                      ),
                      motionValue$1.animation
                    );
                  })(0, 1e3, {
                    ...options,
                    onUpdate: (latest) => {
                      this.mixTargetDelta(latest),
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onComplete: () => {
                      options.onComplete && options.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation = this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            const stack = this.getStack();
            stack && stack.exitAnimationComplete(),
              (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
              this.notifyListeners('animationComplete');
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (targetWithTransforms && target && layout) {
              if (
                this !== lead &&
                this.layout &&
                layout &&
                shouldAnimatePositionOnly(
                  this.options.animationType,
                  this.layout.layoutBox,
                  layout.layoutBox,
                )
              ) {
                target = this.target || createBox();
                const xLength = calcLength(this.layout.layoutBox.x);
                (target.x.min = lead.target.x.min),
                  (target.x.max = target.x.min + xLength);
                const yLength = calcLength(this.layout.layoutBox.y);
                (target.y.min = lead.target.y.min),
                  (target.y.max = target.y.min + yLength);
              }
              copyBoxInto(targetWithTransforms, target),
                transformBox(targetWithTransforms, latestValues),
                calcBoxDelta(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  targetWithTransforms,
                  latestValues,
                );
            }
          }
          registerSharedNode(layoutId, node) {
            this.sharedNodes.has(layoutId) ||
              this.sharedNodes.set(layoutId, new NodeStack());
            this.sharedNodes.get(layoutId).add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
              transition: config ? config.transition : void 0,
              preserveFollowOpacity:
                config && config.shouldPreserveFollowOpacity
                  ? config.shouldPreserveFollowOpacity(node)
                  : void 0,
            });
          }
          isLead() {
            const stack = this.getStack();
            return !stack || stack.lead === this;
          }
          getLead() {
            var _a;
            const { layoutId } = this.options;
            return (
              (layoutId &&
                (null === (_a = this.getStack()) || void 0 === _a ? void 0 : _a.lead)) ||
              this
            );
          }
          getPrevLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId
              ? null === (_a = this.getStack()) || void 0 === _a
                ? void 0
                : _a.prevLead
              : void 0;
          }
          getStack() {
            const { layoutId } = this.options;
            if (layoutId) return this.root.sharedNodes.get(layoutId);
          }
          promote({ needsReset, transition, preserveFollowOpacity } = {}) {
            const stack = this.getStack();
            stack && stack.promote(this, preserveFollowOpacity),
              needsReset && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              transition && this.setOptions({ transition });
          }
          relegate() {
            const stack = this.getStack();
            return !!stack && stack.relegate(this);
          }
          resetRotation() {
            const { visualElement } = this.options;
            if (!visualElement) return;
            let hasRotate = !1;
            const { latestValues } = visualElement;
            if (
              ((latestValues.rotate ||
                latestValues.rotateX ||
                latestValues.rotateY ||
                latestValues.rotateZ) &&
                (hasRotate = !0),
              !hasRotate)
            )
              return;
            const resetValues = {};
            for (let i = 0; i < transformAxes.length; i++) {
              const key = 'rotate' + transformAxes[i];
              latestValues[key] &&
                ((resetValues[key] = latestValues[key]),
                visualElement.setStaticValue(key, 0));
            }
            visualElement.render();
            for (const key in resetValues)
              visualElement.setStaticValue(key, resetValues[key]);
            visualElement.scheduleRender();
          }
          getProjectionStyles(styleProp = {}) {
            var _a, _b;
            const styles = {};
            if (!this.instance || this.isSVG) return styles;
            if (!this.isVisible) return { visibility: 'hidden' };
            styles.visibility = '';
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (styles.opacity = ''),
                (styles.pointerEvents =
                  resolveMotionValue(styleProp.pointerEvents) || ''),
                (styles.transform = transformTemplate
                  ? transformTemplate(this.latestValues, '')
                  : 'none'),
                styles
              );
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
              const emptyStyles = {};
              return (
                this.options.layoutId &&
                  ((emptyStyles.opacity =
                    void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
                  (emptyStyles.pointerEvents =
                    resolveMotionValue(styleProp.pointerEvents) || '')),
                this.hasProjected &&
                  !hasTransform(this.latestValues) &&
                  ((emptyStyles.transform = transformTemplate
                    ? transformTemplate({}, '')
                    : 'none'),
                  (this.hasProjected = !1)),
                emptyStyles
              );
            }
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget(),
              (styles.transform = buildProjectionTransform(
                this.projectionDeltaWithTransform,
                this.treeScale,
                valuesToRender,
              )),
              transformTemplate &&
                (styles.transform = transformTemplate(valuesToRender, styles.transform));
            const { x, y } = this.projectionDelta;
            (styles.transformOrigin = `${100 * x.origin}% ${100 * y.origin}% 0`),
              lead.animationValues
                ? (styles.opacity =
                    lead === this
                      ? null !==
                          (_b =
                            null !== (_a = valuesToRender.opacity) && void 0 !== _a
                              ? _a
                              : this.latestValues.opacity) && void 0 !== _b
                        ? _b
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : valuesToRender.opacityExit)
                : (styles.opacity =
                    lead === this
                      ? void 0 !== valuesToRender.opacity
                        ? valuesToRender.opacity
                        : ''
                      : void 0 !== valuesToRender.opacityExit
                      ? valuesToRender.opacityExit
                      : 0);
            for (const key in scaleCorrectors) {
              if (void 0 === valuesToRender[key]) continue;
              const { correct, applyTo } = scaleCorrectors[key],
                corrected =
                  'none' === styles.transform
                    ? valuesToRender[key]
                    : correct(valuesToRender[key], lead);
              if (applyTo) {
                const num = applyTo.length;
                for (let i = 0; i < num; i++) styles[applyTo[i]] = corrected;
              } else styles[key] = corrected;
            }
            return (
              this.options.layoutId &&
                (styles.pointerEvents =
                  lead === this
                    ? resolveMotionValue(styleProp.pointerEvents) || ''
                    : 'none'),
              styles
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((node) => {
              var _a;
              return null === (_a = node.currentAnimation) || void 0 === _a
                ? void 0
                : _a.stop();
            }),
              this.root.nodes.forEach(clearMeasurements),
              this.root.sharedNodes.clear();
          }
        };
      }
      function updateLayout(node) {
        node.updateLayout();
      }
      function notifyLayoutUpdate(node) {
        var _a;
        const snapshot =
          (null === (_a = node.resumeFrom) || void 0 === _a ? void 0 : _a.snapshot) ||
          node.snapshot;
        if (node.isLead() && node.layout && snapshot && node.hasListeners('didUpdate')) {
          const { layoutBox: layout, measuredBox: measuredLayout } = node.layout,
            { animationType } = node.options,
            isShared = snapshot.source !== node.layout.source;
          'size' === animationType
            ? eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis],
                  length = calcLength(axisSnapshot);
                (axisSnapshot.min = layout[axis].min),
                  (axisSnapshot.max = axisSnapshot.min + length);
              })
            : shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout) &&
              eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis],
                  length = calcLength(layout[axis]);
                (axisSnapshot.max = axisSnapshot.min + length),
                  node.relativeTarget &&
                    !node.currentAnimation &&
                    ((node.isProjectionDirty = !0),
                    (node.relativeTarget[axis].max =
                      node.relativeTarget[axis].min + length));
              });
          const layoutDelta = createDelta();
          calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
          const visualDelta = createDelta();
          isShared
            ? calcBoxDelta(
                visualDelta,
                node.applyTransform(measuredLayout, !0),
                snapshot.measuredBox,
              )
            : calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
          const hasLayoutChanged = !isDeltaZero(layoutDelta);
          let hasRelativeTargetChanged = !1;
          if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            if (relativeParent && !relativeParent.resumeFrom) {
              const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
              if (parentSnapshot && parentLayout) {
                const relativeSnapshot = createBox();
                calcRelativePosition(
                  relativeSnapshot,
                  snapshot.layoutBox,
                  parentSnapshot.layoutBox,
                );
                const relativeLayout = createBox();
                calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox),
                  boxEquals(relativeSnapshot, relativeLayout) ||
                    (hasRelativeTargetChanged = !0),
                  relativeParent.options.layoutRoot &&
                    ((node.relativeTarget = relativeLayout),
                    (node.relativeTargetOrigin = relativeSnapshot),
                    (node.relativeParent = relativeParent));
              }
            }
          }
          node.notifyListeners('didUpdate', {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeTargetChanged,
          });
        } else if (node.isLead()) {
          const { onExitComplete } = node.options;
          onExitComplete && onExitComplete();
        }
        node.options.transition = void 0;
      }
      function propagateDirtyNodes(node) {
        projectionFrameData.totalNodes++,
          node.parent &&
            (node.isProjecting() ||
              (node.isProjectionDirty = node.parent.isProjectionDirty),
            node.isSharedProjectionDirty ||
              (node.isSharedProjectionDirty = Boolean(
                node.isProjectionDirty ||
                  node.parent.isProjectionDirty ||
                  node.parent.isSharedProjectionDirty,
              )),
            node.isTransformDirty ||
              (node.isTransformDirty = node.parent.isTransformDirty));
      }
      function cleanDirtyNodes(node) {
        node.isProjectionDirty =
          node.isSharedProjectionDirty =
          node.isTransformDirty =
            !1;
      }
      function clearSnapshot(node) {
        node.clearSnapshot();
      }
      function clearMeasurements(node) {
        node.clearMeasurements();
      }
      function clearIsLayoutDirty(node) {
        node.isLayoutDirty = !1;
      }
      function resetTransformStyle(node) {
        const { visualElement } = node.options;
        visualElement &&
          visualElement.getProps().onBeforeLayoutMeasure &&
          visualElement.notify('BeforeLayoutMeasure'),
          node.resetTransform();
      }
      function finishAnimation(node) {
        node.finishAnimation(),
          (node.targetDelta = node.relativeTarget = node.target = void 0),
          (node.isProjectionDirty = !0);
      }
      function resolveTargetDelta(node) {
        node.resolveTargetDelta();
      }
      function calcProjection(node) {
        node.calcProjection();
      }
      function resetRotation(node) {
        node.resetRotation();
      }
      function removeLeadSnapshots(stack) {
        stack.removeLeadSnapshot();
      }
      function mixAxisDelta(output, delta, p) {
        (output.translate = mix(delta.translate, 0, p)),
          (output.scale = mix(delta.scale, 1, p)),
          (output.origin = delta.origin),
          (output.originPoint = delta.originPoint);
      }
      function mixAxis(output, from, to, p) {
        (output.min = mix(from.min, to.min, p)), (output.max = mix(from.max, to.max, p));
      }
      function hasOpacityCrossfade(node) {
        return node.animationValues && void 0 !== node.animationValues.opacityExit;
      }
      const defaultLayoutTransition = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function roundAxis(axis) {
        (axis.min = Math.round(axis.min)), (axis.max = Math.round(axis.max));
      }
      function shouldAnimatePositionOnly(animationType, snapshot, layout) {
        return (
          'position' === animationType ||
          ('preserve-aspect' === animationType &&
            !isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2))
        );
      }
      const DocumentProjectionNode = createProjectionNode({
          attachResizeListener: (ref, notify) => addDomEvent(ref, 'resize', notify),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rootProjectionNode = { current: void 0 },
        HTMLProjectionNode = createProjectionNode({
          measureScroll: (instance) => ({
            x: instance.scrollLeft,
            y: instance.scrollTop,
          }),
          defaultParent: () => {
            if (!rootProjectionNode.current) {
              const documentNode = new DocumentProjectionNode({});
              documentNode.mount(window),
                documentNode.setOptions({ layoutScroll: !0 }),
                (rootProjectionNode.current = documentNode);
            }
            return rootProjectionNode.current;
          },
          resetTransform: (instance, value) => {
            instance.style.transform = void 0 !== value ? value : 'none';
          },
          checkIsScrollRoot: (instance) =>
            Boolean('fixed' === window.getComputedStyle(instance).position),
        }),
        drag = {
          pan: {
            Feature: class PanGesture extends Feature {
              constructor() {
                super(...arguments), (this.removePointerDownListener = noop.Z);
              }
              onPointerDown(pointerDownEvent) {
                this.session = new PanSession(
                  pointerDownEvent,
                  this.createPanHandlers(),
                  { transformPagePoint: this.node.getTransformPagePoint() },
                );
              }
              createPanHandlers() {
                const { onPanSessionStart, onPanStart, onPan, onPanEnd } =
                  this.node.getProps();
                return {
                  onSessionStart: asyncHandler(onPanSessionStart),
                  onStart: asyncHandler(onPanStart),
                  onMove: onPan,
                  onEnd: (event, info) => {
                    delete this.session,
                      onPanEnd && frameloop.Wi.update(() => onPanEnd(event, info));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = addPointerEvent(
                  this.node.current,
                  'pointerdown',
                  (event) => this.onPointerDown(event),
                );
              }
              update() {
                this.session && this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(), this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class DragGesture extends Feature {
              constructor(node) {
                super(node),
                  (this.removeGroupControls = noop.Z),
                  (this.removeListeners = noop.Z),
                  (this.controls = new VisualElementDragControls(node));
              }
              mount() {
                const { dragControls } = this.node.getProps();
                dragControls &&
                  (this.removeGroupControls = dragControls.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || noop.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: HTMLProjectionNode,
            MeasureLayout,
          },
        },
        splitCSSVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      const maxDepth = 4;
      function getVariableValue(current, element, depth = 1) {
        (0, errors.k)(
          depth <= maxDepth,
          `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`,
        );
        const [token, fallback] = (function parseCSSVariable(current) {
          const match = splitCSSVariableRegex.exec(current);
          if (!match) return [,];
          const [, token, fallback] = match;
          return [token, fallback];
        })(current);
        if (!token) return;
        const resolved = window.getComputedStyle(element).getPropertyValue(token);
        return resolved
          ? resolved.trim()
          : isCSSVariableToken(fallback)
          ? getVariableValue(fallback, element, depth + 1)
          : fallback;
      }
      const positionalKeys = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
          'translateX',
          'translateY',
        ]),
        isPositionalKey = (key) => positionalKeys.has(key),
        isNumOrPxType = (v) => v === number || v === px,
        getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(', ')[pos]),
        getTranslateFromMatrix =
          (pos2, pos3) =>
          (_bbox, { transform }) => {
            if ('none' === transform || !transform) return 0;
            const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
            if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
            {
              const matrix = transform.match(/^matrix\((.+)\)$/);
              return matrix ? getPosFromMatrix(matrix[1], pos2) : 0;
            }
          },
        transformKeys = new Set(['x', 'y', 'z']),
        nonTranslationalTransformKeys = transformPropOrder.filter(
          (key) => !transformKeys.has(key),
        );
      const positionalValues = {
          width: ({ x }, { paddingLeft = '0', paddingRight = '0' }) =>
            x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
          height: ({ y }, { paddingTop = '0', paddingBottom = '0' }) =>
            y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
          top: (_bbox, { top }) => parseFloat(top),
          left: (_bbox, { left }) => parseFloat(left),
          bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
          right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
          x: getTranslateFromMatrix(4, 13),
          y: getTranslateFromMatrix(5, 14),
        },
        checkAndConvertChangedValueTypes = (
          visualElement,
          target,
          origin = {},
          transitionEnd = {},
        ) => {
          (target = { ...target }), (transitionEnd = { ...transitionEnd });
          const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
          let removedTransformValues = [],
            hasAttemptedToRemoveTransformValues = !1;
          const changedValueTypeKeys = [];
          if (
            (targetPositionalKeys.forEach((key) => {
              const value = visualElement.getValue(key);
              if (!visualElement.hasValue(key)) return;
              let from = origin[key],
                fromType = findDimensionValueType(from);
              const to = target[key];
              let toType;
              if (isKeyframesTarget(to)) {
                const numKeyframes = to.length,
                  fromIndex = null === to[0] ? 1 : 0;
                (from = to[fromIndex]), (fromType = findDimensionValueType(from));
                for (let i = fromIndex; i < numKeyframes && null !== to[i]; i++)
                  toType
                    ? (0, errors.k)(
                        findDimensionValueType(to[i]) === toType,
                        'All keyframes must be of the same type',
                      )
                    : ((toType = findDimensionValueType(to[i])),
                      (0, errors.k)(
                        toType === fromType ||
                          (isNumOrPxType(fromType) && isNumOrPxType(toType)),
                        'Keyframes must be of the same dimension as the current value',
                      ));
              } else toType = findDimensionValueType(to);
              if (fromType !== toType)
                if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                  const current = value.get();
                  'string' == typeof current && value.set(parseFloat(current)),
                    'string' == typeof to
                      ? (target[key] = parseFloat(to))
                      : Array.isArray(to) &&
                        toType === px &&
                        (target[key] = to.map(parseFloat));
                } else
                  (null == fromType ? void 0 : fromType.transform) &&
                  (null == toType ? void 0 : toType.transform) &&
                  (0 === from || 0 === to)
                    ? 0 === from
                      ? value.set(toType.transform(from))
                      : (target[key] = fromType.transform(to))
                    : (hasAttemptedToRemoveTransformValues ||
                        ((removedTransformValues =
                          (function removeNonTranslationalTransform(visualElement) {
                            const removedTransforms = [];
                            return (
                              nonTranslationalTransformKeys.forEach((key) => {
                                const value = visualElement.getValue(key);
                                void 0 !== value &&
                                  (removedTransforms.push([key, value.get()]),
                                  value.set(key.startsWith('scale') ? 1 : 0));
                              }),
                              removedTransforms.length && visualElement.render(),
                              removedTransforms
                            );
                          })(visualElement)),
                        (hasAttemptedToRemoveTransformValues = !0)),
                      changedValueTypeKeys.push(key),
                      (transitionEnd[key] =
                        void 0 !== transitionEnd[key] ? transitionEnd[key] : target[key]),
                      value.jump(to));
            }),
            changedValueTypeKeys.length)
          ) {
            const scrollY =
                changedValueTypeKeys.indexOf('height') >= 0 ? window.pageYOffset : null,
              convertedTarget = ((target, visualElement, changedKeys) => {
                const originBbox = visualElement.measureViewportBox(),
                  element = visualElement.current,
                  elementComputedStyle = getComputedStyle(element),
                  { display } = elementComputedStyle,
                  origin = {};
                'none' === display &&
                  visualElement.setStaticValue('display', target.display || 'block'),
                  changedKeys.forEach((key) => {
                    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
                  }),
                  visualElement.render();
                const targetBbox = visualElement.measureViewportBox();
                return (
                  changedKeys.forEach((key) => {
                    const value = visualElement.getValue(key);
                    value && value.jump(origin[key]),
                      (target[key] = positionalValues[key](
                        targetBbox,
                        elementComputedStyle,
                      ));
                  }),
                  target
                );
              })(target, visualElement, changedValueTypeKeys);
            return (
              removedTransformValues.length &&
                removedTransformValues.forEach(([key, value]) => {
                  visualElement.getValue(key).set(value);
                }),
              visualElement.render(),
              is_browser.j && null !== scrollY && window.scrollTo({ top: scrollY }),
              { target: convertedTarget, transitionEnd }
            );
          }
          return { target, transitionEnd };
        };
      function unitConversion(visualElement, target, origin, transitionEnd) {
        return ((target) => Object.keys(target).some(isPositionalKey))(target)
          ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
          : { target, transitionEnd };
      }
      const parseDomVariant = (visualElement, target, origin, transitionEnd) => {
        const resolved = (function resolveCSSVariables(
          visualElement,
          { ...target },
          transitionEnd,
        ) {
          const element = visualElement.current;
          if (!(element instanceof Element)) return { target, transitionEnd };
          transitionEnd && (transitionEnd = { ...transitionEnd }),
            visualElement.values.forEach((value) => {
              const current = value.get();
              if (!isCSSVariableToken(current)) return;
              const resolved = getVariableValue(current, element);
              resolved && value.set(resolved);
            });
          for (const key in target) {
            const current = target[key];
            if (!isCSSVariableToken(current)) continue;
            const resolved = getVariableValue(current, element);
            resolved &&
              ((target[key] = resolved),
              transitionEnd || (transitionEnd = {}),
              void 0 === transitionEnd[key] && (transitionEnd[key] = current));
          }
          return { target, transitionEnd };
        })(visualElement, target, transitionEnd);
        return unitConversion(
          visualElement,
          (target = resolved.target),
          origin,
          (transitionEnd = resolved.transitionEnd),
        );
      };
      var reduced_motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs',
        ),
        state = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs',
        );
      const visualElementStore = new WeakMap(),
        featureNames = Object.keys(featureDefinitions),
        numFeatures = featureNames.length,
        propEventHandlers = [
          'AnimationStart',
          'AnimationComplete',
          'Update',
          'BeforeLayoutMeasure',
          'LayoutMeasure',
          'LayoutAnimationStart',
          'LayoutAnimationComplete',
        ],
        numVariantProps = variantProps.length;
      class VisualElement {
        constructor(
          { parent, props, presenceContext, reducedMotionConfig, visualState },
          options = {},
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.scheduleRender = () => frameloop.Wi.render(this.render, !1, !0));
          const { latestValues, renderState } = visualState;
          (this.latestValues = latestValues),
            (this.baseTarget = { ...latestValues }),
            (this.initialValues = props.initial ? { ...latestValues } : {}),
            (this.renderState = renderState),
            (this.parent = parent),
            (this.props = props),
            (this.presenceContext = presenceContext),
            (this.depth = parent ? parent.depth + 1 : 0),
            (this.reducedMotionConfig = reducedMotionConfig),
            (this.options = options),
            (this.isControllingVariants = isControllingVariants(props)),
            (this.isVariantNode = isVariantNode(props)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(parent && parent.current));
          const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(
            props,
            {},
          );
          for (const key in initialMotionValues) {
            const value = initialMotionValues[key];
            void 0 !== latestValues[key] &&
              isMotionValue(value) &&
              (value.set(latestValues[key], !1),
              isWillChangeMotionValue(willChange) && willChange.add(key));
          }
        }
        scrapeMotionValuesFromProps(_props, _prevProps) {
          return {};
        }
        mount(instance) {
          (this.current = instance),
            visualElementStore.set(instance, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(instance),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((value, key) => this.bindToMotionValue(key, value)),
            state.O.current || (0, reduced_motion.A)(),
            (this.shouldReduceMotion =
              'never' !== this.reducedMotionConfig &&
              ('always' === this.reducedMotionConfig || state.n.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          visualElementStore.delete(this.current),
            this.projection && this.projection.unmount(),
            (0, frameloop.Pn)(this.notifyUpdate),
            (0, frameloop.Pn)(this.render),
            this.valueSubscriptions.forEach((remove) => remove()),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
          for (const key in this.events) this.events[key].clear();
          for (const key in this.features) this.features[key].unmount();
          this.current = null;
        }
        bindToMotionValue(key, value) {
          const valueIsTransform = transformProps.has(key),
            removeOnChange = value.on('change', (latestValue) => {
              (this.latestValues[key] = latestValue),
                this.props.onUpdate && frameloop.Wi.update(this.notifyUpdate, !1, !0),
                valueIsTransform &&
                  this.projection &&
                  (this.projection.isTransformDirty = !0);
            }),
            removeOnRenderRequest = value.on('renderRequest', this.scheduleRender);
          this.valueSubscriptions.set(key, () => {
            removeOnChange(), removeOnRenderRequest();
          });
        }
        sortNodePosition(other) {
          return this.current && this.sortInstanceNodePosition && this.type === other.type
            ? this.sortInstanceNodePosition(this.current, other.current)
            : 0;
        }
        loadFeatures(
          { children, ...renderedProps },
          isStrict,
          preloadedFeatures,
          initialLayoutGroupConfig,
        ) {
          let ProjectionNodeConstructor, MeasureLayout;
          for (let i = 0; i < numFeatures; i++) {
            const name = featureNames[i],
              {
                isEnabled,
                Feature: FeatureConstructor,
                ProjectionNode,
                MeasureLayout: MeasureLayoutComponent,
              } = featureDefinitions[name];
            ProjectionNode && (ProjectionNodeConstructor = ProjectionNode),
              isEnabled(renderedProps) &&
                (!this.features[name] &&
                  FeatureConstructor &&
                  (this.features[name] = new FeatureConstructor(this)),
                MeasureLayoutComponent && (MeasureLayout = MeasureLayoutComponent));
          }
          if (!this.projection && ProjectionNodeConstructor) {
            this.projection = new ProjectionNodeConstructor(
              this.latestValues,
              this.parent && this.parent.projection,
            );
            const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot } =
              renderedProps;
            this.projection.setOptions({
              layoutId,
              layout,
              alwaysMeasureLayout:
                Boolean(drag) || (dragConstraints && isRefObject(dragConstraints)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: 'string' == typeof layout ? layout : 'both',
              initialPromotionConfig: initialLayoutGroupConfig,
              layoutScroll,
              layoutRoot,
            });
          }
          return MeasureLayout;
        }
        updateFeatures() {
          for (const key in this.features) {
            const feature = this.features[key];
            feature.isMounted
              ? feature.update()
              : (feature.mount(), (feature.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : createBox();
        }
        getStaticValue(key) {
          return this.latestValues[key];
        }
        setStaticValue(key, value) {
          this.latestValues[key] = value;
        }
        makeTargetAnimatable(target, canMutate = !0) {
          return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
        }
        update(props, presenceContext) {
          (props.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = props),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = presenceContext);
          for (let i = 0; i < propEventHandlers.length; i++) {
            const key = propEventHandlers[i];
            this.propEventSubscriptions[key] &&
              (this.propEventSubscriptions[key](),
              delete this.propEventSubscriptions[key]);
            const listener = props['on' + key];
            listener && (this.propEventSubscriptions[key] = this.on(key, listener));
          }
          (this.prevMotionValues = (function updateMotionValuesFromProps(
            element,
            next,
            prev,
          ) {
            const { willChange } = next;
            for (const key in next) {
              const nextValue = next[key],
                prevValue = prev[key];
              if (isMotionValue(nextValue))
                element.addValue(key, nextValue),
                  isWillChangeMotionValue(willChange) && willChange.add(key);
              else if (isMotionValue(prevValue))
                element.addValue(key, motionValue(nextValue, { owner: element })),
                  isWillChangeMotionValue(willChange) && willChange.remove(key);
              else if (prevValue !== nextValue)
                if (element.hasValue(key)) {
                  const existingValue = element.getValue(key);
                  !existingValue.hasAnimated && existingValue.set(nextValue);
                } else {
                  const latestValue = element.getStaticValue(key);
                  element.addValue(
                    key,
                    motionValue(void 0 !== latestValue ? latestValue : nextValue, {
                      owner: element,
                    }),
                  );
                }
            }
            for (const key in prev) void 0 === next[key] && element.removeValue(key);
            return next;
          })(
            this,
            this.scrapeMotionValuesFromProps(props, this.prevProps),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(name) {
          return this.props.variants ? this.props.variants[name] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(startAtParent = !1) {
          if (startAtParent)
            return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            const context = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (context.initial = this.props.initial),
              context
            );
          }
          const context = {};
          for (let i = 0; i < numVariantProps; i++) {
            const name = variantProps[i],
              prop = this.props[name];
            (isVariantLabel(prop) || !1 === prop) && (context[name] = prop);
          }
          return context;
        }
        addVariantChild(child) {
          const closestVariantNode = this.getClosestVariantNode();
          if (closestVariantNode)
            return (
              closestVariantNode.variantChildren &&
                closestVariantNode.variantChildren.add(child),
              () => closestVariantNode.variantChildren.delete(child)
            );
        }
        addValue(key, value) {
          value !== this.values.get(key) &&
            (this.removeValue(key), this.bindToMotionValue(key, value)),
            this.values.set(key, value),
            (this.latestValues[key] = value.get());
        }
        removeValue(key) {
          this.values.delete(key);
          const unsubscribe = this.valueSubscriptions.get(key);
          unsubscribe && (unsubscribe(), this.valueSubscriptions.delete(key)),
            delete this.latestValues[key],
            this.removeValueFromRenderState(key, this.renderState);
        }
        hasValue(key) {
          return this.values.has(key);
        }
        getValue(key, defaultValue) {
          if (this.props.values && this.props.values[key]) return this.props.values[key];
          let value = this.values.get(key);
          return (
            void 0 === value &&
              void 0 !== defaultValue &&
              ((value = motionValue(defaultValue, { owner: this })),
              this.addValue(key, value)),
            value
          );
        }
        readValue(key) {
          return void 0 === this.latestValues[key] && this.current
            ? this.readValueFromInstance(this.current, key, this.options)
            : this.latestValues[key];
        }
        setBaseTarget(key, value) {
          this.baseTarget[key] = value;
        }
        getBaseTarget(key) {
          var _a;
          const { initial } = this.props,
            valueFromInitial =
              'string' == typeof initial || 'object' == typeof initial
                ? null === (_a = resolveVariantFromProps(this.props, initial)) ||
                  void 0 === _a
                  ? void 0
                  : _a[key]
                : void 0;
          if (initial && void 0 !== valueFromInitial) return valueFromInitial;
          const target = this.getBaseTargetFromProps(this.props, key);
          return void 0 === target || isMotionValue(target)
            ? void 0 !== this.initialValues[key] && void 0 === valueFromInitial
              ? void 0
              : this.baseTarget[key]
            : target;
        }
        on(eventName, callback) {
          return (
            this.events[eventName] ||
              (this.events[eventName] = new SubscriptionManager()),
            this.events[eventName].add(callback)
          );
        }
        notify(eventName, ...args) {
          this.events[eventName] && this.events[eventName].notify(...args);
        }
      }
      class DOMVisualElement extends VisualElement {
        sortInstanceNodePosition(a, b) {
          return 2 & a.compareDocumentPosition(b) ? 1 : -1;
        }
        getBaseTargetFromProps(props, key) {
          return props.style ? props.style[key] : void 0;
        }
        removeValueFromRenderState(key, { vars, style }) {
          delete vars[key], delete style[key];
        }
        makeTargetAnimatableFromInstance(
          { transition, transitionEnd, ...target },
          { transformValues },
          isMounted,
        ) {
          let origin = (function getOrigin(target, transition, visualElement) {
            const origin = {};
            for (const key in target) {
              const transitionOrigin = getOriginFromTransition(key, transition);
              if (void 0 !== transitionOrigin) origin[key] = transitionOrigin;
              else {
                const value = visualElement.getValue(key);
                value && (origin[key] = value.get());
              }
            }
            return origin;
          })(target, transition || {}, this);
          if (
            (transformValues &&
              (transitionEnd && (transitionEnd = transformValues(transitionEnd)),
              target && (target = transformValues(target)),
              origin && (origin = transformValues(origin))),
            isMounted)
          ) {
            !(function checkTargetForNewValues(visualElement, target, origin) {
              var _a, _b;
              const newValueKeys = Object.keys(target).filter(
                  (key) => !visualElement.hasValue(key),
                ),
                numNewValues = newValueKeys.length;
              if (numNewValues)
                for (let i = 0; i < numNewValues; i++) {
                  const key = newValueKeys[i],
                    targetValue = target[key];
                  let value = null;
                  Array.isArray(targetValue) && (value = targetValue[0]),
                    null === value &&
                      (value =
                        null !==
                          (_b =
                            null !== (_a = origin[key]) && void 0 !== _a
                              ? _a
                              : visualElement.readValue(key)) && void 0 !== _b
                          ? _b
                          : target[key]),
                    null != value &&
                      ('string' == typeof value &&
                      (/^\-?\d*\.?\d+$/.test(value) || isZeroValueString(value))
                        ? (value = parseFloat(value))
                        : !findValueType(value) &&
                          complex.test(targetValue) &&
                          (value = animatable_none_getAnimatableNone(key, targetValue)),
                      visualElement.addValue(
                        key,
                        motionValue(value, { owner: visualElement }),
                      ),
                      void 0 === origin[key] && (origin[key] = value),
                      null !== value && visualElement.setBaseTarget(key, value));
                }
            })(this, target, origin);
            const parsed = parseDomVariant(this, target, origin, transitionEnd);
            (transitionEnd = parsed.transitionEnd), (target = parsed.target);
          }
          return { transition, transitionEnd, ...target };
        }
      }
      class HTMLVisualElement extends DOMVisualElement {
        readValueFromInstance(instance, key) {
          if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return (defaultType && defaultType.default) || 0;
          }
          {
            const computedStyle = (function HTMLVisualElement_getComputedStyle(element) {
                return window.getComputedStyle(element);
              })(instance),
              value =
                (isCSSVariableName(key)
                  ? computedStyle.getPropertyValue(key)
                  : computedStyle[key]) || 0;
            return 'string' == typeof value ? value.trim() : value;
          }
        }
        measureInstanceViewportBox(instance, { transformPagePoint }) {
          return measureViewportBox(instance, transformPagePoint);
        }
        build(renderState, latestValues, options, props) {
          buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
        }
        scrapeMotionValuesFromProps(props, prevProps) {
          return scrapeMotionValuesFromProps(props, prevProps);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          const { children } = this.props;
          isMotionValue(children) &&
            (this.childSubscription = children.on('change', (latest) => {
              this.current && (this.current.textContent = `${latest}`);
            }));
        }
        renderInstance(instance, renderState, styleProp, projection) {
          renderHTML(instance, renderState, styleProp, projection);
        }
      }
      class SVGVisualElement extends DOMVisualElement {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(props, key) {
          return props[key];
        }
        readValueFromInstance(instance, key) {
          if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return (defaultType && defaultType.default) || 0;
          }
          return (
            (key = camelCaseAttributes.has(key) ? key : camelToDash(key)),
            instance.getAttribute(key)
          );
        }
        measureInstanceViewportBox() {
          return createBox();
        }
        scrapeMotionValuesFromProps(props, prevProps) {
          return scrape_motion_values_scrapeMotionValuesFromProps(props, prevProps);
        }
        build(renderState, latestValues, options, props) {
          buildSVGAttrs(
            renderState,
            latestValues,
            options,
            this.isSVGTag,
            props.transformTemplate,
          );
        }
        renderInstance(instance, renderState, styleProp, projection) {
          renderSVG(instance, renderState, 0, projection);
        }
        mount(instance) {
          (this.isSVGTag = isSVGTag(instance.tagName)), super.mount(instance);
        }
      }
      const create_visual_element_createDomVisualElement = (Component, options) =>
          isSVGComponent(Component)
            ? new SVGVisualElement(options, { enableHardwareAcceleration: !1 })
            : new HTMLVisualElement(options, { enableHardwareAcceleration: !0 }),
        preloadedFeatures = {
          ...animations,
          ...gestureAnimations,
          ...drag,
          ...{ layout: { ProjectionNode: HTMLProjectionNode, MeasureLayout } },
        },
        motion = createMotionProxy((Component, config) =>
          (function create_config_createDomMotionConfig(
            Component,
            { forwardMotionProps = !1 },
            preloadedFeatures,
            createVisualElement,
          ) {
            return {
              ...(isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig),
              preloadedFeatures,
              useRender: createUseRender(forwardMotionProps),
              createVisualElement,
              Component,
            };
          })(
            Component,
            config,
            preloadedFeatures,
            create_visual_element_createDomVisualElement,
          ),
        );
    },
    './node_modules/framer-motion/dist/es/utils/errors.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        K: () => warning,
        k: () => invariant,
      });
      var _noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/framer-motion/dist/es/utils/noop.mjs',
      );
      let warning = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.Z,
        invariant = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.Z;
    },
    './node_modules/framer-motion/dist/es/utils/is-browser.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { j: () => isBrowser });
      const isBrowser = 'undefined' != typeof document;
    },
    './node_modules/framer-motion/dist/es/utils/noop.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => noop });
      const noop = (any) => any;
    },
    './node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => initPrefersReducedMotion });
      var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/is-browser.mjs',
        ),
        _state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs',
        );
      function initPrefersReducedMotion() {
        if (
          ((_state_mjs__WEBPACK_IMPORTED_MODULE_0__.O.current = !0),
          _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__.j)
        )
          if (window.matchMedia) {
            const motionMediaQuery = window.matchMedia('(prefers-reduced-motion)'),
              setReducedMotionPreferences = () =>
                (_state_mjs__WEBPACK_IMPORTED_MODULE_0__.n.current =
                  motionMediaQuery.matches);
            motionMediaQuery.addListener(setReducedMotionPreferences),
              setReducedMotionPreferences();
          } else _state_mjs__WEBPACK_IMPORTED_MODULE_0__.n.current = !1;
      }
    },
    './node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        O: () => hasReducedMotionListener,
        n: () => prefersReducedMotion,
      });
      const prefersReducedMotion = { current: null },
        hasReducedMotionListener = { current: !1 };
    },
    './node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { J: () => useReducedMotion });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs',
        ),
        _state_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs',
        );
      function useReducedMotion() {
        !_state_mjs__WEBPACK_IMPORTED_MODULE_1__.O.current &&
          (0, _index_mjs__WEBPACK_IMPORTED_MODULE_2__.A)();
        const [shouldReduceMotion] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
          _state_mjs__WEBPACK_IMPORTED_MODULE_1__.n.current,
        );
        return shouldReduceMotion;
      }
    },
    './node_modules/framer-motion/dist/es/utils/use-constant.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { h: () => useConstant });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js',
      );
      function useConstant(init) {
        const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
        return null === ref.current && (ref.current = init()), ref.current;
      }
    },
    './node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { L: () => useIsomorphicLayoutEffect });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js',
      );
      const useIsomorphicLayoutEffect = __webpack_require__(
        './node_modules/framer-motion/dist/es/utils/is-browser.mjs',
      ).j
        ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
        : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
    },
  },
]);
