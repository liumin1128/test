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

var _Recommend = require('../Recommend');

var _Recommend2 = _interopRequireDefault(_Recommend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/components/Layout/index.js';

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_Container2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_Main2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, children), _react2.default.createElement(_Sider2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_Recommend2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }))));
};