'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = undefined;

var _extends2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('_babel-runtime@6.23.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('_babel-runtime@6.23.0@babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('_next@3.0.1-beta.17@next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactWaypoint = require('react-waypoint');

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

var _fetch = require('../utils/fetch.js');

var _api = require('../constants/api.js');

var _format = require('../utils/format.js');

var _store = require('../store');

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _NewsItem = require('../components/NewsItem');

var _NewsItem2 = _interopRequireDefault(_NewsItem);

var _Loading = require('../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _layout = require('../components/layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/pages/index.js?entry',
    _this3 = undefined;

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.state = {
      title: 'xxx',
      list: []
    };
    _this.loadMore = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var length, params, data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              length = _this.props.list.length + _this.state.list.length;
              params = {
                page: length / 20 + 1
              };
              _context.next = 4;
              return (0, _fetch.request)(_api.GET_NEWS, params);

            case 4:
              data = _context.sent;

              exports.list = list = data.body.result;
              _this.setState({
                list: _this.state.list.concat((0, _format.formatNewsList)(list))
              });

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.props);
      this.props.dispatch({ type: 'test' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$list = this.props.list,
          list = _props$list === undefined ? [] : _props$list;
      var _state$list = this.state.list,
          more = _state$list === undefined ? [] : _state$list;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_layout.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_layout.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, list.concat(more).map(function (i) {
        return _react2.default.createElement(_NewsItem2.default, (0, _extends3.default)({}, i, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }));
      }), _react2.default.createElement(_reactWaypoint2.default, {
        onEnter: this.loadMore,
        onLeave: function onLeave() {
          console.log('onLeave');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_Loading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })))), _react2.default.createElement(_layout.Sider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'sider')));
    }
  }]);

  return Index;
}(_react.Component);

var list = exports.list = [];

Index.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref2) {
    var req = _ref2.req,
        store = _ref2.store;
    var data;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(list.length === 0)) {
              _context2.next = 8;
              break;
            }

            _context2.next = 3;
            return (0, _fetch.request)(_api.GET_NEWS);

          case 3:
            data = _context2.sent;

            exports.list = list = data.body.result;
            console.log('list不存在');
            _context2.next = 9;
            break;

          case 8:
            console.log('list已存在');

          case 9:
            return _context2.abrupt('return', { list: (0, _format.formatNewsList)(list)
              //   const json = await res.json()
            });

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this3);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = (0, _store.withReduxSaga)(Index);