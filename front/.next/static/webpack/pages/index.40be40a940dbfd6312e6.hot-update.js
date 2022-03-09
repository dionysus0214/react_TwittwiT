webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");



var _templateObject,
    _templateObject2,
    _this = undefined,
    _jsxFileName = "C:\\vscode\\react_twitter\\front\\components\\LoginForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-top: 10px;\n"])));
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  padding: 10px;\n"])));
_c2 = FormWrapper;

var LoginForm = function LoginForm(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      password = _useState[0],
      setPassword = _useState[1];

  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  var style = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      marginTop: 10
    };
  }, []);
  return __jsx(FormWrapper, {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("label", {
    html: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("label", {
    html: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx(ButtonWrapper, {
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 30
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};

_s(LoginForm, "4nTmQ5J2MBpbb2cCjUzY+yPT16Y=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c3 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIkxvZ2luRm9ybSIsInNldElzTG9nZ2VkSW4iLCJ1c2VJbnB1dCIsImlkIiwib25DaGFuZ2VJZCIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsInVzZU1lbW8iLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsc0tBQW5CO0tBQU1GLGE7QUFJTixJQUFNRyxXQUFXLEdBQUdGLGlFQUFNLENBQUNHLHlDQUFELENBQVQscUtBQWpCO01BQU1ELFc7O0FBSU4sSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUN2QyxrQkFBeUJDLCtEQUFRLENBQUMsRUFBRCxDQUFqQztBQUFBO0FBQUEsTUFBT0MsRUFBUDtBQUFBLE1BQVdDLFVBQVg7O0FBRUEsa0JBQWdDQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLGdCQUFnQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUMxQ0gsZUFBVyxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0QsR0FGbUMsRUFFakMsRUFGaUMsQ0FBcEM7QUFJQSxNQUFNQyxZQUFZLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUNyQ0ssV0FBTyxDQUFDQyxHQUFSLENBQVlaLEVBQVosRUFBZ0JHLFFBQWhCO0FBQ0FMLGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0QsR0FIK0IsRUFHN0IsQ0FBQ0UsRUFBRCxFQUFLRyxRQUFMLENBSDZCLENBQWhDO0FBS0EsTUFBTVUsS0FBSyxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTztBQUFDQyxlQUFTLEVBQUU7QUFBWixLQUFQO0FBQUEsR0FBRCxFQUEwQixFQUExQixDQUFyQjtBQUVBLFNBQ0UsTUFBQyxXQUFEO0FBQWEsWUFBUSxFQUFFTCxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsMENBQUQ7QUFDRSxRQUFJLEVBQUMsU0FEUDtBQUVFLFNBQUssRUFBRVYsRUFGVDtBQUdFLFlBQVEsRUFBRUMsVUFIWjtBQUlFLFlBQVEsTUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxlQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDBDQUFEO0FBQ0UsUUFBSSxFQUFDLGVBRFA7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLFNBQUssRUFBRUUsUUFIVDtBQUlFLFlBQVEsRUFBRUUsZ0JBSlo7QUFLRSxZQUFRLE1BTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBWEYsRUFzQkUsTUFBQyxhQUFEO0FBQWUsU0FBSyxFQUFFUSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFlBQVEsRUFBQyxRQUFoQztBQUF5QyxXQUFPLEVBQUUsS0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRyxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQUgsQ0FBckIsQ0FGRixDQXRCRixDQURGO0FBNkJELENBNUNEOztHQUFNaEIsUztVQUNxQkUsdUQ7OztNQURyQkYsUztBQThDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDBiZTQwYTk0MGRiZmQ2MzEyZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoeyBzZXRJc0xvZ2dlZEluIH0pID0+IHtcclxuICBjb25zdCBbaWQsIG9uQ2hhbmdlSWRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkLCBwYXNzd29yZCk7XHJcbiAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gIH0sIFtpZCwgcGFzc3dvcmRdKTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7bWFyZ2luVG9wOiAxMH0pLCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWw9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCJcclxuICAgICAgICAgIHZhbHVlPXtpZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbD1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbldyYXBwZXIgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtmYWxzZX0+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT48QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9