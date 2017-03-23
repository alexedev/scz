'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUniversity = undefined;

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

var _EditSaveButton = require('./EditSaveButton');

var _EditSaveButton2 = _interopRequireDefault(_EditSaveButton);

var _FacultiesList = require('./FacultiesList');

var _FacultiesList2 = _interopRequireDefault(_FacultiesList);

var _SubmitFaculty = require('./SubmitFaculty');

var _SubmitFaculty2 = _interopRequireDefault(_SubmitFaculty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/components/University.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query University($id: ID!) {\n    University(id: $id, ) {\n      id\n      name\n      url\n      logo\n      description\n      createdAt\n    }\n  }\n'], ['\n  query University($id: ID!) {\n    University(id: $id, ) {\n      id\n      name\n      url\n      logo\n      description\n      createdAt\n    }\n  }\n']);

var University = function (_Component) {
  (0, _inherits3.default)(University, _Component);

  function University(props) {
    (0, _classCallCheck3.default)(this, University);

    var _this = (0, _possibleConstructorReturn3.default)(this, (University.__proto__ || (0, _getPrototypeOf2.default)(University)).call(this, props));

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
      name: data && data.University ? data.University.name : '',
      url: data && data.University ? data.University.url : '',
      description: data && data.University ? data.University.description : ''
    };
    return _this;
  }

  (0, _createClass3.default)(University, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data,
          University = _props$data.University,
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
            lineNumber: 37
          }
        }, 'Loading');
      }
      console.log(this.props.data);
      return _react2.default.createElement('section', {
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('h1', {
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, editMode ? _react2.default.createElement('input', {
        className: 'name-input',
        value: name,
        name: 'name',
        onChange: this.changeName,
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }) : University.name), _react2.default.createElement('div', { className: 'edit', 'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('a', { onClick: this.toggleEditMode, 'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, editMode ? "cancel" : "edit")), _react2.default.createElement(_Underscore2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement('h2', {
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Bio'), _react2.default.createElement('div', { className: 'url', 'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'web: ', editMode ? _react2.default.createElement('input', {
        className: 'url-input',
        value: url,
        name: 'url',
        onChange: this.changeUrl,
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }) : _react2.default.createElement('a', { href: University.url, 'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, University.url)), _react2.default.createElement('p', {
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, editMode ? _react2.default.createElement('textarea', {
        value: description,
        name: 'description',
        onChange: this.changeDescription,
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }) : University.description), editMode && _react2.default.createElement(_EditSaveButton2.default, {
        toggleEditMode: this.toggleEditMode,
        id: University.id,
        name: name,
        url: url,
        description: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_Underscore2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement('h2', {
        'data-jsx': 344335197,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Faculties'), _react2.default.createElement(_FacultiesList2.default, { uniId: University.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement(_Underscore2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement(_SubmitFaculty2.default, { uniId: University.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 344335197,
        css: 'section[data-jsx="344335197"] {padding-bottom: 20px;}a[data-jsx="344335197"] {font-size: 14px;margin-right: 10px;text-decoration: none;padding-bottom: 0;color: #0178D9;border: 0;}.edit[data-jsx="344335197"] {text-align: center;}span[data-jsx="344335197"] {font-size: 14px;margin-right: 5px;}.url[data-jsx="344335197"] {text-align: center;}input[data-jsx="344335197"],textarea[data-jsx="344335197"] {padding: 10px 10px 10px 10px;font-family: \'Roboto\', sans;font-size: 20px;}.name-input[data-jsx="344335197"] {font-size: 40px;}textarea[data-jsx="344335197"] {width: 100%;height: 10em;}button[data-jsx="344335197"] {margin: 10px auto 0 auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pdmVyc2l0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Rm9CLEFBQ0QsK0JBQ2MscUJBQ3RCLENBRUUseUJBQ2UsZ0JBQ0csbUJBQ0csc0JBQ0osa0JBQ0gsZUFDTCxVQUNYLENBQ00sNkJBQ2MsbUJBQ3BCLENBQ0ssNEJBQ1ksZ0JBQ0Usa0JBQ25CLENBQ0ssNEJBQ2UsbUJBQ3BCLENBQ2dCLDREQUNjLDZCQUNELDRCQUNaLGdCQUNqQixDQUNZLG1DQUNLLGdCQUNqQixDQUNTLGdDQUNJLFlBQ0MsYUFDZCxDQUNPLDhCQUNtQix5QkFDMUIiLCJmaWxlIjoiY29tcG9uZW50cy9Vbml2ZXJzaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGlha3NleWV1L0RvY3VtZW50cy9kZXYvc2N6Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgVW5kZXJzY29yZSBmcm9tICcuLi9jb21wb25lbnRzL1VuZGVyc2NvcmUnO1xuaW1wb3J0IEVkaXRTYXZlQnV0dG9uIGZyb20gJy4vRWRpdFNhdmVCdXR0b24nO1xuaW1wb3J0IEZhY3VsdGllc0xpc3QgZnJvbSAnLi9GYWN1bHRpZXNMaXN0JztcbmltcG9ydCBTdWJtaXRGYWN1bHR5IGZyb20gJy4vU3VibWl0RmFjdWx0eSdcblxuY2xhc3MgVW5pdmVyc2l0eSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICBuYW1lOiBkYXRhICYmIGRhdGEuVW5pdmVyc2l0eSA/IGRhdGEuVW5pdmVyc2l0eS5uYW1lIDogJycsXG4gICAgICB1cmw6IGRhdGEgJiYgZGF0YS5Vbml2ZXJzaXR5ID8gZGF0YS5Vbml2ZXJzaXR5LnVybCA6ICcnLFxuICAgICAgZGVzY3JpcHRpb246IGRhdGEgJiYgZGF0YS5Vbml2ZXJzaXR5ID8gZGF0YS5Vbml2ZXJzaXR5LmRlc2NyaXB0aW9uIDogJycsXG4gICAgfVxuICB9XG4gIHRvZ2dsZUVkaXRNb2RlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRNb2RlOiAhdGhpcy5zdGF0ZS5lZGl0TW9kZSB9KTtcbiAgfVxuICBjaGFuZ2VOYW1lID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cbiAgY2hhbmdlRGVzY3JpcHRpb24gPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cbiAgY2hhbmdlVXJsID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdXJsOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBVbml2ZXJzaXR5LCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgY29uc3QgeyBlZGl0TW9kZSwgbmFtZSwgdXJsLCBkZXNjcmlwdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGEpO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtlZGl0TW9kZSBcbiAgICAgICAgICAgID8gPGlucHV0IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hbWUtaW5wdXRcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX0gXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZScgXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlTmFtZX0gXG4gICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgOiBVbml2ZXJzaXR5Lm5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdFwiPlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdE1vZGV9PlxuICAgICAgICAgICAge2VkaXRNb2RlID8gXCJjYW5jZWxcIiA6IFwiZWRpdFwifVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxVbmRlcnNjb3JlIC8+XG4gICAgICAgIDxoMj5CaW88L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVybFwiPlxuICAgICAgICAgIHdlYjoge2VkaXRNb2RlIFxuICAgICAgICAgICAgPyA8aW5wdXQgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXJsLWlucHV0XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VybH0gXG4gICAgICAgICAgICAgICAgbmFtZT0ndXJsJyBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VVcmx9IFxuICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgIDogPGEgaHJlZj17VW5pdmVyc2l0eS51cmx9PntVbml2ZXJzaXR5LnVybH08L2E+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2VkaXRNb2RlXG4gICAgICAgICAgICA/IDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJyBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VEZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgOiBVbml2ZXJzaXR5LmRlc2NyaXB0aW9uXG4gICAgICAgICAgfVxuICAgICAgICA8L3A+XG4gICAgICAgIHtlZGl0TW9kZSAmJiA8RWRpdFNhdmVCdXR0b24gXG4gICAgICAgICAgICB0b2dnbGVFZGl0TW9kZT17dGhpcy50b2dnbGVFZGl0TW9kZX0gIFxuICAgICAgICAgICAgaWQ9e1VuaXZlcnNpdHkuaWR9IFxuICAgICAgICAgICAgbmFtZT17bmFtZX0gXG4gICAgICAgICAgICB1cmw9e3VybH0gXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259ICBcbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAgIDxVbmRlcnNjb3JlIC8+XG4gICAgICAgIDxoMj5GYWN1bHRpZXM8L2gyPlxuICAgICAgICA8RmFjdWx0aWVzTGlzdCB1bmlJZD17VW5pdmVyc2l0eS5pZH0gLz5cbiAgICAgICAgPFVuZGVyc2NvcmUgLz5cbiAgICAgICAgPFN1Ym1pdEZhY3VsdHkgdW5pSWQ9e1VuaXZlcnNpdHkuaWR9IC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBjb2xvcjogIzAxNzhEOTtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVkaXQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudXJsIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnM7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lLWlucHV0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuICBcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVuaXZlcnNpdHkgPSBncWxgXG4gIHF1ZXJ5IFVuaXZlcnNpdHkoJGlkOiBJRCEpIHtcbiAgICBVbml2ZXJzaXR5KGlkOiAkaWQsICkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIHVybFxuICAgICAgbG9nb1xuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGdldFVuaXZlcnNpdHksIHtcbiAgb3B0aW9uczogb3duUHJvcHMgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiBvd25Qcm9wcy5pZCxcbiAgICB9XG4gIH0pLFxuICBwcm9wczogKHsgZGF0YSB9KSA9PiAoe1xuICAgIGRhdGFcbiAgfSlcbn0pKFVuaXZlcnNpdHkpXG4iXX0= */\n/*@ sourceURL=components/University.js */'
      }));
    }
  }]);

  return University;
}(_react.Component);

var getUniversity = exports.getUniversity = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(getUniversity, {
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
})(University);