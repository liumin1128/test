
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// 新闻相关
var GET_NEWS = exports.GET_NEWS = '/news/search';
var GET_NEWSTYPES = exports.GET_NEWSTYPES = '/news/findType';
var ADD_NEWS = exports.ADD_NEWS = '/news/add';
var UPDATE_NEWS = exports.UPDATE_NEWS = '/news/update';
var DELETE_NEWS = exports.DELETE_NEWS = '/news/delete';

// 全局api地址
var APIURL = exports.APIURL = 'https://data.huarenhouse.com';

// 七牛自定义域名
var QINIUURL = exports.QINIUURL = 'imgs.huarenhouse.com';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/constants/api.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/constants/api.js"); } } })();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(571);


/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = undefined;

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(74);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(75);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(60);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(61);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(62);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(549);

var _link2 = _interopRequireDefault(_link);

var _reactWaypoint = __webpack_require__(582);

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

var _fetch = __webpack_require__(598);

var _api = __webpack_require__(556);

var _format = __webpack_require__(603);

var _store = __webpack_require__(605);

var _Head = __webpack_require__(644);

var _Head2 = _interopRequireDefault(_Head);

var _NewsItem = __webpack_require__(645);

var _NewsItem2 = _interopRequireDefault(_NewsItem);

var _Loading = __webpack_require__(646);

var _Loading2 = _interopRequireDefault(_Loading);

var _layout = __webpack_require__(647);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.request = undefined;

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(550);

var _stringify2 = _interopRequireDefault(_stringify);

__webpack_require__(599);

var _es6Promise = __webpack_require__(601);

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _api = __webpack_require__(556);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_es6Promise2.default.polyfill();

var request = exports.request = function request(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    console.log('访问：' + _api.APIURL + url);
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
            throw new Error("Bad response from server");
        }
        return response.json();
    }).catch(function (err) {
        return { err: err };
    });
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/utils/fetch.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/utils/fetch.js"); } } })();

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNewsList = undefined;

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _common = __webpack_require__(604);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatNewsList = exports.formatNewsList = function formatNewsList(data) {
  return data.map(function (i, index) {
    return (0, _extends3.default)({}, i, {
      key: i.id || index,
      createdAt: (0, _common.preatyTime)(i.createdAt) || undefined,
      updatedAt: (0, _common.preatyTime)(i.updatedAt) || undefined,
      type: i.newsType ? i.newsType.typeName : undefined,
      cover: i.photos ? i.photos[0] : undefined,
      content: (0, _common.getStrless)(i.content, 60, 3)
    });
  });
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/utils/format.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/utils/format.js"); } } })();

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkData = exports.notEmpty = exports.trimSpace = exports.getWinHeight = exports.getSmallImg = exports.getStrless = exports.preatyTime = undefined;
exports.getScrollTop = getScrollTop;
exports.parseQueryString = parseQueryString;

var _promise = __webpack_require__(41);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preatyTime = exports.preatyTime = function preatyTime(str) {
  var data = new Date(str);
  if (data) {
    return data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
  } else {
    return '未知';
  }
};

var getStrless = exports.getStrless = function getStrless(ostr) {
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var str = ostr || '';
  if (str.length > end) {
    return str.substring(start, end) + '...';
  } else {
    return str;
  }
};

var getSmallImg = exports.getSmallImg = function getSmallImg(url, propsX, propsY) {
  var x = propsX || 200;
  var y = propsY || 200;
  return url + '?imageMogr2/thumbnail/!' + x + 'x' + y + 'r/gravity/Center/crop/' + x + 'x' + y;
};

var getWinHeight = exports.getWinHeight = function getWinHeight() {
  var winHeight = 0;
  if (window.innerHeight) {
    winHeight = window.innerHeight;
  } else if (document.body && document.body.clientHeight) {
    winHeight = document.body.clientHeight;
  }
  if (document.documentElement && document.documentElement.clientHeight) {
    winHeight = document.documentElement.clientHeight;
  }
  return winHeight;
};

function getScrollTop() {
  var scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}

// 去除数组中的空值
var trimSpace = exports.trimSpace = function trimSpace(array) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === '' || typeof array[i] === 'undefined') {
      array.splice(i, 1);
      i -= 1;
    }
  }
  return array;
};

var notEmpty = exports.notEmpty = function notEmpty(value, label) {
  return new _promise2.default(function (resolve, reject) {
    if (!value || value === '') {
      reject('' + label);
    } else {
      resolve(value);
    }
  });
};

