"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/aliakseyeu/Documents/dev/scz/components/App.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("main", {
    "data-jsx": 4035148996,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("title", {
    "data-jsx": 4035148996,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "StudyCZ.com"), _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500&subset=cyrillic", rel: "stylesheet", "data-jsx": 4035148996,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", "data-jsx": 4035148996,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), children, _react2.default.createElement(_style2.default, {
    styleId: 4035148996,
    css: "\n      * {\n        font-family: 'Roboto', sans-serif;\n      }\n      h1 {\n        margin-top:80px;\n        margin-bottom: 0;\n        font-size: 40px;\n        font-weight: 500;\n        text-align:center\n      }\n      h2 {\n        font-weight: 200;\n        text-align:center;\n      }\n      .underscore: {\n        margin-bottom: 40px;\n      }\n      body {\n        width: 1200px;\n        margin: 0 auto;\n        padding: 25px 50px;\n      }\n      a {\n        color: #000000;\n      }\n      p {\n        font-size: 20px;\n        line-height: 24px;\n      }\n      article {\n        margin: 0 auto;\n        max-width: 650px;\n      }\n      button {\n        align-items: center;\n        background-color: #0178D9;\n        border: 0;\n        color: white;\n        display: flex;\n        font-size: 16px;\n        padding: 10px 20px;\n      }\n      button:active {\n        background-color: #1B9DB7;\n        transition: background-color .3s\n      }\n      button:focus {\n        outline: none;\n      }\n    "
  }));
};