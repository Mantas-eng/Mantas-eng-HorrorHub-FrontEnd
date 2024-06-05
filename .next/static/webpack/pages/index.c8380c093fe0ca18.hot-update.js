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

/***/ "./src/components/Movies/Movies.tsx":
/*!******************************************!*\
  !*** ./src/components/Movies/Movies.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Container,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchBar/SearchBar */ \"./src/components/SearchBar/SearchBar.tsx\");\n/* harmony import */ var _styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.module.scss */ \"./src/components/styles/styles.module.scss\");\n/* harmony import */ var _styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Urls */ \"./src/components/Urls.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Movies = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), movies = _useState[0], setMovies = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), defaultMovies = _useState1[0], setDefaultMovies = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), clickedCardIndex = _useState2[0], setClickedCardIndex = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_Urls__WEBPACK_IMPORTED_MODULE_4__.baseUrl, \"/movies\")).then(function(response) {\n            setMovies(response.data.movies);\n            setDefaultMovies(response.data.movies);\n        })[\"catch\"](function(error) {\n            console.error(\"Error fetching movies:\", error);\n        });\n    }, []);\n    var handleSearch = function(searchTerm) {\n        var filteredMovies = defaultMovies.filter(function(movie) {\n            return movie.film_name.toLowerCase().includes(searchTerm.toLowerCase());\n        });\n        setMovies(filteredMovies);\n    };\n    var handleSort = function() {\n        var sortedMovies = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_7__._)(movies).sort(function(a, b) {\n            return a.film_name.localeCompare(b.film_name);\n        });\n        setMovies(sortedMovies);\n    };\n    var handleClearSearch = function() {\n        setMovies(defaultMovies);\n    };\n    var handleCardClick = function(index) {\n        setClickedCardIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleSearch: handleSearch,\n                handleSort: handleSort,\n                handleClearSearch: handleClearSearch\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n                className: \"justify-content-center\",\n                children: movies.map(function(movie, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                        xs: 12,\n                        sm: 6,\n                        md: 4,\n                        lg: 2,\n                        className: \"mb-4 animated fadeIn delay-\".concat(index + 1, \"s\"),\n                        onClick: function() {\n                            return handleCardClick(index);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card \".concat((_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card), \" \").concat((_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().animated), \" \").concat((_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fadeIn), \" \").concat((_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().delay), \"-\").concat(index + 1, \"s\"),\n                            style: {\n                                position: \"relative\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: movie.film_image,\n                                    className: \"card-img-top\",\n                                    alt: movie.film_name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 9\n                                }, _this),\n                                clickedCardIndex === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"position-absolute top-0 start-0 w-100 h-100 bg-overlay\",\n                                    style: {\n                                        zIndex: 1\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body bg-dark\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            className: \"card-title text-light\",\n                                            children: movie.film_name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"card-text text-light\",\n                                            children: movie.release_date\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: movie.film_trailer,\n                                            className: \"btn btn-secondary\",\n                                            children: \"Watch Trailer\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: movie.film_trailer,\n                                            className: \"\".concat((_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardbtn), \" btn btn-secondary m-2\"),\n                                            children: \"Watch Movie\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 11\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 9\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 7\n                        }, _this)\n                    }, movie._id, false, {\n                        fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n                lineNumber: 59,\n                columnNumber: 1\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Movies\\\\Movies.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, _this);\n};\n_s(Movies, \"ZflIxkV4trptbco1DkewbqzoW5s=\");\n_c = Movies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVU7c0RBQW9COzs7Ozs7c0RBQzNELDhEQUFDTjs0Q0FBRTRCLE1BQU1uQyxNQUFNb0MsWUFBWTs0Q0FBRXZCLFdBQVcsR0FBa0IsT0FBZmpDLDJFQUFjLEVBQUM7c0RBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBVi9Fb0IsTUFBTXNDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0J2QjtHQS9ETXhEO0tBQUFBO0FBaUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdmllcy9Nb3ZpZXMudHN4P2VjOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhci9TZWFyY2hCYXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IGJhc2VVcmwgfSBmcm9tICcuLi9VcmxzJzsgXG5cbmludGVyZmFjZSBNb3ZpZSB7XG4gIF9pZDogc3RyaW5nO1xuICBmaWxtX25hbWU6IHN0cmluZztcbiAgZmlsbV9pbWFnZTogc3RyaW5nO1xuICByZWxlYXNlX2RhdGU6IHN0cmluZztcbiAgZmlsbV90cmFpbGVyOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1vdmllczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZTxNb3ZpZVtdPihbXSk7XG4gIGNvbnN0IFtkZWZhdWx0TW92aWVzLCBzZXREZWZhdWx0TW92aWVzXSA9IHVzZVN0YXRlPE1vdmllW10+KFtdKTtcbiAgY29uc3QgW2NsaWNrZWRDYXJkSW5kZXgsIHNldENsaWNrZWRDYXJkSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQ8eyBtb3ZpZXM6IE1vdmllW10gfT4oYCR7YmFzZVVybH0vbW92aWVzYCkgXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldE1vdmllcyhyZXNwb25zZS5kYXRhLm1vdmllcyk7XG4gICAgICAgIHNldERlZmF1bHRNb3ZpZXMocmVzcG9uc2UuZGF0YS5tb3ZpZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG1vdmllczonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZE1vdmllcyA9IGRlZmF1bHRNb3ZpZXMuZmlsdGVyKG1vdmllID0+XG4gICAgICBtb3ZpZS5maWxtX25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBzZXRNb3ZpZXMoZmlsdGVyZWRNb3ZpZXMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNvcnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc29ydGVkTW92aWVzID0gWy4uLm1vdmllc10uc29ydCgoYSwgYikgPT4gYS5maWxtX25hbWUubG9jYWxlQ29tcGFyZShiLmZpbG1fbmFtZSkpO1xuICAgIHNldE1vdmllcyhzb3J0ZWRNb3ZpZXMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsZWFyU2VhcmNoID0gKCkgPT4ge1xuICAgIHNldE1vdmllcyhkZWZhdWx0TW92aWVzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldENsaWNrZWRDYXJkSW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTZWFyY2hCYXJcbiAgICAgICAgaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgIGhhbmRsZVNvcnQ9e2hhbmRsZVNvcnR9XG4gICAgICAgIGhhbmRsZUNsZWFyU2VhcmNoPXtoYW5kbGVDbGVhclNlYXJjaH1cbiAgICAgIC8+XG48Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAge21vdmllcy5tYXAoKG1vdmllLCBpbmRleCkgPT4gKFxuICAgIDxDb2wga2V5PXttb3ZpZS5faWR9IHhzPXsxMn0gc209ezZ9IG1kPXs0fSBsZz17Mn0gY2xhc3NOYW1lPXtgbWItNCBhbmltYXRlZCBmYWRlSW4gZGVsYXktJHtpbmRleCArIDF9c2B9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhcmRDbGljayhpbmRleCl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkICR7c3R5bGVzLmNhcmR9ICR7c3R5bGVzLmFuaW1hdGVkfSAke3N0eWxlcy5mYWRlSW59ICR7c3R5bGVzLmRlbGF5fS0ke2luZGV4ICsgMX1zYH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgIDxpbWcgc3JjPXttb3ZpZS5maWxtX2ltYWdlfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9e21vdmllLmZpbG1fbmFtZX0gLz5cbiAgICAgICAge2NsaWNrZWRDYXJkSW5kZXggPT09IGluZGV4ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIHN0YXJ0LTAgdy0xMDAgaC0xMDAgYmctb3ZlcmxheVwiIHN0eWxlPXt7IHpJbmRleDogMSB9fT48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmctZGFya1wiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtbGlnaHRcIj57bW92aWUuZmlsbV9uYW1lfTwvaDU+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IHRleHQtbGlnaHRcIj57bW92aWUucmVsZWFzZV9kYXRlfTwvcD5cbiAgICAgICAgICA8YSBocmVmPXttb3ZpZS5maWxtX3RyYWlsZXJ9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+V2F0Y2ggVHJhaWxlcjwvYT5cbiAgICAgICAgICA8YSBocmVmPXttb3ZpZS5maWxtX3RyYWlsZXJ9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmRidG59IGJ0biBidG4tc2Vjb25kYXJ5IG0tMmB9PldhdGNoIE1vdmllPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29sPlxuICApKX1cbjwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJTZWFyY2hCYXIiLCJzdHlsZXMiLCJiYXNlVXJsIiwiTW92aWVzIiwibW92aWVzIiwic2V0TW92aWVzIiwiZGVmYXVsdE1vdmllcyIsInNldERlZmF1bHRNb3ZpZXMiLCJjbGlja2VkQ2FyZEluZGV4Iiwic2V0Q2xpY2tlZENhcmRJbmRleCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVNlYXJjaCIsInNlYXJjaFRlcm0iLCJmaWx0ZXJlZE1vdmllcyIsImZpbHRlciIsIm1vdmllIiwiZmlsbV9uYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImhhbmRsZVNvcnQiLCJzb3J0ZWRNb3ZpZXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiaGFuZGxlQ2xlYXJTZWFyY2giLCJoYW5kbGVDYXJkQ2xpY2siLCJpbmRleCIsImNsYXNzTmFtZSIsIm1hcCIsInhzIiwic20iLCJtZCIsImxnIiwib25DbGljayIsImRpdiIsImNhcmQiLCJhbmltYXRlZCIsImZhZGVJbiIsImRlbGF5Iiwic3R5bGUiLCJwb3NpdGlvbiIsImltZyIsInNyYyIsImZpbG1faW1hZ2UiLCJhbHQiLCJ6SW5kZXgiLCJoNSIsInAiLCJyZWxlYXNlX2RhdGUiLCJocmVmIiwiZmlsbV90cmFpbGVyIiwiY2FyZGJ0biIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Movies/Movies.tsx\n"));

/***/ })

});