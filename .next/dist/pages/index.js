'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('_babel-runtime@6.23.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('_next@3.0.1-beta.17@next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _fetch = require('../utils/fetch.js');

var _api = require('../constants/api.js');

var _format = require('../utils/format.js');

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _NewsItem = require('../components/NewsItem');

var _NewsItem2 = _interopRequireDefault(_NewsItem);

var _layout = require('../components/layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/pages/index.js?entry',
    _this = undefined;

var Page = function Page(_ref) {
  var _ref$list = _ref.list,
      list = _ref$list === undefined ? [] : _ref$list;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_layout.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_layout.Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, list.map(function (i) {
    return _react2.default.createElement(_NewsItem2.default, (0, _extends3.default)({}, i, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }));
  })), _react2.default.createElement(_layout.Sider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'sider')));
};

var list = [];

Page.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
    var req = _ref2.req;
    var data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(list.length === 0)) {
              _context.next = 8;
              break;
            }

            _context.next = 3;
            return (0, _fetch.request)(_api.GET_NEWS);

          case 3:
            data = _context.sent;

            list = data.body.result;
            console.log('list不存在');
            _context.next = 9;
            break;

          case 8:
            console.log('list已存在');

          case 9:
            return _context.abrupt('return', { list: (0, _format.formatNewsList)(list)
              //   const json = await res.json()
            });

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = Page;