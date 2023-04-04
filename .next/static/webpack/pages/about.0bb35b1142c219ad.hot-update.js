/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// Import components\n\n\n\nvar _this = undefined;\n// Styling for layout\nvar layoutStyle = {\n    position: \"relative\",\n    padding: \"1rem 1rem 0rem 1rem\",\n    minHeight: \"80vh\"\n};\n/* Notice in the example below that we pass children and title as props to the Layout components.\nIf you remove {children}, the Layout cannot render the content we put inside the Layout element. \nHave a look at ./pages/index.js to see where we pass props through to this Layout Component. */ var Layout = function(props) {\n    /*#__PURE__*/ return((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"jsx-b309e4a324617e75\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\dedda\\\\Downloads\\\\developerPortfolio-main\\\\components\\\\Layout.js\",\n            lineNumber: 17,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\dedda\\\\Downloads\\\\developerPortfolio-main\\\\components\\\\Layout.js\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                },\n                __self: _this,\n                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\",\n                    integrity: \"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\",\n                    crossOrigin: \"anonymous\",\n                    className: \"jsx-b309e4a324617e75\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\dedda\\\\Downloads\\\\developerPortfolio-main\\\\components\\\\Layout.js\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_Header__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\dedda\\\\Downloads\\\\developerPortfolio-main\\\\components\\\\Layout.js\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: layoutStyle,\n                className: \"jsx-b309e4a324617e75\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\dedda\\\\Downloads\\\\developerPortfolio-main\\\\components\\\\Layout.js\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: props.children\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\dedda\\\\Downloads\\\\developerPortfolio-main\\\\components\\\\Layout.js\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                },\n                __self: _this\n            }),\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b309e4a324617e75\",\n                __self: _this,\n                children: \"body {font-size:16px}\\nli {line-height:1.5rem}\\np {line-height:1.5rem}\\na {-webkit-text-decoration:none;\\ntext-decoration:none}\\na:hover {text-decoration:underline}\\n.breadcrumbs {margin-left:4rem;\\nfont-size:0.8rem}\"\n            })\n        ]\n    }));\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsRUFBb0I7QUFDUTtBQUNDO0FBQ0E7O0FBRTdCLEVBQXFCO0FBQ3JCLEdBQUssQ0FBQ0csV0FBVyxHQUFHLENBQUM7SUFDbkJDLFFBQVEsRUFBRSxDQUFVO0lBQ3BCQyxPQUFPLEVBQUUsQ0FBcUI7SUFDOUJDLFNBQVMsRUFBRSxDQUFNO0FBQ25CLENBQUM7QUFFRCxFQUUrRjs7NkZBQUEsR0FDL0YsR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFBUSxDQUFQQyxLQUFLO2tCQUNuQixNQUNGLHlEQURHQyxDQUFHOzs7Ozs7Ozs7aUZBQ0RULGtEQUFJOzs7Ozs7OzZHQUVGVSxDQUFJO29CQUNIQyxHQUFHLEVBQUMsQ0FBWTtvQkFDaEJDLElBQUksRUFBQyxDQUF1RTtvQkFDNUVDLFNBQVMsRUFBQyxDQUF5RTtvQkFDbkZDLFdBQVcsRUFBQyxDQUFXOzs7Ozs7Ozs7O2lGQUcxQmIsZ0RBQU07Ozs7Ozs7O2lGQUdOUSxDQUFHO2dCQUFDTSxLQUFLLEVBQUVaLFdBQVc7Ozs7Ozs7OzBCQUFHSyxLQUFLLENBQUNRLFFBQVE7O2lGQUN2Q2QsK0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7S0FmTEssTUFBTTtBQTBDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG4vLyBTdHlsaW5nIGZvciBsYXlvdXRcbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICBwYWRkaW5nOiBcIjFyZW0gMXJlbSAwcmVtIDFyZW1cIixcbiAgbWluSGVpZ2h0OiBcIjgwdmhcIixcbn07XG5cbi8qIE5vdGljZSBpbiB0aGUgZXhhbXBsZSBiZWxvdyB0aGF0IHdlIHBhc3MgY2hpbGRyZW4gYW5kIHRpdGxlIGFzIHByb3BzIHRvIHRoZSBMYXlvdXQgY29tcG9uZW50cy5cbklmIHlvdSByZW1vdmUge2NoaWxkcmVufSwgdGhlIExheW91dCBjYW5ub3QgcmVuZGVyIHRoZSBjb250ZW50IHdlIHB1dCBpbnNpZGUgdGhlIExheW91dCBlbGVtZW50LiBcbkhhdmUgYSBsb29rIGF0IC4vcGFnZXMvaW5kZXguanMgdG8gc2VlIHdoZXJlIHdlIHBhc3MgcHJvcHMgdGhyb3VnaCB0byB0aGlzIExheW91dCBDb21wb25lbnQuICovXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIHsvKiBJbXBvcnQgYm9vdHN0cmFwIHN0eWxlc2hlZXQgKi99XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcbiAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgLz5cbiAgICA8L0hlYWQ+XG4gICAgPEhlYWRlciAvPlxuXG4gICAgey8qIENvbnRlbnQgZm9yIGV2ZXJ5IHBhZ2UgKi99XG4gICAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICA8Rm9vdGVyIC8+XG5cbiAgICB7LyogR2xvYmFsIHN0eWxlcyBmb3Igd2hvbGUgYXBwICovfVxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBib2R5IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgICAgLmJyZWFkY3J1bWJzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIkZvb3RlciIsImxheW91dFN0eWxlIiwicG9zaXRpb24iLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiTGF5b3V0IiwicHJvcHMiLCJkaXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsImludGVncml0eSIsImNyb3NzT3JpZ2luIiwic3R5bGUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});