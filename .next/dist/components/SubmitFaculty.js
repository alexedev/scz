'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/components/SubmitFaculty.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation createFaculty(\n    $name: String!, \n    $url: String!, \n    $description: String, \n    ) {\n      createFaculty(\n        name: $name, \n        url: $url, \n        description: $description, \n        ) {\n          id\n          name\n          url\n          description\n          createdAt\n        }\n  }\n'], ['\n  mutation createFaculty(\n    $name: String!, \n    $url: String!, \n    $description: String, \n    ) {\n      createFaculty(\n        name: $name, \n        url: $url, \n        description: $description, \n        ) {\n          id\n          name\n          url\n          description\n          createdAt\n        }\n  }\n']);

var Submit = function Submit(_ref) {
  var createFaculty = _ref.createFaculty;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    var name = e.target.elements.name.value;
    var url = e.target.elements.url.value;
    var desc = e.target.elements.description.value;

    if (name === '' || url === '') {
      console.log('Both fields are required.');
      return false;
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = 'http://' + url;
    }

    createFaculty(name, url, desc);

    // reset form
    e.target.elements.name.value = '';
    e.target.elements.url.value = '';
    e.target.elements.description.value = '';
  };

  return _react2.default.createElement('div', { className: 'form-container', 'data-jsx': 3318266795,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('form', { onSubmit: handleSubmit, 'data-jsx': 3318266795,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('h2', {
    'data-jsx': 3318266795,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'Add faculty'), _react2.default.createElement('input', { placeholder: 'name', name: 'name', 'data-jsx': 3318266795,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement('input', { placeholder: 'url', name: 'url', 'data-jsx': 3318266795,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), _react2.default.createElement('textarea', { placeholder: 'description', name: 'description', 'data-jsx': 3318266795,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), _react2.default.createElement('button', { type: 'submit', 'data-jsx': 3318266795,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'Send')), _react2.default.createElement(_style2.default, {
    styleId: 3318266795,
    css: 'form[data-jsx="3318266795"] {border-bottom: 1px solid #ececec;padding-bottom: 20px;text-align: center;}input[data-jsx="3318266795"],button[data-jsx="3318266795"] {margin: 0 auto;}input[data-jsx="3318266795"] {width: 250px;}textarea[data-jsx="3318266795"] {width: 450px;height: 150px;}input[data-jsx="3318266795"],textarea[data-jsx="3318266795"] {padding: 10px 10px 10px 10px;font-family: \'Roboto\', sans;font-size: 20px;}h2[data-jsx="3318266795"] {font-size: 20px;}input[data-jsx="3318266795"] {display: block;margin-bottom: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0RmFjdWx0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBQ0osNkJBQzZCLGlDQUNaLHFCQUNGLG1CQUNwQixDQUNjLDREQUNFLGVBQ2hCLENBQ00sOEJBQ1EsYUFDZCxDQUNTLGlDQUNLLGFBQ0MsY0FDZixDQUNnQiw4REFDYyw2QkFDRCw0QkFDWixnQkFDakIsQ0FDRywyQkFDYyxnQkFDakIsQ0FDTSw4QkFDVSxlQUNLLG9CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL1N1Ym1pdEZhY3VsdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsaWFrc2V5ZXUvRG9jdW1lbnRzL2Rldi9zY3oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuY29uc3QgU3VibWl0ID0gKHsgY3JlYXRlRmFjdWx0eSB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgbmFtZSA9IGUudGFyZ2V0LmVsZW1lbnRzLm5hbWUudmFsdWVcbiAgICBsZXQgdXJsID0gZS50YXJnZXQuZWxlbWVudHMudXJsLnZhbHVlXG4gICAgbGV0IGRlc2MgPSBlLnRhcmdldC5lbGVtZW50cy5kZXNjcmlwdGlvbi52YWx1ZVxuXG4gICAgaWYgKG5hbWUgPT09ICcnIHx8IHVybCA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdCb3RoIGZpZWxkcyBhcmUgcmVxdWlyZWQuJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIHByZXBlbmQgaHR0cCBpZiBtaXNzaW5nIGZyb20gdXJsXG4gICAgaWYgKCF1cmwubWF0Y2goL15bYS16QS1aXSs6XFwvXFwvLykpIHtcbiAgICAgIHVybCA9IGBodHRwOi8vJHt1cmx9YFxuICAgIH1cblxuICAgIGNyZWF0ZUZhY3VsdHkobmFtZSwgdXJsLCBkZXNjKVxuXG4gICAgLy8gcmVzZXQgZm9ybVxuICAgIGUudGFyZ2V0LmVsZW1lbnRzLm5hbWUudmFsdWUgPSAnJ1xuICAgIGUudGFyZ2V0LmVsZW1lbnRzLnVybC52YWx1ZSA9ICcnXG4gICAgZS50YXJnZXQuZWxlbWVudHMuZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGgyPkFkZCBmYWN1bHR5PC9oMj5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSduYW1lJyBuYW1lPSduYW1lJyAvPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3VybCcgbmFtZT0ndXJsJyAvPlxuICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9J2Rlc2NyaXB0aW9uJyBuYW1lPSdkZXNjcmlwdGlvbicgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCwgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgY3JlYXRlRmFjdWx0eSA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlRmFjdWx0eShcbiAgICAkbmFtZTogU3RyaW5nISwgXG4gICAgJHVybDogU3RyaW5nISwgXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmcsIFxuICAgICkge1xuICAgICAgY3JlYXRlRmFjdWx0eShcbiAgICAgICAgbmFtZTogJG5hbWUsIFxuICAgICAgICB1cmw6ICR1cmwsIFxuICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLCBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgdXJsXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoY3JlYXRlRmFjdWx0eSwge1xuICBwcm9wczogKHsgb3duUHJvcHMsIG11dGF0ZSB9KSA9PiAoe1xuICAgIGNyZWF0ZUZhY3VsdHk6IChuYW1lLCB1cmwsIGRlc2NyaXB0aW9uLCB1bmlJZCkgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyBuYW1lLCB1cmwsIGRlc2NyaXB0aW9uLCB1bmlJZDogb3duUHJvcHMudW5pSWQgfSxcbiAgICAgIHVwZGF0ZVF1ZXJpZXM6IHtcbiAgICAgICAgYWxsRmFjdWx0aWVzOiAocHJldmlvdXNSZXN1bHQsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0ZhY3VsdHkgPSBtdXRhdGlvblJlc3VsdC5kYXRhLmNyZWF0ZUZhY3VsdHlcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIGFsbEZhY3VsdGllczogW25ld0ZhY3VsdHksIC4uLnByZXZpb3VzUmVzdWx0LmFsbEZhY3VsdGllc11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFN1Ym1pdClcbiJdfQ== */\n/*@ sourceURL=components/SubmitFaculty.js */'
  }));
};

var createFaculty = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(createFaculty, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      createFaculty: function createFaculty(name, url, description, uniId) {
        return mutate({
          variables: { name: name, url: url, description: description, uniId: ownProps.uniId },
          updateQueries: {
            allFaculties: function allFaculties(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newFaculty = mutationResult.data.createFaculty;
              return (0, _assign2.default)({}, previousResult, {
                allFaculties: [newFaculty].concat((0, _toConsumableArray3.default)(previousResult.allFaculties))
              });
            }
          }
        });
      }
    };
  }
})(Submit);