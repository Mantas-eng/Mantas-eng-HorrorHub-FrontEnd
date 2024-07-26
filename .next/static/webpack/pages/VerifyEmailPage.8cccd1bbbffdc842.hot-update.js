"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/VerifyEmailPage",{

/***/ "./src/pages/VerifyEmailPage.tsx":
/*!***************************************!*\
  !*** ./src/pages/VerifyEmailPage.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Alert_Container_Spinner_react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Alert,Container,Spinner!=!react-bootstrap */ \"__barrel_optimize__?names=Alert,Container,Spinner!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_utils_Urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utils/Urls */ \"./src/components/utils/Urls.js\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./src/components/Footer/Footer.tsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar VerifyEmailPage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState[0], setLoading = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), message = _useState1[0], setMessage = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), parametersLoaded = _useState2[0], setParametersLoaded = _useState2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _router_query = router.query, userId = _router_query.userId, uniqueString = _router_query.uniqueString;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (userId && uniqueString) {\n            setParametersLoaded(true); // Parameters are available\n        }\n    }, [\n        userId,\n        uniqueString\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var verifyEmail = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                var response, _response_data, token, user, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!parametersLoaded) return [\n                                3,\n                                5\n                            ];\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                3,\n                                4,\n                                5\n                            ]);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"\".concat(_components_utils_Urls__WEBPACK_IMPORTED_MODULE_3__.baseUrl, \"/verify/\").concat(userId, \"/\").concat(uniqueString))\n                            ];\n                        case 2:\n                            response = _state.sent();\n                            setMessage(\"Email has been successfully verified! Redirecting you to the home page...\");\n                            _response_data = response.data, token = _response_data.token, user = _response_data.user;\n                            js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"token\", token, {\n                                expires: 1\n                            });\n                            localStorage.setItem(\"user\", JSON.stringify(user));\n                            setTimeout(function() {\n                                router.push(\"\".concat(_components_utils_Urls__WEBPACK_IMPORTED_MODULE_3__.baseUrl, \"/verify/\").concat(userId, \"/$\"));\n                            }, 3000);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            setMessage(\"Email verification failed. Please try again.\");\n                            console.error(\"Verification error:\", error);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 4:\n                            setLoading(false);\n                            return [\n                                7\n                            ];\n                        case 5:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function verifyEmail() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (parametersLoaded) {\n            verifyEmail();\n        } else if (!loading) {\n            setMessage(\"Invalid or missing verification parameters.\");\n            setLoading(false);\n        }\n    }, [\n        parametersLoaded,\n        userId,\n        uniqueString,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Container_Spinner_react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Container, {\n        className: \"custom-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center mt-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Email Verification\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\pages\\\\VerifyEmailPage.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Container_Spinner_react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Spinner, {\n                    animation: \"border\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\pages\\\\VerifyEmailPage.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Container_Spinner_react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Alert, {\n                    variant: (message === null || message === void 0 ? void 0 : message.includes(\"successfully\")) ? \"success\" : \"danger\",\n                    className: \"mt-3\",\n                    children: message\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\pages\\\\VerifyEmailPage.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\pages\\\\VerifyEmailPage.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\pages\\\\VerifyEmailPage.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\pages\\\\VerifyEmailPage.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(VerifyEmailPage, \"0d3kxeprE56hLMUPgaxQiT+6T3U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = VerifyEmailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerifyEmailPage);\nvar _c;\n$RefreshReg$(_c, \"VerifyEmailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvVmVyaWZ5RW1haWxQYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUztBQUNsQztBQUNjO0FBQ1c7QUFDRjtBQUNqQjtBQUVoQyxJQUFNVyxrQkFBNEI7O0lBQ2hDLElBQThCVCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBaENVLFVBQXVCVixjQUFkVyxhQUFjWDtJQUM5QixJQUE4QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixXQUEvQ1ksVUFBdUJaLGVBQWRhLGFBQWNiO0lBQzlCLElBQWdEQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBbERjLG1CQUF5Q2QsZUFBdkJlLHNCQUF1QmY7SUFDaEQsSUFBTWdCLFNBQVNYLHNEQUFTQTtJQUN4QixJQUFpQ1csZ0JBQUFBLE9BQU9DLEtBQUssRUFBckNDLFNBQXlCRixjQUF6QkUsUUFBUUMsZUFBaUJILGNBQWpCRztJQUVoQnBCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSW1CLFVBQVVDLGNBQWM7WUFDMUJKLG9CQUFvQixPQUFRLDJCQUEyQjtRQUN6RDtJQUNGLEdBQUc7UUFBQ0c7UUFBUUM7S0FBYTtJQUV6QnBCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBTXFCO3VCQUFjO29CQUdSQyxVQUdrQkEsZ0JBQWhCQyxPQUFPQyxNQVFSQzs7OztpQ0FiUFYsa0JBQUFBOzs7Ozs7Ozs7Ozs7NEJBRWlCOztnQ0FBTVYsaURBQVMsQ0FBQyxHQUFxQmMsT0FBbEJaLDJEQUFPQSxFQUFDLFlBQW9CYSxPQUFWRCxRQUFPLEtBQWdCLE9BQWJDOzs7NEJBQTFERSxXQUFXOzRCQUNqQlIsV0FBVzs0QkFFYVEsaUJBQUFBLFNBQVNLLElBQUksRUFBN0JKLFFBQWdCRCxlQUFoQkMsT0FBT0MsT0FBU0YsZUFBVEU7NEJBQ2ZmLHFEQUFXLENBQUMsU0FBU2MsT0FBTztnQ0FBRU0sU0FBUzs0QkFBRTs0QkFDekNDLGFBQWFDLE9BQU8sQ0FBQyxRQUFRQyxLQUFLQyxTQUFTLENBQUNUOzRCQUU1Q1UsV0FBVztnQ0FDVGpCLE9BQU9rQixJQUFJLENBQUMsR0FBcUJoQixPQUFsQlosMkRBQU9BLEVBQUMsWUFBaUIsT0FBUFksUUFBTzs0QkFDMUMsR0FBRzs7Ozs7OzRCQUVJTTs0QkFDUFgsV0FBVzs0QkFDWHNCLFFBQVFYLEtBQUssQ0FBQyx1QkFBdUJBOzs7Ozs7NEJBRXJDYixXQUFXOzs7Ozs7Ozs7O1lBSWpCOzRCQXRCTVM7Ozs7UUF3Qk4sSUFBSU4sa0JBQWtCO1lBQ3BCTTtRQUNGLE9BQU8sSUFBSSxDQUFDVixTQUFTO1lBQ25CRyxXQUFXO1lBQ1hGLFdBQVc7UUFDYjtJQUNGLEdBQUc7UUFBQ0c7UUFBa0JJO1FBQVFDO1FBQWNIO0tBQU87SUFFbkQscUJBQ0UsOERBQUNmLHNHQUFTQTtRQUFDbUMsV0FBVTtrQkFDbkIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTs4QkFBRzs7Ozs7O2dCQUNINUIsd0JBQ0MsOERBQUNQLG9HQUFPQTtvQkFBQ29DLFdBQVU7Ozs7OzBDQUVuQiw4REFBQ3JDLGtHQUFLQTtvQkFBQ3NDLFNBQVM1QixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVM2QixRQUFRLENBQUMsbUJBQWtCLFlBQVk7b0JBQVVMLFdBQVU7OEJBQ2pGeEI7Ozs7Ozs4QkFHTCw4REFBQ0wsaUVBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7R0E3RE1FOztRQUlXSixrREFBU0E7OztLQUpwQkk7QUErRE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1ZlcmlmeUVtYWlsUGFnZS50c3g/Mjg0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBBbGVydCwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYmFzZVVybCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvVXJscyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IFZlcmlmeUVtYWlsUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3BhcmFtZXRlcnNMb2FkZWQsIHNldFBhcmFtZXRlcnNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdXNlcklkLCB1bmlxdWVTdHJpbmcgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VySWQgJiYgdW5pcXVlU3RyaW5nKSB7XHJcbiAgICAgIHNldFBhcmFtZXRlcnNMb2FkZWQodHJ1ZSk7ICAvLyBQYXJhbWV0ZXJzIGFyZSBhdmFpbGFibGVcclxuICAgIH1cclxuICB9LCBbdXNlcklkLCB1bmlxdWVTdHJpbmddKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZlcmlmeUVtYWlsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAocGFyYW1ldGVyc0xvYWRlZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS92ZXJpZnkvJHt1c2VySWR9LyR7dW5pcXVlU3RyaW5nfWApO1xyXG4gICAgICAgICAgc2V0TWVzc2FnZSgnRW1haWwgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHZlcmlmaWVkISBSZWRpcmVjdGluZyB5b3UgdG8gdGhlIGhvbWUgcGFnZS4uLicpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHsgdG9rZW4sIHVzZXIgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBDb29raWVzLnNldCgndG9rZW4nLCB0b2tlbiwgeyBleHBpcmVzOiAxIH0pO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAke2Jhc2VVcmx9L3ZlcmlmeS8ke3VzZXJJZH0vJGApO1xyXG4gICAgICAgICAgfSwgMzAwMCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBzZXRNZXNzYWdlKCdFbWFpbCB2ZXJpZmljYXRpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignVmVyaWZpY2F0aW9uIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKHBhcmFtZXRlcnNMb2FkZWQpIHtcclxuICAgICAgdmVyaWZ5RW1haWwoKTtcclxuICAgIH0gZWxzZSBpZiAoIWxvYWRpbmcpIHtcclxuICAgICAgc2V0TWVzc2FnZSgnSW52YWxpZCBvciBtaXNzaW5nIHZlcmlmaWNhdGlvbiBwYXJhbWV0ZXJzLicpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcGFyYW1ldGVyc0xvYWRlZCwgdXNlcklkLCB1bmlxdWVTdHJpbmcsIHJvdXRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJjdXN0b20tY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgIDxoMT5FbWFpbCBWZXJpZmljYXRpb248L2gxPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9e21lc3NhZ2U/LmluY2x1ZGVzKCdzdWNjZXNzZnVsbHknKSA/ICdzdWNjZXNzJyA6ICdkYW5nZXInfSBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5RW1haWxQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkFsZXJ0IiwiU3Bpbm5lciIsImF4aW9zIiwidXNlUm91dGVyIiwiYmFzZVVybCIsIkZvb3RlciIsIkNvb2tpZXMiLCJWZXJpZnlFbWFpbFBhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicGFyYW1ldGVyc0xvYWRlZCIsInNldFBhcmFtZXRlcnNMb2FkZWQiLCJyb3V0ZXIiLCJxdWVyeSIsInVzZXJJZCIsInVuaXF1ZVN0cmluZyIsInZlcmlmeUVtYWlsIiwicmVzcG9uc2UiLCJ0b2tlbiIsInVzZXIiLCJlcnJvciIsImdldCIsImRhdGEiLCJzZXQiLCJleHBpcmVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNvbnNvbGUiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsImFuaW1hdGlvbiIsInZhcmlhbnQiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/VerifyEmailPage.tsx\n"));

/***/ })

});