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

var _DeleteUniversity = require('./DeleteUniversity');

var _DeleteUniversity2 = _interopRequireDefault(_DeleteUniversity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/components/UniversityPreview.js';

exports.default = function (_ref) {
  var name = _ref.name,
      href = _ref.href,
      id = _ref.id;
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
  }, name)), _react2.default.createElement(_DeleteUniversity2.default, { id: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 3581425421,
    css: '.preview[data-jsx="3581425421"] {border-radius: 4px;cursor: pointer;margin-bottom:15px;padding: 10px 0 10px 0;box-shadow: 1px 1px 2px 0 rgba(142, 142, 142, 0.50);text-align: center;}.preview[data-jsx="3581425421"]:hover {box-shadow: 1px 1px 5px 0 rgba(142, 142, 142, 0.50);}.preview__name[data-jsx="3581425421"] {font-size: 20px;letter-spacing: 0.8px;text-decoration: none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pdmVyc2l0eVByZXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXNCLEFBQ0YsaUNBQ1csbUJBQ0gsZ0JBQ0csbUJBQ0ksdUJBQzZCLG9EQUNqQyxtQkFDcEIsQ0FDZSx1Q0FDc0Msb0RBQ3JELENBQ2UsdUNBQ0UsZ0JBQ00sc0JBQ0Esc0JBRXZCIiwiZmlsZSI6ImNvbXBvbmVudHMvVW5pdmVyc2l0eVByZXZpZXcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsaWFrc2V5ZXUvRG9jdW1lbnRzL2Rldi9zY3oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGVsZXRlVW5pdmVyc2l0eSBmcm9tICcuL0RlbGV0ZVVuaXZlcnNpdHknO1xuXG5leHBvcnQgZGVmYXVsdCAoe25hbWUsIGhyZWYsIGlkfSkgPT4gKFxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1wiPlxuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJldmlld19fbmFtZVwiPntuYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPERlbGV0ZVVuaXZlcnNpdHkgaWQ9e2lkfSAvPiBcbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnByZXZpZXcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjUwKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByZXZpZXc6aG92ZXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuNTApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJldmlld19fbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gIFxuKSJdfQ== */\n/*@ sourceURL=components/UniversityPreview.js */'
  }));
};