'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('_babel-runtime@6.23.0@babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

require('isomorphic-fetch');

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _api = require('../constants/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_es6Promise2.default.polyfill();

exports.default = function (url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  console.log('\u8BBF\u95EE\uFF1A' + _api.APIURL + url);
  var options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: (0, _stringify2.default)((0, _extends3.default)({}, params))
  };
  return fetch(_api.APIURL + url, options).then(function (response) {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).catch(function (err) {
    return { err: err };
  });
};