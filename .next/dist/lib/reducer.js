'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getReducer;

var _redux = require('redux');

function getReducer(client) {
  return (0, _redux.combineReducers)({
    apollo: client.reducer()
  });
}