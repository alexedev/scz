'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _UniList = require('../components/UniList');

var _UniList2 = _interopRequireDefault(_UniList);

var _Submit = require('../components/Submit');

var _Submit2 = _interopRequireDefault(_Submit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/pages/base.js?entry';
exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('article', {
    'data-jsx': 965797256,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 965797256,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Unversities of Czech Republic'), _react2.default.createElement('div', { className: 'underscore', 'data-jsx': 965797256,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('img', { src: '/static/underscore.svg', 'data-jsx': 965797256,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement(_UniList2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_Submit2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 965797256,
    css: '.underscore[data-jsx="965797256"] {margin: 40px auto;}.underscore[data-jsx="965797256"] img[data-jsx="965797256"] {margin: 0 auto;display: block;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jhc2UuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tCLEFBQ0MsbUNBQ08sa0JBQ25CLENBQ2dCLDZEQUNBLGVBQ0EsZUFDaEIiLCJmaWxlIjoicGFnZXMvYmFzZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxpYWtzZXlldS9Eb2N1bWVudHMvZGV2L3NjeiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSdcbmltcG9ydCBVbmlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVW5pTGlzdCdcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi4vY29tcG9uZW50cy9TdWJtaXQnXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKChwcm9wcykgPT4gKFxuICA8QXBwPlxuICAgIDxIZWFkZXIgcGF0aG5hbWU9e3Byb3BzLnVybC5wYXRobmFtZX0gLz5cbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxoMT5VbnZlcnNpdGllcyBvZiBDemVjaCBSZXB1YmxpYzwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVyc2NvcmVcIj48aW1nIHNyYz1cIi9zdGF0aWMvdW5kZXJzY29yZS5zdmdcIiAvPjwvZGl2PlxuICAgICAgPFVuaUxpc3QgLz5cbiAgICAgIDxTdWJtaXQgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC51bmRlcnNjb3JlIHtcbiAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgICB9XG4gICAgICAudW5kZXJzY29yZSBpbWcge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvYXJ0aWNsZT5cbiAgPC9BcHA+XG4pKSJdfQ== */\n/*@ sourceURL=pages/base.js?entry */'
  })));
});