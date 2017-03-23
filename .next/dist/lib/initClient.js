'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initClient = undefined;

var _apolloClient = require('apollo-client');

var _apolloClient2 = _interopRequireDefault(_apolloClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

function createClient(headers) {
  return new _apolloClient2.default({
    ssrMode: !process.browser,
    dataIdFromObject: function dataIdFromObject(result) {
      return result.id || null;
    },
    networkInterface: (0, _apolloClient.createNetworkInterface)({
      uri: 'https://api.graph.cool/simple/v1/cixo0u3sf0c4l01739bc23wrl',
      opts: {
        credentials: 'same-origin'
        // Pass headers here if your graphql server requires them
      }
    })
  });
}

var initClient = exports.initClient = function initClient(headers) {
  if (!process.browser) {
    return createClient(headers);
  }
  if (!apolloClient) {
    apolloClient = createClient(headers);
  }
  return apolloClient;
};