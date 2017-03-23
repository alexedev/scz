'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _DeleteFaculty = require('./DeleteFaculty');

var _DeleteFaculty2 = _interopRequireDefault(_DeleteFaculty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/components/FacultyPreview.js';

exports.default = function (_ref) {
  var name = _ref.name,
      href = _ref.href,
      id = _ref.id,
      uniId = _ref.uniId;
  return _react2.default.createElement('div', { className: 'preview', 'data-jsx': 3581425421,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: href, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', { className: 'preview__name', 'data-jsx': 3581425421,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, name)), _react2.default.createElement(_DeleteFaculty2.default, { id: id, uniId: uniId, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 3581425421,
    css: '.preview[data-jsx="3581425421"] {border-radius: 4px;cursor: pointer;margin-bottom:15px;padding: 10px 0 10px 0;box-shadow: 1px 1px 2px 0 rgba(142, 142, 142, 0.50);text-align: center;}.preview[data-jsx="3581425421"]:hover {box-shadow: 1px 1px 5px 0 rgba(142, 142, 142, 0.50);}.preview__name[data-jsx="3581425421"] {font-size: 20px;letter-spacing: 0.8px;text-decoration: none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmFjdWx0eVByZXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdCLEFBQ0ksaUNBQ1csbUJBQ0gsZ0JBQ0csbUJBQ0ksdUJBQzZCLG9EQUNqQyxtQkFDcEIsQ0FDZSx1Q0FDc0Msb0RBQ3JELENBQ2UsdUNBQ0UsZ0JBQ00sc0JBQ0Esc0JBRXZCIiwiZmlsZSI6ImNvbXBvbmVudHMvRmFjdWx0eVByZXZpZXcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsaWFrc2V5ZXUvRG9jdW1lbnRzL2Rldi9zY3oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGVsZXRlRmFjdWx0eSBmcm9tICcuL0RlbGV0ZUZhY3VsdHknO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBuYW1lLCBocmVmLCBpZCwgdW5pSWQgfSkgPT4gKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1wiPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2hyZWZ9PlxuICAgICAgPGEgY2xhc3NOYW1lPVwicHJldmlld19fbmFtZVwiPntuYW1lfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPERlbGV0ZUZhY3VsdHkgaWQ9e2lkfSB1bmlJZD17dW5pSWR9IC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wcmV2aWV3IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYmEoMTQyLCAxNDIsIDE0MiwgMC41MCk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcmV2aWV3OmhvdmVyIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDAgcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjUwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByZXZpZXdfX25hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG4pIl19 */\n/*@ sourceURL=components/FacultyPreview.js */'
  }));
};