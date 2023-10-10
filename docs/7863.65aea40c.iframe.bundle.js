'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [7863],
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
    './node_modules/@codesandbox/sandpack-client/dist/client.utils-7a723432.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        E: () => EventEmitter,
        a: () => getMessageFromError,
        b: () => findStartScriptPackageJson,
        f: () => fromBundlerFilesToFS,
        g: () => generateRandomId,
        r: () => readBuffer,
        w: () => writeBuffer,
      });
      var TokenType,
        outvariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/outvariant/lib/index.mjs',
        ),
        _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@codesandbox/sandpack-client/dist/types-36e5ec0d.mjs',
        ),
        EventEmitter = (function () {
          function EventEmitter() {
            (this.listeners = {}),
              (this.listenersCount = 0),
              (this.channelId = Math.floor(1e6 * Math.random())),
              (this.listeners = []);
          }
          return (
            (EventEmitter.prototype.cleanup = function () {
              (this.listeners = {}), (this.listenersCount = 0);
            }),
            (EventEmitter.prototype.dispatch = function (message) {
              Object.values(this.listeners).forEach(function (listener) {
                return listener(message);
              });
            }),
            (EventEmitter.prototype.listener = function (listener) {
              var _this = this;
              if ('function' != typeof listener) return function () {};
              var listenerId = this.listenersCount;
              return (
                (this.listeners[listenerId] = listener),
                this.listenersCount++,
                function () {
                  delete _this.listeners[listenerId];
                }
              );
            }),
            EventEmitter
          );
        })();
      function isCommand(char) {
        return /[a-zA-Z.]/.test(char);
      }
      function isAlpha(char) {
        return /[a-zA-Z]/.test(char);
      }
      function isOperator(char) {
        return /[&|]/.test(char);
      }
      function isArgument(char) {
        return /-/.test(char);
      }
      function isString(char) {
        return /["']/.test(char);
      }
      function isEnvVar(char) {
        return isAlpha(char) && char === char.toUpperCase();
      }
      !(function (TokenType) {
        (TokenType.OR = 'OR'),
          (TokenType.AND = 'AND'),
          (TokenType.PIPE = 'PIPE'),
          (TokenType.Command = 'Command'),
          (TokenType.Argument = 'Argument'),
          (TokenType.String = 'String'),
          (TokenType.EnvVar = 'EnvVar');
      })(TokenType || (TokenType = {}));
      var operators = new Map([
        ['&&', { type: TokenType.AND }],
        ['||', { type: TokenType.OR }],
        ['|', { type: TokenType.PIPE }],
        ['-', { type: TokenType.Argument }],
      ]);
      var counter = 0;
      function generateRandomId() {
        return (+(
          '' +
          Date.now() +
          Math.round(1e4 * Math.random()) +
          (counter += 1)
        )).toString(16);
      }
      var writeBuffer = function (content) {
          return 'string' == typeof content ? new TextEncoder().encode(content) : content;
        },
        readBuffer = function (content) {
          return 'string' == typeof content ? content : new TextDecoder().decode(content);
        },
        fromBundlerFilesToFS = function (files) {
          return Object.entries(files).reduce(function (acc, _a) {
            var key = _a[0],
              value = _a[1];
            return (acc[key] = writeBuffer(value.code)), acc;
          }, {});
        },
        findStartScriptPackageJson = function (packageJson) {
          var scripts = {},
            possibleKeys = ['dev', 'start'];
          try {
            scripts = JSON.parse(packageJson).scripts;
          } catch (e) {
            throw (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(
              'Could not parse package.json file: ' + e.message,
            );
          }
          (0, outvariant__WEBPACK_IMPORTED_MODULE_0__.kG)(
            scripts,
            'Failed to start. Please provide a `start` or `dev` script on the package.json',
          );
          for (
            var _loop_1 = function (index) {
                if ((possibleKeys[index] in scripts)) {
                  var candidate = scripts[possibleKeys[index]],
                    env_1 = {},
                    command_1 = '',
                    args_1 = [];
                  return (
                    (function tokenize(input) {
                      var current = 0,
                        tokens = [];
                      function parseCommand() {
                        for (
                          var value = '';
                          isCommand(input[current]) && current < input.length;

                        )
                          (value += input[current]), current++;
                        return { type: TokenType.Command, value };
                      }
                      function parseOperator() {
                        for (
                          var value = '';
                          isOperator(input[current]) && current < input.length;

                        )
                          (value += input[current]), current++;
                        return operators.get(value);
                      }
                      function parseArgument() {
                        for (
                          var value = '';
                          (isArgument(input[current]) || isAlpha(input[current])) &&
                          current < input.length;

                        )
                          (value += input[current]), current++;
                        return { type: TokenType.Argument, value };
                      }
                      function parseString() {
                        var openCloseQuote = input[current],
                          value = input[current];
                        for (
                          current++;
                          input[current] !== openCloseQuote && current < input.length;

                        )
                          (value += input[current]), current++;
                        return (
                          (value += input[current]),
                          current++,
                          { type: TokenType.String, value }
                        );
                      }
                      function parseEnvVars() {
                        for (
                          var value = {},
                            parseSingleEnv = function () {
                              for (
                                var key = '', pair = '';
                                '=' !== input[current] && current < input.length;

                              )
                                (key += input[current]), current++;
                              for (
                                '=' === input[current] && current++;
                                ' ' !== input[current] && current < input.length;

                              )
                                (pair += input[current]), current++;
                              value[key] = pair;
                            };
                          isEnvVar(input[current]) && current < input.length;

                        )
                          parseSingleEnv(), current++;
                        return { type: TokenType.EnvVar, value };
                      }
                      for (; current < input.length; ) {
                        var currentChar = input[current];
                        if (/\s/.test(currentChar)) current++;
                        else
                          switch (!0) {
                            case isEnvVar(currentChar):
                              tokens.push(parseEnvVars());
                              break;
                            case isCommand(currentChar):
                              tokens.push(parseCommand());
                              break;
                            case isOperator(currentChar):
                              tokens.push(parseOperator());
                              break;
                            case isArgument(currentChar):
                              tokens.push(parseArgument());
                              break;
                            case isString(currentChar):
                              tokens.push(parseString());
                              break;
                            default:
                              throw new Error('Unknown character: ' + currentChar);
                          }
                      }
                      return tokens;
                    })(candidate).forEach(function (item) {
                      var commandNotFoundYet = '' === command_1;
                      item.type === TokenType.EnvVar && (env_1 = item.value),
                        item.type === TokenType.Command &&
                          commandNotFoundYet &&
                          (command_1 = item.value),
                        (item.type === TokenType.Argument ||
                          (!commandNotFoundYet && item.type === TokenType.Command)) &&
                          args_1.push(item.value);
                    }),
                    { value: [command_1, args_1, { env: env_1 }] }
                  );
                }
              },
              index = 0;
            index < possibleKeys.length;
            index++
          ) {
            var state_1 = _loop_1(index);
            if ('object' == typeof state_1) return state_1.value;
          }
          throw (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(
            'Failed to start. Please provide a `start` or `dev` script on the package.json',
          );
        },
        getMessageFromError = function (error) {
          return 'string' == typeof error
            ? error
            : 'object' == typeof error && 'message' in error
            ? error.message
            : (0, _types_36e5ec0d_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(
                'The server could not be reached. Make sure that the node script is running and that a port has been started.',
              );
        };
    },
    './node_modules/@codesandbox/sandpack-client/dist/clients/node/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { SandpackNode: () => SandpackNode });
      var types_36e5ec0d = __webpack_require__(
          './node_modules/@codesandbox/sandpack-client/dist/types-36e5ec0d.mjs',
        ),
        __create = Object.create,
        __defProp = Object.defineProperty,
        __getOwnPropDesc = Object.getOwnPropertyDescriptor,
        __getOwnPropNames = Object.getOwnPropertyNames,
        __getProtoOf = Object.getPrototypeOf,
        __hasOwnProp = Object.prototype.hasOwnProperty,
        __commonJS = (cb, mod) =>
          function __require() {
            return (
              mod ||
                (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
              mod.exports
            );
          },
        __toESM = (mod, isNodeMode, target) => (
          (target = null != mod ? __create(__getProtoOf(mod)) : {}),
          ((to, from, except, desc) => {
            if ((from && 'object' == typeof from) || 'function' == typeof from)
              for (let key of __getOwnPropNames(from))
                __hasOwnProp.call(to, key) ||
                  key === except ||
                  __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
                  });
            return to;
          })(
            !isNodeMode && mod && mod.__esModule
              ? target
              : __defProp(target, 'default', { value: mod, enumerable: !0 }),
            mod,
          )
        ),
        __publicField = (obj, key, value) => (
          ((obj, key, value) => {
            key in obj
              ? __defProp(obj, key, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value,
                })
              : (obj[key] = value);
          })(obj, 'symbol' != typeof key ? key + '' : key, value),
          value
        ),
        __accessCheck = (obj, member, msg) => {
          if (!member.has(obj)) throw TypeError('Cannot ' + msg);
        },
        __privateGet = (obj, member, getter) => (
          __accessCheck(obj, member, 'read from private field'),
          getter ? getter.call(obj) : member.get(obj)
        ),
        __privateAdd = (obj, member, value) => {
          if (member.has(obj))
            throw TypeError('Cannot add the same private member more than once');
          member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
        },
        __privateSet = (obj, member, value, setter) => (
          __accessCheck(obj, member, 'write to private field'),
          setter ? setter.call(obj, value) : member.set(obj, value),
          value
        ),
        __privateMethod = (obj, member, method) => (
          __accessCheck(obj, member, 'access private method'), method
        ),
        require_pad = __commonJS({
          '../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js'(
            exports,
            module,
          ) {
            module.exports = function pad(num, size) {
              var s = '000000000' + num;
              return s.substr(s.length - size);
            };
          },
        }),
        require_fingerprint_browser = __commonJS({
          '../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js'(
            exports,
            module,
          ) {
            var pad = require_pad(),
              env = 'object' == typeof window ? window : self,
              globalCount = Object.keys(env).length,
              clientId = pad(
                (
                  (navigator.mimeTypes ? navigator.mimeTypes.length : 0) +
                  navigator.userAgent.length
                ).toString(36) + globalCount.toString(36),
                4,
              );
            module.exports = function fingerprint() {
              return clientId;
            };
          },
        }),
        require_getRandomValue_browser = __commonJS({
          '../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js'(
            exports,
            module,
          ) {
            var getRandomValue,
              lim,
              crypto =
                ('undefined' != typeof window && (window.crypto || window.msCrypto)) ||
                ('undefined' != typeof self && self.crypto);
            crypto
              ? ((lim = Math.pow(2, 32) - 1),
                (getRandomValue = function () {
                  return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
                }))
              : (getRandomValue = Math.random),
              (module.exports = getRandomValue);
          },
        }),
        require_cuid = __commonJS({
          '../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js'(
            exports,
            module,
          ) {
            var fingerprint = require_fingerprint_browser(),
              pad = require_pad(),
              getRandomValue = require_getRandomValue_browser(),
              c = 0,
              discreteValues = Math.pow(36, 4);
            function randomBlock() {
              return pad(((getRandomValue() * discreteValues) << 0).toString(36), 4);
            }
            function safeCounter() {
              return (c = c < discreteValues ? c : 0), ++c - 1;
            }
            function cuid3() {
              return (
                'c' +
                new Date().getTime().toString(36) +
                pad(safeCounter().toString(36), 4) +
                fingerprint() +
                (randomBlock() + randomBlock())
              );
            }
            (cuid3.slug = function slug() {
              var date = new Date().getTime().toString(36),
                counter = safeCounter().toString(36).slice(-4),
                print = fingerprint().slice(0, 1) + fingerprint().slice(-1),
                random = randomBlock().slice(-2);
              return date.slice(-2) + counter + print + random;
            }),
              (cuid3.isCuid = function isCuid(stringToCheck) {
                return (
                  'string' == typeof stringToCheck && !!stringToCheck.startsWith('c')
                );
              }),
              (cuid3.isSlug = function isSlug(stringToCheck) {
                if ('string' != typeof stringToCheck) return !1;
                var stringLength = stringToCheck.length;
                return stringLength >= 7 && stringLength <= 10;
              }),
              (cuid3.fingerprint = fingerprint),
              (module.exports = cuid3);
          },
        }),
        require_createDeferredExecutor = __commonJS({
          '../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js'(
            exports,
          ) {
            Object.defineProperty(exports, '__esModule', { value: !0 }),
              (exports.createDeferredExecutor = void 0),
              (exports.createDeferredExecutor = function createDeferredExecutor() {
                const executor = (resolve, reject) => {
                  (executor.state = 'pending'),
                    (executor.resolve = (data) => {
                      if ('pending' !== executor.state) return;
                      executor.result = data;
                      return resolve(
                        data instanceof Promise
                          ? data
                          : Promise.resolve(data).then(
                              (value) => ((executor.state = 'fulfilled'), value),
                            ),
                      );
                    }),
                    (executor.reject = (reason) => {
                      if ('pending' === executor.state)
                        return (
                          queueMicrotask(() => {
                            executor.state = 'rejected';
                          }),
                          reject((executor.rejectionReason = reason))
                        );
                    });
                };
                return executor;
              });
          },
        }),
        require_DeferredPromise = __commonJS({
          '../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js'(
            exports,
          ) {
            Object.defineProperty(exports, '__esModule', { value: !0 }),
              (exports.DeferredPromise = void 0);
            var createDeferredExecutor_1 = require_createDeferredExecutor();
            exports.DeferredPromise = class extends Promise {
              #executor;
              resolve;
              reject;
              constructor(executor = null) {
                const deferredExecutor = (0,
                createDeferredExecutor_1.createDeferredExecutor)();
                super((originalResolve, originalReject) => {
                  deferredExecutor(originalResolve, originalReject),
                    executor?.(deferredExecutor.resolve, deferredExecutor.reject);
                }),
                  (this.#executor = deferredExecutor),
                  (this.resolve = this.#executor.resolve),
                  (this.reject = this.#executor.reject);
              }
              get state() {
                return this.#executor.state;
              }
              get rejectionReason() {
                return this.#executor.rejectionReason;
              }
              then(onFulfilled, onRejected) {
                return this.#decorate(super.then(onFulfilled, onRejected));
              }
              catch(onRejected) {
                return this.#decorate(super.catch(onRejected));
              }
              finally(onfinally) {
                return this.#decorate(super.finally(onfinally));
              }
              #decorate(promise) {
                return Object.defineProperties(promise, {
                  resolve: { configurable: !0, value: this.resolve },
                  reject: { configurable: !0, value: this.reject },
                });
              }
            };
          },
        }),
        require_build = __commonJS({
          '../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js'(
            exports,
          ) {
            var __createBinding =
                (exports && exports.__createBinding) ||
                (Object.create
                  ? function (o, m, k, k2) {
                      void 0 === k2 && (k2 = k);
                      var desc = Object.getOwnPropertyDescriptor(m, k);
                      (desc &&
                        !('get' in desc
                          ? !m.__esModule
                          : desc.writable || desc.configurable)) ||
                        (desc = {
                          enumerable: !0,
                          get: function () {
                            return m[k];
                          },
                        }),
                        Object.defineProperty(o, k2, desc);
                    }
                  : function (o, m, k, k2) {
                      void 0 === k2 && (k2 = k), (o[k2] = m[k]);
                    }),
              __exportStar =
                (exports && exports.__exportStar) ||
                function (m, exports2) {
                  for (var p in m)
                    'default' === p ||
                      Object.prototype.hasOwnProperty.call(exports2, p) ||
                      __createBinding(exports2, m, p);
                };
            Object.defineProperty(exports, '__esModule', { value: !0 }),
              __exportStar(require_createDeferredExecutor(), exports),
              __exportStar(require_DeferredPromise(), exports);
          },
        }),
        require_MemoryLeakError = __commonJS({
          '../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js'(
            exports,
          ) {
            Object.defineProperty(exports, '__esModule', { value: !0 }),
              (exports.MemoryLeakError = void 0);
            var MemoryLeakError = class extends Error {
              emitter;
              type;
              count;
              constructor(emitter, type, count) {
                super(
                  `Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`,
                ),
                  (this.emitter = emitter),
                  (this.type = type),
                  (this.count = count),
                  (this.name = 'MaxListenersExceededWarning');
              }
            };
            exports.MemoryLeakError = MemoryLeakError;
          },
        }),
        require_Emitter = __commonJS({
          '../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js'(
            exports,
          ) {
            Object.defineProperty(exports, '__esModule', { value: !0 }),
              (exports.Emitter = void 0);
            var _events,
              _maxListeners,
              _hasWarnedAboutPotentialMemortyLeak,
              _getListeners,
              getListeners_fn,
              _removeListener,
              removeListener_fn,
              _wrapOnceListener,
              wrapOnceListener_fn,
              _internalEmit,
              internalEmit_fn,
              MemoryLeakError_1 = require_MemoryLeakError(),
              _Emitter = class {
                constructor() {
                  __privateAdd(this, _getListeners),
                    __privateAdd(this, _removeListener),
                    __privateAdd(this, _wrapOnceListener),
                    __privateAdd(this, _internalEmit),
                    __privateAdd(this, _events, void 0),
                    __privateAdd(this, _maxListeners, void 0),
                    __privateAdd(this, _hasWarnedAboutPotentialMemortyLeak, void 0),
                    __privateSet(this, _events, new Map()),
                    __privateSet(this, _maxListeners, _Emitter.defaultMaxListeners),
                    __privateSet(this, _hasWarnedAboutPotentialMemortyLeak, !1);
                }
                static listenerCount(emitter, eventName) {
                  return emitter.listenerCount(eventName);
                }
                setMaxListeners(maxListeners) {
                  return __privateSet(this, _maxListeners, maxListeners), this;
                }
                getMaxListeners() {
                  return __privateGet(this, _maxListeners);
                }
                eventNames() {
                  return Array.from(__privateGet(this, _events).keys());
                }
                emit(eventName, ...data) {
                  const listeners = __privateMethod(
                    this,
                    _getListeners,
                    getListeners_fn,
                  ).call(this, eventName);
                  return (
                    listeners.forEach((listener) => {
                      listener.apply(this, data);
                    }),
                    listeners.length > 0
                  );
                }
                addListener(eventName, listener) {
                  __privateMethod(this, _internalEmit, internalEmit_fn).call(
                    this,
                    'newListener',
                    eventName,
                    listener,
                  );
                  const nextListeners = __privateMethod(
                    this,
                    _getListeners,
                    getListeners_fn,
                  )
                    .call(this, eventName)
                    .concat(listener);
                  if (
                    (__privateGet(this, _events).set(eventName, nextListeners),
                    __privateGet(this, _maxListeners) > 0 &&
                      this.listenerCount(eventName) > __privateGet(this, _maxListeners) &&
                      !__privateGet(this, _hasWarnedAboutPotentialMemortyLeak))
                  ) {
                    __privateSet(this, _hasWarnedAboutPotentialMemortyLeak, !0);
                    const memoryLeakWarning = new MemoryLeakError_1.MemoryLeakError(
                      this,
                      eventName,
                      this.listenerCount(eventName),
                    );
                    console.warn(memoryLeakWarning);
                  }
                  return this;
                }
                on(eventName, listener) {
                  return this.addListener(eventName, listener);
                }
                once(eventName, listener) {
                  return this.addListener(
                    eventName,
                    __privateMethod(this, _wrapOnceListener, wrapOnceListener_fn).call(
                      this,
                      eventName,
                      listener,
                    ),
                  );
                }
                prependListener(eventName, listener) {
                  const listeners = __privateMethod(
                    this,
                    _getListeners,
                    getListeners_fn,
                  ).call(this, eventName);
                  if (listeners.length > 0) {
                    const nextListeners = [listener].concat(listeners);
                    __privateGet(this, _events).set(eventName, nextListeners);
                  } else
                    __privateGet(this, _events).set(
                      eventName,
                      listeners.concat(listener),
                    );
                  return this;
                }
                prependOnceListener(eventName, listener) {
                  return this.prependListener(
                    eventName,
                    __privateMethod(this, _wrapOnceListener, wrapOnceListener_fn).call(
                      this,
                      eventName,
                      listener,
                    ),
                  );
                }
                removeListener(eventName, listener) {
                  const listeners = __privateMethod(
                    this,
                    _getListeners,
                    getListeners_fn,
                  ).call(this, eventName);
                  return (
                    listeners.length > 0 &&
                      (__privateMethod(this, _removeListener, removeListener_fn).call(
                        this,
                        listeners,
                        listener,
                      ),
                      __privateGet(this, _events).set(eventName, listeners),
                      __privateMethod(this, _internalEmit, internalEmit_fn).call(
                        this,
                        'removeListener',
                        eventName,
                        listener,
                      )),
                    this
                  );
                }
                off(eventName, listener) {
                  return this.removeListener(eventName, listener);
                }
                removeAllListeners(eventName) {
                  return (
                    eventName
                      ? __privateGet(this, _events).delete(eventName)
                      : __privateGet(this, _events).clear(),
                    this
                  );
                }
                listeners(eventName) {
                  return Array.from(
                    __privateMethod(this, _getListeners, getListeners_fn).call(
                      this,
                      eventName,
                    ),
                  );
                }
                listenerCount(eventName) {
                  return __privateMethod(this, _getListeners, getListeners_fn).call(
                    this,
                    eventName,
                  ).length;
                }
                rawListeners(eventName) {
                  return this.listeners(eventName);
                }
              },
              Emitter2 = _Emitter;
            (_events = new WeakMap()),
              (_maxListeners = new WeakMap()),
              (_hasWarnedAboutPotentialMemortyLeak = new WeakMap()),
              (_getListeners = new WeakSet()),
              (getListeners_fn = function (eventName) {
                return __privateGet(this, _events).get(eventName) || [];
              }),
              (_removeListener = new WeakSet()),
              (removeListener_fn = function (listeners, listener) {
                const index = listeners.indexOf(listener);
                return index > -1 && listeners.splice(index, 1), [];
              }),
              (_wrapOnceListener = new WeakSet()),
              (wrapOnceListener_fn = function (eventName, listener) {
                const onceListener = (...data) => {
                  this.removeListener(eventName, onceListener),
                    listener.apply(this, data);
                };
                return onceListener;
              }),
              (_internalEmit = new WeakSet()),
              (internalEmit_fn = function (internalEventName, eventName, listener) {
                this.emit(internalEventName, eventName, listener);
              }),
              __publicField(Emitter2, 'defaultMaxListeners', 10),
              (exports.Emitter = Emitter2);
          },
        }),
        require_lib = __commonJS({
          '../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js'(
            exports,
          ) {
            var __createBinding =
                (exports && exports.__createBinding) ||
                (Object.create
                  ? function (o, m, k, k2) {
                      void 0 === k2 && (k2 = k);
                      var desc = Object.getOwnPropertyDescriptor(m, k);
                      (desc &&
                        !('get' in desc
                          ? !m.__esModule
                          : desc.writable || desc.configurable)) ||
                        (desc = {
                          enumerable: !0,
                          get: function () {
                            return m[k];
                          },
                        }),
                        Object.defineProperty(o, k2, desc);
                    }
                  : function (o, m, k, k2) {
                      void 0 === k2 && (k2 = k), (o[k2] = m[k]);
                    }),
              __exportStar =
                (exports && exports.__exportStar) ||
                function (m, exports2) {
                  for (var p in m)
                    'default' === p ||
                      Object.prototype.hasOwnProperty.call(exports2, p) ||
                      __createBinding(exports2, m, p);
                };
            Object.defineProperty(exports, '__esModule', { value: !0 }),
              __exportStar(require_Emitter(), exports),
              __exportStar(require_MemoryLeakError(), exports);
          },
        }),
        import_cuid = __toESM(require_cuid()),
        POSITIONALS_EXP = /(%?)(%([sdjo]))/g;
      function format(message, ...positionals) {
        if (0 === positionals.length) return message;
        let positionalIndex = 0,
          formattedMessage = message.replace(
            POSITIONALS_EXP,
            (match, isEscaped, _, flag) => {
              const value = (function serializePositional(positional, flag) {
                switch (flag) {
                  case 's':
                    return positional;
                  case 'd':
                  case 'i':
                    return Number(positional);
                  case 'j':
                    return JSON.stringify(positional);
                  case 'o': {
                    if ('string' == typeof positional) return positional;
                    const json = JSON.stringify(positional);
                    return '{}' === json || '[]' === json || /^\[object .+?\]$/.test(json)
                      ? positional
                      : json;
                  }
                }
              })(positionals[positionalIndex], flag);
              return isEscaped ? match : (positionalIndex++, value);
            },
          );
        return (
          positionalIndex < positionals.length &&
            (formattedMessage += ` ${positionals.slice(positionalIndex).join(' ')}`),
          (formattedMessage = formattedMessage.replace(/%{2,2}/g, '%')),
          formattedMessage
        );
      }
      var InvariantError = class extends Error {
          constructor(message, ...positionals) {
            super(message),
              (this.message = message),
              (this.name = 'Invariant Violation'),
              (this.message = format(message, ...positionals)),
              (function cleanErrorStack(error) {
                if (!error.stack) return;
                const nextStack = error.stack.split('\n');
                nextStack.splice(1, 2), (error.stack = nextStack.join('\n'));
              })(this);
          }
        },
        invariant = (predicate, message, ...positionals) => {
          if (!predicate) throw new InvariantError(message, ...positionals);
        };
      invariant.as = (ErrorConstructor, predicate, message, ...positionals) => {
        if (!predicate) {
          throw null != ErrorConstructor.prototype.name
            ? new ErrorConstructor(format(message, positionals))
            : ErrorConstructor(format(message, positionals));
        }
      };
      var import_deferred_promise = __toESM(require_build()),
        FLAG = window.localStorage.CSB_EMULATOR_DEBUG,
        COLOR_SCOPE = {
          preview: '[33;1m',
          emulator: '[35;1m',
          runtime: '[36;1m',
          bridge: '[34m',
          'runtime:worker': '[36;1m',
        };
      function createDebug(scope) {
        return function debug3(message, ...data) {
          if ('true' === FLAG) {
            const direction = () =>
                message.includes('sender')
                  ? '[32;1msender'
                  : message.includes('receiver')
                  ? '[31mreceiver'
                  : '',
              cleanMessage = message.replace(/\[.+\]:/, '');
            console.debug(
              `${COLOR_SCOPE[scope]}${scope}:${direction()}[0m:${cleanMessage}`,
              ...data,
            );
          }
        };
      }
      var debug = createDebug('emulator'),
        import_deferred_promise3 = __toESM(require_build()),
        import_cuid2 = __toESM(require_cuid()),
        import_strict_event_emitter = __toESM(require_lib()),
        ShellProcess = class {
          constructor(channel) {
            (this.channel = channel),
              (this.state = 'running'),
              (this.stdout = new import_strict_event_emitter.Emitter()),
              (this.stderr = new import_strict_event_emitter.Emitter()),
              (this.stdin = {
                write: (data) => {
                  if (!this.id)
                    throw new Error(
                      'Failed to write to stdin, no process is currently running',
                    );
                  return this.channel.send('shell/stdin', { data, workerId: this.id });
                },
              }),
              this.forwardStdEvents();
          }
          id;
          state;
          stdout;
          stderr;
          stdin;
          forwardStdEvents() {
            this.channel.on('worker/tty', (message) => {
              const { data } = message;
              if (data.workerId === this.id)
                switch (data.payload.type) {
                  case 'out':
                    this.stdout.emit('data', data.payload.data);
                    break;
                  case 'err':
                    this.stderr.emit('data', data.payload.data);
                }
            });
          }
          async runCommand(command, args, options = {}) {
            invariant(
              !this.id,
              'Failed to run "runCommand" on a ShellProcess: there is already a process running.',
            );
            const shellInfo = await this.channel.send('shell/runCommand', {
              command,
              args,
              options,
            });
            return (
              invariant(
                shellInfo,
                'Failed to run "runCommand" on a ShellProcess: was not able to retrieve a running process.',
              ),
              (this.id = shellInfo.id),
              (this.state = 'running'),
              shellInfo
            );
          }
          async on(message, listener) {
            switch (message) {
              case 'progress':
                return void this.channel.on('worker/progress', ({ data }) => {
                  listener(data.status);
                });
              case 'exit':
                return void this.channel.on('worker/exit', ({ data }) => {
                  data.workerId === this.id && listener(data.exitCode, data.error);
                });
            }
          }
          async kill() {
            invariant(
              this.id,
              'Failed to run "kill" on a ShellProcess: there is no process running. Did you forget to run it?',
            ),
              (this.state = 'idle'),
              await this.channel.send('shell/exit', { id: this.id }).catch((error) => {
                throw new Error(format('Failed to kill shell with ID "%s"', this.id), {
                  cause: error,
                });
              }),
              (this.id = void 0);
          }
        },
        import_deferred_promise2 = __toESM(require_build()),
        debug2 = createDebug('emulator'),
        base_80a1f760 = __webpack_require__(
          './node_modules/@codesandbox/sandpack-client/dist/base-80a1f760.mjs',
        ),
        client_utils_7a723432 = __webpack_require__(
          './node_modules/@codesandbox/sandpack-client/dist/client.utils-7a723432.mjs',
        );
      __webpack_require__('./node_modules/outvariant/lib/index.mjs'),
        __webpack_require__('./node_modules/dequal/dist/index.mjs');
      function loadPreviewIframe(iframe, url) {
        return (0, types_36e5ec0d._)(this, void 0, void 0, function () {
          var contentWindow, tries, timeout;
          return (0, types_36e5ec0d.a)(this, function (_a) {
            return (
              (contentWindow = iframe.contentWindow),
              (0, types_36e5ec0d.n)(
                contentWindow,
                'Failed to await preview iframe: no content window found',
              ),
              9e4,
              20,
              (tries = 0),
              [
                2,
                new Promise(function (resolve, reject) {
                  var triesToSetUrl = function () {
                    var onLoadPage = function () {
                      clearTimeout(timeout),
                        (tries = 20),
                        resolve(),
                        iframe.removeEventListener('load', onLoadPage);
                    };
                    tries >= 20
                      ? reject(
                          (0, types_36e5ec0d.c)('Could not able to connect to preview.'),
                        )
                      : (iframe.setAttribute('src', url),
                        (timeout = setTimeout(function () {
                          triesToSetUrl(), iframe.removeEventListener('load', onLoadPage);
                        }, 9e4)),
                        (tries += 1),
                        iframe.addEventListener('load', onLoadPage));
                  };
                  iframe.addEventListener('error', function () {
                    return reject(new Error('Iframe error'));
                  }),
                    iframe.addEventListener('abort', function () {
                      return reject(new Error('Aborted'));
                    }),
                    triesToSetUrl();
                }),
              ]
            );
          });
        });
      }
      var scripts = [
          {
            code: function setupHistoryListeners(_a) {
              var scope = _a.scope,
                origHistoryProto = window.history.__proto__,
                historyList = [],
                historyPosition = 0,
                dispatchMessage = function (url) {
                  parent.postMessage(
                    {
                      type: 'urlchange',
                      url,
                      back: historyPosition > 0,
                      forward: historyPosition < historyList.length - 1,
                      channelId: scope.channelId,
                    },
                    '*',
                  );
                };
              Object.assign(window.history, {
                go: function (delta) {
                  var newPos = historyPosition + delta;
                  if (newPos >= 0 && newPos <= historyList.length - 1) {
                    var _a = historyList[(historyPosition = newPos)],
                      url = _a.url,
                      state = _a.state;
                    origHistoryProto.replaceState.call(window.history, state, '', url);
                    var newURL = document.location.href;
                    dispatchMessage(newURL),
                      window.dispatchEvent(new PopStateEvent('popstate', { state }));
                  }
                },
                back: function () {
                  window.history.go(-1);
                },
                forward: function () {
                  window.history.go(1);
                },
                pushState: function (state, title, url) {
                  origHistoryProto.replaceState.call(window.history, state, title, url),
                    (function pushHistory(url, state) {
                      historyList.splice(historyPosition + 1),
                        historyList.push({ url, state }),
                        (historyPosition = historyList.length - 1);
                    })(url, state),
                    dispatchMessage(document.location.href);
                },
                replaceState: function (state, title, url) {
                  origHistoryProto.replaceState.call(window.history, state, title, url),
                    (historyList[historyPosition] = { state, url }),
                    dispatchMessage(document.location.href);
                },
              }),
                window.addEventListener('message', function handleMessage(_a) {
                  var data = _a.data;
                  'urlback' === data.type
                    ? history.back()
                    : 'urlforward' === data.type
                    ? history.forward()
                    : 'refresh' === data.type && document.location.reload();
                });
            }.toString(),
            id: 'historyListener',
          },
          {
            code: 'function consoleHook({ scope }) {var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e={},n={};!function(t){t.__esModule=!0,t.default=["log","debug","info","warn","error","table","clear","time","timeEnd","count","assert","command","result"]}(n);var a,o={},i={};(a=i).__esModule=!0,a.default=function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+"-"+Date.now()};var u={},s={__esModule:!0};s.update=s.state=void 0,s.update=function(t){s.state=t};var f={},c={};!function(r){var e=t&&t.__assign||function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},e.apply(this,arguments)};r.__esModule=!0,r.initialState=void 0,r.initialState={timings:{},count:{}};var n=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};r.default=function(t,a){var o,i,u;switch(void 0===t&&(t=r.initialState),a.type){case"COUNT":var s=t.count[a.name]||0;return e(e({},t),{count:e(e({},t.count),(o={},o[a.name]=s+1,o))});case"TIME_START":return e(e({},t),{timings:e(e({},t.timings),(i={},i[a.name]={start:n()},i))});case"TIME_END":var f=t.timings[a.name],c=n(),l=c-f.start;return e(e({},t),{timings:e(e({},t.timings),(u={},u[a.name]=e(e({},f),{end:c,time:l}),u))});default:return t}}}(c),function(r){var e=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r.__esModule=!0;var n=e(c),a=s;r.default=function(t){a.update(n.default(a.state,t))}}(f);var l={__esModule:!0};l.timeEnd=l.timeStart=l.count=void 0,l.count=function(t){return{type:"COUNT",name:t}},l.timeStart=function(t){return{type:"TIME_START",name:t}},l.timeEnd=function(t){return{type:"TIME_END",name:t}};var d=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};u.__esModule=!0,u.stop=u.start=void 0;var p=s,h=d(f),m=l;u.start=function(t){h.default(m.timeStart(t))},u.stop=function(t){var r=null===p.state||void 0===p.state?void 0:p.state.timings[t];return r&&!r.end?(h.default(m.timeEnd(t)),{method:"log",data:[t+": "+p.state.timings[t].time+"ms"]}):{method:"warn",data:["Timer \'"+t+"\' does not exist"]}};var y={},v=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};y.__esModule=!0,y.increment=void 0;var _=s,b=v(f),g=l;y.increment=function(t){return b.default(g.count(t)),{method:"log",data:[t+": "+_.state.count[t]]}};var M={},T=t&&t.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),a=0;for(r=0;r<e;r++)for(var o=arguments[r],i=0,u=o.length;i<u;i++,a++)n[a]=o[i];return n};M.__esModule=!0,M.test=void 0,M.test=function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return!t&&(0===r.length&&r.push("console.assert"),{method:"error",data:T(["Assertion failed:"],r)})},function(r){var e=t&&t.__assign||function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},e.apply(this,arguments)},n=t&&t.__createBinding||(Object.create?function(t,r,e,n){void 0===n&&(n=e),Object.defineProperty(t,n,{enumerable:!0,get:function(){return r[e]}})}:function(t,r,e,n){void 0===n&&(n=e),t[n]=r[e]}),a=t&&t.__setModuleDefault||(Object.create?function(t,r){Object.defineProperty(t,"default",{enumerable:!0,value:r})}:function(t,r){t.default=r}),o=t&&t.__importStar||function(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&n(r,t,e);return a(r,t),r},s=t&&t.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),a=0;for(r=0;r<e;r++)for(var o=arguments[r],i=0,u=o.length;i<u;i++,a++)n[a]=o[i];return n},f=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r.__esModule=!0;var c=f(i),l=o(u),d=o(y),p=o(M);r.default=function(t,r,n){var a=n||c.default();switch(t){case"clear":return{method:t,id:a};case"count":return!!(o="string"==typeof r[0]?r[0]:"default")&&e(e({},d.increment(o)),{id:a});case"time":case"timeEnd":var o;return!!(o="string"==typeof r[0]?r[0]:"default")&&("time"===t?(l.start(o),!1):e(e({},l.stop(o)),{id:a}));case"assert":if(0!==r.length){var i=p.test.apply(p,s([r[0]],r.slice(1)));if(i)return e(e({},i),{id:a})}return!1;case"error":return{method:t,id:a,data:r.map((function(t){try{return t.stack||t}catch(r){return t}}))};default:return{method:t,id:a,data:r}}}}(o);var S={},O={};!function(t){var r;t.__esModule=!0,function(t){t[t.infinity=0]="infinity",t[t.minusInfinity=1]="minusInfinity",t[t.minusZero=2]="minusZero"}(r||(r={})),t.default={type:"Arithmetic",lookup:Number,shouldTransform:function(t,r){return"number"===t&&(r===1/0||r===-1/0||function(t){return 1/t==-1/0}(r))},toSerializable:function(t){return t===1/0?r.infinity:t===-1/0?r.minusInfinity:r.minusZero},fromSerializable:function(t){return t===r.infinity?1/0:t===r.minusInfinity?-1/0:t===r.minusZero?-0:t}}}(O);var w={};!function(t){t.__esModule=!0,t.default={type:"Function",lookup:Function,shouldTransform:function(t,r){return"function"==typeof r},toSerializable:function(t){var r="";try{r=t.toString().substring(r.indexOf("{")+1,r.lastIndexOf("}"))}catch(t){}return{name:t.name,body:r,proto:Object.getPrototypeOf(t).constructor.name}},fromSerializable:function(t){try{var r=function(){};return"string"==typeof t.name&&Object.defineProperty(r,"name",{value:t.name,writable:!1}),"string"==typeof t.body&&Object.defineProperty(r,"body",{value:t.body,writable:!1}),"string"==typeof t.proto&&(r.constructor={name:t.proto}),r}catch(r){return t}}}}(w);var A={};!function(t){var r;function e(t){for(var r={},e=0,n=t.attributes;e<n.length;e++){var a=n[e];r[a.name]=a.value}return r}t.__esModule=!0,t.default={type:"HTMLElement",shouldTransform:function(t,r){return r&&r.children&&"string"==typeof r.innerHTML&&"string"==typeof r.tagName},toSerializable:function(t){return{tagName:t.tagName.toLowerCase(),attributes:e(t),innerHTML:t.innerHTML}},fromSerializable:function(t){try{var e=(r||(r=document.implementation.createHTMLDocument("sandbox"))).createElement(t.tagName);e.innerHTML=t.innerHTML;for(var n=0,a=Object.keys(t.attributes);n<a.length;n++){var o=a[n];try{e.setAttribute(o,t.attributes[o])}catch(t){}}return e}catch(r){return t}}}}(A);var j={};!function(r){var e=t&&t.__assign||function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},e.apply(this,arguments)};r.__esModule=!0,r.default={type:"Map",shouldTransform:function(t,r){return r&&r.constructor&&"Map"===r.constructor.name},toSerializable:function(t){var r={};return t.forEach((function(t,e){var n="object"==typeof e?JSON.stringify(e):e;r[n]=t})),{name:"Map",body:r,proto:Object.getPrototypeOf(t).constructor.name}},fromSerializable:function(t){var r=t.body,n=e({},r);return"string"==typeof t.proto&&(n.constructor={name:t.proto}),n}}}(j);var z={};!function(t){t.__esModule=!0;var r="@t",e=/^#*@(t|r)$/,n=(0,eval)("this"),a="function"==typeof ArrayBuffer,o="function"==typeof Map,i="function"==typeof Set,u=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],s=Array.prototype.slice,f={serialize:function(t){return JSON.stringify(t)},deserialize:function(t){return JSON.parse(t)}},c=function(){function t(t,r){this.references=t,this.transforms=r,this.transformsMap=this._makeTransformsMap(),this.circularCandidates=[],this.circularCandidatesDescrs=[],this.circularRefCount=0}return t._createRefMark=function(t){var r=Object.create(null);return r["@r"]=t,r},t.prototype._createCircularCandidate=function(t,r,e){this.circularCandidates.push(t),this.circularCandidatesDescrs.push({parent:r,key:e,refIdx:-1})},t.prototype._applyTransform=function(t,e,n,a){var o=Object.create(null),i=a.toSerializable(t);return"object"==typeof i&&this._createCircularCandidate(t,e,n),o[r]=a.type,o.data=this._handleValue((function(){return i}),e,n),o},t.prototype._handleArray=function(t){for(var r=[],e=function(e){r[e]=n._handleValue((function(){return t[e]}),r,e)},n=this,a=0;a<t.length;a++)e(a);return r},t.prototype._handlePlainObject=function(t){var r,n,a=Object.create(null),o=function(r){if(Reflect.has(t,r)){var n=e.test(r)?"#"+r:r;a[n]=i._handleValue((function(){return t[r]}),a,n)}},i=this;for(var u in t)o(u);var s=null===(n=null===(r=null==t?void 0:t.__proto__)||void 0===r?void 0:r.constructor)||void 0===n?void 0:n.name;return s&&"Object"!==s&&(a.constructor={name:s}),a},t.prototype._handleObject=function(t,r,e){return this._createCircularCandidate(t,r,e),Array.isArray(t)?this._handleArray(t):this._handlePlainObject(t)},t.prototype._ensureCircularReference=function(r){var e=this.circularCandidates.indexOf(r);if(e>-1){var n=this.circularCandidatesDescrs[e];return-1===n.refIdx&&(n.refIdx=n.parent?++this.circularRefCount:0),t._createRefMark(n.refIdx)}return null},t.prototype._handleValue=function(t,r,e){try{var n=t(),a=typeof n,o="object"===a&&null!==n;if(o){var i=this._ensureCircularReference(n);if(i)return i}var u=this._findTransform(a,n);return u?this._applyTransform(n,r,e,u):o?this._handleObject(n,r,e):n}catch(t){try{return this._handleValue((function(){return t instanceof Error?t:new Error(t)}),r,e)}catch(t){return null}}},t.prototype._makeTransformsMap=function(){if(o){var t=new Map;return this.transforms.forEach((function(r){r.lookup&&t.set(r.lookup,r)})),t}},t.prototype._findTransform=function(t,r){if(o&&r&&r.constructor&&(null==(a=this.transformsMap.get(r.constructor))?void 0:a.shouldTransform(t,r)))return a;for(var e=0,n=this.transforms;e<n.length;e++){var a;if((a=n[e]).shouldTransform(t,r))return a}},t.prototype.transform=function(){for(var r=this,e=[this._handleValue((function(){return r.references}),null,null)],n=0,a=this.circularCandidatesDescrs;n<a.length;n++){var o=a[n];o.refIdx>0&&(e[o.refIdx]=o.parent[o.key],o.parent[o.key]=t._createRefMark(o.refIdx))}return e},t}(),l=function(){function t(t,r){this.activeTransformsStack=[],this.visitedRefs=Object.create(null),this.references=t,this.transformMap=r}return t.prototype._handlePlainObject=function(t){var r=Object.create(null);for(var n in"constructor"in t&&(t.constructor&&"string"==typeof t.constructor.name||(t.constructor={name:"Object"})),t)t.hasOwnProperty(n)&&(this._handleValue(t[n],t,n),e.test(n)&&(r[n.substring(1)]=t[n],delete t[n]));for(var a in r)t[a]=r[a]},t.prototype._handleTransformedObject=function(t,e,n){var a=t[r],o=this.transformMap[a];if(!o)throw new Error("Can\'t find transform for \\""+a+\'" type.\');this.activeTransformsStack.push(t),this._handleValue(t.data,t,"data"),this.activeTransformsStack.pop(),e[n]=o.fromSerializable(t.data)},t.prototype._handleCircularSelfRefDuringTransform=function(t,r,e){var n=this.references;Object.defineProperty(r,e,{val:void 0,configurable:!0,enumerable:!0,get:function(){return void 0===this.val&&(this.val=n[t]),this.val},set:function(t){this.val=t}})},t.prototype._handleCircularRef=function(t,r,e){this.activeTransformsStack.includes(this.references[t])?this._handleCircularSelfRefDuringTransform(t,r,e):(this.visitedRefs[t]||(this.visitedRefs[t]=!0,this._handleValue(this.references[t],this.references,t)),r[e]=this.references[t])},t.prototype._handleValue=function(t,e,n){if("object"==typeof t&&null!==t){var a=t["@r"];if(void 0!==a)this._handleCircularRef(a,e,n);else if(t[r])this._handleTransformedObject(t,e,n);else if(Array.isArray(t))for(var o=0;o<t.length;o++)this._handleValue(t[o],t,o);else this._handlePlainObject(t)}},t.prototype.transform=function(){return this.visitedRefs[0]=!0,this._handleValue(this.references[0],this.references,0),this.references[0]},t}(),d=[{type:"[[NaN]]",shouldTransform:function(t,r){return"number"===t&&isNaN(r)},toSerializable:function(){return""},fromSerializable:function(){return NaN}},{type:"[[undefined]]",shouldTransform:function(t){return"undefined"===t},toSerializable:function(){return""},fromSerializable:function(){}},{type:"[[Date]]",lookup:Date,shouldTransform:function(t,r){return r instanceof Date},toSerializable:function(t){return t.getTime()},fromSerializable:function(t){var r=new Date;return r.setTime(t),r}},{type:"[[RegExp]]",lookup:RegExp,shouldTransform:function(t,r){return r instanceof RegExp},toSerializable:function(t){var r={src:t.source,flags:""};return t.globalThis&&(r.flags+="g"),t.ignoreCase&&(r.flags+="i"),t.multiline&&(r.flags+="m"),r},fromSerializable:function(t){return new RegExp(t.src,t.flags)}},{type:"[[Error]]",lookup:Error,shouldTransform:function(t,r){return r instanceof Error},toSerializable:function(t){var r,e;return t.stack||null===(e=(r=Error).captureStackTrace)||void 0===e||e.call(r,t),{name:t.name,message:t.message,stack:t.stack}},fromSerializable:function(t){var r=new(n[t.name]||Error)(t.message);return r.stack=t.stack,r}},{type:"[[ArrayBuffer]]",lookup:a&&ArrayBuffer,shouldTransform:function(t,r){return a&&r instanceof ArrayBuffer},toSerializable:function(t){var r=new Int8Array(t);return s.call(r)},fromSerializable:function(t){if(a){var r=new ArrayBuffer(t.length);return new Int8Array(r).set(t),r}return t}},{type:"[[TypedArray]]",shouldTransform:function(t,r){if(a)return ArrayBuffer.isView(r)&&!(r instanceof DataView);for(var e=0,o=u;e<o.length;e++){var i=o[e];if("function"==typeof n[i]&&r instanceof n[i])return!0}return!1},toSerializable:function(t){return{ctorName:t.constructor.name,arr:s.call(t)}},fromSerializable:function(t){return"function"==typeof n[t.ctorName]?new n[t.ctorName](t.arr):t.arr}},{type:"[[Map]]",lookup:o&&Map,shouldTransform:function(t,r){return o&&r instanceof Map},toSerializable:function(t){var r=[];return t.forEach((function(t,e){r.push(e),r.push(t)})),r},fromSerializable:function(t){if(o){for(var r=new Map,e=0;e<t.length;e+=2)r.set(t[e],t[e+1]);return r}for(var n=[],a=0;a<t.length;a+=2)n.push([t[e],t[e+1]]);return n}},{type:"[[Set]]",lookup:i&&Set,shouldTransform:function(t,r){return i&&r instanceof Set},toSerializable:function(t){var r=[];return t.forEach((function(t){r.push(t)})),r},fromSerializable:function(t){if(i){for(var r=new Set,e=0;e<t.length;e++)r.add(t[e]);return r}return t}}],p=function(){function t(t){this.transforms=[],this.transformsMap=Object.create(null),this.serializer=t||f,this.addTransforms(d)}return t.prototype.addTransforms=function(t){for(var r=0,e=t=Array.isArray(t)?t:[t];r<e.length;r++){var n=e[r];if(this.transformsMap[n.type])throw new Error(\'Transform with type "\'+n.type+\'" was already added.\');this.transforms.push(n),this.transformsMap[n.type]=n}return this},t.prototype.removeTransforms=function(t){for(var r=0,e=t=Array.isArray(t)?t:[t];r<e.length;r++){var n=e[r],a=this.transforms.indexOf(n);a>-1&&this.transforms.splice(a,1),delete this.transformsMap[n.type]}return this},t.prototype.encode=function(t){var r=new c(t,this.transforms).transform();return this.serializer.serialize(r)},t.prototype.decode=function(t){var r=this.serializer.deserialize(t);return new l(r,this.transformsMap).transform()},t}();t.default=p}(z);var E=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};S.__esModule=!0,S.Decode=P=S.Encode=void 0;var k=E(O),C=E(w),D=E(A),I=E(j),N=E(z),R=[D.default,C.default,k.default,I.default],x=new N.default;x.addTransforms(R);var P=S.Encode=function(t){return JSON.parse(x.encode(t))};S.Decode=function(t){return x.decode(JSON.stringify(t))},function(r){var e=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r.__esModule=!0;var a=e(n),i=e(o),u=S;r.default=function(t,r,e){void 0===e&&(e=!0);for(var n=t,o={pointers:{},src:{npm:"https://npmjs.com/package/console-feed",github:"https://github.com/samdenty99/console-feed"}},s=function(t){var a=n[t];n[t]=function(){a.apply(this,arguments);var n=[].slice.call(arguments);setTimeout((function(){var a=i.default(t,n);if(a){var o=a;e&&(o=u.Encode(a)),r(o,a)}}))},o.pointers[t]=a},f=0,c=a.default;f<c.length;f++)s(c[f]);return n.feed=o,n}}(e),r(e)(window.console,(function(t){var r=P(t);parent.postMessage({type:"console",codesandbox:!0,log:Array.isArray(r)?r[0]:r,channelId:scope.channelId},"*")}));\n\n};',
            id: 'consoleHook',
          },
        ],
        SandpackNode = (function (_super) {
          function SandpackNode(selector, sandboxInfo, options) {
            void 0 === options && (options = {});
            var _this =
              _super.call(
                this,
                selector,
                sandboxInfo,
                (0, types_36e5ec0d.h)((0, types_36e5ec0d.h)({}, options), {
                  bundlerURL: options.bundlerURL,
                }),
              ) || this;
            return (
              (_this._modulesCache = new Map()),
              (_this.messageChannelId = (0, client_utils_7a723432.g)()),
              (_this._initPromise = null),
              (_this.emitter = new client_utils_7a723432.E()),
              _this.manageIframes(selector),
              (_this.emulator = new (class {
                constructor(options) {
                  (this.options = options),
                    invariant(
                      this.options.iframe,
                      'Failed to create a Nodebox: expected "iframe" argument to be a reference to an <iframe> element but got %j',
                      this.options.iframe,
                    ),
                    (this.url =
                      this.options.runtimeUrl ||
                      'https://nodebox-runtime.codesandbox.io'),
                    (this.isConnected = !1);
                }
                channel = null;
                isConnected;
                url;
                fileSystemApi = null;
                shellApi = null;
                previewApi = null;
                async connect() {
                  const { iframe, cdnUrl } = this.options;
                  debug2('[message-sender]: Connecting to node emulator...');
                  const connectionPromise =
                    new import_deferred_promise3.DeferredPromise();
                  this.url ||
                    connectionPromise.reject(
                      new Error(
                        'Nodebox URL is missing. Did you forget to provide it when creating this Nodebox instance?',
                      ),
                    ),
                    invariant(
                      iframe.contentWindow,
                      'Failed to create a MessageChannel with the Nodebox iframe: no content window found',
                    ),
                    (this.channel = new (class {
                      constructor(target) {
                        (this.target = target),
                          (this.emitter = new EventTarget()),
                          (this.channel = new MessageChannel()),
                          (this.receiverPort = this.channel.port1);
                        const receiverReadyPromise =
                            new import_deferred_promise.DeferredPromise(),
                          handshakeListener = (message) => {
                            'internal/ready' === message.data.type &&
                              (debug('[message-sender]: runtime is ready'),
                              receiverReadyPromise.resolve());
                          };
                        window.addEventListener('message', handshakeListener),
                          receiverReadyPromise.then(() => {
                            window.removeEventListener('message', handshakeListener);
                          }),
                          (this.receiverReadyPromise = receiverReadyPromise),
                          (this.receiverPort.onmessage = (evt) => {
                            const data = evt.data;
                            null != data.type &&
                              (debug(
                                '[message-sender]: emitting "%s" event...',
                                data.type,
                                data.payload,
                              ),
                              this.emitter.dispatchEvent(
                                new MessageEvent(data.type, { data: data.payload }),
                              ));
                          });
                      }
                      emitter;
                      channel;
                      receiverPort;
                      receiverReadyPromise;
                      async handshake() {
                        const handshakePromise =
                          new import_deferred_promise.DeferredPromise();
                        await this.receiverReadyPromise,
                          debug('[message-sender]: sending handshake'),
                          this.target.postMessage({ type: 'internal/handshake' }, '*', [
                            this.channel.port2,
                          ]),
                          this.on('internal/handshake/done', () => {
                            handshakePromise.resolve(), clearTimeout(rejectionTimeout);
                          });
                        const rejectionTimeout = setTimeout(() => {
                          handshakePromise.reject(
                            new Error('MessageSender: Handshake timeout'),
                          );
                        }, 5e3);
                        return handshakePromise;
                      }
                      on(event, listener, options) {
                        debug('[message-sender]: add listener "%s"', event),
                          this.emitter.addEventListener(
                            event,
                            (message) => {
                              message instanceof MessageEvent && listener(message);
                            },
                            options,
                          );
                      }
                      off(event, listener, options) {
                        this.emitter.removeEventListener(event, listener, options);
                      }
                      async send(event, ...data) {
                        const operationPromise =
                            new import_deferred_promise.DeferredPromise(),
                          operationId = (0, import_cuid.default)(),
                          payload = data[0] || {};
                        debug(
                          '[message-sender]: send "%s" (%s)',
                          event,
                          operationId,
                          payload,
                        ),
                          this.receiverPort.postMessage({
                            type: event,
                            payload: { operationId, payload },
                          }),
                          debug(
                            '[message-sender]: adding done listener for "%s" (%s)',
                            event,
                            operationId,
                          );
                        const handleOperationDone = (doneEvent) => {
                            const { data: data2 } = doneEvent;
                            if (data2.operationId === operationId) {
                              const listenerPayload = data2.listenerPayload || {};
                              debug(
                                '[message-sender]: resolving "%s (%s) promise!',
                                event,
                                operationId,
                              ),
                                operationPromise.resolve({
                                  ...listenerPayload,
                                  operationId: data2.operationId,
                                });
                            }
                          },
                          handleOperationFailed = (failEvent) => {
                            const { data: data2 } = failEvent;
                            data2.operationId === operationId &&
                              (debug(
                                '[message-sender]: rejecting "%s (%s) promise!',
                                event,
                                operationId,
                              ),
                              operationPromise.reject(data2.error));
                          };
                        return (
                          this.on('internal/operation/done', handleOperationDone),
                          this.on('internal/operation/failed', handleOperationFailed),
                          operationPromise.finally(() => {
                            this.emitter.removeEventListener(
                              'internal/operation/done',
                              handleOperationDone,
                            ),
                              this.emitter.removeEventListener(
                                'internal/operation/failed',
                                handleOperationFailed,
                              );
                          })
                        );
                      }
                    })(iframe.contentWindow));
                  const frameLoadPromise = new import_deferred_promise3.DeferredPromise();
                  return (
                    iframe.setAttribute('src', this.url),
                    iframe.addEventListener(
                      'load',
                      () => {
                        frameLoadPromise.resolve();
                      },
                      { once: !0 },
                    ),
                    iframe.addEventListener(
                      'error',
                      (event) => {
                        frameLoadPromise.reject(event.error);
                      },
                      { once: !0 },
                    ),
                    await frameLoadPromise,
                    debug2('[message-sender]: IFrame loaded...'),
                    await this.channel.handshake(),
                    debug2('[message-sender]: Handshake completed...'),
                    this.channel.send('connect', { cdnUrl }),
                    this.channel.on('runtime/ready', () => {
                      connectionPromise.resolve();
                    }),
                    connectionPromise.then(() => {
                      debug2('[message-sender]: Connected to runtime...'),
                        (this.isConnected = !0);
                    })
                  );
                }
                get fs() {
                  return (
                    invariant(
                      this.isConnected,
                      'Failed to access the File System API: consumer is not connected. Did you forget to run "connect()"?',
                    ),
                    this.fileSystemApi ||
                      (this.fileSystemApi = new (class {
                        constructor(channel) {
                          this.channel = channel;
                        }
                        async init(files) {
                          await this.channel.send('fs/init', { files });
                        }
                        async readFile(path, encoding) {
                          const response = await this.channel
                            .send('fs/readFile', { path, encoding })
                            .catch((error) => {
                              throw new Error(
                                format('Failed to read file at path "%s"', path),
                                { cause: error },
                              );
                            });
                          if (!response) throw new Error('File not found');
                          return response.data;
                        }
                        async writeFile(path, content, options) {
                          let encoding,
                            recursive = !1;
                          'object' == typeof options
                            ? ((encoding = options.encoding),
                              (recursive = !!options.recursive))
                            : 'string' == typeof options && (encoding = options),
                            await this.channel
                              .send('fs/writeFile', {
                                path,
                                content,
                                encoding,
                                recursive,
                              })
                              .catch((error) => {
                                throw new Error(
                                  format('Failed to write file at path "%s"', path),
                                  { cause: error },
                                );
                              });
                        }
                        async readdir(path) {
                          const response = await this.channel
                            .send('fs/readdir', { path })
                            .catch((error) => {
                              throw new Error(
                                format('Failed to read directory at path "%s"', path),
                                { cause: error },
                              );
                            });
                          if (!response) throw new Error('Directory not found');
                          return response.data;
                        }
                        async mkdir(path, options) {
                          const recursive = !!options?.recursive;
                          await this.channel
                            .send('fs/mkdir', { path, recursive })
                            .catch((error) => {
                              throw new Error(
                                format('Failed to make directory at path "%s"', path),
                                { cause: error },
                              );
                            });
                        }
                        async stat(path) {
                          const response = await this.channel
                            .send('fs/stat', { path })
                            .catch((error) => {
                              throw new Error(
                                format('Failed to stat file at path "%s"', path),
                                { cause: error },
                              );
                            });
                          if (!response) throw new Error('File not found');
                          return response.data;
                        }
                        async rm(path, options) {
                          const { force, recursive } = options || {};
                          await this.channel
                            .send('fs/rm', { path, force, recursive })
                            .catch((error) => {
                              throw new Error(
                                format('Failed to remove file at path "%s"', path),
                                { cause: error },
                              );
                            });
                        }
                        async watch(includes, excludes, listener) {
                          const watcherId = (0, import_cuid2.default)();
                          return (
                            await this.channel.send('fs/watch', {
                              watcherId,
                              includes,
                              excludes,
                            }),
                            this.channel.on('fs/watch-event', ({ data }) => {
                              if (data.watcherId === watcherId && listener) {
                                const evt = { ...data };
                                delete evt.watcherId, listener(evt);
                              }
                            }),
                            {
                              dispose: () =>
                                this.channel.send('fs/unwatch', { watcherId }),
                            }
                          );
                        }
                      })(this.channel)),
                    this.fileSystemApi
                  );
                }
                get shell() {
                  return (
                    invariant(
                      this.isConnected,
                      'Failed to access the Shell API: consumer is not connected. Did you forget to run "connect()"?',
                    ),
                    this.shellApi ||
                      (this.shellApi = new (class {
                        constructor(channel) {
                          this.channel = channel;
                        }
                        create() {
                          return new ShellProcess(this.channel);
                        }
                      })(this.channel)),
                    this.shellApi
                  );
                }
                get preview() {
                  return (
                    invariant(
                      this.isConnected,
                      'Failed to access the Preview API: consumer is not connected. Did you forget to run "connect()"?',
                    ),
                    this.previewApi ||
                      (this.previewApi = new (class {
                        constructor(channel) {
                          this.channel = channel;
                        }
                        async waitFor(payload, predicate, timeout = 2e4) {
                          const readyPromise =
                              new import_deferred_promise2.DeferredPromise(),
                            rejectTimeout = setTimeout(() => {
                              readyPromise.reject();
                            }, timeout),
                            previewInformation = await this.channel
                              .send('preview/get/info', payload)
                              .catch((error) => {
                                readyPromise.reject(
                                  new Error(
                                    format(
                                      'Failed to look up preview information for shell ID "%s" (port: %d)',
                                      payload.sourceShellId,
                                      payload.port,
                                    ),
                                  ),
                                );
                              }),
                            foundPreview =
                              previewInformation && predicate(previewInformation);
                          return (
                            foundPreview &&
                              readyPromise.resolve({
                                url: previewInformation.url,
                                port: previewInformation.port,
                                sourceShellId: previewInformation.sourceShellId,
                              }),
                            this.channel.on('preview/port/ready', ({ data }) => {
                              !foundPreview &&
                                predicate(data) &&
                                readyPromise.resolve({
                                  url: data.url,
                                  port: data.port,
                                  sourceShellId: data.sourceShellId,
                                });
                            }),
                            readyPromise.finally(() => {
                              clearTimeout(rejectTimeout);
                            })
                          );
                        }
                        async getByShellId(sourceShellId, timeout) {
                          return this.waitFor(
                            { sourceShellId },
                            (data) => data.sourceShellId === sourceShellId,
                            timeout,
                          ).catch((error) => {
                            throw new Error(
                              format('Failed to get shell by ID "%s"', sourceShellId),
                              { cause: error },
                            );
                          });
                        }
                        async waitForPort(port, timeout) {
                          return this.waitFor(
                            { port },
                            (data) => data.port === port,
                            timeout,
                          ).catch((error) => {
                            throw new Error(format('Failed to await port %d', port), {
                              cause: error,
                            });
                          });
                        }
                      })(this.channel)),
                    this.previewApi
                  );
                }
              })({ iframe: _this.emulatorIframe, runtimeUrl: _this.options.bundlerURL })),
              _this.updateSandbox(sandboxInfo),
              _this
            );
          }
          return (
            (0, types_36e5ec0d.g)(SandpackNode, _super),
            (SandpackNode.prototype._init = function (files) {
              return (0, types_36e5ec0d._)(this, void 0, void 0, function () {
                return (0, types_36e5ec0d.a)(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4, this.emulator.connect()];
                    case 1:
                      return _a.sent(), [4, this.emulator.fs.init(files)];
                    case 2:
                      return _a.sent(), [4, this.globalListeners()];
                    case 3:
                      return _a.sent(), [2];
                  }
                });
              });
            }),
            (SandpackNode.prototype.compile = function (files) {
              return (0, types_36e5ec0d._)(this, void 0, void 0, function () {
                var shellId, err_1;
                return (0, types_36e5ec0d.a)(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return (
                        _a.trys.push([0, 5, , 6]),
                        (this.status = 'initializing'),
                        this.dispatch({ type: 'start', firstLoad: !0 }),
                        this._initPromise || (this._initPromise = this._init(files)),
                        [4, this._initPromise]
                      );
                    case 1:
                      return (
                        _a.sent(),
                        this.dispatch({ type: 'connected' }),
                        [4, this.createShellProcessFromTask(files)]
                      );
                    case 2:
                      return (
                        (shellId = _a.sent().id),
                        [4, this.createPreviewURLFromId(shellId)]
                      );
                    case 3:
                      return _a.sent(), [4, this.setLocationURLIntoIFrame()];
                    case 4:
                      return _a.sent(), this.dispatchDoneMessage(), [3, 6];
                    case 5:
                      return (
                        (err_1 = _a.sent()),
                        this.dispatch({
                          type: 'action',
                          action: 'notification',
                          notificationType: 'error',
                          title: (0, client_utils_7a723432.a)(err_1),
                        }),
                        this.dispatch({ type: 'done', compilatonError: !0 }),
                        [3, 6]
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (SandpackNode.prototype.createShellProcessFromTask = function (files) {
              return (0, types_36e5ec0d._)(this, void 0, void 0, function () {
                var packageJsonContent,
                  _a,
                  _this = this;
                return (0, types_36e5ec0d.a)(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      return (
                        (packageJsonContent = (0, client_utils_7a723432.r)(
                          files['/package.json'],
                        )),
                        (this.emulatorCommand = (0, client_utils_7a723432.b)(
                          packageJsonContent,
                        )),
                        (this.emulatorShellProcess = this.emulator.shell.create()),
                        [
                          4,
                          this.emulatorShellProcess.on('exit', function (exitCode) {
                            _this.dispatch({
                              type: 'action',
                              action: 'notification',
                              notificationType: 'error',
                              title: (0, types_36e5ec0d.c)(
                                'Error: process.exit(' + exitCode + ') called.',
                              ),
                            });
                          }),
                        ]
                      );
                    case 1:
                      return (
                        _b.sent(),
                        [
                          4,
                          this.emulatorShellProcess.on('progress', function (data) {
                            var _a, _b;
                            if (
                              'command_running' === data.state ||
                              'starting_command' === data.state
                            )
                              return (
                                _this.dispatch({
                                  type: 'shell/progress',
                                  data: (0, types_36e5ec0d.h)(
                                    (0, types_36e5ec0d.h)({}, data),
                                    {
                                      command: [
                                        null === (_a = _this.emulatorCommand) ||
                                        void 0 === _a
                                          ? void 0
                                          : _a[0],
                                        null === (_b = _this.emulatorCommand) ||
                                        void 0 === _b
                                          ? void 0
                                          : _b[1].join(' '),
                                      ].join(' '),
                                    },
                                  ),
                                }),
                                void (_this.status = 'installing-dependencies')
                              );
                            _this.dispatch({ type: 'shell/progress', data });
                          }),
                        ]
                      );
                    case 2:
                      return (
                        _b.sent(),
                        this.emulatorShellProcess.stdout.on('data', function (data) {
                          _this.dispatch({
                            type: 'stdout',
                            payload: { data, type: 'out' },
                          });
                        }),
                        this.emulatorShellProcess.stderr.on('data', function (data) {
                          _this.dispatch({
                            type: 'stdout',
                            payload: { data, type: 'err' },
                          });
                        }),
                        [
                          4,
                          (_a = this.emulatorShellProcess).runCommand.apply(
                            _a,
                            this.emulatorCommand,
                          ),
                        ]
                      );
                    case 3:
                      return [2, _b.sent()];
                  }
                });
              });
            }),
            (SandpackNode.prototype.createPreviewURLFromId = function (id) {
              return (0, types_36e5ec0d._)(this, void 0, void 0, function () {
                var url;
                return (0, types_36e5ec0d.a)(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return (
                        (this.iframePreviewUrl = void 0),
                        [4, this.emulator.preview.getByShellId(id)]
                      );
                    case 1:
                      return (
                        (url = _a.sent().url),
                        (this.iframePreviewUrl = url + this.options.startRoute),
                        [2]
                      );
                  }
                });
              });
            }),
            (SandpackNode.prototype.manageIframes = function (selector) {
              var _a, iframe, options;
              if ('string' == typeof selector) {
                var element = document.querySelector(selector);
                (0, types_36e5ec0d.n)(
                  element,
                  "The element '" + selector + "' was not found",
                ),
                  (this.iframe = document.createElement('iframe'));
              } else this.iframe = selector;
              (iframe = this.iframe),
                (options = this.options),
                (iframe.style.border = '0'),
                (iframe.style.width = options.width || '100%'),
                (iframe.style.height = options.height || '100%'),
                (iframe.style.overflow = 'hidden'),
                (iframe.allow = 'cross-origin-isolated'),
                (0, types_36e5ec0d.n)(
                  this.iframe.parentNode,
                  'The given iframe does not have a parent.',
                ),
                (this.emulatorIframe = document.createElement('iframe')),
                this.emulatorIframe.classList.add('sp-bridge-frame'),
                null === (_a = this.iframe.parentNode) ||
                  void 0 === _a ||
                  _a.appendChild(this.emulatorIframe);
            }),
            (SandpackNode.prototype.setLocationURLIntoIFrame = function () {
              return (0, types_36e5ec0d._)(this, void 0, void 0, function () {
                return (0, types_36e5ec0d.a)(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return this.iframePreviewUrl
                        ? [4, loadPreviewIframe(this.iframe, this.iframePreviewUrl)]
                        : [3, 2];
                    case 1:
                      _a.sent(), (_a.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (SandpackNode.prototype.dispatchDoneMessage = function () {
              (this.status = 'done'),
                this.dispatch({ type: 'done', compilatonError: !1 }),
                this.iframePreviewUrl &&
                  this.dispatch({
                    type: 'urlchange',
                    url: this.iframePreviewUrl,
                    back: !1,
                    forward: !1,
                  });
            }),
            (SandpackNode.prototype.globalListeners = function () {
              return (0, types_36e5ec0d._)(this, void 0, void 0, function () {
                var _this = this;
                return (0, types_36e5ec0d.a)(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return (
                        window.addEventListener('message', function (event) {
                          var iframe, channelId;
                          'PREVIEW_LOADED' === event.data.type &&
                            ((iframe = _this.iframe),
                            (channelId = _this.messageChannelId),
                            scripts.forEach(function (_a) {
                              var _b,
                                code = _a.code,
                                message = {
                                  uid: _a.id,
                                  type: 'INJECT_AND_INVOKE',
                                  code: 'exports.activate = ' + code,
                                  scope: { channelId },
                                };
                              null === (_b = iframe.contentWindow) ||
                                void 0 === _b ||
                                _b.postMessage(message, '*');
                            })),
                            'urlchange' === event.data.type &&
                            event.data.channelId === _this.messageChannelId
                              ? _this.dispatch({
                                  type: 'urlchange',
                                  url: event.data.url,
                                  back: event.data.back,
                                  forward: event.data.forward,
                                })
                              : event.data.channelId === _this.messageChannelId &&
                                _this.dispatch(event.data);
                        }),
                        [
                          4,
                          this.emulator.fs.watch(
                            ['*'],
                            [
                              '.next',
                              'node_modules',
                              'build',
                              'dist',
                              'vendor',
                              '.config',
                              '.vuepress',
                            ],
                            function (message) {
                              return (0, types_36e5ec0d._)(
                                _this,
                                void 0,
                                void 0,
                                function () {
                                  var event, path, content, newContent, err_2;
                                  return (0, types_36e5ec0d.a)(this, function (_b) {
                                    switch (_b.label) {
                                      case 0:
                                        return message
                                          ? ((path =
                                              'newPath' in (event = message)
                                                ? event.newPath
                                                : 'path' in event
                                                ? event.path
                                                : ''),
                                            [4, this.emulator.fs.stat(path)])
                                          : [2];
                                      case 1:
                                        if ('file' !== _b.sent().type) return [2, null];
                                        _b.label = 2;
                                      case 2:
                                        switch (
                                          (_b.trys.push([2, 10, , 11]), event.type)
                                        ) {
                                          case 'change':
                                          case 'create':
                                            return [3, 3];
                                          case 'remove':
                                            return [3, 5];
                                          case 'rename':
                                            return [3, 6];
                                          case 'close':
                                            return [3, 8];
                                        }
                                        return [3, 9];
                                      case 3:
                                        return [
                                          4,
                                          this.emulator.fs.readFile(event.path, 'utf8'),
                                        ];
                                      case 4:
                                        return (
                                          (content = _b.sent()),
                                          this.dispatch({
                                            type: 'fs/change',
                                            path: event.path,
                                            content,
                                          }),
                                          this._modulesCache.set(
                                            event.path,
                                            (0, client_utils_7a723432.w)(content),
                                          ),
                                          [3, 9]
                                        );
                                      case 5:
                                        return (
                                          this.dispatch({
                                            type: 'fs/remove',
                                            path: event.path,
                                          }),
                                          this._modulesCache.delete(event.path),
                                          [3, 9]
                                        );
                                      case 6:
                                        return (
                                          this.dispatch({
                                            type: 'fs/remove',
                                            path: event.oldPath,
                                          }),
                                          this._modulesCache.delete(event.oldPath),
                                          [
                                            4,
                                            this.emulator.fs.readFile(
                                              event.newPath,
                                              'utf8',
                                            ),
                                          ]
                                        );
                                      case 7:
                                        return (
                                          (newContent = _b.sent()),
                                          this.dispatch({
                                            type: 'fs/change',
                                            path: event.newPath,
                                            content: newContent,
                                          }),
                                          this._modulesCache.set(
                                            event.newPath,
                                            (0, client_utils_7a723432.w)(newContent),
                                          ),
                                          [3, 9]
                                        );
                                      case 8:
                                        return [3, 9];
                                      case 9:
                                        return [3, 11];
                                      case 10:
                                        return (
                                          (err_2 = _b.sent()),
                                          this.dispatch({
                                            type: 'action',
                                            action: 'notification',
                                            notificationType: 'error',
                                            title: (0, client_utils_7a723432.a)(err_2),
                                          }),
                                          [3, 11]
                                        );
                                      case 11:
                                        return [2];
                                    }
                                  });
                                },
                              );
                            },
                          ),
                        ]
                      );
                    case 1:
                      return _a.sent(), [2];
                  }
                });
              });
            }),
            (SandpackNode.prototype.restartShellProcess = function () {
              var _a;
              return (0, types_36e5ec0d._)(this, void 0, void 0, function () {
                return (0, types_36e5ec0d.a)(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      return this.emulatorShellProcess && this.emulatorCommand
                        ? (this.dispatch({ type: 'start', firstLoad: !0 }),
                          (this.status = 'initializing'),
                          [4, this.emulatorShellProcess.kill()])
                        : [3, 3];
                    case 1:
                      return (
                        _b.sent(),
                        null === (_a = this.iframe) ||
                          void 0 === _a ||
                          _a.removeAttribute('attr'),
                        this.emulator.fs.rm('/node_modules/.vite', {
                          recursive: !0,
                          force: !0,
                        }),
                        [4, this.compile(Object.fromEntries(this._modulesCache))]
                      );
                    case 2:
                      _b.sent(), (_b.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (SandpackNode.prototype.updateSandbox = function (setup) {
              var _a,
                _this = this,
                modules = (0, client_utils_7a723432.f)(setup.files);
              'running' !==
              (null === (_a = this.emulatorShellProcess) || void 0 === _a
                ? void 0
                : _a.state)
                ? (this.dispatch({
                    codesandbox: !0,
                    modules,
                    template: setup.template,
                    type: 'compile',
                  }),
                  Object.entries(modules).forEach(function (_a) {
                    var key = _a[0],
                      value = _a[1];
                    _this._modulesCache.set(key, (0, client_utils_7a723432.w)(value));
                  }))
                : Object.entries(modules).forEach(function (_a) {
                    var key = _a[0],
                      value = _a[1];
                    (_this._modulesCache.get(key) &&
                      (0, client_utils_7a723432.r)(value) ===
                        (0, client_utils_7a723432.r)(_this._modulesCache.get(key))) ||
                      _this.emulator.fs.writeFile(key, value, { recursive: !0 });
                  });
            }),
            (SandpackNode.prototype.dispatch = function (message) {
              var _a, _b;
              return (0, types_36e5ec0d._)(this, void 0, void 0, function () {
                return (0, types_36e5ec0d.a)(this, function (_d) {
                  switch (_d.label) {
                    case 0:
                      switch (message.type) {
                        case 'compile':
                          return [3, 1];
                        case 'refresh':
                          return [3, 2];
                        case 'urlback':
                        case 'urlforward':
                          return [3, 4];
                        case 'shell/restart':
                          return [3, 5];
                        case 'shell/openPreview':
                          return [3, 6];
                      }
                      return [3, 7];
                    case 1:
                      return this.compile(message.modules), [3, 8];
                    case 2:
                      return [4, this.setLocationURLIntoIFrame()];
                    case 3:
                      return _d.sent(), [3, 8];
                    case 4:
                      return (
                        null ===
                          (_b =
                            null === (_a = this.iframe) || void 0 === _a
                              ? void 0
                              : _a.contentWindow) ||
                          void 0 === _b ||
                          _b.postMessage(message, '*'),
                        [3, 8]
                      );
                    case 5:
                      return this.restartShellProcess(), [3, 8];
                    case 6:
                      return window.open(this.iframePreviewUrl, '_blank'), [3, 8];
                    case 7:
                      this.emitter.dispatch(message), (_d.label = 8);
                    case 8:
                      return [2];
                  }
                });
              });
            }),
            (SandpackNode.prototype.listen = function (listener) {
              return this.emitter.listener(listener);
            }),
            (SandpackNode.prototype.destroy = function () {
              this.emulatorIframe.remove(), this.emitter.cleanup();
            }),
            SandpackNode
          );
        })(base_80a1f760.S);
    },
  },
]);
