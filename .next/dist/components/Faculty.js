'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFaculty = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = require('react-apollo');

var _Underscore = require('../components/Underscore');

var _Underscore2 = _interopRequireDefault(_Underscore);

var _FacultyEditSaveButton = require('./FacultyEditSaveButton');

var _FacultyEditSaveButton2 = _interopRequireDefault(_FacultyEditSaveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/components/Faculty.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query Faculty($id: ID!) {\n    Faculty(id: $id, ) {\n      id\n      name\n      url\n      logo\n      description\n      createdAt\n    }\n  }\n'], ['\n  query Faculty($id: ID!) {\n    Faculty(id: $id, ) {\n      id\n      name\n      url\n      logo\n      description\n      createdAt\n    }\n  }\n']);

var Faculty = function (_Component) {
  (0, _inherits3.default)(Faculty, _Component);

  function Faculty(props) {
    (0, _classCallCheck3.default)(this, Faculty);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Faculty.__proto__ || (0, _getPrototypeOf2.default)(Faculty)).call(this, props));

    _this.toggleEditMode = function () {
      _this.setState({ editMode: !_this.state.editMode });
    };

    _this.changeName = function (e) {
      _this.setState({ name: e.target.value });
    };

    _this.changeDescription = function (e) {
      _this.setState({ description: e.target.value });
    };

    _this.changeUrl = function (e) {
      _this.setState({ url: e.target.value });
    };

    var data = _this.props.data;

    _this.state = {
      editMode: false,
      name: data && data.Faculty ? data.Faculty.name : '',
      url: data && data.Faculty ? data.Faculty.url : '',
      description: data && data.Faculty ? data.Faculty.description : ''
    };
    return _this;
  }

  (0, _createClass3.default)(Faculty, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data,
          Faculty = _props$data.Faculty,
          loading = _props$data.loading;
      var _state = this.state,
          editMode = _state.editMode,
          name = _state.name,
          url = _state.url,
          description = _state.description;

      if (loading) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, 'Loading');
      }
      console.log(this.props.data);
      return _react2.default.createElement('section', {
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h1', {
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, editMode ? _react2.default.createElement('input', {
        className: 'name-input',
        value: name,
        name: 'name',
        onChange: this.changeName,
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }) : Faculty.name), _react2.default.createElement('div', { className: 'edit', 'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('a', { onClick: this.toggleEditMode, 'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, editMode ? "cancel" : "edit")), _react2.default.createElement(_Underscore2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement('div', { className: 'url', 'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'web: ', editMode ? _react2.default.createElement('input', {
        className: 'url-input',
        value: url,
        name: 'url',
        onChange: this.changeUrl,
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }) : _react2.default.createElement('a', { href: Faculty.url, 'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, Faculty.url)), _react2.default.createElement('p', {
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, editMode ? _react2.default.createElement('textarea', {
        value: description,
        name: 'description',
        onChange: this.changeDescription,
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }) : Faculty.description), editMode && _react2.default.createElement(_FacultyEditSaveButton2.default, {
        toggleEditMode: this.toggleEditMode,
        id: Faculty.id,
        name: name,
        url: url,
        description: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 344335197,
        css: 'section[data-jsx="344335197"] {padding-bottom: 20px;}a[data-jsx="344335197"] {font-size: 14px;margin-right: 10px;text-decoration: none;padding-bottom: 0;color: #0178D9;border: 0;}.edit[data-jsx="344335197"] {text-align: center;}span[data-jsx="344335197"] {font-size: 14px;margin-right: 5px;}.url[data-jsx="344335197"] {text-align: center;}input[data-jsx="344335197"],textarea[data-jsx="344335197"] {padding: 10px 10px 10px 10px;font-family: \'Roboto\', sans;font-size: 20px;}.name-input[data-jsx="344335197"] {font-size: 40px;}textarea[data-jsx="344335197"] {width: 100%;height: 10em;}button[data-jsx="344335197"] {margin: 10px auto 0 auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmFjdWx0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Rm9CLEFBQ0QsK0JBQ2MscUJBQ3RCLENBRUUseUJBQ2UsZ0JBQ0csbUJBQ0csc0JBQ0osa0JBQ0gsZUFDTCxVQUNYLENBQ00sNkJBQ2MsbUJBQ3BCLENBQ0ssNEJBQ1ksZ0JBQ0Usa0JBQ25CLENBQ0ssNEJBQ2UsbUJBQ3BCLENBQ2dCLDREQUNjLDZCQUNELDRCQUNaLGdCQUNqQixDQUNZLG1DQUNLLGdCQUNqQixDQUNTLGdDQUNJLFlBQ0MsYUFDZCxDQUNPLDhCQUNtQix5QkFDMUIiLCJmaWxlIjoiY29tcG9uZW50cy9GYWN1bHR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGlha3NleWV1L0RvY3VtZW50cy9kZXYvc2N6Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBVbmRlcnNjb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvVW5kZXJzY29yZSc7XG5pbXBvcnQgRmFjdWx0eUVkaXRTYXZlQnV0dG9uIGZyb20gJy4vRmFjdWx0eUVkaXRTYXZlQnV0dG9uJztcblxuY2xhc3MgRmFjdWx0eSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICBuYW1lOiBkYXRhICYmIGRhdGEuRmFjdWx0eSA/IGRhdGEuRmFjdWx0eS5uYW1lIDogJycsXG4gICAgICB1cmw6IGRhdGEgJiYgZGF0YS5GYWN1bHR5ID8gZGF0YS5GYWN1bHR5LnVybCA6ICcnLFxuICAgICAgZGVzY3JpcHRpb246IGRhdGEgJiYgZGF0YS5GYWN1bHR5ID8gZGF0YS5GYWN1bHR5LmRlc2NyaXB0aW9uIDogJycsXG4gICAgfVxuICB9XG4gIHRvZ2dsZUVkaXRNb2RlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0TW9kZTogIXRoaXMuc3RhdGUuZWRpdE1vZGUgfSk7XG4gIH1cbiAgY2hhbmdlTmFtZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG4gIGNoYW5nZURlc2NyaXB0aW9uID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG4gIGNoYW5nZVVybCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVybDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBGYWN1bHR5LCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgY29uc3QgeyBlZGl0TW9kZSwgbmFtZSwgdXJsLCBkZXNjcmlwdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGEpO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtlZGl0TW9kZVxuICAgICAgICAgICAgPyA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VOYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDogRmFjdWx0eS5uYW1lXG4gICAgICAgICAgfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRcIj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXRNb2RlfT5cbiAgICAgICAgICAgIHtlZGl0TW9kZSA/IFwiY2FuY2VsXCIgOiBcImVkaXRcIn1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VW5kZXJzY29yZSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXJsXCI+XG4gICAgICAgICAgd2ViOiB7ZWRpdE1vZGVcbiAgICAgICAgICAgID8gPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVybC1pbnB1dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt1cmx9XG4gICAgICAgICAgICAgIG5hbWU9J3VybCdcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlVXJsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDogPGEgaHJlZj17RmFjdWx0eS51cmx9PntGYWN1bHR5LnVybH08L2E+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2VkaXRNb2RlXG4gICAgICAgICAgICA/IDx0ZXh0YXJlYVxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA6IEZhY3VsdHkuZGVzY3JpcHRpb25cbiAgICAgICAgICB9XG4gICAgICAgIDwvcD5cbiAgICAgICAge2VkaXRNb2RlICYmIDxGYWN1bHR5RWRpdFNhdmVCdXR0b25cbiAgICAgICAgICB0b2dnbGVFZGl0TW9kZT17dGhpcy50b2dnbGVFZGl0TW9kZX1cbiAgICAgICAgICBpZD17RmFjdWx0eS5pZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHVybD17dXJsfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICAgfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMTc4RDk7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZGl0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVybCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZS1pbnB1dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgY29uc3QgZ2V0RmFjdWx0eSA9IGdxbGBcbiAgcXVlcnkgRmFjdWx0eSgkaWQ6IElEISkge1xuICAgIEZhY3VsdHkoaWQ6ICRpZCwgKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgdXJsXG4gICAgICBsb2dvXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgY3JlYXRlZEF0XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoZ2V0RmFjdWx0eSwge1xuICBvcHRpb25zOiBvd25Qcm9wcyA9PiAoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IG93blByb3BzLmlkLFxuICAgIH1cbiAgfSksXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YVxuICB9KVxufSkoRmFjdWx0eSlcbiJdfQ== */\n/*@ sourceURL=components/Faculty.js */'
      }));
    }
  }]);

  return Faculty;
}(_react.Component);

var getFaculty = exports.getFaculty = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(getFaculty, {
  options: function options(ownProps) {
    return {
      variables: {
        id: ownProps.id
      }
    };
  },
  props: function props(_ref) {
    var data = _ref.data;
    return {
      data: data
    };
  }
})(Faculty);