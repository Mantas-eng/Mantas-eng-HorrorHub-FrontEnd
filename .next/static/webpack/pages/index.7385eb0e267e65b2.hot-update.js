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

/***/ "./src/components/Navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Nav,Navbar!=!react-bootstrap */ \"__barrel_optimize__?names=Button,Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.module.scss */ \"./src/components/styles/styles.module.scss\");\n/* harmony import */ var _styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _logo_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo/logo.png */ \"./src/components/Navbar/logo/logo.png\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _UserModal_UserModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../UserModal/UserModal */ \"./src/components/UserModal/UserModal.tsx\");\n/* harmony import */ var _Urls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Urls */ \"./src/components/Urls.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar App = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_11__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showModal = _useState[0], setShowModal = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_11__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isLoggedIn = _useState1[0], setIsLoggedIn = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_11__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        password: \"\",\n        email: \"\"\n    }), 2), userData = _useState2[0], setUserData = _useState2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var handleShowModal = function() {\n        return setShowModal(true);\n    };\n    var handleCloseModal = function() {\n        return setShowModal(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n        if (token) {\n            setIsLoggedIn(true);\n            fetchUserData();\n        }\n        var handleScroll = function() {\n            var navbar = document.querySelector(\".navbar\");\n            if (window.scrollY < 50) {\n                navbar === null || navbar === void 0 ? void 0 : navbar.classList.add(\"bg-dark\");\n                navbar === null || navbar === void 0 ? void 0 : navbar.classList.add(\"navbar-sticky\");\n            } else {\n                navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove(\"bg-dark\");\n                navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove(\"navbar-sticky\");\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    var handleLogout = function() {\n        js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].remove(\"token\");\n        router.push(\"/LoginPage\");\n    };\n    var fetchUserData = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_12__._)(function() {\n            var response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_13__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_14__[\"default\"].get(\"\".concat(_Urls__WEBPACK_IMPORTED_MODULE_10__.baseUrl, \"/userData\"), {\n                                headers: {\n                                    Authorization: \"Bearer \".concat(js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\"))\n                                }\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        setUserData(response.data);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.error(\"Error fetching user data:\", error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchUserData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Navbar, {\n                expand: \"lg\",\n                className: \"\".concat((_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().navbar), \" navbar navbar-expand-lg fixed-top navbar-dark bg-dark navbar-sticky\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"./index\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: _logo_logo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                                width: \"150\",\n                                height: \"120\",\n                                className: \"d-inline-block align-top\",\n                                alt: \"React Bootstrap logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Nav, {\n                                    className: \"mr-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Nav.Link, {\n                                            href: \"#home\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Nav.Link, {\n                                            href: \"#discover\",\n                                            children: \"Discover\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Nav.Link, {\n                                            href: \"#summary\",\n                                            children: \"Summary\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Nav.Link, {\n                                            href: \"#takeaways\",\n                                            children: \"Takeaways\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Nav.Link, {\n                                            href: \"#subscribe\",\n                                            children: \"Subscribe\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Nav, {\n                                    className: \"ms-auto\",\n                                    children: isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Button, {\n                                        variant: \"success\",\n                                        onClick: handleShowModal,\n                                        className: \"text-uppercase\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faUser\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"ms-2\",\n                                                children: \"User\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 17\n                                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/LoginPage\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.Button, {\n                                            variant: \"success\",\n                                            className: \"text-uppercase\",\n                                            children: \"Prisijungti\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserModal_UserModal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                show: showModal,\n                handleClose: handleCloseModal,\n                user: userData,\n                handleLogout: handleLogout\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mantas-PC\\\\Desktop\\\\FrontEnd\\\\FrontEnd\\\\src\\\\components\\\\Navbar\\\\Navbar.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"k9WSVnbNA/H9/e1UtjG2SRolAuI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0EsQ0FBQ0csSUFBSTs0Q0FBQzhDLE1BQUs7c0RBQVk7Ozs7OztzREFDM0IsOERBQUNqRCxvR0FBR0EsQ0FBQ0csSUFBSTs0Q0FBQzhDLE1BQUs7c0RBQVc7Ozs7OztzREFDMUIsOERBQUNqRCxvR0FBR0EsQ0FBQ0csSUFBSTs0Q0FBQzhDLE1BQUs7c0RBQWE7Ozs7OztzREFDNUIsOERBQUNqRCxvR0FBR0EsQ0FBQ0csSUFBSTs0Q0FBQzhDLE1BQUs7c0RBQWE7Ozs7Ozs7Ozs7Ozs4Q0FFOUIsOERBQUNqRCxvR0FBR0E7b0NBQUNnRCxXQUFVOzhDQUNaakMsMkJBQ0MsOERBQUNkLHVHQUFNQTt3Q0FBQzBELFNBQVE7d0NBQVVDLFNBQVNyQzt3Q0FBaUJ5QixXQUFVOzswREFDNUQsOERBQUN4QywyRUFBZUE7Z0RBQUNxRCxNQUFNdEQsc0VBQU1BOzs7Ozs7MERBQzdCLDhEQUFDdUQ7Z0RBQUtkLFdBQVU7MERBQU87Ozs7Ozs7Ozs7OzhEQUd6Qiw4REFBQzdDLGtEQUFJQTt3Q0FBQzhDLE1BQUs7a0RBQ1QsNEVBQUNoRCx1R0FBTUE7NENBQUMwRCxTQUFROzRDQUFVWCxXQUFVO3NEQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVVqRSw4REFBQ3ZDLDREQUFTQTtnQkFDUnNELE1BQU1sRDtnQkFDTm1ELGFBQWF4QztnQkFDYnlDLE1BQU03QztnQkFDTm1CLGNBQWNBOzs7Ozs7OztBQUl0QjtHQTFHTTNCOztRQVFXTixrREFBU0E7OztLQVJwQk07QUE0R04sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci50c3g/NmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdmJhciwgQ29udGFpbmVyLCBOYXYsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMb2dvSU1HIGZyb20gJy4vbG9nby9sb2dvLnBuZyc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZmFVc2VyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgVXNlck1vZGFsIGZyb20gJy4uL1VzZXJNb2RhbC9Vc2VyTW9kYWwnO1xuaW1wb3J0IHsgYmFzZVVybCB9IGZyb20gJy4uL1VybHMnOyBcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGVtYWlsOiAnJ1xuICB9KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU2hvd01vZGFsID0gKCkgPT4gc2V0U2hvd01vZGFsKHRydWUpO1xuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICAgICAgZmV0Y2hVc2VyRGF0YSgpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPCA1MCkge1xuICAgICAgICBuYXZiYXI/LmNsYXNzTGlzdC5hZGQoJ2JnLWRhcmsnKTtcbiAgICAgICAgbmF2YmFyPy5jbGFzc0xpc3QuYWRkKCduYXZiYXItc3RpY2t5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZiYXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWRhcmsnKTtcbiAgICAgICAgbmF2YmFyPy5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXItc3RpY2t5Jyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgQ29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgcm91dGVyLnB1c2goJy9Mb2dpblBhZ2UnKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS91c2VyRGF0YWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtDb29raWVzLmdldCgndG9rZW4nKX1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBzZXRVc2VyRGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhclxuICAgICAgICBleHBhbmQ9XCJsZ1wiXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdmJhcn0gbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgZml4ZWQtdG9wIG5hdmJhci1kYXJrIGJnLWRhcmsgbmF2YmFyLXN0aWNreWB9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi4vaW5kZXhcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtMb2dvSU1HLnNyY31cbiAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMjBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BkLWlubGluZS1ibG9jayBhbGlnbi10b3BgfVxuICAgICAgICAgICAgICBhbHQ9XCJSZWFjdCBCb290c3RyYXAgbG9nb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNob21lXCI+SG9tZTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2Rpc2NvdmVyXCI+RGlzY292ZXI8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNzdW1tYXJ5XCI+U3VtbWFyeTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI3Rha2Vhd2F5c1wiPlRha2Vhd2F5czwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI3N1YnNjcmliZVwiPlN1YnNjcmliZTwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPlxuICAgICAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzdWNjZXNzXCIgb25DbGljaz17aGFuZGxlU2hvd01vZGFsfSBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtcy0yXCI+VXNlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0xvZ2luUGFnZVwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgIFByaXNpanVuZ3RpXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L05hdmJhcj5cblxuICAgICAgPFVzZXJNb2RhbFxuICAgICAgICBzaG93PXtzaG93TW9kYWx9XG4gICAgICAgIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfVxuICAgICAgICB1c2VyPXt1c2VyRGF0YX1cbiAgICAgICAgaGFuZGxlTG9nb3V0PXtoYW5kbGVMb2dvdXR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJDb250YWluZXIiLCJOYXYiLCJCdXR0b24iLCJzdHlsZXMiLCJMaW5rIiwiTG9nb0lNRyIsIkNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJmYVVzZXIiLCJGb250QXdlc29tZUljb24iLCJVc2VyTW9kYWwiLCJiYXNlVXJsIiwiYXhpb3MiLCJBcHAiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJyb3V0ZXIiLCJoYW5kbGVTaG93TW9kYWwiLCJoYW5kbGVDbG9zZU1vZGFsIiwidG9rZW4iLCJnZXQiLCJmZXRjaFVzZXJEYXRhIiwiaGFuZGxlU2Nyb2xsIiwibmF2YmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTG9nb3V0IiwicHVzaCIsInJlc3BvbnNlIiwiZXJyb3IiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJjb25zb2xlIiwiZXhwYW5kIiwiY2xhc3NOYW1lIiwiaHJlZiIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiaWQiLCJ2YXJpYW50Iiwib25DbGljayIsImljb24iLCJzcGFuIiwic2hvdyIsImhhbmRsZUNsb3NlIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/Navbar.tsx\n"));

/***/ })

});