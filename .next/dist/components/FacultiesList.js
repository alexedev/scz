'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POSTS_PER_PAGE = exports.allFaculties = undefined;

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

var _FacultyPreview = require('../components/FacultyPreview');

var _FacultyPreview2 = _interopRequireDefault(_FacultyPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/components/FacultiesList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allFaculties($uniId: ID!, $first: Int!, $skip: Int!) {\n    allFaculties(filter: {university: {id: $uniId}}, orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      name\n      url\n      description\n      createdAt\n    },\n    _allFacultiesMeta {\n      count\n    }\n  }\n'], ['\n  query allFaculties($uniId: ID!, $first: Int!, $skip: Int!) {\n    allFaculties(filter: {university: {id: $uniId}}, orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      name\n      url\n      description\n      createdAt\n    },\n    _allFacultiesMeta {\n      count\n    }\n  }\n']);

var FacultiesList = function FacultiesList(_ref) {
  var _ref$data = _ref.data,
      allFaculties = _ref$data.allFaculties,
      loading = _ref$data.loading,
      _allFacultiesMeta = _ref$data._allFacultiesMeta,
      loadMore = _ref.loadMore,
      uniId = _ref.uniId;

  if (loading) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, 'Loading');
  }
  var areMore = allFaculties.length < _allFacultiesMeta.count;

  return _react2.default.createElement('section', {
    'data-jsx': 1862311667,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, allFaculties.map(function (faculty) {
    return _react2.default.createElement(_FacultyPreview2.default, {
      key: faculty.id,
      id: faculty.id,
      uniId: uniId,
      name: faculty.name,
      href: { pathname: 'faculty', query: { id: faculty.id } },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    });
  }), areMore ? _react2.default.createElement('button', { onClick: function onClick() {
      return loadMore();
    }, 'data-jsx': 1862311667,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('span', {
    'data-jsx': 1862311667,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), 'Show More') : '', _react2.default.createElement(_style2.default, {
    styleId: 1862311667,
    css: 'section[data-jsx="1862311667"] {padding-bottom: 20px;}div[data-jsx="1862311667"] {align-items: center;display:-webkit-flex; display:flex;}span[data-jsx="1862311667"] {font-size: 14px;margin-right: 5px;}ul[data-jsx="1862311667"] {margin: 0;padding: 0;}button[data-jsx="1862311667"] {margin: 0 auto;}button[data-jsx="1862311667"]:before {align-self: center;border-style: solid;border-width: 6px 4px 0 4px;border-color: #ffffff transparent transparent transparent;content: "";height: 0;width: 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmFjdWx0aWVzTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCLEFBQ0QsZ0NBQ2MscUJBQ3RCLENBQ0ksNEJBQ2lCLG9CQUNOLG1DQUNmLENBQ0ssNkJBQ1ksZ0JBQ0Usa0JBQ25CLENBQ0csMkJBQ1EsVUFDQyxXQUNaLENBQ08sK0JBQ1MsZUFDaEIsQ0FDYyxzQ0FDTSxtQkFDQyxvQkFDUSw0QkFDOEIsMERBQzlDLFlBQ0YsVUFDRCxTQUNWIiwiZmlsZSI6ImNvbXBvbmVudHMvRmFjdWx0aWVzTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxpYWtzZXlldS9Eb2N1bWVudHMvZGV2L3NjeiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IEZhY3VsdHlQcmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvRmFjdWx0eVByZXZpZXcnO1xuXG5jb25zdCBGYWN1bHRpZXNMaXN0ID0gKHsgZGF0YTogeyBhbGxGYWN1bHRpZXMsIGxvYWRpbmcsIF9hbGxGYWN1bHRpZXNNZXRhIH0sIGxvYWRNb3JlLCB1bmlJZCB9KSA9PiB7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICB9XG4gIGNvbnN0IGFyZU1vcmUgPSBhbGxGYWN1bHRpZXMubGVuZ3RoIDwgX2FsbEZhY3VsdGllc01ldGEuY291bnRcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAge2FsbEZhY3VsdGllcy5tYXAoKGZhY3VsdHkpID0+XG4gICAgICAgIDxGYWN1bHR5UHJldmlld1xuICAgICAgICAgIGtleT17ZmFjdWx0eS5pZH1cbiAgICAgICAgICBpZD17ZmFjdWx0eS5pZH1cbiAgICAgICAgICB1bmlJZD17dW5pSWR9XG4gICAgICAgICAgbmFtZT17ZmFjdWx0eS5uYW1lfVxuICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6ICdmYWN1bHR5JywgcXVlcnk6IHsgaWQ6IGZhY3VsdHkuaWQgfSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHthcmVNb3JlID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZSgpfT48c3BhbiAvPlNob3cgTW9yZTwvYnV0dG9uPiA6ICcnfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBkaXYge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggNHB4IDAgNHB4O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgYWxsRmFjdWx0aWVzID0gZ3FsYFxuICBxdWVyeSBhbGxGYWN1bHRpZXMoJHVuaUlkOiBJRCEsICRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICBhbGxGYWN1bHRpZXMoZmlsdGVyOiB7dW5pdmVyc2l0eToge2lkOiAkdW5pSWR9fSwgb3JkZXJCeTogY3JlYXRlZEF0X0RFU0MsIGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgdXJsXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgY3JlYXRlZEF0XG4gICAgfSxcbiAgICBfYWxsRmFjdWx0aWVzTWV0YSB7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgUE9TVFNfUEVSX1BBR0UgPSA1XG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsRmFjdWx0aWVzLCB7XG4gIG9wdGlvbnM6IG93blByb3BzID0+ICh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBza2lwOiAwLFxuICAgICAgZmlyc3Q6IFBPU1RTX1BFUl9QQUdFLFxuICAgICAgdW5pSWQ6IG93blByb3BzLnVuaUlkLFxuICAgIH1cbiAgfSksXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZTogKCkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEuZmV0Y2hNb3JlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgc2tpcDogZGF0YS5hbGxGYWN1bHRpZXMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICBhbGxGYWN1bHRpZXM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxGYWN1bHRpZXMsIC4uLmZldGNoTW9yZVJlc3VsdC5kYXRhLmFsbEZhY3VsdGllc11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pKEZhY3VsdGllc0xpc3QpXG4iXX0= */\n/*@ sourceURL=components/FacultiesList.js */'
  }));
};

var allFaculties = exports.allFaculties = (0, _graphqlTag2.default)(_templateObject);

var POSTS_PER_PAGE = exports.POSTS_PER_PAGE = 5;

exports.default = (0, _reactApollo.graphql)(allFaculties, {
  options: function options(ownProps) {
    return {
      variables: {
        skip: 0,
        first: POSTS_PER_PAGE,
        uniId: ownProps.uniId
      }
    };
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMore: function loadMore() {
        return data.fetchMore({
          variables: {
            skip: data.allFaculties.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult.data) {
              return previousResult;
            }
            return (0, _assign2.default)({}, previousResult, {
              allFaculties: [].concat((0, _toConsumableArray3.default)(previousResult.allFaculties), (0, _toConsumableArray3.default)(fetchMoreResult.data.allFaculties))
            });
          }
        });
      }
    };
  }
})(FacultiesList);