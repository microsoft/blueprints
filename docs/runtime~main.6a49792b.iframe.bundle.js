<<<<<<< HEAD:docs/runtime~main.6a49792b.iframe.bundle.js
(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({14:"command-__dev__-command-block-stories",164:"icon-button-__dev__-icon-button-stories",353:"table-list-__dev__-table-list-stories",451:"button-__dev__-button-stories",456:"component-preview-__dev__-component-preview-stories",1168:"aside-navigation-__dev__-aside-navigation-stories",1176:"action-tile-__dev__-action-tile-stories",1427:"code-snippet-__dev__-code-snippet-stories",1433:"image-tile-__dev__-image-tile-stories",1752:"footer-__dev__-footer-stories",1965:"header-__dev__-header-stories",2198:"tile-__dev__-tile-stories",2916:"logo-__dev__-logo-stories",3287:"embed-__dev__-embed-stories",3362:"theme-switch-__dev__-theme-switch-stories",3550:"ordered-list-__dev__-ordered-list-stories",3779:"tag-__dev__-tag-stories",3787:"prop-docs-cli-__dev__-prop-docs-cli-stories",3798:"shell-__dev__-crown-stories",3920:"main-navigation-__dev__-main-navigation-stories",4429:"badge-__dev__-badge-stories",4648:"callout-__dev__-callout-stories",4669:"person-tile-__dev__-person-tile-stories",4881:"recommendation-tile-__dev__-recommendation-tile-stories",5063:"prop-table-__dev__-prop-table-stories",5130:"use-copy-to-clipboard-__dev__-use-copy-to-clipboard-stories",5150:"accordion-__dev__-accordion-list-stories",5259:"illustration-tile-__dev__-illustration-tile-stories",5289:"shell-__dev__-shell-stories",5365:"mark-list-__dev__-mark-list-stories",5789:"action-list-tile-__dev__-action-list-tile-stories",5839:"text-__dev__-text-stories",5926:"theming-__dev__-theming-stories",6219:"use-prefers-color-scheme-__dev__-use-prefers-color-scheme-stories",6349:"icon-__dev__-icon-stories",6353:"divider-__dev__-divider-stories",7719:"link-__dev__-link-stories",8026:"sandbox-__dev__-sandbox-stories",8316:"file-to-string-__dev__-file-to-string-stories",8515:"tray-__dev__-tray-stories",9311:"bookmark-tile-__dev__-bookmark-tile-stories",9465:"guidance-__dev__-guidance-stories",9600:"heading-__dev__-heading-stories",9605:"data-table-__dev__-data-table-stories",9777:"tabs-__dev__-tabs-stories"}[chunkId]||chunkId)+"."+{14:"05c27332",161:"5d14b176",164:"ce093d17",353:"758f9298",451:"62f5d3f7",456:"fa41ff73",532:"9e0e578f",1168:"085a31ec",1176:"b61291b3",1427:"9a3b75f6",1433:"306ca36d",1752:"fd43979c",1965:"917d190c",2198:"ad5aef26",2726:"2561875e",2916:"c5604d46",3287:"483dafa6",3362:"a8b94a51",3446:"a02a107c",3550:"4d78eb1c",3779:"c9f7605e",3787:"96227bc5",3798:"fd022751",3920:"46dca9fd",4429:"a84b95ef",4648:"b8017871",4669:"b6f09bb0",4881:"1e171882",5063:"4b24dd5c",5130:"30506738",5150:"e2d3f41c",5259:"45fbd488",5289:"983c0175",5365:"d27ec69f",5708:"b0aeed31",5789:"5d36c18e",5839:"e64b12f6",5926:"a35531fd",6219:"a0eb8497",6349:"ee795331",6353:"cbc37eb3",6562:"0f1882f3",7377:"d26ad1ea",7719:"b729ccb5",7863:"65aea40c",7992:"96daf9e5",8026:"7b2871e2",8316:"3b9b5b64",8515:"1471756a",8715:"62f365e2",9102:"2a9e26a8",9311:"d738103d",9381:"dfc6c13e",9465:"d53ea233",9526:"ee448458",9600:"2002a6a0",9605:"5a7679dc",9777:"ad36a00a"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="arbutus:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","arbutus:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkarbutus=self.webpackChunkarbutus||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})()})();
=======
(() => {
  'use strict';
  var deferred,
    leafPrototypes,
    getProto,
    inProgress,
    __webpack_modules__ = {},
    __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = (__webpack_module_cache__[moduleId] = {
      id: moduleId,
      loaded: !1,
      exports: {},
    });
    return (
      __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__,
      ),
      (module.loaded = !0),
      module.exports
    );
  }
  (__webpack_require__.m = __webpack_modules__),
    (deferred = []),
    (__webpack_require__.O = (result, chunkIds, fn, priority) => {
      if (!chunkIds) {
        var notFulfilled = 1 / 0;
        for (i = 0; i < deferred.length; i++) {
          for (
            var [chunkIds, fn, priority] = deferred[i], fulfilled = !0, j = 0;
            j < chunkIds.length;
            j++
          )
            (!1 & priority || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j]),
            )
              ? chunkIds.splice(j--, 1)
              : ((fulfilled = !1), priority < notFulfilled && (notFulfilled = priority));
          if (fulfilled) {
            deferred.splice(i--, 1);
            var r = fn();
            void 0 !== r && (result = r);
          }
        }
        return result;
      }
      priority = priority || 0;
      for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
        deferred[i] = deferred[i - 1];
      deferred[i] = [chunkIds, fn, priority];
    }),
    (__webpack_require__.n = (module) => {
      var getter = module && module.__esModule ? () => module.default : () => module;
      return __webpack_require__.d(getter, { a: getter }), getter;
    }),
    (getProto = Object.getPrototypeOf
      ? (obj) => Object.getPrototypeOf(obj)
      : (obj) => obj.__proto__),
    (__webpack_require__.t = function (value, mode) {
      if ((1 & mode && (value = this(value)), 8 & mode)) return value;
      if ('object' == typeof value && value) {
        if (4 & mode && value.__esModule) return value;
        if (16 & mode && 'function' == typeof value.then) return value;
      }
      var ns = Object.create(null);
      __webpack_require__.r(ns);
      var def = {};
      leafPrototypes = leafPrototypes || [
        null,
        getProto({}),
        getProto([]),
        getProto(getProto),
      ];
      for (
        var current = 2 & mode && value;
        'object' == typeof current && !~leafPrototypes.indexOf(current);
        current = getProto(current)
      )
        Object.getOwnPropertyNames(current).forEach(
          (key) => (def[key] = () => value[key]),
        );
      return (def.default = () => value), __webpack_require__.d(ns, def), ns;
    }),
    (__webpack_require__.d = (exports, definition) => {
      for (var key in definition)
        __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key) &&
          Object.defineProperty(exports, key, { enumerable: !0, get: definition[key] });
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = (chunkId) =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (promises, key) => (__webpack_require__.f[key](chunkId, promises), promises),
          [],
        ),
      )),
    (__webpack_require__.u = (chunkId) =>
      (({
        14: 'command-__dev__-command-block-stories',
        164: 'icon-button-__dev__-icon-button-stories',
        353: 'table-list-__dev__-table-list-stories',
        451: 'button-__dev__-button-stories',
        456: 'component-preview-__dev__-component-preview-stories',
        1168: 'aside-navigation-__dev__-aside-navigation-stories',
        1176: 'action-tile-__dev__-action-tile-stories',
        1427: 'code-snippet-__dev__-code-snippet-stories',
        1433: 'image-tile-__dev__-image-tile-stories',
        1752: 'footer-__dev__-footer-stories',
        1965: 'header-__dev__-header-stories',
        2198: 'tile-__dev__-tile-stories',
        2916: 'logo-__dev__-logo-stories',
        3287: 'embed-__dev__-embed-stories',
        3362: 'theme-switch-__dev__-theme-switch-stories',
        3550: 'ordered-list-__dev__-ordered-list-stories',
        3779: 'tag-__dev__-tag-stories',
        3787: 'prop-docs-cli-__dev__-prop-docs-cli-stories',
        3798: 'shell-__dev__-crown-stories',
        3920: 'main-navigation-__dev__-main-navigation-stories',
        4429: 'badge-__dev__-badge-stories',
        4648: 'callout-__dev__-callout-stories',
        4669: 'person-tile-__dev__-person-tile-stories',
        4881: 'recommendation-tile-__dev__-recommendation-tile-stories',
        5063: 'prop-table-__dev__-prop-table-stories',
        5130: 'use-copy-to-clipboard-__dev__-use-copy-to-clipboard-stories',
        5150: 'accordion-__dev__-accordion-list-stories',
        5259: 'illustration-tile-__dev__-illustration-tile-stories',
        5289: 'shell-__dev__-shell-stories',
        5365: 'mark-list-__dev__-mark-list-stories',
        5789: 'action-list-tile-__dev__-action-list-tile-stories',
        5839: 'text-__dev__-text-stories',
        5926: 'theming-__dev__-theming-stories',
        6219: 'use-prefers-color-scheme-__dev__-use-prefers-color-scheme-stories',
        6349: 'icon-__dev__-icon-stories',
        6353: 'divider-__dev__-divider-stories',
        7719: 'link-__dev__-link-stories',
        8026: 'sandbox-__dev__-sandbox-stories',
        8316: 'file-to-string-__dev__-file-to-string-stories',
        8515: 'tray-__dev__-tray-stories',
        9311: 'bookmark-tile-__dev__-bookmark-tile-stories',
        9465: 'guidance-__dev__-guidance-stories',
        9600: 'heading-__dev__-heading-stories',
        9605: 'data-table-__dev__-data-table-stories',
        9777: 'tabs-__dev__-tabs-stories',
      }[chunkId] || chunkId) +
      '.' +
      {
        14: '05c27332',
        161: '5d14b176',
        164: 'ce093d17',
        353: '758f9298',
        451: '62f5d3f7',
        456: '54861a2e',
        532: '9e0e578f',
        1168: 'df225f4a',
        1176: '130c8ae1',
        1427: 'b39e6b0a',
        1433: '530e89cb',
        1752: 'fd43979c',
        1965: '917d190c',
        2198: 'fc1dd662',
        2726: '2561875e',
        2916: '70ba388b',
        3287: '483dafa6',
        3362: 'a8b94a51',
        3446: 'a02a107c',
        3550: '4d78eb1c',
        3779: 'c9f7605e',
        3787: '96227bc5',
        3798: 'fd022751',
        3920: '51e07d36',
        4429: 'a84b95ef',
        4648: 'b8017871',
        4669: '7068546b',
        4881: '4addb608',
        5063: '4b24dd5c',
        5130: '30506738',
        5150: '1e99fe3c',
        5259: 'dfe0aa13',
        5289: '67a8c935',
        5365: 'd27ec69f',
        5708: 'b0aeed31',
        5789: '71d0a62f',
        5839: 'e64b12f6',
        5926: '15f98458',
        6219: 'a0eb8497',
        6349: 'ee795331',
        6353: 'cbc37eb3',
        6562: '0f1882f3',
        7377: 'd26ad1ea',
        7719: 'b729ccb5',
        7863: '65aea40c',
        7992: '96daf9e5',
        8026: '7b2871e2',
        8316: 'a23dc8da',
        8515: '7bcc81d7',
        8715: '62f365e2',
        9102: '2a9e26a8',
        9311: 'c10a30df',
        9381: 'dfc6c13e',
        9465: 'd53ea233',
        9526: 'ee448458',
        9600: '2002a6a0',
        9605: '5a7679dc',
        9777: '5593350e',
      }[chunkId] +
      '.iframe.bundle.js')),
    (__webpack_require__.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop)),
    (inProgress = {}),
    (__webpack_require__.l = (url, done, key, chunkId) => {
      if (inProgress[url]) inProgress[url].push(done);
      else {
        var script, needAttach;
        if (void 0 !== key)
          for (
            var scripts = document.getElementsByTagName('script'), i = 0;
            i < scripts.length;
            i++
          ) {
            var s = scripts[i];
            if (
              s.getAttribute('src') == url ||
              s.getAttribute('data-webpack') == 'arbutus:' + key
            ) {
              script = s;
              break;
            }
          }
        script ||
          ((needAttach = !0),
          ((script = document.createElement('script')).charset = 'utf-8'),
          (script.timeout = 120),
          __webpack_require__.nc && script.setAttribute('nonce', __webpack_require__.nc),
          script.setAttribute('data-webpack', 'arbutus:' + key),
          (script.src = url)),
          (inProgress[url] = [done]);
        var onScriptComplete = (prev, event) => {
            (script.onerror = script.onload = null), clearTimeout(timeout);
            var doneFns = inProgress[url];
            if (
              (delete inProgress[url],
              script.parentNode && script.parentNode.removeChild(script),
              doneFns && doneFns.forEach((fn) => fn(event)),
              prev)
            )
              return prev(event);
          },
          timeout = setTimeout(
            onScriptComplete.bind(null, void 0, { type: 'timeout', target: script }),
            12e4,
          );
        (script.onerror = onScriptComplete.bind(null, script.onerror)),
          (script.onload = onScriptComplete.bind(null, script.onload)),
          needAttach && document.head.appendChild(script);
      }
    }),
    (__webpack_require__.r = (exports) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(exports, '__esModule', { value: !0 });
    }),
    (__webpack_require__.nmd = (module) => (
      (module.paths = []), module.children || (module.children = []), module
    )),
    (__webpack_require__.p = ''),
    (() => {
      var installedChunks = { 1303: 0 };
      (__webpack_require__.f.j = (chunkId, promises) => {
        var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
          ? installedChunks[chunkId]
          : void 0;
        if (0 !== installedChunkData)
          if (installedChunkData) promises.push(installedChunkData[2]);
          else if (1303 != chunkId) {
            var promise = new Promise(
              (resolve, reject) =>
                (installedChunkData = installedChunks[chunkId] = [resolve, reject]),
            );
            promises.push((installedChunkData[2] = promise));
            var url = __webpack_require__.p + __webpack_require__.u(chunkId),
              error = new Error();
            __webpack_require__.l(
              url,
              (event) => {
                if (
                  __webpack_require__.o(installedChunks, chunkId) &&
                  (0 !== (installedChunkData = installedChunks[chunkId]) &&
                    (installedChunks[chunkId] = void 0),
                  installedChunkData)
                ) {
                  var errorType =
                      event && ('load' === event.type ? 'missing' : event.type),
                    realSrc = event && event.target && event.target.src;
                  (error.message =
                    'Loading chunk ' +
                    chunkId +
                    ' failed.\n(' +
                    errorType +
                    ': ' +
                    realSrc +
                    ')'),
                    (error.name = 'ChunkLoadError'),
                    (error.type = errorType),
                    (error.request = realSrc),
                    installedChunkData[1](error);
                }
              },
              'chunk-' + chunkId,
              chunkId,
            );
          } else installedChunks[chunkId] = 0;
      }),
        (__webpack_require__.O.j = (chunkId) => 0 === installedChunks[chunkId]);
      var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
          var moduleId,
            chunkId,
            [chunkIds, moreModules, runtime] = data,
            i = 0;
          if (chunkIds.some((id) => 0 !== installedChunks[id])) {
            for (moduleId in moreModules)
              __webpack_require__.o(moreModules, moduleId) &&
                (__webpack_require__.m[moduleId] = moreModules[moduleId]);
            if (runtime) var result = runtime(__webpack_require__);
          }
          for (
            parentChunkLoadingFunction && parentChunkLoadingFunction(data);
            i < chunkIds.length;
            i++
          )
            (chunkId = chunkIds[i]),
              __webpack_require__.o(installedChunks, chunkId) &&
                installedChunks[chunkId] &&
                installedChunks[chunkId][0](),
              (installedChunks[chunkId] = 0);
          return __webpack_require__.O(result);
        },
        chunkLoadingGlobal = (self.webpackChunkarbutus = self.webpackChunkarbutus || []);
      chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0)),
        (chunkLoadingGlobal.push = webpackJsonpCallback.bind(
          null,
          chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
        ));
    })();
})();
>>>>>>> 0a42c43 (Runs lint):docs/runtime~main.9ba56974.iframe.bundle.js
