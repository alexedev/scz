'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POSTS_PER_PAGE = exports.allUniversities = undefined;

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

var _UniversityPreview = require('../components/UniversityPreview');

var _UniversityPreview2 = _interopRequireDefault(_UniversityPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aliakseyeu/Documents/dev/scz/components/UniList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allUniversities($first: Int!, $skip: Int!) {\n    allUniversities(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      name\n      url\n      logo\n      description\n      createdAt\n    },\n    _allUniversitiesMeta {\n      count\n    }\n  }\n'], ['\n  query allUniversities($first: Int!, $skip: Int!) {\n    allUniversities(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      name\n      url\n      logo\n      description\n      createdAt\n    },\n    _allUniversitiesMeta {\n      count\n    }\n  }\n']);

var UniList = function UniList(_ref) {
  var _ref$data = _ref.data,
      allUniversities = _ref$data.allUniversities,
      loading = _ref$data.loading,
      _allUniversitiesMeta = _ref$data._allUniversitiesMeta,
      loadMore = _ref.loadMore;

  if (loading) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, 'Loading');
  }
  var areMore = allUniversities.length < _allUniversitiesMeta.count;

  return _react2.default.createElement('section', {
    'data-jsx': 1862311667,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, allUniversities.map(function (uni) {
    return _react2.default.createElement(_UniversityPreview2.default, {
      key: uni.id,
      id: uni.id,
      name: uni.name,
      href: { pathname: 'university', query: { id: uni.id } },
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
      lineNumber: 21
    }
  }, _react2.default.createElement('span', {
    'data-jsx': 1862311667,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), 'Show More') : '', _react2.default.createElement(_style2.default, {
    styleId: 1862311667,
    css: 'section[data-jsx="1862311667"] {padding-bottom: 20px;}div[data-jsx="1862311667"] {align-items: center;display:-webkit-flex; display:flex;}span[data-jsx="1862311667"] {font-size: 14px;margin-right: 5px;}ul[data-jsx="1862311667"] {margin: 0;padding: 0;}button[data-jsx="1862311667"] {margin: 0 auto;}button[data-jsx="1862311667"]:before {align-self: center;border-style: solid;border-width: 6px 4px 0 4px;border-color: #ffffff transparent transparent transparent;content: "";height: 0;width: 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmtCLEFBQ0QsZ0NBQ2MscUJBQ3RCLENBQ0ksNEJBQ2lCLG9CQUNOLG1DQUNmLENBQ0ssNkJBQ1ksZ0JBQ0Usa0JBQ25CLENBQ0csMkJBQ1EsVUFDQyxXQUNaLENBQ08sK0JBQ1MsZUFDaEIsQ0FDYyxzQ0FDTSxtQkFDQyxvQkFDUSw0QkFDOEIsMERBQzlDLFlBQ0YsVUFDRCxTQUNWIiwiZmlsZSI6ImNvbXBvbmVudHMvVW5pTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxpYWtzZXlldS9Eb2N1bWVudHMvZGV2L3NjeiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IFVuaXZlcnNpdHlQcmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvVW5pdmVyc2l0eVByZXZpZXcnO1xuXG5jb25zdCBVbmlMaXN0ID0gKHsgZGF0YTogeyBhbGxVbml2ZXJzaXRpZXMsIGxvYWRpbmcsIF9hbGxVbml2ZXJzaXRpZXNNZXRhIH0sIGxvYWRNb3JlIH0pID0+IHtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG4gIH1cbiAgY29uc3QgYXJlTW9yZSA9IGFsbFVuaXZlcnNpdGllcy5sZW5ndGggPCBfYWxsVW5pdmVyc2l0aWVzTWV0YS5jb3VudFxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICB7YWxsVW5pdmVyc2l0aWVzLm1hcCgodW5pKSA9PlxuICAgICAgICA8VW5pdmVyc2l0eVByZXZpZXdcbiAgICAgICAgICBrZXk9e3VuaS5pZH1cbiAgICAgICAgICBpZD17dW5pLmlkfVxuICAgICAgICAgIG5hbWU9e3VuaS5uYW1lfVxuICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6ICd1bml2ZXJzaXR5JywgcXVlcnk6IHsgaWQ6IHVuaS5pZCB9IH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2FyZU1vcmUgPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlKCl9PjxzcGFuIC8+U2hvdyBNb3JlPC9idXR0b24+IDogJyd9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBhbGxVbml2ZXJzaXRpZXMgPSBncWxgXG4gIHF1ZXJ5IGFsbFVuaXZlcnNpdGllcygkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgYWxsVW5pdmVyc2l0aWVzKG9yZGVyQnk6IGNyZWF0ZWRBdF9ERVNDLCBmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIHVybFxuICAgICAgbG9nb1xuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGNyZWF0ZWRBdFxuICAgIH0sXG4gICAgX2FsbFVuaXZlcnNpdGllc01ldGEge1xuICAgICAgY291bnRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFBPU1RTX1BFUl9QQUdFID0gNVxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFVuaXZlcnNpdGllcywge1xuICBvcHRpb25zOiB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBza2lwOiAwLFxuICAgICAgZmlyc3Q6IFBPU1RTX1BFUl9QQUdFXG4gICAgfVxuICB9LFxuICBwcm9wczogKHsgZGF0YSB9KSA9PiAoe1xuICAgIGRhdGEsXG4gICAgbG9hZE1vcmU6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsVW5pdmVyc2l0aWVzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgYWxsVW5pdmVyc2l0aWVzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsVW5pdmVyc2l0aWVzLCAuLi5mZXRjaE1vcmVSZXN1bHQuZGF0YS5hbGxVbml2ZXJzaXRpZXNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KShVbmlMaXN0KVxuIl19 */\n/*@ sourceURL=components/UniList.js */'
  }));
};

var allUniversities = exports.allUniversities = (0, _graphqlTag2.default)(_templateObject);

var POSTS_PER_PAGE = exports.POSTS_PER_PAGE = 5;

exports.default = (0, _reactApollo.graphql)(allUniversities, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMore: function loadMore() {
        return data.fetchMore({
          variables: {
            skip: data.allUniversities.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult.data) {
              return previousResult;
            }
            return (0, _assign2.default)({}, previousResult, {
              allUniversities: [].concat((0, _toConsumableArray3.default)(previousResult.allUniversities), (0, _toConsumableArray3.default)(fetchMoreResult.data.allUniversities))
            });
          }
        });
      }
    };
  }
})(UniList);