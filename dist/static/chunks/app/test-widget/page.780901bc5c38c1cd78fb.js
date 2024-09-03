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
return (self["webpackChunkBifrostChatWidget"] = self["webpackChunkBifrostChatWidget"] || []).push([[637],{

/***/ 3732:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8587));


/***/ }),

/***/ 8587:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TestWidget; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function TestWidget() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const script = document.createElement("script");
        script.src = "/_next/static/chunks/widget-bundle.js";
        script.async = true;
        script.onload = ()=>{
            console.log("Widget script loaded");
            if (typeof window.initializeBifrostChatWidget === "function") {
                window.initializeBifrostChatWidget();
            } else {
                console.error("initializeBifrostChatWidget function not found on window object");
            }
        };
        script.onerror = ()=>console.error("Failed to load widget script");
        document.body.appendChild(script);
        return ()=>{
            document.body.removeChild(script);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Widget Test Page"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                children: "The chat widget should appear in the bottom right corner."
            })
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [744], function() { return __webpack_exec__(3732); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ __webpack_exports__ = __webpack_exports__["default"];
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=page.780901bc5c38c1cd78fb.js.map