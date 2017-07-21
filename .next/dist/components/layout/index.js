'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _Sider = require('./Sider');

var _Sider2 = _interopRequireDefault(_Sider);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement(_Header2.default, null), _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_Main2.default, null, children), _react2.default.createElement(_Sider2.default, null, _react2.default.createElement('h1', null, 'Sider'))));
};