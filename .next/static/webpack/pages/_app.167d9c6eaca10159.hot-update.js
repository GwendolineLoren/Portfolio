"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n// pages/_app.js\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            window.gtag(\"config\", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {\n                page_path: url\n            });\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return function() {\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"jsx-3930cb24abbf85d1\" + \" \" + \"body\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\dedda\\\\Downloads\\\\developerPortfolio-main\\\\pages\\\\_app.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n            }, pageProps, {\n                className: \"jsx-3930cb24abbf85d1\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\"),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\dedda\\\\Downloads\\\\developerPortfolio-main\\\\pages\\\\_app.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: this\n            })),\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"3930cb24abbf85d1\",\n                __self: this,\n                children: \".body.jsx-3930cb24abbf85d1 {background-color:rgb(251, 251, 147),\\n        }\"\n            })\n        ]\n    }));\n}\n_s(MyApp, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFnQjtBQUVpQjtBQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRTlCRSxLQUFLLENBQUMsS0FBd0IsRUFBRSxDQUFDO1FBQXpCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTOztJQUNuQyxHQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFFeEJELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDTSxpQkFBaUIsR0FBRyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO1lBQ2xDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFRLFNBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyw0QkFBNEIsRUFBRSxDQUFDO2dCQUMvREMsU0FBUyxFQUFFTixHQUFHO1lBQ2hCLENBQUM7UUFDSCxDQUFDO1FBQ0RGLE1BQU0sQ0FBQ1MsTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBcUIsc0JBQUVULGlCQUFpQjtRQUN6RCxNQUFNLENBQUMsUUFDWCxHQURpQixDQUFDO1lBQ1pELE1BQU0sQ0FBQ1MsTUFBTSxDQUFDRSxHQUFHLENBQUMsQ0FBcUIsc0JBQUVWLGlCQUFpQjtRQUM1RCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNEO1FBQUFBLE1BQU0sQ0FBQ1MsTUFBTTtJQUFBLENBQUM7SUFFbEIsTUFBTSx1RUFDSEcsQ0FBRztrREFBVyxDQUFNOzs7Ozs7OztpRkFDbEJkLFNBQVM7ZUFBS0MsU0FBUzsyREFBVEEsU0FBUyxJQUFUQSxTQUFTLHNCQUFUQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUFTOUIsQ0FBQztHQTFCUUYsS0FBSzs7UUFDR0Qsa0RBQVM7OztLQURqQkMsS0FBSztBQTRCZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xuICAgICAgd2luZG93Lmd0YWcoXCJjb25maWdcIiwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUywge1xuICAgICAgICBwYWdlX3BhdGg6IHVybCxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwgc3R5bGUganN4PntgXG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTEsIDI1MSwgMTQ3KSxcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsIndpbmRvdyIsImd0YWciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUyIsInBhZ2VfcGF0aCIsImV2ZW50cyIsIm9uIiwib2ZmIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});