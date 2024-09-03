(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BifrostChatWidget"] = factory();
	else
		root["BifrostChatWidget"] = factory();
})(self, function() {
return (self["webpackChunkBifrostChatWidget"] = self["webpackChunkBifrostChatWidget"] || []).push([[744],{

/***/ 6876:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5751, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6513, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6130, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9275, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5324, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1343, 23));


/***/ }),

/***/ 9492:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDeploymentIdQueryOrEmptyString", ({
    enumerable: true,
    get: function() {
        return getDeploymentIdQueryOrEmptyString;
    }
}));
function getDeploymentIdQueryOrEmptyString() {
    if (false) {}
    return "";
}

//# sourceMappingURL=deployment-id.js.map

/***/ }),

/***/ 7108:
/***/ (function() {

"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var t=/\((.*)\)/.exec(this.toString());return t?t[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(t,r){return r=this.concat.apply([],this),t>1&&r.some(Array.isArray)?r.flat(t-1):r},Array.prototype.flatMap=function(t,r){return this.map(t,r).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(t){if("function"!=typeof t)return this.then(t,t);var r=this.constructor||Promise;return this.then(function(n){return r.resolve(t()).then(function(){return n})},function(n){return r.resolve(t()).then(function(){throw n})})}),Object.fromEntries||(Object.fromEntries=function(t){return Array.from(t).reduce(function(t,r){return t[r[0]]=r[1],t},{})}),Array.prototype.at||(Array.prototype.at=function(t){var r=Math.trunc(t)||0;if(r<0&&(r+=this.length),!(r<0||r>=this.length))return this[r]}),Object.hasOwn||(Object.hasOwn=function(t,r){if(null==t)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(t),r)});


/***/ }),

/***/ 4897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(2707);
const _normalizetrailingslash = __webpack_require__(8157);
const basePath =  false || "";
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)( false ? 0 : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 5684:
/***/ (function(module, exports) {

"use strict";
/**
 * Before starting the Next.js runtime and requiring any module, we need to make
 * sure the following scripts are executed in the correct order:
 * - Polyfills
 * - next/script with `beforeInteractive` strategy
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "appBootstrap", ({
    enumerable: true,
    get: function() {
        return appBootstrap;
    }
}));
const version = "14.2.7";
window.next = {
    version,
    appDir: true
};
function loadScriptsInSequence(scripts, hydrate) {
    if (!scripts || !scripts.length) {
        return hydrate();
    }
    return scripts.reduce((promise, param)=>{
        let [src, props] = param;
        return promise.then(()=>{
            return new Promise((resolve, reject)=>{
                const el = document.createElement("script");
                if (props) {
                    for(const key in props){
                        if (key !== "children") {
                            el.setAttribute(key, props[key]);
                        }
                    }
                }
                if (src) {
                    el.src = src;
                    el.onload = ()=>resolve();
                    el.onerror = reject;
                } else if (props) {
                    el.innerHTML = props.children;
                    setTimeout(resolve);
                }
                document.head.appendChild(el);
            });
        });
    }, Promise.resolve()).catch((err)=>{
        console.error(err);
    // Still try to hydrate even if there's an error.
    }).then(()=>{
        hydrate();
    });
}
function appBootstrap(callback) {
    loadScriptsInSequence(self.__next_s, ()=>{
        callback();
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-bootstrap.js.map


/***/ }),

/***/ 4590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "callServer", ({
    enumerable: true,
    get: function() {
        return callServer;
    }
}));
const _approuter = __webpack_require__(5751);
async function callServer(actionId, actionArgs) {
    const actionDispatcher = (0, _approuter.getServerActionDispatcher)();
    if (!actionDispatcher) {
        throw new Error("Invariant: missing action dispatcher.");
    }
    return new Promise((resolve, reject)=>{
        actionDispatcher({
            actionId,
            actionArgs,
            resolve,
            reject
        });
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hydrate", ({
    enumerable: true,
    get: function() {
        return hydrate;
    }
}));
const _interop_require_default = __webpack_require__(9920);
const _interop_require_wildcard = __webpack_require__(1452);
const _jsxruntime = __webpack_require__(7437);
__webpack_require__(7108);
const _client = /*#__PURE__*/ _interop_require_default._(__webpack_require__(4040));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _client1 = __webpack_require__(6671);
const _headmanagercontextsharedruntime = __webpack_require__(6590);
const _onrecoverableerror = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6124));
const _appcallserver = __webpack_require__(4590);
const _isnextroutererror = __webpack_require__(2128);
const _actionqueue = __webpack_require__(1427);
const _hotreloadertypes = __webpack_require__(3243);
// Since React doesn't call onerror for errors caught in error boundaries.
const origConsoleError = window.console.error;
window.console.error = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    if ((0, _isnextroutererror.isNextRouterError)(args[0])) {
        return;
    }
    origConsoleError.apply(window.console, args);
};
window.addEventListener("error", (ev)=>{
    if ((0, _isnextroutererror.isNextRouterError)(ev.error)) {
        ev.preventDefault();
        return;
    }
});
/// <reference types="react-dom/experimental" />
const appElement = document;
const encoder = new TextEncoder();
let initialServerDataBuffer = undefined;
let initialServerDataWriter = undefined;
let initialServerDataLoaded = false;
let initialServerDataFlushed = false;
let initialFormStateData = null;
function nextServerDataCallback(seg) {
    if (seg[0] === 0) {
        initialServerDataBuffer = [];
    } else if (seg[0] === 1) {
        if (!initialServerDataBuffer) throw new Error("Unexpected server data: missing bootstrap script.");
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(encoder.encode(seg[1]));
        } else {
            initialServerDataBuffer.push(seg[1]);
        }
    } else if (seg[0] === 2) {
        initialFormStateData = seg[1];
    }
}
// There might be race conditions between `nextServerDataRegisterWriter` and
// `DOMContentLoaded`. The former will be called when React starts to hydrate
// the root, the latter will be called when the DOM is fully loaded.
// For streaming, the former is called first due to partial hydration.
// For non-streaming, the latter can be called first.
// Hence, we use two variables `initialServerDataLoaded` and
// `initialServerDataFlushed` to make sure the writer will be closed and
// `initialServerDataBuffer` will be cleared in the right time.
function nextServerDataRegisterWriter(ctr) {
    if (initialServerDataBuffer) {
        initialServerDataBuffer.forEach((val)=>{
            ctr.enqueue(encoder.encode(val));
        });
        if (initialServerDataLoaded && !initialServerDataFlushed) {
            ctr.close();
            initialServerDataFlushed = true;
            initialServerDataBuffer = undefined;
        }
    }
    initialServerDataWriter = ctr;
}
// When `DOMContentLoaded`, we can close all pending writers to finish hydration.
const DOMContentLoaded = function() {
    if (initialServerDataWriter && !initialServerDataFlushed) {
        initialServerDataWriter.close();
        initialServerDataFlushed = true;
        initialServerDataBuffer = undefined;
    }
    initialServerDataLoaded = true;
};
// It's possible that the DOM is already loaded.
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
} else {
    DOMContentLoaded();
}
const nextServerDataLoadingGlobal = self.__next_f = self.__next_f || [];
nextServerDataLoadingGlobal.forEach(nextServerDataCallback);
nextServerDataLoadingGlobal.push = nextServerDataCallback;
const readable = new ReadableStream({
    start (controller) {
        nextServerDataRegisterWriter(controller);
    }
});
const initialServerResponse = (0, _client1.createFromReadableStream)(readable, {
    callServer: _appcallserver.callServer
});
function ServerRoot() {
    return (0, _react.use)(initialServerResponse);
}
const StrictModeIfEnabled =  true ? _react.default.StrictMode : 0;
function Root(param) {
    let { children } = param;
    // TODO: remove in the next major version
    if (false) {}
    if (false) {}
    return children;
}
function hydrate() {
    const actionQueue = (0, _actionqueue.createMutableActionQueue)();
    const reactEl = /*#__PURE__*/ (0, _jsxruntime.jsx)(StrictModeIfEnabled, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_headmanagercontextsharedruntime.HeadManagerContext.Provider, {
            value: {
                appDir: true
            },
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_actionqueue.ActionQueueContext.Provider, {
                value: actionQueue,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Root, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ServerRoot, {})
                })
            })
        })
    });
    const rootLayoutMissingTags = window.__next_root_layout_missing_tags;
    const hasMissingTags = !!(rootLayoutMissingTags == null ? void 0 : rootLayoutMissingTags.length);
    const options = {
        onRecoverableError: _onrecoverableerror.default
    };
    const isError = document.documentElement.id === "__next_error__" || hasMissingTags;
    if (false) {}
    if (isError) {
        if (false) {} else {
            _client.default.createRoot(appElement, options).render(reactEl);
        }
    } else {
        _react.default.startTransition(()=>_client.default.hydrateRoot(appElement, reactEl, {
                ...options,
                formState: initialFormStateData
            }));
    }
    // TODO-APP: Remove this logic when Float has GC built-in in development.
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-index.js.map


/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This import must go first because it needs to patch webpack chunk loading
// before React patches chunk loading.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
__webpack_require__(5820);
const _appbootstrap = __webpack_require__(5684);
(0, _appbootstrap.appBootstrap)(()=>{
    const { hydrate } = __webpack_require__(353);
    // Include app-router and layout-router in the main chunk
    __webpack_require__(5751);
    __webpack_require__(9275);
    hydrate();
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-next.js.map


/***/ }),

/***/ 5820:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Override chunk URL mapping in the webpack runtime
// https://github.com/webpack/webpack/blob/2738eebc7880835d88c727d364ad37f3ec557593/lib/RuntimeGlobals.js#L204

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _deploymentid = __webpack_require__(9492);
// If we have a deployment ID, we need to append it to the webpack chunk names
// I am keeping the process check explicit so this can be statically optimized
if (false) {} else {
    // eslint-disable-next-line no-undef
    const getChunkScriptFilename = __webpack_require__.u;
    // eslint-disable-next-line no-undef
    __webpack_require__.u = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return(// filename path.
        encodeURI(getChunkScriptFilename(...args)));
    };
// We don't need to override __webpack_require__.k because we don't modify
// the css chunk name when not using deployment id suffixes
// WE don't need to override __webpack_require__.miniCssF because we don't modify
// the mini css chunk name when not using deployment id suffixes
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-webpack.js.map


/***/ }),

/***/ 9440:
/***/ (function(module, exports, __webpack_require__) {

"TURBOPACK { transition: next-shared }";
"use strict";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "actionAsyncStorage", ({
    enumerable: true,
    get: function() {
        return _actionasyncstorageinstance.actionAsyncStorage;
    }
}));
const _actionasyncstorageinstance = __webpack_require__(8293);
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=action-async-storage.external.js.map


/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AppRouterAnnouncer", ({
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
}));
const _react = __webpack_require__(2265);
const _reactdom = __webpack_require__(4887);
const ANNOUNCER_TYPE = "next-route-announcer";
const ANNOUNCER_ID = "__next-route-announcer__";
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = "position:absolute";
        const announcer = document.createElement("div");
        announcer.ariaLive = "assertive";
        announcer.id = ANNOUNCER_ID;
        announcer.role = "alert";
        announcer.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: "open"
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)("");
    const previousTitle = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        let currentTitle = "";
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector("h1");
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || "";
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined && previousTitle.current !== currentTitle) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map


/***/ }),

/***/ 7325:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION: function() {
        return ACTION;
    },
    FLIGHT_PARAMETERS: function() {
        return FLIGHT_PARAMETERS;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STATE_TREE: function() {
        return NEXT_ROUTER_STATE_TREE;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const FLIGHT_PARAMETERS = [
    [
        RSC_HEADER
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH_HEADER
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
const NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 5751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createEmptyCacheNode: function() {
        return createEmptyCacheNode;
    },
    default: function() {
        return AppRouter;
    },
    getServerActionDispatcher: function() {
        return getServerActionDispatcher;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    }
});
const _interop_require_wildcard = __webpack_require__(1452);
const _jsxruntime = __webpack_require__(7437);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _approutercontextsharedruntime = __webpack_require__(4467);
const _routerreducertypes = __webpack_require__(1507);
const _createhreffromurl = __webpack_require__(3174);
const _hooksclientcontextsharedruntime = __webpack_require__(8056);
const _usereducerwithdevtools = __webpack_require__(2114);
const _errorboundary = __webpack_require__(6130);
const _createinitialrouterstate = __webpack_require__(322);
const _isbot = __webpack_require__(4092);
const _addbasepath = __webpack_require__(4897);
const _approuterannouncer = __webpack_require__(1012);
const _redirectboundary = __webpack_require__(6585);
const _findheadincache = __webpack_require__(315);
const _unresolvedthenable = __webpack_require__(1108);
const _approuterheaders = __webpack_require__(7325);
const _removebasepath = __webpack_require__(7599);
const _hasbasepath = __webpack_require__(9404);
const _segment = __webpack_require__(0);
const isServer = typeof window === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
let globalServerActionDispatcher = null;
function getServerActionDispatcher() {
    return globalServerActionDispatcher;
}
const globalMutable = {};
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if (true) {
        if (false) {}
    }
    return urlWithoutFlightParameters;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(currentTree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = currentTree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function HistoryUpdater(param) {
    let { appRouterState, sync } = param;
    (0, _react.useInsertionEffect)(()=>{
        const { tree, pushRef, canonicalUrl } = appRouterState;
        const historyState = {
            ...pushRef.preserveCustomHistoryState ? window.history.state : {},
            // Identifier is shortened intentionally.
            // __NA is used to identify if the history entry can be handled by the app-router.
            // __N is used to identify if the history entry can be handled by the old router.
            __NA: true,
            __PRIVATE_NEXTJS_INTERNALS_TREE: tree
        };
        if (pushRef.pendingPush && // Skip pushing an additional history entry if the canonicalUrl is the same as the current url.
        // This mirrors the browser behavior for normal navigation.
        (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync(appRouterState);
    }, [
        appRouterState,
        sync
    ]);
    return null;
}
function createEmptyCacheNode() {
    return {
        lazyData: null,
        rsc: null,
        prefetchRsc: null,
        head: null,
        prefetchHead: null,
        parallelRoutes: new Map(),
        lazyDataResolved: false,
        loading: null
    };
}
function useServerActionDispatcher(dispatch) {
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION
            });
        });
    }, [
        dispatch
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
}
/**
 * Server response that only patches the cache and tree.
 */ function useChangeByServerResponse(dispatch) {
    return (0, _react.useCallback)((param)=>{
        let { previousTree, serverResponse } = param;
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_SERVER_PATCH,
                previousTree,
                serverResponse
            });
        });
    }, [
        dispatch
    ]);
}
function useNavigate(dispatch) {
    return (0, _react.useCallback)((href, navigateType, shouldScroll)=>{
        const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
        return dispatch({
            type: _routerreducertypes.ACTION_NAVIGATE,
            url,
            isExternalUrl: isExternalURL(url),
            locationSearch: location.search,
            shouldScroll: shouldScroll != null ? shouldScroll : true,
            navigateType
        });
    }, [
        dispatch
    ]);
}
function copyNextJsInternalHistoryState(data) {
    if (data == null) data = {};
    const currentState = window.history.state;
    const __NA = currentState == null ? void 0 : currentState.__NA;
    if (__NA) {
        data.__NA = __NA;
    }
    const __PRIVATE_NEXTJS_INTERNALS_TREE = currentState == null ? void 0 : currentState.__PRIVATE_NEXTJS_INTERNALS_TREE;
    if (__PRIVATE_NEXTJS_INTERNALS_TREE) {
        data.__PRIVATE_NEXTJS_INTERNALS_TREE = __PRIVATE_NEXTJS_INTERNALS_TREE;
    }
    return data;
}
function Head(param) {
    let { headCacheNode } = param;
    // If this segment has a `prefetchHead`, it's the statically prefetched data.
    // We should use that on initial render instead of `head`. Then we'll switch
    // to `head` when the dynamic response streams in.
    const head = headCacheNode !== null ? headCacheNode.head : null;
    const prefetchHead = headCacheNode !== null ? headCacheNode.prefetchHead : null;
    // If no prefetch data is available, then we go straight to rendering `head`.
    const resolvedPrefetchRsc = prefetchHead !== null ? prefetchHead : head;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    //
    // @ts-expect-error The second argument to `useDeferredValue` is only
    // available in the experimental builds. When its disabled, it will always
    // return `head`.
    return (0, _react.useDeferredValue)(head, resolvedPrefetchRsc);
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { buildId, initialHead, initialTree, initialCanonicalUrl, initialSeedData, couldBeIntercepted, assetPrefix, missingSlots } = param;
    const initialState = (0, _react.useMemo)(()=>(0, _createinitialrouterstate.createInitialRouterState)({
            buildId,
            initialSeedData,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            location: !isServer ? window.location : null,
            initialHead,
            couldBeIntercepted
        }), [
        buildId,
        initialSeedData,
        initialCanonicalUrl,
        initialTree,
        initialHead,
        couldBeIntercepted
    ]);
    const [reducerState, dispatch, sync] = (0, _usereducerwithdevtools.useReducerWithReduxDevtools)(initialState);
    (0, _react.useEffect)(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    const { canonicalUrl } = (0, _usereducerwithdevtools.useUnwrapState)(reducerState);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl, typeof window === "undefined" ? "http://n" : window.location.href);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]);
    const changeByServerResponse = useChangeByServerResponse(dispatch);
    const navigate = useNavigate(dispatch);
    useServerActionDispatcher(dispatch);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react.useMemo)(()=>{
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: (href, options)=>{
                // Don't prefetch for bots as they don't navigate.
                if ((0, _isbot.isBot)(window.navigator.userAgent)) {
                    return;
                }
                let url;
                try {
                    url = new URL((0, _addbasepath.addBasePath)(href), window.location.href);
                } catch (_) {
                    throw new Error("Cannot prefetch '" + href + "' because it cannot be converted to a URL.");
                }
                // Don't prefetch during development (improves compilation performance)
                if (false) {}
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                (0, _react.startTransition)(()=>{
                    var _options_kind;
                    dispatch({
                        type: _routerreducertypes.ACTION_PREFETCH,
                        url,
                        kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
                    });
                });
            },
            replace: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "replace", (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            push: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "push", (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            refresh: ()=>{
                (0, _react.startTransition)(()=>{
                    dispatch({
                        type: _routerreducertypes.ACTION_REFRESH,
                        origin: window.location.origin
                    });
                });
            },
            fastRefresh: ()=>{
                if (true) {
                    throw new Error("fastRefresh can only be used in development mode. Please use refresh instead.");
                } else {}
            }
        };
        return routerInstance;
    }, [
        dispatch,
        navigate
    ]);
    (0, _react.useEffect)(()=>{
        // Exists for debugging purposes. Don't use in application code.
        if (window.next) {
            window.next.router = appRouter;
        }
    }, [
        appRouter
    ]);
    if (false) {}
    (0, _react.useEffect)(()=>{
        // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            var _window_history_state;
            if (!event.persisted || !((_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE)) {
                return;
            }
            // Clear the pendingMpaPath value so that a subsequent MPA navigation to the same URL can be triggered.
            // This is necessary because if the browser restored from bfcache, the pendingMpaPath would still be set to the value
            // of the last MPA navigation.
            globalMutable.pendingMpaPath = undefined;
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
            });
        }
        window.addEventListener("pageshow", handlePageShow);
        return ()=>{
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, [
        dispatch
    ]);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    const { pushRef } = (0, _usereducerwithdevtools.useUnwrapState)(reducerState);
    if (pushRef.mpaNavigation) {
        // if there's a re-render, we don't want to trigger another redirect if one is already in flight to the same URL
        if (globalMutable.pendingMpaPath !== canonicalUrl) {
            const location1 = window.location;
            if (pushRef.pendingPush) {
                location1.assign(canonicalUrl);
            } else {
                location1.replace(canonicalUrl);
            }
            globalMutable.pendingMpaPath = canonicalUrl;
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    (0, _react.useEffect)(()=>{
        const originalPushState = window.history.pushState.bind(window.history);
        const originalReplaceState = window.history.replaceState.bind(window.history);
        // Ensure the canonical URL in the Next.js Router is updated when the URL is changed so that `usePathname` and `useSearchParams` hold the pushed values.
        const applyUrlFromHistoryPushReplace = (url)=>{
            var _window_history_state;
            const href = window.location.href;
            const tree = (_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE;
            (0, _react.startTransition)(()=>{
                dispatch({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(url != null ? url : href, href),
                    tree
                });
            });
        };
        /**
     * Patch pushState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.pushState = function pushState(data, _unused, url) {
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data == null ? void 0 : data.__NA) || (data == null ? void 0 : data._N)) {
                return originalPushState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalPushState(data, _unused, url);
        };
        /**
     * Patch replaceState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.replaceState = function replaceState(data, _unused, url) {
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data == null ? void 0 : data.__NA) || (data == null ? void 0 : data._N)) {
                return originalReplaceState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalReplaceState(data, _unused, url);
        };
        /**
     * Handle popstate event, this is used to handle back/forward in the browser.
     * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
     * That case can happen when the old router injected the history entry.
     */ const onPopState = (param)=>{
            let { state } = param;
            if (!state) {
                // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
                return;
            }
            // This case happens when the history entry was pushed by the `pages` router.
            if (!state.__NA) {
                window.location.reload();
                return;
            }
            // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
            // Without startTransition works if the cache is there for this path
            (0, _react.startTransition)(()=>{
                dispatch({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(window.location.href),
                    tree: state.__PRIVATE_NEXTJS_INTERNALS_TREE
                });
            });
        };
        // Register popstate event to call onPopstate.
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        dispatch
    ]);
    const { cache, tree, nextUrl, focusAndScrollRef } = (0, _usereducerwithdevtools.useUnwrapState)(reducerState);
    const matchingHead = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    // Add memoized pathParams for useParams.
    const pathParams = (0, _react.useMemo)(()=>{
        return getSelectedParams(tree);
    }, [
        tree
    ]);
    let head;
    if (matchingHead !== null) {
        // The head is wrapped in an extra component so we can use
        // `useDeferredValue` to swap between the prefetched and final versions of
        // the head. (This is what LayoutRouter does for segment data, too.)
        //
        // The `key` is used to remount the component whenever the head moves to
        // a different segment.
        const [headCacheNode, headKey] = matchingHead;
        head = /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
            headCacheNode: headCacheNode
        }, headKey);
    } else {
        head = null;
    }
    let content = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
        children: [
            head,
            cache.rsc,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuterannouncer.AppRouterAnnouncer, {
                tree: tree
            })
        ]
    });
    if (false) {}
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(HistoryUpdater, {
                appRouterState: (0, _usereducerwithdevtools.useUnwrapState)(reducerState),
                sync: sync
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathParamsContext.Provider, {
                value: pathParams,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathnameContext.Provider, {
                    value: pathname,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
                        value: searchParams,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.GlobalLayoutRouterContext.Provider, {
                            value: {
                                buildId,
                                changeByServerResponse,
                                tree,
                                focusAndScrollRef,
                                nextUrl
                            },
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.AppRouterContext.Provider, {
                                value: appRouter,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
                                    value: {
                                        childNodes: cache.parallelRoutes,
                                        tree,
                                        // Root node always has `url`
                                        // Provided in AppTreeContext to ensure it can be overwritten in layout-router
                                        url: canonicalUrl,
                                        loading: cache.loading
                                    },
                                    children: content
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
function AppRouter(props) {
    const { globalErrorComponent, ...rest } = props;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
        errorComponent: globalErrorComponent,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Router, {
            ...rest
        })
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 4804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _bailouttocsr = __webpack_require__(5592);
const _staticgenerationasyncstorageexternal = __webpack_require__(4936);
function bailoutToClientRendering(reason) {
    const staticGenerationStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) return;
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) throw new _bailouttocsr.BailoutToCSRError(reason);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 6513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ClientPageRoot", ({
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
}));
const _jsxruntime = __webpack_require__(7437);
const _searchparams = __webpack_require__(8897);
function ClientPageRoot(param) {
    let { Component, props } = param;
    // We expect to be passed searchParams but even if we aren't we can construct one from
    // an empty object. We only do this if we are in a static generation as a performance
    // optimization. Ideally we'd unconditionally construct the tracked params but since
    // this creates a proxy which is slow and this would happen even for client navigations
    // that are done entirely dynamically and we know there the dynamic tracking is a noop
    // in this dynamic case we can safely elide it.
    props.searchParams = (0, _searchparams.createDynamicallyTrackedSearchParams)(props.searchParams || {});
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        ...props
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-page.js.map


/***/ }),

/***/ 6130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundary: function() {
        return ErrorBoundary;
    },
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    GlobalError: function() {
        return GlobalError;
    },
    // Exported so that the import signature in the loaders can be identical to user
    // supplied custom global error signatures.
    default: function() {
        return _default;
    }
});
const _interop_require_default = __webpack_require__(9920);
const _jsxruntime = __webpack_require__(7437);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _navigation = __webpack_require__(1169);
const _isnextroutererror = __webpack_require__(2128);
const _staticgenerationasyncstorageexternal = __webpack_require__(4936);
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 8px"
    }
};
// if we are revalidating we want to re-throw the error so the
// function crashes so we can maintain our previous cache
// instead of caching the error page
function HandleISRError(param) {
    let { error } = param;
    const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if ((store == null ? void 0 : store.isRevalidate) || (store == null ? void 0 : store.isStaticGeneration)) {
        console.error(error);
        throw error;
    }
    return null;
}
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _isnextroutererror.isNextRouterError)(error)) {
            // Re-throw if an expected internal Next.js router error occurs
            // this means it should be handled by a different boundary (such as a NotFound boundary in a parent segment)
            throw error;
        }
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific the the `@types/react` version.
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleISRError, {
                        error: this.state.error
                    }),
                    this.props.errorStyles,
                    this.props.errorScripts,
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(this.props.errorComponent, {
                        error: this.state.error,
                        reset: this.reset
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
        id: "__next_error__",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleISRError, {
                        error: error
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        style: styles.error,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("h2", {
                                    style: styles.text,
                                    children: "Application error: a " + (digest ? "server" : "client") + "-side exception has occurred (see the " + (digest ? "server logs" : "browser console") + " for more information)."
                                }),
                                digest ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    style: styles.text,
                                    children: "Digest: " + digest
                                }) : null
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
const _default = GlobalError;
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, errorScripts, children } = param;
    const pathname = (0, _navigation.usePathname)();
    if (errorComponent) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles,
            errorScripts: errorScripts,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 7910:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description);
        this.description = description;
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 2128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNextRouterError", ({
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
}));
const _notfound = __webpack_require__(2496);
const _redirect = __webpack_require__(7909);
function isNextRouterError(error) {
    return error && error.digest && ((0, _redirect.isRedirectError)(error) || (0, _notfound.isNotFoundError)(error));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map


/***/ }),

/***/ 9275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
}));
const _interop_require_default = __webpack_require__(9920);
const _interop_require_wildcard = __webpack_require__(1452);
const _jsxruntime = __webpack_require__(7437);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(4887));
const _approutercontextsharedruntime = __webpack_require__(4467);
const _fetchserverresponse = __webpack_require__(1283);
const _unresolvedthenable = __webpack_require__(1108);
const _errorboundary = __webpack_require__(6130);
const _matchsegments = __webpack_require__(6237);
const _handlesmoothscroll = __webpack_require__(6180);
const _redirectboundary = __webpack_require__(6585);
const _notfoundboundary = __webpack_require__(5324);
const _getsegmentvalue = __webpack_require__(4640);
const _createroutercachekey = __webpack_require__(1784);
const _hasinterceptionrouteincurrenttree = __webpack_require__(5914);
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === "undefined") return null;
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactdom.default.findDOMNode(instance);
}
const rectProperties = [
    "bottom",
    "height",
    "left",
    "right",
    "top",
    "width",
    "x",
    "y"
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        "sticky",
        "fixed"
    ].includes(getComputedStyle(element).position)) {
        if (false) {}
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === "top") {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `handleSmoothScroll`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { parallelRouterKey, url, childNodes, segmentPath, tree, // isActive,
    cacheKey } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { buildId, changeByServerResponse, tree: fullTree } = context;
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(cacheKey);
    // When data is not available during rendering client-side we need to fetch
    // it from the server.
    if (childNode === undefined) {
        const newLazyCacheNode = {
            lazyData: null,
            rsc: null,
            prefetchRsc: null,
            head: null,
            prefetchHead: null,
            parallelRoutes: new Map(),
            lazyDataResolved: false,
            loading: null
        };
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNode = newLazyCacheNode;
        childNodes.set(cacheKey, newLazyCacheNode);
    }
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = childNode.prefetchRsc !== null ? childNode.prefetchRsc : childNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    //
    // @ts-expect-error The second argument to `useDeferredValue` is only
    // available in the experimental builds. When its disabled, it will always
    // return `rsc`.
    const rsc = (0, _react.useDeferredValue)(childNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    const resolvedRsc = typeof rsc === "object" && rsc !== null && typeof rsc.then === "function" ? (0, _react.use)(rsc) : rsc;
    if (!resolvedRsc) {
        // The data for this segment is not available, and there's no pending
        // navigation that will be able to fulfill it. We need to fetch more from
        // the server and patch the cache.
        // Check if there's already a pending request.
        let lazyData = childNode.lazyData;
        if (lazyData === null) {
            /**
       * Router state with refetch marker added
       */ // TODO-APP: remove ''
            const refetchTree = walkAddRefetch([
                "",
                ...segmentPath
            ], fullTree);
            const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(fullTree);
            childNode.lazyData = lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), refetchTree, includeNextUrl ? context.nextUrl : null, buildId);
            childNode.lazyDataResolved = false;
        }
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const serverResponse = (0, _react.use)(lazyData);
        if (!childNode.lazyDataResolved) {
            // setTimeout is used to start a new transition during render, this is an intentional hack around React.
            setTimeout(()=>{
                (0, _react.startTransition)(()=>{
                    changeByServerResponse({
                        previousTree: fullTree,
                        serverResponse
                    });
                });
            });
            // It's important that we mark this as resolved, in case this branch is replayed, we don't want to continously re-apply
            // the patch to the tree.
            childNode.lazyDataResolved = true;
        }
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        // A falsey `resolvedRsc` indicates missing data -- we should not commit that branch, and we need to wait for the data to arrive.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    // If we get to this point, then we know we have something we can render.
    const subtree = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            loading: childNode.loading
        },
        children: resolvedRsc
    });
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { children, hasLoading, loading, loadingStyles, loadingScripts } = param;
    // We have an explicit prop for checking if `loading` is provided, to disambiguate between a loading
    // component that returns `null` / `undefined`, vs not having a loading component at all.
    if (hasLoading) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loading
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, segmentPath, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, notFoundStyles, styles } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes, tree, url, loading } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodesForParallelRouter = new Map();
        childNodes.set(parallelRouterKey, childNodesForParallelRouter);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegmentValue = (0, _getsegmentvalue.getSegmentValue)(treeSegment);
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        treeSegment
    ];
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            styles,
            preservedSegments.map((preservedSegment)=>{
                const preservedSegmentValue = (0, _getsegmentvalue.getSegmentValue)(preservedSegment);
                const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(preservedSegment);
                return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
                    value: /*#__PURE__*/ (0, _jsxruntime.jsx)(ScrollAndFocusHandler, {
                        segmentPath: segmentPath,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                            errorComponent: error,
                            errorStyles: errorStyles,
                            errorScripts: errorScripts,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                                hasLoading: Boolean(loading),
                                loading: loading == null ? void 0 : loading[0],
                                loadingStyles: loading == null ? void 0 : loading[1],
                                loadingScripts: loading == null ? void 0 : loading[2],
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_notfoundboundary.NotFoundBoundary, {
                                    notFound: notFound,
                                    notFoundStyles: notFoundStyles,
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_redirectboundary.RedirectBoundary, {
                                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                            parallelRouterKey: parallelRouterKey,
                                            url: url,
                                            tree: tree,
                                            childNodes: childNodesForParallelRouter,
                                            segmentPath: segmentPath,
                                            cacheKey: cacheKey,
                                            isActive: currentChildSegmentValue === preservedSegmentValue
                                        })
                                    })
                                })
                            })
                        })
                    }),
                    children: [
                        templateStyles,
                        templateScripts,
                        template
                    ]
                }, (0, _createroutercachekey.createRouterCacheKey)(preservedSegment, true)));
            })
        ]
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 6237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    canSegmentBeOverridden: function() {
        return canSegmentBeOverridden;
    },
    matchSegment: function() {
        return matchSegment;
    }
});
const _getsegmentparam = __webpack_require__(4286);
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === "string") {
        if (typeof segment === "string") {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === "string") {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
const canSegmentBeOverridden = (existingSegment, segment)=>{
    var _getSegmentParam;
    if (Array.isArray(existingSegment) || !Array.isArray(segment)) {
        return false;
    }
    return ((_getSegmentParam = (0, _getsegmentparam.getSegmentParam)(existingSegment)) == null ? void 0 : _getSegmentParam.param) === segment[0];
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _react = __webpack_require__(2265);
const _approutercontextsharedruntime = __webpack_require__(4467);
const _hooksclientcontextsharedruntime = __webpack_require__(8056);
const _getsegmentvalue = __webpack_require__(4640);
const _segment = __webpack_require__(0);
const _navigationreactserver = __webpack_require__(2152);
const _serverinsertedhtmlsharedruntime = __webpack_require__(8005);
/**
 * A [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) hook
 * that lets you *read* the current URL's search parameters.
 *
 * Learn more about [`URLSearchParams` on MDN](https://developer.mozilla.org/docs/Web/API/URLSearchParams)
 *
 * @example
 * ```ts
 * "use client"
 * import { useSearchParams } from 'next/navigation'
 *
 * export default function Page() {
 *   const searchParams = useSearchParams()
 *   searchParams.get('foo') // returns 'bar' when ?foo=bar
 *   // ...
 * }
 * ```
 *
 * Read more: [Next.js Docs: `useSearchParams`](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
 */ function useSearchParams() {
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (typeof window === "undefined") {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(4804);
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        bailoutToClientRendering("useSearchParams()");
    }
    return readonlySearchParams;
}
/**
 * A [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) hook
 * that lets you read the current URL's pathname.
 *
 * @example
 * ```ts
 * "use client"
 * import { usePathname } from 'next/navigation'
 *
 * export default function Page() {
 *  const pathname = usePathname() // returns "/dashboard" on /dashboard?foo=bar
 *  // ...
 * }
 * ```
 *
 * Read more: [Next.js Docs: `usePathname`](https://nextjs.org/docs/app/api-reference/functions/use-pathname)
 */ function usePathname() {
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
/**
 *
 * This hook allows you to programmatically change routes inside [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components).
 *
 * @example
 * ```ts
 * "use client"
 * import { useRouter } from 'next/navigation'
 *
 * export default function Page() {
 *  const router = useRouter()
 *  // ...
 *  router.push('/dashboard') // Navigate to /dashboard
 * }
 * ```
 *
 * Read more: [Next.js Docs: `useRouter`](https://nextjs.org/docs/app/api-reference/functions/use-router)
 */ function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
/**
 * A [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) hook
 * that lets you read a route's dynamic params filled in by the current URL.
 *
 * @example
 * ```ts
 * "use client"
 * import { useParams } from 'next/navigation'
 *
 * export default function Page() {
 *   // on /dashboard/[team] where pathname is /dashboard/nextjs
 *   const { team } = useParams() // team === "nextjs"
 * }
 * ```
 *
 * Read more: [Next.js Docs: `useParams`](https://nextjs.org/docs/app/api-reference/functions/use-params)
 */ function useParams() {
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
}
/** Get the canonical parameters from the current level to the leaf node. */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
/**
 * A [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) hook
 * that lets you read the active route segments **below** the Layout it is called from.
 *
 * @example
 * ```ts
 * 'use client'
 *
 * import { useSelectedLayoutSegments } from 'next/navigation'
 *
 * export default function ExampleClientComponent() {
 *   const segments = useSelectedLayoutSegments()
 *
 *   return (
 *     <ul>
 *       {segments.map((segment, index) => (
 *         <li key={index}>{segment}</li>
 *       ))}
 *     </ul>
 *   )
 * }
 * ```
 *
 * Read more: [Next.js Docs: `useSelectedLayoutSegments`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments)
 */ function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    return getSelectedLayoutSegmentPath(context.tree, parallelRouteKey);
}
/**
 * A [Client Component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) hook
 * that lets you read the active route segment **one level below** the Layout it is called from.
 *
 * @example
 * ```ts
 * 'use client'
 * import { useSelectedLayoutSegment } from 'next/navigation'
 *
 * export default function ExampleClientComponent() {
 *   const segment = useSelectedLayoutSegment()
 *
 *   return <p>Active segment: {segment}</p>
 * }
 * ```
 *
 * Read more: [Next.js Docs: `useSelectedLayoutSegment`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment)
 */ function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
    }
    const selectedLayoutSegment = parallelRouteKey === "children" ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
    // and returning an internal value like `__DEFAULT__` would be confusing.
    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 2152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @internal */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirect.RedirectType;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    }
});
const _redirect = __webpack_require__(7909);
const _notfound = __webpack_require__(2496);
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map


/***/ }),

/***/ 5324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NotFoundBoundary", ({
    enumerable: true,
    get: function() {
        return NotFoundBoundary;
    }
}));
const _interop_require_wildcard = __webpack_require__(1452);
const _jsxruntime = __webpack_require__(7437);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _navigation = __webpack_require__(1169);
const _notfound = __webpack_require__(2496);
const _warnonce = __webpack_require__(2301);
const _approutercontextsharedruntime = __webpack_require__(4467);
class NotFoundErrorBoundary extends _react.default.Component {
    componentDidCatch() {
        if (false) {}
    }
    static getDerivedStateFromError(error) {
        if ((0, _notfound.isNotFoundError)(error)) {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.notFoundTriggered) {
            return {
                notFoundTriggered: false,
                previousPathname: props.pathname
            };
        }
        return {
            notFoundTriggered: state.notFoundTriggered,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    }),
                     false && /*#__PURE__*/ 0,
                    this.props.notFoundStyles,
                    this.props.notFound
                ]
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: !!props.asNotFound,
            previousPathname: props.pathname
        };
    }
}
function NotFoundBoundary(param) {
    let { notFound, notFoundStyles, asNotFound, children } = param;
    const pathname = (0, _navigation.usePathname)();
    const missingSlots = (0, _react.useContext)(_approutercontextsharedruntime.MissingSlotContext);
    return notFound ? /*#__PURE__*/ (0, _jsxruntime.jsx)(NotFoundErrorBoundary, {
        pathname: pathname,
        notFound: notFound,
        notFoundStyles: notFoundStyles,
        asNotFound: asNotFound,
        missingSlots: missingSlots,
        children: children
    }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 2496:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isNotFoundError: function() {
        return isNotFoundError;
    },
    notFound: function() {
        return notFound;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    if (typeof error !== "object" || error === null || !("digest" in error)) {
        return false;
    }
    return error.digest === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 3858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    This is a simple promise queue that allows you to limit the number of concurrent promises
    that are running at any given time. It's used to limit the number of concurrent
    prefetch requests that are being made to the server but could be used for other
    things as well.
*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "PromiseQueue", ({
    enumerable: true,
    get: function() {
        return PromiseQueue;
    }
}));
const _class_private_field_loose_base = __webpack_require__(3449);
const _class_private_field_loose_key = __webpack_require__(7614);
var _maxConcurrency = /*#__PURE__*/ _class_private_field_loose_key._("_maxConcurrency"), _runningCount = /*#__PURE__*/ _class_private_field_loose_key._("_runningCount"), _queue = /*#__PURE__*/ _class_private_field_loose_key._("_queue"), _processNext = /*#__PURE__*/ _class_private_field_loose_key._("_processNext");
class PromiseQueue {
    enqueue(promiseFn) {
        let taskResolve;
        let taskReject;
        const taskPromise = new Promise((resolve, reject)=>{
            taskResolve = resolve;
            taskReject = reject;
        });
        const task = async ()=>{
            try {
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]++;
                const result = await promiseFn();
                taskResolve(result);
            } catch (error) {
                taskReject(error);
            } finally{
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]--;
                _class_private_field_loose_base._(this, _processNext)[_processNext]();
            }
        };
        const enqueueResult = {
            promiseFn: taskPromise,
            task
        };
        // wonder if we should take a LIFO approach here
        _class_private_field_loose_base._(this, _queue)[_queue].push(enqueueResult);
        _class_private_field_loose_base._(this, _processNext)[_processNext]();
        return taskPromise;
    }
    bump(promiseFn) {
        const index = _class_private_field_loose_base._(this, _queue)[_queue].findIndex((item)=>item.promiseFn === promiseFn);
        if (index > -1) {
            const bumpedItem = _class_private_field_loose_base._(this, _queue)[_queue].splice(index, 1)[0];
            _class_private_field_loose_base._(this, _queue)[_queue].unshift(bumpedItem);
            _class_private_field_loose_base._(this, _processNext)[_processNext](true);
        }
    }
    constructor(maxConcurrency = 5){
        Object.defineProperty(this, _processNext, {
            value: processNext
        });
        Object.defineProperty(this, _maxConcurrency, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _runningCount, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _queue, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] = maxConcurrency;
        _class_private_field_loose_base._(this, _runningCount)[_runningCount] = 0;
        _class_private_field_loose_base._(this, _queue)[_queue] = [];
    }
}
function processNext(forced) {
    if (forced === void 0) forced = false;
    if ((_class_private_field_loose_base._(this, _runningCount)[_runningCount] < _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] || forced) && _class_private_field_loose_base._(this, _queue)[_queue].length > 0) {
        var _class_private_field_loose_base__queue_shift;
        (_class_private_field_loose_base__queue_shift = _class_private_field_loose_base._(this, _queue)[_queue].shift()) == null ? void 0 : _class_private_field_loose_base__queue_shift.task();
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=promise-queue.js.map


/***/ }),

/***/ 6585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectBoundary: function() {
        return RedirectBoundary;
    },
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    }
});
const _interop_require_wildcard = __webpack_require__(1452);
const _jsxruntime = __webpack_require__(7437);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _navigation = __webpack_require__(1169);
const _redirect = __webpack_require__(7909);
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        _react.default.startTransition(()=>{
            if (redirectType === _redirect.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific the the `@types/react` version.
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(RedirectErrorBoundary, {
        router: router,
        children: children
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map


/***/ }),

/***/ 4785:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "RedirectStatusCode", ({
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
}));
var RedirectStatusCode;
(function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
})(RedirectStatusCode || (RedirectStatusCode = {}));
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map


/***/ }),

/***/ 7909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectType: function() {
        return RedirectType;
    },
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    isRedirectError: function() {
        return isRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _requestasyncstorageexternal = __webpack_require__(8512);
const _actionasyncstorageexternal = __webpack_require__(9440);
const _redirectstatuscode = __webpack_require__(4785);
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    const requestStore = _requestasyncstorageexternal.requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = "replace";
    const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
    throw getRedirectError(url, type, // as we don't want the POST request to follow the redirect,
    // as it could result in erroneous re-submissions.
    (actionStore == null ? void 0 : actionStore.isAction) ? _redirectstatuscode.RedirectStatusCode.SeeOther : _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = "replace";
    const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
    throw getRedirectError(url, type, // as we don't want the POST request to follow the redirect,
    // as it could result in erroneous re-submissions.
    (actionStore == null ? void 0 : actionStore.isAction) ? _redirectstatuscode.RedirectStatusCode.SeeOther : _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function isRedirectError(error) {
    if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
    }
    const [errorCode, type, destination, status] = error.digest.split(";", 4);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return Number(error.digest.split(";", 4)[3]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 1343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
}));
const _interop_require_wildcard = __webpack_require__(1452);
const _jsxruntime = __webpack_require__(7437);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _approutercontextsharedruntime = __webpack_require__(4467);
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 8512:
/***/ (function(module, exports, __webpack_require__) {

"TURBOPACK { transition: next-shared }";
"use strict";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getExpectedRequestStore: function() {
        return getExpectedRequestStore;
    },
    requestAsyncStorage: function() {
        return _requestasyncstorageinstance.requestAsyncStorage;
    }
});
const _requestasyncstorageinstance = __webpack_require__(38);
function getExpectedRequestStore(callingExpression) {
    const store = _requestasyncstorageinstance.requestAsyncStorage.getStore();
    if (store) return store;
    throw new Error("`" + callingExpression + "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context");
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-async-storage.external.js.map


/***/ }),

/***/ 9607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyFlightData", ({
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
}));
const _filllazyitemstillleafwithhead = __webpack_require__(3821);
const _fillcachewithnewsubtreedata = __webpack_require__(1133);
function applyFlightData(existingCache, cache, flightDataPath, prefetchEntry) {
    // The one before last item is the router state tree patch
    const [treePatch, cacheNodeSeedData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (cacheNodeSeedData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        const rsc = cacheNodeSeedData[2];
        const loading = cacheNodeSeedData[3];
        cache.loading = loading;
        cache.rsc = rsc;
        // This is a PPR-only field. When PPR is enabled, we shouldn't hit
        // this path during a navigation, but until PPR is fully implemented
        // yet it's possible the existing node does have a non-null
        // `prefetchRsc`. As an incremental step, we'll just de-opt to the
        // old behavior — no PPR value.
        cache.prefetchRsc = null;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, existingCache, treePatch, cacheNodeSeedData, head, prefetchEntry);
    } else {
        // Copy rsc for the root node of the cache.
        cache.rsc = existingCache.rsc;
        // This is a PPR-only field. Unlike the previous branch, since we're
        // just cloning the existing cache node, we might as well keep the
        // PPR value, if it exists.
        cache.prefetchRsc = existingCache.prefetchRsc;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        cache.loading = existingCache.loading;
        // Create a copy of the existing cache with the rsc applied.
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(cache, existingCache, flightDataPath, prefetchEntry);
    }
    return true;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-flight-data.js.map


/***/ }),

/***/ 9684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyRouterStatePatchToTree", ({
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
}));
const _segment = __webpack_require__(0);
const _matchsegments = __webpack_require__(6237);
const _refetchinactiveparallelsegments = __webpack_require__(4922);
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree, flightSegmentPath) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    // if the applied patch segment is __DEFAULT__ then it can be ignored in favor of the initial tree
    // this is because the __DEFAULT__ segment is used as a placeholder on navigation
    if (patchSegment === _segment.DEFAULT_SEGMENT_KEY && initialSegment !== _segment.DEFAULT_SEGMENT_KEY) {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key], flightSegmentPath);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        // Copy over the existing tree
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch, path) {
    const [segment, parallelRoutes, url, refetch, isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch, flightSegmentPath);
        (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(tree, path);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch, flightSegmentPath);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch, path);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        },
        url,
        refetch
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(tree, path);
    return tree;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map


/***/ }),

/***/ 9559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "clearCacheNodeDataForSegmentPath", ({
    enumerable: true,
    get: function() {
        return clearCacheNodeDataForSegmentPath;
    }
}));
const _createroutercachekey = __webpack_require__(1784);
function clearCacheNodeDataForSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap == null ? void 0 : existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.lazyData || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(cacheKey, {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                lazyDataResolved: false,
                loading: null
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(cacheKey, {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                lazyDataResolved: false,
                loading: null
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            lazyData: childCacheNode.lazyData,
            rsc: childCacheNode.rsc,
            prefetchRsc: childCacheNode.prefetchRsc,
            head: childCacheNode.head,
            prefetchHead: childCacheNode.prefetchHead,
            parallelRoutes: new Map(childCacheNode.parallelRoutes),
            lazyDataResolved: childCacheNode.lazyDataResolved,
            loading: childCacheNode.loading
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    return clearCacheNodeDataForSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=clear-cache-node-data-for-segment-path.js.map


/***/ }),

/***/ 6626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    computeChangedPath: function() {
        return computeChangedPath;
    },
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    }
});
const _interceptionroutes = __webpack_require__(2269);
const _segment = __webpack_require__(0);
const _matchsegments = __webpack_require__(6237);
const removeLeadingSlash = (segment)=>{
    return segment[0] === "/" ? segment.slice(1) : segment;
};
const segmentToPathname = (segment)=>{
    if (typeof segment === "string") {
        // 'children' is not a valid path -- it's technically a parallel route that corresponds with the current segment's page
        // if we don't skip it, then the computed pathname might be something like `/children` which doesn't make sense.
        if (segment === "children") return "";
        return segment;
    }
    return segment[1];
};
function normalizeSegments(segments) {
    return segments.reduce((acc, segment)=>{
        segment = removeLeadingSlash(segment);
        if (segment === "" || (0, _segment.isGroupSegment)(segment)) {
            return acc;
        }
        return acc + "/" + segment;
    }, "") || "/";
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === _segment.DEFAULT_SEGMENT_KEY || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return "";
    const segments = [
        segmentToPathname(segment)
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        segments.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === "children") continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                segments.push(childPath);
            }
        }
    }
    return normalizeSegments(segments);
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return "";
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : "";
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === "/") {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizeSegments(changedPath.split("/"));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map


/***/ }),

/***/ 3174:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createHrefFromUrl", ({
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
}));
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : "");
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInitialRouterState", ({
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
}));
const _createhreffromurl = __webpack_require__(3174);
const _filllazyitemstillleafwithhead = __webpack_require__(3821);
const _computechangedpath = __webpack_require__(6626);
const _prefetchcacheutils = __webpack_require__(6004);
const _routerreducertypes = __webpack_require__(1507);
const _refetchinactiveparallelsegments = __webpack_require__(4922);
function createInitialRouterState(param) {
    let { buildId, initialTree, initialSeedData, initialCanonicalUrl, initialParallelRoutes, location, initialHead, couldBeIntercepted } = param;
    const isServer = !location;
    const rsc = initialSeedData[2];
    const cache = {
        lazyData: null,
        rsc: rsc,
        prefetchRsc: null,
        head: null,
        prefetchHead: null,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes,
        lazyDataResolved: false,
        loading: initialSeedData[3]
    };
    const canonicalUrl = // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
    location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl;
    (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(initialTree, canonicalUrl);
    const prefetchCache = new Map();
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, initialTree, initialSeedData, initialHead);
    }
    var _ref;
    const initialState = {
        buildId,
        tree: initialTree,
        cache,
        prefetchCache,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // First render needs to preserve the previous window.history.state
            // to avoid it being overwritten on navigation back/forward with MPA Navigation.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: {
            apply: false,
            onlyHashChange: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
    if (location) {
        // Seed the prefetch cache with this page's data.
        // This is to prevent needlessly re-prefetching a page that is already reusable,
        // and will avoid triggering a loading state/data fetch stall when navigating back to the page.
        const url = new URL("" + location.pathname + location.search, location.origin);
        const initialFlightData = [
            [
                "",
                initialTree,
                null,
                null
            ]
        ];
        (0, _prefetchcacheutils.createPrefetchCacheEntryForInitialLoad)({
            url,
            kind: _routerreducertypes.PrefetchKind.AUTO,
            data: [
                initialFlightData,
                undefined,
                false,
                couldBeIntercepted
            ],
            tree: initialState.tree,
            prefetchCache: initialState.prefetchCache,
            nextUrl: initialState.nextUrl
        });
    }
    return initialState;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map


/***/ }),

/***/ 1784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRouterCacheKey", ({
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
}));
const _segment = __webpack_require__(0);
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    // if the segment is an array, it means it's a dynamic segment
    // for example, ['lang', 'en', 'd']. We need to convert it to a string to store it as a cache node key.
    if (Array.isArray(segment)) {
        return segment[0] + "|" + segment[1] + "|" + segment[2];
    }
    // Page segments might have search parameters, ie __PAGE__?foo=bar
    // When `withoutSearchParameters` is true, we only want to return the page segment
    if (withoutSearchParameters && segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map


/***/ }),

/***/ 1283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fetchServerResponse", ({
    enumerable: true,
    get: function() {
        return fetchServerResponse;
    }
}));
const _approuterheaders = __webpack_require__(7325);
const _approuter = __webpack_require__(5751);
const _appcallserver = __webpack_require__(4590);
const _routerreducertypes = __webpack_require__(1507);
const _hash = __webpack_require__(4736);
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
// import { createFromFetch } from 'react-server-dom-webpack/client'
const { createFromFetch } =  false ? 0 : __webpack_require__(6671);
function doMpaNavigation(url) {
    return [
        (0, _approuter.urlToUrlWithoutFlightMarker)(url).toString(),
        undefined,
        false,
        false
    ];
}
async function fetchServerResponse(url, flightRouterState, nextUrl, currentBuildId, prefetchKind) {
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC_HEADER]: "1",
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(flightRouterState))
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = "1";
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    if (false) {}
    const uniqueCacheQuery = (0, _hash.hexHash)([
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] || "0",
        headers[_approuterheaders.NEXT_ROUTER_STATE_TREE],
        headers[_approuterheaders.NEXT_URL]
    ].join(","));
    try {
        var _res_headers_get;
        let fetchUrl = new URL(url);
        if (true) {
            if (false) {}
        }
        // Add unique cache query to avoid caching conflicts on CDN which don't respect to Vary header
        fetchUrl.searchParams.set(_approuterheaders.NEXT_RSC_UNION_QUERY, uniqueCacheQuery);
        const res = await fetch(fetchUrl, {
            // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
            credentials: "same-origin",
            headers
        });
        const responseUrl = (0, _approuter.urlToUrlWithoutFlightMarker)(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get("content-type") || "";
        const postponed = !!res.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER);
        const interception = !!((_res_headers_get = res.headers.get("vary")) == null ? void 0 : _res_headers_get.includes(_approuterheaders.NEXT_URL));
        let isFlightResponse = contentType === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
        if (true) {
            if (false) {}
        }
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok) {
            // in case the original URL came with a hash, preserve it before redirecting to the new URL
            if (url.hash) {
                responseUrl.hash = url.hash;
            }
            return doMpaNavigation(responseUrl.toString());
        }
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const [buildId, flightData] = await createFromFetch(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (currentBuildId !== buildId) {
            return doMpaNavigation(res.url);
        }
        return [
            flightData,
            canonicalUrl,
            postponed,
            interception
        ];
    } catch (err) {
        console.error("Failed to fetch RSC payload for " + url + ". Falling back to browser navigation.", err);
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return [
            url.toString(),
            undefined,
            false,
            false
        ];
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithNewSubTreeData", ({
    enumerable: true,
    get: function() {
        return fillCacheWithNewSubTreeData;
    }
}));
const _invalidatecachebyrouterstate = __webpack_require__(4213);
const _filllazyitemstillleafwithhead = __webpack_require__(3821);
const _createroutercachekey = __webpack_require__(1784);
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath, prefetchEntry) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.lazyData || childCacheNode === existingChildCacheNode) {
            const seedData = flightDataPath[3];
            const rsc = seedData[2];
            const loading = seedData[3];
            childCacheNode = {
                lazyData: null,
                rsc,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                loading,
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map(),
                lazyDataResolved: false
            };
            if (existingChildCacheNode) {
                (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(childCacheNode, existingChildCacheNode, flightDataPath[2], seedData, flightDataPath[4], prefetchEntry);
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            lazyData: childCacheNode.lazyData,
            rsc: childCacheNode.rsc,
            prefetchRsc: childCacheNode.prefetchRsc,
            head: childCacheNode.head,
            prefetchHead: childCacheNode.prefetchHead,
            parallelRoutes: new Map(childCacheNode.parallelRoutes),
            lazyDataResolved: false,
            loading: childCacheNode.loading
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2), prefetchEntry);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map


/***/ }),

/***/ 3821:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", ({
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
}));
const _createroutercachekey = __webpack_require__(1784);
const _routerreducertypes = __webpack_require__(1507);
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, cacheNodeSeedData, head, prefetchEntry) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of rsc.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        // TODO: We should traverse the cacheNodeSeedData tree instead of the router
        // state tree. Ideally, they would always be the same shape, but because of
        // the loading.js pattern, cacheNodeSeedData sometimes only represents a
        // partial tree. That's why this node is sometimes null. Once PPR lands,
        // loading.js will no longer have special behavior and we can traverse the
        // data tree instead.
        //
        // We should also consider merging the router state tree and the data tree
        // in the response format, so that we don't have to send the keys twice.
        // Then the client can convert them into separate representations.
        const parallelSeedData = cacheNodeSeedData !== null && cacheNodeSeedData[1][key] !== undefined ? cacheNodeSeedData[1][key] : null;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                const hasReusablePrefetch = (prefetchEntry == null ? void 0 : prefetchEntry.kind) === "auto" && prefetchEntry.status === _routerreducertypes.PrefetchCacheEntryStatus.reusable;
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                let newCacheNode;
                if (parallelSeedData !== null) {
                    // New data was sent from the server.
                    const seedNode = parallelSeedData[2];
                    const loading = parallelSeedData[3];
                    newCacheNode = {
                        lazyData: null,
                        rsc: seedNode,
                        // This is a PPR-only field. When PPR is enabled, we shouldn't hit
                        // this path during a navigation, but until PPR is fully implemented
                        // yet it's possible the existing node does have a non-null
                        // `prefetchRsc`. As an incremental step, we'll just de-opt to the
                        // old behavior — no PPR value.
                        prefetchRsc: null,
                        head: null,
                        prefetchHead: null,
                        loading,
                        parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes),
                        lazyDataResolved: false
                    };
                } else if (hasReusablePrefetch && existingCacheNode) {
                    // No new data was sent from the server, but the existing cache node
                    // was prefetched, so we should reuse that.
                    newCacheNode = {
                        lazyData: existingCacheNode.lazyData,
                        rsc: existingCacheNode.rsc,
                        // This is a PPR-only field. Unlike the previous branch, since we're
                        // just cloning the existing cache node, we might as well keep the
                        // PPR value, if it exists.
                        prefetchRsc: existingCacheNode.prefetchRsc,
                        head: existingCacheNode.head,
                        prefetchHead: existingCacheNode.prefetchHead,
                        parallelRoutes: new Map(existingCacheNode.parallelRoutes),
                        lazyDataResolved: existingCacheNode.lazyDataResolved,
                        loading: existingCacheNode.loading
                    };
                } else {
                    // No data available for this node. This will trigger a lazy fetch
                    // during render.
                    newCacheNode = {
                        lazyData: null,
                        rsc: null,
                        prefetchRsc: null,
                        head: null,
                        prefetchHead: null,
                        parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes),
                        lazyDataResolved: false,
                        loading: null
                    };
                }
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(newCacheNode, existingCacheNode, parallelRouteState, parallelSeedData ? parallelSeedData : null, head, prefetchEntry);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        let newCacheNode;
        if (parallelSeedData !== null) {
            // New data was sent from the server.
            const seedNode = parallelSeedData[2];
            const loading = parallelSeedData[3];
            newCacheNode = {
                lazyData: null,
                rsc: seedNode,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                lazyDataResolved: false,
                loading
            };
        } else {
            // No data available for this node. This will trigger a lazy fetch
            // during render.
            newCacheNode = {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                lazyDataResolved: false,
                loading: null
            };
        }
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, parallelSeedData, head, prefetchEntry);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map


/***/ }),

/***/ 6416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleMutable", ({
    enumerable: true,
    get: function() {
        return handleMutable;
    }
}));
const _computechangedpath = __webpack_require__(6626);
function isNotUndefined(value) {
    return typeof value !== "undefined";
}
function handleMutable(state, mutable) {
    var _mutable_canonicalUrl;
    var _mutable_shouldScroll;
    // shouldScroll is true by default, can override to false.
    const shouldScroll = (_mutable_shouldScroll = mutable.shouldScroll) != null ? _mutable_shouldScroll : true;
    let nextUrl = state.nextUrl;
    if (isNotUndefined(mutable.patchedTree)) {
        // If we received a patched tree, we need to compute the changed path.
        const changedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree);
        if (changedPath) {
            // If the tree changed, we need to update the nextUrl
            nextUrl = changedPath;
        } else if (!nextUrl) {
            // if the tree ends up being the same (ie, no changed path), and we don't have a nextUrl, then we should use the canonicalUrl
            nextUrl = state.canonicalUrl;
        }
    // otherwise this will be a no-op and continue to use the existing nextUrl
    }
    var _mutable_scrollableSegments;
    return {
        buildId: state.buildId,
        // Set href.
        canonicalUrl: isNotUndefined(mutable.canonicalUrl) ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: isNotUndefined(mutable.pendingPush) ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: isNotUndefined(mutable.mpaNavigation) ? mutable.mpaNavigation : state.pushRef.mpaNavigation,
            preserveCustomHistoryState: isNotUndefined(mutable.preserveCustomHistoryState) ? mutable.preserveCustomHistoryState : state.pushRef.preserveCustomHistoryState
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? isNotUndefined(mutable == null ? void 0 : mutable.scrollableSegments) ? true : state.focusAndScrollRef.apply : false,
            onlyHashChange: !!mutable.hashFragment && state.canonicalUrl.split("#", 1)[0] === ((_mutable_canonicalUrl = mutable.canonicalUrl) == null ? void 0 : _mutable_canonicalUrl.split("#", 1)[0]),
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== "" ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? (_mutable_scrollableSegments = mutable == null ? void 0 : mutable.scrollableSegments) != null ? _mutable_scrollableSegments : state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: mutable.prefetchCache ? mutable.prefetchCache : state.prefetchCache,
        // Apply patched router state.
        tree: isNotUndefined(mutable.patchedTree) ? mutable.patchedTree : state.tree,
        nextUrl
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map


/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleSegmentMismatch", ({
    enumerable: true,
    get: function() {
        return handleSegmentMismatch;
    }
}));
const _navigatereducer = __webpack_require__(1294);
function handleSegmentMismatch(state, action, treePatch) {
    if (false) {}
    return (0, _navigatereducer.handleExternalUrl)(state, {}, state.canonicalUrl, true);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-segment-mismatch.js.map


/***/ }),

/***/ 9863:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheBelowFlightSegmentPath", ({
    enumerable: true,
    get: function() {
        return invalidateCacheBelowFlightSegmentPath;
    }
}));
const _createroutercachekey = __webpack_require__(1784);
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(cacheKey);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            lazyData: childCacheNode.lazyData,
            rsc: childCacheNode.rsc,
            prefetchRsc: childCacheNode.prefetchRsc,
            head: childCacheNode.head,
            prefetchHead: childCacheNode.prefetchHead,
            parallelRoutes: new Map(childCacheNode.parallelRoutes),
            lazyDataResolved: childCacheNode.lazyDataResolved
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map


/***/ }),

/***/ 4213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheByRouterState", ({
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
}));
const _createroutercachekey = __webpack_require__(1784);
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of rsc.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNavigatingToNewRootLayout", ({
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
}));
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map


/***/ }),

/***/ 3060:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    abortTask: function() {
        return abortTask;
    },
    listenForDynamicRequest: function() {
        return listenForDynamicRequest;
    },
    updateCacheNodeOnNavigation: function() {
        return updateCacheNodeOnNavigation;
    },
    updateCacheNodeOnPopstateRestoration: function() {
        return updateCacheNodeOnPopstateRestoration;
    }
});
const _segment = __webpack_require__(0);
const _matchsegments = __webpack_require__(6237);
const _createroutercachekey = __webpack_require__(1784);
function updateCacheNodeOnNavigation(oldCacheNode, oldRouterState, newRouterState, prefetchData, prefetchHead) {
    // Diff the old and new trees to reuse the shared layouts.
    const oldRouterStateChildren = oldRouterState[1];
    const newRouterStateChildren = newRouterState[1];
    const prefetchDataChildren = prefetchData[1];
    const oldParallelRoutes = oldCacheNode.parallelRoutes;
    // Clone the current set of segment children, even if they aren't active in
    // the new tree.
    // TODO: We currently retain all the inactive segments indefinitely, until
    // there's an explicit refresh, or a parent layout is lazily refreshed. We
    // rely on this for popstate navigations, which update the Router State Tree
    // but do not eagerly perform a data fetch, because they expect the segment
    // data to already be in the Cache Node tree. For highly static sites that
    // are mostly read-only, this may happen only rarely, causing memory to
    // leak. We should figure out a better model for the lifetime of inactive
    // segments, so we can maintain instant back/forward navigations without
    // leaking memory indefinitely.
    const prefetchParallelRoutes = new Map(oldParallelRoutes);
    // As we diff the trees, we may sometimes modify (copy-on-write, not mutate)
    // the Route Tree that was returned by the server — for example, in the case
    // of default parallel routes, we preserve the currently active segment. To
    // avoid mutating the original tree, we clone the router state children along
    // the return path.
    let patchedRouterStateChildren = {};
    let taskChildren = null;
    for(let parallelRouteKey in newRouterStateChildren){
        const newRouterStateChild = newRouterStateChildren[parallelRouteKey];
        const oldRouterStateChild = oldRouterStateChildren[parallelRouteKey];
        const oldSegmentMapChild = oldParallelRoutes.get(parallelRouteKey);
        const prefetchDataChild = prefetchDataChildren[parallelRouteKey];
        const newSegmentChild = newRouterStateChild[0];
        const newSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(newSegmentChild);
        const oldSegmentChild = oldRouterStateChild !== undefined ? oldRouterStateChild[0] : undefined;
        const oldCacheNodeChild = oldSegmentMapChild !== undefined ? oldSegmentMapChild.get(newSegmentKeyChild) : undefined;
        let taskChild;
        if (newSegmentChild === _segment.PAGE_SEGMENT_KEY) {
            // This is a leaf segment — a page, not a shared layout. We always apply
            // its data.
            taskChild = spawnPendingTask(newRouterStateChild, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead);
        } else if (newSegmentChild === _segment.DEFAULT_SEGMENT_KEY) {
            // This is another kind of leaf segment — a default route.
            //
            // Default routes have special behavior. When there's no matching segment
            // for a parallel route, Next.js preserves the currently active segment
            // during a client navigation — but not for initial render. The server
            // leaves it to the client to account for this. So we need to handle
            // it here.
            if (oldRouterStateChild !== undefined) {
                // Reuse the existing Router State for this segment. We spawn a "task"
                // just to keep track of the updated router state; unlike most, it's
                // already fulfilled and won't be affected by the dynamic response.
                taskChild = spawnReusedTask(oldRouterStateChild);
            } else {
                // There's no currently active segment. Switch to the "create" path.
                taskChild = spawnPendingTask(newRouterStateChild, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead);
            }
        } else if (oldSegmentChild !== undefined && (0, _matchsegments.matchSegment)(newSegmentChild, oldSegmentChild)) {
            if (oldCacheNodeChild !== undefined && oldRouterStateChild !== undefined) {
                // This segment exists in both the old and new trees.
                if (prefetchDataChild !== undefined && prefetchDataChild !== null) {
                    // Recursively update the children.
                    taskChild = updateCacheNodeOnNavigation(oldCacheNodeChild, oldRouterStateChild, newRouterStateChild, prefetchDataChild, prefetchHead);
                } else {
                    // The server didn't send any prefetch data for this segment. This
                    // shouldn't happen because the Route Tree and the Seed Data tree
                    // should always be the same shape, but until we unify those types
                    // it's still possible. For now we're going to deopt and trigger a
                    // lazy fetch during render.
                    taskChild = spawnTaskForMissingData(newRouterStateChild);
                }
            } else {
                // Either there's no existing Cache Node for this segment, or this
                // segment doesn't exist in the old Router State tree. Switch to the
                // "create" path.
                taskChild = spawnPendingTask(newRouterStateChild, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead);
            }
        } else {
            // This is a new tree. Switch to the "create" path.
            taskChild = spawnPendingTask(newRouterStateChild, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead);
        }
        if (taskChild !== null) {
            // Something changed in the child tree. Keep track of the child task.
            if (taskChildren === null) {
                taskChildren = new Map();
            }
            taskChildren.set(parallelRouteKey, taskChild);
            const newCacheNodeChild = taskChild.node;
            if (newCacheNodeChild !== null) {
                const newSegmentMapChild = new Map(oldSegmentMapChild);
                newSegmentMapChild.set(newSegmentKeyChild, newCacheNodeChild);
                prefetchParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
            }
            // The child tree's route state may be different from the prefetched
            // route sent by the server. We need to clone it as we traverse back up
            // the tree.
            patchedRouterStateChildren[parallelRouteKey] = taskChild.route;
        } else {
            // The child didn't change. We can use the prefetched router state.
            patchedRouterStateChildren[parallelRouteKey] = newRouterStateChild;
        }
    }
    if (taskChildren === null) {
        // No new tasks were spawned.
        return null;
    }
    const newCacheNode = {
        lazyData: null,
        rsc: oldCacheNode.rsc,
        // We intentionally aren't updating the prefetchRsc field, since this node
        // is already part of the current tree, because it would be weird for
        // prefetch data to be newer than the final data. It probably won't ever be
        // observable anyway, but it could happen if the segment is unmounted then
        // mounted again, because LayoutRouter will momentarily switch to rendering
        // prefetchRsc, via useDeferredValue.
        prefetchRsc: oldCacheNode.prefetchRsc,
        head: oldCacheNode.head,
        prefetchHead: oldCacheNode.prefetchHead,
        loading: oldCacheNode.loading,
        // Everything is cloned except for the children, which we computed above.
        parallelRoutes: prefetchParallelRoutes,
        lazyDataResolved: false
    };
    return {
        // Return a cloned copy of the router state with updated children.
        route: patchRouterStateWithNewChildren(newRouterState, patchedRouterStateChildren),
        node: newCacheNode,
        children: taskChildren
    };
}
function patchRouterStateWithNewChildren(baseRouterState, newChildren) {
    const clone = [
        baseRouterState[0],
        newChildren
    ];
    // Based on equivalent logic in apply-router-state-patch-to-tree, but should
    // confirm whether we need to copy all of these fields. Not sure the server
    // ever sends, e.g. the refetch marker.
    if (2 in baseRouterState) {
        clone[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clone[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clone[4] = baseRouterState[4];
    }
    return clone;
}
function spawnPendingTask(routerState, prefetchData, prefetchHead) {
    // Create a task that will later be fulfilled by data from the server.
    const pendingCacheNode = createPendingCacheNode(routerState, prefetchData, prefetchHead);
    return {
        route: routerState,
        node: pendingCacheNode,
        children: null
    };
}
function spawnReusedTask(reusedRouterState) {
    // Create a task that reuses an existing segment, e.g. when reusing
    // the current active segment in place of a default route.
    return {
        route: reusedRouterState,
        node: null,
        children: null
    };
}
function spawnTaskForMissingData(routerState) {
    // Create a task for a new subtree that wasn't prefetched by the server.
    // This shouldn't really ever happen but it's here just in case the Seed Data
    // Tree and the Router State Tree disagree unexpectedly.
    const pendingCacheNode = createPendingCacheNode(routerState, null, null);
    return {
        route: routerState,
        node: pendingCacheNode,
        children: null
    };
}
function listenForDynamicRequest(task, responsePromise) {
    responsePromise.then((response)=>{
        const flightData = response[0];
        for (const flightDataPath of flightData){
            const segmentPath = flightDataPath.slice(0, -3);
            const serverRouterState = flightDataPath[flightDataPath.length - 3];
            const dynamicData = flightDataPath[flightDataPath.length - 2];
            const dynamicHead = flightDataPath[flightDataPath.length - 1];
            if (typeof segmentPath === "string") {
                continue;
            }
            writeDynamicDataIntoPendingTask(task, segmentPath, serverRouterState, dynamicData, dynamicHead);
        }
        // Now that we've exhausted all the data we received from the server, if
        // there are any remaining pending tasks in the tree, abort them now.
        // If there's any missing data, it will trigger a lazy fetch.
        abortTask(task, null);
    }, (error)=>{
        // This will trigger an error during render
        abortTask(task, error);
    });
}
function writeDynamicDataIntoPendingTask(rootTask, segmentPath, serverRouterState, dynamicData, dynamicHead) {
    // The data sent by the server represents only a subtree of the app. We need
    // to find the part of the task tree that matches the server response, and
    // fulfill it using the dynamic data.
    //
    // segmentPath represents the parent path of subtree. It's a repeating pattern
    // of parallel route key and segment:
    //
    //   [string, Segment, string, Segment, string, Segment, ...]
    //
    // Iterate through the path and finish any tasks that match this payload.
    let task = rootTask;
    for(let i = 0; i < segmentPath.length; i += 2){
        const parallelRouteKey = segmentPath[i];
        const segment = segmentPath[i + 1];
        const taskChildren = task.children;
        if (taskChildren !== null) {
            const taskChild = taskChildren.get(parallelRouteKey);
            if (taskChild !== undefined) {
                const taskSegment = taskChild.route[0];
                if ((0, _matchsegments.matchSegment)(segment, taskSegment)) {
                    // Found a match for this task. Keep traversing down the task tree.
                    task = taskChild;
                    continue;
                }
            }
        }
        // We didn't find a child task that matches the server data. Exit. We won't
        // abort the task, though, because a different FlightDataPath may be able to
        // fulfill it (see loop in listenForDynamicRequest). We only abort tasks
        // once we've run out of data.
        return;
    }
    finishTaskUsingDynamicDataPayload(task, serverRouterState, dynamicData, dynamicHead);
}
function finishTaskUsingDynamicDataPayload(task, serverRouterState, dynamicData, dynamicHead) {
    // dynamicData may represent a larger subtree than the task. Before we can
    // finish the task, we need to line them up.
    const taskChildren = task.children;
    const taskNode = task.node;
    if (taskChildren === null) {
        // We've reached the leaf node of the pending task. The server data tree
        // lines up the pending Cache Node tree. We can now switch to the
        // normal algorithm.
        if (taskNode !== null) {
            finishPendingCacheNode(taskNode, task.route, serverRouterState, dynamicData, dynamicHead);
            // Null this out to indicate that the task is complete.
            task.node = null;
        }
        return;
    }
    // The server returned more data than we need to finish the task. Skip over
    // the extra segments until we reach the leaf task node.
    const serverChildren = serverRouterState[1];
    const dynamicDataChildren = dynamicData[1];
    for(const parallelRouteKey in serverRouterState){
        const serverRouterStateChild = serverChildren[parallelRouteKey];
        const dynamicDataChild = dynamicDataChildren[parallelRouteKey];
        const taskChild = taskChildren.get(parallelRouteKey);
        if (taskChild !== undefined) {
            const taskSegment = taskChild.route[0];
            if ((0, _matchsegments.matchSegment)(serverRouterStateChild[0], taskSegment) && dynamicDataChild !== null && dynamicDataChild !== undefined) {
                // Found a match for this task. Keep traversing down the task tree.
                return finishTaskUsingDynamicDataPayload(taskChild, serverRouterStateChild, dynamicDataChild, dynamicHead);
            }
        }
    // We didn't find a child task that matches the server data. We won't abort
    // the task, though, because a different FlightDataPath may be able to
    // fulfill it (see loop in listenForDynamicRequest). We only abort tasks
    // once we've run out of data.
    }
}
function createPendingCacheNode(routerState, prefetchData, prefetchHead) {
    const routerStateChildren = routerState[1];
    const prefetchDataChildren = prefetchData !== null ? prefetchData[1] : null;
    const parallelRoutes = new Map();
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
        const segmentChild = routerStateChild[0];
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const newCacheNodeChild = createPendingCacheNode(routerStateChild, prefetchDataChild === undefined ? null : prefetchDataChild, prefetchHead);
        const newSegmentMapChild = new Map();
        newSegmentMapChild.set(segmentKeyChild, newCacheNodeChild);
        parallelRoutes.set(parallelRouteKey, newSegmentMapChild);
    }
    // The head is assigned to every leaf segment delivered by the server. Based
    // on corresponding logic in fill-lazy-items-till-leaf-with-head.ts
    const isLeafSegment = parallelRoutes.size === 0;
    const maybePrefetchRsc = prefetchData !== null ? prefetchData[2] : null;
    const maybePrefetchLoading = prefetchData !== null ? prefetchData[3] : null;
    return {
        lazyData: null,
        parallelRoutes: parallelRoutes,
        prefetchRsc: maybePrefetchRsc !== undefined ? maybePrefetchRsc : null,
        prefetchHead: isLeafSegment ? prefetchHead : null,
        loading: maybePrefetchLoading !== undefined ? maybePrefetchLoading : null,
        // Create a deferred promise. This will be fulfilled once the dynamic
        // response is received from the server.
        rsc: createDeferredRsc(),
        head: isLeafSegment ? createDeferredRsc() : null,
        lazyDataResolved: false
    };
}
function finishPendingCacheNode(cacheNode, taskState, serverState, dynamicData, dynamicHead) {
    // Writes a dynamic response into an existing Cache Node tree. This does _not_
    // create a new tree, it updates the existing tree in-place. So it must follow
    // the Suspense rules of cache safety — it can resolve pending promises, but
    // it cannot overwrite existing data. It can add segments to the tree (because
    // a missing segment will cause the layout router to suspend).
    // but it cannot delete them.
    //
    // We must resolve every promise in the tree, or else it will suspend
    // indefinitely. If we did not receive data for a segment, we will resolve its
    // data promise to `null` to trigger a lazy fetch during render.
    const taskStateChildren = taskState[1];
    const serverStateChildren = serverState[1];
    const dataChildren = dynamicData[1];
    // The router state that we traverse the tree with (taskState) is the same one
    // that we used to construct the pending Cache Node tree. That way we're sure
    // to resolve all the pending promises.
    const parallelRoutes = cacheNode.parallelRoutes;
    for(let parallelRouteKey in taskStateChildren){
        const taskStateChild = taskStateChildren[parallelRouteKey];
        const serverStateChild = serverStateChildren[parallelRouteKey];
        const dataChild = dataChildren[parallelRouteKey];
        const segmentMapChild = parallelRoutes.get(parallelRouteKey);
        const taskSegmentChild = taskStateChild[0];
        const taskSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(taskSegmentChild);
        const cacheNodeChild = segmentMapChild !== undefined ? segmentMapChild.get(taskSegmentKeyChild) : undefined;
        if (cacheNodeChild !== undefined) {
            if (serverStateChild !== undefined && (0, _matchsegments.matchSegment)(taskSegmentChild, serverStateChild[0])) {
                if (dataChild !== undefined && dataChild !== null) {
                    // This is the happy path. Recursively update all the children.
                    finishPendingCacheNode(cacheNodeChild, taskStateChild, serverStateChild, dataChild, dynamicHead);
                } else {
                    // The server never returned data for this segment. Trigger a lazy
                    // fetch during render. This shouldn't happen because the Route Tree
                    // and the Seed Data tree sent by the server should always be the same
                    // shape when part of the same server response.
                    abortPendingCacheNode(taskStateChild, cacheNodeChild, null);
                }
            } else {
                // The server never returned data for this segment. Trigger a lazy
                // fetch during render.
                abortPendingCacheNode(taskStateChild, cacheNodeChild, null);
            }
        } else {
        // The server response matches what was expected to receive, but there's
        // no matching Cache Node in the task tree. This is a bug in the
        // implementation because we should have created a node for every
        // segment in the tree that's associated with this task.
        }
    }
    // Use the dynamic data from the server to fulfill the deferred RSC promise
    // on the Cache Node.
    const rsc = cacheNode.rsc;
    const dynamicSegmentData = dynamicData[2];
    if (rsc === null) {
        // This is a lazy cache node. We can overwrite it. This is only safe
        // because we know that the LayoutRouter suspends if `rsc` is `null`.
        cacheNode.rsc = dynamicSegmentData;
    } else if (isDeferredRsc(rsc)) {
        // This is a deferred RSC promise. We can fulfill it with the data we just
        // received from the server. If it was already resolved by a different
        // navigation, then this does nothing because we can't overwrite data.
        rsc.resolve(dynamicSegmentData);
    } else {
    // This is not a deferred RSC promise, nor is it empty, so it must have
    // been populated by a different navigation. We must not overwrite it.
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved with the dynamic head from
    // the server.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(dynamicHead);
    }
}
function abortTask(task, error) {
    const cacheNode = task.node;
    if (cacheNode === null) {
        // This indicates the task is already complete.
        return;
    }
    const taskChildren = task.children;
    if (taskChildren === null) {
        // Reached the leaf task node. This is the root of a pending cache
        // node tree.
        abortPendingCacheNode(task.route, cacheNode, error);
    } else {
        // This is an intermediate task node. Keep traversing until we reach a
        // task node with no children. That will be the root of the cache node tree
        // that needs to be resolved.
        for (const taskChild of taskChildren.values()){
            abortTask(taskChild, error);
        }
    }
    // Null this out to indicate that the task is complete.
    task.node = null;
}
function abortPendingCacheNode(routerState, cacheNode, error) {
    // For every pending segment in the tree, resolve its `rsc` promise to `null`
    // to trigger a lazy fetch during render.
    //
    // Or, if an error object is provided, it will error instead.
    const routerStateChildren = routerState[1];
    const parallelRoutes = cacheNode.parallelRoutes;
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const segmentMapChild = parallelRoutes.get(parallelRouteKey);
        if (segmentMapChild === undefined) {
            continue;
        }
        const segmentChild = routerStateChild[0];
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const cacheNodeChild = segmentMapChild.get(segmentKeyChild);
        if (cacheNodeChild !== undefined) {
            abortPendingCacheNode(routerStateChild, cacheNodeChild, error);
        } else {
        // This shouldn't happen because we're traversing the same tree that was
        // used to construct the cache nodes in the first place.
        }
    }
    const rsc = cacheNode.rsc;
    if (isDeferredRsc(rsc)) {
        if (error === null) {
            // This will trigger a lazy fetch during render.
            rsc.resolve(null);
        } else {
            // This will trigger an error during rendering.
            rsc.reject(error);
        }
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved. If an error was provided, we
    // will not resolve it with an error, since this is rendered at the root of
    // the app. We want the segment to error, not the entire app.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(null);
    }
}
function updateCacheNodeOnPopstateRestoration(oldCacheNode, routerState) {
    // A popstate navigation reads data from the local cache. It does not issue
    // new network requests (unless the cache entries have been evicted). So, we
    // update the cache to drop the prefetch  data for any segment whose dynamic
    // data was already received. This prevents an unnecessary flash back to PPR
    // state during a back/forward navigation.
    //
    // This function clones the entire cache node tree and sets the `prefetchRsc`
    // field to `null` to prevent it from being rendered. We can't mutate the node
    // in place because this is a concurrent data structure.
    const routerStateChildren = routerState[1];
    const oldParallelRoutes = oldCacheNode.parallelRoutes;
    const newParallelRoutes = new Map(oldParallelRoutes);
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const segmentChild = routerStateChild[0];
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const oldSegmentMapChild = oldParallelRoutes.get(parallelRouteKey);
        if (oldSegmentMapChild !== undefined) {
            const oldCacheNodeChild = oldSegmentMapChild.get(segmentKeyChild);
            if (oldCacheNodeChild !== undefined) {
                const newCacheNodeChild = updateCacheNodeOnPopstateRestoration(oldCacheNodeChild, routerStateChild);
                const newSegmentMapChild = new Map(oldSegmentMapChild);
                newSegmentMapChild.set(segmentKeyChild, newCacheNodeChild);
                newParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
            }
        }
    }
    // Only show prefetched data if the dynamic data is still pending.
    //
    // Tehnically, what we're actually checking is whether the dynamic network
    // response was received. But since it's a streaming response, this does not
    // mean that all the dynamic data has fully streamed in. It just means that
    // _some_ of the dynamic data was received. But as a heuristic, we assume that
    // the rest dynamic data will stream in quickly, so it's still better to skip
    // the prefetch state.
    const rsc = oldCacheNode.rsc;
    const shouldUsePrefetch = isDeferredRsc(rsc) && rsc.status === "pending";
    return {
        lazyData: null,
        rsc,
        head: oldCacheNode.head,
        prefetchHead: shouldUsePrefetch ? oldCacheNode.prefetchHead : null,
        prefetchRsc: shouldUsePrefetch ? oldCacheNode.prefetchRsc : null,
        loading: shouldUsePrefetch ? oldCacheNode.loading : null,
        // These are the cloned children we computed above
        parallelRoutes: newParallelRoutes,
        lazyDataResolved: false
    };
}
const DEFERRED = Symbol();
// This type exists to distinguish a DeferredRsc from a Flight promise. It's a
// compromise to avoid adding an extra field on every Cache Node, which would be
// awkward because the pre-PPR parts of codebase would need to account for it,
// too. We can remove it once type Cache Node type is more settled.
function isDeferredRsc(value) {
    return value && value.tag === DEFERRED;
}
function createDeferredRsc() {
    let resolve;
    let reject;
    const pendingRsc = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    pendingRsc.status = "pending";
    pendingRsc.resolve = (value)=>{
        if (pendingRsc.status === "pending") {
            const fulfilledRsc = pendingRsc;
            fulfilledRsc.status = "fulfilled";
            fulfilledRsc.value = value;
            resolve(value);
        }
    };
    pendingRsc.reject = (error)=>{
        if (pendingRsc.status === "pending") {
            const rejectedRsc = pendingRsc;
            rejectedRsc.status = "rejected";
            rejectedRsc.reason = error;
            reject(error);
        }
    };
    pendingRsc.tag = DEFERRED;
    return pendingRsc;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ppr-navigations.js.map


/***/ }),

/***/ 6004:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrefetchCacheEntryForInitialLoad: function() {
        return createPrefetchCacheEntryForInitialLoad;
    },
    getOrCreatePrefetchCacheEntry: function() {
        return getOrCreatePrefetchCacheEntry;
    },
    prunePrefetchCache: function() {
        return prunePrefetchCache;
    }
});
const _createhreffromurl = __webpack_require__(3174);
const _fetchserverresponse = __webpack_require__(1283);
const _routerreducertypes = __webpack_require__(1507);
const _prefetchreducer = __webpack_require__(9218);
/**
 * Creates a cache key for the router prefetch cache
 *
 * @param url - The URL being navigated to
 * @param nextUrl - an internal URL, primarily used for handling rewrites. Defaults to '/'.
 * @return The generated prefetch cache key.
 */ function createPrefetchCacheKey(url, nextUrl) {
    const pathnameFromUrl = (0, _createhreffromurl.createHrefFromUrl)(url, false);
    // nextUrl is used as a cache key delimiter since entries can vary based on the Next-URL header
    if (nextUrl) {
        return nextUrl + "%" + pathnameFromUrl;
    }
    return pathnameFromUrl;
}
function getOrCreatePrefetchCacheEntry(param) {
    let { url, nextUrl, tree, buildId, prefetchCache, kind } = param;
    let existingCacheEntry = undefined;
    // We first check if there's a more specific interception route prefetch entry
    // This is because when we detect a prefetch that corresponds with an interception route, we prefix it with nextUrl (see `createPrefetchCacheKey`)
    // to avoid conflicts with other pages that may have the same URL but render different things depending on the `Next-URL` header.
    const interceptionCacheKey = createPrefetchCacheKey(url, nextUrl);
    const interceptionData = prefetchCache.get(interceptionCacheKey);
    if (interceptionData) {
        existingCacheEntry = interceptionData;
    } else {
        // If we dont find a more specific interception route prefetch entry, we check for a regular prefetch entry
        const prefetchCacheKey = createPrefetchCacheKey(url);
        const prefetchData = prefetchCache.get(prefetchCacheKey);
        if (prefetchData) {
            existingCacheEntry = prefetchData;
        }
    }
    if (existingCacheEntry) {
        // Grab the latest status of the cache entry and update it
        existingCacheEntry.status = getPrefetchEntryCacheStatus(existingCacheEntry);
        // when `kind` is provided, an explicit prefetch was requested.
        // if the requested prefetch is "full" and the current cache entry wasn't, we want to re-prefetch with the new intent
        const switchedToFullPrefetch = existingCacheEntry.kind !== _routerreducertypes.PrefetchKind.FULL && kind === _routerreducertypes.PrefetchKind.FULL;
        if (switchedToFullPrefetch) {
            return createLazyPrefetchEntry({
                tree,
                url,
                buildId,
                nextUrl,
                prefetchCache,
                // If we didn't get an explicit prefetch kind, we want to set a temporary kind
                // rather than assuming the same intent as the previous entry, to be consistent with how we
                // lazily create prefetch entries when intent is left unspecified.
                kind: kind != null ? kind : _routerreducertypes.PrefetchKind.TEMPORARY
            });
        }
        // If the existing cache entry was marked as temporary, it means it was lazily created when attempting to get an entry,
        // where we didn't have the prefetch intent. Now that we have the intent (in `kind`), we want to update the entry to the more accurate kind.
        if (kind && existingCacheEntry.kind === _routerreducertypes.PrefetchKind.TEMPORARY) {
            existingCacheEntry.kind = kind;
        }
        // We've determined that the existing entry we found is still valid, so we return it.
        return existingCacheEntry;
    }
    // If we didn't return an entry, create a new one.
    return createLazyPrefetchEntry({
        tree,
        url,
        buildId,
        nextUrl,
        prefetchCache,
        kind: kind || // in dev, there's never gonna be a prefetch entry so we want to prefetch here
        ( false ? 0 : _routerreducertypes.PrefetchKind.TEMPORARY)
    });
}
/*
 * Used to take an existing cache entry and prefix it with the nextUrl, if it exists.
 * This ensures that we don't have conflicting cache entries for the same URL (as is the case with route interception).
 */ function prefixExistingPrefetchCacheEntry(param) {
    let { url, nextUrl, prefetchCache } = param;
    const existingCacheKey = createPrefetchCacheKey(url);
    const existingCacheEntry = prefetchCache.get(existingCacheKey);
    if (!existingCacheEntry) {
        // no-op -- there wasn't an entry to move
        return;
    }
    const newCacheKey = createPrefetchCacheKey(url, nextUrl);
    prefetchCache.set(newCacheKey, existingCacheEntry);
    prefetchCache.delete(existingCacheKey);
}
function createPrefetchCacheEntryForInitialLoad(param) {
    let { nextUrl, tree, prefetchCache, url, kind, data } = param;
    const [, , , intercept] = data;
    // if the prefetch corresponds with an interception route, we use the nextUrl to prefix the cache key
    const prefetchCacheKey = intercept ? createPrefetchCacheKey(url, nextUrl) : createPrefetchCacheKey(url);
    const prefetchEntry = {
        treeAtTimeOfPrefetch: tree,
        data: Promise.resolve(data),
        kind,
        prefetchTime: Date.now(),
        lastUsedTime: Date.now(),
        key: prefetchCacheKey,
        status: _routerreducertypes.PrefetchCacheEntryStatus.fresh
    };
    prefetchCache.set(prefetchCacheKey, prefetchEntry);
    return prefetchEntry;
}
/**
 * Creates a prefetch entry entry and enqueues a fetch request to retrieve the data.
 */ function createLazyPrefetchEntry(param) {
    let { url, kind, tree, nextUrl, buildId, prefetchCache } = param;
    const prefetchCacheKey = createPrefetchCacheKey(url);
    // initiates the fetch request for the prefetch and attaches a listener
    // to the promise to update the prefetch cache entry when the promise resolves (if necessary)
    const data = _prefetchreducer.prefetchQueue.enqueue(()=>(0, _fetchserverresponse.fetchServerResponse)(url, tree, nextUrl, buildId, kind).then((prefetchResponse)=>{
            // TODO: `fetchServerResponse` should be more tighly coupled to these prefetch cache operations
            // to avoid drift between this cache key prefixing logic
            // (which is currently directly influenced by the server response)
            const [, , , intercepted] = prefetchResponse;
            if (intercepted) {
                prefixExistingPrefetchCacheEntry({
                    url,
                    nextUrl,
                    prefetchCache
                });
            }
            return prefetchResponse;
        }));
    const prefetchEntry = {
        treeAtTimeOfPrefetch: tree,
        data,
        kind,
        prefetchTime: Date.now(),
        lastUsedTime: null,
        key: prefetchCacheKey,
        status: _routerreducertypes.PrefetchCacheEntryStatus.fresh
    };
    prefetchCache.set(prefetchCacheKey, prefetchEntry);
    return prefetchEntry;
}
function prunePrefetchCache(prefetchCache) {
    for (const [href, prefetchCacheEntry] of prefetchCache){
        if (getPrefetchEntryCacheStatus(prefetchCacheEntry) === _routerreducertypes.PrefetchCacheEntryStatus.expired) {
            prefetchCache.delete(href);
        }
    }
}
// These values are set by `define-env-plugin` (based on `nextConfig.experimental.staleTimes`)
// and default to 5 minutes (static) / 30 seconds (dynamic)
const DYNAMIC_STALETIME_MS = Number("30") * 1000;
const STATIC_STALETIME_MS = Number("300") * 1000;
function getPrefetchEntryCacheStatus(param) {
    let { kind, prefetchTime, lastUsedTime } = param;
    // We will re-use the cache entry data for up to the `dynamic` staletime window.
    if (Date.now() < (lastUsedTime != null ? lastUsedTime : prefetchTime) + DYNAMIC_STALETIME_MS) {
        return lastUsedTime ? _routerreducertypes.PrefetchCacheEntryStatus.reusable : _routerreducertypes.PrefetchCacheEntryStatus.fresh;
    }
    // For "auto" prefetching, we'll re-use only the loading boundary for up to `static` staletime window.
    // A stale entry will only re-use the `loading` boundary, not the full data.
    // This will trigger a "lazy fetch" for the full data.
    if (kind === "auto") {
        if (Date.now() < prefetchTime + STATIC_STALETIME_MS) {
            return _routerreducertypes.PrefetchCacheEntryStatus.stale;
        }
    }
    // for "full" prefetching, we'll re-use the cache entry data for up to `static` staletime window.
    if (kind === "full") {
        if (Date.now() < prefetchTime + STATIC_STALETIME_MS) {
            return _routerreducertypes.PrefetchCacheEntryStatus.reusable;
        }
    }
    return _routerreducertypes.PrefetchCacheEntryStatus.expired;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-cache-utils.js.map


/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fastRefreshReducer", ({
    enumerable: true,
    get: function() {
        return fastRefreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(1283);
const _createhreffromurl = __webpack_require__(3174);
const _applyrouterstatepatchtotree = __webpack_require__(9684);
const _isnavigatingtonewrootlayout = __webpack_require__(139);
const _navigatereducer = __webpack_require__(1294);
const _handlemutable = __webpack_require__(6416);
const _applyflightdata = __webpack_require__(9607);
const _approuter = __webpack_require__(5751);
const _handlesegmentmismatch = __webpack_require__(774);
const _hasinterceptionrouteincurrenttree = __webpack_require__(5914);
// A version of refresh reducer that keeps the cache around instead of wiping all of it.
function fastRefreshReducerImpl(state, action) {
    const { origin } = action;
    const mutable = {};
    const href = state.canonicalUrl;
    mutable.preserveCustomHistoryState = false;
    const cache = (0, _approuter.createEmptyCacheNode)();
    // If the current tree was intercepted, the nextUrl should be included in the request.
    // This is to ensure that the refresh request doesn't get intercepted, accidentally triggering the interception route.
    const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree);
    // TODO-APP: verify that `href` is not an external url.
    // Fetch data from the root of the tree.
    cache.lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
        state.tree[0],
        state.tree[1],
        state.tree[2],
        "refetch"
    ], includeNextUrl ? state.nextUrl : null, state.buildId);
    return cache.lazyData.then((param)=>{
        let [flightData, canonicalUrlOverride] = param;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.lazyData as it has been resolved at this point.
        cache.lazyData = null;
        let currentTree = state.tree;
        let currentCache = state.cache;
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("REFRESH FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and rsc for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch, state.canonicalUrl);
            if (newTree === null) {
                return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
            if (canonicalUrlOverride) {
                mutable.canonicalUrl = canonicalUrlOverrideHref;
            }
            const applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
            if (applied) {
                mutable.cache = cache;
                currentCache = cache;
            }
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
function fastRefreshReducerNoop(state, _action) {
    return state;
}
const fastRefreshReducer =  true ? fastRefreshReducerNoop : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fast-refresh-reducer.js.map


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "findHeadInCache", ({
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
}));
const _createroutercachekey = __webpack_require__(1784);
function findHeadInCache(cache, parallelRoutes) {
    return findHeadInCacheImpl(cache, parallelRoutes, "");
}
function findHeadInCacheImpl(cache, parallelRoutes, keyPrefix) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        // Returns the entire Cache Node of the segment whose head we will render.
        return [
            cache,
            keyPrefix
        ];
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCacheImpl(cacheNode, childParallelRoutes, keyPrefix + "/" + cacheKey);
        if (item) {
            return item;
        }
    }
    return null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map


/***/ }),

/***/ 4640:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 5914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hasInterceptionRouteInCurrentTree", ({
    enumerable: true,
    get: function() {
        return hasInterceptionRouteInCurrentTree;
    }
}));
const _interceptionroutes = __webpack_require__(2269);
function hasInterceptionRouteInCurrentTree(param) {
    let [segment, parallelRoutes] = param;
    // If we have a dynamic segment, it's marked as an interception route by the presence of the `i` suffix.
    if (Array.isArray(segment) && (segment[2] === "di" || segment[2] === "ci")) {
        return true;
    }
    // If segment is not an array, apply the existing string-based check
    if (typeof segment === "string" && (0, _interceptionroutes.isInterceptionRouteAppPath)(segment)) {
        return true;
    }
    // Iterate through parallelRoutes if they exist
    if (parallelRoutes) {
        for(const key in parallelRoutes){
            if (hasInterceptionRouteInCurrentTree(parallelRoutes[key])) {
                return true;
            }
        }
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-interception-route-in-current-tree.js.map


/***/ }),

/***/ 1294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _fetchserverresponse = __webpack_require__(1283);
const _createhreffromurl = __webpack_require__(3174);
const _invalidatecachebelowflightsegmentpath = __webpack_require__(9863);
const _applyrouterstatepatchtotree = __webpack_require__(9684);
const _shouldhardnavigate = __webpack_require__(4740);
const _isnavigatingtonewrootlayout = __webpack_require__(139);
const _routerreducertypes = __webpack_require__(1507);
const _handlemutable = __webpack_require__(6416);
const _applyflightdata = __webpack_require__(9607);
const _prefetchreducer = __webpack_require__(9218);
const _approuter = __webpack_require__(5751);
const _segment = __webpack_require__(0);
const _pprnavigations = __webpack_require__(3060);
const _prefetchcacheutils = __webpack_require__(6004);
const _clearcachenodedataforsegmentpath = __webpack_require__(9559);
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === "") {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function triggerLazyFetchForLeafSegments(newCache, currentCache, flightSegmentPath, treePatch) {
    let appliedPatch = false;
    newCache.rsc = currentCache.rsc;
    newCache.prefetchRsc = currentCache.prefetchRsc;
    newCache.loading = currentCache.loading;
    newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
    const segmentPathsToFill = generateSegmentsFromPatch(treePatch).map((segment)=>[
            ...flightSegmentPath,
            ...segment
        ]);
    for (const segmentPaths of segmentPathsToFill){
        (0, _clearcachenodedataforsegmentpath.clearCacheNodeDataForSegmentPath)(newCache, currentCache, segmentPaths);
        appliedPatch = true;
    }
    return appliedPatch;
}
const navigateReducer =  false ? 0 : navigateReducer_noPPR;
// This is the implementation when PPR is disabled. We can assume its behavior
// is relatively stable because it's been running in production for a while.
function navigateReducer_noPPR(state, action) {
    const { url, isExternalUrl, navigateType, shouldScroll } = action;
    const mutable = {};
    const { hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _prefetchcacheutils.prunePrefetchCache)(state.prefetchCache);
    mutable.preserveCustomHistoryState = false;
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    const prefetchValues = (0, _prefetchcacheutils.getOrCreatePrefetchCacheEntry)({
        url,
        nextUrl: state.nextUrl,
        tree: state.tree,
        buildId: state.buildId,
        prefetchCache: state.prefetchCache
    });
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    return data.then((param)=>{
        let [flightData, canonicalUrlOverride] = param;
        let isFirstRead = false;
        // we only want to mark this once
        if (!prefetchValues.lastUsedTime) {
            // important: we should only mark the cache node as dirty after we unsuspend from the call above
            prefetchValues.lastUsedTime = Date.now();
            isFirstRead = true;
        }
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return handleExternalUrl(state, mutable, flightData, pendingPush);
        }
        // Handles case where `<meta http-equiv="refresh">` tag is present,
        // which will trigger an MPA navigation.
        if (document.getElementById("__next-page-redirect")) {
            return handleExternalUrl(state, mutable, href, pendingPush);
        }
        let currentTree = state.tree;
        let currentCache = state.cache;
        let scrollableSegments = [];
        for (const flightDataPath of flightData){
            const flightSegmentPath = flightDataPath.slice(0, -4);
            // The one before last item is the router state tree patch
            const treePatch = flightDataPath.slice(-3)[0];
            // TODO-APP: remove ''
            const flightSegmentPathWithLeadingEmpty = [
                "",
                ...flightSegmentPath
            ];
            // Create new tree based on the flightSegmentPath and router state patch
            let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch, href);
            // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
            // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
            if (newTree === null) {
                newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch, href);
            }
            if (newTree !== null) {
                if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                    return handleExternalUrl(state, mutable, href, pendingPush);
                }
                const cache = (0, _approuter.createEmptyCacheNode)();
                let applied = false;
                if (prefetchValues.status === _routerreducertypes.PrefetchCacheEntryStatus.stale && !isFirstRead) {
                    // When we have a stale prefetch entry, we only want to re-use the loading state of the route we're navigating to, to support instant loading navigations
                    // this will trigger a lazy fetch for the actual page data by nulling the `rsc` and `prefetchRsc` values for page data,
                    // while copying over the `loading` for the segment that contains the page data.
                    // We only do this on subsequent reads, as otherwise there'd be no loading data to re-use.
                    applied = triggerLazyFetchForLeafSegments(cache, currentCache, flightSegmentPath, treePatch);
                    // since we re-used the stale cache's loading state & refreshed the data,
                    // update the `lastUsedTime` so that it can continue to be re-used for the next 30s
                    prefetchValues.lastUsedTime = Date.now();
                } else {
                    applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, prefetchValues);
                }
                const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
                if (hardNavigate) {
                    // Copy rsc for the root node of the cache.
                    cache.rsc = currentCache.rsc;
                    cache.prefetchRsc = currentCache.prefetchRsc;
                    (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                    // Ensure the existing cache value is used when the cache was not invalidated.
                    mutable.cache = cache;
                } else if (applied) {
                    mutable.cache = cache;
                    // If we applied the cache, we update the "current cache" value so any other
                    // segments in the FlightDataPath will be able to reference the updated cache.
                    currentCache = cache;
                }
                currentTree = newTree;
                for (const subSegment of generateSegmentsFromPatch(treePatch)){
                    const scrollableSegmentPath = [
                        ...flightSegmentPath,
                        ...subSegment
                    ];
                    // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                    if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== _segment.DEFAULT_SEGMENT_KEY) {
                        scrollableSegments.push(scrollableSegmentPath);
                    }
                }
            }
        }
        mutable.patchedTree = currentTree;
        mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
        mutable.pendingPush = pendingPush;
        mutable.scrollableSegments = scrollableSegments;
        mutable.hashFragment = hash;
        mutable.shouldScroll = shouldScroll;
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
// This is the experimental PPR implementation. It's closer to the behavior we
// want, but is likelier to include accidental regressions because it rewrites
// existing functionality.
function navigateReducer_PPR(state, action) {
    const { url, isExternalUrl, navigateType, shouldScroll } = action;
    const mutable = {};
    const { hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _prefetchcacheutils.prunePrefetchCache)(state.prefetchCache);
    mutable.preserveCustomHistoryState = false;
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    const prefetchValues = (0, _prefetchcacheutils.getOrCreatePrefetchCacheEntry)({
        url,
        nextUrl: state.nextUrl,
        tree: state.tree,
        buildId: state.buildId,
        prefetchCache: state.prefetchCache
    });
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    return data.then((param)=>{
        let [flightData, canonicalUrlOverride, _postponed] = param;
        let isFirstRead = false;
        // we only want to mark this once
        if (!prefetchValues.lastUsedTime) {
            // important: we should only mark the cache node as dirty after we unsuspend from the call above
            prefetchValues.lastUsedTime = Date.now();
            isFirstRead = true;
        }
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return handleExternalUrl(state, mutable, flightData, pendingPush);
        }
        // Handles case where `<meta http-equiv="refresh">` tag is present,
        // which will trigger an MPA navigation.
        if (document.getElementById("__next-page-redirect")) {
            return handleExternalUrl(state, mutable, href, pendingPush);
        }
        let currentTree = state.tree;
        let currentCache = state.cache;
        let scrollableSegments = [];
        // TODO: In practice, this is always a single item array. We probably
        // aren't going to every send multiple segments, at least not in this
        // format. So we could remove the extra wrapper for now until
        // that settles.
        for (const flightDataPath of flightData){
            const flightSegmentPath = flightDataPath.slice(0, -4);
            // The one before last item is the router state tree patch
            const treePatch = flightDataPath.slice(-3)[0];
            // TODO-APP: remove ''
            const flightSegmentPathWithLeadingEmpty = [
                "",
                ...flightSegmentPath
            ];
            // Create new tree based on the flightSegmentPath and router state patch
            let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch, href);
            // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
            // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
            if (newTree === null) {
                newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch, href);
            }
            if (newTree !== null) {
                if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                    return handleExternalUrl(state, mutable, href, pendingPush);
                }
                if (// will always send back a static response that's rendered from
                // the root. If for some reason it doesn't, we fall back to the
                // non-PPR implementation.
                // TODO: We should get rid of the else branch and do all navigations
                // via updateCacheNodeOnNavigation. The current structure is just
                // an incremental step.
                flightDataPath.length === 3) {
                    const prefetchedTree = flightDataPath[0];
                    const seedData = flightDataPath[1];
                    const head = flightDataPath[2];
                    const task = (0, _pprnavigations.updateCacheNodeOnNavigation)(currentCache, currentTree, prefetchedTree, seedData, head);
                    if (task !== null && task.node !== null) {
                        // We've created a new Cache Node tree that contains a prefetched
                        // version of the next page. This can be rendered instantly.
                        // Use the tree computed by updateCacheNodeOnNavigation instead
                        // of the one computed by applyRouterStatePatchToTree.
                        // TODO: We should remove applyRouterStatePatchToTree
                        // from the PPR path entirely.
                        const patchedRouterState = task.route;
                        newTree = patchedRouterState;
                        const newCache = task.node;
                        // The prefetched tree has dynamic holes in it. We initiate a
                        // dynamic request to fill them in.
                        //
                        // Do not block on the result. We'll immediately render the Cache
                        // Node tree and suspend on the dynamic parts. When the request
                        // comes in, we'll fill in missing data and ping React to
                        // re-render. Unlike the lazy fetching model in the non-PPR
                        // implementation, this is modeled as a single React update +
                        // streaming, rather than multiple top-level updates. (However,
                        // even in the new model, we'll still need to sometimes update the
                        // root multiple times per navigation, like if the server sends us
                        // a different response than we expected. For now, we revert back
                        // to the lazy fetching mechanism in that case.)
                        (0, _pprnavigations.listenForDynamicRequest)(task, (0, _fetchserverresponse.fetchServerResponse)(url, currentTree, state.nextUrl, state.buildId));
                        mutable.cache = newCache;
                    } else {
                        // Nothing changed, so reuse the old cache.
                        // TODO: What if the head changed but not any of the segment data?
                        // Is that possible? If so, we should clone the whole tree and
                        // update the head.
                        newTree = prefetchedTree;
                    }
                } else {
                    // The static response does not include any dynamic holes, so
                    // there's no need to do a second request.
                    // TODO: As an incremental step this just reverts back to the
                    // non-PPR implementation. We can simplify this branch further,
                    // given that PPR prefetches are always static and return the whole
                    // tree. Or in the meantime we could factor it out into a
                    // separate function.
                    const cache = (0, _approuter.createEmptyCacheNode)();
                    let applied = false;
                    if (prefetchValues.status === _routerreducertypes.PrefetchCacheEntryStatus.stale && !isFirstRead) {
                        // When we have a stale prefetch entry, we only want to re-use the loading state of the route we're navigating to, to support instant loading navigations
                        // this will trigger a lazy fetch for the actual page data by nulling the `rsc` and `prefetchRsc` values for page data,
                        // while copying over the `loading` for the segment that contains the page data.
                        // We only do this on subsequent reads, as otherwise there'd be no loading data to re-use.
                        applied = triggerLazyFetchForLeafSegments(cache, currentCache, flightSegmentPath, treePatch);
                        // since we re-used the stale cache's loading state & refreshed the data,
                        // update the `lastUsedTime` so that it can continue to be re-used for the next 30s
                        prefetchValues.lastUsedTime = Date.now();
                    } else {
                        applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, prefetchValues);
                    }
                    const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
                    if (hardNavigate) {
                        // Copy rsc for the root node of the cache.
                        cache.rsc = currentCache.rsc;
                        cache.prefetchRsc = currentCache.prefetchRsc;
                        (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                        // Ensure the existing cache value is used when the cache was not invalidated.
                        mutable.cache = cache;
                    } else if (applied) {
                        mutable.cache = cache;
                        // If we applied the cache, we update the "current cache" value so any other
                        // segments in the FlightDataPath will be able to reference the updated cache.
                        currentCache = cache;
                    }
                }
                currentTree = newTree;
                for (const subSegment of generateSegmentsFromPatch(treePatch)){
                    const scrollableSegmentPath = [
                        ...flightSegmentPath,
                        ...subSegment
                    ];
                    // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                    if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== _segment.DEFAULT_SEGMENT_KEY) {
                        scrollableSegments.push(scrollableSegmentPath);
                    }
                }
            }
        }
        mutable.patchedTree = currentTree;
        mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
        mutable.pendingPush = pendingPush;
        mutable.scrollableSegments = scrollableSegments;
        mutable.hashFragment = hash;
        mutable.shouldScroll = shouldScroll;
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map


/***/ }),

/***/ 9218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    prefetchQueue: function() {
        return prefetchQueue;
    },
    prefetchReducer: function() {
        return prefetchReducer;
    }
});
const _approuterheaders = __webpack_require__(7325);
const _promisequeue = __webpack_require__(3858);
const _prefetchcacheutils = __webpack_require__(6004);
const prefetchQueue = new _promisequeue.PromiseQueue(5);
function prefetchReducer(state, action) {
    // let's prune the prefetch cache before we do anything else
    (0, _prefetchcacheutils.prunePrefetchCache)(state.prefetchCache);
    const { url } = action;
    url.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    (0, _prefetchcacheutils.getOrCreatePrefetchCacheEntry)({
        url,
        nextUrl: state.nextUrl,
        prefetchCache: state.prefetchCache,
        kind: action.kind,
        tree: state.tree,
        buildId: state.buildId
    });
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map


/***/ }),

/***/ 5239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "refreshReducer", ({
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(1283);
const _createhreffromurl = __webpack_require__(3174);
const _applyrouterstatepatchtotree = __webpack_require__(9684);
const _isnavigatingtonewrootlayout = __webpack_require__(139);
const _navigatereducer = __webpack_require__(1294);
const _handlemutable = __webpack_require__(6416);
const _filllazyitemstillleafwithhead = __webpack_require__(3821);
const _approuter = __webpack_require__(5751);
const _handlesegmentmismatch = __webpack_require__(774);
const _hasinterceptionrouteincurrenttree = __webpack_require__(5914);
const _refetchinactiveparallelsegments = __webpack_require__(4922);
function refreshReducer(state, action) {
    const { origin } = action;
    const mutable = {};
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    mutable.preserveCustomHistoryState = false;
    const cache = (0, _approuter.createEmptyCacheNode)();
    // If the current tree was intercepted, the nextUrl should be included in the request.
    // This is to ensure that the refresh request doesn't get intercepted, accidentally triggering the interception route.
    const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree);
    // TODO-APP: verify that `href` is not an external url.
    // Fetch data from the root of the tree.
    cache.lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
        currentTree[0],
        currentTree[1],
        currentTree[2],
        "refetch"
    ], includeNextUrl ? state.nextUrl : null, state.buildId);
    return cache.lazyData.then(async (param)=>{
        let [flightData, canonicalUrlOverride] = param;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.lazyData as it has been resolved at this point.
        cache.lazyData = null;
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("REFRESH FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and rsc for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch, state.canonicalUrl);
            if (newTree === null) {
                return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
            if (canonicalUrlOverride) {
                mutable.canonicalUrl = canonicalUrlOverrideHref;
            }
            // The one before last item is the router state tree patch
            const [cacheNodeSeedData, head] = flightDataPath.slice(-2);
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (cacheNodeSeedData !== null) {
                const rsc = cacheNodeSeedData[2];
                cache.rsc = rsc;
                cache.prefetchRsc = null;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, cacheNodeSeedData, head);
                mutable.prefetchCache = new Map();
            }
            await (0, _refetchinactiveparallelsegments.refreshInactiveParallelSegments)({
                state,
                updatedTree: newTree,
                updatedCache: cache,
                includeNextUrl,
                canonicalUrl: mutable.canonicalUrl || state.canonicalUrl
            });
            mutable.cache = cache;
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map


/***/ }),

/***/ 6131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "restoreReducer", ({
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
}));
const _createhreffromurl = __webpack_require__(3174);
const _computechangedpath = __webpack_require__(6626);
const _pprnavigations = __webpack_require__(3060);
function restoreReducer(state, action) {
    const { url, tree } = action;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    // This action is used to restore the router state from the history state.
    // However, it's possible that the history state no longer contains the `FlightRouterState`.
    // We will copy over the internal state on pushState/replaceState events, but if a history entry
    // occurred before hydration, or if the user navigated to a hash using a regular anchor link,
    // the history state will not contain the `FlightRouterState`.
    // In this case, we'll continue to use the existing tree so the router doesn't get into an invalid state.
    const treeToRestore = tree || state.tree;
    const oldCache = state.cache;
    const newCache =  false ? // prevents an unnecessary flash back to PPR state during a
    // back/forward navigation.
    0 : oldCache;
    var _extractPathFromFlightRouterState;
    return {
        buildId: state.buildId,
        // Set canonical url
        canonicalUrl: href,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // Ensures that the custom history state that was set is preserved when applying this update.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: state.focusAndScrollRef,
        cache: newCache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: treeToRestore,
        nextUrl: (_extractPathFromFlightRouterState = (0, _computechangedpath.extractPathFromFlightRouterState)(treeToRestore)) != null ? _extractPathFromFlightRouterState : url.pathname
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map


/***/ }),

/***/ 4549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverActionReducer", ({
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
}));
const _appcallserver = __webpack_require__(4590);
const _approuterheaders = __webpack_require__(7325);
const _addbasepath = __webpack_require__(4897);
const _createhreffromurl = __webpack_require__(3174);
const _navigatereducer = __webpack_require__(1294);
const _applyrouterstatepatchtotree = __webpack_require__(9684);
const _isnavigatingtonewrootlayout = __webpack_require__(139);
const _handlemutable = __webpack_require__(6416);
const _filllazyitemstillleafwithhead = __webpack_require__(3821);
const _approuter = __webpack_require__(5751);
const _hasinterceptionrouteincurrenttree = __webpack_require__(5914);
const _handlesegmentmismatch = __webpack_require__(774);
const _refetchinactiveparallelsegments = __webpack_require__(4922);
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { createFromFetch } from 'react-server-dom-webpack/client'
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { encodeReply } from 'react-server-dom-webpack/client'
const { createFromFetch, encodeReply } =  false ? 0 : __webpack_require__(6671);
async function fetchServerAction(state, nextUrl, param) {
    let { actionId, actionArgs } = param;
    const body = await encodeReply(actionArgs);
    const res = await fetch("", {
        method: "POST",
        headers: {
            Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
            [_approuterheaders.ACTION]: actionId,
            [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(state.tree)),
            ... false ? 0 : {},
            ...nextUrl ? {
                [_approuterheaders.NEXT_URL]: nextUrl
            } : {}
        },
        body
    });
    const location = res.headers.get("x-action-redirect");
    let revalidatedParts;
    try {
        const revalidatedHeader = JSON.parse(res.headers.get("x-action-revalidated") || "[[],0,0]");
        revalidatedParts = {
            paths: revalidatedHeader[0] || [],
            tag: !!revalidatedHeader[1],
            cookie: revalidatedHeader[2]
        };
    } catch (e) {
        revalidatedParts = {
            paths: [],
            tag: false,
            cookie: false
        };
    }
    const redirectLocation = location ? new URL((0, _addbasepath.addBasePath)(location), new URL(state.canonicalUrl, window.location.href)) : undefined;
    let isFlightResponse = res.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
    if (isFlightResponse) {
        const response = await createFromFetch(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (location) {
            // if it was a redirection, then result is just a regular RSC payload
            const [, actionFlightData] = response != null ? response : [];
            return {
                actionFlightData: actionFlightData,
                redirectLocation,
                revalidatedParts
            };
        }
        // otherwise it's a tuple of [actionResult, actionFlightData]
        const [actionResult, [, actionFlightData]] = response != null ? response : [];
        return {
            actionResult,
            actionFlightData,
            redirectLocation,
            revalidatedParts
        };
    }
    return {
        redirectLocation,
        revalidatedParts
    };
}
function serverActionReducer(state, action) {
    const { resolve, reject } = action;
    const mutable = {};
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    mutable.preserveCustomHistoryState = false;
    // only pass along the `nextUrl` param (used for interception routes) if the current route was intercepted.
    // If the route has been intercepted, the action should be as well.
    // Otherwise the server action might be intercepted with the wrong action id
    // (ie, one that corresponds with the intercepted route)
    const nextUrl = state.nextUrl && (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree) ? state.nextUrl : null;
    mutable.inFlightServerAction = fetchServerAction(state, nextUrl, action);
    return mutable.inFlightServerAction.then(async (param)=>{
        let { actionResult, actionFlightData: flightData, redirectLocation } = param;
        // Make sure the redirection is a push instead of a replace.
        // Issue: https://github.com/vercel/next.js/issues/53911
        if (redirectLocation) {
            state.pushRef.pendingPush = true;
            mutable.pendingPush = true;
        }
        if (!flightData) {
            resolve(actionResult);
            // If there is a redirect but no flight data we need to do a mpaNavigation.
            if (redirectLocation) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, redirectLocation.href, state.pushRef.pendingPush);
            }
            return state;
        }
        if (typeof flightData === "string") {
            // Handle case when navigating to page in `pages` from `app`
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.data as it has been resolved at this point.
        mutable.inFlightServerAction = null;
        if (redirectLocation) {
            const newHref = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
            mutable.canonicalUrl = newHref;
        }
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("SERVER ACTION APPLY FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and rsc for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch, redirectLocation ? (0, _createhreffromurl.createHrefFromUrl)(redirectLocation) : state.canonicalUrl);
            if (newTree === null) {
                return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            // The one before last item is the router state tree patch
            const [cacheNodeSeedData, head] = flightDataPath.slice(-2);
            const rsc = cacheNodeSeedData !== null ? cacheNodeSeedData[2] : null;
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (rsc !== null) {
                const cache = (0, _approuter.createEmptyCacheNode)();
                cache.rsc = rsc;
                cache.prefetchRsc = null;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, cacheNodeSeedData, head);
                await (0, _refetchinactiveparallelsegments.refreshInactiveParallelSegments)({
                    state,
                    updatedTree: newTree,
                    updatedCache: cache,
                    includeNextUrl: Boolean(nextUrl),
                    canonicalUrl: mutable.canonicalUrl || state.canonicalUrl
                });
                mutable.cache = cache;
                mutable.prefetchCache = new Map();
            }
            mutable.patchedTree = newTree;
            currentTree = newTree;
        }
        resolve(actionResult);
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, (e)=>{
        // When the server action is rejected we don't update the state and instead call the reject handler of the promise.
        reject(e);
        return state;
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-action-reducer.js.map


/***/ }),

/***/ 8289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverPatchReducer", ({
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
}));
const _createhreffromurl = __webpack_require__(3174);
const _applyrouterstatepatchtotree = __webpack_require__(9684);
const _isnavigatingtonewrootlayout = __webpack_require__(139);
const _navigatereducer = __webpack_require__(1294);
const _applyflightdata = __webpack_require__(9607);
const _handlemutable = __webpack_require__(6416);
const _approuter = __webpack_require__(5751);
const _handlesegmentmismatch = __webpack_require__(774);
function serverPatchReducer(state, action) {
    const { serverResponse } = action;
    const [flightData, overrideCanonicalUrl] = serverResponse;
    const mutable = {};
    mutable.preserveCustomHistoryState = false;
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
        const flightSegmentPath = flightDataPath.slice(0, -4);
        const [treePatch] = flightDataPath.slice(-3, -2);
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            "",
            ...flightSegmentPath
        ], currentTree, treePatch, state.canonicalUrl);
        if (newTree === null) {
            return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createhreffromurl.createHrefFromUrl)(overrideCanonicalUrl) : undefined;
        if (canonicalUrlOverrideHref) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        const cache = (0, _approuter.createEmptyCacheNode)();
        (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        mutable.patchedTree = newTree;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map


/***/ }),

/***/ 4922:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addRefreshMarkerToActiveParallelSegments: function() {
        return addRefreshMarkerToActiveParallelSegments;
    },
    refreshInactiveParallelSegments: function() {
        return refreshInactiveParallelSegments;
    }
});
const _applyflightdata = __webpack_require__(9607);
const _fetchserverresponse = __webpack_require__(1283);
const _segment = __webpack_require__(0);
async function refreshInactiveParallelSegments(options) {
    const fetchedSegments = new Set();
    await refreshInactiveParallelSegmentsImpl({
        ...options,
        rootTree: options.updatedTree,
        fetchedSegments
    });
}
async function refreshInactiveParallelSegmentsImpl(param) {
    let { state, updatedTree, updatedCache, includeNextUrl, fetchedSegments, rootTree = updatedTree, canonicalUrl } = param;
    const [, parallelRoutes, refetchPath, refetchMarker] = updatedTree;
    const fetchPromises = [];
    if (refetchPath && refetchPath !== canonicalUrl && refetchMarker === "refresh" && // it's possible for the tree to contain multiple segments that contain data at the same URL
    // we keep track of them so we can dedupe the requests
    !fetchedSegments.has(refetchPath)) {
        fetchedSegments.add(refetchPath) // Mark this URL as fetched
        ;
        // Eagerly kick off the fetch for the refetch path & the parallel routes. This should be fine to do as they each operate
        // independently on their own cache nodes, and `applyFlightData` will copy anything it doesn't care about from the existing cache.
        const fetchPromise = (0, _fetchserverresponse.fetchServerResponse)(new URL(refetchPath, location.origin), // and might not contain the data we need to patch in interception route data (such as dynamic params from a previous segment)
        [
            rootTree[0],
            rootTree[1],
            rootTree[2],
            "refetch"
        ], includeNextUrl ? state.nextUrl : null, state.buildId).then((fetchResponse)=>{
            const flightData = fetchResponse[0];
            if (typeof flightData !== "string") {
                for (const flightDataPath of flightData){
                    // we only pass the new cache as this function is called after clearing the router cache
                    // and filling in the new page data from the server. Meaning the existing cache is actually the cache that's
                    // just been created & has been written to, but hasn't been "committed" yet.
                    (0, _applyflightdata.applyFlightData)(updatedCache, updatedCache, flightDataPath);
                }
            } else {
            // When flightData is a string, it suggests that the server response should have triggered an MPA navigation
            // I'm not 100% sure of this decision, but it seems unlikely that we'd want to introduce a redirect side effect
            // when refreshing on-screen data, so handling this has been ommitted.
            }
        });
        fetchPromises.push(fetchPromise);
    }
    for(const key in parallelRoutes){
        const parallelFetchPromise = refreshInactiveParallelSegmentsImpl({
            state,
            updatedTree: parallelRoutes[key],
            updatedCache,
            includeNextUrl,
            fetchedSegments,
            rootTree,
            canonicalUrl
        });
        fetchPromises.push(parallelFetchPromise);
    }
    await Promise.all(fetchPromises);
}
function addRefreshMarkerToActiveParallelSegments(tree, path) {
    const [segment, parallelRoutes, , refetchMarker] = tree;
    // a page segment might also contain concatenated search params, so we do a partial match on the key
    if (segment.includes(_segment.PAGE_SEGMENT_KEY) && refetchMarker !== "refresh") {
        tree[2] = path;
        tree[3] = "refresh";
    }
    for(const key in parallelRoutes){
        addRefreshMarkerToActiveParallelSegments(parallelRoutes[key], path);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refetch-inactive-parallel-segments.js.map


/***/ }),

/***/ 1507:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    },
    isThenable: function() {
        return isThenable;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
var PrefetchCacheEntryStatus;
(function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
})(PrefetchCacheEntryStatus || (PrefetchCacheEntryStatus = {}));
function isThenable(value) {
    // TODO: We don't gain anything from this abstraction. It's unsound, and only
    // makes sense in the specific places where we use it. So it's better to keep
    // the type coercion inline, instead of leaking this to other places in
    // the codebase.
    return value && (typeof value === "object" || typeof value === "function") && typeof value.then === "function";
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "reducer", ({
    enumerable: true,
    get: function() {
        return reducer;
    }
}));
const _routerreducertypes = __webpack_require__(1507);
const _navigatereducer = __webpack_require__(1294);
const _serverpatchreducer = __webpack_require__(8289);
const _restorereducer = __webpack_require__(6131);
const _refreshreducer = __webpack_require__(5239);
const _prefetchreducer = __webpack_require__(9218);
const _fastrefreshreducer = __webpack_require__(1129);
const _serveractionreducer = __webpack_require__(4549);
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_FAST_REFRESH:
            {
                return (0, _fastrefreshreducer.fastRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_PREFETCH:
            {
                return (0, _prefetchreducer.prefetchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer = typeof window === "undefined" ? serverReducer : clientReducer;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map


/***/ }),

/***/ 4740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "shouldHardNavigate", ({
    enumerable: true,
    get: function() {
        return shouldHardNavigate;
    }
}));
const _matchsegments = __webpack_require__(6237);
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map


/***/ }),

/***/ 8897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createDynamicallyTrackedSearchParams: function() {
        return createDynamicallyTrackedSearchParams;
    },
    createUntrackedSearchParams: function() {
        return createUntrackedSearchParams;
    }
});
const _staticgenerationasyncstorageexternal = __webpack_require__(4936);
const _dynamicrendering = __webpack_require__(2441);
const _reflect = __webpack_require__(7991);
function createUntrackedSearchParams(searchParams) {
    const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (store && store.forceStatic) {
        return {};
    } else {
        return searchParams;
    }
}
function createDynamicallyTrackedSearchParams(searchParams) {
    const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
    if (!store) {
        // we assume we are in a route handler or page render. just return the searchParams
        return searchParams;
    } else if (store.forceStatic) {
        // If we forced static we omit searchParams entirely. This is true both during SSR
        // and browser render because we need there to be parity between these environments
        return {};
    } else if (!store.isStaticGeneration && !store.dynamicShouldError) {
        // during dynamic renders we don't actually have to track anything so we just return
        // the searchParams directly. However if dynamic data access should error then we
        // still want to track access. This covers the case in Dev where all renders are dynamic
        // but we still want to error if you use a dynamic data source because it will fail the build
        // or revalidate if you do.
        return searchParams;
    } else {
        // We need to track dynamic access with a Proxy. We implement get, has, and ownKeys because
        // these can all be used to exfiltrate information about searchParams.
        return new Proxy({}, {
            get (target, prop, receiver) {
                if (typeof prop === "string") {
                    (0, _dynamicrendering.trackDynamicDataAccessed)(store, "searchParams." + prop);
                }
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            },
            has (target, prop) {
                if (typeof prop === "string") {
                    (0, _dynamicrendering.trackDynamicDataAccessed)(store, "searchParams." + prop);
                }
                return Reflect.has(target, prop);
            },
            ownKeys (target) {
                (0, _dynamicrendering.trackDynamicDataAccessed)(store, "searchParams");
                return Reflect.ownKeys(target);
            }
        });
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.js.map


/***/ }),

/***/ 4936:
/***/ (function(module, exports, __webpack_require__) {

"TURBOPACK { transition: next-shared }";
"use strict";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationAsyncStorage", ({
    enumerable: true,
    get: function() {
        return _staticgenerationasyncstorageinstance.staticGenerationAsyncStorage;
    }
}));
const _staticgenerationasyncstorageinstance = __webpack_require__(7685);
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-async-storage.external.js.map


/***/ }),

/***/ 5108:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 1108:
/***/ (function(module, exports) {

"use strict";
/**
 * Create a "Thenable" that does not resolve. This is used to suspend indefinitely when data is not available yet.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "unresolvedThenable", ({
    enumerable: true,
    get: function() {
        return unresolvedThenable;
    }
}));
const unresolvedThenable = {
    then: ()=>{}
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unresolved-thenable.js.map


/***/ }),

/***/ 2114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    useReducerWithReduxDevtools: function() {
        return useReducerWithReduxDevtools;
    },
    useUnwrapState: function() {
        return useUnwrapState;
    }
});
const _interop_require_wildcard = __webpack_require__(1452);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _routerreducertypes = __webpack_require__(1507);
const _actionqueue = __webpack_require__(1427);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function useUnwrapState(state) {
    // reducer actions can be async, so sometimes we need to suspend until the state is resolved
    if ((0, _routerreducertypes.isThenable)(state)) {
        const result = (0, _react.use)(state);
        return result;
    }
    return state;
}
function useReducerWithReduxDevtoolsNoop(initialState) {
    return [
        initialState,
        ()=>{},
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(initialState) {
    const [state, setState] = _react.default.useState(initialState);
    const actionQueue = (0, _react.useContext)(_actionqueue.ActionQueueContext);
    if (!actionQueue) {
        throw new Error("Invariant: Missing ActionQueueContext");
    }
    const devtoolsConnectionRef = (0, _react.useRef)();
    const enabledRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
            if (actionQueue) {
                actionQueue.devToolsInstance = devtoolsConnectionRef.current;
            }
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState,
        actionQueue
    ]);
    const dispatch = (0, _react.useCallback)((action)=>{
        if (!actionQueue.state) {
            // we lazy initialize the mutable action queue state since the data needed
            // to generate the state is not available when the actionQueue context is created
            actionQueue.state = initialState;
        }
        actionQueue.dispatch(action, setState);
    }, [
        actionQueue,
        initialState
    ]);
    // Sync is called after a state update in the HistoryUpdater,
    // for debugging purposes. Since the reducer state may be a Promise,
    // we let the app router use() it and sync on the resolved value if
    // something changed.
    // Using the `state` here would be referentially unstable and cause
    // undesirable re-renders and history updates.
    const sync = (0, _react.useCallback)((resolvedState)=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(resolvedState));
        }
    }, []);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools = typeof window !== "undefined" ? useReducerWithReduxDevtoolsImpl : useReducerWithReduxDevtoolsNoop;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 9404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hasBasePath", ({
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
}));
const _pathhasprefix = __webpack_require__(5121);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 8157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(7741);
const _parsepath = __webpack_require__(1465);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if (false) {}
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 6124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return onRecoverableError;
    }
}));
const _bailouttocsr = __webpack_require__(5592);
function onRecoverableError(err) {
    // Using default react onRecoverableError
    // x-ref: https://github.com/facebook/react/blob/d4bc16a7d69eb2ea38a88c8ac0b461d5f72cdcab/packages/react-dom/src/client/ReactDOMRoot.js#L83
    const defaultOnRecoverableError = typeof reportError === "function" ? reportError : (error)=>{
        window.console.error(error);
    };
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(err)) return;
    defaultOnRecoverableError(err);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=on-recoverable-error.js.map


/***/ }),

/***/ 7599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeBasePath", ({
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
}));
const _hasbasepath = __webpack_require__(9404);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = "/" + path;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 9176:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/*
 React
 scheduler.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
function f(a,c){var b=a.length;a.push(c);a:for(;0<b;){var d=b-1>>>1,e=a[d];if(0<g(e,c))a[d]=c,a[b]=e,b=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var c=a[0],b=a.pop();if(b!==c){a[0]=b;a:for(var d=0,e=a.length,v=e>>>1;d<v;){var w=2*(d+1)-1,C=a[w],m=w+1,x=a[m];if(0>g(C,b))m<e&&0>g(x,C)?(a[d]=x,a[m]=b,d=m):(a[d]=C,a[w]=b,d=w);else if(m<e&&0>g(x,b))a[d]=x,a[m]=b,d=m;else break a}}return c}
function g(a,c){var b=a.sortIndex-c.sortIndex;return 0!==b?b:a.id-c.id}exports.unstable_now=void 0;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var n=Date,p=n.now();exports.unstable_now=function(){return n.now()-p}}
var q=[],r=[],t=1,u=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending?navigator.scheduling.isInputPending.bind(navigator.scheduling):null;
function G(a){for(var c=h(r);null!==c;){if(null===c.callback)k(r);else if(c.startTime<=a)k(r),c.sortIndex=c.expirationTime,f(q,c);else break;c=h(r)}}function H(a){B=!1;G(a);if(!A)if(null!==h(q))A=!0,I();else{var c=h(r);null!==c&&J(H,c.startTime-a)}}var K=!1,L=-1,M=5,N=-1;function O(){return exports.unstable_now()-N<M?!1:!0}
function P(){if(K){var a=exports.unstable_now();N=a;var c=!0;try{a:{A=!1;B&&(B=!1,E(L),L=-1);z=!0;var b=y;try{b:{G(a);for(u=h(q);null!==u&&!(u.expirationTime>a&&O());){var d=u.callback;if("function"===typeof d){u.callback=null;y=u.priorityLevel;var e=d(u.expirationTime<=a);a=exports.unstable_now();if("function"===typeof e){u.callback=e;G(a);c=!0;break b}u===h(q)&&k(q);G(a)}else k(q);u=h(q)}if(null!==u)c=!0;else{var v=h(r);null!==v&&J(H,v.startTime-a);c=!1}}break a}finally{u=null,y=b,z=!1}c=void 0}}finally{c?
Q():K=!1}}}var Q;if("function"===typeof F)Q=function(){F(P)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,S=R.port2;R.port1.onmessage=P;Q=function(){S.postMessage(null)}}else Q=function(){D(P,0)};function I(){K||(K=!0,Q())}function J(a,c){L=D(function(){a(exports.unstable_now())},c)}exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;
exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I())};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(q)};
exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var c=3;break;default:c=y}var b=y;y=c;try{return a()}finally{y=b}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,c){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var b=y;y=a;try{return c()}finally{y=b}};
exports.unstable_scheduleCallback=function(a,c,b){var d=exports.unstable_now();"object"===typeof b&&null!==b?(b=b.delay,b="number"===typeof b&&0<b?d+b:d):b=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=b+e;a={id:t++,callback:c,priorityLevel:a,startTime:b,expirationTime:e,sortIndex:-1};b>d?(a.sortIndex=b,f(r,a),null===h(q)&&a===h(r)&&(B?(E(L),L=-1):B=!0,J(H,b-d))):(a.sortIndex=e,f(q,a),A||z||(A=!0,I()));return a};
exports.unstable_shouldYield=O;exports.unstable_wrapCallback=function(a){var c=y;return function(){var b=y;y=c;try{return a.apply(this,arguments)}finally{y=b}}};

//# sourceMappingURL=scheduler.production.min.js.map


/***/ }),

/***/ 5689:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(9176);
} else {}


/***/ }),

/***/ 1358:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getPathname: function() {
        return getPathname;
    },
    isFullStringUrl: function() {
        return isFullStringUrl;
    },
    parseUrl: function() {
        return parseUrl;
    }
});
const DUMMY_ORIGIN = "http://n";
function getUrlWithoutHost(url) {
    return new URL(url, DUMMY_ORIGIN);
}
function getPathname(url) {
    return getUrlWithoutHost(url).pathname;
}
function isFullStringUrl(url) {
    return /https?:\/\//.test(url);
}
function parseUrl(url) {
    let parsed = undefined;
    try {
        parsed = new URL(url, DUMMY_ORIGIN);
    } catch  {}
    return parsed;
}

//# sourceMappingURL=url.js.map

/***/ }),

/***/ 2441:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ // Once postpone is in stable we should switch to importing the postpone export directly

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    createPostponedAbortSignal: function() {
        return createPostponedAbortSignal;
    },
    createPrerenderState: function() {
        return createPrerenderState;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    trackDynamicDataAccessed: function() {
        return trackDynamicDataAccessed;
    },
    trackDynamicFetch: function() {
        return trackDynamicFetch;
    },
    usedDynamicAPIs: function() {
        return usedDynamicAPIs;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__webpack_require__(2265));
const _hooksservercontext = __webpack_require__(7910);
const _staticgenerationbailout = __webpack_require__(5108);
const _url = __webpack_require__(1358);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === "function";
function createPrerenderState(isDebugSkeleton) {
    return {
        isDebugSkeleton,
        dynamicAccesses: []
    };
}
function markCurrentScopeAsDynamic(store, expression) {
    const pathname = (0, _url.getPathname)(store.urlPathname);
    if (store.isUnstableCacheCallback) {
        // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
        // creates a cache boundary. This is subtly different from reading a dynamic data source which is
        // forbidden inside a cache scope.
        return;
    } else if (store.dynamicShouldError) {
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    } else if (// We are in a prerender (PPR enabled, during build)
    store.prerenderState) {
        // We track that we had a dynamic scope that postponed.
        // This will be used by the renderer to decide whether
        // the prerender requires a resume
        postponeWithTracking(store.prerenderState, expression, pathname);
    } else {
        store.revalidate = 0;
        if (store.isStaticGeneration) {
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new _hooksservercontext.DynamicServerError(`Route ${pathname} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        }
    }
}
function trackDynamicDataAccessed(store, expression) {
    const pathname = (0, _url.getPathname)(store.urlPathname);
    if (store.isUnstableCacheCallback) {
        throw new Error(`Route ${pathname} used "${expression}" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${expression}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
    } else if (store.dynamicShouldError) {
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    } else if (// We are in a prerender (PPR enabled, during build)
    store.prerenderState) {
        // We track that we had a dynamic scope that postponed.
        // This will be used by the renderer to decide whether
        // the prerender requires a resume
        postponeWithTracking(store.prerenderState, expression, pathname);
    } else {
        store.revalidate = 0;
        if (store.isStaticGeneration) {
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new _hooksservercontext.DynamicServerError(`Route ${pathname} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        }
    }
}
function Postpone({ reason, prerenderState, pathname }) {
    postponeWithTracking(prerenderState, reason, pathname);
}
function trackDynamicFetch(store, expression) {
    if (store.prerenderState) {
        postponeWithTracking(store.prerenderState, expression, store.urlPathname);
    }
}
function postponeWithTracking(prerenderState, expression, pathname) {
    assertPostpone();
    const reason = `Route ${pathname} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    prerenderState.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: prerenderState.isDebugSkeleton ? new Error().stack : undefined,
        expression
    });
    _react.default.unstable_postpone(reason);
}
function usedDynamicAPIs(prerenderState) {
    return prerenderState.dynamicAccesses.length > 0;
}
function formatDynamicAPIAccesses(prerenderState) {
    return prerenderState.dynamicAccesses.filter((access)=>typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split("\n")// Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes("node_modules/next/")) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(" (<anonymous>)")) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(" (node:")) {
                return false;
            }
            return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        _react.default.unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}

//# sourceMappingURL=dynamic-rendering.js.map

/***/ }),

/***/ 4286:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentParam", ({
    enumerable: true,
    get: function() {
        return getSegmentParam;
    }
}));
const _interceptionroutes = __webpack_require__(2269);
function getSegmentParam(segment) {
    const interceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((marker)=>segment.startsWith(marker));
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith("[[...") && segment.endsWith("]]")) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            type: "optional-catchall",
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith("[...") && segment.endsWith("]")) {
        return {
            type: interceptionMarker ? "catchall-intercepted" : "catchall",
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith("[") && segment.endsWith("]")) {
        return {
            type: interceptionMarker ? "dynamic-intercepted" : "dynamic",
            param: segment.slice(1, -1)
        };
    }
    return null;
}

//# sourceMappingURL=get-segment-param.js.map

/***/ }),

/***/ 3243:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "HMR_ACTIONS_SENT_TO_BROWSER", ({
    enumerable: true,
    get: function() {
        return HMR_ACTIONS_SENT_TO_BROWSER;
    }
}));
var HMR_ACTIONS_SENT_TO_BROWSER;
(function(HMR_ACTIONS_SENT_TO_BROWSER) {
    HMR_ACTIONS_SENT_TO_BROWSER["ADDED_PAGE"] = "addedPage";
    HMR_ACTIONS_SENT_TO_BROWSER["REMOVED_PAGE"] = "removedPage";
    HMR_ACTIONS_SENT_TO_BROWSER["RELOAD_PAGE"] = "reloadPage";
    HMR_ACTIONS_SENT_TO_BROWSER["SERVER_COMPONENT_CHANGES"] = "serverComponentChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["MIDDLEWARE_CHANGES"] = "middlewareChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["CLIENT_CHANGES"] = "clientChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["SERVER_ONLY_CHANGES"] = "serverOnlyChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["SYNC"] = "sync";
    HMR_ACTIONS_SENT_TO_BROWSER["BUILT"] = "built";
    HMR_ACTIONS_SENT_TO_BROWSER["BUILDING"] = "building";
    HMR_ACTIONS_SENT_TO_BROWSER["DEV_PAGES_MANIFEST_UPDATE"] = "devPagesManifestUpdate";
    HMR_ACTIONS_SENT_TO_BROWSER["TURBOPACK_MESSAGE"] = "turbopack-message";
    HMR_ACTIONS_SENT_TO_BROWSER["SERVER_ERROR"] = "serverError";
    HMR_ACTIONS_SENT_TO_BROWSER["TURBOPACK_CONNECTED"] = "turbopack-connected";
})(HMR_ACTIONS_SENT_TO_BROWSER || (HMR_ACTIONS_SENT_TO_BROWSER = {}));

//# sourceMappingURL=hot-reloader-types.js.map

/***/ }),

/***/ 2269:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __webpack_require__(3330);
const INTERCEPTION_ROUTE_MARKERS = [
    "(..)(..)",
    "(.)",
    "(..)",
    "(...)"
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split("/")){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case "(.)":
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === "/") {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
        case "(..)":
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === "/") {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
        case "(...)":
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = "/" + interceptedRoute;
            break;
        case "(..)(..)":
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
        default:
            throw new Error("Invariant: unexpected marker");
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
}

//# sourceMappingURL=interception-routes.js.map

/***/ }),

/***/ 7991:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ReflectAdapter", ({
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
}));
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}

//# sourceMappingURL=reflect.js.map

/***/ }),

/***/ 4467:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRouterContext: function() {
        return AppRouterContext;
    },
    GlobalLayoutRouterContext: function() {
        return GlobalLayoutRouterContext;
    },
    LayoutRouterContext: function() {
        return LayoutRouterContext;
    },
    MissingSlotContext: function() {
        return MissingSlotContext;
    },
    TemplateContext: function() {
        return TemplateContext;
    }
});
const _interop_require_default = __webpack_require__(9920);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const AppRouterContext = _react.default.createContext(null);
const LayoutRouterContext = _react.default.createContext(null);
const GlobalLayoutRouterContext = _react.default.createContext(null);
const TemplateContext = _react.default.createContext(null);
if (false) {}
const MissingSlotContext = _react.default.createContext(new Set()); //# sourceMappingURL=app-router-context.shared-runtime.js.map


/***/ }),

/***/ 4736:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map


/***/ }),

/***/ 6590:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "HeadManagerContext", ({
    enumerable: true,
    get: function() {
        return HeadManagerContext;
    }
}));
const _interop_require_default = __webpack_require__(9920);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const HeadManagerContext = _react.default.createContext({});
if (false) {} //# sourceMappingURL=head-manager-context.shared-runtime.js.map


/***/ }),

/***/ 8056:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PathParamsContext: function() {
        return PathParamsContext;
    },
    PathnameContext: function() {
        return PathnameContext;
    },
    SearchParamsContext: function() {
        return SearchParamsContext;
    }
});
const _react = __webpack_require__(2265);
const SearchParamsContext = (0, _react.createContext)(null);
const PathnameContext = (0, _react.createContext)(null);
const PathParamsContext = (0, _react.createContext)(null);
if (false) {} //# sourceMappingURL=hooks-client-context.shared-runtime.js.map


/***/ }),

/***/ 5592:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// This has to be a shared module which is shared between client component error boundary and dynamic component

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason);
        this.reason = reason;
        this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map


/***/ }),

/***/ 8558:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ensureLeadingSlash", ({
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
}));
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map


/***/ }),

/***/ 1427:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ActionQueueContext: function() {
        return ActionQueueContext;
    },
    createMutableActionQueue: function() {
        return createMutableActionQueue;
    }
});
const _interop_require_wildcard = __webpack_require__(1452);
const _routerreducertypes = __webpack_require__(1507);
const _routerreducer = __webpack_require__(643);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const ActionQueueContext = _react.default.createContext(null);
function runRemainingActions(actionQueue, setState) {
    if (actionQueue.pending !== null) {
        actionQueue.pending = actionQueue.pending.next;
        if (actionQueue.pending !== null) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            runAction({
                actionQueue,
                action: actionQueue.pending,
                setState
            });
        } else {
            // No more actions are pending, check if a refresh is needed
            if (actionQueue.needsRefresh) {
                actionQueue.needsRefresh = false;
                actionQueue.dispatch({
                    type: _routerreducertypes.ACTION_REFRESH,
                    origin: window.location.origin
                }, setState);
            }
        }
    }
}
async function runAction(param) {
    let { actionQueue, action, setState } = param;
    const prevState = actionQueue.state;
    if (!prevState) {
        // This shouldn't happen as the state is initialized in the dispatcher if it's not set
        throw new Error("Invariant: Router state not initialized");
    }
    actionQueue.pending = action;
    const payload = action.payload;
    const actionResult = actionQueue.action(prevState, payload);
    function handleResult(nextState) {
        // if we discarded this action, the state should also be discarded
        if (action.discarded) {
            return;
        }
        actionQueue.state = nextState;
        if (actionQueue.devToolsInstance) {
            actionQueue.devToolsInstance.send(payload, nextState);
        }
        runRemainingActions(actionQueue, setState);
        action.resolve(nextState);
    }
    // if the action is a promise, set up a callback to resolve it
    if ((0, _routerreducertypes.isThenable)(actionResult)) {
        actionResult.then(handleResult, (err)=>{
            runRemainingActions(actionQueue, setState);
            action.reject(err);
        });
    } else {
        handleResult(actionResult);
    }
}
function dispatchAction(actionQueue, payload, setState) {
    let resolvers = {
        resolve: setState,
        reject: ()=>{}
    };
    // most of the action types are async with the exception of restore
    // it's important that restore is handled quickly since it's fired on the popstate event
    // and we don't want to add any delay on a back/forward nav
    // this only creates a promise for the async actions
    if (payload.type !== _routerreducertypes.ACTION_RESTORE) {
        // Create the promise and assign the resolvers to the object.
        const deferredPromise = new Promise((resolve, reject)=>{
            resolvers = {
                resolve,
                reject
            };
        });
        (0, _react.startTransition)(()=>{
            // we immediately notify React of the pending promise -- the resolver is attached to the action node
            // and will be called when the associated action promise resolves
            setState(deferredPromise);
        });
    }
    const newAction = {
        payload,
        next: null,
        resolve: resolvers.resolve,
        reject: resolvers.reject
    };
    // Check if the queue is empty
    if (actionQueue.pending === null) {
        // The queue is empty, so add the action and start it immediately
        // Mark this action as the last in the queue
        actionQueue.last = newAction;
        runAction({
            actionQueue,
            action: newAction,
            setState
        });
    } else if (payload.type === _routerreducertypes.ACTION_NAVIGATE || payload.type === _routerreducertypes.ACTION_RESTORE) {
        // Navigations (including back/forward) take priority over any pending actions.
        // Mark the pending action as discarded (so the state is never applied) and start the navigation action immediately.
        actionQueue.pending.discarded = true;
        // Mark this action as the last in the queue
        actionQueue.last = newAction;
        // if the pending action was a server action, mark the queue as needing a refresh once events are processed
        if (actionQueue.pending.payload.type === _routerreducertypes.ACTION_SERVER_ACTION) {
            actionQueue.needsRefresh = true;
        }
        runAction({
            actionQueue,
            action: newAction,
            setState
        });
    } else {
        // The queue is not empty, so add the action to the end of the queue
        // It will be started by runRemainingActions after the previous action finishes
        if (actionQueue.last !== null) {
            actionQueue.last.next = newAction;
        }
        actionQueue.last = newAction;
    }
}
function createMutableActionQueue() {
    const actionQueue = {
        state: null,
        dispatch: (payload, setState)=>dispatchAction(actionQueue, payload, setState),
        action: async (state, action)=>{
            if (state === null) {
                throw new Error("Invariant: Router state not initialized");
            }
            const result = (0, _routerreducer.reducer)(state, action);
            return result;
        },
        pending: null,
        last: null
    };
    return actionQueue;
} //# sourceMappingURL=action-queue.js.map


/***/ }),

/***/ 2707:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathPrefix", ({
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
}));
const _parsepath = __webpack_require__(1465);
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map


/***/ }),

/***/ 3330:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __webpack_require__(8558);
const _segment = __webpack_require__(0);
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, "$1");
} //# sourceMappingURL=app-paths.js.map


/***/ }),

/***/ 6180:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleSmoothScroll", ({
    enumerable: true,
    get: function() {
        return handleSmoothScroll;
    }
}));
function handleSmoothScroll(fn, options) {
    if (options === void 0) options = {};
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = "auto";
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=handle-smooth-scroll.js.map


/***/ }),

/***/ 4092:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isBot", ({
    enumerable: true,
    get: function() {
        return isBot;
    }
}));
function isBot(userAgent) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(userAgent);
} //# sourceMappingURL=is-bot.js.map


/***/ }),

/***/ 1465:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parsePath", ({
    enumerable: true,
    get: function() {
        return parsePath;
    }
}));
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map


/***/ }),

/***/ 5121:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "pathHasPrefix", ({
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
}));
const _parsepath = __webpack_require__(1465);
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map


/***/ }),

/***/ 7741:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeTrailingSlash", ({
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
}));
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 0:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === "(" && segment.endsWith(")");
}
const PAGE_SEGMENT_KEY = "__PAGE__";
const DEFAULT_SEGMENT_KEY = "__DEFAULT__"; //# sourceMappingURL=segment.js.map


/***/ }),

/***/ 8005:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ServerInsertedHTMLContext: function() {
        return ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return useServerInsertedHTML;
    }
});
const _interop_require_wildcard = __webpack_require__(1452);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const ServerInsertedHTMLContext = /*#__PURE__*/ _react.default.createContext(null);
function useServerInsertedHTML(callback) {
    const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
    // Should have no effects on client where there's no flush effects provider
    if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
    }
} //# sourceMappingURL=server-inserted-html.shared-runtime.js.map


/***/ }),

/***/ 2301:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "warnOnce", ({
    enumerable: true,
    get: function() {
        return warnOnce;
    }
}));
let warnOnce = (_)=>{};
if (false) {} //# sourceMappingURL=warn-once.js.map


/***/ }),

/***/ 8293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "actionAsyncStorage", ({
    enumerable: true,
    get: function() {
        return actionAsyncStorage;
    }
}));
const _asynclocalstorage = __webpack_require__(6713);
const actionAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=action-async-storage-instance.js.map


/***/ }),

/***/ 6713:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createAsyncLocalStorage", ({
    enumerable: true,
    get: function() {
        return createAsyncLocalStorage;
    }
}));
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "requestAsyncStorage", ({
    enumerable: true,
    get: function() {
        return requestAsyncStorage;
    }
}));
const _asynclocalstorage = __webpack_require__(6713);
const requestAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-async-storage-instance.js.map


/***/ }),

/***/ 7685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationAsyncStorage", ({
    enumerable: true,
    get: function() {
        return staticGenerationAsyncStorage;
    }
}));
const _asynclocalstorage = __webpack_require__(6713);
const staticGenerationAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-async-storage-instance.js.map


/***/ }),

/***/ 4417:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/*
 React
 react-dom.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(2265),ba=__webpack_require__(5689),ca={usingClientEntryPoint:!1,Events:null,Dispatcher:{current:null}};function t(a){var b="https://react.dev/errors/"+a;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var c=2;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c])}return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D=Object.assign,da=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=da.ReactCurrentDispatcher,fa={pending:!1,data:null,method:null,action:null},ia=[],ja=-1;function ka(a){return{current:a}}function E(a){0>ja||(a.current=ia[ja],ia[ja]=null,ja--)}function F(a,b){ja++;ia[ja]=a.current;a.current=b}
var la=Symbol.for("react.element"),ma=Symbol.for("react.portal"),na=Symbol.for("react.fragment"),oa=Symbol.for("react.strict_mode"),pa=Symbol.for("react.profiler"),qa=Symbol.for("react.provider"),ra=Symbol.for("react.consumer"),sa=Symbol.for("react.context"),ta=Symbol.for("react.forward_ref"),ua=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),wa=Symbol.for("react.memo"),xa=Symbol.for("react.lazy"),ya=Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var za=Symbol.for("react.offscreen"),Aa=Symbol.for("react.legacy_hidden"),Ba=Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ca=Symbol.iterator;function Da(a){if(null===a||"object"!==typeof a)return null;a=Ca&&a[Ca]||a["@@iterator"];return"function"===typeof a?a:null}var Ea=ka(null),Fa=ka(null),Ga=ka(null),Ha=ka(null),Ia={$$typeof:sa,_currentValue:null,_currentValue2:null,_threadCount:0,Provider:null,Consumer:null};
function Ja(a,b){F(Ga,b);F(Fa,a);F(Ea,null);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?(b=b.namespaceURI)?Ka(b):0:0;break;default:if(a=8===a?b.parentNode:b,b=a.tagName,a=a.namespaceURI)a=Ka(a),b=La(a,b);else switch(b){case "svg":b=1;break;case "math":b=2;break;default:b=0}}E(Ea);F(Ea,b)}function Ma(){E(Ea);E(Fa);E(Ga)}function Na(a){null!==a.memoizedState&&F(Ha,a);var b=Ea.current;var c=La(b,a.type);b!==c&&(F(Fa,a),F(Ea,c))}
function Oa(a){Fa.current===a&&(E(Ea),E(Fa));Ha.current===a&&(E(Ha),Ia._currentValue=null)}var Pa=ba.unstable_scheduleCallback,Qa=ba.unstable_cancelCallback,Ra=ba.unstable_shouldYield,Sa=ba.unstable_requestPaint,Ta=ba.unstable_now,Ua=ba.unstable_getCurrentPriorityLevel,Va=ba.unstable_ImmediatePriority,Wa=ba.unstable_UserBlockingPriority,Xa=ba.unstable_NormalPriority,Ya=ba.unstable_LowPriority,Za=ba.unstable_IdlePriority,$a=ba.log,ab=ba.unstable_setDisableYieldValue,bb=null,cb=null;
function db(a){if(cb&&"function"===typeof cb.onCommitFiberRoot)try{cb.onCommitFiberRoot(bb,a,void 0,128===(a.current.flags&128))}catch(b){}}function eb(a){"function"===typeof $a&&ab(a);if(cb&&"function"===typeof cb.setStrictMode)try{cb.setStrictMode(bb,a)}catch(b){}}var gb=Math.clz32?Math.clz32:fb,hb=Math.log,ib=Math.LN2;function fb(a){a>>>=0;return 0===a?32:31-(hb(a)/ib|0)|0}var jb=128,kb=4194304;
function lb(a){var b=a&42;if(0!==b)return b;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;
case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function mb(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes;a=a.pingedLanes;var f=c&134217727;0!==f?(c=f&~e,0!==c?d=lb(c):(a&=f,0!==a&&(d=lb(a)))):(c&=~e,0!==c?d=lb(c):0!==a&&(d=lb(a)));return 0===d?0:0!==b&&b!==d&&0===(b&e)&&(e=d&-d,a=b&-b,e>=a||32===e&&0!==(a&4194176))?b:d}
function nb(a,b){switch(a){case 1:case 2:case 4:case 8:return b+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function ob(a,b){if(a.errorRecoveryDisabledLanes&b)return 0;a=a.pendingLanes&-536870913;return 0!==a?a:a&536870912?536870912:0}function pb(){var a=jb;jb<<=1;0===(jb&4194176)&&(jb=128);return a}function qb(){var a=kb;kb<<=1;0===(kb&62914560)&&(kb=4194304);return a}function rb(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function sb(a,b,c){var d=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.entangledLanes&=b;a.errorRecoveryDisabledLanes&=b;a.shellSuspendCounter=0;b=a.entanglements;for(var e=a.expirationTimes,f=a.hiddenUpdates;0<d;){var g=31-gb(d),h=1<<g;b[g]=0;e[g]=-1;var k=f[g];if(null!==k)for(f[g]=null,g=0;g<k.length;g++){var n=k[g];null!==n&&(n.lane&=-536870913)}d&=~h}0!==c&&tb(a,c,0)}
function tb(a,b,c){a.pendingLanes|=b;a.suspendedLanes&=~b;var d=31-gb(b);a.entangledLanes|=b;a.entanglements[d]=a.entanglements[d]|1073741824|c&4194218}function ub(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-gb(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}function vb(a,b){a.pendingLanes|=2;for(a.entangledLanes|=2;b;){var c=1<<31-gb(b);a.entanglements[1]|=c;b&=~c}}var G=0;function wb(a,b){var c=G;try{return G=a,b()}finally{G=c}}
function xb(a){a&=-a;return 2<a?8<a?0!==(a&134217727)?32:268435456:8:2}var yb=Object.prototype.hasOwnProperty,zb=Math.random().toString(36).slice(2),Ab="__reactFiber$"+zb,Bb="__reactProps$"+zb,Cb="__reactContainer$"+zb,Db="__reactEvents$"+zb,Fb="__reactListeners$"+zb,Gb="__reactHandles$"+zb,Hb="__reactResources$"+zb,Ib="__reactMarker$"+zb;function Jb(a){delete a[Ab];delete a[Bb];delete a[Db];delete a[Fb];delete a[Gb]}
function Kb(a){var b=a[Ab];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Cb]||c[Ab]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Lb(a);null!==a;){if(c=a[Ab])return c;a=Lb(a)}return b}a=c;c=a.parentNode}return null}function Mb(a){if(a=a[Ab]||a[Cb]){var b=a.tag;if(5===b||6===b||13===b||26===b||27===b||3===b)return a}return null}function Nb(a){var b=a.tag;if(5===b||26===b||27===b||6===b)return a.stateNode;throw Error(t(33));}function Ob(a){return a[Bb]||null}
function Pb(a){var b=a[Hb];b||(b=a[Hb]={hoistableStyles:new Map,hoistableScripts:new Map});return b}function Qb(a){a[Ib]=!0}var Rb=new Set,Sb={};function Tb(a,b){Ub(a,b);Ub(a+"Capture",b)}function Ub(a,b){Sb[a]=b;for(a=0;a<b.length;a++)Rb.add(b[a])}
var Vb=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Wb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xb=
{},Yb={};function Zb(a){if(yb.call(Yb,a))return!0;if(yb.call(Xb,a))return!1;if(Wb.test(a))return Yb[a]=!0;Xb[a]=!0;return!1}function $b(a,b,c){if(Zb(b))if(null===c)a.removeAttribute(b);else{switch(typeof c){case "undefined":case "function":case "symbol":a.removeAttribute(b);return;case "boolean":var d=b.toLowerCase().slice(0,5);if("data-"!==d&&"aria-"!==d){a.removeAttribute(b);return}}a.setAttribute(b,""+c)}}
function ac(a,b,c){if(null===c)a.removeAttribute(b);else{switch(typeof c){case "undefined":case "function":case "symbol":case "boolean":a.removeAttribute(b);return}a.setAttribute(b,""+c)}}function bc(a,b,c,d){if(null===d)a.removeAttribute(c);else{switch(typeof d){case "undefined":case "function":case "symbol":case "boolean":a.removeAttribute(c);return}a.setAttributeNS(b,c,""+d)}}var cc;
function dc(a){if(void 0===cc)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);cc=b&&b[1]||""}return"\n"+cc+a}var ec=!1;
function fc(a,b){if(!a||ec)return"";ec=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var d={DetermineComponentFrameRoot:function(){try{if(b){var w=function(){throw Error();};Object.defineProperty(w.prototype,"props",{set:function(){throw Error();}});if("object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(w,[])}catch(r){var q=r}Reflect.construct(a,[],w)}else{try{w.call()}catch(r){q=r}a.call(w.prototype)}}else{try{throw Error();}catch(r){q=r}(w=a())&&"function"===typeof w.catch&&
w.catch(function(){})}}catch(r){if(r&&q&&"string"===typeof r.stack)return[r.stack,q.stack]}return[null,null]}};d.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var e=Object.getOwnPropertyDescriptor(d.DetermineComponentFrameRoot,"name");e&&e.configurable&&Object.defineProperty(d.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});try{var f=d.DetermineComponentFrameRoot(),g=f[0],h=f[1];if(g&&h){var k=g.split("\n"),n=h.split("\n");for(e=d=0;d<k.length&&!k[d].includes("DetermineComponentFrameRoot");)d++;
for(;e<n.length&&!n[e].includes("DetermineComponentFrameRoot");)e++;if(d===k.length||e===n.length)for(d=k.length-1,e=n.length-1;1<=d&&0<=e&&k[d]!==n[e];)e--;for(;1<=d&&0<=e;d--,e--)if(k[d]!==n[e]){if(1!==d||1!==e){do if(d--,e--,0>e||k[d]!==n[e]){var u="\n"+k[d].replace(" at new "," at ");a.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",a.displayName));return u}while(1<=d&&0<=e)}break}}}finally{ec=!1,Error.prepareStackTrace=c}return(c=a?a.displayName||a.name:"")?dc(c):""}
function gc(a){switch(a.tag){case 26:case 27:case 5:return dc(a.type);case 16:return dc("Lazy");case 13:return dc("Suspense");case 19:return dc("SuspenseList");case 0:case 2:case 15:return a=fc(a.type,!1),a;case 11:return a=fc(a.type.render,!1),a;case 1:return a=fc(a.type,!0),a;default:return""}}function hc(a){try{var b="";do b+=gc(a),a=a.return;while(a);return b}catch(c){return"\nError generating stack: "+c.message+"\n"+c.stack}}var ic=Symbol.for("react.client.reference");
function jc(a){if(null==a)return null;if("function"===typeof a)return a.$$typeof===ic?null:a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case na:return"Fragment";case ma:return"Portal";case pa:return"Profiler";case oa:return"StrictMode";case ua:return"Suspense";case va:return"SuspenseList";case Ba:return"Cache"}if("object"===typeof a)switch(a.$$typeof){case qa:return(a._context.displayName||"Context")+".Provider";case sa:return(a.displayName||"Context")+".Consumer";case ta:var b=
a.render;a=a.displayName;a||(a=b.displayName||b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case wa:return b=a.displayName||null,null!==b?b:jc(a.type)||"Memo";case xa:b=a._payload;a=a._init;try{return jc(a(b))}catch(c){}}return null}
function kc(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jc(b);case 8:return b===oa?"StrictMode":"Mode";
case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function lc(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function mc(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function nc(a){var b=mc(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(g){d=""+g;f.call(this,g)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(g){d=""+g},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function oc(a){a._valueTracker||(a._valueTracker=nc(a))}function pc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=mc(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function qc(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}var rc=/[\n"\\]/g;
function sc(a){return a.replace(rc,function(b){return"\\"+b.charCodeAt(0).toString(16)+" "})}
function tc(a,b,c,d,e,f,g,h){a.name="";null!=g&&"function"!==typeof g&&"symbol"!==typeof g&&"boolean"!==typeof g?a.type=g:a.removeAttribute("type");if(null!=b)if("number"===g){if(0===b&&""===a.value||a.value!=b)a.value=""+lc(b)}else a.value!==""+lc(b)&&(a.value=""+lc(b));else"submit"!==g&&"reset"!==g||a.removeAttribute("value");null!=b?uc(a,g,lc(b)):null!=c?uc(a,g,lc(c)):null!=d&&a.removeAttribute("value");null==e&&null!=f&&(a.defaultChecked=!!f);null!=e&&(a.checked=e&&"function"!==typeof e&&"symbol"!==
typeof e);null!=h&&"function"!==typeof h&&"symbol"!==typeof h&&"boolean"!==typeof h?a.name=""+lc(h):a.removeAttribute("name")}
function vc(a,b,c,d,e,f,g,h){null!=f&&"function"!==typeof f&&"symbol"!==typeof f&&"boolean"!==typeof f&&(a.type=f);if(null!=b||null!=c){if(!("submit"!==f&&"reset"!==f||void 0!==b&&null!==b))return;c=null!=c?""+lc(c):"";b=null!=b?""+lc(b):c;h||b===a.value||(a.value=b);a.defaultValue=b}d=null!=d?d:e;d="function"!==typeof d&&"symbol"!==typeof d&&!!d;a.checked=h?a.checked:!!d;a.defaultChecked=!!d;null!=g&&"function"!==typeof g&&"symbol"!==typeof g&&"boolean"!==typeof g&&(a.name=g)}
function uc(a,b,c){"number"===b&&qc(a.ownerDocument)===a||a.defaultValue===""+c||(a.defaultValue=""+c)}var wc=Array.isArray;
function xc(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+lc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function yc(a,b,c){if(null!=b&&(b=""+lc(b),b!==a.value&&(a.value=b),null==c)){a.defaultValue!==b&&(a.defaultValue=b);return}a.defaultValue=null!=c?""+lc(c):""}function zc(a,b,c,d){if(null==b){if(null!=d){if(null!=c)throw Error(t(92));if(wc(d)){if(1<d.length)throw Error(t(93));d=d[0]}c=d}null==c&&(c="");b=c}c=lc(b);a.defaultValue=c;d=a.textContent;d===c&&""!==d&&null!==d&&(a.value=d)}var Ac;
function Bc(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{Ac=Ac||document.createElement("div");Ac.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Ac.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}var Cc=Bc;"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction&&(Cc=function(a,b){return MSApp.execUnsafeLocalFunction(function(){return Bc(a,b)})});var Dc=Cc;
function Ec(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}var Fc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
function Gc(a,b,c){var d=0===b.indexOf("--");null==c||"boolean"===typeof c||""===c?d?a.setProperty(b,""):"float"===b?a.cssFloat="":a[b]="":d?a.setProperty(b,c):"number"!==typeof c||0===c||Fc.has(b)?"float"===b?a.cssFloat=c:a[b]=(""+c).trim():a[b]=c+"px"}
function Hc(a,b,c){if(null!=b&&"object"!==typeof b)throw Error(t(62));a=a.style;if(null!=c){for(var d in c)!c.hasOwnProperty(d)||null!=b&&b.hasOwnProperty(d)||(0===d.indexOf("--")?a.setProperty(d,""):"float"===d?a.cssFloat="":a[d]="");for(var e in b)d=b[e],b.hasOwnProperty(e)&&c[e]!==d&&Gc(a,e,d)}else for(var f in b)b.hasOwnProperty(f)&&Gc(a,f,b[f])}
function Ic(a){if(-1===a.indexOf("-"))return!1;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
var Jc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],
["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical",
"glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering",
"shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],
["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],
["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kc=null;function Lc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var Mc=null,Nc=null;
function Oc(a){var b=Mb(a);if(b&&(a=b.stateNode)){var c=Ob(a);a:switch(a=b.stateNode,b.type){case "input":tc(a,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll('input[name="'+sc(""+b)+'"][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ob(d);if(!e)throw Error(t(90));tc(d,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,
e.type,e.name)}}for(b=0;b<c.length;b++)d=c[b],d.form===a.form&&pc(d)}break a;case "textarea":yc(a,c.value,c.defaultValue);break a;case "select":b=c.value,null!=b&&xc(a,!!c.multiple,b,!1)}}}function Pc(a){Mc?Nc?Nc.push(a):Nc=[a]:Mc=a}function Qc(){if(Mc){var a=Mc,b=Nc;Nc=Mc=null;Oc(a);if(b)for(a=0;a<b.length;a++)Oc(b[a])}}function Rc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}
function Sc(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Tc(a){if(Rc(a)!==a)throw Error(t(188));}
function Uc(a){var b=a.alternate;if(!b){b=Rc(a);if(null===b)throw Error(t(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Tc(e),a;if(f===d)return Tc(e),b;f=f.sibling}throw Error(t(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(t(189));}}if(c.alternate!==d)throw Error(t(190));}if(3!==c.tag)throw Error(t(188));return c.stateNode.current===c?a:b}function Vc(a){a=Uc(a);return null!==a?Wc(a):null}function Wc(a){var b=a.tag;if(5===b||26===b||27===b||6===b)return a;for(a=a.child;null!==a;){b=Wc(a);if(null!==b)return b;a=a.sibling}return null}var Xc={},Yc=ka(Xc),Zc=ka(!1),$c=Xc;
function ad(a,b){var c=a.type.contextTypes;if(!c)return Xc;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function bd(a){a=a.childContextTypes;return null!==a&&void 0!==a}function cd(){E(Zc);E(Yc)}
function dd(a,b,c){if(Yc.current!==Xc)throw Error(t(168));F(Yc,b);F(Zc,c)}function ed(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(t(108,kc(a)||"Unknown",e));return D({},c,d)}function fd(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Xc;$c=Yc.current;F(Yc,a);F(Zc,Zc.current);return!0}
function gd(a,b,c){var d=a.stateNode;if(!d)throw Error(t(169));c?(a=ed(a,b,$c),d.__reactInternalMemoizedMergedChildContext=a,E(Zc),E(Yc),F(Yc,a)):E(Zc);F(Zc,c)}function hd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var id="function"===typeof Object.is?Object.is:hd,jd=[],kd=0,ld=null,md=0,nd=[],od=0,pd=null,qd=1,rd="";function sd(a,b){jd[kd++]=md;jd[kd++]=ld;ld=a;md=b}
function td(a,b,c){nd[od++]=qd;nd[od++]=rd;nd[od++]=pd;pd=a;var d=qd;a=rd;var e=32-gb(d)-1;d&=~(1<<e);c+=1;var f=32-gb(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;qd=1<<32-gb(b)+e|c<<e|d;rd=f+a}else qd=1<<f|c<<e|d,rd=a}function ud(a){null!==a.return&&(sd(a,1),td(a,1,0))}function vd(a){for(;a===ld;)ld=jd[--kd],jd[kd]=null,md=jd[--kd],jd[kd]=null;for(;a===pd;)pd=nd[--od],nd[od]=null,rd=nd[--od],nd[od]=null,qd=nd[--od],nd[od]=null}var H=null,I=null,K=!1,wd=null,xd=!1;
function yd(a,b){var c=zd(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}function Ad(a,b){b.flags=b.flags&-4097|2}function Bd(a,b){b=Cd(b,a.type,a.pendingProps,xd);return null!==b?(a.stateNode=b,H=a,I=Dd(b.firstChild),xd=!1,!0):!1}function Ed(a,b){b=Fd(b,a.pendingProps,xd);return null!==b?(a.stateNode=b,H=a,I=null,!0):!1}
function Gd(a,b){a:{var c=b;for(b=xd;8!==c.nodeType;){if(!b){b=null;break a}c=Hd(c);if(null===c){b=null;break a}}b=c}return null!==b?(c=null!==pd?{id:qd,overflow:rd}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:536870912},c=zd(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,H=a,I=null,!0):!1}function Id(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Jd(){throw Error(t(418));}
function Kd(a){for(H=a.return;H;)switch(H.tag){case 3:case 27:xd=!0;return;case 5:case 13:xd=!1;return;default:H=H.return}}
function Ld(a){if(a!==H)return!1;if(!K)return Kd(a),K=!0,!1;var b=!1,c;if(c=3!==a.tag&&27!==a.tag){if(c=5===a.tag)c=a.type,c=!("form"!==c&&"button"!==c)||Md(a.type,a.memoizedProps);c=!c}c&&(b=!0);if(b&&(b=I))if(Id(a))Nd(),Jd();else for(;b;)yd(a,b),b=Hd(b);Kd(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(t(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType)if(c=a.data,"/$"===c){if(0===b){I=Hd(a);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++;a=a.nextSibling}I=
null}}else I=H?Hd(a.stateNode):null;return!0}function Nd(){for(var a=I;a;)a=Hd(a)}function Od(){I=H=null;K=!1}function Pd(a){null===wd?wd=[a]:wd.push(a)}var Qd=[],Rd=0,Sd=0;function Td(){for(var a=Rd,b=Sd=Rd=0;b<a;){var c=Qd[b];Qd[b++]=null;var d=Qd[b];Qd[b++]=null;var e=Qd[b];Qd[b++]=null;var f=Qd[b];Qd[b++]=null;if(null!==d&&null!==e){var g=d.pending;null===g?e.next=e:(e.next=g.next,g.next=e);d.pending=e}0!==f&&Ud(c,e,f)}}
function Vd(a,b,c,d){Qd[Rd++]=a;Qd[Rd++]=b;Qd[Rd++]=c;Qd[Rd++]=d;Sd|=d;a.lanes|=d;a=a.alternate;null!==a&&(a.lanes|=d)}function Wd(a,b,c,d){Vd(a,b,c,d);return Xd(a)}function Yd(a,b){Vd(a,null,null,b);return Xd(a)}
function Ud(a,b,c){a.lanes|=c;var d=a.alternate;null!==d&&(d.lanes|=c);for(var e=!1,f=a.return;null!==f;)f.childLanes|=c,d=f.alternate,null!==d&&(d.childLanes|=c),22===f.tag&&(a=f.stateNode,null===a||a._visibility&1||(e=!0)),a=f,f=f.return;e&&null!==b&&3===a.tag&&(f=a.stateNode,e=31-gb(c),f=f.hiddenUpdates,a=f[e],null===a?f[e]=[b]:a.push(b),b.lane=c|536870912)}function Xd(a){Zd();for(var b=a.return;null!==b;)a=b,b=a.return;return 3===a.tag?a.stateNode:null}
var $d=null,ae=null,be=!1,ce=!1,de=!1,ee=0;function fe(a){a!==ae&&null===a.next&&(null===ae?$d=ae=a:ae=ae.next=a);ce=!0;be||(be=!0,ge(he))}
function ie(a){if(!de&&ce){var b=null;de=!0;do{var c=!1;for(var d=$d;null!==d;){if(!a||0===d.tag){var e=L,f=mb(d,d===M?e:0);if(0!==(f&3))try{c=!0;e=d;if(0!==(N&6))throw Error(t(327));if(!je()){var g=ke(e,f);if(0!==e.tag&&2===g){var h=f,k=ob(e,h);0!==k&&(f=k,g=le(e,h,k))}if(1===g)throw h=me,ne(e,0),oe(e,f,0),fe(e),h;6===g?oe(e,f,pe):(e.finishedWork=e.current.alternate,e.finishedLanes=f,qe(e,re,se,te,pe))}fe(e)}catch(n){null===b?b=[n]:b.push(n)}}d=d.next}}while(c);de=!1;if(null!==b){if(1<b.length){if("function"===
typeof AggregateError)throw new AggregateError(b);for(a=1;a<b.length;a++)ge(ue.bind(null,b[a]))}throw b[0];}}}function ue(a){throw a;}function he(){ce=be=!1;for(var a=Ta(),b=null,c=$d;null!==c;){var d=c.next;if(0!==ee&&ve()){var e=c,f=ee;e.pendingLanes|=2;e.entangledLanes|=2;e.entanglements[1]|=f}e=we(c,a);0===e?(c.next=null,null===b?$d=d:b.next=d,null===d&&(ae=b)):(b=c,0!==(e&3)&&(ce=!0));c=d}ee=0;ie(!1)}
function we(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes&-62914561;0<f;){var g=31-gb(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=nb(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}b=M;c=L;c=mb(a,a===b?c:0);d=a.callbackNode;if(0===c||a===b&&2===O||null!==a.cancelPendingCommit)return null!==d&&null!==d&&Qa(d),a.callbackNode=null,a.callbackPriority=0;if(0!==(c&3))return null!==d&&null!==d&&Qa(d),a.callbackPriority=2,a.callbackNode=null,2;b=c&-c;if(b===a.callbackPriority)return b;
null!==d&&Qa(d);switch(xb(c)){case 2:c=Va;break;case 8:c=Wa;break;case 32:c=Xa;break;case 268435456:c=Za;break;default:c=Xa}d=xe.bind(null,a);c=Pa(c,d);a.callbackPriority=b;a.callbackNode=c;return b}function ge(a){ye(function(){0!==(N&6)?Pa(Va,a):a()})}function ze(){0===ee&&(ee=pb());return ee}var Ae=null,Be=0,Ce=0,De=null;function Ee(a,b){if(null===Ae){var c=Ae=[];Be=0;Ce=ze();De={status:"pending",value:void 0,then:function(d){c.push(d)}}}Be++;b.then(Fe,Fe);return b}
function Fe(){if(null!==Ae&&0===--Be){null!==De&&(De.status="fulfilled");var a=Ae;Ae=null;Ce=0;De=null;for(var b=0;b<a.length;b++)(0,a[b])()}}function Ge(a,b){var c=[],d={status:"pending",value:null,reason:null,then:function(e){c.push(e)}};a.then(function(){d.status="fulfilled";d.value=b;for(var e=0;e<c.length;e++)(0,c[e])(b)},function(e){d.status="rejected";d.reason=e;for(e=0;e<c.length;e++)(0,c[e])(void 0)});return d}var He=!1;
function Ie(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Je(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function Ke(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}
function Le(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(N&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;b=Xd(a);Ud(a,null,c);return b}Vd(a,d,b,c);return Xd(a)}function Me(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194176))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;ub(a,c)}}
function Ne(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={lane:c.lane,tag:c.tag,payload:c.payload,callback:null,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,callbacks:d.callbacks};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=b;c.lastBaseUpdate=b}
var Oe=!1;function Pe(){if(Oe){var a=De;if(null!==a)throw a;}}
function Qe(a,b,c,d){Oe=!1;var e=a.updateQueue;He=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,n=k.next;k.next=null;null===g?f=n:g.next=n;g=k;var u=a.alternate;null!==u&&(u=u.updateQueue,h=u.lastBaseUpdate,h!==g&&(null===h?u.firstBaseUpdate=n:h.next=n,u.lastBaseUpdate=k))}if(null!==f){var w=e.baseState;g=0;u=n=k=null;h=f;do{var q=h.lane&-536870913,r=q!==h.lane;if(r?(L&q)===q:(d&q)===q){0!==q&&q===Ce&&(Oe=!0);null!==u&&(u=u.next={lane:0,
tag:h.tag,payload:h.payload,callback:null,next:null});a:{var y=a,C=h;q=b;var T=c;switch(C.tag){case 1:y=C.payload;if("function"===typeof y){w=y.call(T,w,q);break a}w=y;break a;case 3:y.flags=y.flags&-65537|128;case 0:y=C.payload;q="function"===typeof y?y.call(T,w,q):y;if(null===q||void 0===q)break a;w=D({},w,q);break a;case 2:He=!0}}q=h.callback;null!==q&&(a.flags|=64,r&&(a.flags|=8192),r=e.callbacks,null===r?e.callbacks=[q]:r.push(q))}else r={lane:q,tag:h.tag,payload:h.payload,callback:h.callback,
next:null},null===u?(n=u=r,k=w):u=u.next=r,g|=q;h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===u&&(k=w);e.baseState=k;e.firstBaseUpdate=n;e.lastBaseUpdate=u;null===f&&(e.shared.lanes=0);Re|=g;a.lanes=g;a.memoizedState=w}}function Se(a,b){if("function"!==typeof a)throw Error(t(191,a));a.call(b)}function Te(a,b){var c=a.callbacks;if(null!==c)for(a.callbacks=null,a=0;a<c.length;a++)Se(c[a],b)}
function Ue(a,b){if(id(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!yb.call(b,e)||!id(a[e],b[e]))return!1}return!0}var Ve=Error(t(460)),We=Error(t(474)),Xe={then:function(){}};function Ye(a){a=a.status;return"fulfilled"===a||"rejected"===a}function Ze(){}
function $e(a,b,c){c=a[c];void 0===c?a.push(b):c!==b&&(b.then(Ze,Ze),b=c);switch(b.status){case "fulfilled":return b.value;case "rejected":a=b.reason;if(a===Ve)throw Error(t(483));throw a;default:if("string"===typeof b.status)b.then(Ze,Ze);else{a=M;if(null!==a&&100<a.shellSuspendCounter)throw Error(t(482));a=b;a.status="pending";a.then(function(d){if("pending"===b.status){var e=b;e.status="fulfilled";e.value=d}},function(d){if("pending"===b.status){var e=b;e.status="rejected";e.reason=d}})}switch(b.status){case "fulfilled":return b.value;
case "rejected":a=b.reason;if(a===Ve)throw Error(t(483));throw a;}af=b;throw Ve;}}var af=null;function bf(){if(null===af)throw Error(t(459));var a=af;af=null;return a}var cf=null,df=0;function ef(a){var b=df;df+=1;null===cf&&(cf=[]);return $e(cf,a,b)}
function ff(a,b,c,d){function e(h){var k=g.refs;null===h?delete k[f]:k[f]=h}a=c._owner;if(!a){if("string"!==typeof d)throw Error(t(284));throw Error(t(290,d));}if(1!==a.tag)throw Error(t(309));var f=""+d,g=a.stateNode;if(!g)throw Error(t(147,f));if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;e._stringRef=f;return e}function gf(a,b,c,d){var e=d.ref;a=null!==e&&"function"!==typeof e&&"object"!==typeof e?ff(a,b,d,e):e;c.ref=a}
function hf(a,b){a=Object.prototype.toString.call(b);throw Error(t(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function jf(a){var b=a._init;return b(a._payload)}
function kf(a){function b(m,l){if(a){var p=m.deletions;null===p?(m.deletions=[l],m.flags|=16):p.push(l)}}function c(m,l){if(!a)return null;for(;null!==l;)b(m,l),l=l.sibling;return null}function d(m,l){for(m=new Map;null!==l;)null!==l.key?m.set(l.key,l):m.set(l.index,l),l=l.sibling;return m}function e(m,l){m=lf(m,l);m.index=0;m.sibling=null;return m}function f(m,l,p){m.index=p;if(!a)return m.flags|=1048576,l;p=m.alternate;if(null!==p)return p=p.index,p<l?(m.flags|=33554434,l):p;m.flags|=33554434;return l}
function g(m){a&&null===m.alternate&&(m.flags|=33554434);return m}function h(m,l,p,v){if(null===l||6!==l.tag)return l=mf(p,m.mode,v),l.return=m,l;l=e(l,p);l.return=m;return l}function k(m,l,p,v){var x=p.type;if(x===na)return u(m,l,p.props.children,v,p.key);if(null!==l&&(l.elementType===x||"object"===typeof x&&null!==x&&x.$$typeof===xa&&jf(x)===l.type))return v=e(l,p.props),gf(m,l,v,p),v.return=m,v;v=nf(p.type,p.key,p.props,null,m.mode,v);gf(m,l,v,p);v.return=m;return v}function n(m,l,p,v){if(null===
l||4!==l.tag||l.stateNode.containerInfo!==p.containerInfo||l.stateNode.implementation!==p.implementation)return l=of(p,m.mode,v),l.return=m,l;l=e(l,p.children||[]);l.return=m;return l}function u(m,l,p,v,x){if(null===l||7!==l.tag)return l=pf(p,m.mode,v,x),l.return=m,l;l=e(l,p);l.return=m;return l}function w(m,l,p){if("string"===typeof l&&""!==l||"number"===typeof l)return l=mf(""+l,m.mode,p),l.return=m,l;if("object"===typeof l&&null!==l){switch(l.$$typeof){case la:return p=nf(l.type,l.key,l.props,
null,m.mode,p),gf(m,null,p,l),p.return=m,p;case ma:return l=of(l,m.mode,p),l.return=m,l;case xa:var v=l._init;return w(m,v(l._payload),p)}if(wc(l)||Da(l))return l=pf(l,m.mode,p,null),l.return=m,l;if("function"===typeof l.then)return w(m,ef(l),p);if(l.$$typeof===sa)return w(m,qf(m,l,p),p);hf(m,l)}return null}function q(m,l,p,v){var x=null!==l?l.key:null;if("string"===typeof p&&""!==p||"number"===typeof p)return null!==x?null:h(m,l,""+p,v);if("object"===typeof p&&null!==p){switch(p.$$typeof){case la:return p.key===
x?k(m,l,p,v):null;case ma:return p.key===x?n(m,l,p,v):null;case xa:return x=p._init,q(m,l,x(p._payload),v)}if(wc(p)||Da(p))return null!==x?null:u(m,l,p,v,null);if("function"===typeof p.then)return q(m,l,ef(p),v);if(p.$$typeof===sa)return q(m,l,qf(m,p,v),v);hf(m,p)}return null}function r(m,l,p,v,x){if("string"===typeof v&&""!==v||"number"===typeof v)return m=m.get(p)||null,h(l,m,""+v,x);if("object"===typeof v&&null!==v){switch(v.$$typeof){case la:return m=m.get(null===v.key?p:v.key)||null,k(l,m,v,
x);case ma:return m=m.get(null===v.key?p:v.key)||null,n(l,m,v,x);case xa:var z=v._init;return r(m,l,p,z(v._payload),x)}if(wc(v)||Da(v))return m=m.get(p)||null,u(l,m,v,x,null);if("function"===typeof v.then)return r(m,l,p,ef(v),x);if(v.$$typeof===sa)return r(m,l,p,qf(l,v,x),x);hf(l,v)}return null}function y(m,l,p,v){for(var x=null,z=null,A=l,B=l=0,ha=null;null!==A&&B<p.length;B++){A.index>B?(ha=A,A=null):ha=A.sibling;var J=q(m,A,p[B],v);if(null===J){null===A&&(A=ha);break}a&&A&&null===J.alternate&&
b(m,A);l=f(J,l,B);null===z?x=J:z.sibling=J;z=J;A=ha}if(B===p.length)return c(m,A),K&&sd(m,B),x;if(null===A){for(;B<p.length;B++)A=w(m,p[B],v),null!==A&&(l=f(A,l,B),null===z?x=A:z.sibling=A,z=A);K&&sd(m,B);return x}for(A=d(m,A);B<p.length;B++)ha=r(A,m,B,p[B],v),null!==ha&&(a&&null!==ha.alternate&&A.delete(null===ha.key?B:ha.key),l=f(ha,l,B),null===z?x=ha:z.sibling=ha,z=ha);a&&A.forEach(function(Eb){return b(m,Eb)});K&&sd(m,B);return x}function C(m,l,p,v){var x=Da(p);if("function"!==typeof x)throw Error(t(150));
p=x.call(p);if(null==p)throw Error(t(151));for(var z=x=null,A=l,B=l=0,ha=null,J=p.next();null!==A&&!J.done;B++,J=p.next()){A.index>B?(ha=A,A=null):ha=A.sibling;var Eb=q(m,A,J.value,v);if(null===Eb){null===A&&(A=ha);break}a&&A&&null===Eb.alternate&&b(m,A);l=f(Eb,l,B);null===z?x=Eb:z.sibling=Eb;z=Eb;A=ha}if(J.done)return c(m,A),K&&sd(m,B),x;if(null===A){for(;!J.done;B++,J=p.next())J=w(m,J.value,v),null!==J&&(l=f(J,l,B),null===z?x=J:z.sibling=J,z=J);K&&sd(m,B);return x}for(A=d(m,A);!J.done;B++,J=p.next())J=
r(A,m,B,J.value,v),null!==J&&(a&&null!==J.alternate&&A.delete(null===J.key?B:J.key),l=f(J,l,B),null===z?x=J:z.sibling=J,z=J);a&&A.forEach(function(an){return b(m,an)});K&&sd(m,B);return x}function T(m,l,p,v){"object"===typeof p&&null!==p&&p.type===na&&null===p.key&&(p=p.props.children);if("object"===typeof p&&null!==p){switch(p.$$typeof){case la:a:{for(var x=p.key,z=l;null!==z;){if(z.key===x){x=p.type;if(x===na){if(7===z.tag){c(m,z.sibling);l=e(z,p.props.children);l.return=m;m=l;break a}}else if(z.elementType===
x||"object"===typeof x&&null!==x&&x.$$typeof===xa&&jf(x)===z.type){c(m,z.sibling);l=e(z,p.props);gf(m,z,l,p);l.return=m;m=l;break a}c(m,z);break}else b(m,z);z=z.sibling}p.type===na?(l=pf(p.props.children,m.mode,v,p.key),l.return=m,m=l):(v=nf(p.type,p.key,p.props,null,m.mode,v),gf(m,l,v,p),v.return=m,m=v)}return g(m);case ma:a:{for(z=p.key;null!==l;){if(l.key===z)if(4===l.tag&&l.stateNode.containerInfo===p.containerInfo&&l.stateNode.implementation===p.implementation){c(m,l.sibling);l=e(l,p.children||
[]);l.return=m;m=l;break a}else{c(m,l);break}else b(m,l);l=l.sibling}l=of(p,m.mode,v);l.return=m;m=l}return g(m);case xa:return z=p._init,T(m,l,z(p._payload),v)}if(wc(p))return y(m,l,p,v);if(Da(p))return C(m,l,p,v);if("function"===typeof p.then)return T(m,l,ef(p),v);if(p.$$typeof===sa)return T(m,l,qf(m,p,v),v);hf(m,p)}return"string"===typeof p&&""!==p||"number"===typeof p?(p=""+p,null!==l&&6===l.tag?(c(m,l.sibling),l=e(l,p),l.return=m,m=l):(c(m,l),l=mf(p,m.mode,v),l.return=m,m=l),g(m)):c(m,l)}return function(m,
l,p,v){df=0;m=T(m,l,p,v);cf=null;return m}}var rf=kf(!0),sf=kf(!1),tf=ka(null),uf=ka(0);function vf(a,b){a=wf;F(uf,a);F(tf,b);wf=a|b.baseLanes}function xf(){F(uf,wf);F(tf,tf.current)}function yf(){wf=uf.current;E(tf);E(uf)}var zf=ka(null),Af=null;function Bf(a){var b=a.alternate;F(Cf,Cf.current&1);F(zf,a);null===Af&&(null===b||null!==tf.current?Af=a:null!==b.memoizedState&&(Af=a))}
function Df(a){if(22===a.tag){if(F(Cf,Cf.current),F(zf,a),null===Af){var b=a.alternate;null!==b&&null!==b.memoizedState&&(Af=a)}}else Ef(a)}function Ef(){F(Cf,Cf.current);F(zf,zf.current)}function Ff(a){E(zf);Af===a&&(Af=null);E(Cf)}var Cf=ka(0);
function Gf(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}
var Hf=da.ReactCurrentDispatcher,If=da.ReactCurrentBatchConfig,Jf=0,P=null,Q=null,R=null,Kf=!1,Lf=!1,Mf=!1,Nf=0,Of=0,Pf=null,Qf=0;function Rf(){throw Error(t(321));}function Sf(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!id(a[c],b[c]))return!1;return!0}function Tf(a,b,c,d,e,f){Jf=f;P=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Hf.current=null===a||null===a.memoizedState?Uf:Vf;Mf=!1;a=c(d,e);Mf=!1;Lf&&(a=Wf(b,c,d,e));Xf();return a}
function Xf(){Hf.current=Yf;var a=null!==Q&&null!==Q.next;Jf=0;R=Q=P=null;Kf=!1;Of=0;Pf=null;if(a)throw Error(t(300));}function Wf(a,b,c,d){P=a;var e=0;do{Lf&&(Pf=null);Of=0;Lf=!1;if(25<=e)throw Error(t(301));e+=1;R=Q=null;a.updateQueue=null;Hf.current=Zf;var f=b(c,d)}while(Lf);return f}function $f(){var a=Hf.current.useState()[0];return"function"===typeof a.then?ag(a):a}function bg(){var a=0!==Nf;Nf=0;return a}function cg(a,b,c){b.updateQueue=a.updateQueue;b.flags&=-2053;a.lanes&=~c}
function dg(a){if(Kf){for(a=a.memoizedState;null!==a;){var b=a.queue;null!==b&&(b.pending=null);a=a.next}Kf=!1}Jf=0;R=Q=P=null;Lf=!1;Of=Nf=0;Pf=null}function eg(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===R?P.memoizedState=R=a:R=R.next=a;return R}
function fg(){if(null===Q){var a=P.alternate;a=null!==a?a.memoizedState:null}else a=Q.next;var b=null===R?P.memoizedState:R.next;if(null!==b)R=b,Q=a;else{if(null===a){if(null===P.alternate)throw Error(t(467));throw Error(t(310));}Q=a;a={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null};null===R?P.memoizedState=R=a:R=R.next=a}return R}var gg;gg=function(){return{lastEffect:null,events:null,stores:null}};
function ag(a){var b=Of;Of+=1;null===Pf&&(Pf=[]);a=$e(Pf,a,b);null===P.alternate&&(null===R?null===P.memoizedState:null===R.next)&&(Hf.current=Uf);return a}function hg(a){if(null!==a&&"object"===typeof a){if("function"===typeof a.then)return ag(a);if(a.$$typeof===sa)return ig(a)}throw Error(t(438,String(a)));}function jg(a,b){return"function"===typeof b?b(a):b}function kg(a){var b=fg();return lg(b,Q,a)}
function lg(a,b,c){var d=a.queue;if(null===d)throw Error(t(311));d.lastRenderedReducer=c;var e=a.baseQueue,f=d.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}b.baseQueue=e=f;d.pending=null}f=a.baseState;if(null===e)a.memoizedState=f;else{b=e.next;var h=g=null,k=null,n=b,u=!1;do{var w=n.lane&-536870913;if(w!==n.lane?(L&w)===w:(Jf&w)===w){var q=n.revertLane;if(0===q)null!==k&&(k=k.next={lane:0,revertLane:0,action:n.action,hasEagerState:n.hasEagerState,eagerState:n.eagerState,
next:null}),w===Ce&&(u=!0);else if((Jf&q)===q){n=n.next;q===Ce&&(u=!0);continue}else w={lane:0,revertLane:n.revertLane,action:n.action,hasEagerState:n.hasEagerState,eagerState:n.eagerState,next:null},null===k?(h=k=w,g=f):k=k.next=w,P.lanes|=q,Re|=q;w=n.action;Mf&&c(f,w);f=n.hasEagerState?n.eagerState:c(f,w)}else q={lane:w,revertLane:n.revertLane,action:n.action,hasEagerState:n.hasEagerState,eagerState:n.eagerState,next:null},null===k?(h=k=q,g=f):k=k.next=q,P.lanes|=w,Re|=w;n=n.next}while(null!==n&&
n!==b);null===k?g=f:k.next=h;if(!id(f,a.memoizedState)&&(mg=!0,u&&(c=De,null!==c)))throw c;a.memoizedState=f;a.baseState=g;a.baseQueue=k;d.lastRenderedState=f}null===e&&(d.lanes=0);return[a.memoizedState,d.dispatch]}
function ng(a){var b=fg(),c=b.queue;if(null===c)throw Error(t(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);id(f,b.memoizedState)||(mg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function og(a,b,c){var d=P,e=fg(),f=K;if(f){if(void 0===c)throw Error(t(407));c=c()}else c=b();var g=!id((Q||e).memoizedState,c);g&&(e.memoizedState=c,mg=!0);e=e.queue;pg(qg.bind(null,d,e,a),[a]);if(e.getSnapshot!==b||g||null!==R&&R.memoizedState.tag&1){d.flags|=2048;rg(9,sg.bind(null,d,e,c,b),{destroy:void 0},null);if(null===M)throw Error(t(349));f||0!==(Jf&60)||tg(d,b,c)}return c}
function tg(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=P.updateQueue;null===b?(b=gg(),P.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}function sg(a,b,c,d){b.value=c;b.getSnapshot=d;ug(b)&&vg(a)}function qg(a,b,c){return c(function(){ug(b)&&vg(a)})}function ug(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!id(a,c)}catch(d){return!0}}function vg(a){var b=Yd(a,2);null!==b&&wg(b,a,2)}
function xg(a){var b=eg();if("function"===typeof a){var c=a;a=c();Mf&&(eb(!0),c(),eb(!1))}b.memoizedState=b.baseState=a;b.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jg,lastRenderedState:a};return b}function yg(a,b,c,d){a.baseState=c;return lg(a,Q,"function"===typeof d?d:jg)}function zg(a,b,c,d){if(Ag(a))throw Error(t(485));a=b.pending;null===a?(a={payload:d,next:null},a.next=b.pending=a,Bg(b,c,d)):b.pending=a.next={payload:d,next:a.next}}
function Bg(a,b,c){var d=a.action,e=a.state,f=If.transition,g={_callbacks:new Set};If.transition=g;try{var h=d(e,c);null!==h&&"object"===typeof h&&"function"===typeof h.then?(Cg(g,h),h.then(function(k){a.state=k;Dg(a,b)},function(){return Dg(a,b)}),b(h)):(b(h),a.state=h,Dg(a,b))}catch(k){b({then:function(){},status:"rejected",reason:k}),Dg(a,b)}finally{If.transition=f}}function Dg(a,b){var c=a.pending;if(null!==c){var d=c.next;d===c?a.pending=null:(d=d.next,c.next=d,Bg(a,b,d.payload))}}
function Eg(a,b){return b}function Fg(a,b,c){a=lg(a,b,Eg)[0];a="object"===typeof a&&null!==a&&"function"===typeof a.then?ag(a):a;b=fg();var d=b.queue,e=d.dispatch;c!==b.memoizedState&&(P.flags|=2048,rg(9,Gg.bind(null,d,c),{destroy:void 0},null));return[a,e]}function Gg(a,b){a.action=b}
function rg(a,b,c,d){a={tag:a,create:b,inst:c,deps:d,next:null};b=P.updateQueue;null===b?(b=gg(),P.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Hg(){return fg().memoizedState}function Ig(a,b,c,d){var e=eg();P.flags|=a;e.memoizedState=rg(1|b,c,{destroy:void 0},void 0===d?null:d)}
function Jg(a,b,c,d){var e=fg();d=void 0===d?null:d;var f=e.memoizedState.inst;null!==Q&&null!==d&&Sf(d,Q.memoizedState.deps)?e.memoizedState=rg(b,c,f,d):(P.flags|=a,e.memoizedState=rg(1|b,c,f,d))}function Kg(a,b){Ig(8390656,8,a,b)}function pg(a,b){Jg(2048,8,a,b)}function Lg(a,b){return Jg(4,2,a,b)}function Mg(a,b){return Jg(4,4,a,b)}function Ng(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function Og(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;Jg(4,4,Ng.bind(null,b,a),c)}function Pg(){}function Qg(a,b){var c=fg();b=void 0===b?null:b;var d=c.memoizedState;if(null!==b&&Sf(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function Rg(a,b){var c=fg();b=void 0===b?null:b;var d=c.memoizedState;if(null!==b&&Sf(b,d[1]))return d[0];d=a();Mf&&(eb(!0),a(),eb(!1));c.memoizedState=[d,b];return d}
function Sg(a,b,c){if(id(c,b))return c;if(null!==tf.current)return a.memoizedState=c,id(c,b)||(mg=!0),c;if(0===(Jf&42))return mg=!0,a.memoizedState=c;0===pe&&(pe=0===(L&536870912)||K?pb():536870912);a=zf.current;null!==a&&(a.flags|=32);a=pe;P.lanes|=a;Re|=a;return b}
function Tg(a,b,c,d,e){var f=G;G=0!==f&&8>f?f:8;var g=If.transition,h={_callbacks:new Set};If.transition=h;Ug(a,!1,b,c);try{var k=e();if(null!==k&&"object"===typeof k&&"function"===typeof k.then){Cg(h,k);var n=Ge(k,d);Vg(a,b,n)}else Vg(a,b,d)}catch(u){Vg(a,b,{then:function(){},status:"rejected",reason:u})}finally{G=f,If.transition=g}}
function Wg(a,b,c,d){if(5!==a.tag)throw Error(t(476));if(null===a.memoizedState){var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jg,lastRenderedState:fa};var f=e;e={memoizedState:fa,baseState:fa,baseQueue:null,queue:e,next:null};a.memoizedState=e;var g=a.alternate;null!==g&&(g.memoizedState=e)}else f=a.memoizedState.queue;Tg(a,f,b,fa,function(){return c(d)})}function Xg(){var a=ig(Ia);return null!==a?a:fa}function Yg(){return fg().memoizedState}
function Zg(){return fg().memoizedState}function $g(a){for(var b=a.return;null!==b;){switch(b.tag){case 24:case 3:var c=ah(b);a=Ke(c);var d=Le(b,a,c);null!==d&&(wg(d,b,c),Me(d,b,c));b={cache:bh()};a.payload=b;return}b=b.return}}function ch(a,b,c){var d=ah(a);c={lane:d,revertLane:0,action:c,hasEagerState:!1,eagerState:null,next:null};Ag(a)?dh(b,c):(c=Wd(a,b,c,d),null!==c&&(wg(c,a,d),eh(c,b,d)))}
function Vg(a,b,c){var d=ah(a),e={lane:d,revertLane:0,action:c,hasEagerState:!1,eagerState:null,next:null};if(Ag(a))dh(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(id(h,g)){Vd(a,b,e,0);null===M&&Td();return}}catch(k){}finally{}c=Wd(a,b,e,d);null!==c&&(wg(c,a,d),eh(c,b,d))}}
function Ug(a,b,c,d){fh();d={lane:2,revertLane:ze(),action:d,hasEagerState:!1,eagerState:null,next:null};if(Ag(a)){if(b)throw Error(t(479));}else b=Wd(a,c,d,2),null!==b&&wg(b,a,2)}function Ag(a){var b=a.alternate;return a===P||null!==b&&b===P}function dh(a,b){Lf=Kf=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function eh(a,b,c){if(0!==(c&4194176)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;ub(a,c)}}
var Yf={readContext:ig,use:hg,useCallback:Rf,useContext:Rf,useEffect:Rf,useImperativeHandle:Rf,useInsertionEffect:Rf,useLayoutEffect:Rf,useMemo:Rf,useReducer:Rf,useRef:Rf,useState:Rf,useDebugValue:Rf,useDeferredValue:Rf,useTransition:Rf,useSyncExternalStore:Rf,useId:Rf};Yf.useCacheRefresh=Rf;Yf.useHostTransitionStatus=Rf;Yf.useFormState=Rf;Yf.useOptimistic=Rf;
var Uf={readContext:ig,use:hg,useCallback:function(a,b){eg().memoizedState=[a,void 0===b?null:b];return a},useContext:ig,useEffect:Kg,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;Ig(4194308,4,Ng.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ig(4194308,4,a,b)},useInsertionEffect:function(a,b){Ig(4,2,a,b)},useMemo:function(a,b){var c=eg();b=void 0===b?null:b;var d=a();Mf&&(eb(!0),a(),eb(!1));c.memoizedState=[d,b];return d},useReducer:function(a,b,c){var d=
eg();if(void 0!==c){var e=c(b);Mf&&(eb(!0),c(b),eb(!1))}else e=b;d.memoizedState=d.baseState=e;a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:e};d.queue=a;a=a.dispatch=ch.bind(null,P,a);return[d.memoizedState,a]},useRef:function(a){var b=eg();a={current:a};return b.memoizedState=a},useState:function(a){a=xg(a);var b=a.queue,c=Vg.bind(null,P,b);b.dispatch=c;return[a.memoizedState,c]},useDebugValue:Pg,useDeferredValue:function(a){eg().memoizedState=a;return a},useTransition:function(){var a=
xg(!1);a=Tg.bind(null,P,a.queue,!0,!1);eg().memoizedState=a;return[!1,a]},useSyncExternalStore:function(a,b,c){var d=P,e=eg();if(K){if(void 0===c)throw Error(t(407));c=c()}else{c=b();if(null===M)throw Error(t(349));0!==(L&60)||tg(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;Kg(qg.bind(null,d,f,a),[a]);d.flags|=2048;rg(9,sg.bind(null,d,f,c,b),{destroy:void 0},null);return c},useId:function(){var a=eg(),b=M.identifierPrefix;if(K){var c=rd;var d=qd;c=(d&~(1<<32-gb(d)-1)).toString(32)+
c;b=":"+b+"R"+c;c=Nf++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Qf++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},useCacheRefresh:function(){return eg().memoizedState=$g.bind(null,P)}};Uf.useHostTransitionStatus=Xg;
Uf.useFormState=function(a,b){if(K){var c=M.formState;if(null!==c){a:{if(K){if(I){b:{var d=I;for(var e=xd;8!==d.nodeType;){if(!e){d=null;break b}d=Hd(d);if(null===d){d=null;break b}}e=d.data;d="F!"===e||"F"===e?d:null}if(d){I=Hd(d);d="F!"===d.data;break a}}Jd()}d=!1}d&&(b=c[0])}}c=eg();c.memoizedState=c.baseState=b;d={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eg,lastRenderedState:b};c.queue=d;c=Vg.bind(null,P,d);d.dispatch=c;d=eg();e={state:b,dispatch:null,action:a,pending:null};d.queue=
e;c=zg.bind(null,P,e,c);e.dispatch=c;d.memoizedState=a;return[b,c]};Uf.useOptimistic=function(a){var b=eg();b.memoizedState=b.baseState=a;var c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};b.queue=c;b=Ug.bind(null,P,!0,c);c.dispatch=b;return[a,b]};
var Vf={readContext:ig,use:hg,useCallback:Qg,useContext:ig,useEffect:pg,useImperativeHandle:Og,useInsertionEffect:Lg,useLayoutEffect:Mg,useMemo:Rg,useReducer:kg,useRef:Hg,useState:function(){return kg(jg)},useDebugValue:Pg,useDeferredValue:function(a){var b=fg();return Sg(b,Q.memoizedState,a)},useTransition:function(){var a=kg(jg)[0],b=fg().memoizedState;return["boolean"===typeof a?a:ag(a),b]},useSyncExternalStore:og,useId:Yg};Vf.useCacheRefresh=Zg;Vf.useHostTransitionStatus=Xg;
Vf.useFormState=function(a){var b=fg();return Fg(b,Q,a)};Vf.useOptimistic=function(a,b){var c=fg();return yg(c,Q,a,b)};
var Zf={readContext:ig,use:hg,useCallback:Qg,useContext:ig,useEffect:pg,useImperativeHandle:Og,useInsertionEffect:Lg,useLayoutEffect:Mg,useMemo:Rg,useReducer:ng,useRef:Hg,useState:function(){return ng(jg)},useDebugValue:Pg,useDeferredValue:function(a){var b=fg();return null===Q?(b.memoizedState=a,a):Sg(b,Q.memoizedState,a)},useTransition:function(){var a=ng(jg)[0],b=fg().memoizedState;return["boolean"===typeof a?a:ag(a),b]},useSyncExternalStore:og,useId:Yg};Zf.useCacheRefresh=Zg;
Zf.useHostTransitionStatus=Xg;Zf.useFormState=function(a){var b=fg(),c=Q;if(null!==c)return Fg(b,c,a);b=b.memoizedState;c=fg();var d=c.queue.dispatch;c.memoizedState=a;return[b,d]};Zf.useOptimistic=function(a,b){var c=fg();if(null!==Q)return yg(c,Q,a,b);c.baseState=a;return[a,c.queue.dispatch]};function gh(a,b){if(a&&a.defaultProps){b=D({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function hh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:D({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var ih={isMounted:function(a){return(a=a._reactInternals)?Rc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=ah(a),e=Ke(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);b=Le(a,e,d);null!==b&&(wg(b,a,d),Me(b,a,d))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=ah(a),e=Ke(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);b=Le(a,e,d);null!==b&&(wg(b,a,d),Me(b,a,d))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=ah(a),d=Ke(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);b=Le(a,d,c);null!==b&&(wg(b,a,c),Me(b,a,c))}};function jh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ue(c,d)||!Ue(e,f):!0}
function kh(a,b,c){var d=!1,e=Xc;var f=b.contextType;"object"===typeof f&&null!==f?f=ig(f):(e=bd(b)?$c:Yc.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?ad(a,e):Xc);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=ih;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function lh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&ih.enqueueReplaceState(b,b.state,null)}
function mh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};Ie(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=ig(f):(f=bd(b)?$c:Yc.current,e.context=ad(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(hh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&ih.enqueueReplaceState(e,e.state,null),Qe(a,c,e,d),Pe(),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}var nh=new WeakMap;function oh(a,b){if("object"===typeof a&&null!==a){var c=nh.get(a);"string"!==typeof c&&(c=hc(b),nh.set(a,c))}else c=hc(b);return{value:a,source:b,stack:c,digest:null}}
function ph(a,b,c){"string"===typeof c&&nh.set(a,c);return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function qh(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}function rh(a,b,c){c=Ke(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){sh||(sh=!0,th=d);qh(a,b)};return c}
function uh(a,b,c){c=Ke(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){qh(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){qh(a,b);"function"!==typeof d&&(null===vh?vh=new Set([this]):vh.add(this));var g=b.stack;this.componentDidCatch(b.value,{componentStack:null!==g?g:""})});return c}
function wh(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=Ke(2),b.tag=2,Le(c,b,2))),c.lanes|=2),a;a.flags|=65536;a.lanes=e;return a}
function xh(a,b,c,d,e){c.flags|=32768;if(null!==d&&"object"===typeof d&&"function"===typeof d.then){var f=c.tag;0!==(c.mode&1)||0!==f&&11!==f&&15!==f||((f=c.alternate)?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null));f=zf.current;if(null!==f){switch(f.tag){case 13:return c.mode&1&&(null===Af?yh():null===f.alternate&&0===S&&(S=3)),f.flags&=-257,wh(f,b,c,a,e),d===Xe?f.flags|=16384:(b=f.updateQueue,null===b?f.updateQueue=new Set([d]):
b.add(d),f.mode&1&&zh(a,d,e)),!1;case 22:if(f.mode&1)return f.flags|=65536,d===Xe?f.flags|=16384:(b=f.updateQueue,null===b?(b={transitions:null,markerInstances:null,retryQueue:new Set([d])},f.updateQueue=b):(c=b.retryQueue,null===c?b.retryQueue=new Set([d]):c.add(d)),zh(a,d,e)),!1}throw Error(t(435,f.tag));}if(1===a.tag)return zh(a,d,e),yh(),!1;d=Error(t(426))}if(K&&c.mode&1&&(f=zf.current,null!==f))return 0===(f.flags&65536)&&(f.flags|=256),wh(f,b,c,a,e),Pd(oh(d,c)),!1;a=d=oh(d,c);4!==S&&(S=2);null===
Ah?Ah=[a]:Ah.push(a);if(null===b)return!0;a=b;do{switch(a.tag){case 3:return a.flags|=65536,e&=-e,a.lanes|=e,e=rh(a,d,e),Ne(a,e),!1;case 1:if(b=d,c=a.type,f=a.stateNode,0===(a.flags&128)&&("function"===typeof c.getDerivedStateFromError||null!==f&&"function"===typeof f.componentDidCatch&&(null===vh||!vh.has(f))))return a.flags|=65536,e&=-e,a.lanes|=e,e=uh(a,b,e),Ne(a,e),!1}a=a.return}while(null!==a);return!1}var Bh=da.ReactCurrentOwner,Ch=Error(t(461)),mg=!1;
function Dh(a,b,c,d){b.child=null===a?sf(b,null,c,d):rf(b,a.child,c,d)}function Eh(a,b,c,d,e){c=c.render;var f=b.ref;Fh(b,e);d=Tf(a,b,c,d,f,e);c=bg();if(null!==a&&!mg)return cg(a,b,e),Gh(a,b,e);K&&c&&ud(b);b.flags|=1;Dh(a,b,d,e);return b.child}
function Hh(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!Ih(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,Jh(a,b,f,d,e);a=nf(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ue;if(c(g,d)&&a.ref===b.ref)return Gh(a,b,e)}b.flags|=1;a=lf(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function Jh(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ue(f,d)&&a.ref===b.ref)if(mg=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(mg=!0);else return b.lanes=a.lanes,Gh(a,b,e)}return Kh(a,b,c,d,e)}
function Lh(a,b,c){var d=b.pendingProps,e=d.children,f=0!==(b.stateNode._pendingVisibility&2),g=null!==a?a.memoizedState:null;Mh(a,b);if("hidden"===d.mode||f){if(0!==(b.flags&128)){c=null!==g?g.baseLanes|c:c;if(null!==a){d=b.child=a.child;for(e=0;null!==d;)e=e|d.lanes|d.childLanes,d=d.sibling;b.childLanes=e&~c}else b.childLanes=0,b.child=null;return Nh(a,b,c)}if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null},null!==a&&Oh(b,null),xf(),Df(b);else if(0!==(c&536870912))b.memoizedState={baseLanes:0,
cachePool:null},null!==a&&Oh(b,null!==g?g.cachePool:null),null!==g?vf(b,g):xf(),Df(b);else return b.lanes=b.childLanes=536870912,Nh(a,b,null!==g?g.baseLanes|c:c)}else null!==g?(Oh(b,g.cachePool),vf(b,g),Ef(b),b.memoizedState=null):(null!==a&&Oh(b,null),xf(),Ef(b));Dh(a,b,e,c);return b.child}function Nh(a,b,c){var d=Ph();d=null===d?null:{parent:U._currentValue,pool:d};b.memoizedState={baseLanes:c,cachePool:d};null!==a&&Oh(b,null);xf();Df(b);return null}
function Mh(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function Kh(a,b,c,d,e){var f=bd(c)?$c:Yc.current;f=ad(b,f);Fh(b,e);c=Tf(a,b,c,d,f,e);d=bg();if(null!==a&&!mg)return cg(a,b,e),Gh(a,b,e);K&&d&&ud(b);b.flags|=1;Dh(a,b,c,e);return b.child}function Qh(a,b,c,d,e,f){Fh(b,f);c=Wf(b,d,c,e);Xf();d=bg();if(null!==a&&!mg)return cg(a,b,f),Gh(a,b,f);K&&d&&ud(b);b.flags|=1;Dh(a,b,c,f);return b.child}
function Rh(a,b,c,d,e){if(bd(c)){var f=!0;fd(b)}else f=!1;Fh(b,e);if(null===b.stateNode)Sh(a,b),kh(b,c,d),mh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,n=c.contextType;"object"===typeof n&&null!==n?n=ig(n):(n=bd(c)?$c:Yc.current,n=ad(b,n));var u=c.getDerivedStateFromProps,w="function"===typeof u||"function"===typeof g.getSnapshotBeforeUpdate;w||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==n)&&lh(b,g,d,n);He=!1;var q=b.memoizedState;g.state=q;Qe(b,d,g,e);Pe();k=b.memoizedState;h!==d||q!==k||Zc.current||He?("function"===typeof u&&(hh(b,c,u,d),k=b.memoizedState),(h=He||jh(b,c,h,d,q,k,n))?(w||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=
4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=n,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;Je(a,b);h=b.memoizedProps;n=b.type===b.elementType?h:gh(b.type,h);g.props=n;w=b.pendingProps;q=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=ig(k):(k=bd(c)?$c:Yc.current,k=ad(b,k));var r=c.getDerivedStateFromProps;(u="function"===typeof r||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==w||q!==k)&&lh(b,g,d,k);He=!1;q=b.memoizedState;g.state=q;Qe(b,d,g,e);Pe();var y=b.memoizedState;h!==w||q!==y||Zc.current||He?("function"===typeof r&&(hh(b,c,r,d),y=b.memoizedState),(n=He||jh(b,c,n,d,q,y,k)||!1)?(u||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,y,k),"function"===
typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,y,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&q===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&q===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=y),g.props=d,g.state=y,g.context=k,d=n):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&q===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&q===a.memoizedState||(b.flags|=1024),d=!1)}return Th(a,b,c,d,f,e)}
function Th(a,b,c,d,e,f){Mh(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&gd(b,c,!1),Gh(a,b,f);d=b.stateNode;Bh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=rf(b,a.child,null,f),b.child=rf(b,null,h,f)):Dh(a,b,h,f);b.memoizedState=d.state;e&&gd(b,c,!0);return b.child}function Uh(a){var b=a.stateNode;b.pendingContext?dd(a,b.pendingContext,b.pendingContext!==b.context):b.context&&dd(a,b.context,!1);Ja(a,b.containerInfo)}
function Vh(a,b,c,d,e){Od();Pd(e);b.flags|=256;Dh(a,b,c,d);return b.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function Xh(a){return{baseLanes:a,cachePool:Yh()}}function Zh(a,b,c){a=null!==a?a.childLanes&~c:0;b&&(a|=pe);return a}
function $h(a,b,c){var d=b.pendingProps,e=!1,f=0!==(b.flags&128),g;(g=f)||(g=null!==a&&null===a.memoizedState?!1:0!==(Cf.current&2));g&&(e=!0,b.flags&=-129);g=0!==(b.flags&32);b.flags&=-33;if(null===a){if(K){e?Bf(b):Ef(b);if(K){var h=f=I;if(!h)Id(b)&&Jd(),Ad(H,b),K=!1,H=b,I=f;else if(!Gd(b,h)){Id(b)&&Jd();I=Hd(h);var k=H;I&&Gd(b,I)?yd(k,h):(Ad(H,b),K=!1,H=b,I=f)}}f=b.memoizedState;if(null!==f&&(f=f.dehydrated,null!==f))return 0===(b.mode&1)?b.lanes=2:"$!"===f.data?b.lanes=16:b.lanes=536870912,null;
Ff(b)}f=d.children;d=d.fallback;if(e)return Ef(b),e=b.mode,h=b.child,f={mode:"hidden",children:f},0===(e&1)&&null!==h?(h.childLanes=0,h.pendingProps=f):h=ai(f,e,0,null),d=pf(d,e,c,null),h.return=b,d.return=b,h.sibling=d,b.child=h,e=b.child,e.memoizedState=Xh(c),e.childLanes=Zh(a,g,c),b.memoizedState=Wh,d;Bf(b);return bi(b,f)}h=a.memoizedState;if(null!==h&&(k=h.dehydrated,null!==k))return ci(a,b,f,g,d,k,h,c);if(e){Ef(b);e=d.fallback;f=b.mode;h=a.child;k=h.sibling;var n={mode:"hidden",children:d.children};
0===(f&1)&&b.child!==h?(d=b.child,d.childLanes=0,d.pendingProps=n,b.deletions=null):(d=lf(h,n),d.subtreeFlags=h.subtreeFlags&31457280);null!==k?e=lf(k,e):(e=pf(e,f,c,null),e.flags|=2);e.return=b;d.return=b;d.sibling=e;b.child=d;d=e;e=b.child;f=a.child.memoizedState;null===f?f=Xh(c):(h=f.cachePool,null!==h?(k=U._currentValue,h=h.parent!==k?{parent:k,pool:k}:h):h=Yh(),f={baseLanes:f.baseLanes|c,cachePool:h});e.memoizedState=f;e.childLanes=Zh(a,g,c);b.memoizedState=Wh;return d}Bf(b);g=a.child;a=g.sibling;
g=lf(g,{mode:"visible",children:d.children});0===(b.mode&1)&&(g.lanes=c);g.return=b;g.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=g;b.memoizedState=null;return g}function bi(a,b){b=ai({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function di(a,b,c,d){null!==d&&Pd(d);rf(b,a.child,null,c);a=bi(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function ci(a,b,c,d,e,f,g,h){if(c){if(b.flags&256)return Bf(b),b.flags&=-257,f=ph(Error(t(422))),di(a,b,h,f);if(null!==b.memoizedState)return Ef(b),b.child=a.child,b.flags|=128,null;Ef(b);f=e.fallback;g=b.mode;e=ai({mode:"visible",children:e.children},g,0,null);f=pf(f,g,h,null);f.flags|=2;e.return=b;f.return=b;e.sibling=f;b.child=e;0!==(b.mode&1)&&rf(b,a.child,null,h);g=b.child;g.memoizedState=Xh(h);g.childLanes=Zh(a,d,h);b.memoizedState=Wh;return f}Bf(b);if(0===(b.mode&1))return di(a,b,h,null);if("$!"===
f.data){f=f.nextSibling&&f.nextSibling.dataset;if(f)var k=f.dgst;f=k;d=Error(t(419));d.digest=f;f=ph(d,f,void 0);return di(a,b,h,f)}d=0!==(h&a.childLanes);if(mg||d){d=M;if(null!==d){e=h&-h;if(0!==(e&42))e=1;else switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=64;break;
case 268435456:e=134217728;break;default:e=0}e=0!==(e&(d.suspendedLanes|h))?0:e;if(0!==e&&e!==g.retryLane)throw g.retryLane=e,Yd(a,e),wg(d,a,e),Ch;}"$?"!==f.data&&yh();return di(a,b,h,null)}if("$?"===f.data)return b.flags|=128,b.child=a.child,b=ei.bind(null,a),f._reactRetry=b,null;a=g.treeContext;I=Dd(f.nextSibling);H=b;K=!0;wd=null;xd=!1;null!==a&&(nd[od++]=qd,nd[od++]=rd,nd[od++]=pd,qd=a.id,rd=a.overflow,pd=b);b=bi(b,e.children);b.flags|=4096;return b}
function fi(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);gi(a.return,b,c)}function hi(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function ii(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Dh(a,b,d.children,c);d=Cf.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&fi(a,c,b);else if(19===a.tag)fi(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}F(Cf,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Gf(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);hi(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Gf(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}hi(b,!0,c,null,f);break;case "together":hi(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function Sh(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Gh(a,b,c){null!==a&&(b.dependencies=a.dependencies);Re|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(t(153));if(null!==b.child){a=b.child;c=lf(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=lf(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function ji(a,b,c){switch(b.tag){case 3:Uh(b);ki(b,U,a.memoizedState.cache);Od();break;case 27:case 5:Na(b);break;case 1:bd(b.type)&&fd(b);break;case 4:Ja(b,b.stateNode.containerInfo);break;case 10:ki(b,b.type._context,b.memoizedProps.value);break;case 13:var d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return Bf(b),b.flags|=128,null;if(0!==(c&b.child.childLanes))return $h(a,b,c);Bf(b);a=Gh(a,b,c);return null!==a?a.sibling:null}Bf(b);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return ii(a,
b,c);b.flags|=128}var e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);F(Cf,Cf.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,Lh(a,b,c);case 24:ki(b,U,a.memoizedState.cache)}return Gh(a,b,c)}var li=ka(null),mi=null,ni=null,oi=null;function pi(){oi=ni=mi=null}function ki(a,b,c){F(li,b._currentValue);b._currentValue=c}function qi(a){a._currentValue=li.current;E(li)}
function gi(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ri(a,b,c){var d=a.child;null!==d&&(d.return=a);for(;null!==d;){var e=d.dependencies;if(null!==e){var f=d.child;for(var g=e.firstContext;null!==g;){if(g.context===b){if(1===d.tag){g=Ke(c&-c);g.tag=2;var h=d.updateQueue;if(null!==h){h=h.shared;var k=h.pending;null===k?g.next=g:(g.next=k.next,k.next=g);h.pending=g}}d.lanes|=c;g=d.alternate;null!==g&&(g.lanes|=c);gi(d.return,c,a);e.lanes|=c;break}g=g.next}}else if(10===d.tag)f=d.type===a.type?null:d.child;else if(18===d.tag){f=d.return;if(null===
f)throw Error(t(341));f.lanes|=c;e=f.alternate;null!==e&&(e.lanes|=c);gi(f,c,a);f=d.sibling}else f=d.child;if(null!==f)f.return=d;else for(f=d;null!==f;){if(f===a){f=null;break}d=f.sibling;if(null!==d){d.return=f.return;f=d;break}f=f.return}d=f}}function Fh(a,b){mi=a;oi=ni=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(mg=!0),a.firstContext=null)}function ig(a){return si(mi,a)}function qf(a,b,c){null===mi&&Fh(a,c);return si(a,b)}
function si(a,b){var c=b._currentValue;if(oi!==b)if(b={context:b,memoizedValue:c,next:null},null===ni){if(null===a)throw Error(t(308));ni=b;a.dependencies={lanes:0,firstContext:b}}else ni=ni.next=b;return c}
var ti="undefined"!==typeof AbortController?AbortController:function(){var a=[],b=this.signal={aborted:!1,addEventListener:function(c,d){a.push(d)}};this.abort=function(){b.aborted=!0;a.forEach(function(c){return c()})}},ui=ba.unstable_scheduleCallback,vi=ba.unstable_NormalPriority,U={$$typeof:sa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bh(){return{controller:new ti,data:new Map,refCount:0}}
function wi(a){a.refCount--;0===a.refCount&&ui(vi,function(){a.controller.abort()})}var xi=da.ReactCurrentBatchConfig;function fh(){var a=xi.transition;null!==a&&a._callbacks.add(yi);return a}function yi(a,b){Ee(a,b)}function Cg(a,b){a._callbacks.forEach(function(c){return c(a,b)})}var zi=ka(null);function Ph(){var a=zi.current;return null!==a?a:M.pooledCache}function Oh(a,b){null===b?F(zi,zi.current):F(zi,b.pool)}function Yh(){var a=Ph();return null===a?null:{parent:U._currentValue,pool:a}}
function Ai(a){a.flags|=4}function Bi(a,b){if("stylesheet"!==b.type||0!==(b.state.loading&4))a.flags&=-16777217;else if(a.flags|=16777216,0===(L&42)&&(b="stylesheet"===b.type&&0===(b.state.loading&3)?!1:!0,!b))if(Ci())a.flags|=8192;else throw af=Xe,We;}function Di(a,b){null!==b?a.flags|=4:a.flags&16384&&(b=22!==a.tag?qb():536870912,a.lanes|=b)}
function Ei(a,b){if(!K)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function V(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&31457280,d|=e.flags&31457280,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fi(a,b,c){var d=b.pendingProps;vd(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(b),null;case 1:return bd(b.type)&&cd(),V(b),null;case 3:c=b.stateNode;d=null;null!==a&&(d=a.memoizedState.cache);b.memoizedState.cache!==d&&(b.flags|=2048);qi(U);Ma();E(Zc);E(Yc);c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null);if(null===a||null===a.child)Ld(b)?Ai(b):null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=
1024,null!==wd&&(Gi(wd),wd=null));V(b);return null;case 26:c=b.memoizedState;if(null===a)Ai(b),null!==c?(V(b),Bi(b,c)):(V(b),b.flags&=-16777217);else{var e=a.memoizedState;c!==e&&Ai(b);null!==c?(V(b),c===e?b.flags&=-16777217:Bi(b,c)):(a.memoizedProps!==d&&Ai(b),V(b),b.flags&=-16777217)}return null;case 27:Oa(b);c=Ga.current;e=b.type;if(null!==a&&null!=b.stateNode)a.memoizedProps!==d&&Ai(b);else{if(!d){if(null===b.stateNode)throw Error(t(166));V(b);return null}a=Ea.current;Ld(b)?Hi(b.stateNode,b.type,
b.memoizedProps,a,b):(a=Ii(e,d,c),b.stateNode=a,Ai(b))}V(b);return null;case 5:Oa(b);c=b.type;if(null!==a&&null!=b.stateNode)a.memoizedProps!==d&&Ai(b);else{if(!d){if(null===b.stateNode)throw Error(t(166));V(b);return null}a=Ea.current;if(Ld(b))Hi(b.stateNode,b.type,b.memoizedProps,a,b);else{e=Ji(Ga.current);switch(a){case 1:a=e.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:a=e.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case "svg":a=e.createElementNS("http://www.w3.org/2000/svg",
c);break;case "math":a=e.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case "script":a=e.createElement("div");a.innerHTML="<script>\x3c/script>";a=a.removeChild(a.firstChild);break;case "select":a="string"===typeof d.is?e.createElement("select",{is:d.is}):e.createElement("select");d.multiple?a.multiple=!0:d.size&&(a.size=d.size);break;default:a="string"===typeof d.is?e.createElement(c,{is:d.is}):e.createElement(c)}}a[Ab]=b;a[Bb]=d;a:for(e=b.child;null!==e;){if(5===e.tag||6===e.tag)a.appendChild(e.stateNode);
else if(4!==e.tag&&27!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===b)break a;for(;null===e.sibling;){if(null===e.return||e.return===b)break a;e=e.return}e.sibling.return=e.return;e=e.sibling}b.stateNode=a;a:switch(Ki(a,c,d),c){case "button":case "input":case "select":case "textarea":a=!!d.autoFocus;break a;case "img":a=!0;break a;default:a=!1}a&&Ai(b)}}V(b);b.flags&=-16777217;return null;case 6:if(a&&null!=b.stateNode)a.memoizedProps!==d&&Ai(b);else{if("string"!==typeof d&&
null===b.stateNode)throw Error(t(166));a=Ga.current;if(Ld(b)){a:{a=b.stateNode;c=b.memoizedProps;a[Ab]=b;if(d=a.nodeValue!==c)if(e=H,null!==e)switch(e.tag){case 3:e=0!==(e.mode&1);Li(a.nodeValue,c,e);if(e){a=!1;break a}break;case 27:case 5:var f=0!==(e.mode&1);!0!==e.memoizedProps.suppressHydrationWarning&&Li(a.nodeValue,c,f);if(f){a=!1;break a}}a=d}a&&Ai(b)}else a=Ji(a).createTextNode(d),a[Ab]=b,b.stateNode=a}V(b);return null;case 13:Ff(b);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==
a.memoizedState.dehydrated){if(K&&null!==I&&0!==(b.mode&1)&&0===(b.flags&128))Nd(),Od(),b.flags|=384,e=!1;else if(e=Ld(b),null!==d&&null!==d.dehydrated){if(null===a){if(!e)throw Error(t(318));e=b.memoizedState;e=null!==e?e.dehydrated:null;if(!e)throw Error(t(317));e[Ab]=b}else Od(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;V(b);e=!1}else null!==wd&&(Gi(wd),wd=null),e=!0;if(!e)return b.flags&256?b:null}if(0!==(b.flags&128))return b.lanes=c,b;c=null!==d;a=null!==a&&null!==a.memoizedState;
c&&(d=b.child,e=null,null!==d.alternate&&null!==d.alternate.memoizedState&&null!==d.alternate.memoizedState.cachePool&&(e=d.alternate.memoizedState.cachePool.pool),f=null,null!==d.memoizedState&&null!==d.memoizedState.cachePool&&(f=d.memoizedState.cachePool.pool),f!==e&&(d.flags|=2048));c!==a&&c&&(b.child.flags|=8192);Di(b,b.updateQueue);V(b);return null;case 4:return Ma(),null===a&&Mi(b.stateNode.containerInfo),V(b),null;case 10:return qi(b.type._context),V(b),null;case 17:return bd(b.type)&&cd(),
V(b),null;case 19:E(Cf);e=b.memoizedState;if(null===e)return V(b),null;d=0!==(b.flags&128);f=e.rendering;if(null===f)if(d)Ei(e,!1);else{if(0!==S||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){f=Gf(a);if(null!==f){b.flags|=128;Ei(e,!1);a=f.updateQueue;b.updateQueue=a;Di(b,a);b.subtreeFlags=0;a=c;for(c=b.child;null!==c;)Ni(c,a),c=c.sibling;F(Cf,Cf.current&1|2);return b.child}a=a.sibling}null!==e.tail&&Ta()>Oi&&(b.flags|=128,d=!0,Ei(e,!1),b.lanes=4194304)}else{if(!d)if(a=Gf(f),null!==a){if(b.flags|=
128,d=!0,a=a.updateQueue,b.updateQueue=a,Di(b,a),Ei(e,!0),null===e.tail&&"hidden"===e.tailMode&&!f.alternate&&!K)return V(b),null}else 2*Ta()-e.renderingStartTime>Oi&&536870912!==c&&(b.flags|=128,d=!0,Ei(e,!1),b.lanes=4194304);e.isBackwards?(f.sibling=b.child,b.child=f):(a=e.last,null!==a?a.sibling=f:b.child=f,e.last=f)}if(null!==e.tail)return b=e.tail,e.rendering=b,e.tail=b.sibling,e.renderingStartTime=Ta(),b.sibling=null,a=Cf.current,F(Cf,d?a&1|2:a&1),b;V(b);return null;case 22:case 23:return Ff(b),
yf(),d=null!==b.memoizedState,null!==a?null!==a.memoizedState!==d&&(b.flags|=8192):d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(c&536870912)&&0===(b.flags&128)&&(V(b),b.subtreeFlags&6&&(b.flags|=8192)):V(b),c=b.updateQueue,null!==c&&Di(b,c.retryQueue),c=null,null!==a&&null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(c=a.memoizedState.cachePool.pool),d=null,null!==b.memoizedState&&null!==b.memoizedState.cachePool&&(d=b.memoizedState.cachePool.pool),d!==c&&(b.flags|=2048),null!==a&&E(zi),null;
case 24:return c=null,null!==a&&(c=a.memoizedState.cache),b.memoizedState.cache!==c&&(b.flags|=2048),qi(U),V(b),null;case 25:return null}throw Error(t(156,b.tag));}
function Pi(a,b){vd(b);switch(b.tag){case 1:return bd(b.type)&&cd(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return qi(U),Ma(),E(Zc),E(Yc),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 26:case 27:case 5:return Oa(b),null;case 13:Ff(b);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(t(340));Od()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(Cf),null;case 4:return Ma(),null;case 10:return qi(b.type._context),
null;case 22:case 23:return Ff(b),yf(),null!==a&&E(zi),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 24:return qi(U),null;case 25:return null;default:return null}}
function Qi(a,b){vd(b);switch(b.tag){case 1:a=b.type.childContextTypes;null!==a&&void 0!==a&&cd();break;case 3:qi(U);Ma();E(Zc);E(Yc);break;case 26:case 27:case 5:Oa(b);break;case 4:Ma();break;case 13:Ff(b);break;case 19:E(Cf);break;case 10:qi(b.type._context);break;case 22:case 23:Ff(b);yf();null!==a&&E(zi);break;case 24:qi(U)}}function Ri(a,b,c){var d=Array.prototype.slice.call(arguments,3);try{b.apply(c,d)}catch(e){this.onError(e)}}
var Si=!1,Ti=null,Ui=!1,Vi=null,Wi={onError:function(a){Si=!0;Ti=a}};function Xi(a,b,c,d,e,f,g,h,k){Si=!1;Ti=null;Ri.apply(Wi,arguments)}function Yi(a,b,c,d,e,f,g,h,k){Xi.apply(this,arguments);if(Si){if(Si){var n=Ti;Si=!1;Ti=null}else throw Error(t(198));Ui||(Ui=!0,Vi=n)}}var Zi=!1,$i=!1,aj="function"===typeof WeakSet?WeakSet:Set,bj=null;
function cj(a,b){try{var c=a.ref;if(null!==c){var d=a.stateNode;switch(a.tag){case 26:case 27:case 5:var e=d;break;default:e=d}"function"===typeof c?a.refCleanup=c(e):c.current=e}}catch(f){W(a,b,f)}}function dj(a,b){var c=a.ref,d=a.refCleanup;if(null!==c)if("function"===typeof d)try{d()}catch(e){W(a,b,e)}finally{a.refCleanup=null,a=a.alternate,null!=a&&(a.refCleanup=null)}else if("function"===typeof c)try{c(null)}catch(e){W(a,b,e)}else c.current=null}
function ej(a,b,c){try{c()}catch(d){W(a,b,d)}}var fj=!1;
function gj(a,b){hj=ij;a=jj();if(kj(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(v){c=null;break a}var g=0,h=-1,k=-1,n=0,u=0,w=a,q=null;b:for(;;){for(var r;;){w!==c||0!==e&&3!==w.nodeType||(h=g+e);w!==f||0!==d&&3!==w.nodeType||(k=g+d);3===w.nodeType&&(g+=
w.nodeValue.length);if(null===(r=w.firstChild))break;q=w;w=r}for(;;){if(w===a)break b;q===c&&++n===e&&(h=g);q===f&&++u===d&&(k=g);if(null!==(r=w.nextSibling))break;w=q;q=w.parentNode}w=r}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;lj={focusedElem:a,selectionRange:c};ij=!1;for(bj=b;null!==bj;)if(b=bj,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,bj=a;else for(;null!==bj;){b=bj;try{var y=b.alternate,C=b.flags;switch(b.tag){case 0:break;case 11:case 15:break;
case 1:if(0!==(C&1024)&&null!==y){var T=y.memoizedProps,m=y.memoizedState,l=b.stateNode,p=l.getSnapshotBeforeUpdate(b.elementType===b.type?T:gh(b.type,T),m);l.__reactInternalSnapshotBeforeUpdate=p}break;case 3:0!==(C&1024)&&mj(b.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(0!==(C&1024))throw Error(t(163));}}catch(v){W(b,b.return,v)}a=b.sibling;if(null!==a){a.return=b.return;bj=a;break}bj=b.return}y=fj;fj=!1;return y}
function nj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.inst,g=f.destroy;void 0!==g&&(f.destroy=void 0,ej(b,c,g))}e=e.next}while(e!==d)}}function oj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create,e=c.inst;d=d();e.destroy=d}c=c.next}while(c!==b)}}function pj(a,b){try{oj(b,a)}catch(c){W(a,a.return,c)}}
function qj(a){var b=a.updateQueue;if(null!==b){var c=a.stateNode;try{Te(b,c)}catch(d){W(a,a.return,d)}}}function rj(a){var b=a.type,c=a.memoizedProps,d=a.stateNode;try{a:switch(b){case "button":case "input":case "select":case "textarea":c.autoFocus&&d.focus();break a;case "img":c.src&&(d.src=c.src)}}catch(e){W(a,a.return,e)}}
function sj(a,b,c){var d=c.flags;switch(c.tag){case 0:case 11:case 15:tj(a,c);d&4&&pj(c,5);break;case 1:tj(a,c);if(d&4)if(a=c.stateNode,null===b)try{a.componentDidMount()}catch(h){W(c,c.return,h)}else{var e=c.elementType===c.type?b.memoizedProps:gh(c.type,b.memoizedProps);b=b.memoizedState;try{a.componentDidUpdate(e,b,a.__reactInternalSnapshotBeforeUpdate)}catch(h){W(c,c.return,h)}}d&64&&qj(c);d&512&&cj(c,c.return);break;case 3:tj(a,c);if(d&64&&(d=c.updateQueue,null!==d)){a=null;if(null!==c.child)switch(c.child.tag){case 27:case 5:a=
c.child.stateNode;break;case 1:a=c.child.stateNode}try{Te(d,a)}catch(h){W(c,c.return,h)}}break;case 26:tj(a,c);d&512&&cj(c,c.return);break;case 27:case 5:tj(a,c);null===b&&d&4&&rj(c);d&512&&cj(c,c.return);break;case 12:tj(a,c);break;case 13:tj(a,c);d&4&&uj(a,c);break;case 22:if(0!==(c.mode&1)){if(e=null!==c.memoizedState||Zi,!e){b=null!==b&&null!==b.memoizedState||$i;var f=Zi,g=$i;Zi=e;($i=b)&&!g?vj(a,c,0!==(c.subtreeFlags&8772)):tj(a,c);Zi=f;$i=g}}else tj(a,c);d&512&&("manual"===c.memoizedProps.mode?
cj(c,c.return):dj(c,c.return));break;default:tj(a,c)}}function wj(a){var b=a.alternate;null!==b&&(a.alternate=null,wj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&Jb(b));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function xj(a){return 5===a.tag||3===a.tag||26===a.tag||27===a.tag||4===a.tag}
function yj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||xj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&27!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function zj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Aj));else if(4!==d&&27!==d&&(a=a.child,null!==a))for(zj(a,b,c),a=a.sibling;null!==a;)zj(a,b,c),a=a.sibling}
function Bj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&27!==d&&(a=a.child,null!==a))for(Bj(a,b,c),a=a.sibling;null!==a;)Bj(a,b,c),a=a.sibling}var Cj=null,Dj=!1;function Ej(a,b,c){for(c=c.child;null!==c;)Fj(a,b,c),c=c.sibling}
function Fj(a,b,c){if(cb&&"function"===typeof cb.onCommitFiberUnmount)try{cb.onCommitFiberUnmount(bb,c)}catch(k){}switch(c.tag){case 26:$i||dj(c,b);Ej(a,b,c);c.memoizedState?c.memoizedState.count--:c.stateNode&&(c=c.stateNode,c.parentNode.removeChild(c));break;case 27:$i||dj(c,b);var d=Cj,e=Dj;Cj=c.stateNode;Ej(a,b,c);c=c.stateNode;for(a=c.attributes;a.length;)c.removeAttributeNode(a[0]);Jb(c);Cj=d;Dj=e;break;case 5:$i||dj(c,b);case 6:d=Cj;e=Dj;Cj=null;Ej(a,b,c);Cj=d;Dj=e;null!==Cj&&(Dj?(a=Cj,c=c.stateNode,
8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):Cj.removeChild(c.stateNode));break;case 18:null!==Cj&&(Dj?(a=Cj,c=c.stateNode,8===a.nodeType?Gj(a.parentNode,c):1===a.nodeType&&Gj(a,c),Hj(a)):Gj(Cj,c.stateNode));break;case 4:d=Cj;e=Dj;Cj=c.stateNode.containerInfo;Dj=!0;Ej(a,b,c);Cj=d;Dj=e;break;case 0:case 11:case 14:case 15:if(!$i&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e.tag,g=e.inst,h=g.destroy;void 0!==h&&(0!==(f&2)?(g.destroy=void 0,ej(c,b,h)):
0!==(f&4)&&(g.destroy=void 0,ej(c,b,h)));e=e.next}while(e!==d)}Ej(a,b,c);break;case 1:if(!$i&&(dj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(k){W(c,b,k)}Ej(a,b,c);break;case 21:Ej(a,b,c);break;case 22:dj(c,b);c.mode&1?($i=(d=$i)||null!==c.memoizedState,Ej(a,b,c),$i=d):Ej(a,b,c);break;default:Ej(a,b,c)}}
function uj(a,b){if(null===b.memoizedState&&(a=b.alternate,null!==a&&(a=a.memoizedState,null!==a&&(a=a.dehydrated,null!==a))))try{Hj(a)}catch(c){W(b,b.return,c)}}function Ij(a){switch(a.tag){case 13:case 19:var b=a.stateNode;null===b&&(b=a.stateNode=new aj);return b;case 22:return a=a.stateNode,b=a._retryCache,null===b&&(b=a._retryCache=new aj),b;default:throw Error(t(435,a.tag));}}function Jj(a,b){var c=Ij(a);b.forEach(function(d){var e=Kj.bind(null,a,d);c.has(d)||(c.add(d),d.then(e,e))})}
function Lj(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 27:case 5:Cj=h.stateNode;Dj=!1;break a;case 3:Cj=h.stateNode.containerInfo;Dj=!0;break a;case 4:Cj=h.stateNode.containerInfo;Dj=!0;break a}h=h.return}if(null===Cj)throw Error(t(160));Fj(f,g,e);Cj=null;Dj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(n){W(e,b,n)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)Mj(b,a),b=b.sibling}
var Nj=null;
function Mj(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Lj(b,a);Oj(a);if(d&4){try{nj(3,a,a.return),oj(3,a)}catch(r){W(a,a.return,r)}try{nj(5,a,a.return)}catch(r){W(a,a.return,r)}}break;case 1:Lj(b,a);Oj(a);d&512&&null!==c&&dj(c,c.return);d&64&&Zi&&(a=a.updateQueue,null!==a&&(c=a.callbacks,null!==c&&(d=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=null===d?c:d.concat(c))));break;case 26:var e=Nj;Lj(b,a);Oj(a);d&512&&null!==c&&dj(c,c.return);if(d&4)if(b=null!==
c?c.memoizedState:null,d=a.memoizedState,null===c)if(null===d)if(null===a.stateNode){a:{c=a.type;d=a.memoizedProps;b=e.ownerDocument||e;b:switch(c){case "title":e=b.getElementsByTagName("title")[0];if(!e||e[Ib]||e[Ab]||"http://www.w3.org/2000/svg"===e.namespaceURI||e.hasAttribute("itemprop"))e=b.createElement(c),b.head.insertBefore(e,b.querySelector("head > title"));Ki(e,c,d);e[Ab]=a;Qb(e);c=e;break a;case "link":var f=Pj("link","href",b).get(c+(d.href||""));if(f)for(var g=0;g<f.length;g++)if(e=f[g],
e.getAttribute("href")===(null==d.href?null:d.href)&&e.getAttribute("rel")===(null==d.rel?null:d.rel)&&e.getAttribute("title")===(null==d.title?null:d.title)&&e.getAttribute("crossorigin")===(null==d.crossOrigin?null:d.crossOrigin)){f.splice(g,1);break b}e=b.createElement(c);Ki(e,c,d);b.head.appendChild(e);break;case "meta":if(f=Pj("meta","content",b).get(c+(d.content||"")))for(g=0;g<f.length;g++)if(e=f[g],e.getAttribute("content")===(null==d.content?null:""+d.content)&&e.getAttribute("name")===(null==
d.name?null:d.name)&&e.getAttribute("property")===(null==d.property?null:d.property)&&e.getAttribute("http-equiv")===(null==d.httpEquiv?null:d.httpEquiv)&&e.getAttribute("charset")===(null==d.charSet?null:d.charSet)){f.splice(g,1);break b}e=b.createElement(c);Ki(e,c,d);b.head.appendChild(e);break;default:throw Error(t(468,c));}e[Ab]=a;Qb(e);c=e}a.stateNode=c}else Qj(e,a.type,a.stateNode);else a.stateNode=Rj(e,d,a.memoizedProps);else if(b!==d)null===b?null!==c.stateNode&&(c=c.stateNode,c.parentNode.removeChild(c)):
b.count--,null===d?Qj(e,a.type,a.stateNode):Rj(e,d,a.memoizedProps);else if(null===d&&null!==a.stateNode){a.updateQueue=null;try{var h=a.stateNode,k=a.memoizedProps;Sj(h,a.type,c.memoizedProps,k);h[Bb]=k}catch(r){W(a,a.return,r)}}break;case 27:if(d&4&&null===a.alternate){e=a.stateNode;f=a.memoizedProps;for(g=e.firstChild;g;){var n=g.nextSibling,u=g.nodeName;g[Ib]||"HEAD"===u||"BODY"===u||"SCRIPT"===u||"STYLE"===u||"LINK"===u&&"stylesheet"===g.rel.toLowerCase()||e.removeChild(g);g=n}g=a.type;for(n=
e.attributes;n.length;)e.removeAttributeNode(n[0]);Ki(e,g,f);e[Ab]=a;e[Bb]=f}case 5:Lj(b,a);Oj(a);d&512&&null!==c&&dj(c,c.return);if(a.flags&32){b=a.stateNode;try{Ec(b,"")}catch(r){W(a,a.return,r)}}if(d&4&&(d=a.stateNode,null!=d)){b=a.memoizedProps;c=null!==c?c.memoizedProps:b;e=a.type;a.updateQueue=null;try{Sj(d,e,c,b),d[Bb]=b}catch(r){W(a,a.return,r)}}break;case 6:Lj(b,a);Oj(a);if(d&4){if(null===a.stateNode)throw Error(t(162));c=a.stateNode;d=a.memoizedProps;try{c.nodeValue=d}catch(r){W(a,a.return,
r)}}break;case 3:Tj=null;e=Nj;Nj=Uj(b.containerInfo);Lj(b,a);Nj=e;Oj(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{Hj(b.containerInfo)}catch(r){W(a,a.return,r)}break;case 4:c=Nj;Nj=Uj(a.stateNode.containerInfo);Lj(b,a);Oj(a);Nj=c;break;case 13:Lj(b,a);Oj(a);a.child.flags&8192&&null!==a.memoizedState!==(null!==c&&null!==c.memoizedState)&&(Vj=Ta());d&4&&(c=a.updateQueue,null!==c&&(a.updateQueue=null,Jj(a,c)));break;case 22:d&512&&null!==c&&dj(c,c.return);h=null!==a.memoizedState;k=null!==c&&
null!==c.memoizedState;if(a.mode&1){var w=Zi,q=$i;Zi=w||h;$i=q||k;Lj(b,a);$i=q;Zi=w}else Lj(b,a);Oj(a);b=a.stateNode;b._current=a;b._visibility&=-3;b._visibility|=b._pendingVisibility&2;if(d&8192&&(b._visibility=h?b._visibility&-2:b._visibility|1,h&&(b=Zi||$i,null===c||k||b||0!==(a.mode&1)&&Wj(a)),null===a.memoizedProps||"manual"!==a.memoizedProps.mode))a:for(c=null,b=a;;){if(5===b.tag||26===b.tag||27===b.tag){if(null===c){c=b;try{e=b.stateNode,h?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display",
"none","important"):f.display="none"):(g=b.stateNode,n=b.memoizedProps.style,u=void 0!==n&&null!==n&&n.hasOwnProperty("display")?n.display:null,g.style.display=null==u||"boolean"===typeof u?"":(""+u).trim())}catch(r){W(a,a.return,r)}}}else if(6===b.tag){if(null===c)try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(r){W(a,a.return,r)}}else if((22!==b.tag&&23!==b.tag||null===b.memoizedState||b===a)&&null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break a;for(;null===b.sibling;){if(null===
b.return||b.return===a)break a;c===b&&(c=null);b=b.return}c===b&&(c=null);b.sibling.return=b.return;b=b.sibling}d&4&&(c=a.updateQueue,null!==c&&(d=c.retryQueue,null!==d&&(c.retryQueue=null,Jj(a,d))));break;case 19:Lj(b,a);Oj(a);d&4&&(c=a.updateQueue,null!==c&&(a.updateQueue=null,Jj(a,c)));break;case 21:break;default:Lj(b,a),Oj(a)}}
function Oj(a){var b=a.flags;if(b&2){try{if(27!==a.tag){b:{for(var c=a.return;null!==c;){if(xj(c)){var d=c;break b}c=c.return}throw Error(t(160));}switch(d.tag){case 27:var e=d.stateNode,f=yj(a);Bj(a,f,e);break;case 5:var g=d.stateNode;d.flags&32&&(Ec(g,""),d.flags&=-33);var h=yj(a);Bj(a,h,g);break;case 3:case 4:var k=d.stateNode.containerInfo,n=yj(a);zj(a,n,k);break;default:throw Error(t(161));}}}catch(u){W(a,a.return,u)}a.flags&=-3}b&4096&&(a.flags&=-4097)}
function tj(a,b){if(b.subtreeFlags&8772)for(b=b.child;null!==b;)sj(a,b.alternate,b),b=b.sibling}
function Wj(a){for(a=a.child;null!==a;){var b=a;switch(b.tag){case 0:case 11:case 14:case 15:nj(4,b,b.return);Wj(b);break;case 1:dj(b,b.return);var c=b.stateNode;if("function"===typeof c.componentWillUnmount){var d=b,e=b.return;try{var f=d;c.props=f.memoizedProps;c.state=f.memoizedState;c.componentWillUnmount()}catch(g){W(d,e,g)}}Wj(b);break;case 26:case 27:case 5:dj(b,b.return);Wj(b);break;case 22:dj(b,b.return);null===b.memoizedState&&Wj(b);break;default:Wj(b)}a=a.sibling}}
function vj(a,b,c){c=c&&0!==(b.subtreeFlags&8772);for(b=b.child;null!==b;){var d=b.alternate,e=a,f=b,g=f.flags;switch(f.tag){case 0:case 11:case 15:vj(e,f,c);pj(f,4);break;case 1:vj(e,f,c);e=f.stateNode;if("function"===typeof e.componentDidMount)try{e.componentDidMount()}catch(k){W(f,f.return,k)}d=f.updateQueue;if(null!==d){var h=d.shared.hiddenCallbacks;if(null!==h)for(d.shared.hiddenCallbacks=null,d=0;d<h.length;d++)Se(h[d],e)}c&&g&64&&qj(f);cj(f,f.return);break;case 26:case 27:case 5:vj(e,f,c);
c&&null===d&&g&4&&rj(f);cj(f,f.return);break;case 12:vj(e,f,c);break;case 13:vj(e,f,c);c&&g&4&&uj(e,f);break;case 22:null===f.memoizedState&&vj(e,f,c);cj(f,f.return);break;default:vj(e,f,c)}b=b.sibling}}function Xj(a,b){try{oj(b,a)}catch(c){W(a,a.return,c)}}
function Yj(a,b){var c=null;null!==a&&null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(c=a.memoizedState.cachePool.pool);a=null;null!==b.memoizedState&&null!==b.memoizedState.cachePool&&(a=b.memoizedState.cachePool.pool);a!==c&&(null!=a&&a.refCount++,null!=c&&wi(c))}function Zj(a,b){a=null;null!==b.alternate&&(a=b.alternate.memoizedState.cache);b=b.memoizedState.cache;b!==a&&(b.refCount++,null!=a&&wi(a))}
function ak(a,b,c,d){if(b.subtreeFlags&10256)for(b=b.child;null!==b;)bk(a,b,c,d),b=b.sibling}
function bk(a,b,c,d){var e=b.flags;switch(b.tag){case 0:case 11:case 15:ak(a,b,c,d);e&2048&&Xj(b,9);break;case 3:ak(a,b,c,d);e&2048&&(a=null,null!==b.alternate&&(a=b.alternate.memoizedState.cache),b=b.memoizedState.cache,b!==a&&(b.refCount++,null!=a&&wi(a)));break;case 23:break;case 22:var f=b.stateNode;null!==b.memoizedState?f._visibility&4?ak(a,b,c,d):b.mode&1?ck(a,b):(f._visibility|=4,ak(a,b,c,d)):f._visibility&4?ak(a,b,c,d):(f._visibility|=4,dk(a,b,c,d,0!==(b.subtreeFlags&10256)));e&2048&&Yj(b.alternate,
b);break;case 24:ak(a,b,c,d);e&2048&&Zj(b.alternate,b);break;default:ak(a,b,c,d)}}
function dk(a,b,c,d,e){e=e&&0!==(b.subtreeFlags&10256);for(b=b.child;null!==b;){var f=a,g=b,h=c,k=d,n=g.flags;switch(g.tag){case 0:case 11:case 15:dk(f,g,h,k,e);Xj(g,8);break;case 23:break;case 22:var u=g.stateNode;null!==g.memoizedState?u._visibility&4?dk(f,g,h,k,e):g.mode&1?ck(f,g):(u._visibility|=4,dk(f,g,h,k,e)):(u._visibility|=4,dk(f,g,h,k,e));e&&n&2048&&Yj(g.alternate,g);break;case 24:dk(f,g,h,k,e);e&&n&2048&&Zj(g.alternate,g);break;default:dk(f,g,h,k,e)}b=b.sibling}}
function ck(a,b){if(b.subtreeFlags&10256)for(b=b.child;null!==b;){var c=a,d=b,e=d.flags;switch(d.tag){case 22:ck(c,d);e&2048&&Yj(d.alternate,d);break;case 24:ck(c,d);e&2048&&Zj(d.alternate,d);break;default:ck(c,d)}b=b.sibling}}var ek=8192;function fk(a){if(a.subtreeFlags&ek)for(a=a.child;null!==a;)gk(a),a=a.sibling}
function gk(a){switch(a.tag){case 26:fk(a);a.flags&ek&&null!==a.memoizedState&&hk(Nj,a.memoizedState,a.memoizedProps);break;case 5:fk(a);break;case 3:case 4:var b=Nj;Nj=Uj(a.stateNode.containerInfo);fk(a);Nj=b;break;case 22:null===a.memoizedState&&(b=a.alternate,null!==b&&null!==b.memoizedState?(b=ek,ek=16777216,fk(a),ek=b):fk(a));break;default:fk(a)}}function ik(a){var b=a.alternate;if(null!==b&&(a=b.child,null!==a)){b.child=null;do b=a.sibling,a.sibling=null,a=b;while(null!==a)}}
function jk(a){var b=a.deletions;if(0!==(a.flags&16)){if(null!==b)for(var c=0;c<b.length;c++){var d=b[c];bj=d;kk(d,a)}ik(a)}if(a.subtreeFlags&10256)for(a=a.child;null!==a;)lk(a),a=a.sibling}function lk(a){switch(a.tag){case 0:case 11:case 15:jk(a);a.flags&2048&&nj(9,a,a.return);break;case 22:var b=a.stateNode;null!==a.memoizedState&&b._visibility&4&&(null===a.return||13!==a.return.tag)?(b._visibility&=-5,mk(a)):jk(a);break;default:jk(a)}}
function mk(a){var b=a.deletions;if(0!==(a.flags&16)){if(null!==b)for(var c=0;c<b.length;c++){var d=b[c];bj=d;kk(d,a)}ik(a)}for(a=a.child;null!==a;){b=a;switch(b.tag){case 0:case 11:case 15:nj(8,b,b.return);mk(b);break;case 22:c=b.stateNode;c._visibility&4&&(c._visibility&=-5,mk(b));break;default:mk(b)}a=a.sibling}}
function kk(a,b){for(;null!==bj;){var c=bj;switch(c.tag){case 0:case 11:case 15:nj(8,c,b);break;case 23:case 22:if(null!==c.memoizedState&&null!==c.memoizedState.cachePool){var d=c.memoizedState.cachePool.pool;null!=d&&d.refCount++}break;case 24:wi(c.memoizedState.cache)}d=c.child;if(null!==d)d.return=c,bj=d;else a:for(c=a;null!==bj;){d=bj;var e=d.sibling,f=d.return;wj(d);if(d===c){bj=null;break a}if(null!==e){e.return=f;bj=e;break a}bj=f}}}
var nk={getCacheSignal:function(){return ig(U).controller.signal},getCacheForType:function(a){var b=ig(U),c=b.data.get(a);void 0===c&&(c=a(),b.data.set(a,c));return c}},ok="function"===typeof WeakMap?WeakMap:Map,pk=da.ReactCurrentDispatcher,qk=da.ReactCurrentCache,rk=da.ReactCurrentOwner,sk=da.ReactCurrentBatchConfig,N=0,M=null,X=null,L=0,O=0,tk=null,uk=!1,wf=0,S=0,me=null,Re=0,vk=0,wk=0,pe=0,Ah=null,re=null,te=!1,xk=!1,Vj=0,Oi=Infinity,se=null,sh=!1,th=null,vh=null,yk=!1,zk=null,Ak=0,Bk=0,Ck=null,
Dk=0,Ek=null;function ah(a){if(0===(a.mode&1))return 2;if(0!==(N&2)&&0!==L)return L&-L;if(null!==fh())return a=Ce,0!==a?a:ze();a=G;if(0!==a)return a;a=window.event;a=void 0===a?32:Fk(a.type);return a}function wg(a,b,c){if(a===M&&2===O||null!==a.cancelPendingCommit)ne(a,0),oe(a,L,pe);Gk(a,c);if(0===(N&2)||a!==M)a===M&&(0===(N&2)&&(vk|=c),4===S&&oe(a,L,pe)),fe(a),2===c&&0===N&&0===(b.mode&1)&&(Oi=Ta()+500,ie(!0))}
function xe(a,b){if(0!==(N&6))throw Error(t(327));var c=a.callbackNode;if(je()&&a.callbackNode!==c)return null;var d=mb(a,a===M?L:0);if(0===d)return null;var e=0===(d&60)&&0===(d&a.expiredLanes)&&!b;b=e?Hk(a,d):ke(a,d);if(0!==b){var f=e;do{if(6===b)oe(a,d,0);else{e=a.current.alternate;if(f&&!Ik(e)){b=ke(a,d);f=!1;continue}if(2===b){f=d;var g=ob(a,f);0!==g&&(d=g,b=le(a,f,g))}if(1===b)throw c=me,ne(a,0),oe(a,d,0),fe(a),c;a.finishedWork=e;a.finishedLanes=d;a:{f=a;switch(b){case 0:case 1:throw Error(t(345));
case 4:if((d&4194176)===d){oe(f,d,pe);break a}break;case 2:case 3:case 5:break;default:throw Error(t(329));}if((d&62914560)===d&&(b=Vj+300-Ta(),10<b)){oe(f,d,pe);if(0!==mb(f,0))break a;f.timeoutHandle=Jk(Kk.bind(null,f,e,re,se,te,d,pe),b);break a}Kk(f,e,re,se,te,d,pe)}}break}while(1)}fe(a);we(a,Ta());a=a.callbackNode===c?xe.bind(null,a):null;return a}
function le(a,b,c){var d=Ah,e=a.current.memoizedState.isDehydrated;e&&(ne(a,c).flags|=256);c=ke(a,c);if(2!==c){if(uk&&!e)return a.errorRecoveryDisabledLanes|=b,vk|=b,4;a=re;re=d;null!==a&&Gi(a)}return c}function Gi(a){null===re?re=a:re.push.apply(re,a)}function Kk(a,b,c,d,e,f,g){if(0===(f&42)&&(Lk={stylesheets:null,count:0,unsuspend:Mk},gk(b),b=Nk(),null!==b)){a.cancelPendingCommit=b(qe.bind(null,a,c,d,e));oe(a,f,g);return}qe(a,c,d,e,g)}
function Ik(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!id(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Gk(a,b){a.pendingLanes|=b;268435456!==b&&(a.suspendedLanes=0,a.pingedLanes=0);N&2?te=!0:N&4&&(xk=!0);Zd()}function oe(a,b,c){b&=~wk;b&=~vk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(var d=a.expirationTimes,e=b;0<e;){var f=31-gb(e),g=1<<f;d[f]=-1;e&=~g}0!==c&&tb(a,c,b)}function Ok(a,b){var c=N;N|=1;try{return a(b)}finally{N=c,0===N&&(Oi=Ta()+500,ie(!0))}}
function Pk(a){null!==zk&&0===zk.tag&&0===(N&6)&&je();var b=N;N|=1;var c=sk.transition,d=G;try{if(sk.transition=null,G=2,a)return a()}finally{G=d,sk.transition=c,N=b,0===(N&6)&&ie(!1)}}function Qk(){if(null!==X){if(0===O)var a=X.return;else a=X,pi(),dg(a),cf=null,df=0,a=X;for(;null!==a;)Qi(a.alternate,a),a=a.return;X=null}}
function ne(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Rk(c));c=a.cancelPendingCommit;null!==c&&(a.cancelPendingCommit=null,c());Qk();M=a;X=c=lf(a.current,null);L=b;O=0;tk=null;uk=!1;S=0;me=null;pe=wk=vk=Re=0;re=Ah=null;te=!1;0!==(b&8)&&(b|=b&32);var d=a.entangledLanes;if(0!==d)for(a=a.entanglements,d&=b;0<d;){var e=31-gb(d),f=1<<e;b|=a[e];d&=~f}wf=b;Td();return c}
function Sk(a,b){P=null;Hf.current=Yf;rk.current=null;b===Ve?(b=bf(),O=Ci()&&0===(Re&134217727)&&0===(vk&134217727)?2:3):b===We?(b=bf(),O=4):O=b===Ch?8:null!==b&&"object"===typeof b&&"function"===typeof b.then?6:1;tk=b;null===X&&(S=1,me=b)}function Ci(){var a=zf.current;return null===a?!0:(L&4194176)===L?null===Af?!0:!1:(L&62914560)===L||0!==(L&536870912)?a===Af:!1}function Tk(){var a=pk.current;pk.current=Yf;return null===a?Yf:a}function Uk(){var a=qk.current;qk.current=nk;return a}
function yh(){S=4;0===(Re&134217727)&&0===(vk&134217727)||null===M||oe(M,L,pe)}function ke(a,b){var c=N;N|=2;var d=Tk(),e=Uk();if(M!==a||L!==b)se=null,ne(a,b);b=!1;a:do try{if(0!==O&&null!==X){var f=X,g=tk;switch(O){case 8:Qk();S=6;break a;case 3:case 2:b||null!==zf.current||(b=!0);default:O=0,tk=null,Vk(a,f,g)}}Wk();break}catch(h){Sk(a,h)}while(1);b&&a.shellSuspendCounter++;pi();N=c;pk.current=d;qk.current=e;if(null!==X)throw Error(t(261));M=null;L=0;Td();return S}
function Wk(){for(;null!==X;)Xk(X)}
function Hk(a,b){var c=N;N|=2;var d=Tk(),e=Uk();if(M!==a||L!==b)se=null,Oi=Ta()+500,ne(a,b);a:do try{if(0!==O&&null!==X){b=X;var f=tk;b:switch(O){case 1:O=0;tk=null;Vk(a,b,f);break;case 2:if(Ye(f)){O=0;tk=null;Yk(b);break}b=function(){2===O&&M===a&&(O=7);fe(a)};f.then(b,b);break a;case 3:O=7;break a;case 4:O=5;break a;case 7:Ye(f)?(O=0,tk=null,Yk(b)):(O=0,tk=null,Vk(a,b,f));break;case 5:switch(X.tag){case 5:case 26:case 27:b=X;O=0;tk=null;var g=b.sibling;if(null!==g)X=g;else{var h=b.return;null!==
h?(X=h,Zk(h)):X=null}break b}O=0;tk=null;Vk(a,b,f);break;case 6:O=0;tk=null;Vk(a,b,f);break;case 8:Qk();S=6;break a;default:throw Error(t(462));}}$k();break}catch(k){Sk(a,k)}while(1);pi();pk.current=d;qk.current=e;N=c;if(null!==X)return 0;M=null;L=0;Td();return S}function $k(){for(;null!==X&&!Ra();)Xk(X)}function Xk(a){var b=al(a.alternate,a,wf);a.memoizedProps=a.pendingProps;null===b?Zk(a):X=b;rk.current=null}
function Yk(a){var b=a.alternate;switch(a.tag){case 2:a.tag=0;case 15:case 0:var c=a.type,d=a.pendingProps;d=a.elementType===c?d:gh(c,d);var e=bd(c)?$c:Yc.current;e=ad(a,e);b=Qh(b,a,d,c,e,L);break;case 11:c=a.type.render;d=a.pendingProps;d=a.elementType===c?d:gh(c,d);b=Qh(b,a,d,c,a.ref,L);break;case 5:dg(a);default:Qi(b,a),a=X=Ni(a,wf),b=al(b,a,wf)}a.memoizedProps=a.pendingProps;null===b?Zk(a):X=b;rk.current=null}
function Vk(a,b,c){pi();dg(b);cf=null;df=0;var d=b.return;try{if(xh(a,d,b,c,L)){S=1;me=c;X=null;return}}catch(e){if(null!==d)throw X=d,e;S=1;me=c;X=null;return}if(b.flags&32768)a:{a=b;do{b=Pi(a.alternate,a);if(null!==b){b.flags&=32767;X=b;break a}a=a.return;null!==a&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null);X=a}while(null!==a);S=6;X=null}else Zk(b)}
function Zk(a){var b=a;do{a=b.return;var c=Fi(b.alternate,b,wf);if(null!==c){X=c;return}b=b.sibling;if(null!==b){X=b;return}X=b=a}while(null!==b);0===S&&(S=5)}function qe(a,b,c,d,e){var f=G,g=sk.transition;try{sk.transition=null,G=2,bl(a,b,c,d,f,e)}finally{sk.transition=g,G=f}return null}
function bl(a,b,c,d,e,f){do je();while(null!==zk);if(0!==(N&6))throw Error(t(327));var g=a.finishedWork,h=a.finishedLanes;if(null===g)return null;a.finishedWork=null;a.finishedLanes=0;if(g===a.current)throw Error(t(177));a.callbackNode=null;a.callbackPriority=0;a.cancelPendingCommit=null;var k=g.lanes|g.childLanes;k|=Sd;sb(a,k,f);xk=!1;a===M&&(X=M=null,L=0);0===(g.subtreeFlags&10256)&&0===(g.flags&10256)||yk||(yk=!0,Bk=k,Ck=c,cl(Xa,function(){je();return null}));c=0!==(g.flags&15990);if(0!==(g.subtreeFlags&
15990)||c){c=sk.transition;sk.transition=null;f=G;G=2;var n=N;N|=4;rk.current=null;gj(a,g);Mj(g,a);dl(lj);ij=!!hj;lj=hj=null;a.current=g;sj(a,g.alternate,g);Sa();N=n;G=f;sk.transition=c}else a.current=g;yk?(yk=!1,zk=a,Ak=h):el(a,k);k=a.pendingLanes;0===k&&(vh=null);db(g.stateNode,e);fe(a);if(null!==b)for(e=a.onRecoverableError,g=0;g<b.length;g++)k=b[g],c={digest:k.digest,componentStack:k.stack},e(k.value,c);if(sh)throw sh=!1,a=th,th=null,a;0!==(Ak&3)&&0!==a.tag&&je();k=a.pendingLanes;d||xk||0!==(h&
4194218)&&0!==(k&42)?a===Ek?Dk++:(Dk=0,Ek=a):Dk=0;ie(!1);return null}function el(a,b){0===(a.pooledCacheLanes&=b)&&(b=a.pooledCache,null!=b&&(a.pooledCache=null,wi(b)))}
function je(){if(null!==zk){var a=zk,b=Bk;Bk=0;var c=xb(Ak),d=32>c?32:c;c=sk.transition;var e=G;try{sk.transition=null;G=d;if(null===zk)var f=!1;else{d=Ck;Ck=null;var g=zk,h=Ak;zk=null;Ak=0;if(0!==(N&6))throw Error(t(331));var k=N;N|=4;lk(g.current);bk(g,g.current,h,d);N=k;ie(!1);if(cb&&"function"===typeof cb.onPostCommitFiberRoot)try{cb.onPostCommitFiberRoot(bb,g)}catch(n){}f=!0}return f}finally{G=e,sk.transition=c,el(a,b)}}return!1}
function fl(a,b,c){b=oh(c,b);b=rh(a,b,2);a=Le(a,b,2);null!==a&&(Gk(a,2),fe(a))}function W(a,b,c){if(3===a.tag)fl(a,a,c);else for(;null!==b;){if(3===b.tag){fl(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===vh||!vh.has(d))){a=oh(c,a);a=uh(b,a,2);b=Le(b,a,2);null!==b&&(Gk(b,2),fe(b));break}}b=b.return}}
function zh(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new ok;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(uk=!0,e.add(c),a=gl.bind(null,a,b,c),b.then(a,a))}function gl(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);a.pingedLanes|=a.suspendedLanes&c;N&2?te=!0:N&4&&(xk=!0);Zd();M===a&&(L&c)===c&&(4===S||3===S&&(L&62914560)===L&&300>Ta()-Vj?0===(N&2)&&ne(a,0):wk|=c);fe(a)}
function hl(a,b){0===b&&(b=0===(a.mode&1)?2:qb());a=Yd(a,b);null!==a&&(Gk(a,b),fe(a))}function ei(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);hl(a,c)}function Kj(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;case 22:d=a.stateNode._retryCache;break;default:throw Error(t(314));}null!==d&&d.delete(b);hl(a,c)}
function Zd(){if(50<Dk)throw Dk=0,Ek=null,N&2&&null!==M&&(M.errorRecoveryDisabledLanes|=L),Error(t(185));}var al;
al=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Zc.current)mg=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return mg=!1,ji(a,b,c);mg=0!==(a.flags&131072)?!0:!1}else mg=!1,K&&0!==(b.flags&1048576)&&td(b,md,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;Sh(a,b);a=b.pendingProps;var e=ad(b,Yc.current);Fh(b,c);e=Tf(null,b,d,a,e,c);var f=bg();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,bd(d)?(f=!0,fd(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,Ie(b),e.updater=ih,b.stateNode=e,e._reactInternals=b,mh(b,d,a,c),b=Th(null,b,d,!0,f,c)):(b.tag=0,K&&f&&ud(b),Dh(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{Sh(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=il(d);a=gh(d,a);switch(e){case 0:b=Kh(null,b,d,a,c);break a;case 1:b=Rh(null,b,d,a,c);break a;case 11:b=Eh(null,b,d,a,c);break a;case 14:b=Hh(null,b,d,gh(d.type,a),c);break a}throw Error(t(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:gh(d,e),Kh(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:gh(d,e),Rh(a,b,d,e,c);case 3:a:{Uh(b);if(null===a)throw Error(t(387));e=b.pendingProps;f=b.memoizedState;d=f.element;Je(a,b);Qe(b,e,null,c);var g=b.memoizedState;e=g.cache;ki(b,U,e);e!==f.cache&&ri(b,U,c);Pe();e=g.element;if(f.isDehydrated)if(f={element:e,isDehydrated:!1,cache:g.cache},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&
256){d=oh(Error(t(423)),b);b=Vh(a,b,e,c,d);break a}else if(e!==d){d=oh(Error(t(424)),b);b=Vh(a,b,e,c,d);break a}else for(I=Dd(b.stateNode.containerInfo.firstChild),H=b,K=!0,wd=null,xd=!0,c=sf(b,null,e,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Od();if(e===d){b=Gh(a,b,c);break a}Dh(a,b,e,c)}b=b.child}return b;case 26:return Mh(a,b),c=b.memoizedState=jl(b.type,null===a?null:a.memoizedProps,b.pendingProps),null!==a||K||null!==c||(c=b.type,a=b.pendingProps,d=Ji(Ga.current).createElement(c),
d[Ab]=b,d[Bb]=a,Ki(d,c,a),Qb(d),b.stateNode=d),null;case 27:return Na(b),null===a&&K&&(d=b.stateNode=Ii(b.type,b.pendingProps,Ga.current),H=b,xd=!0,I=Dd(d.firstChild)),d=b.pendingProps.children,null!==a||K?Dh(a,b,d,c):b.child=rf(b,null,d,c),Mh(a,b),b.child;case 5:return null===a&&K&&((e=d=I,e)?Bd(b,e)||(Id(b)&&Jd(),I=Hd(e),f=H,I&&Bd(b,I)?yd(f,e):(Ad(H,b),K=!1,H=b,I=d)):(Id(b)&&Jd(),Ad(H,b),K=!1,H=b,I=d)),Na(b),e=b.type,f=b.pendingProps,g=null!==a?a.memoizedProps:null,d=f.children,Md(e,f)?d=null:null!==
g&&Md(e,g)&&(b.flags|=32),null!==b.memoizedState&&(e=Tf(a,b,$f,null,null,c),Ia._currentValue=e,mg&&null!==a&&a.memoizedState.memoizedState!==e&&ri(b,Ia,c)),Mh(a,b),Dh(a,b,d,c),b.child;case 6:return null===a&&K&&((d=""!==b.pendingProps,a=c=I,a&&d)?Ed(b,a)||(Id(b)&&Jd(),I=Hd(a),d=H,I&&Ed(b,I)?yd(d,a):(Ad(H,b),K=!1,H=b,I=c)):(Id(b)&&Jd(),Ad(H,b),K=!1,H=b,I=c)),null;case 13:return $h(a,b,c);case 4:return Ja(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=rf(b,null,d,c):Dh(a,b,d,c),b.child;
case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:gh(d,e),Eh(a,b,d,e,c);case 7:return Dh(a,b,b.pendingProps,c),b.child;case 8:return Dh(a,b,b.pendingProps.children,c),b.child;case 12:return Dh(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;ki(b,d,g);if(null!==f)if(id(f.value,g)){if(f.children===e.children&&!Zc.current){b=Gh(a,b,c);break a}}else ri(b,d,c);Dh(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=
b.pendingProps.children,Fh(b,c),e=ig(e),d=d(e),b.flags|=1,Dh(a,b,d,c),b.child;case 14:return d=b.type,e=gh(d,b.pendingProps),e=gh(d.type,e),Hh(a,b,d,e,c);case 15:return Jh(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:gh(d,e),Sh(a,b),b.tag=1,bd(d)?(a=!0,fd(b)):a=!1,Fh(b,c),kh(b,d,e),mh(b,d,e,c),Th(null,b,d,!0,a,c);case 19:return ii(a,b,c);case 22:return Lh(a,b,c);case 24:return Fh(b,c),d=ig(U),null===a?(e=Ph(),null===e&&(e=M,f=bh(),e.pooledCache=f,f.refCount++,
null!==f&&(e.pooledCacheLanes|=c),e=f),b.memoizedState={parent:d,cache:e},Ie(b),ki(b,U,e)):(0!==(a.lanes&c)&&(Je(a,b),Qe(b,null,null,c),Pe()),e=a.memoizedState,f=b.memoizedState,e.parent!==d?(e={parent:d,cache:d},b.memoizedState=e,0===b.lanes&&(b.memoizedState=b.updateQueue.baseState=e),ki(b,U,d)):(d=f.cache,ki(b,U,d),d!==e.cache&&ri(b,U,c))),Dh(a,b,b.pendingProps.children,c),b.child}throw Error(t(156,b.tag));};function cl(a,b){return Pa(a,b)}
function kl(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.refCleanup=this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function zd(a,b,c,d){return new kl(a,b,c,d)}function Ih(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function il(a){if("function"===typeof a)return Ih(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===ta)return 11;if(a===wa)return 14}return 2}
function lf(a,b){var c=a.alternate;null===c?(c=zd(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&31457280;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;c.refCleanup=a.refCleanup;return c}
function Ni(a,b){a.flags&=31457282;var c=a.alternate;null===c?(a.childLanes=0,a.lanes=b,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,b=c.dependencies,a.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext});
return a}
function nf(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ih(a)&&(g=1);else if("string"===typeof a)g=ll(a,c,Ea.current)?26:"html"===a||"head"===a||"body"===a?27:5;else a:switch(a){case na:return pf(c.children,e,f,b);case oa:g=8;e|=8;0!==(e&1)&&(e|=16);break;case pa:return a=zd(12,c,b,e|2),a.elementType=pa,a.lanes=f,a;case ua:return a=zd(13,c,b,e),a.elementType=ua,a.lanes=f,a;case va:return a=zd(19,c,b,e),a.elementType=va,a.lanes=f,a;case za:return ai(c,e,f,b);case Aa:case ya:case Ba:return a=zd(24,
c,b,e),a.elementType=Ba,a.lanes=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case qa:g=10;break a;case sa:g=9;break a;case ra:case ta:g=11;break a;case wa:g=14;break a;case xa:g=16;d=null;break a}throw Error(t(130,null==a?a:typeof a,""));}b=zd(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function pf(a,b,c,d){a=zd(7,a,d,b);a.lanes=c;return a}
function ai(a,b,c,d){a=zd(22,a,d,b);a.elementType=za;a.lanes=c;var e={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=e._current;if(null===f)throw Error(t(456));if(0===(e._pendingVisibility&2)){var g=Yd(f,2);null!==g&&(e._pendingVisibility|=2,wg(g,f,2))}},attach:function(){var f=e._current;if(null===f)throw Error(t(456));if(0!==(e._pendingVisibility&2)){var g=Yd(f,2);null!==g&&(e._pendingVisibility&=-3,wg(g,f,2))}}};
a.stateNode=e;return a}function mf(a,b,c){a=zd(6,a,null,b);a.lanes=c;return a}function of(a,b,c){b=zd(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ml(a,b,c,d,e,f){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null;this.callbackPriority=0;this.expirationTimes=rb(-1);this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=rb(0);this.hiddenUpdates=
rb(null);this.identifierPrefix=d;this.onRecoverableError=e;this.pooledCache=null;this.pooledCacheLanes=0;this.formState=f;this.incompleteTransitions=new Map}function nl(a,b,c,d,e,f,g,h,k,n,u){a=new ml(a,b,c,h,k,u);1===b?(b=1,!0===f&&(b|=24)):b=0;f=zd(3,null,null,b);a.current=f;f.stateNode=a;b=bh();b.refCount++;a.pooledCache=b;b.refCount++;f.memoizedState={element:d,isDehydrated:c,cache:b};Ie(f);return a}
function ol(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ma,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function pl(a){if(!a)return Xc;a=a._reactInternals;a:{if(Rc(a)!==a||1!==a.tag)throw Error(t(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(bd(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(t(171));}if(1===a.tag){var c=a.type;if(bd(c))return ed(a,c,b)}return b}
function ql(a,b,c,d,e,f,g,h,k,n,u){a=nl(c,d,!0,a,e,f,g,h,k,n,u);a.context=pl(null);c=a.current;d=ah(c);e=Ke(d);e.callback=void 0!==b&&null!==b?b:null;Le(c,e,d);a.current.lanes=d;Gk(a,d);fe(a);return a}function rl(a,b,c,d){var e=b.current,f=ah(e);c=pl(c);null===b.context?b.context=c:b.pendingContext=c;b=Ke(f);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=Le(e,b,f);null!==a&&(wg(a,e,f),Me(a,e,f));return f}
function sl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 27:case 5:return a.child.stateNode;default:return a.child.stateNode}}function tl(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=lb(b.pendingLanes);0!==c&&(vb(b,c),fe(b),0===(N&6)&&(Oi=Ta()+500,ie(!1)))}break;case 13:Pk(function(){var d=Yd(a,2);null!==d&&wg(d,a,2)}),ul(a,2)}}
function vl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ul(a,b){vl(a,b);(a=a.alternate)&&vl(a,b)}function wl(a){if(13===a.tag){var b=Yd(a,67108864);null!==b&&wg(b,a,67108864);ul(a,67108864)}}function xl(){return null}var yl=!1;function zl(a,b,c){if(yl)return a(b,c);yl=!0;try{return Ok(a,b,c)}finally{if(yl=!1,null!==Mc||null!==Nc)Pk(),Qc()}}
function Al(a,b){var c=a.stateNode;if(null===c)return null;var d=Ob(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(t(231,b,typeof c));return c}var Bl=!1;if(Vb)try{var Cl={};Object.defineProperty(Cl,"passive",{get:function(){Bl=!0}});window.addEventListener("test",Cl,Cl);window.removeEventListener("test",Cl,Cl)}catch(a){Bl=!1}function Dl(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function El(){return!0}function Fl(){return!1}
function Gl(a){function b(c,d,e,f,g){this._reactName=c;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var h in a)a.hasOwnProperty(h)&&(c=a[h],this[h]=c?c(f):f[h]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?El:Fl;this.isPropagationStopped=Fl;return this}D(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():"unknown"!==typeof c.returnValue&&
(c.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():"unknown"!==typeof c.cancelBubble&&(c.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El});return b}
var Hl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Gl(Hl),Jl=D({},Hl,{view:0,detail:0}),Kl=Gl(Jl),Ll,Ml,Nl,Pl=D({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ol,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==Nl&&(Nl&&"mousemove"===a.type?(Ll=a.screenX-Nl.screenX,Ml=a.screenY-Nl.screenY):Ml=Ll=0,Nl=a);return Ll},movementY:function(a){return"movementY"in a?a.movementY:Ml}}),Ql=Gl(Pl),Rl=D({},Pl,{dataTransfer:0}),Sl=Gl(Rl),Tl=D({},Jl,{relatedTarget:0}),Ul=Gl(Tl),Vl=D({},Hl,{animationName:0,elapsedTime:0,pseudoElement:0}),Wl=Gl(Vl),Xl=D({},Hl,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Yl=Gl(Xl),Zl=D({},Hl,{data:0}),$l=Gl(Zl),am={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dm(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=cm[a])?!!b[a]:!1}function Ol(){return dm}
var em=D({},Jl,{key:function(a){if(a.key){var b=am[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Dl(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?bm[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ol,charCode:function(a){return"keypress"===a.type?Dl(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?Dl(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),fm=Gl(em),gm=D({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=Gl(gm),im=D({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ol}),jm=Gl(im),km=D({},Hl,{propertyName:0,elapsedTime:0,pseudoElement:0}),lm=Gl(km),mm=D({},Pl,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),nm=Gl(mm);
function om(a,b,c,d,e){if("submit"===b&&c&&c.stateNode===e){var f=Ob(e).action,g=d.submitter;g&&(b=(b=Ob(g))?b.formAction:g.getAttribute("formAction"),null!=b&&(f=b,g=null));if("function"===typeof f){var h=new Il("action","action",null,d,e);a.push({event:h,listeners:[{instance:null,listener:function(){if(!d.defaultPrevented){h.preventDefault();if(g){var k=g.ownerDocument.createElement("input");k.name=g.name;k.value=g.value;g.parentNode.insertBefore(k,g);var n=new FormData(e);k.parentNode.removeChild(k)}else n=
new FormData(e);Wg(c,{pending:!0,data:n,method:e.method,action:f},f,n)}},currentTarget:e}]})}}}var pm=!1,qm=null,rm=null,sm=null,tm=new Map,um=new Map,vm=[],wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
function xm(a,b){switch(a){case "focusin":case "focusout":qm=null;break;case "dragenter":case "dragleave":rm=null;break;case "mouseover":case "mouseout":sm=null;break;case "pointerover":case "pointerout":tm.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":um.delete(b.pointerId)}}
function ym(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Mb(b),null!==b&&wl(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function zm(a,b,c,d,e){switch(b){case "focusin":return qm=ym(qm,a,b,c,d,e),!0;case "dragenter":return rm=ym(rm,a,b,c,d,e),!0;case "mouseover":return sm=ym(sm,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;tm.set(f,ym(tm.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,um.set(f,ym(um.get(f)||null,a,b,c,d,e)),!0}return!1}
function Am(a){var b=Kb(a.target);if(null!==b){var c=Rc(b);if(null!==c)if(b=c.tag,13===b){if(b=Sc(c),null!==b){a.blockedOn=b;wb(a.priority,function(){if(13===c.tag){var d=ah(c),e=Yd(c,d);null!==e&&wg(e,c,d);ul(c,d)}});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Bm(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Cm(a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);Kc=d;c.target.dispatchEvent(d);Kc=null}else return b=Mb(c),null!==b&&wl(b),a.blockedOn=c,!1;b.shift()}return!0}function Dm(a,b,c){Bm(a)&&c.delete(b)}function Em(){pm=!1;null!==qm&&Bm(qm)&&(qm=null);null!==rm&&Bm(rm)&&(rm=null);null!==sm&&Bm(sm)&&(sm=null);tm.forEach(Dm);um.forEach(Dm)}
function Fm(a,b){a.blockedOn===b&&(a.blockedOn=null,pm||(pm=!0,ba.unstable_scheduleCallback(ba.unstable_NormalPriority,Em)))}var Gm=null;function Hm(a){Gm!==a&&(Gm=a,ba.unstable_scheduleCallback(ba.unstable_NormalPriority,function(){Gm===a&&(Gm=null);for(var b=0;b<a.length;b+=3){var c=a[b],d=a[b+1],e=a[b+2];if("function"!==typeof d)if(null===Im(d||c))continue;else break;var f=Mb(c);null!==f&&(a.splice(b,3),b-=3,Wg(f,{pending:!0,data:e,method:c.method,action:d},d,e))}}))}
function Hj(a){function b(k){return Fm(k,a)}null!==qm&&Fm(qm,a);null!==rm&&Fm(rm,a);null!==sm&&Fm(sm,a);tm.forEach(b);um.forEach(b);for(var c=0;c<vm.length;c++){var d=vm[c];d.blockedOn===a&&(d.blockedOn=null)}for(;0<vm.length&&(c=vm[0],null===c.blockedOn);)Am(c),null===c.blockedOn&&vm.shift();c=(a.ownerDocument||a).$$reactFormReplay;if(null!=c)for(d=0;d<c.length;d+=3){var e=c[d],f=c[d+1],g=Ob(e);if("function"===typeof f)g||Hm(c);else if(g){var h=null;if(f&&f.hasAttribute("formAction"))if(e=f,g=Ob(f))h=
g.formAction;else{if(null!==Im(e))continue}else h=g.action;"function"===typeof h?c[d+1]=h:(c.splice(d,3),d-=3);Hm(c)}}}var Jm=da.ReactCurrentBatchConfig,ij=!0;function Km(a,b,c,d){var e=G,f=Jm.transition;Jm.transition=null;try{G=2,Lm(a,b,c,d)}finally{G=e,Jm.transition=f}}function Mm(a,b,c,d){var e=G,f=Jm.transition;Jm.transition=null;try{G=8,Lm(a,b,c,d)}finally{G=e,Jm.transition=f}}
function Lm(a,b,c,d){if(ij){var e=Cm(d);if(null===e)Nm(a,b,d,Om,c),xm(a,d);else if(zm(e,a,b,c,d))d.stopPropagation();else if(xm(a,d),b&4&&-1<wm.indexOf(a)){for(;null!==e;){var f=Mb(e);null!==f&&tl(f);f=Cm(d);null===f&&Nm(a,b,d,Om,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else Nm(a,b,d,null,c)}}function Cm(a){a=Lc(a);return Im(a)}var Om=null;
function Im(a){Om=null;a=Kb(a);if(null!==a){var b=Rc(a);if(null===b)a=null;else{var c=b.tag;if(13===c){a=Sc(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null)}}Om=a;return null}
function Fk(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 2;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 8;
case "message":switch(Ua()){case Va:return 2;case Wa:return 8;case Xa:case Ya:return 32;case Za:return 268435456;default:return 32}default:return 32}}var Pm=null,Qm=null,Rm=null;function Sm(){if(Rm)return Rm;var a,b=Qm,c=b.length,d,e="value"in Pm?Pm.value:Pm.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return Rm=e.slice(a,1<d?1-d:void 0)}var Tm=[9,13,27,32],Um=Vb&&"CompositionEvent"in window,Vm=null;Vb&&"documentMode"in document&&(Vm=document.documentMode);
var Wm=Vb&&"TextEvent"in window&&!Vm,Xm=Vb&&(!Um||Vm&&8<Vm&&11>=Vm),Ym=String.fromCharCode(32),Zm=!1;function $m(a,b){switch(a){case "keyup":return-1!==Tm.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function bn(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var cn=!1;
function dn(a,b){switch(a){case "compositionend":return bn(b);case "keypress":if(32!==b.which)return null;Zm=!0;return Ym;case "textInput":return a=b.data,a===Ym&&Zm?null:a;default:return null}}
function en(a,b){if(cn)return"compositionend"===a||!Um&&$m(a,b)?(a=Sm(),Rm=Qm=Pm=null,cn=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Xm&&"ko"!==b.locale?null:b.data;default:return null}}
var fn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gn(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!fn[a.type]:"textarea"===b?!0:!1}function hn(a,b,c,d){Pc(d);b=jn(b,"onChange");0<b.length&&(c=new Il("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var kn=null,ln=null;function mn(a){nn(a,0)}function on(a){var b=Nb(a);if(pc(b))return a}
function pn(a,b){if("change"===a)return b}var qn=!1;if(Vb){var rn;if(Vb){var sn="oninput"in document;if(!sn){var tn=document.createElement("div");tn.setAttribute("oninput","return;");sn="function"===typeof tn.oninput}rn=sn}else rn=!1;qn=rn&&(!document.documentMode||9<document.documentMode)}function un(){kn&&(kn.detachEvent("onpropertychange",vn),ln=kn=null)}function vn(a){if("value"===a.propertyName&&on(ln)){var b=[];hn(b,ln,a,Lc(a));zl(mn,b)}}
function wn(a,b,c){"focusin"===a?(un(),kn=b,ln=c,kn.attachEvent("onpropertychange",vn)):"focusout"===a&&un()}function xn(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return on(ln)}function yn(a,b){if("click"===a)return on(b)}function zn(a,b){if("input"===a||"change"===a)return on(b)}function An(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Bn(a,b){var c=An(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=An(c)}}function Cn(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Cn(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function jj(){for(var a=window,b=qc();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=qc(a.document)}return b}function kj(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function dl(a){var b=jj(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Cn(c.ownerDocument.documentElement,c)){if(null!==d&&kj(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Bn(c,f);var g=Bn(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Dn=Vb&&"documentMode"in document&&11>=document.documentMode,En=null,Fn=null,Gn=null,Hn=!1;
function In(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Hn||null==En||En!==qc(d)||(d=En,"selectionStart"in d&&kj(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Gn&&Ue(Gn,d)||(Gn=d,d=jn(Fn,"onSelect"),0<d.length&&(b=new Il("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=En)))}
function Jn(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Kn={animationend:Jn("Animation","AnimationEnd"),animationiteration:Jn("Animation","AnimationIteration"),animationstart:Jn("Animation","AnimationStart"),transitionend:Jn("Transition","TransitionEnd")},Ln={},Mn={};
Vb&&(Mn=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function Nn(a){if(Ln[a])return Ln[a];if(!Kn[a])return a;var b=Kn[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Mn)return Ln[a]=b[c];return a}var On=Nn("animationend"),Pn=Nn("animationiteration"),Qn=Nn("animationstart"),Rn=Nn("transitionend"),Sn=new Map,Tn="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
function Un(a,b){Sn.set(a,b);Tb(b,[a])}for(var Vn=0;Vn<Tn.length;Vn++){var Wn=Tn[Vn],Xn=Wn.toLowerCase(),Yn=Wn[0].toUpperCase()+Wn.slice(1);Un(Xn,"on"+Yn)}Un(On,"onAnimationEnd");Un(Pn,"onAnimationIteration");Un(Qn,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(Rn,"onTransitionEnd");Ub("onMouseEnter",["mouseout","mouseover"]);Ub("onMouseLeave",["mouseout","mouseover"]);Ub("onPointerEnter",["pointerout","pointerover"]);
Ub("onPointerLeave",["pointerout","pointerover"]);Tb("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tb("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tb("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tb("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tb("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tb("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$n=new Set("cancel close invalid load scroll scrollend toggle".split(" ").concat(Zn));
function ao(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yi(d,b,void 0,a);a.currentTarget=null}
function nn(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,n=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;ao(e,h,n);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;n=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;ao(e,h,n);f=k}}}if(Ui)throw a=Vi,Ui=!1,Vi=null,a;}
function Y(a,b){var c=b[Db];void 0===c&&(c=b[Db]=new Set);var d=a+"__bubble";c.has(d)||(bo(b,a,2,!1),c.add(d))}function co(a,b,c){var d=0;b&&(d|=4);bo(c,a,d,b)}var eo="_reactListening"+Math.random().toString(36).slice(2);function Mi(a){if(!a[eo]){a[eo]=!0;Rb.forEach(function(c){"selectionchange"!==c&&($n.has(c)||co(c,!1,a),co(c,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[eo]||(b[eo]=!0,co("selectionchange",!1,b))}}
function bo(a,b,c,d){switch(Fk(b)){case 2:var e=Km;break;case 8:e=Mm;break;default:e=Lm}c=e.bind(null,b,c,a);e=void 0;!Bl||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function Nm(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Kb(h);if(null===g)return;k=g.tag;if(5===k||6===k||26===k||27===k){d=f=g;continue a}h=h.parentNode}}d=d.return}zl(function(){var n=
f,u=Lc(c),w=[];a:{var q=Sn.get(a);if(void 0!==q){var r=Il,y=a;switch(a){case "keypress":if(0===Dl(c))break a;case "keydown":case "keyup":r=fm;break;case "focusin":y="focus";r=Ul;break;case "focusout":y="blur";r=Ul;break;case "beforeblur":case "afterblur":r=Ul;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":r=Ql;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":r=
Sl;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":r=jm;break;case On:case Pn:case Qn:r=Wl;break;case Rn:r=lm;break;case "scroll":case "scrollend":r=Kl;break;case "wheel":r=nm;break;case "copy":case "cut":case "paste":r=Yl;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":r=hm}var C=0!==(b&4),T=!C&&("scroll"===a||"scrollend"===a),m=C?null!==q?q+"Capture":
null:q;C=[];for(var l=n,p;null!==l;){var v=l;p=v.stateNode;v=v.tag;5!==v&&26!==v&&27!==v||null===p||null===m||(v=Al(l,m),null!=v&&C.push(fo(l,v,p)));if(T)break;l=l.return}0<C.length&&(q=new r(q,y,null,c,u),w.push({event:q,listeners:C}))}}if(0===(b&7)){a:{q="mouseover"===a||"pointerover"===a;r="mouseout"===a||"pointerout"===a;if(q&&c!==Kc&&(y=c.relatedTarget||c.fromElement)&&(Kb(y)||y[Cb]))break a;if(r||q){q=u.window===u?u:(q=u.ownerDocument)?q.defaultView||q.parentWindow:window;if(r){if(y=c.relatedTarget||
c.toElement,r=n,y=y?Kb(y):null,null!==y&&(T=Rc(y),C=y.tag,y!==T||5!==C&&27!==C&&6!==C))y=null}else r=null,y=n;if(r!==y){C=Ql;v="onMouseLeave";m="onMouseEnter";l="mouse";if("pointerout"===a||"pointerover"===a)C=hm,v="onPointerLeave",m="onPointerEnter",l="pointer";T=null==r?q:Nb(r);p=null==y?q:Nb(y);q=new C(v,l+"leave",r,c,u);q.target=T;q.relatedTarget=p;v=null;Kb(u)===n&&(C=new C(m,l+"enter",y,c,u),C.target=p,C.relatedTarget=T,v=C);T=v;if(r&&y)b:{C=r;m=y;l=0;for(p=C;p;p=go(p))l++;p=0;for(v=m;v;v=go(v))p++;
for(;0<l-p;)C=go(C),l--;for(;0<p-l;)m=go(m),p--;for(;l--;){if(C===m||null!==m&&C===m.alternate)break b;C=go(C);m=go(m)}C=null}else C=null;null!==r&&ho(w,q,r,C,!1);null!==y&&null!==T&&ho(w,T,y,C,!0)}}}a:{q=n?Nb(n):window;r=q.nodeName&&q.nodeName.toLowerCase();if("select"===r||"input"===r&&"file"===q.type)var x=pn;else if(gn(q))if(qn)x=zn;else{x=xn;var z=wn}else(r=q.nodeName)&&"input"===r.toLowerCase()&&("checkbox"===q.type||"radio"===q.type)&&(x=yn);if(x&&(x=x(a,n))){hn(w,x,c,u);break a}z&&z(a,q,n);
"focusout"===a&&n&&"number"===q.type&&null!=n.memoizedProps.value&&uc(q,"number",q.value)}z=n?Nb(n):window;switch(a){case "focusin":if(gn(z)||"true"===z.contentEditable)En=z,Fn=n,Gn=null;break;case "focusout":Gn=Fn=En=null;break;case "mousedown":Hn=!0;break;case "contextmenu":case "mouseup":case "dragend":Hn=!1;In(w,c,u);break;case "selectionchange":if(Dn)break;case "keydown":case "keyup":In(w,c,u)}var A;if(Um)b:{switch(a){case "compositionstart":var B="onCompositionStart";break b;case "compositionend":B=
"onCompositionEnd";break b;case "compositionupdate":B="onCompositionUpdate";break b}B=void 0}else cn?$m(a,c)&&(B="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(B="onCompositionStart");B&&(Xm&&"ko"!==c.locale&&(cn||"onCompositionStart"!==B?"onCompositionEnd"===B&&cn&&(A=Sm()):(Pm=u,Qm="value"in Pm?Pm.value:Pm.textContent,cn=!0)),z=jn(n,B),0<z.length&&(B=new $l(B,a,null,c,u),w.push({event:B,listeners:z}),A?B.data=A:(A=bn(c),null!==A&&(B.data=A))));if(A=Wm?dn(a,c):en(a,c))B=jn(n,"onBeforeInput"),
0<B.length&&(z=new $l("onBeforeInput","beforeinput",null,c,u),w.push({event:z,listeners:B}),z.data=A);om(w,a,n,c,u)}nn(w,b)})}function fo(a,b,c){return{instance:a,listener:b,currentTarget:c}}function jn(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;e=e.tag;5!==e&&26!==e&&27!==e||null===f||(e=Al(a,c),null!=e&&d.unshift(fo(a,e,f)),e=Al(a,b),null!=e&&d.push(fo(a,e,f)));a=a.return}return d}
function go(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag&&27!==a.tag);return a?a:null}function ho(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,n=h.stateNode;h=h.tag;if(null!==k&&k===d)break;5!==h&&26!==h&&27!==h||null===n||(k=n,e?(n=Al(c,f),null!=n&&g.unshift(fo(c,n,k))):e||(n=Al(c,f),null!=n&&g.push(fo(c,n,k))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var io=/\r\n?/g,jo=/\u0000|\uFFFD/g;
function ko(a){return("string"===typeof a?a:""+a).replace(io,"\n").replace(jo,"")}function Li(a,b,c){b=ko(b);if(ko(a)!==b&&c)throw Error(t(425));}function Aj(){}
function Z(a,b,c,d,e,f){switch(c){case "children":"string"===typeof d?"body"===b||"textarea"===b&&""===d||Ec(a,d):"number"===typeof d&&"body"!==b&&Ec(a,""+d);break;case "className":ac(a,"class",d);break;case "tabIndex":ac(a,"tabindex",d);break;case "dir":case "role":case "viewBox":case "width":case "height":ac(a,c,d);break;case "style":Hc(a,d,f);break;case "src":case "href":if(null==d||"function"===typeof d||"symbol"===typeof d||"boolean"===typeof d){a.removeAttribute(c);break}a.setAttribute(c,""+
d);break;case "action":case "formAction":if("function"===typeof d){a.setAttribute(c,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else"function"===typeof f&&("formAction"===c?("input"!==b&&Z(a,b,"name",e.name,e,null),Z(a,b,"formEncType",e.formEncType,e,null),Z(a,
b,"formMethod",e.formMethod,e,null),Z(a,b,"formTarget",e.formTarget,e,null)):(Z(a,b,"encType",e.encType,e,null),Z(a,b,"method",e.method,e,null),Z(a,b,"target",e.target,e,null)));if(null==d||"symbol"===typeof d||"boolean"===typeof d){a.removeAttribute(c);break}a.setAttribute(c,""+d);break;case "onClick":null!=d&&(a.onclick=Aj);break;case "onScroll":null!=d&&Y("scroll",a);break;case "onScrollEnd":null!=d&&Y("scrollend",a);break;case "dangerouslySetInnerHTML":if(null!=d){if("object"!==typeof d||!("__html"in
d))throw Error(t(61));d=d.__html;if(null!=d){if(null!=e.children)throw Error(t(60));Dc(a,d)}}break;case "multiple":a.multiple=d&&"function"!==typeof d&&"symbol"!==typeof d;break;case "muted":a.muted=d&&"function"!==typeof d&&"symbol"!==typeof d;break;case "suppressContentEditableWarning":case "suppressHydrationWarning":case "defaultValue":case "defaultChecked":case "innerHTML":case "ref":break;case "autoFocus":break;case "xlinkHref":if(null==d||"function"===typeof d||"boolean"===typeof d||"symbol"===
typeof d){a.removeAttribute("xlink:href");break}a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+d);break;case "contentEditable":case "spellCheck":case "draggable":case "value":case "autoReverse":case "externalResourcesRequired":case "focusable":case "preserveAlpha":null!=d&&"function"!==typeof d&&"symbol"!==typeof d?a.setAttribute(c,""+d):a.removeAttribute(c);break;case "allowFullScreen":case "async":case "autoPlay":case "controls":case "default":case "defer":case "disabled":case "disablePictureInPicture":case "disableRemotePlayback":case "formNoValidate":case "hidden":case "loop":case "noModule":case "noValidate":case "open":case "playsInline":case "readOnly":case "required":case "reversed":case "scoped":case "seamless":case "itemScope":d&&
"function"!==typeof d&&"symbol"!==typeof d?a.setAttribute(c,""):a.removeAttribute(c);break;case "capture":case "download":!0===d?a.setAttribute(c,""):!1!==d&&null!=d&&"function"!==typeof d&&"symbol"!==typeof d?a.setAttribute(c,d):a.removeAttribute(c);break;case "cols":case "rows":case "size":case "span":null!=d&&"function"!==typeof d&&"symbol"!==typeof d&&!isNaN(d)&&1<=d?a.setAttribute(c,d):a.removeAttribute(c);break;case "rowSpan":case "start":null==d||"function"===typeof d||"symbol"===typeof d||
isNaN(d)?a.removeAttribute(c):a.setAttribute(c,d);break;case "xlinkActuate":bc(a,"http://www.w3.org/1999/xlink","xlink:actuate",d);break;case "xlinkArcrole":bc(a,"http://www.w3.org/1999/xlink","xlink:arcrole",d);break;case "xlinkRole":bc(a,"http://www.w3.org/1999/xlink","xlink:role",d);break;case "xlinkShow":bc(a,"http://www.w3.org/1999/xlink","xlink:show",d);break;case "xlinkTitle":bc(a,"http://www.w3.org/1999/xlink","xlink:title",d);break;case "xlinkType":bc(a,"http://www.w3.org/1999/xlink","xlink:type",
d);break;case "xmlBase":bc(a,"http://www.w3.org/XML/1998/namespace","xml:base",d);break;case "xmlLang":bc(a,"http://www.w3.org/XML/1998/namespace","xml:lang",d);break;case "xmlSpace":bc(a,"http://www.w3.org/XML/1998/namespace","xml:space",d);break;case "is":$b(a,"is",d);break;default:if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])e=Jc.get(c)||c,$b(a,e,d)}}
function lo(a,b,c,d,e,f){switch(c){case "style":Hc(a,d,f);break;case "dangerouslySetInnerHTML":if(null!=d){if("object"!==typeof d||!("__html"in d))throw Error(t(61));b=d.__html;if(null!=b){if(null!=e.children)throw Error(t(60));Dc(a,b)}}break;case "children":"string"===typeof d?Ec(a,d):"number"===typeof d&&Ec(a,""+d);break;case "onScroll":null!=d&&Y("scroll",a);break;case "onScrollEnd":null!=d&&Y("scrollend",a);break;case "onClick":null!=d&&(a.onclick=Aj);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":case "innerHTML":case "ref":break;
default:Sb.hasOwnProperty(c)||("boolean"===typeof d&&(d=""+d),$b(a,c,d))}}
function Ki(a,b,c){switch(b){case "div":case "span":case "svg":case "path":case "a":case "g":case "p":case "li":break;case "input":Y("invalid",a);var d=null,e=null,f=null,g=null,h=null,k=null;for(u in c)if(c.hasOwnProperty(u)){var n=c[u];if(null!=n)switch(u){case "name":d=n;break;case "type":e=n;break;case "checked":h=n;break;case "defaultChecked":k=n;break;case "value":f=n;break;case "defaultValue":g=n;break;case "children":case "dangerouslySetInnerHTML":if(null!=n)throw Error(t(137,b));break;default:Z(a,
b,u,n,c,null)}}vc(a,f,g,h,k,e,d,!1);oc(a);return;case "select":Y("invalid",a);var u=e=f=null;for(d in c)if(c.hasOwnProperty(d)&&(g=c[d],null!=g))switch(d){case "value":f=g;break;case "defaultValue":e=g;break;case "multiple":u=g;default:Z(a,b,d,g,c,null)}b=f;c=e;a.multiple=!!u;null!=b?xc(a,!!u,b,!1):null!=c&&xc(a,!!u,c,!0);return;case "textarea":Y("invalid",a);f=d=u=null;for(e in c)if(c.hasOwnProperty(e)&&(g=c[e],null!=g))switch(e){case "value":u=g;break;case "defaultValue":d=g;break;case "children":f=
g;break;case "dangerouslySetInnerHTML":if(null!=g)throw Error(t(91));break;default:Z(a,b,e,g,c,null)}zc(a,u,d,f);oc(a);return;case "option":for(g in c)if(c.hasOwnProperty(g)&&(u=c[g],null!=u))switch(g){case "selected":a.selected=u&&"function"!==typeof u&&"symbol"!==typeof u;break;default:Z(a,b,g,u,c,null)}return;case "dialog":Y("cancel",a);Y("close",a);break;case "iframe":case "object":Y("load",a);break;case "video":case "audio":for(u=0;u<Zn.length;u++)Y(Zn[u],a);break;case "image":Y("error",a);Y("load",
a);break;case "details":Y("toggle",a);break;case "embed":case "source":case "img":case "link":Y("error",a),Y("load",a);case "area":case "base":case "br":case "col":case "hr":case "keygen":case "meta":case "param":case "track":case "wbr":case "menuitem":for(h in c)if(c.hasOwnProperty(h)&&(u=c[h],null!=u))switch(h){case "children":case "dangerouslySetInnerHTML":throw Error(t(137,b));default:Z(a,b,h,u,c,null)}return;default:if(Ic(b)){for(k in c)c.hasOwnProperty(k)&&(u=c[k],null!=u&&lo(a,b,k,u,c,null));
return}}for(f in c)c.hasOwnProperty(f)&&(u=c[f],null!=u&&Z(a,b,f,u,c,null))}
function Sj(a,b,c,d){switch(b){case "div":case "span":case "svg":case "path":case "a":case "g":case "p":case "li":break;case "input":var e=null,f=null,g=null,h=null,k=null,n=null,u=null;for(r in c){var w=c[r];if(c.hasOwnProperty(r)&&null!=w)switch(r){case "checked":break;case "value":break;case "defaultValue":k=w;default:d.hasOwnProperty(r)||Z(a,b,r,null,d,w)}}for(var q in d){var r=d[q];w=c[q];if(d.hasOwnProperty(q)&&(null!=r||null!=w))switch(q){case "type":f=r;break;case "name":e=r;break;case "checked":n=
r;break;case "defaultChecked":u=r;break;case "value":g=r;break;case "defaultValue":h=r;break;case "children":case "dangerouslySetInnerHTML":if(null!=r)throw Error(t(137,b));break;default:r!==w&&Z(a,b,q,r,d,w)}}tc(a,g,h,k,n,u,f,e);return;case "select":r=g=h=q=null;for(f in c)if(k=c[f],c.hasOwnProperty(f)&&null!=k)switch(f){case "value":break;case "multiple":r=k;default:d.hasOwnProperty(f)||Z(a,b,f,null,d,k)}for(e in d)if(f=d[e],k=c[e],d.hasOwnProperty(e)&&(null!=f||null!=k))switch(e){case "value":q=
f;break;case "defaultValue":h=f;break;case "multiple":g=f;default:f!==k&&Z(a,b,e,f,d,k)}b=h;c=g;d=r;null!=q?xc(a,!!c,q,!1):!!d!==!!c&&(null!=b?xc(a,!!c,b,!0):xc(a,!!c,c?[]:"",!1));return;case "textarea":r=q=null;for(h in c)if(e=c[h],c.hasOwnProperty(h)&&null!=e&&!d.hasOwnProperty(h))switch(h){case "value":break;case "children":break;default:Z(a,b,h,null,d,e)}for(g in d)if(e=d[g],f=c[g],d.hasOwnProperty(g)&&(null!=e||null!=f))switch(g){case "value":q=e;break;case "defaultValue":r=e;break;case "children":break;
case "dangerouslySetInnerHTML":if(null!=e)throw Error(t(91));break;default:e!==f&&Z(a,b,g,e,d,f)}yc(a,q,r);return;case "option":for(var y in c)if(q=c[y],c.hasOwnProperty(y)&&null!=q&&!d.hasOwnProperty(y))switch(y){case "selected":a.selected=!1;break;default:Z(a,b,y,null,d,q)}for(k in d)if(q=d[k],r=c[k],d.hasOwnProperty(k)&&q!==r&&(null!=q||null!=r))switch(k){case "selected":a.selected=q&&"function"!==typeof q&&"symbol"!==typeof q;break;default:Z(a,b,k,q,d,r)}return;case "img":case "link":case "area":case "base":case "br":case "col":case "embed":case "hr":case "keygen":case "meta":case "param":case "source":case "track":case "wbr":case "menuitem":for(var C in c)q=
c[C],c.hasOwnProperty(C)&&null!=q&&!d.hasOwnProperty(C)&&Z(a,b,C,null,d,q);for(n in d)if(q=d[n],r=c[n],d.hasOwnProperty(n)&&q!==r&&(null!=q||null!=r))switch(n){case "children":case "dangerouslySetInnerHTML":if(null!=q)throw Error(t(137,b));break;default:Z(a,b,n,q,d,r)}return;default:if(Ic(b)){for(var T in c)q=c[T],c.hasOwnProperty(T)&&null!=q&&!d.hasOwnProperty(T)&&lo(a,b,T,null,d,q);for(u in d)q=d[u],r=c[u],!d.hasOwnProperty(u)||q===r||null==q&&null==r||lo(a,b,u,q,d,r);return}}for(var m in c)q=c[m],
c.hasOwnProperty(m)&&null!=q&&!d.hasOwnProperty(m)&&Z(a,b,m,null,d,q);for(w in d)q=d[w],r=c[w],!d.hasOwnProperty(w)||q===r||null==q&&null==r||Z(a,b,w,q,d,r)}var hj=null,lj=null;function Ji(a){return 9===a.nodeType?a:a.ownerDocument}function Ka(a){switch(a){case "http://www.w3.org/2000/svg":return 1;case "http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}
function La(a,b){if(0===a)switch(b){case "svg":return 1;case "math":return 2;default:return 0}return 1===a&&"foreignObject"===b?0:a}function Md(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var mo=null;function ve(){var a=window.event;if(a&&"popstate"===a.type){if(a===mo)return!1;mo=a;return!0}mo=null;return!1}
var Jk="function"===typeof setTimeout?setTimeout:void 0,Rk="function"===typeof clearTimeout?clearTimeout:void 0,no="function"===typeof Promise?Promise:void 0,ye="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof no?function(a){return no.resolve(null).then(a).catch(oo)}:Jk;function oo(a){setTimeout(function(){throw a;})}
function Gj(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);Hj(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);Hj(b)}function mj(a){var b=a.nodeType;if(9===b)po(a);else if(1===b)switch(a.nodeName){case "HEAD":case "HTML":case "BODY":po(a);break;default:a.textContent=""}}
function po(a){var b=a.firstChild;b&&10===b.nodeType&&(b=b.nextSibling);for(;b;){var c=b;b=b.nextSibling;switch(c.nodeName){case "HTML":case "HEAD":case "BODY":po(c);Jb(c);continue;case "SCRIPT":case "STYLE":continue;case "LINK":if("stylesheet"===c.rel.toLowerCase())continue}a.removeChild(c)}}
function Cd(a,b,c,d){for(;1===a.nodeType;){var e=c;if(a.nodeName.toLowerCase()!==b.toLowerCase()){if(!d&&("INPUT"!==a.nodeName||"hidden"!==a.type))break}else if(!d)if("input"===b&&"hidden"===a.type){var f=null==e.name?null:""+e.name;if("hidden"===e.type&&a.getAttribute("name")===f)return a}else return a;else if(!a[Ib])switch(b){case "meta":if(!a.hasAttribute("itemprop"))break;return a;case "link":f=a.getAttribute("rel");if("stylesheet"===f&&a.hasAttribute("data-precedence"))break;else if(f!==e.rel||
a.getAttribute("href")!==(null==e.href?null:e.href)||a.getAttribute("crossorigin")!==(null==e.crossOrigin?null:e.crossOrigin)||a.getAttribute("title")!==(null==e.title?null:e.title))break;return a;case "style":if(a.hasAttribute("data-precedence"))break;return a;case "script":f=a.getAttribute("src");if((f!==(null==e.src?null:e.src)||a.getAttribute("type")!==(null==e.type?null:e.type)||a.getAttribute("crossorigin")!==(null==e.crossOrigin?null:e.crossOrigin))&&f&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;
return a;default:return a}a=Hd(a);if(null===a)break}return null}function Fd(a,b,c){if(""===b)return null;for(;3!==a.nodeType;){if((1!==a.nodeType||"INPUT"!==a.nodeName||"hidden"!==a.type)&&!c)return null;a=Hd(a);if(null===a)return null}return a}function Dd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b||"F!"===b||"F"===b)break;if("/$"===b)return null}}return a}function Hd(a){return Dd(a.nextSibling)}
function Hi(a,b,c,d,e){a[Ab]=e;a[Bb]=c;d=0!==(e.mode&1);switch(b){case "dialog":Y("cancel",a);Y("close",a);break;case "iframe":case "object":case "embed":Y("load",a);break;case "video":case "audio":for(e=0;e<Zn.length;e++)Y(Zn[e],a);break;case "source":Y("error",a);break;case "img":case "image":case "link":Y("error",a);Y("load",a);break;case "details":Y("toggle",a);break;case "input":Y("invalid",a);vc(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);oc(a);break;case "select":Y("invalid",
a);break;case "textarea":Y("invalid",a),zc(a,c.value,c.defaultValue,c.children),oc(a)}e=c.children;"string"!==typeof e&&"number"!==typeof e||a.textContent===""+e||(!0!==c.suppressHydrationWarning&&Li(a.textContent,e,d),d||"body"===b||(a.textContent=e));null!=c.onScroll&&Y("scroll",a);null!=c.onScrollEnd&&Y("scrollend",a);null!=c.onClick&&(a.onclick=Aj)}
function Lb(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}function Ii(a,b,c){b=Ji(c);switch(a){case "html":a=b.documentElement;if(!a)throw Error(t(452));return a;case "head":a=b.head;if(!a)throw Error(t(453));return a;case "body":a=b.body;if(!a)throw Error(t(454));return a;default:throw Error(t(451));}}var qo=new Map,ro=new Set;
function Uj(a){return"function"===typeof a.getRootNode?a.getRootNode():a.ownerDocument}var zo={prefetchDNS:so,preconnect:to,preload:uo,preloadModule:vo,preinitStyle:wo,preinitScript:xo,preinitModuleScript:yo};
function Ao(a,b,c){var d=document;if("string"===typeof b&&b){var e=sc(b);e='link[rel="'+a+'"][href="'+e+'"]';"string"===typeof c&&(e+='[crossorigin="'+c+'"]');ro.has(e)||(ro.add(e),a={rel:a,crossOrigin:c,href:b},null===d.querySelector(e)&&(b=d.createElement("link"),Ki(b,"link",a),Qb(b),d.head.appendChild(b)))}}function so(a){Ao("dns-prefetch",a,null)}function to(a,b){Ao("preconnect",a,b)}
function uo(a,b,c){var d=document;if(a&&b&&d){var e='link[rel="preload"][as="'+sc(b)+'"]';"image"===b?c&&c.imageSrcSet?(e+='[imagesrcset="'+sc(c.imageSrcSet)+'"]',"string"===typeof c.imageSizes&&(e+='[imagesizes="'+sc(c.imageSizes)+'"]')):e+='[href="'+sc(a)+'"]':e+='[href="'+sc(a)+'"]';var f=e;switch(b){case "style":f=Bo(a);break;case "script":f=Co(a)}qo.has(f)||(a=D({rel:"preload",href:"image"===b&&c&&c.imageSrcSet?void 0:a,as:b},c),qo.set(f,a),null!==d.querySelector(e)||"style"===b&&d.querySelector(Do(f))||
"script"===b&&d.querySelector(Eo(f))||(b=d.createElement("link"),Ki(b,"link",a),Qb(b),d.head.appendChild(b)))}}
function vo(a,b){var c=document;if(a){var d=b&&"string"===typeof b.as?b.as:"script",e='link[rel="modulepreload"][as="'+sc(d)+'"][href="'+sc(a)+'"]',f=e;switch(d){case "audioworklet":case "paintworklet":case "serviceworker":case "sharedworker":case "worker":case "script":f=Co(a)}if(!qo.has(f)&&(a=D({rel:"modulepreload",href:a},b),qo.set(f,a),null===c.querySelector(e))){switch(d){case "audioworklet":case "paintworklet":case "serviceworker":case "sharedworker":case "worker":case "script":if(c.querySelector(Eo(f)))return}d=c.createElement("link");
Ki(d,"link",a);Qb(d);c.head.appendChild(d)}}}
function wo(a,b,c){var d=document;if(a){var e=Pb(d).hoistableStyles,f=Bo(a);b=b||"default";var g=e.get(f);if(!g){var h={loading:0,preload:null};if(g=d.querySelector(Do(f)))h.loading=5;else{a=D({rel:"stylesheet",href:a,"data-precedence":b},c);(c=qo.get(f))&&Fo(a,c);var k=g=d.createElement("link");Qb(k);Ki(k,"link",a);k._p=new Promise(function(n,u){k.onload=n;k.onerror=u});k.addEventListener("load",function(){h.loading|=1});k.addEventListener("error",function(){h.loading|=2});h.loading|=4;Go(g,b,d)}g=
{type:"stylesheet",instance:g,count:1,state:h};e.set(f,g)}}}function xo(a,b){var c=document;if(a){var d=Pb(c).hoistableScripts,e=Co(a),f=d.get(e);f||(f=c.querySelector(Eo(e)),f||(a=D({src:a,async:!0},b),(b=qo.get(e))&&Ho(a,b),f=c.createElement("script"),Qb(f),Ki(f,"link",a),c.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},d.set(e,f))}}
function yo(a,b){var c=document;if(a){var d=Pb(c).hoistableScripts,e=Co(a),f=d.get(e);f||(f=c.querySelector(Eo(e)),f||(a=D({src:a,async:!0,type:"module"},b),(b=qo.get(e))&&Ho(a,b),f=c.createElement("script"),Qb(f),Ki(f,"link",a),c.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},d.set(e,f))}}
function jl(a,b,c){b=(b=Ga.current)?Uj(b):null;if(!b)throw Error(t(446));switch(a){case "meta":case "title":return null;case "style":return"string"===typeof c.precedence&&"string"===typeof c.href?(c=Bo(c.href),b=Pb(b).hoistableStyles,a=b.get(c),a||(a={type:"style",instance:null,count:0,state:null},b.set(c,a)),a):{type:"void",instance:null,count:0,state:null};case "link":if("stylesheet"===c.rel&&"string"===typeof c.href&&"string"===typeof c.precedence){a=Bo(c.href);var d=Pb(b).hoistableStyles,e=d.get(a);
e||(b=b.ownerDocument||b,e={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(a,e),qo.has(a)||Io(b,a,{rel:"preload",as:"style",href:c.href,crossOrigin:c.crossOrigin,integrity:c.integrity,media:c.media,hrefLang:c.hrefLang,referrerPolicy:c.referrerPolicy},e.state));return e}return null;case "script":return"string"===typeof c.src&&!0===c.async?(c=Co(c.src),b=Pb(b).hoistableScripts,a=b.get(c),a||(a={type:"script",instance:null,count:0,state:null},b.set(c,a)),a):{type:"void",
instance:null,count:0,state:null};default:throw Error(t(444,a));}}function Bo(a){return'href="'+sc(a)+'"'}function Do(a){return'link[rel="stylesheet"]['+a+"]"}function Jo(a){return D({},a,{"data-precedence":a.precedence,precedence:null})}
function Io(a,b,c,d){qo.set(b,c);a.querySelector(Do(b))||(a.querySelector('link[rel="preload"][as="style"]['+b+"]")?d.loading=1:(b=a.createElement("link"),d.preload=b,b.addEventListener("load",function(){return d.loading|=1}),b.addEventListener("error",function(){return d.loading|=2}),Ki(b,"link",c),Qb(b),a.head.appendChild(b)))}function Co(a){return'[src="'+sc(a)+'"]'}function Eo(a){return"script[async]"+a}
function Rj(a,b,c){b.count++;if(null===b.instance)switch(b.type){case "style":var d=a.querySelector('style[data-href~="'+sc(c.href)+'"]');if(d)return b.instance=d,Qb(d),d;var e=D({},c,{"data-href":c.href,"data-precedence":c.precedence,href:null,precedence:null});d=(a.ownerDocument||a).createElement("style");Qb(d);Ki(d,"style",e);Go(d,c.precedence,a);return b.instance=d;case "stylesheet":e=Bo(c.href);var f=a.querySelector(Do(e));if(f)return b.state.loading|=4,b.instance=f,Qb(f),f;d=Jo(c);(e=qo.get(e))&&
Fo(d,e);f=(a.ownerDocument||a).createElement("link");Qb(f);var g=f;g._p=new Promise(function(h,k){g.onload=h;g.onerror=k});Ki(f,"link",d);b.state.loading|=4;Go(f,c.precedence,a);return b.instance=f;case "script":f=Co(c.src);if(e=a.querySelector(Eo(f)))return b.instance=e,Qb(e),e;d=c;if(e=qo.get(f))d=D({},c),Ho(d,e);a=a.ownerDocument||a;e=a.createElement("script");Qb(e);Ki(e,"link",d);a.head.appendChild(e);return b.instance=e;case "void":return null;default:throw Error(t(443,b.type));}else"stylesheet"===
b.type&&0===(b.state.loading&4)&&(d=b.instance,b.state.loading|=4,Go(d,c.precedence,a));return b.instance}function Go(a,b,c){for(var d=c.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),e=d.length?d[d.length-1]:null,f=e,g=0;g<d.length;g++){var h=d[g];if(h.dataset.precedence===b)f=h;else if(f!==e)break}f?f.parentNode.insertBefore(a,f.nextSibling):(b=9===c.nodeType?c.head:c,b.insertBefore(a,b.firstChild))}
function Fo(a,b){null==a.crossOrigin&&(a.crossOrigin=b.crossOrigin);null==a.referrerPolicy&&(a.referrerPolicy=b.referrerPolicy);null==a.title&&(a.title=b.title)}function Ho(a,b){null==a.crossOrigin&&(a.crossOrigin=b.crossOrigin);null==a.referrerPolicy&&(a.referrerPolicy=b.referrerPolicy);null==a.integrity&&(a.integrity=b.integrity)}var Tj=null;
function Pj(a,b,c){if(null===Tj){var d=new Map;var e=Tj=new Map;e.set(c,d)}else e=Tj,d=e.get(c),d||(d=new Map,e.set(c,d));if(d.has(a))return d;d.set(a,null);c=c.getElementsByTagName(a);for(e=0;e<c.length;e++){var f=c[e];if(!(f[Ib]||f[Ab]||"link"===a&&"stylesheet"===f.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==f.namespaceURI){var g=f.getAttribute(b)||"";g=a+g;var h=d.get(g);h?h.push(f):d.set(g,[f])}}return d}
function Qj(a,b,c){a=a.ownerDocument||a;a.head.insertBefore(c,"title"===b?a.querySelector("head > title"):null)}
function ll(a,b,c){if(1===c||null!=b.itemProp)return!1;switch(a){case "meta":case "title":return!0;case "style":if("string"!==typeof b.precedence||"string"!==typeof b.href||""===b.href)break;return!0;case "link":if("string"!==typeof b.rel||"string"!==typeof b.href||""===b.href||b.onLoad||b.onError)break;switch(b.rel){case "stylesheet":return a=b.disabled,"string"===typeof b.precedence&&null==a;default:return!0}case "script":if(!0===b.async&&!b.onLoad&&!b.onError&&"string"===typeof b.src&&b.src)return!0}return!1}
var Lk=null;function Mk(){}
function hk(a,b,c){if(null===Lk)throw Error(t(475));var d=Lk;if("stylesheet"===b.type&&("string"!==typeof c.media||!1!==matchMedia(c.media).matches)&&0===(b.state.loading&4)){if(null===b.instance){var e=Bo(c.href),f=a.querySelector(Do(e));if(f){a=f._p;null!==a&&"object"===typeof a&&"function"===typeof a.then&&(d.count++,d=Ko.bind(d),a.then(d,d));b.state.loading|=4;b.instance=f;Qb(f);return}f=a.ownerDocument||a;c=Jo(c);(e=qo.get(e))&&Fo(c,e);f=f.createElement("link");Qb(f);var g=f;g._p=new Promise(function(h,
k){g.onload=h;g.onerror=k});Ki(f,"link",c);b.instance=f}null===d.stylesheets&&(d.stylesheets=new Map);d.stylesheets.set(b,a);(a=b.state.preload)&&0===(b.state.loading&3)&&(d.count++,b=Ko.bind(d),a.addEventListener("load",b),a.addEventListener("error",b))}}
function Nk(){if(null===Lk)throw Error(t(475));var a=Lk;a.stylesheets&&0===a.count&&Lo(a,a.stylesheets);return 0<a.count?function(b){var c=setTimeout(function(){a.stylesheets&&Lo(a,a.stylesheets);if(a.unsuspend){var d=a.unsuspend;a.unsuspend=null;d()}},6E4);a.unsuspend=b;return function(){a.unsuspend=null;clearTimeout(c)}}:null}function Ko(){this.count--;if(0===this.count)if(this.stylesheets)Lo(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null;a()}}var Mo=null;
function Lo(a,b){a.stylesheets=null;null!==a.unsuspend&&(a.count++,Mo=new Map,b.forEach(No,a),Mo=null,Ko.call(a))}
function No(a,b){if(!(b.state.loading&4)){var c=Mo.get(a);if(c)var d=c.get(null);else{c=new Map;Mo.set(a,c);for(var e=a.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<e.length;f++){var g=e[f];if("link"===g.nodeName||"not all"!==g.getAttribute("media"))c.set(g.dataset.precedence,g),d=g}d&&c.set(null,d)}e=b.instance;g=e.getAttribute("data-precedence");f=c.get(g)||d;f===d&&c.set(null,e);c.set(g,e);this.count++;d=Ko.bind(this);e.addEventListener("load",d);e.addEventListener("error",
d);f?f.parentNode.insertBefore(e,f.nextSibling):(a=9===a.nodeType?a.head:a,a.insertBefore(e,a.firstChild));b.state.loading|=4}}var Oo=ca.Dispatcher;"undefined"!==typeof document&&(Oo.current=zo);var Po="function"===typeof reportError?reportError:function(a){console.error(a)};function Qo(a){this._internalRoot=a}Ro.prototype.render=Qo.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(t(409));rl(a,b,null,null)};
Ro.prototype.unmount=Qo.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Pk(function(){rl(null,a,null,null)});b[Cb]=null}};function Ro(a){this._internalRoot=a}Ro.prototype.unstable_scheduleHydration=function(a){if(a){var b=G;a={blockedOn:null,target:a,priority:b};for(var c=0;c<vm.length&&0!==b&&b<vm[c].priority;c++);vm.splice(c,0,a);0===c&&Am(a)}};function So(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}
function To(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Uo(){}
function Vo(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var n=sl(g);f.call(n)}}var g=ql(b,d,a,0,null,!1,!1,"",Uo,null,null);a._reactRootContainer=g;a[Cb]=g.current;Mi(8===a.nodeType?a.parentNode:a);Pk();return g}mj(a);if("function"===typeof d){var h=d;d=function(){var n=sl(k);h.call(n)}}var k=nl(a,0,!1,null,null,!1,!1,"",Uo,null,null);a._reactRootContainer=k;a[Cb]=k.current;Mi(8===a.nodeType?a.parentNode:a);Pk(function(){rl(b,k,c,d)});return k}
function Wo(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var k=sl(g);h.call(k)}}rl(b,g,a,e)}else g=Vo(c,b,a,e,d);return sl(g)}function Xo(a,b){if("font"===a)return"";if("string"===typeof b)return"use-credentials"===b?b:""}var Yo=ca.Dispatcher;ca.Events=[Mb,Nb,Ob,Pc,Qc,Ok];var Zo={findFiberByHostInstance:Kb,bundleType:0,version:"18.3.0-canary-14898b6a9-20240318",rendererPackageName:"react-dom"};
var $o={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:da.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Vc(a);return null===a?null:a.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||
xl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.0-canary-14898b6a9-20240318"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ap=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ap.isDisabled&&ap.supportsFiber)try{bb=ap.inject($o),cb=ap}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ca;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!So(b))throw Error(t(299));return ol(a,b,null,c)};
exports.createRoot=function(a,b){if(!So(a))throw Error(t(299));var c=!1,d="",e=Po,f=null;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError),void 0!==b.unstable_transitionCallbacks&&(f=b.unstable_transitionCallbacks));b=nl(a,1,!1,null,null,c,!1,d,e,f,null);a[Cb]=b.current;Oo.current=zo;Mi(8===a.nodeType?a.parentNode:a);return new Qo(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(t(188));a=Object.keys(a).join(",");throw Error(t(268,a));}a=Vc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Pk(a)};exports.hydrate=function(a,b,c){if(!To(b))throw Error(t(299));return Wo(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!So(a))throw Error(t(299));var d=!1,e="",f=Po,g=null,h=null;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(d=!0),void 0!==c.identifierPrefix&&(e=c.identifierPrefix),void 0!==c.onRecoverableError&&(f=c.onRecoverableError),void 0!==c.unstable_transitionCallbacks&&(g=c.unstable_transitionCallbacks),void 0!==c.formState&&(h=c.formState));b=ql(b,null,a,1,null!=c?c:null,d,!1,e,f,g,h);a[Cb]=b.current;Oo.current=zo;Mi(a);return new Ro(b)};
exports.preconnect=function(a,b){var c=Yo.current;c&&"string"===typeof a&&(b?(b=b.crossOrigin,b="string"===typeof b?"use-credentials"===b?b:"":void 0):b=null,c.preconnect(a,b))};exports.prefetchDNS=function(a){var b=Yo.current;b&&"string"===typeof a&&b.prefetchDNS(a)};
exports.preinit=function(a,b){var c=Yo.current;if(c&&"string"===typeof a&&b&&"string"===typeof b.as){var d=b.as,e=Xo(d,b.crossOrigin),f="string"===typeof b.integrity?b.integrity:void 0,g="string"===typeof b.fetchPriority?b.fetchPriority:void 0;"style"===d?c.preinitStyle(a,"string"===typeof b.precedence?b.precedence:void 0,{crossOrigin:e,integrity:f,fetchPriority:g}):"script"===d&&c.preinitScript(a,{crossOrigin:e,integrity:f,fetchPriority:g,nonce:"string"===typeof b.nonce?b.nonce:void 0})}};
exports.preinitModule=function(a,b){var c=Yo.current;if(c&&"string"===typeof a)if("object"===typeof b&&null!==b){if(null==b.as||"script"===b.as){var d=Xo(b.as,b.crossOrigin);c.preinitModuleScript(a,{crossOrigin:d,integrity:"string"===typeof b.integrity?b.integrity:void 0,nonce:"string"===typeof b.nonce?b.nonce:void 0})}}else null==b&&c.preinitModuleScript(a)};
exports.preload=function(a,b){var c=Yo.current;if(c&&"string"===typeof a&&"object"===typeof b&&null!==b&&"string"===typeof b.as){var d=b.as,e=Xo(d,b.crossOrigin);c.preload(a,d,{crossOrigin:e,integrity:"string"===typeof b.integrity?b.integrity:void 0,nonce:"string"===typeof b.nonce?b.nonce:void 0,type:"string"===typeof b.type?b.type:void 0,fetchPriority:"string"===typeof b.fetchPriority?b.fetchPriority:void 0,referrerPolicy:"string"===typeof b.referrerPolicy?b.referrerPolicy:void 0,imageSrcSet:"string"===
typeof b.imageSrcSet?b.imageSrcSet:void 0,imageSizes:"string"===typeof b.imageSizes?b.imageSizes:void 0})}};exports.preloadModule=function(a,b){var c=Yo.current;if(c&&"string"===typeof a)if(b){var d=Xo(b.as,b.crossOrigin);c.preloadModule(a,{as:"string"===typeof b.as&&"script"!==b.as?b.as:void 0,crossOrigin:d,integrity:"string"===typeof b.integrity?b.integrity:void 0})}else c.preloadModule(a)};exports.render=function(a,b,c){if(!To(b))throw Error(t(299));return Wo(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!To(a))throw Error(t(299));return a._reactRootContainer?(Pk(function(){Wo(null,null,a,!1,function(){a._reactRootContainer=null;a[Cb]=null})}),!0):!1};exports.unstable_batchedUpdates=Ok;exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!To(c))throw Error(t(299));if(null==a||void 0===a._reactInternals)throw Error(t(38));return Wo(a,b,c,!1,d)};exports.useFormState=function(a,b,c){return ea.current.useFormState(a,b,c)};
exports.useFormStatus=function(){return ea.current.useHostTransitionStatus()};exports.version="18.3.0-canary-14898b6a9-20240318";

//# sourceMappingURL=react-dom.production.min.js.map


/***/ }),

/***/ 4040:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(4887);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 4887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(4417);
} else {}


/***/ }),

/***/ 7950:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/*
 React
 react-server-dom-webpack-client.browser.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var r=__webpack_require__(4887),t={stream:!0};function u(a,b){if(a){var c=a[b[0]];if(a=c[b[2]])c=a.name;else{a=c["*"];if(!a)throw Error('Could not find the module "'+b[0]+'" in the React SSR Manifest. This is probably a bug in the React Server Components bundler.');c=b[2]}return 4===b.length?[a.id,a.chunks,c,1]:[a.id,a.chunks,c]}return b}var v=new Map;
function w(a){var b=__webpack_require__(a);if("function"!==typeof b.then||"fulfilled"===b.status)return null;b.then(function(c){b.status="fulfilled";b.value=c},function(c){b.status="rejected";b.reason=c});return b}function x(){}
function y(a){for(var b=a[1],c=[],e=0;e<b.length;){var l=b[e++],k=b[e++],n=v.get(l);void 0===n?(z.set(l,k),k=__webpack_require__.e(l),c.push(k),n=v.set.bind(v,l,null),k.then(n,x),v.set(l,k)):null!==n&&c.push(n)}return 4===a.length?0===c.length?w(a[0]):Promise.all(c).then(function(){return w(a[0])}):0<c.length?Promise.all(c):null}var z=new Map,A=__webpack_require__.u;__webpack_require__.u=function(a){var b=z.get(a);return void 0!==b?b:A(a)};
var B=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher,C=Symbol.for("react.element"),E=Symbol.for("react.lazy"),F=Symbol.iterator;function H(a){if(null===a||"object"!==typeof a)return null;a=F&&a[F]||a["@@iterator"];return"function"===typeof a?a:null}var I=Array.isArray,J=Object.getPrototypeOf,aa=Object.prototype,K=new WeakMap;function ba(a){return Number.isFinite(a)?0===a&&-Infinity===1/a?"$-0":a:Infinity===a?"$Infinity":-Infinity===a?"$-Infinity":"$NaN"}
function ca(a,b,c,e){function l(m,d){if(null===d)return null;if("object"===typeof d){if("function"===typeof d.then){null===g&&(g=new FormData);n++;var h=k++;d.then(function(p){p=JSON.stringify(p,l);var q=g;q.append(b+h,p);n--;0===n&&c(q)},function(p){e(p)});return"$@"+h.toString(16)}if(I(d))return d;if(d instanceof FormData){null===g&&(g=new FormData);var f=g;m=k++;var D=b+m+"_";d.forEach(function(p,q){f.append(D+q,p)});return"$K"+m.toString(16)}if(d instanceof Map)return d=JSON.stringify(Array.from(d),
l),null===g&&(g=new FormData),m=k++,g.append(b+m,d),"$Q"+m.toString(16);if(d instanceof Set)return d=JSON.stringify(Array.from(d),l),null===g&&(g=new FormData),m=k++,g.append(b+m,d),"$W"+m.toString(16);if(H(d))return Array.from(d);m=J(d);if(m!==aa&&(null===m||null!==J(m)))throw Error("Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported.");return d}if("string"===typeof d){if("Z"===d[d.length-1]&&this[m]instanceof Date)return"$D"+d;
d="$"===d[0]?"$"+d:d;return d}if("boolean"===typeof d)return d;if("number"===typeof d)return ba(d);if("undefined"===typeof d)return"$undefined";if("function"===typeof d){d=K.get(d);if(void 0!==d)return d=JSON.stringify(d,l),null===g&&(g=new FormData),m=k++,g.set(b+m,d),"$F"+m.toString(16);throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.");}if("symbol"===typeof d){m=d.description;if(Symbol.for(m)!==d)throw Error("Only global symbols received from Symbol.for(...) can be passed to Server Functions. The symbol Symbol.for("+
(d.description+") cannot be found among global symbols."));return"$S"+m}if("bigint"===typeof d)return"$n"+d.toString(10);throw Error("Type "+typeof d+" is not supported as an argument to a Server Function.");}var k=1,n=0,g=null;a=JSON.stringify(a,l);null===g?c(a):(g.set(b+"0",a),0===n&&c(g))}function da(a,b){K.set(a,b)}function L(a,b,c,e){this.status=a;this.value=b;this.reason=c;this._response=e}L.prototype=Object.create(Promise.prototype);
L.prototype.then=function(a,b){switch(this.status){case "resolved_model":M(this);break;case "resolved_module":N(this)}switch(this.status){case "fulfilled":a(this.value);break;case "pending":case "blocked":case "cyclic":a&&(null===this.value&&(this.value=[]),this.value.push(a));b&&(null===this.reason&&(this.reason=[]),this.reason.push(b));break;default:b(this.reason)}};
function ea(a){switch(a.status){case "resolved_model":M(a);break;case "resolved_module":N(a)}switch(a.status){case "fulfilled":return a.value;case "pending":case "blocked":case "cyclic":throw a;default:throw a.reason;}}function O(a,b){for(var c=0;c<a.length;c++)(0,a[c])(b)}function Q(a,b,c){switch(a.status){case "fulfilled":O(b,a.value);break;case "pending":case "blocked":case "cyclic":a.value=b;a.reason=c;break;case "rejected":c&&O(c,a.reason)}}
function R(a,b){if("pending"===a.status||"blocked"===a.status){var c=a.reason;a.status="rejected";a.reason=b;null!==c&&O(c,b)}}function S(a,b){if("pending"===a.status||"blocked"===a.status){var c=a.value,e=a.reason;a.status="resolved_module";a.value=b;null!==c&&(N(a),Q(a,c,e))}}var T=null,U=null;
function M(a){var b=T,c=U;T=a;U=null;var e=a.value;a.status="cyclic";a.value=null;a.reason=null;try{var l=JSON.parse(e,a._response._fromJSON);if(null!==U&&0<U.deps)U.value=l,a.status="blocked",a.value=null,a.reason=null;else{var k=a.value;a.status="fulfilled";a.value=l;null!==k&&O(k,l)}}catch(n){a.status="rejected",a.reason=n}finally{T=b,U=c}}
function N(a){try{var b=a.value,c=__webpack_require__(b[0]);if(4===b.length&&"function"===typeof c.then)if("fulfilled"===c.status)c=c.value;else throw c.reason;var e="*"===b[2]?c:""===b[2]?c.__esModule?c.default:c:c[b[2]];a.status="fulfilled";a.value=e}catch(l){a.status="rejected",a.reason=l}}function V(a,b){a._chunks.forEach(function(c){"pending"===c.status&&R(c,b)})}function W(a,b){var c=a._chunks,e=c.get(b);e||(e=new L("pending",null,null,a),c.set(b,e));return e}
function fa(a,b,c,e){if(U){var l=U;e||l.deps++}else l=U={deps:e?0:1,value:null};return function(k){b[c]=k;l.deps--;0===l.deps&&"blocked"===a.status&&(k=a.value,a.status="fulfilled",a.value=l.value,null!==k&&O(k,l.value))}}function ha(a){return function(b){return R(a,b)}}
function ia(a,b){function c(){var l=Array.prototype.slice.call(arguments),k=b.bound;return k?"fulfilled"===k.status?e(b.id,k.value.concat(l)):Promise.resolve(k).then(function(n){return e(b.id,n.concat(l))}):e(b.id,l)}var e=a._callServer;K.set(c,b);return c}function X(a,b){a=W(a,b);switch(a.status){case "resolved_model":M(a)}switch(a.status){case "fulfilled":return a.value;default:throw a.reason;}}
function ja(a,b,c,e){if("$"===e[0]){if("$"===e)return C;switch(e[1]){case "$":return e.slice(1);case "L":return b=parseInt(e.slice(2),16),a=W(a,b),{$$typeof:E,_payload:a,_init:ea};case "@":if(2===e.length)return new Promise(function(){});b=parseInt(e.slice(2),16);return W(a,b);case "S":return Symbol.for(e.slice(2));case "F":return b=parseInt(e.slice(2),16),b=X(a,b),ia(a,b);case "Q":return b=parseInt(e.slice(2),16),a=X(a,b),new Map(a);case "W":return b=parseInt(e.slice(2),16),a=X(a,b),new Set(a);case "I":return Infinity;
case "-":return"$-0"===e?-0:-Infinity;case "N":return NaN;case "u":return;case "D":return new Date(Date.parse(e.slice(2)));case "n":return BigInt(e.slice(2));default:e=parseInt(e.slice(1),16);a=W(a,e);switch(a.status){case "resolved_model":M(a);break;case "resolved_module":N(a)}switch(a.status){case "fulfilled":return a.value;case "pending":case "blocked":case "cyclic":return e=T,a.then(fa(e,b,c,"cyclic"===a.status),ha(e)),null;default:throw a.reason;}}}return e}
function ka(){throw Error('Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.');}function Y(a,b,c,e,l){var k=new Map;a={_bundlerConfig:a,_moduleLoading:b,_callServer:void 0!==c?c:ka,_encodeFormAction:e,_nonce:l,_chunks:k,_stringDecoder:new TextDecoder,_fromJSON:null,_rowState:0,_rowID:0,_rowTag:0,_rowLength:0,_buffer:[]};a._fromJSON=la(a);return a}
function ma(a,b,c){var e=a._chunks,l=e.get(b);c=JSON.parse(c,a._fromJSON);var k=u(a._bundlerConfig,c);if(c=y(k)){if(l){var n=l;n.status="blocked"}else n=new L("blocked",null,null,a),e.set(b,n);c.then(function(){return S(n,k)},function(g){return R(n,g)})}else l?S(l,k):e.set(b,new L("resolved_module",k,null,a))}
function la(a){return function(b,c){return"string"===typeof c?ja(a,this,b,c):"object"===typeof c&&null!==c?(b=c[0]===C?{$$typeof:C,type:c[1],key:c[2],ref:null,props:c[3],_owner:null}:c,b):c}}
function Z(a,b){function c(k){var n=k.value;if(k.done)V(a,Error("Connection closed."));else{var g=0,m=a._rowState,d=a._rowID,h=a._rowTag,f=a._rowLength;k=a._buffer;for(var D=n.length;g<D;){var p=-1;switch(m){case 0:p=n[g++];58===p?m=1:d=d<<4|(96<p?p-87:p-48);continue;case 1:m=n[g];84===m?(h=m,m=2,g++):64<m&&91>m?(h=m,m=3,g++):(h=0,m=3);continue;case 2:p=n[g++];44===p?m=4:f=f<<4|(96<p?p-87:p-48);continue;case 3:p=n.indexOf(10,g);break;case 4:p=g+f,p>n.length&&(p=-1)}var q=n.byteOffset+g;if(-1<p){g=
new Uint8Array(n.buffer,q,p-g);f=a;q=h;var P=f._stringDecoder;h="";for(var G=0;G<k.length;G++)h+=P.decode(k[G],t);h+=P.decode(g);switch(q){case 73:ma(f,d,h);break;case 72:d=h[0];h=h.slice(1);f=JSON.parse(h,f._fromJSON);if(h=B.current)switch(d){case "D":h.prefetchDNS(f);break;case "C":"string"===typeof f?h.preconnect(f):h.preconnect(f[0],f[1]);break;case "L":d=f[0];g=f[1];3===f.length?h.preload(d,g,f[2]):h.preload(d,g);break;case "m":"string"===typeof f?h.preloadModule(f):h.preloadModule(f[0],f[1]);
break;case "S":"string"===typeof f?h.preinitStyle(f):h.preinitStyle(f[0],0===f[1]?void 0:f[1],3===f.length?f[2]:void 0);break;case "X":"string"===typeof f?h.preinitScript(f):h.preinitScript(f[0],f[1]);break;case "M":"string"===typeof f?h.preinitModuleScript(f):h.preinitModuleScript(f[0],f[1])}break;case 69:h=JSON.parse(h);g=h.digest;h=Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.");
h.stack="Error: "+h.message;h.digest=g;g=f._chunks;(q=g.get(d))?R(q,h):g.set(d,new L("rejected",null,h,f));break;case 84:f._chunks.set(d,new L("fulfilled",h,null,f));break;case 68:case 87:throw Error("Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.");default:g=f._chunks,(q=g.get(d))?(f=q,d=h,"pending"===f.status&&(h=f.value,g=f.reason,f.status="resolved_model",
f.value=d,null!==h&&(M(f),Q(f,h,g)))):g.set(d,new L("resolved_model",h,null,f))}g=p;3===m&&g++;f=d=h=m=0;k.length=0}else{n=new Uint8Array(n.buffer,q,n.byteLength-g);k.push(n);f-=n.byteLength;break}}a._rowState=m;a._rowID=d;a._rowTag=h;a._rowLength=f;return l.read().then(c).catch(e)}}function e(k){V(a,k)}var l=b.getReader();l.read().then(c).catch(e)}
exports.createFromFetch=function(a,b){var c=Y(null,null,b&&b.callServer?b.callServer:void 0,void 0,void 0);a.then(function(e){Z(c,e.body)},function(e){V(c,e)});return W(c,0)};exports.createFromReadableStream=function(a,b){b=Y(null,null,b&&b.callServer?b.callServer:void 0,void 0,void 0);Z(b,a);return W(b,0)};exports.createServerReference=function(a,b){function c(){var e=Array.prototype.slice.call(arguments);return b(a,e)}da(c,{id:a,bound:null});return c};
exports.encodeReply=function(a){return new Promise(function(b,c){ca(a,"",b,c)})};

//# sourceMappingURL=react-server-dom-webpack-client.browser.production.min.js.map


/***/ }),

/***/ 6703:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(7950);
} else {}


/***/ }),

/***/ 6671:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(6703);


/***/ }),

/***/ 622:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/*
 React
 react-jsx-runtime.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var f=__webpack_require__(2265),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
function p(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&"key"!==b&&"ref"!==b&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=p;exports.jsxs=p;

//# sourceMappingURL=react-jsx-runtime.production.min.js.map


/***/ }),

/***/ 7869:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/*
 React
 react.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J={current:null},K={current:null},L={transition:null},M={ReactCurrentDispatcher:J,ReactCurrentCache:K,ReactCurrentBatchConfig:L,ReactCurrentOwner:{current:null}},N=Object.prototype.hasOwnProperty,O=M.ReactCurrentOwner;
function P(a,b,c){var e,d={},f=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(f=""+b.key),b)N.call(b,e)&&"key"!==e&&"ref"!==e&&"__self"!==e&&"__source"!==e&&(d[e]=b[e]);var k=arguments.length-2;if(1===k)d.children=c;else if(1<k){for(var g=Array(k),m=0;m<k;m++)g[m]=arguments[m+2];d.children=g}if(a&&a.defaultProps)for(e in k=a.defaultProps,k)void 0===d[e]&&(d[e]=k[e]);return{$$typeof:l,type:a,key:f,ref:h,props:d,_owner:O.current}}
function Q(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function R(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(c){return b[c]})}var S=/\/+/g;function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}function U(){}
function V(a){switch(a.status){case "fulfilled":return a.value;case "rejected":throw a.reason;default:switch("string"===typeof a.status?a.then(U,U):(a.status="pending",a.then(function(b){"pending"===a.status&&(a.status="fulfilled",a.value=b)},function(b){"pending"===a.status&&(a.status="rejected",a.reason=b)})),a.status){case "fulfilled":return a.value;case "rejected":throw a.reason;}}throw a;}
function W(a,b,c,e,d){var f=typeof a;if("undefined"===f||"boolean"===f)a=null;var h=!1;if(null===a)h=!0;else switch(f){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;break;case y:return h=a._init,W(h(a._payload),b,c,e,d)}}if(h)return d=d(a),h=""===e?"."+T(a,0):e,I(d)?(c="",null!=h&&(c=h.replace(S,"$&/")+"/"),W(d,b,c,"",function(m){return m})):null!=d&&(R(d)&&(d=Q(d,c+(!d.key||a&&a.key===d.key?"":(""+d.key).replace(S,"$&/")+"/")+h)),b.push(d)),1;h=0;var k=
""===e?".":e+":";if(I(a))for(var g=0;g<a.length;g++)e=a[g],f=k+T(e,g),h+=W(e,b,c,f,d);else if(g=A(a),"function"===typeof g)for(a=g.call(a),g=0;!(e=a.next()).done;)e=e.value,f=k+T(e,g++),h+=W(e,b,c,f,d);else if("object"===f){if("function"===typeof a.then)return W(V(a),b,c,e,d);b=String(a);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");
}return h}function X(a,b,c){if(null==a)return a;var e=[],d=0;W(a,e,"","",function(f){return b.call(c,f,d++)});return e}function aa(a){if(-1===a._status){var b=a._result;b=b();b.then(function(c){if(0===a._status||-1===a._status)a._status=1,a._result=c},function(c){if(0===a._status||-1===a._status)a._status=2,a._result=c});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}function ba(){return new WeakMap}
function Y(){return{s:0,v:void 0,o:null,p:null}}function ca(){}var Z="function"===typeof reportError?reportError:function(a){console.error(a)};exports.Children={map:X,forEach:function(a,b,c){X(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;X(a,function(){b++});return b},toArray:function(a){return X(a,function(b){return b})||[]},only:function(a){if(!R(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;
exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M;exports.act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.cache=function(a){return function(){var b=K.current;if(!b)return a.apply(null,arguments);var c=b.getCacheForType(ba);b=c.get(a);void 0===b&&(b=Y(),c.set(a,b));c=0;for(var e=arguments.length;c<e;c++){var d=arguments[c];if("function"===typeof d||"object"===typeof d&&null!==d){var f=b.o;null===f&&(b.o=f=new WeakMap);b=f.get(d);void 0===b&&(b=Y(),f.set(d,b))}else f=b.p,null===f&&(b.p=f=new Map),b=f.get(d),void 0===b&&(b=Y(),f.set(d,b))}if(1===b.s)return b.v;if(2===b.s)throw b.v;try{var h=a.apply(null,
arguments);c=b;c.s=1;return c.v=h}catch(k){throw h=b,h.s=2,h.v=k,k;}}};
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("The argument must be a React element, but you passed "+a+".");var e=C({},a.props),d=a.key,f=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,h=O.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var k=a.type.defaultProps;for(g in b)N.call(b,g)&&"key"!==g&&"ref"!==g&&"__self"!==g&&"__source"!==g&&(e[g]=void 0===b[g]&&void 0!==k?k[g]:b[g])}var g=arguments.length-2;if(1===g)e.children=c;else if(1<g){k=Array(g);
for(var m=0;m<g;m++)k[m]=arguments[m+2];e.children=k}return{$$typeof:l,type:a.type,key:d,ref:f,props:e,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=P;exports.createFactory=function(a){var b=P.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:v,render:a}};
exports.isValidElement=R;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:aa}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=L.transition,c=new Set;L.transition={_callbacks:c};var e=L.transition;try{var d=a();"object"===typeof d&&null!==d&&"function"===typeof d.then&&(c.forEach(function(f){return f(e,d)}),d.then(ca,Z))}catch(f){Z(f)}finally{L.transition=b}};
exports.unstable_useCacheRefresh=function(){return J.current.useCacheRefresh()};exports.use=function(a){return J.current.use(a)};exports.useCallback=function(a,b){return J.current.useCallback(a,b)};exports.useContext=function(a){return J.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a,b){return J.current.useDeferredValue(a,b)};exports.useEffect=function(a,b){return J.current.useEffect(a,b)};exports.useId=function(){return J.current.useId()};
exports.useImperativeHandle=function(a,b,c){return J.current.useImperativeHandle(a,b,c)};exports.useInsertionEffect=function(a,b){return J.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return J.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return J.current.useMemo(a,b)};exports.useOptimistic=function(a,b){return J.current.useOptimistic(a,b)};exports.useReducer=function(a,b,c){return J.current.useReducer(a,b,c)};exports.useRef=function(a){return J.current.useRef(a)};
exports.useState=function(a){return J.current.useState(a)};exports.useSyncExternalStore=function(a,b,c){return J.current.useSyncExternalStore(a,b,c)};exports.useTransition=function(){return J.current.useTransition()};exports.version="18.3.0-canary-14898b6a9-20240318";

//# sourceMappingURL=react.production.min.js.map


/***/ }),

/***/ 2265:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(7869);
} else {}


/***/ }),

/***/ 7437:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(622);
} else {}


/***/ }),

/***/ 3449:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _class_private_field_loose_base; },
/* harmony export */   _class_private_field_loose_base: function() { return /* binding */ _class_private_field_loose_base; }
/* harmony export */ });
function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }

    return receiver;
}



/***/ }),

/***/ 7614:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _class_private_field_loose_key; },
/* harmony export */   _class_private_field_loose_key: function() { return /* binding */ _class_private_field_loose_key; }
/* harmony export */ });
var id = 0;

function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}



/***/ }),

/***/ 9920:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _interop_require_default; },
/* harmony export */   _interop_require_default: function() { return /* binding */ _interop_require_default; }
/* harmony export */ });
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}



/***/ }),

/***/ 1452:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _interop_require_wildcard; },
/* harmony export */   _interop_require_wildcard: function() { return /* binding */ _interop_require_wildcard; }
/* harmony export */ });
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = { __proto__: null };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(1028), __webpack_exec__(6876));
/******/ __webpack_exports__ = __webpack_exports__["default"];
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=main-app.53a816c2ff644de669e1.js.map