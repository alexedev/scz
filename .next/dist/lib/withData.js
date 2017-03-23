'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactApollo = require('react-apollo');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

var _initClient = require('./initClient');

var _initStore = require('./initStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/lib/withData.js';

exports.default = function (Component) {
  return function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    (0, _createClass3.default)(_class, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var headers, client, store, props, app, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  headers = ctx.req ? ctx.req.headers : {};
                  client = (0, _initClient.initClient)(headers);
                  store = (0, _initStore.initStore)(client, client.initialState);
                  _context.t0 = _extends3.default;
                  _context.t1 = {
                    url: { query: ctx.query, pathname: ctx.pathname }
                  };
                  _context.next = 7;
                  return Component.getInitialProps ? Component.getInitialProps(ctx) : {};

                case 7:
                  _context.t2 = _context.sent;
                  props = (0, _context.t0)(_context.t1, _context.t2);

                  if (process.browser) {
                    _context.next = 13;
                    break;
                  }

                  app = _react2.default.createElement(_reactApollo.ApolloProvider, { client: client, store: store, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    }
                  }, _react2.default.createElement(Component, (0, _extends3.default)({}, props, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22
                    }
                  })));
                  _context.next = 13;
                  return (0, _reactApollo.getDataFromTree)(app);

                case 13:
                  state = store.getState();
                  return _context.abrupt('return', (0, _extends3.default)({
                    initialState: (0, _extends3.default)({}, state, (0, _defineProperty3.default)({}, client.reduxRootKey, {
                      data: client.getInitialState().data
                    })),
                    headers: headers
                  }, props));

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function _class(props) {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

      _this.client = (0, _initClient.initClient)(_this.props.headers);
      _this.store = (0, _initStore.initStore)(_this.client, _this.props.initialState);
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.client, store: this.store, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        })));
      }
    }]);

    return _class;
  }(_react2.default.Component);
};