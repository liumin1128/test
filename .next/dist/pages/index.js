'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('_babel-runtime@6.23.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../store');

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _List = require('../components/News/List');

var _List2 = _interopRequireDefault(_List);

var _layout = require('../components/layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var Index = function Index() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement(_layout.Container, null, _react2.default.createElement(_layout.Main, null, _react2.default.createElement(_List2.default, null)), _react2.default.createElement(_layout.Sider, null, 'sider')));
};

Index.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
    var req = _ref.req,
        store = _ref.store;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store.dispatch({
              type: 'news/init'
            });

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = (0, _store.withReduxSaga)(Index);