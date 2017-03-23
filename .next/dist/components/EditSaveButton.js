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

var _University = require('./University');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/components/EditSaveButton.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation updateUniversity(\n    $id: ID!, $name: String, \n    $url: String, $description: String\n  ) { \n    updateUniversity(\n      id: $id, \n      name: $name, \n      url: $url,\n      description: $description\n    ) {\n      id\n      name\n      url\n      logo\n      description\n      createdAt\n    }\n  }\n'], ['\n  mutation updateUniversity(\n    $id: ID!, $name: String, \n    $url: String, $description: String\n  ) { \n    updateUniversity(\n      id: $id, \n      name: $name, \n      url: $url,\n      description: $description\n    ) {\n      id\n      name\n      url\n      logo\n      description\n      createdAt\n    }\n  }\n']);

var EditSaveButton = function EditSaveButton(_ref) {
  var handleSave = _ref.handleSave,
      toggleEditMode = _ref.toggleEditMode;

  var saveEdit = function saveEdit() {
    handleSave();
    toggleEditMode();
  };
  return _react2.default.createElement('button', { onClick: saveEdit, 'data-jsx': 1108302620,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Save', _react2.default.createElement(_style2.default, {
    styleId: 1108302620,
    css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRWRpdFNhdmVCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWtCIiwiZmlsZSI6ImNvbXBvbmVudHMvRWRpdFNhdmVCdXR0b24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsaWFrc2V5ZXUvRG9jdW1lbnRzL2Rldi9zY3oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGdldFVuaXZlcnNpdHkgfSBmcm9tICcuL1VuaXZlcnNpdHknO1xuXG5jb25zdCBFZGl0U2F2ZUJ1dHRvbiA9ICh7IGhhbmRsZVNhdmUsIHRvZ2dsZUVkaXRNb2RlIH0pID0+IHtcbiAgY29uc3Qgc2F2ZUVkaXQgPSAoKSA9PiB7XG4gICAgaGFuZGxlU2F2ZSgpO1xuICAgIHRvZ2dsZUVkaXRNb2RlKCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVFZGl0fT5cbiAgICAgIFNhdmVcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLy8gcHV0IGJ1dHRvbiBzdHlsZXMgaGVyZVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IHVwZGF0ZVVuaXZlcnNpdHkgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVVuaXZlcnNpdHkoXG4gICAgJGlkOiBJRCEsICRuYW1lOiBTdHJpbmcsIFxuICAgICR1cmw6IFN0cmluZywgJGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgKSB7IFxuICAgIHVwZGF0ZVVuaXZlcnNpdHkoXG4gICAgICBpZDogJGlkLCBcbiAgICAgIG5hbWU6ICRuYW1lLCBcbiAgICAgIHVybDogJHVybCxcbiAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb25cbiAgICApIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICB1cmxcbiAgICAgIGxvZ29cbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBjcmVhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh1cGRhdGVVbml2ZXJzaXR5LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wczogeyBpZCwgbmFtZSwgdXJsLCBkZXNjcmlwdGlvbiB9LCBtdXRhdGUgfSkgPT4gKHtcbiAgICBoYW5kbGVTYXZlOiAoKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IFxuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdXJsLFxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgfSxcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbe1xuICAgICAgICBxdWVyeTogZ2V0VW5pdmVyc2l0eSxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgaWRcbiAgICAgICAgfSxcbiAgICAgIH1dLFxuICAgIH0pXG4gIH0pXG59KShFZGl0U2F2ZUJ1dHRvbilcbiJdfQ== */\n/*@ sourceURL=components/EditSaveButton.js */'
  }));
};

var updateUniversity = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(updateUniversity, {
  props: function props(_ref2) {
    var _ref2$ownProps = _ref2.ownProps,
        id = _ref2$ownProps.id,
        name = _ref2$ownProps.name,
        url = _ref2$ownProps.url,
        description = _ref2$ownProps.description,
        mutate = _ref2.mutate;
    return {
      handleSave: function handleSave() {
        return mutate({
          variables: {
            id: id,
            name: name,
            url: url,
            description: description
          },
          refetchQueries: [{
            query: _University.getUniversity,
            variables: {
              id: id
            }
          }]
        });
      }
    };
  }
})(EditSaveButton);