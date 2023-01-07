"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/testimonials.js":
/*!******************************************!*\
  !*** ./pages/components/testimonials.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonials; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/left.png */ \"./images/left.png\");\n/* harmony import */ var _images_right_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/right.png */ \"./images/right.png\");\n/* harmony import */ var _testimonialSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testimonialSlider */ \"./pages/components/testimonialSlider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n//\n\n\n//\n\n//\nfunction Testimonials() {\n    _s();\n    const [testimonialData, setTestimonialData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [clientIndex, setClientIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    async function getTestimonialData() {\n        const response = await fetch(\"\".concat(window.location.origin, \"/api/feedback\"));\n        setTestimonialData(await response.json());\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getTestimonialData();\n    }, []);\n    if (!testimonialData) {\n        return console.log(\"No data\");\n    }\n    function moveLeft() {\n        if (clientIndex === 0) {\n            setClientIndex(testimonialData.length - 1);\n        } else {\n            setClientIndex(clientIndex - 1);\n        }\n    }\n    function moveRight() {\n        if (clientIndex === testimonialData.length - 1) {\n            setClientIndex(0);\n        } else {\n            setClientIndex(clientIndex + 1);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"testimonials\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"heading2\",\n                    children: \"Testimonials\"\n                }, void 0, false, {\n                    fileName: \"/Users/bradleymubenga/Development/kickstart/pages/components/testimonials.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"testimonialContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _images_left_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                width: \"50\",\n                                alt: \"left chevron\",\n                                className: \"chevron\",\n                                onClick: moveLeft\n                            }, void 0, false, {\n                                fileName: \"/Users/bradleymubenga/Development/kickstart/pages/components/testimonials.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bradleymubenga/Development/kickstart/pages/components/testimonials.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_testimonialSlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                data: testimonialData[clientIndex]\n                            }, void 0, false, {\n                                fileName: \"/Users/bradleymubenga/Development/kickstart/pages/components/testimonials.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bradleymubenga/Development/kickstart/pages/components/testimonials.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _images_right_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                width: \"50\",\n                                alt: \"left chevron\",\n                                className: \"chevron\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bradleymubenga/Development/kickstart/pages/components/testimonials.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bradleymubenga/Development/kickstart/pages/components/testimonials.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bradleymubenga/Development/kickstart/pages/components/testimonials.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bradleymubenga/Development/kickstart/pages/components/testimonials.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bradleymubenga/Development/kickstart/pages/components/testimonials.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Testimonials, \"fxi8TBU4GhScb4yiUYUxXIYJKas=\");\n_c = Testimonials;\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Rlc3RpbW9uaWFscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2tCO0FBQ2I7QUFDL0IsRUFBRTtBQUMrQztBQUNFO0FBQ25ELEVBQUU7QUFDa0Q7QUFDcEQsRUFBRTtBQUNhLFNBQVNPLGVBQWU7O0lBQ3JDLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUN6RCxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0MsZUFBZVcscUJBQXFCO1FBQ2xDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxHQUEwQixPQUF2QkMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLEVBQUM7UUFDdkRSLG1CQUFtQixNQUFNSSxTQUFTSyxJQUFJO0lBQ3hDO0lBRUFoQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVO0lBQ0YsR0FBRSxFQUFFO0lBRUosSUFBRyxDQUFDSixpQkFBaUI7UUFDbkIsT0FBT1csUUFBUUMsR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxTQUFTQyxXQUNUO1FBQ0UsSUFBSVgsZ0JBQWdCLEdBQ3BCO1lBQ0VDLGVBQWVILGdCQUFnQmMsTUFBTSxHQUFHO1FBQzFDLE9BRUE7WUFDRVgsZUFBZUQsY0FBYztRQUMvQixDQUFDO0lBQ0g7SUFFQSxTQUFTYSxZQUNUO1FBQ0UsSUFBSWIsZ0JBQWdCRixnQkFBZ0JjLE1BQU0sR0FBRyxHQUM3QztZQUNFWCxlQUFlO1FBQ2pCLE9BRUE7WUFDRUEsZUFBZUQsY0FBYztRQUMvQixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ2M7UUFBUUMsSUFBRztrQkFDViw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFXOzs7Ozs7OEJBQ3pCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEO3NDQUNHLDRFQUFDdkIsbURBQUtBO2dDQUFDMEIsS0FBS3pCLHdEQUFZQTtnQ0FBRTBCLE9BQU07Z0NBQUtDLEtBQUk7Z0NBQWVKLFdBQVU7Z0NBQVVLLFNBQVNYOzs7Ozs7Ozs7OztzQ0FFekYsOERBQUNLO3NDQUNDLDRFQUFDcEIsMERBQWlCQTtnQ0FBQzJCLE1BQU16QixlQUFlLENBQUNFLFlBQVk7Ozs7Ozs7Ozs7O3NDQUV2RCw4REFBQ2dCO3NDQUNHLDRFQUFDdkIsbURBQUtBO2dDQUFDMEIsS0FBS3hCLHlEQUFhQTtnQ0FBRXlCLE9BQU07Z0NBQUtDLEtBQUk7Z0NBQWNKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEYsQ0FBQztHQTNEdUJwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL3Rlc3RpbW9uaWFscy5qcz9hNjgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuLy9cbmltcG9ydCBsZWZ0X2NoZXZyb24gZnJvbSBcIi4uLy4uL2ltYWdlcy9sZWZ0LnBuZ1wiO1xuaW1wb3J0IHJpZ2h0X2NoZXZyb24gZnJvbSBcIi4uLy4uL2ltYWdlcy9yaWdodC5wbmdcIjtcbi8vXG5pbXBvcnQgVGVzdGltb25pYWxTbGlkZXIgZnJvbSAnLi90ZXN0aW1vbmlhbFNsaWRlcic7XG4vL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxzKCkge1xuICBjb25zdCBbdGVzdGltb25pYWxEYXRhLCBzZXRUZXN0aW1vbmlhbERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2xpZW50SW5kZXgsIHNldENsaWVudEluZGV4XSA9IHVzZVN0YXRlKDApXG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VGVzdGltb25pYWxEYXRhKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL2ZlZWRiYWNrYCk7XG4gICAgc2V0VGVzdGltb25pYWxEYXRhKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFRlc3RpbW9uaWFsRGF0YSgpO1xuICB9LFtdKTtcblxuICBpZighdGVzdGltb25pYWxEYXRhKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiTm8gZGF0YVwiKVxuICB9XG5cbiAgZnVuY3Rpb24gbW92ZUxlZnQoKVxuICB7XG4gICAgaWYgKGNsaWVudEluZGV4ID09PSAwKVxuICAgIHtcbiAgICAgIHNldENsaWVudEluZGV4KHRlc3RpbW9uaWFsRGF0YS5sZW5ndGggLSAxKVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgc2V0Q2xpZW50SW5kZXgoY2xpZW50SW5kZXggLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKVxuICB7XG4gICAgaWYgKGNsaWVudEluZGV4ID09PSB0ZXN0aW1vbmlhbERhdGEubGVuZ3RoIC0gMSlcbiAgICB7XG4gICAgICBzZXRDbGllbnRJbmRleCgwKVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgc2V0Q2xpZW50SW5kZXgoY2xpZW50SW5kZXggKyAxKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9J3Rlc3RpbW9uaWFscyc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0naGVhZGluZzInPlRlc3RpbW9uaWFsczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXN0aW1vbmlhbENvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17bGVmdF9jaGV2cm9ufSB3aWR0aD1cIjUwXCIgYWx0PSdsZWZ0IGNoZXZyb24nIGNsYXNzTmFtZT0nY2hldnJvbicgb25DbGljaz17bW92ZUxlZnR9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRlc3RpbW9uaWFsU2xpZGVyIGRhdGE9e3Rlc3RpbW9uaWFsRGF0YVtjbGllbnRJbmRleF19Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtyaWdodF9jaGV2cm9ufSB3aWR0aD1cIjUwXCIgYWx0PSdsZWZ0IGNoZXZyb24nY2xhc3NOYW1lPSdjaGV2cm9uJy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsImxlZnRfY2hldnJvbiIsInJpZ2h0X2NoZXZyb24iLCJUZXN0aW1vbmlhbFNsaWRlciIsIlRlc3RpbW9uaWFscyIsInRlc3RpbW9uaWFsRGF0YSIsInNldFRlc3RpbW9uaWFsRGF0YSIsImNsaWVudEluZGV4Iiwic2V0Q2xpZW50SW5kZXgiLCJnZXRUZXN0aW1vbmlhbERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1vdmVMZWZ0IiwibGVuZ3RoIiwibW92ZVJpZ2h0Iiwic2VjdGlvbiIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcmMiLCJ3aWR0aCIsImFsdCIsIm9uQ2xpY2siLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/testimonials.js\n"));

/***/ })

});