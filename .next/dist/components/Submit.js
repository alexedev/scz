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

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/components/Submit.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation createUniversity($name: String!, $url: String!, $description: String ) {\n    createUniversity(name: $name, url: $url, description: $description) {\n      id\n      name\n      url\n      logo\n      description\n      createdAt\n    }\n  }\n'], ['\n  mutation createUniversity($name: String!, $url: String!, $description: String ) {\n    createUniversity(name: $name, url: $url, description: $description) {\n      id\n      name\n      url\n      logo\n      description\n      createdAt\n    }\n  }\n']);

var Submit = function Submit(_ref) {
  var createUniversity = _ref.createUniversity;

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

    createUniversity(name, url, desc);

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
  }, 'Add unversity'), _react2.default.createElement('input', { placeholder: 'name', name: 'name', 'data-jsx': 3318266795,
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
    css: 'form[data-jsx="3318266795"] {border-bottom: 1px solid #ececec;padding-bottom: 20px;text-align: center;}input[data-jsx="3318266795"],button[data-jsx="3318266795"] {margin: 0 auto;}input[data-jsx="3318266795"] {width: 250px;}textarea[data-jsx="3318266795"] {width: 450px;height: 150px;}input[data-jsx="3318266795"],textarea[data-jsx="3318266795"] {padding: 10px 10px 10px 10px;font-family: \'Roboto\', sans;font-size: 20px;}h2[data-jsx="3318266795"] {font-size: 20px;}input[data-jsx="3318266795"] {display: block;margin-bottom: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDa0IsQUFDSiw2QkFDNkIsaUNBQ1oscUJBQ0YsbUJBQ3BCLENBQ2MsNERBQ0UsZUFDaEIsQ0FDTSw4QkFDUSxhQUNkLENBQ1MsaUNBQ0ssYUFDQyxjQUNmLENBQ2dCLDhEQUNjLDZCQUNELDRCQUNaLGdCQUNqQixDQUNHLDJCQUNjLGdCQUNqQixDQUNNLDhCQUNVLGVBQ0ssb0JBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvU3VibWl0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGlha3NleWV1L0RvY3VtZW50cy9kZXYvc2N6Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5cbmNvbnN0IFN1Ym1pdCA9ICh7IGNyZWF0ZVVuaXZlcnNpdHkgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IG5hbWUgPSBlLnRhcmdldC5lbGVtZW50cy5uYW1lLnZhbHVlXG4gICAgbGV0IHVybCA9IGUudGFyZ2V0LmVsZW1lbnRzLnVybC52YWx1ZVxuICAgIGxldCBkZXNjID0gZS50YXJnZXQuZWxlbWVudHMuZGVzY3JpcHRpb24udmFsdWVcblxuICAgIGlmIChuYW1lID09PSAnJyB8fCB1cmwgPT09ICcnKSB7XG4gICAgICBjb25zb2xlLmxvZygnQm90aCBmaWVsZHMgYXJlIHJlcXVpcmVkLicpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBwcmVwZW5kIGh0dHAgaWYgbWlzc2luZyBmcm9tIHVybFxuICAgIGlmICghdXJsLm1hdGNoKC9eW2EtekEtWl0rOlxcL1xcLy8pKSB7XG4gICAgICB1cmwgPSBgaHR0cDovLyR7dXJsfWBcbiAgICB9XG5cbiAgICBjcmVhdGVVbml2ZXJzaXR5KG5hbWUsIHVybCwgZGVzYylcblxuICAgIC8vIHJlc2V0IGZvcm1cbiAgICBlLnRhcmdldC5lbGVtZW50cy5uYW1lLnZhbHVlID0gJydcbiAgICBlLnRhcmdldC5lbGVtZW50cy51cmwudmFsdWUgPSAnJ1xuICAgIGUudGFyZ2V0LmVsZW1lbnRzLmRlc2NyaXB0aW9uLnZhbHVlID0gJydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxoMj5BZGQgdW52ZXJzaXR5PC9oMj5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSduYW1lJyBuYW1lPSduYW1lJyAvPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3VybCcgbmFtZT0ndXJsJyAvPlxuICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9J2Rlc2NyaXB0aW9uJyBuYW1lPSdkZXNjcmlwdGlvbicgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCwgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgY3JlYXRlVW5pdmVyc2l0eSA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlVW5pdmVyc2l0eSgkbmFtZTogU3RyaW5nISwgJHVybDogU3RyaW5nISwgJGRlc2NyaXB0aW9uOiBTdHJpbmcgKSB7XG4gICAgY3JlYXRlVW5pdmVyc2l0eShuYW1lOiAkbmFtZSwgdXJsOiAkdXJsLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgdXJsXG4gICAgICBsb2dvXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgY3JlYXRlZEF0XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoY3JlYXRlVW5pdmVyc2l0eSwge1xuICBwcm9wczogKHsgbXV0YXRlIH0pID0+ICh7XG4gICAgY3JlYXRlVW5pdmVyc2l0eTogKG5hbWUsIHVybCwgZGVzY3JpcHRpb24pID0+IG11dGF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHsgbmFtZSwgdXJsLCBkZXNjcmlwdGlvbiB9LFxuICAgICAgdXBkYXRlUXVlcmllczoge1xuICAgICAgICBhbGxVbml2ZXJzaXRpZXM6IChwcmV2aW91c1Jlc3VsdCwgeyBtdXRhdGlvblJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3VW5pdmVyc2l0eSA9IG11dGF0aW9uUmVzdWx0LmRhdGEuY3JlYXRlVW5pdmVyc2l0eVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgYWxsVW5pdmVyc2l0aWVzOiBbbmV3VW5pdmVyc2l0eSwgLi4ucHJldmlvdXNSZXN1bHQuYWxsVW5pdmVyc2l0aWVzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSkoU3VibWl0KVxuIl19 */\n/*@ sourceURL=components/Submit.js */'
  }));
};

var createUniversity = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(createUniversity, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createUniversity: function createUniversity(name, url, description) {
        return mutate({
          variables: { name: name, url: url, description: description },
          updateQueries: {
            allUniversities: function allUniversities(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newUniversity = mutationResult.data.createUniversity;
              return (0, _assign2.default)({}, previousResult, {
                allUniversities: [newUniversity].concat((0, _toConsumableArray3.default)(previousResult.allUniversities))
              });
            }
          }
        });
      }
    };
  }
})(Submit);