var checkData = exports.checkData = function checkData(_ref) {
  var data = _ref.data,
      cb = _ref.cb;

  return new _promise2.default(function (resolve, reject) {
    if (data && data.code === 200) {
      resolve();
    }if (cb && cb(data.code)) {
      resolve();
    } else {
      reject({ msg: '操作异常' });
    }
  });
};

function parseQueryString(url) {
  var str = url.split('?')[1];
  var items = str.split('&');
  var result = {};
  var arr = void 0;
  for (var i = 0; i < items.length; i += 1) {
    arr = items[i].split('=');
    result[arr[0]] = arr[1];
  }
  return result;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/utils/common.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/utils/common.js"); } } })();

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;
exports.withReduxSaga = withReduxSaga;

var _redux = __webpack_require__(541);

var _reduxDevtoolsExtension = __webpack_require__(620);

var _nextReduxWrapper = __webpack_require__(621);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = __webpack_require__(634);

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reduxSaga = __webpack_require__(546);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = __webpack_require__(640);

var _reducers2 = _interopRequireDefault(_reducers);

var _effects = __webpack_require__(643);

var _effects2 = _interopRequireDefault(_effects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _reducers.exampleInitialState;

  var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(sagaMiddleware)));
  store.sagaTask = sagaMiddleware.run(_effects2.default);
  return store;
}

function withReduxSaga(BaseComponent) {
  return (0, _nextReduxWrapper2.default)(configureStore)((0, _nextReduxSaga2.default)(BaseComponent));
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/store/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/store/index.js"); } } })();

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(541);

var _common = __webpack_require__(641);

var _common2 = _interopRequireDefault(_common);

var _news = __webpack_require__(642);

var _news2 = _interopRequireDefault(_news);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  common: _common2.default,
  news: _news2.default
});

exports.default = reducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/store/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/store/reducers/index.js"); } } })();

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
  scrollHeight: 0
};
function common() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case 'common/save':
      return (0, _extends3.default)({}, state, action.payload);
    default:
      return (0, _extends3.default)({}, state);
  }
}

exports.default = common;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/store/reducers/common.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/store/reducers/common.js"); } } })();

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
  list: [],
  detail: {}
};
function news() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case 'news/save':
      return (0, _extends3.default)({}, state, action.payload);
    default:
      return (0, _extends3.default)({}, state);
  }
}

exports.default = news;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/store/reducers/news.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/store/reducers/news.js"); } } })();

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(74);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reduxSaga = __webpack_require__(546);

var _effects = __webpack_require__(569);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [runClockSaga, test, rootSaga].map(_regenerator2.default.mark);

