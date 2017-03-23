'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = require('react-apollo');

var _FacultiesList = require('./FacultiesList');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/components/DeleteFaculty.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation deleteFaculty($id: ID!) {\n    deleteFaculty(id: $id) {\n      id\n    }\n  }\n'], ['\n  mutation deleteFaculty($id: ID!) {\n    deleteFaculty(id: $id) {\n      id\n    }\n  }\n']);

function DeleteFaculty(_ref) {
  var handleDelete = _ref.handleDelete;

  return _react2.default.createElement('button', { onClick: handleDelete, 'data-jsx': 2795185985,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, '\xA0', _react2.default.createElement(_style2.default, {
    styleId: 2795185985,
    css: 'button[data-jsx="2795185985"] {float: right;display: inline-block;padding: 0;background-color: red;}button[data-jsx="2795185985"]:active {background-color: transparent;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGVsZXRlRmFjdWx0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTa0IsQUFDRiwrQkFDTyxhQUNTLHNCQUNYLFdBQ1csc0JBQ3ZCLENBQ2Msc0NBQ2lCLDhCQUMvQiIsImZpbGUiOiJjb21wb25lbnRzL0RlbGV0ZUZhY3VsdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsaWFrc2V5ZXUvRG9jdW1lbnRzL2Rldi9zY3oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGFsbEZhY3VsdGllcywgUE9TVFNfUEVSX1BBR0UgfSBmcm9tICcuL0ZhY3VsdGllc0xpc3QnO1xuXG5mdW5jdGlvbiBEZWxldGVGYWN1bHR5ICh7IGhhbmRsZURlbGV0ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PlxuICAgICAgJm5ic3A7XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IGRlbGV0ZUZhY3VsdHkgPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUZhY3VsdHkoJGlkOiBJRCEpIHtcbiAgICBkZWxldGVGYWN1bHR5KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoZGVsZXRlRmFjdWx0eSwge1xuICBwcm9wczogKHsgb3duUHJvcHMsIG11dGF0ZSB9KSA9PiAoe1xuICAgIGhhbmRsZURlbGV0ZTogKCkgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyBpZDogb3duUHJvcHMuaWQgfSxcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbe1xuICAgICAgICBxdWVyeTogYWxsRmFjdWx0aWVzLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiAwLFxuICAgICAgICAgIGZpcnN0OiBQT1NUU19QRVJfUEFHRSxcbiAgICAgICAgICB1bmlJZDogb3duUHJvcHMudW5pSWQsXG4gICAgICAgIH0sXG4gICAgICB9XSxcbiAgICB9KVxuICB9KVxufSkoRGVsZXRlRmFjdWx0eSlcbiJdfQ== */\n/*@ sourceURL=components/DeleteFaculty.js */'
  }));
}

var deleteFaculty = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(deleteFaculty, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      handleDelete: function handleDelete() {
        return mutate({
          variables: { id: ownProps.id },
          refetchQueries: [{
            query: _FacultiesList.allFaculties,
            variables: {
              skip: 0,
              first: _FacultiesList.POSTS_PER_PAGE,
              uniId: ownProps.uniId
            }
          }]
        });
      }
    };
  }
})(DeleteFaculty);