"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/aliakseyeu/Documents/dev/scz/components/Header.js";

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement("header", {
    "data-jsx": 1870424681,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("div", { className: "container", "data-jsx": 1870424681,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("div", { className: "col", "data-jsx": 1870424681,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("a", {
    "data-jsx": 1870424681,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("img", { src: "/static/logo.svg", "data-jsx": 1870424681,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })))), _react2.default.createElement("div", { className: "col", "data-jsx": 1870424681,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: "/services", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("a", { className: pathname === '/services' && 'is-active', "data-jsx": 1870424681,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "SERVICES")), _react2.default.createElement(_link2.default, { prefetch: true, href: "/base", __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement("a", { className: pathname === '/base' && 'is-active', "data-jsx": 1870424681,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "CATALOG")), _react2.default.createElement(_link2.default, { prefetch: true, href: "/contact", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement("a", { className: pathname === '/contact' && 'is-active', "data-jsx": 1870424681,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "CONTACTS")))), _react2.default.createElement(_style2.default, {
    styleId: 1870424681,
    css: "header[data-jsx=\"1870424681\"] {margin-bottom: 25px;}a[data-jsx=\"1870424681\"] {font-weight: 300;font-size: 24px;margin-right: 30px;text-decoration: none;letter-spacing: 0.15em;}.is-active[data-jsx=\"1870424681\"] {font-weight: 500;}.container[data-jsx=\"1870424681\"] {align-items: center;justify-content: center;display:-webkit-flex; display:flex;}.col[data-jsx=\"1870424681\"] {-webkit-flex: 1;-moz-flex: 1;flex: 1;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCYyxBQUNBLCtCQUNjLG9CQUNyQixDQUNFLDBCQUNnQixpQkFDRCxnQkFDRyxtQkFDRyxzQkFDQyx1QkFDeEIsQ0FDVyxtQ0FDTyxpQkFDbEIsQ0FDVyxtQ0FDVSxvQkFDSSx3QkFDVixtQ0FDZixDQUNLLDZCQUNJLHFDQUNUIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGlha3NleWV1L0RvY3VtZW50cy9kZXYvc2N6Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZSB9KSA9PiAoXG4gIDxoZWFkZXI+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+XG4gICAgICAgICAgPGE+PGltZyBzcmM9XCIvc3RhdGljL2xvZ28uc3ZnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL3NlcnZpY2VzJz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9zZXJ2aWNlcycgJiYgJ2lzLWFjdGl2ZSd9PlNFUlZJQ0VTPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Jhc2UnPlxuICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Jhc2UnICYmICdpcy1hY3RpdmUnfT5DQVRBTE9HPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2NvbnRhY3QnPlxuICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnICYmICdpcy1hY3RpdmUnfT5DT05UQUNUUzwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICAgICAgfVxuICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICAuY29sIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG48L2hlYWRlcj5cbiBcbilcbiJdfQ== */\n/*@ sourceURL=components/Header.js */"
  }));
};