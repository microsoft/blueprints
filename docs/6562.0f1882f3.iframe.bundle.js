'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [6562],
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
    './node_modules/@react-hook/passive-layout-effect/dist/module/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      const __WEBPACK_DEFAULT_EXPORT__ = __webpack_require__(
        './node_modules/react/index.js',
      )[
        'undefined' != typeof document && void 0 !== document.createElement
          ? 'useLayoutEffect'
          : 'useEffect'
      ];
    },
    './node_modules/@react-hook/resize-observer/dist/module/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Z: () => resize_observer_dist_module,
      });
      var ResizeObserverBoxOptions,
        resizeObservers = [],
        msg = 'ResizeObserver loop completed with undelivered notifications.';
      !(function (ResizeObserverBoxOptions) {
        (ResizeObserverBoxOptions.BORDER_BOX = 'border-box'),
          (ResizeObserverBoxOptions.CONTENT_BOX = 'content-box'),
          (ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX =
            'device-pixel-content-box');
      })(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
      var trigger,
        freeze = function (obj) {
          return Object.freeze(obj);
        },
        ResizeObserverSize = function ResizeObserverSize(inlineSize, blockSize) {
          (this.inlineSize = inlineSize), (this.blockSize = blockSize), freeze(this);
        },
        DOMRectReadOnly = (function () {
          function DOMRectReadOnly(x, y, width, height) {
            return (
              (this.x = x),
              (this.y = y),
              (this.width = width),
              (this.height = height),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              freeze(this)
            );
          }
          return (
            (DOMRectReadOnly.prototype.toJSON = function () {
              var _a = this;
              return {
                x: _a.x,
                y: _a.y,
                top: _a.top,
                right: _a.right,
                bottom: _a.bottom,
                left: _a.left,
                width: _a.width,
                height: _a.height,
              };
            }),
            (DOMRectReadOnly.fromRect = function (rectangle) {
              return new DOMRectReadOnly(
                rectangle.x,
                rectangle.y,
                rectangle.width,
                rectangle.height,
              );
            }),
            DOMRectReadOnly
          );
        })(),
        isSVG = function (target) {
          return target instanceof SVGElement && 'getBBox' in target;
        },
        isHidden = function (target) {
          if (isSVG(target)) {
            var _a = target.getBBox(),
              width = _a.width,
              height = _a.height;
            return !width && !height;
          }
          var _b = target,
            offsetWidth = _b.offsetWidth,
            offsetHeight = _b.offsetHeight;
          return !(offsetWidth || offsetHeight || target.getClientRects().length);
        },
        isElement = function (obj) {
          var _a;
          if (obj instanceof Element) return !0;
          var scope =
            null === (_a = null == obj ? void 0 : obj.ownerDocument) || void 0 === _a
              ? void 0
              : _a.defaultView;
          return !!(scope && obj instanceof scope.Element);
        },
        global = 'undefined' != typeof window ? window : {},
        cache = new WeakMap(),
        scrollRegexp = /auto|scroll/,
        verticalRegexp = /^tb|vertical/,
        IE = /msie|trident/i.test(global.navigator && global.navigator.userAgent),
        parseDimension = function (pixel) {
          return parseFloat(pixel || '0');
        },
        size = function (inlineSize, blockSize, switchSizes) {
          return (
            void 0 === inlineSize && (inlineSize = 0),
            void 0 === blockSize && (blockSize = 0),
            void 0 === switchSizes && (switchSizes = !1),
            new ResizeObserverSize(
              (switchSizes ? blockSize : inlineSize) || 0,
              (switchSizes ? inlineSize : blockSize) || 0,
            )
          );
        },
        zeroBoxes = freeze({
          devicePixelContentBoxSize: size(),
          borderBoxSize: size(),
          contentBoxSize: size(),
          contentRect: new DOMRectReadOnly(0, 0, 0, 0),
        }),
        calculateBoxSizes = function (target, forceRecalculation) {
          if (
            (void 0 === forceRecalculation && (forceRecalculation = !1),
            cache.has(target) && !forceRecalculation)
          )
            return cache.get(target);
          if (isHidden(target)) return cache.set(target, zeroBoxes), zeroBoxes;
          var cs = getComputedStyle(target),
            svg = isSVG(target) && target.ownerSVGElement && target.getBBox(),
            removePadding = !IE && 'border-box' === cs.boxSizing,
            switchSizes = verticalRegexp.test(cs.writingMode || ''),
            canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || ''),
            canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || ''),
            paddingTop = svg ? 0 : parseDimension(cs.paddingTop),
            paddingRight = svg ? 0 : parseDimension(cs.paddingRight),
            paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom),
            paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft),
            borderTop = svg ? 0 : parseDimension(cs.borderTopWidth),
            borderRight = svg ? 0 : parseDimension(cs.borderRightWidth),
            borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth),
            horizontalPadding = paddingLeft + paddingRight,
            verticalPadding = paddingTop + paddingBottom,
            horizontalBorderArea =
              (svg ? 0 : parseDimension(cs.borderLeftWidth)) + borderRight,
            verticalBorderArea = borderTop + borderBottom,
            horizontalScrollbarThickness = canScrollHorizontally
              ? target.offsetHeight - verticalBorderArea - target.clientHeight
              : 0,
            verticalScrollbarThickness = canScrollVertically
              ? target.offsetWidth - horizontalBorderArea - target.clientWidth
              : 0,
            widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0,
            heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0,
            contentWidth = svg
              ? svg.width
              : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness,
            contentHeight = svg
              ? svg.height
              : parseDimension(cs.height) -
                heightReduction -
                horizontalScrollbarThickness,
            borderBoxWidth =
              contentWidth +
              horizontalPadding +
              verticalScrollbarThickness +
              horizontalBorderArea,
            borderBoxHeight =
              contentHeight +
              verticalPadding +
              horizontalScrollbarThickness +
              verticalBorderArea,
            boxes = freeze({
              devicePixelContentBoxSize: size(
                Math.round(contentWidth * devicePixelRatio),
                Math.round(contentHeight * devicePixelRatio),
                switchSizes,
              ),
              borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
              contentBoxSize: size(contentWidth, contentHeight, switchSizes),
              contentRect: new DOMRectReadOnly(
                paddingLeft,
                paddingTop,
                contentWidth,
                contentHeight,
              ),
            });
          return cache.set(target, boxes), boxes;
        },
        calculateBoxSize = function (target, observedBox, forceRecalculation) {
          var _a = calculateBoxSizes(target, forceRecalculation),
            borderBoxSize = _a.borderBoxSize,
            contentBoxSize = _a.contentBoxSize,
            devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
          switch (observedBox) {
            case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
              return devicePixelContentBoxSize;
            case ResizeObserverBoxOptions.BORDER_BOX:
              return borderBoxSize;
            default:
              return contentBoxSize;
          }
        },
        ResizeObserverEntry = function ResizeObserverEntry(target) {
          var boxes = calculateBoxSizes(target);
          (this.target = target),
            (this.contentRect = boxes.contentRect),
            (this.borderBoxSize = freeze([boxes.borderBoxSize])),
            (this.contentBoxSize = freeze([boxes.contentBoxSize])),
            (this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]));
        },
        calculateDepthForNode = function (node) {
          if (isHidden(node)) return 1 / 0;
          for (var depth = 0, parent = node.parentNode; parent; )
            (depth += 1), (parent = parent.parentNode);
          return depth;
        },
        broadcastActiveObservations = function () {
          var shallowestDepth = 1 / 0,
            callbacks = [];
          resizeObservers.forEach(function processObserver(ro) {
            if (0 !== ro.activeTargets.length) {
              var entries = [];
              ro.activeTargets.forEach(function processTarget(ot) {
                var entry = new ResizeObserverEntry(ot.target),
                  targetDepth = calculateDepthForNode(ot.target);
                entries.push(entry),
                  (ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox)),
                  targetDepth < shallowestDepth && (shallowestDepth = targetDepth);
              }),
                callbacks.push(function resizeObserverCallback() {
                  ro.callback.call(ro.observer, entries, ro.observer);
                }),
                ro.activeTargets.splice(0, ro.activeTargets.length);
            }
          });
          for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
            (0, callbacks_1[_i])();
          }
          return shallowestDepth;
        },
        gatherActiveObservationsAtDepth = function (depth) {
          resizeObservers.forEach(function processObserver(ro) {
            ro.activeTargets.splice(0, ro.activeTargets.length),
              ro.skippedTargets.splice(0, ro.skippedTargets.length),
              ro.observationTargets.forEach(function processTarget(ot) {
                ot.isActive() &&
                  (calculateDepthForNode(ot.target) > depth
                    ? ro.activeTargets.push(ot)
                    : ro.skippedTargets.push(ot));
              });
          });
        },
        process = function () {
          var event,
            depth = 0;
          for (
            gatherActiveObservationsAtDepth(depth);
            resizeObservers.some(function (ro) {
              return ro.activeTargets.length > 0;
            });

          )
            (depth = broadcastActiveObservations()),
              gatherActiveObservationsAtDepth(depth);
          return (
            resizeObservers.some(function (ro) {
              return ro.skippedTargets.length > 0;
            }) &&
              ('function' == typeof ErrorEvent
                ? (event = new ErrorEvent('error', { message: msg }))
                : ((event = document.createEvent('Event')).initEvent('error', !1, !1),
                  (event.message = msg)),
              window.dispatchEvent(event)),
            depth > 0
          );
        },
        callbacks = [],
        queueMicroTask = function (callback) {
          if (!trigger) {
            var toggle_1 = 0,
              el_1 = document.createTextNode('');
            new MutationObserver(function () {
              return callbacks.splice(0).forEach(function (cb) {
                return cb();
              });
            }).observe(el_1, { characterData: !0 }),
              (trigger = function () {
                el_1.textContent = ''.concat(toggle_1 ? toggle_1-- : toggle_1++);
              });
          }
          callbacks.push(callback), trigger();
        },
        watching = 0,
        observerConfig = {
          attributes: !0,
          characterData: !0,
          childList: !0,
          subtree: !0,
        },
        events = [
          'resize',
          'load',
          'transitionend',
          'animationend',
          'animationstart',
          'animationiteration',
          'keyup',
          'keydown',
          'mouseup',
          'mousedown',
          'mouseover',
          'mouseout',
          'blur',
          'focus',
        ],
        time = function (timeout) {
          return void 0 === timeout && (timeout = 0), Date.now() + timeout;
        },
        scheduled = !1,
        scheduler = new ((function () {
          function Scheduler() {
            var _this = this;
            (this.stopped = !0),
              (this.listener = function () {
                return _this.schedule();
              });
          }
          return (
            (Scheduler.prototype.run = function (timeout) {
              var _this = this;
              if ((void 0 === timeout && (timeout = 250), !scheduled)) {
                scheduled = !0;
                var cb,
                  until = time(timeout);
                (cb = function () {
                  var elementsHaveResized = !1;
                  try {
                    elementsHaveResized = process();
                  } finally {
                    if (((scheduled = !1), (timeout = until - time()), !watching)) return;
                    elementsHaveResized
                      ? _this.run(1e3)
                      : timeout > 0
                      ? _this.run(timeout)
                      : _this.start();
                  }
                }),
                  queueMicroTask(function ResizeObserver() {
                    requestAnimationFrame(cb);
                  });
              }
            }),
            (Scheduler.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (Scheduler.prototype.observe = function () {
              var _this = this,
                cb = function () {
                  return (
                    _this.observer &&
                    _this.observer.observe(document.body, observerConfig)
                  );
                };
              document.body ? cb() : global.addEventListener('DOMContentLoaded', cb);
            }),
            (Scheduler.prototype.start = function () {
              var _this = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                events.forEach(function (name) {
                  return global.addEventListener(name, _this.listener, !0);
                }));
            }),
            (Scheduler.prototype.stop = function () {
              var _this = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                events.forEach(function (name) {
                  return global.removeEventListener(name, _this.listener, !0);
                }),
                (this.stopped = !0));
            }),
            Scheduler
          );
        })())(),
        updateCount = function (n) {
          !watching && n > 0 && scheduler.start(), !(watching += n) && scheduler.stop();
        },
        ResizeObservation = (function () {
          function ResizeObservation(target, observedBox) {
            (this.target = target),
              (this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (ResizeObservation.prototype.isActive = function () {
              var target,
                size = calculateBoxSize(this.target, this.observedBox, !0);
              return (
                (target = this.target),
                isSVG(target) ||
                  (function (target) {
                    switch (target.tagName) {
                      case 'INPUT':
                        if ('image' !== target.type) break;
                      case 'VIDEO':
                      case 'AUDIO':
                      case 'EMBED':
                      case 'OBJECT':
                      case 'CANVAS':
                      case 'IFRAME':
                      case 'IMG':
                        return !0;
                    }
                    return !1;
                  })(target) ||
                  'inline' !== getComputedStyle(target).display ||
                  (this.lastReportedSize = size),
                this.lastReportedSize.inlineSize !== size.inlineSize ||
                  this.lastReportedSize.blockSize !== size.blockSize
              );
            }),
            ResizeObservation
          );
        })(),
        ResizeObserverDetail = function ResizeObserverDetail(resizeObserver, callback) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = resizeObserver),
            (this.callback = callback);
        },
        observerMap = new WeakMap(),
        getObservationIndex = function (observationTargets, target) {
          for (var i = 0; i < observationTargets.length; i += 1)
            if (observationTargets[i].target === target) return i;
          return -1;
        },
        ResizeObserverController = (function () {
          function ResizeObserverController() {}
          return (
            (ResizeObserverController.connect = function (resizeObserver, callback) {
              var detail = new ResizeObserverDetail(resizeObserver, callback);
              observerMap.set(resizeObserver, detail);
            }),
            (ResizeObserverController.observe = function (
              resizeObserver,
              target,
              options,
            ) {
              var detail = observerMap.get(resizeObserver),
                firstObservation = 0 === detail.observationTargets.length;
              getObservationIndex(detail.observationTargets, target) < 0 &&
                (firstObservation && resizeObservers.push(detail),
                detail.observationTargets.push(
                  new ResizeObservation(target, options && options.box),
                ),
                updateCount(1),
                scheduler.schedule());
            }),
            (ResizeObserverController.unobserve = function (resizeObserver, target) {
              var detail = observerMap.get(resizeObserver),
                index = getObservationIndex(detail.observationTargets, target),
                lastObservation = 1 === detail.observationTargets.length;
              index >= 0 &&
                (lastObservation &&
                  resizeObservers.splice(resizeObservers.indexOf(detail), 1),
                detail.observationTargets.splice(index, 1),
                updateCount(-1));
            }),
            (ResizeObserverController.disconnect = function (resizeObserver) {
              var _this = this,
                detail = observerMap.get(resizeObserver);
              detail.observationTargets.slice().forEach(function (ot) {
                return _this.unobserve(resizeObserver, ot.target);
              }),
                detail.activeTargets.splice(0, detail.activeTargets.length);
            }),
            ResizeObserverController
          );
        })(),
        ResizeObserver = (function () {
          function ResizeObserver(callback) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.",
              );
            if ('function' != typeof callback)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
              );
            ResizeObserverController.connect(this, callback);
          }
          return (
            (ResizeObserver.prototype.observe = function (target, options) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (!isElement(target))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                );
              ResizeObserverController.observe(this, target, options);
            }),
            (ResizeObserver.prototype.unobserve = function (target) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (!isElement(target))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                );
              ResizeObserverController.unobserve(this, target);
            }),
            (ResizeObserver.prototype.disconnect = function () {
              ResizeObserverController.disconnect(this);
            }),
            (ResizeObserver.toString = function () {
              return 'function ResizeObserver () { [polyfill code] }';
            }),
            ResizeObserver
          );
        })(),
        dist_module = __webpack_require__(
          './node_modules/@react-hook/passive-layout-effect/dist/module/index.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js');
      const latest_dist_module = (current) => {
          const storedValue = react.useRef(current);
          return (
            react.useEffect(() => {
              storedValue.current = current;
            }),
            storedValue
          );
        },
        module_ResizeObserver =
          'undefined' != typeof window && 'ResizeObserver' in window
            ? window.ResizeObserver
            : ResizeObserver;
      function _ref() {}
      let _resizeObserver;
      const getResizeObserver = () =>
          _resizeObserver ||
          (_resizeObserver = (function createResizeObserver() {
            let ticking = !1,
              allEntries = [];
            const callbacks = new Map(),
              observer = new module_ResizeObserver((entries, obs) => {
                (allEntries = allEntries.concat(entries)),
                  ticking ||
                    window.requestAnimationFrame(function _ref2() {
                      const triggered = new Set();
                      for (let i = 0; i < allEntries.length; i++) {
                        if (triggered.has(allEntries[i].target)) continue;
                        triggered.add(allEntries[i].target);
                        const cbs = callbacks.get(allEntries[i].target);
                        null == cbs || cbs.forEach((cb) => cb(allEntries[i], obs));
                      }
                      (allEntries = []), (ticking = !1);
                    }),
                  (ticking = !0);
              });
            return {
              observer,
              subscribe(target, callback) {
                var _callbacks$get;
                observer.observe(target);
                const cbs =
                  null !== (_callbacks$get = callbacks.get(target)) &&
                  void 0 !== _callbacks$get
                    ? _callbacks$get
                    : [];
                cbs.push(callback), callbacks.set(target, cbs);
              },
              unsubscribe(target, callback) {
                var _callbacks$get2;
                const cbs =
                  null !== (_callbacks$get2 = callbacks.get(target)) &&
                  void 0 !== _callbacks$get2
                    ? _callbacks$get2
                    : [];
                if (1 === cbs.length)
                  return observer.unobserve(target), void callbacks.delete(target);
                const cbIndex = cbs.indexOf(callback);
                -1 !== cbIndex && cbs.splice(cbIndex, 1), callbacks.set(target, cbs);
              },
            };
          })()),
        resize_observer_dist_module = function useResizeObserver(target, callback) {
          const resizeObserver = getResizeObserver(),
            storedCallback = latest_dist_module(callback);
          return (
            (0, dist_module.Z)(() => {
              let didUnsubscribe = !1;
              const targetEl = target && 'current' in target ? target.current : target;
              if (!targetEl) return _ref;
              function cb(entry, observer) {
                didUnsubscribe || storedCallback.current(entry, observer);
              }
              return (
                resizeObserver.subscribe(targetEl, cb),
                () => {
                  (didUnsubscribe = !0), resizeObserver.unsubscribe(targetEl, cb);
                }
              );
            }, [target, resizeObserver, storedCallback]),
            resizeObserver.observer
          );
        };
    },
  },
]);