function runClockSaga() {
  return _regenerator2.default.wrap(function runClockSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.take)(actionTypes.START_CLOCK);

        case 2:
          if (false) {
            _context.next = 9;
            break;
          }

          _context.next = 5;
          return (0, _effects.put)(tickClock(false));

        case 5:
          _context.next = 7;
          return (0, _effects.call)(_reduxSaga.delay, 800);

        case 7:
          _context.next = 2;
          break;

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function test() {
  return _regenerator2.default.wrap(function test$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.take)('test2');

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.all)([(0, _effects.takeLatest)('test', test)]);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

exports.default = rootSaga;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/store/effects/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/store/effects/index.js"); } } })();

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(510);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/components/Head/index.js';

exports.default = function (_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? '华人生活网' : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === undefined ? '全美最大华人社区' : _ref$description;
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('meta', { charset: 'UTF-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, title), _react2.default.createElement('meta', { name: 'description', content: description, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { rel: 'icon', sizes: '192x192', href: '/static/touch-icon.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('link', { rel: 'apple-touch-icon', href: '/static/touch-icon.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('link', { rel: 'mask-icon', href: '/static/favicon-mask.svg', color: '#49B882', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { rel: 'icon', href: '/static/favicon.ico', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, '\n        body {\n          background-color: #fafbfc;\n          font-weight: 400;\n          -webkit-font-smoothing: antialiased;\n        }\n\n        a,body {\n          color: #292525;\n          font-size: 16px;\n        }\n\n\n        a {\n          text-decoration: none\n        }\n\n        body,h1,h2,h3,h4,h5,h6{\n          margin: 0;\n          padding: 0;\n        }\n\n        html {\n          font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular, \'Hiragino Sans GB\', \'Microsoft Yahei\', Arial, sans-serif\n        }\n\n      '));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/Head/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/Head/index.js"); } } })();

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(548);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(549);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/liumin/Desktop/Git/ssr/components/NewsItem/index.js";

exports.default = function (_ref) {
  var title = _ref.title,
      content = _ref.content,
      type = _ref.type,
      cover = _ref.cover,
      readCount = _ref.readCount,
      commentCount = _ref.commentCount,
      goToUrl = _ref.goToUrl,
      id = _ref.id;
  return _react2.default.createElement(_link2.default, { href: "/news/detail?id=" + id, __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("div", { className: "item", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("img", { className: "cover", src: cover, alt: "", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }), _react2.default.createElement("div", { className: "box", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("h3", { className: "title", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, title), _react2.default.createElement("summary", { className: "desc", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, content), _react2.default.createElement("footer", { className: "meta", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("div", { className: "source", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement("span", {
    "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement("div", { className: "actions", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement("span", { className: "like", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("img", { className: "icon", src: "../../static/images/like.svg", alt: "", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), readCount), _react2.default.createElement("span", { className: "comment", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("img", { className: "icon", src: "../../static/images/comment.svg", alt: "", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), readCount)))), _react2.default.createElement(_style2.default, {
    styleId: 2834051166,
    css: ".item[data-jsx=\"2834051166\"]{background:#fff;margin-bottom:16px;margin:16px 0;box-shadow:0 1px 3px rgba(46,61,73,.08);border:1px solid #dbe2e8;border-width:1px 0 1px 0}.cover[data-jsx=\"2834051166\"]{width:100%;height:240px;background-position:50% 50%;background-repeat:no-repeat;background-size:100% 100%}.box[data-jsx=\"2834051166\"]{padding:20px}.title[data-jsx=\"2834051166\"]{font-size:20px;line-height:1.4;margin:0 0 20px;font-family:-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,Microsoft YaHei,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,Arial,sans-serif}.desc[data-jsx=\"2834051166\"]{font-size:14px;line-height:1.85;color:#4a4a4a}.meta[data-jsx=\"2834051166\"]{color:#9b9b9b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:22px;font-size:14px}.actions[data-jsx=\"2834051166\"],.like[data-jsx=\"2834051166\"],.comment[data-jsx=\"2834051166\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.comment[data-jsx=\"2834051166\"]{margin-left:20px}.icon[data-jsx=\"2834051166\"]{width:14px;height:14px;margin-right:4px}@media (min-width:78rem){.item[data-jsx=\"2834051166\"]{border-radius:3px}.title[data-jsx=\"2834051166\"]{font-size:24px;line-height:1.5}.desc[data-jsx=\"2834051166\"]{color:#4a4a4a;line-height:1.625;font-size:16px;margin:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3c0l0ZW0vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JjLEFBR3VCLEFBRUwsQUFDRSxBQUVFLEFBRUEsQUFDRCxBQUdELEFBQ0ksQUFDTixBQUdTLEFBQ0gsQUFDRCxZQWhCZSxBQVdELEVBVlosQ0FLZ0IsQUFVUyxDQWJMLEFBRUMsQUFVRyxDQWpCQSxDQVlwQixDQUlLLE1BSDJCLENBWFksT0FHTCxBQVlaLENBVlcsQUFXTyxHQWxCSixNQWFKLE1BTk0sQ0FGbUssQUFhL0ksRUFsQnlCLEdBRVQsS0FnQlQsa0JBUHJELE1BVCtGLFNBRlEsQUFRdkUsa0JBTm9FLFFBRm1DLDBCQUFLLDhCQVd2SSxvQ0FMOUMsYUFFbUcsaUdBQXVCLGlCQUFzQixnQkFDaEoiLCJmaWxlIjoiY29tcG9uZW50cy9OZXdzSXRlbS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGl1bWluL0Rlc2t0b3AvR2l0L3NzciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKHsgdGl0bGUsIGNvbnRlbnQsIHR5cGUsIGNvdmVyLCByZWFkQ291bnQsIGNvbW1lbnRDb3VudCwgZ29Ub1VybCwgaWQgfSkgPT4gPExpbmsgaHJlZj17XCIvbmV3cy9kZXRhaWw/aWQ9XCIraWR9PjxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiID5cbiAgPGltZyBjbGFzc05hbWU9XCJjb3ZlclwiIHNyYz17Y292ZXJ9IGFsdD1cIlwiLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICA8c3VtbWFyeSBjbGFzc05hbWU9XCJkZXNjXCI+e2NvbnRlbnR9PC9zdW1tYXJ5PlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZVwiPjwvZGl2PlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xpa2Uuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NvbW1lbnQuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuaXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNDYsNjEsNzMsLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmUyZTg7XG4gICAgICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAwO1xuICAgIH1cblxuICAgIC5jb3ZlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIH1cbiAgICAuYm94IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFBpbmdGYW5nIFNDLEhpcmFnaW5vIFNhbnMgR0IsTWljcm9zb2Z0IFlhSGVpLGhlbHZldGljYSBuZXVlLGhlbHZldGljYSx1YnVudHUscm9ib3RvLG5vdG8sc2Vnb2UgdWksQXJpYWwsc2Fucy1zZXJpZjtcblxuICAgIH1cbiAgICAuZGVzYyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS44NTtcbiAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgIH1cbiAgICAubWV0YSB7XG4gICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIH1cblxuICAgIC5hY3Rpb25zLCAubGlrZSwgLmNvbW1lbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb21tZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICB3aWR0aDogMTRweDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3OHJlbSkge1xuICAgICAgLml0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG4gICAgICAuZGVzYyB7XG4gICAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42MjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICBgfTwvc3R5bGU+XG48L2Rpdj48L0xpbms+XG4iXX0= */\n/*@ sourceURL=components/NewsItem/index.js */"
  })));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/NewsItem/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/NewsItem/index.js"); } } })();

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(548);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/liumin/Desktop/Git/ssr/components/Loading/index.js";

exports.default = function () {
  return _react2.default.createElement("div", { className: "loading", "data-jsx": 283423548,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    }
  }, _react2.default.createElement("img", { className: "img", src: "../../static/images/loading.svg", alt: "", "data-jsx": 283423548,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }), "\u52AA\u529B\u52A0\u8F7D\u4E2D...", _react2.default.createElement(_style2.default, {
    styleId: 283423548,
    css: ".loading{padding:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;color:rgba(0, 0, 0, 0.3)}@-webkit-keyframes turn{from{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg)}to{-webkit-transform:rotateZ(720deg);-ms-transform:rotateZ(720deg);transform:rotateZ(720deg)}}@keyframes turn{from{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg)}to{-webkit-transform:rotateZ(720deg);-ms-transform:rotateZ(720deg);transform:rotateZ(720deg)}}.img{max-width:12px;opacity:0.3;-webkit-animation:2s infinite turn;animation:2s infinite turn;margin-right:10px;-webkit-transition:1s;transition:1s}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9hZGluZy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHcUIsQUFHb0IsQUFFYSxBQUNFLEFBQ2IsY0FKa0IsRUFJQyxhQUFrQywwREFGbkMsSUFFNEQsQ0FKOUIsQ0FHNUIsaUJBQytFLHNDQUFLLCtDQUo5QixpR0FBc0IsZ0JBQWdDLDBCQUFLIiwiZmlsZSI6ImNvbXBvbmVudHMvTG9hZGluZy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGl1bWluL0Rlc2t0b3AvR2l0L3NzciIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICA8aW1nIGNsYXNzTmFtZT1cImltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbG9hZGluZy5zdmdcIiBhbHQ9XCJcIiAvPlxuICDliqrlipvliqDovb3kuK0uLi5cbiAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAubG9hZGluZyB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgdHVybiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNzIwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEycHg7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICBhbmltYXRpb246IDJzIGluZmluaXRlIHR1cm47XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICB9XG4gIGB9PC9zdHlsZT5cbjwvZGl2PlxuIl19 */\n/*@ sourceURL=components/Loading/index.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/Loading/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/Loading/index.js"); } } })();

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sider = exports.Main = exports.Container = undefined;

var _style = __webpack_require__(548);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/liumin/Desktop/Git/ssr/components/layout/index.js";
var Container = exports.Container = function Container(_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", {
    "data-jsx": 2130651328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, _react2.default.createElement("div", { className: "header", "data-jsx": 2130651328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("h1", {
    "data-jsx": 2130651328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "header")), _react2.default.createElement("div", { className: "container", "data-jsx": 2130651328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("div", { className: "row", "data-jsx": 2130651328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, children)), _react2.default.createElement(_style2.default, {
    styleId: 2130651328,
    css: ".container{margin:0 auto}@media (min-width:48rem){.container{max-width:1500px}.row{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.row div{position:relative}}@media (min-width:78rem){.container{max-width:2400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.main{width:100% * 5/7}.sider{width:100% * 2/7}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVV1QixBQUd1QixBQUdLLEFBQ04sQUFDTyxBQUdELEFBQ0UsQUFDRixBQUVBLFlBUmtCLEdBSmhCLEdBR08sQUFLZSxBQUVmLEFBRUEsQ0FQQyxxREFJQyxrQkFMd0MsTUFJRyx3RUFBUyxHQUpIIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9saXVtaW4vRGVza3RvcC9HaXQvc3NyIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPGgxPmhlYWRlcjwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSl7XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1heC13aWR0aDogMTUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAucm93IGRpdiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3OHJlbSkge1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDI0MDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgKiA1Lzc7XG4gICAgICAgIH1cblxuICAgICAgICAuc2lkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlICogMi83O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IFNpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cbiJdfQ== */\n/*@ sourceURL=components/layout/index.js */"
  }));
};

var Main = exports.Main = function Main(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement("div", { className: "main", __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, children);
};

var Sider = exports.Sider = function Sider(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement("div", { className: "sider", __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, children);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/layout/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/layout/index.js"); } } })();

/***/ })

},[570]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnN0YW50cy9hcGkuanM/M2RlYmU2ZSIsIndlYnBhY2s6Ly8vLi9wYWdlcz8zZGViZTZlIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoLmpzPzNkZWJlNmUiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKT8zZGViZTZlIiwid2VicGFjazovLy8uL3V0aWxzL2Zvcm1hdC5qcz8zZGViZTZlIiwid2VicGFjazovLy8uL3V0aWxzL2NvbW1vbi5qcz8zZGViZTZlIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzNkZWJlNmUiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanM/M2RlYmU2ZSIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9jb21tb24uanM/M2RlYmU2ZSIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9uZXdzLmpzPzNkZWJlNmUiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvZWZmZWN0cy9pbmRleC5qcz8zZGViZTZlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZC9pbmRleC5qcz8zZGViZTZlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3c0l0ZW0vaW5kZXguanM/M2RlYmU2ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcvaW5kZXguanM/M2RlYmU2ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcz8zZGViZTZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOaWsOmXu+ebuOWFs1xuZXhwb3J0IGNvbnN0IEdFVF9ORVdTID0gJy9uZXdzL3NlYXJjaCc7XG5leHBvcnQgY29uc3QgR0VUX05FV1NUWVBFUyA9ICcvbmV3cy9maW5kVHlwZSc7XG5leHBvcnQgY29uc3QgQUREX05FV1MgPSAnL25ld3MvYWRkJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTkVXUyA9ICcvbmV3cy91cGRhdGUnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ORVdTID0gJy9uZXdzL2RlbGV0ZSc7XG5cbi8vIOWFqOWxgGFwaeWcsOWdgFxuZXhwb3J0IGNvbnN0IEFQSVVSTCA9ICdodHRwczovL2RhdGEuaHVhcmVuaG91c2UuY29tJztcblxuLy8g5LiD54mb6Ieq5a6a5LmJ5Z+f5ZCNXG5leHBvcnQgY29uc3QgUUlOSVVVUkwgPSAnaW1ncy5odWFyZW5ob3VzZS5jb20nO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnN0YW50cy9hcGkuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgV2F5cG9pbnQgZnJvbSAncmVhY3Qtd2F5cG9pbnQnO1xuXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2guanMnXG5pbXBvcnQgeyBHRVRfTkVXUyB9IGZyb20gJy4uL2NvbnN0YW50cy9hcGkuanMnXG5pbXBvcnQgeyBmb3JtYXROZXdzTGlzdCB9IGZyb20gJy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHdpdGhSZWR1eFNhZ2EgfSBmcm9tICcuLi9zdG9yZSdcblxuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJ1xuaW1wb3J0IE5ld3NJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3c0l0ZW0nXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnXG5pbXBvcnQgeyBDb250YWluZXIsIE1haW4sIFNpZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6ICd4eHgnLFxuICAgICAgbGlzdDogW11cbiAgICB9XG4gICAgdGhpcy5sb2FkTW9yZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucHJvcHMubGlzdC5sZW5ndGggKyB0aGlzLnN0YXRlLmxpc3QubGVuZ3RoXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHBhZ2U6IChsZW5ndGggLyAyMCkgKyAxLFxuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QoR0VUX05FV1MsIHBhcmFtcylcbiAgICAgIGxpc3QgPSBkYXRhLmJvZHkucmVzdWx0XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGlzdDogdGhpcy5zdGF0ZS5saXN0LmNvbmNhdChmb3JtYXROZXdzTGlzdChsaXN0KSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goeyB0eXBlOiAndGVzdCcgfSlcbiAgfVxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGxpc3QgPSBbXSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgbGlzdDogbW9yZSA9IFtdIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuICg8ZGl2PlxuICAgIDxIZWFkIC8+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxNYWluPlxuICAgICAgICB7XG4gICAgICAgICAgbGlzdC5jb25jYXQobW9yZSkubWFwKGkgPT4gPE5ld3NJdGVtIHsuLi5pfSAvPilcbiAgICAgICAgfVxuICAgICAgICA8V2F5cG9pbnRcbiAgICAgICAgICBvbkVudGVyPXt0aGlzLmxvYWRNb3JlfVxuICAgICAgICAgIG9uTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkxlYXZlJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPjxMb2FkaW5nIC8+PC9zcGFuPlxuICAgICAgICA8L1dheXBvaW50PlxuICAgICAgPC9NYWluPlxuICAgICAgPFNpZGVyPnNpZGVyPC9TaWRlcj5cbiAgICA8L0NvbnRhaW5lcj5cbjwvZGl2PilcbiAgfVxufVxuXG5leHBvcnQgbGV0IGxpc3QgPSBbXVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEsIHN0b3JlIH0pID0+IHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QoR0VUX05FV1MpXG4gICAgbGlzdCA9IGRhdGEuYm9keS5yZXN1bHRcbiAgICBjb25zb2xlLmxvZygnbGlzdOS4jeWtmOWcqCcpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2xpc3Tlt7LlrZjlnKgnKVxuICB9XG4gIHJldHVybiB7IGxpc3Q6IGZvcm1hdE5ld3NMaXN0KGxpc3QpIH1cbi8vICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U2FnYShJbmRleClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IGVzNnByb21pc2UgZnJvbSAnZXM2LXByb21pc2UnXG5cbmltcG9ydCB7IEFQSVVSTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hcGkuanMnXG5cbmVzNnByb21pc2UucG9seWZpbGwoKVxuXG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKHVybCwgcGFyYW1zID0ge30pID0+IHtcbiAgICBjb25zb2xlLmxvZygn6K6/6Zeu77yaJytBUElVUkwgKyB1cmwpXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4ucGFyYW1zIH0pLFxuICAgIH07XG4gICAgcmV0dXJuIGZldGNoKEFQSVVSTCArIHVybCwgb3B0aW9ucylcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJCYWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXJcIik7XG5cdFx0fVxuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pXG4gICAgLmNhdGNoKGVyciA9PiAoeyBlcnIgfSkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZmV0Y2guanMiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB2ZXJ0eCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDYwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgeyBwcmVhdHlUaW1lLCBnZXRTdHJsZXNzIH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TmV3c0xpc3QgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gZGF0YS5tYXAoKGksIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmksXG4gICAgICBrZXk6IGkuaWQgfHwgaW5kZXgsXG4gICAgICBjcmVhdGVkQXQ6IHByZWF0eVRpbWUoaS5jcmVhdGVkQXQpIHx8IHVuZGVmaW5lZCxcbiAgICAgIHVwZGF0ZWRBdDogcHJlYXR5VGltZShpLnVwZGF0ZWRBdCkgfHwgdW5kZWZpbmVkLFxuICAgICAgdHlwZTogaS5uZXdzVHlwZSA/IGkubmV3c1R5cGUudHlwZU5hbWUgOiB1bmRlZmluZWQsXG4gICAgICBjb3ZlcjogaS5waG90b3MgPyBpLnBob3Rvc1swXSA6IHVuZGVmaW5lZCxcbiAgICAgIGNvbnRlbnQ6IGdldFN0cmxlc3MoaS5jb250ZW50LCA2MCwgMyksXG4gICAgfTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZm9ybWF0LmpzIiwiXG5leHBvcnQgY29uc3QgcHJlYXR5VGltZSA9IChzdHIpID0+IHtcbiAgY29uc3QgZGF0YSA9IG5ldyBEYXRlKHN0cik7XG4gIGlmIChkYXRhKSB7XG4gICAgcmV0dXJuIGAke2RhdGEuZ2V0RnVsbFllYXIoKX0tJHtkYXRhLmdldE1vbnRoKCkgKyAxfS0ke2RhdGEuZ2V0RGF0ZSgpfSAke2RhdGEuZ2V0SG91cnMoKX06JHtkYXRhLmdldE1pbnV0ZXMoKX06JHtkYXRhLmdldFNlY29uZHMoKX1gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAn5pyq55+lJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0cmxlc3MgPSAob3N0ciwgZW5kID0gMTUsIHN0YXJ0ID0gMCkgPT4ge1xuICBjb25zdCBzdHIgPSBvc3RyIHx8ICcnO1xuICBpZiAoc3RyLmxlbmd0aCA+IGVuZCkge1xuICAgIHJldHVybiBgJHtzdHIuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpfS4uLmA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNtYWxsSW1nID0gKHVybCwgcHJvcHNYLCBwcm9wc1kpID0+IHtcbiAgY29uc3QgeCA9IHByb3BzWCB8fCAyMDA7XG4gIGNvbnN0IHkgPSBwcm9wc1kgfHwgMjAwO1xuICByZXR1cm4gYCR7dXJsfT9pbWFnZU1vZ3IyL3RodW1ibmFpbC8hJHt4fXgke3l9ci9ncmF2aXR5L0NlbnRlci9jcm9wLyR7eH14JHt5fWA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V2luSGVpZ2h0ID0gKCkgPT4ge1xuICBsZXQgd2luSGVpZ2h0ID0gMDtcbiAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIHdpbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfSBlbHNlIGlmICgoZG9jdW1lbnQuYm9keSkgJiYgKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSkge1xuICAgIHdpbkhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICB9XG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgIHdpbkhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHdpbkhlaWdodDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7XG4gIGxldCBzY3JvbGxUb3AgPSAwO1xuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgfVxuICByZXR1cm4gc2Nyb2xsVG9wO1xufVxuXG4vLyDljrvpmaTmlbDnu4TkuK3nmoTnqbrlgLxcbmV4cG9ydCBjb25zdCB0cmltU3BhY2UgPSAoYXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJheVtpXSA9PT0gJycgfHwgdHlwZW9mIChhcnJheVtpXSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICBpIC09IDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cbmV4cG9ydCBjb25zdCBub3RFbXB0eSA9ICh2YWx1ZSwgbGFiZWwpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgcmVqZWN0KGAke2xhYmVsfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrRGF0YSA9ICh7IGRhdGEsIGNiIH0pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmNvZGUgPT09IDIwMCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0gaWYgKGNiICYmIGNiKGRhdGEuY29kZSkpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVqZWN0KHsgbXNnOiAn5pON5L2c5byC5bi4JyB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcodXJsKSB7XG4gIGNvbnN0IHN0ciA9IHVybC5zcGxpdCgnPycpWzFdO1xuICBjb25zdCBpdGVtcyA9IHN0ci5zcGxpdCgnJicpO1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgbGV0IGFycjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGFyciA9IGl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgcmVzdWx0W2FyclswXV0gPSBhcnJbMV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2NvbW1vbi5qcyIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IG5leHRSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJ1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5cbmltcG9ydCByb290UmVkdWNlciwge2V4YW1wbGVJbml0aWFsU3RhdGV9IGZyb20gJy4vcmVkdWNlcnMnXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9lZmZlY3RzJ1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlIChpbml0aWFsU3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSlcbiAgKVxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoUmVkdXhTYWdhIChCYXNlQ29tcG9uZW50KSB7XG4gIHJldHVybiB3aXRoUmVkdXgoY29uZmlndXJlU3RvcmUpKG5leHRSZWR1eFNhZ2EoQmFzZUNvbXBvbmVudCkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9pbmRleC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGNvbW1vbiBmcm9tICcuL2NvbW1vbi5qcyc7XG5pbXBvcnQgbmV3cyBmcm9tICcuL25ld3MuanMnO1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgY29tbW9uLFxuICBuZXdzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcyIsImNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgc2Nyb2xsSGVpZ2h0OiAwLFxufTtcbmZ1bmN0aW9uIGNvbW1vbihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdjb21tb24vc2F2ZSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tbW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvcmVkdWNlcnMvY29tbW9uLmpzIiwiY29uc3QgaW5pdFN0YXRlID0ge1xuICBsaXN0OiBbXSxcbiAgZGV0YWlsOiB7fSxcbn07XG5mdW5jdGlvbiBuZXdzKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ25ld3Mvc2F2ZSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL3JlZHVjZXJzL25ld3MuanMiLCJpbXBvcnQge2RlbGF5fSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHthbGwsIGNhbGwsIHB1dCwgdGFrZSwgdGFrZUxhdGVzdH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG5mdW5jdGlvbiAqIHJ1bkNsb2NrU2FnYSAoKSB7XG4gIHlpZWxkIHRha2UoYWN0aW9uVHlwZXMuU1RBUlRfQ0xPQ0spXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgeWllbGQgcHV0KHRpY2tDbG9jayhmYWxzZSkpXG4gICAgeWllbGQgY2FsbChkZWxheSwgODAwKVxuICB9XG59XG5cbmZ1bmN0aW9uICogdGVzdCAoKSB7XG4gIHlpZWxkIHRha2UoJ3Rlc3QyJylcbn1cblxuZnVuY3Rpb24gKiByb290U2FnYSAoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgdGFrZUxhdGVzdCgndGVzdCcsIHRlc3QpXG4gIF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RTYWdhXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9lZmZlY3RzL2luZGV4LmpzIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICB0aXRsZSA9ICfljY7kurrnlJ/mtLvnvZEnLFxuICBkZXNjcmlwdGlvbiA9ICflhajnvo7mnIDlpKfljY7kurrnpL7ljLonXG59KSA9PiAoXG4gIDxIZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIHNpemVzPVwiMTkyeDE5MlwiIGhyZWY9XCIvc3RhdGljL3RvdWNoLWljb24ucG5nXCIgLz5cbiAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24tbWFzay5zdmdcIiBjb2xvcj1cIiM0OUI4ODJcIiAvPlxuICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgPHN0eWxlPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEsYm9keSB7XG4gICAgICAgICAgY29sb3I6ICMyOTI1MjU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHksaDEsaDIsaDMsaDQsaDUsaDZ7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBQaW5nRmFuZy1TQy1SZWd1bGFyLCAnSGlyYWdpbm8gU2FucyBHQicsICdNaWNyb3NvZnQgWWFoZWknLCBBcmlhbCwgc2Fucy1zZXJpZlxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9IZWFkPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkL2luZGV4LmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0aXRsZSwgY29udGVudCwgdHlwZSwgY292ZXIsIHJlYWRDb3VudCwgY29tbWVudENvdW50LCBnb1RvVXJsLCBpZCB9KSA9PiA8TGluayBocmVmPXtcIi9uZXdzL2RldGFpbD9pZD1cIitpZH0+PGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgPlxuICA8aW1nIGNsYXNzTmFtZT1cImNvdmVyXCIgc3JjPXtjb3Zlcn0gYWx0PVwiXCIvPlxuICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgIDxzdW1tYXJ5IGNsYXNzTmFtZT1cImRlc2NcIj57Y29udGVudH08L3N1bW1hcnk+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJtZXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291cmNlXCI+PC9kaXY+XG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlrZVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbGlrZS5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAge3JlYWRDb3VudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY29tbWVudC5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAge3JlYWRDb3VudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5pdGVtIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg0Niw2MSw3MywuMDgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RiZTJlODtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4IDAgMXB4IDA7XG4gICAgfVxuXG4gICAgLmNvdmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgfVxuICAgIC5ib3gge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsUGluZ0ZhbmcgU0MsSGlyYWdpbm8gU2FucyBHQixNaWNyb3NvZnQgWWFIZWksaGVsdmV0aWNhIG5ldWUsaGVsdmV0aWNhLHVidW50dSxyb2JvdG8sbm90byxzZWdvZSB1aSxBcmlhbCxzYW5zLXNlcmlmO1xuXG4gICAgfVxuICAgIC5kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjg1O1xuICAgICAgY29sb3I6ICM0YTRhNGE7XG4gICAgfVxuICAgIC5tZXRhIHtcbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgfVxuXG4gICAgLmFjdGlvbnMsIC5saWtlLCAuY29tbWVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbW1lbnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICAgIC5pY29uIHtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc4cmVtKSB7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIH1cbiAgICAgIC5kZXNjIHtcbiAgICAgICAgY29sb3I6ICM0YTRhNGE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuXG4gIGB9PC9zdHlsZT5cbjwvZGl2PjwvTGluaz5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmV3c0l0ZW0vaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xvYWRpbmcuc3ZnXCIgYWx0PVwiXCIgLz5cbiAg5Yqq5Yqb5Yqg6L295LitLi4uXG4gIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgLmxvYWRpbmcge1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHR1cm4ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDcyMGRlZyk7XG4gICAgICB9XG4gICAgfVxuICAgIC5pbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMnB4O1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgYW5pbWF0aW9uOiAycyBpbmZpbml0ZSB0dXJuO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L2Rpdj5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9hZGluZy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxoMT5oZWFkZXI8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pe1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDE1MDBweDtcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyBkaXYge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzhyZW0pIHtcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyNDAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlICogNS83O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAqIDIvNztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgTWFpbiA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBTaWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzaWRlclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdBOzs7OztBQUVBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQUFBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBR0E7QUFIQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBOzs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFQQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBR0E7QUFFQTtBQUhBO0FBSUE7QUFBQTtBQUxBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQWxCQTtBQUNBOzs7Ozs7OztBQ1RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7QUFDQTs7O0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQVpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ21DQTtBQTJDQTtBQUNBO0FBakZBO0FBQ0E7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQVVBO0FBQ0E7QUF0QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFJQTs7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBRUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUlBOztBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFJQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTs7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFEQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7O0FBREE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQWlEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        