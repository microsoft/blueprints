'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [532],
  {
    './node_modules/@codesandbox/sandpack-client/dist/base-80a1f760.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { S: () => SandpackClient });
      var dequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/dequal/dist/index.mjs',
        ),
        SandpackClient = (function () {
          function SandpackClient(iframeSelector, sandboxSetup, options) {
            void 0 === options && (options = {}),
              (this.status = 'idle'),
              (this.options = options),
              (this.sandboxSetup = sandboxSetup),
              (this.iframeSelector = iframeSelector);
          }
          return (
            (SandpackClient.prototype.updateOptions = function (options) {
              (0, dequal__WEBPACK_IMPORTED_MODULE_0__.J)(this.options, options) ||
                ((this.options = options), this.updateSandbox());
            }),
            (SandpackClient.prototype.updateSandbox = function (
              _sandboxSetup,
              _isInitializationCompile,
            ) {
              throw (
                (void 0 === _sandboxSetup && (_sandboxSetup = this.sandboxSetup),
                Error('Method not implemented'))
              );
            }),
            (SandpackClient.prototype.destroy = function () {
              throw Error('Method not implemented');
            }),
            (SandpackClient.prototype.dispatch = function (_message) {
              throw Error('Method not implemented');
            }),
            (SandpackClient.prototype.listen = function (_listener) {
              throw Error('Method not implemented');
            }),
            SandpackClient
          );
        })();
    },
    './node_modules/@codesandbox/sandpack-client/dist/clients/runtime/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          SandpackRuntime: () => SandpackRuntime,
        });
      var _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@codesandbox/sandpack-client/dist/types-36e5ec0d.mjs',
        ),
        dequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/dequal/dist/index.mjs',
        ),
        _base_80a1f760_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/@codesandbox/sandpack-client/dist/base-80a1f760.mjs',
        ),
        Protocol =
          (__webpack_require__('./node_modules/outvariant/lib/index.mjs'),
          (function () {
            function Protocol(type, handleMessage, protocol) {
              var _this = this;
              (this.type = type),
                (this.handleMessage = handleMessage),
                (this.protocol = protocol),
                (this._disposeMessageListener = this.protocol.channelListen(function (
                  msg,
                ) {
                  return (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__._)(
                    _this,
                    void 0,
                    void 0,
                    function () {
                      var message, result, err_1, response;
                      return (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(
                        this,
                        function (_a) {
                          switch (_a.label) {
                            case 0:
                              if (msg.type !== this.getTypeId() || !msg.method)
                                return [3, 4];
                              (message = msg), (_a.label = 1);
                            case 1:
                              return (
                                _a.trys.push([1, 3, , 4]),
                                [4, this.handleMessage(message)]
                              );
                            case 2:
                              return (
                                (result = _a.sent()),
                                (response = {
                                  type: this.getTypeId(),
                                  msgId: message.msgId,
                                  result,
                                }),
                                this.protocol.dispatch(response),
                                [3, 4]
                              );
                            case 3:
                              return (
                                (err_1 = _a.sent()),
                                (response = {
                                  type: this.getTypeId(),
                                  msgId: message.msgId,
                                  error: { message: err_1.message },
                                }),
                                this.protocol.dispatch(response),
                                [3, 4]
                              );
                            case 4:
                              return [2];
                          }
                        },
                      );
                    },
                  );
                }));
            }
            return (
              (Protocol.prototype.getTypeId = function () {
                return 'protocol-' + this.type;
              }),
              (Protocol.prototype.dispose = function () {
                this._disposeMessageListener();
              }),
              Protocol
            );
          })()),
        IFrameProtocol = (function () {
          function IFrameProtocol(iframe, origin) {
            (this.globalListeners = {}),
              (this.globalListenersCount = 0),
              (this.channelListeners = {}),
              (this.channelListenersCount = 0),
              (this.channelId = Math.floor(1e6 * Math.random())),
              (this.frameWindow = iframe.contentWindow),
              (this.origin = origin),
              (this.globalListeners = []),
              (this.channelListeners = []),
              (this.eventListener = this.eventListener.bind(this)),
              'undefined' != typeof window &&
                window.addEventListener('message', this.eventListener);
          }
          return (
            (IFrameProtocol.prototype.cleanup = function () {
              window.removeEventListener('message', this.eventListener),
                (this.globalListeners = {}),
                (this.channelListeners = {}),
                (this.globalListenersCount = 0),
                (this.channelListenersCount = 0);
            }),
            (IFrameProtocol.prototype.register = function () {
              this.frameWindow &&
                this.frameWindow.postMessage(
                  {
                    type: 'register-frame',
                    origin: document.location.origin,
                    id: this.channelId,
                  },
                  this.origin,
                );
            }),
            (IFrameProtocol.prototype.dispatch = function (message) {
              this.frameWindow &&
                this.frameWindow.postMessage(
                  (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(
                    { $id: this.channelId, codesandbox: !0 },
                    message,
                  ),
                  this.origin,
                );
            }),
            (IFrameProtocol.prototype.globalListen = function (listener) {
              var _this = this;
              if ('function' != typeof listener) return function () {};
              var listenerId = this.globalListenersCount;
              return (
                (this.globalListeners[listenerId] = listener),
                this.globalListenersCount++,
                function () {
                  delete _this.globalListeners[listenerId];
                }
              );
            }),
            (IFrameProtocol.prototype.channelListen = function (listener) {
              var _this = this;
              if ('function' != typeof listener) return function () {};
              var listenerId = this.channelListenersCount;
              return (
                (this.channelListeners[listenerId] = listener),
                this.channelListenersCount++,
                function () {
                  delete _this.channelListeners[listenerId];
                }
              );
            }),
            (IFrameProtocol.prototype.eventListener = function (evt) {
              if (evt.source === this.frameWindow) {
                var message = evt.data;
                message.codesandbox &&
                  (Object.values(this.globalListeners).forEach(function (listener) {
                    return listener(message);
                  }),
                  message.$id === this.channelId &&
                    Object.values(this.channelListeners).forEach(function (listener) {
                      return listener(message);
                    }));
              }
            }),
            IFrameProtocol
          );
        })();
      function getTemplate(pkg, modules) {
        if (!pkg) return 'static';
        var _a = pkg.dependencies,
          dependencies = void 0 === _a ? {} : _a,
          _b = pkg.devDependencies,
          devDependencies = void 0 === _b ? {} : _b,
          totalDependencies = (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(
            (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(
              [],
              Object.keys(dependencies),
              !0,
            ),
            Object.keys(devDependencies),
            !0,
          ),
          moduleNames = Object.keys(modules),
          adonis = ['@adonisjs/framework', '@adonisjs/core'];
        if (
          totalDependencies.some(function (dep) {
            return adonis.indexOf(dep) > -1;
          })
        )
          return 'adonis';
        var nuxt = ['nuxt', 'nuxt-edge', 'nuxt-ts', 'nuxt-ts-edge', 'nuxt3'];
        if (
          totalDependencies.some(function (dep) {
            return nuxt.indexOf(dep) > -1;
          })
        )
          return 'nuxt';
        if (totalDependencies.indexOf('next') > -1) return 'next';
        var apollo = [
          'apollo-server',
          'apollo-server-express',
          'apollo-server-hapi',
          'apollo-server-koa',
          'apollo-server-lambda',
          'apollo-server-micro',
        ];
        if (
          totalDependencies.some(function (dep) {
            return apollo.indexOf(dep) > -1;
          })
        )
          return 'apollo';
        if (totalDependencies.indexOf('mdx-deck') > -1) return 'mdx-deck';
        if (totalDependencies.indexOf('gridsome') > -1) return 'gridsome';
        if (totalDependencies.indexOf('vuepress') > -1) return 'vuepress';
        if (totalDependencies.indexOf('ember-cli') > -1) return 'ember';
        if (totalDependencies.indexOf('sapper') > -1) return 'sapper';
        if (totalDependencies.indexOf('gatsby') > -1) return 'gatsby';
        if (totalDependencies.indexOf('quasar') > -1) return 'quasar';
        if (totalDependencies.indexOf('@docusaurus/core') > -1) return 'docusaurus';
        if (totalDependencies.indexOf('remix') > -1) return 'remix';
        if (totalDependencies.indexOf('astro') > -1) return 'node';
        if (
          moduleNames.some(function (m) {
            return m.endsWith('.re');
          })
        )
          return 'reason';
        var parcel = ['parcel-bundler', 'parcel'];
        if (
          totalDependencies.some(function (dep) {
            return parcel.indexOf(dep) > -1;
          })
        )
          return 'parcel';
        var dojo = ['@dojo/core', '@dojo/framework'];
        if (
          totalDependencies.some(function (dep) {
            return dojo.indexOf(dep) > -1;
          })
        )
          return '@dojo/cli-create-app';
        if (
          totalDependencies.indexOf('@nestjs/core') > -1 ||
          totalDependencies.indexOf('@nestjs/common') > -1
        )
          return 'nest';
        if (totalDependencies.indexOf('react-styleguidist') > -1) return 'styleguidist';
        if (totalDependencies.indexOf('react-scripts') > -1) return 'create-react-app';
        if (totalDependencies.indexOf('react-scripts-ts') > -1)
          return 'create-react-app-typescript';
        if (totalDependencies.indexOf('@angular/core') > -1) return 'angular-cli';
        if (totalDependencies.indexOf('preact-cli') > -1) return 'preact-cli';
        if (
          totalDependencies.indexOf('@sveltech/routify') > -1 ||
          totalDependencies.indexOf('@roxi/routify') > -1
        )
          return 'node';
        if (totalDependencies.indexOf('vite') > -1) return 'node';
        if (totalDependencies.indexOf('@frontity/core') > -1) return 'node';
        if (totalDependencies.indexOf('svelte') > -1) return 'svelte';
        if (totalDependencies.indexOf('vue') > -1) return 'vue-cli';
        if (totalDependencies.indexOf('cx') > -1) return 'cxjs';
        var nodeDeps = [
          'express',
          'koa',
          'nodemon',
          'ts-node',
          '@tensorflow/tfjs-node',
          'webpack-dev-server',
          'snowpack',
        ];
        return totalDependencies.some(function (dep) {
          return nodeDeps.indexOf(dep) > -1;
        }) || Object.keys(dependencies).length >= 50
          ? 'node'
          : void 0;
      }
      var BUNDLER_URL =
          'https://' +
          (null === '2.6.7' ? void 0 : '2.6.7'.replace(/\./g, '-')) +
          '-sandpack.codesandbox.io/',
        SandpackRuntime = (function (_super) {
          function SandpackRuntime(selector, sandboxSetup, options) {
            void 0 === options && (options = {});
            var _this = _super.call(this, selector, sandboxSetup, options) || this;
            if (
              ((_this.getTranspilerContext = function () {
                return new Promise(function (resolve) {
                  var unsubscribe = _this.listen(function (message) {
                    'transpiler-context' === message.type &&
                      (resolve(message.data), unsubscribe());
                  });
                  _this.dispatch({ type: 'get-transpiler-context' });
                });
              }),
              (_this.bundlerURL = options.bundlerURL || BUNDLER_URL),
              options.teamId &&
                (_this.bundlerURL =
                  _this.bundlerURL.replace(
                    'https://',
                    'https://' + options.teamId + '-',
                  ) +
                  '?cache=' +
                  Date.now()),
              (_this.bundlerState = void 0),
              (_this.errors = []),
              (_this.status = 'initializing'),
              'string' == typeof selector)
            ) {
              _this.selector = selector;
              var element = document.querySelector(selector);
              (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.n)(
                element,
                "The element '" + selector + "' was not found",
              ),
                (_this.element = element),
                (_this.iframe = document.createElement('iframe')),
                _this.initializeElement();
            } else (_this.element = selector), (_this.iframe = selector);
            return (
              _this.iframe.getAttribute('sandbox') ||
                (_this.iframe.setAttribute(
                  'sandbox',
                  'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts',
                ),
                _this.iframe.setAttribute(
                  'allow',
                  'accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-write;',
                )),
              _this.setLocationURLIntoIFrame(),
              (_this.iframeProtocol = new IFrameProtocol(_this.iframe, _this.bundlerURL)),
              (_this.unsubscribeGlobalListener = _this.iframeProtocol.globalListen(
                function (mes) {
                  'initialized' === mes.type &&
                    _this.iframe.contentWindow &&
                    (_this.iframeProtocol.register(),
                    _this.options.fileResolver &&
                      (_this.fileResolverProtocol = new Protocol(
                        'fs',
                        function (data) {
                          return (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__._)(
                            _this,
                            void 0,
                            void 0,
                            function () {
                              return (0,
                              _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(
                                this,
                                function (_a) {
                                  if ('isFile' === data.method)
                                    return [
                                      2,
                                      this.options.fileResolver.isFile(data.params[0]),
                                    ];
                                  if ('readFile' === data.method)
                                    return [
                                      2,
                                      this.options.fileResolver.readFile(data.params[0]),
                                    ];
                                  throw new Error('Method not supported');
                                },
                              );
                            },
                          );
                        },
                        _this.iframeProtocol,
                      )),
                    _this.updateSandbox(_this.sandboxSetup, !0));
                },
              )),
              (_this.unsubscribeChannelListener = _this.iframeProtocol.channelListen(
                function (mes) {
                  switch (mes.type) {
                    case 'start':
                      _this.errors = [];
                      break;
                    case 'status':
                      _this.status = mes.status;
                      break;
                    case 'action':
                      'show-error' === mes.action &&
                        (_this.errors = (0,
                        _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(
                          (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(
                            [],
                            _this.errors,
                            !0,
                          ),
                          [(0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(mes)],
                          !1,
                        ));
                      break;
                    case 'done':
                      _this.status = 'done';
                      break;
                    case 'state':
                      _this.bundlerState = mes.state;
                  }
                },
              )),
              _this
            );
          }
          return (
            (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.g)(
              SandpackRuntime,
              _super,
            ),
            (SandpackRuntime.prototype.setLocationURLIntoIFrame = function () {
              var _a,
                urlSource = this.options.startRoute
                  ? new URL(this.options.startRoute, this.bundlerURL).toString()
                  : this.bundlerURL;
              null === (_a = this.iframe.contentWindow) ||
                void 0 === _a ||
                _a.location.replace(urlSource),
                (this.iframe.src = urlSource);
            }),
            (SandpackRuntime.prototype.destroy = function () {
              this.unsubscribeChannelListener(),
                this.unsubscribeGlobalListener(),
                this.iframeProtocol.cleanup();
            }),
            (SandpackRuntime.prototype.updateOptions = function (options) {
              (0, dequal__WEBPACK_IMPORTED_MODULE_0__.J)(this.options, options) ||
                ((this.options = options), this.updateSandbox());
            }),
            (SandpackRuntime.prototype.updateSandbox = function (
              sandboxSetup,
              isInitializationCompile,
            ) {
              var _a, _b, _c, _d;
              void 0 === sandboxSetup && (sandboxSetup = this.sandboxSetup),
                (this.sandboxSetup = (0,
                _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(
                  (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(
                    {},
                    this.sandboxSetup,
                  ),
                  sandboxSetup,
                ));
              var files = this.getFiles(),
                modules = Object.keys(files).reduce(function (prev, next) {
                  var _a;
                  return (0,
                  _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.h)((0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.h)({}, prev), (((_a = {})[next] = { code: files[next].code, path: next }), _a));
                }, {}),
                packageJSON = JSON.parse(
                  (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.b)(
                    this.sandboxSetup.dependencies,
                    this.sandboxSetup.devDependencies,
                    this.sandboxSetup.entry,
                  ),
                );
              try {
                packageJSON = JSON.parse(files['/package.json'].code);
              } catch (e) {
                console.error(
                  (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(
                    'could not parse package.json file: ' + e.message,
                  ),
                );
              }
              var normalizedModules = Object.keys(files).reduce(function (prev, next) {
                var _a;
                return (0,
                _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.h)((0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.h)({}, prev), (((_a = {})[next] = { content: files[next].code, path: next }), _a));
              }, {});
              this.dispatch({
                type: 'compile',
                codesandbox: !0,
                version: 3,
                isInitializationCompile,
                modules,
                reactDevTools: this.options.reactDevTools,
                externalResources: this.options.externalResources || [],
                hasFileResolver: Boolean(this.options.fileResolver),
                disableDependencyPreprocessing:
                  this.sandboxSetup.disableDependencyPreprocessing,
                template:
                  this.sandboxSetup.template ||
                  getTemplate(packageJSON, normalizedModules),
                showOpenInCodeSandbox:
                  null === (_a = this.options.showOpenInCodeSandbox) ||
                  void 0 === _a ||
                  _a,
                showErrorScreen:
                  null === (_b = this.options.showErrorScreen) || void 0 === _b || _b,
                showLoadingScreen:
                  null !== (_c = this.options.showLoadingScreen) && void 0 !== _c && _c,
                skipEval: this.options.skipEval || !1,
                clearConsoleDisabled: !this.options.clearConsoleOnFirstCompile,
                logLevel:
                  null !== (_d = this.options.logLevel) && void 0 !== _d
                    ? _d
                    : _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.S.Info,
                customNpmRegistries: this.options.customNpmRegistries,
                teamId: this.options.teamId,
              });
            }),
            (SandpackRuntime.prototype.dispatch = function (message) {
              'refresh' === message.type && this.setLocationURLIntoIFrame(),
                this.iframeProtocol.dispatch(message);
            }),
            (SandpackRuntime.prototype.listen = function (listener) {
              return this.iframeProtocol.channelListen(listener);
            }),
            (SandpackRuntime.prototype.getCodeSandboxURL = function () {
              var files = this.getFiles(),
                paramFiles = Object.keys(files).reduce(function (prev, next) {
                  var _a;
                  return (0,
                  _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.h)((0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.h)({}, prev), (((_a = {})[next.replace('/', '')] = { content: files[next].code, isBinary: !1 }), _a));
                }, {});
              return fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
                method: 'POST',
                body: JSON.stringify({ files: paramFiles }),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              })
                .then(function (x) {
                  return x.json();
                })
                .then(function (res) {
                  return {
                    sandboxId: res.sandbox_id,
                    editorUrl: 'https://codesandbox.io/s/' + res.sandbox_id,
                    embedUrl: 'https://codesandbox.io/embed/' + res.sandbox_id,
                  };
                });
            }),
            (SandpackRuntime.prototype.getFiles = function () {
              var sandboxSetup = this.sandboxSetup;
              return void 0 === sandboxSetup.files['/package.json']
                ? (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.d)(
                    sandboxSetup.files,
                    sandboxSetup.dependencies,
                    sandboxSetup.devDependencies,
                    sandboxSetup.entry,
                  )
                : this.sandboxSetup.files;
            }),
            (SandpackRuntime.prototype.initializeElement = function () {
              (this.iframe.style.border = '0'),
                (this.iframe.style.width = this.options.width || '100%'),
                (this.iframe.style.height = this.options.height || '100%'),
                (this.iframe.style.overflow = 'hidden'),
                (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_2__.n)(
                  this.element.parentNode,
                  'The given iframe does not have a parent.',
                ),
                this.element.parentNode.replaceChild(this.iframe, this.element);
            }),
            SandpackRuntime
          );
        })(_base_80a1f760_mjs__WEBPACK_IMPORTED_MODULE_3__.S);
    },
  },
]);
