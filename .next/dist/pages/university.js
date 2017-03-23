'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _University = require('../components/University');

var _University2 = _interopRequireDefault(_University);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/pages/university.js?entry';
exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('article', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_University2.default, { id: props.url.query.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })));
});