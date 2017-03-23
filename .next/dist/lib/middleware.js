'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMiddleware;

var _redux = require('redux');

function createMiddleware(clientMiddleware) {
  var middleware = (0, _redux.applyMiddleware)(clientMiddleware);
  if (process.browser && window.devToolsExtension) {
    return (0, _redux.compose)(middleware, window.devToolsExtension());
  }
  return middleware;
}