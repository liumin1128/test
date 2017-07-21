
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 562:
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

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(565);


/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(74);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(75);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(566);

var _Head = __webpack_require__(611);

var _Head2 = _interopRequireDefault(_Head);

var _List = __webpack_require__(612);

var _List2 = _interopRequireDefault(_List);

var _layout = __webpack_require__(633);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/pages/index.js?entry',
    _this = undefined;

var Index = function Index() {
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
  }), _react2.default.createElement(_layout.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_layout.Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_List2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), _react2.default.createElement(_layout.Sider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'sider')));
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

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;
exports.withReduxSaga = withReduxSaga;

var _redux = __webpack_require__(541);

var _reduxDevtoolsExtension = __webpack_require__(581);

var _nextReduxWrapper = __webpack_require__(582);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = __webpack_require__(594);

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reduxSaga = __webpack_require__(545);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = __webpack_require__(600);

var _reducers2 = _interopRequireDefault(_reducers);

var _effects = __webpack_require__(603);

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

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(541);

var _common = __webpack_require__(601);

var _common2 = _interopRequireDefault(_common);

var _news = __webpack_require__(602);

var _news2 = _interopRequireDefault(_news);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  common: _common2.default,
  news: _news2.default
});

exports.default = reducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/store/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/store/reducers/index.js"); } } })();

/***/ }),

/***/ 601:
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

/***/ 602:
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

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(74);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reduxSaga = __webpack_require__(545);

var _effects = __webpack_require__(561);

var _api = __webpack_require__(562);

var _fetch = __webpack_require__(604);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [getNewsInit, getNewsList, getNewsDetail, test, rootSaga].map(_regenerator2.default.mark);

var defaultParams = {
  page: 1,
  pageSize: 10
};

function getNewsInit() {
  var _ref, news, list, data;

  return _regenerator2.default.wrap(function getNewsInit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)();

        case 2:
          _ref = _context.sent;
          news = _ref.news;
          list = news.list;

          if (!(list.length === 0)) {
            _context.next = 14;
            break;
          }

          console.log('没有list存在，判断为第一次渲染');
          _context.next = 9;
          return (0, _effects.call)(_fetch2.default, _api.GET_NEWS, defaultParams);

        case 9:
          data = _context.sent;
          _context.next = 12;
          return (0, _effects.put)({ type: 'news/save', payload: { list: data.body.result } });

        case 12:
          _context.next = 15;
          break;

        case 14:
          console.log('list存在，不再加载');

        case 15:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function getNewsList(_ref2) {
  var payload = _ref2.payload;

  var _ref3, news, list, data;

  return _regenerator2.default.wrap(function getNewsList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.select)();

        case 2:
          _ref3 = _context2.sent;
          news = _ref3.news;
          list = news.list;
          _context2.next = 7;
          return (0, _effects.call)(_fetch2.default, _api.GET_NEWS, (0, _extends3.default)({}, defaultParams, payload));

        case 7:
          data = _context2.sent;

          console.log('下拉加载成功');
          _context2.next = 11;
          return (0, _effects.put)({ type: 'news/save', payload: { list: list.concat(data.body.result) } });

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function getNewsDetail(_ref4) {
  var payload = _ref4.payload;

  var _ref5, news, detail, list, _detail, data;

  return _regenerator2.default.wrap(function getNewsDetail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.select)();

        case 2:
          _ref5 = _context3.sent;
          news = _ref5.news;
          detail = news.detail;

          if (!(payload.id === detail.id)) {
            _context3.next = 10;
            break;
          }

          console.log('detail已存在');
          return _context3.abrupt('return');

        case 10:
          console.log('detail不存在');
          list = news.list;
          _detail = list.find(function (i) {
            return i.id === payload.id;
          });

          if (_detail) {
            _context3.next = 21;
            break;
          }

          console.log('detail联网才被找到');
          _context3.next = 17;
          return (0, _effects.call)(_fetch2.default, _api.GET_NEWS, payload);

        case 17:
          data = _context3.sent;

          _detail = data.body.result[0];
          _context3.next = 22;
          break;

        case 21:
          // window.scrollTo(0, 0);
          console.log('detail在列表中被找到');

        case 22:
          _context3.next = 24;
          return (0, _effects.put)({ type: 'news/save', payload: { detail: _detail } });

        case 24:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function test() {
  return _regenerator2.default.wrap(function test$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.take)('test2');

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.all)([(0, _effects.takeLatest)('test', test), (0, _effects.takeLatest)('news/init', getNewsInit), (0, _effects.takeLatest)('news/loadmore', getNewsList), (0, _effects.takeLatest)('news/getDetail', getNewsDetail)]);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

exports.default = rootSaga;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/store/effects/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/store/effects/index.js"); } } })();

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(605);

var _stringify2 = _interopRequireDefault(_stringify);

__webpack_require__(607);

var _es6Promise = __webpack_require__(609);

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _api = __webpack_require__(562);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_es6Promise2.default.polyfill();

exports.default = function (url) {
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

/***/ 610:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 611:
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

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(552);

var _reactWaypoint = __webpack_require__(613);

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

var _index = __webpack_require__(70);

var _index2 = _interopRequireDefault(_index);

var _format = __webpack_require__(629);

var _Loading = __webpack_require__(631);

var _Loading2 = _interopRequireDefault(_Loading);

var _Item = __webpack_require__(632);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/components/News/List.js',
    _this = undefined;

function mapStateToProps(state) {
  var _state$news$list = state.news.list,
      list = _state$news$list === undefined ? [] : _state$news$list;

  return {
    list: (0, _format.formatNewsList)(list)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(function (_ref) {
  var list = _ref.list,
      dispatch = _ref.dispatch;

  function gotodetail(id) {
    dispatch({
      type: 'news/getDetail',
      payload: {
        id: id
      }
    });
    _index2.default.push({
      pathname: '/detail',
      query: { id: id }
    });
  }
  function loadmore() {
    var length = list.length;
    console.log(length / 10);
    dispatch({
      type: 'news/loadmore',
      payload: {
        page: parseInt(length / 10) + 1
      }
    });
  }
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, list.map(function (i) {
    return _react2.default.createElement('div', { onClick: gotodetail.bind(_this, i.id), key: i.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, _react2.default.createElement(_Item2.default, (0, _extends3.default)({}, i, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    })));
  }), _react2.default.createElement(_reactWaypoint2.default, {
    onEnter: loadmore,
    onLeave: function onLeave() {
      console.log('onLeave');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement(_Loading2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }))));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/News/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/News/List.js"); } } })();

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNewsList = undefined;

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _common = __webpack_require__(630);

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

/***/ 630:
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

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(547);

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

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(547);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/liumin/Desktop/Git/ssr/components/News/Item.js";

exports.default = function (_ref) {
  var title = _ref.title,
      content = _ref.content,
      type = _ref.type,
      cover = _ref.cover,
      readCount = _ref.readCount,
      commentCount = _ref.commentCount,
      goToUrl = _ref.goToUrl,
      id = _ref.id;
  return _react2.default.createElement("div", { className: "item", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    }
  }, _react2.default.createElement("img", { className: "cover", src: cover, alt: "", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }), _react2.default.createElement("div", { className: "box", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("h3", { className: "title", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, title), _react2.default.createElement("summary", { className: "desc", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, content), _react2.default.createElement("footer", { className: "meta", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("div", { className: "source", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement("span", {
    "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement("div", { className: "actions", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("span", { className: "like", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("img", { className: "icon", src: "../../static/images/like.svg", alt: "", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), readCount), _react2.default.createElement("span", { className: "comment", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement("img", { className: "icon", src: "../../static/images/comment.svg", alt: "", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), readCount)))), _react2.default.createElement(_style2.default, {
    styleId: 2834051166,
    css: ".item[data-jsx=\"2834051166\"]{background:#fff;margin-bottom:16px;margin:16px 0;box-shadow:0 1px 3px rgba(46,61,73,.08);border:1px solid #dbe2e8;border-width:1px 0 1px 0}.cover[data-jsx=\"2834051166\"]{width:100%;height:240px;background-position:50% 50%;background-repeat:no-repeat;background-size:100% 100%}.box[data-jsx=\"2834051166\"]{padding:20px}.title[data-jsx=\"2834051166\"]{font-size:20px;line-height:1.4;margin:0 0 20px;font-family:-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,Microsoft YaHei,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,Arial,sans-serif}.desc[data-jsx=\"2834051166\"]{font-size:14px;line-height:1.85;color:#4a4a4a}.meta[data-jsx=\"2834051166\"]{color:#9b9b9b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:22px;font-size:14px}.actions[data-jsx=\"2834051166\"],.like[data-jsx=\"2834051166\"],.comment[data-jsx=\"2834051166\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.comment[data-jsx=\"2834051166\"]{margin-left:20px}.icon[data-jsx=\"2834051166\"]{width:14px;height:14px;margin-right:4px}@media (min-width:78rem){.item[data-jsx=\"2834051166\"]{border-radius:3px}.title[data-jsx=\"2834051166\"]{font-size:24px;line-height:1.5}.desc[data-jsx=\"2834051166\"]{color:#4a4a4a;line-height:1.625;font-size:16px;margin:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3cy9JdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CYyxBQUd1QixBQUVMLEFBQ0UsQUFFRSxBQUVBLEFBQ0QsQUFHRCxBQUNJLEFBQ04sQUFHUyxBQUNILEFBQ0QsWUFoQmUsQUFXRCxFQVZaLENBS2dCLEFBVVMsQ0FiTCxBQUVDLEFBVUcsQ0FqQkEsQ0FZcEIsQ0FJSyxNQUgyQixDQVhZLE9BR0wsQUFZWixDQVZXLEFBV08sR0FsQkosTUFhSixNQU5NLENBRm1LLEFBYS9JLEVBbEJ5QixHQUVULEtBZ0JULGtCQVByRCxNQVQrRixTQUZRLEFBUXZFLGtCQU5vRSxRQUZtQywwQkFBSyw4QkFXdkksb0NBTDlDLGFBRW1HLGlHQUF1QixpQkFBc0IsZ0JBQ2hKIiwiZmlsZSI6ImNvbXBvbmVudHMvTmV3cy9JdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9saXVtaW4vRGVza3RvcC9HaXQvc3NyIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgdGl0bGUsIGNvbnRlbnQsIHR5cGUsIGNvdmVyLCByZWFkQ291bnQsIGNvbW1lbnRDb3VudCwgZ29Ub1VybCwgaWQgfSkgPT4gPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgPlxuICA8aW1nIGNsYXNzTmFtZT1cImNvdmVyXCIgc3JjPXtjb3Zlcn0gYWx0PVwiXCIvPlxuICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgIDxzdW1tYXJ5IGNsYXNzTmFtZT1cImRlc2NcIj57Y29udGVudH08L3N1bW1hcnk+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJtZXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291cmNlXCI+PC9kaXY+XG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlrZVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbGlrZS5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAge3JlYWRDb3VudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY29tbWVudC5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAge3JlYWRDb3VudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5pdGVtIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg0Niw2MSw3MywuMDgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RiZTJlODtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4IDAgMXB4IDA7XG4gICAgfVxuXG4gICAgLmNvdmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgfVxuICAgIC5ib3gge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsUGluZ0ZhbmcgU0MsSGlyYWdpbm8gU2FucyBHQixNaWNyb3NvZnQgWWFIZWksaGVsdmV0aWNhIG5ldWUsaGVsdmV0aWNhLHVidW50dSxyb2JvdG8sbm90byxzZWdvZSB1aSxBcmlhbCxzYW5zLXNlcmlmO1xuXG4gICAgfVxuICAgIC5kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjg1O1xuICAgICAgY29sb3I6ICM0YTRhNGE7XG4gICAgfVxuICAgIC5tZXRhIHtcbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgfVxuXG4gICAgLmFjdGlvbnMsIC5saWtlLCAuY29tbWVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbW1lbnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICAgIC5pY29uIHtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc4cmVtKSB7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIH1cbiAgICAgIC5kZXNjIHtcbiAgICAgICAgY29sb3I6ICM0YTRhNGE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuXG4gIGB9PC9zdHlsZT5cbjwvZGl2PlxuIl19 */\n/*@ sourceURL=components/News/Item.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/News/Item.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/News/Item.js"); } } })();

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sider = exports.Main = exports.Container = undefined;

var _style = __webpack_require__(547);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(639);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/liumin/Desktop/Git/ssr/components/layout/index.js";
var Container = exports.Container = function Container(_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", {
    "data-jsx": 2130651328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("div", { className: "header", "data-jsx": 2130651328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  })), _react2.default.createElement("div", { className: "container", "data-jsx": 2130651328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("div", { className: "row", "data-jsx": 2130651328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, children)), _react2.default.createElement(_style2.default, {
    styleId: 2130651328,
    css: ".container{margin:0 auto}@media (min-width:48rem){.container{max-width:1500px}.row{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.row div{position:relative}}@media (min-width:78rem){.container{max-width:2400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.main{width:100% * 5/7}.sider{width:100% * 2/7}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl1QixBQUd1QixBQUdLLEFBQ04sQUFDTyxBQUdELEFBQ0UsQUFDRixBQUVBLFlBUmtCLEdBSmhCLEdBR08sQUFLZSxBQUVmLEFBRUEsQ0FQQyxxREFJQyxrQkFMd0MsTUFJRyx3RUFBUyxHQUpIIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9saXVtaW4vRGVza3RvcC9HaXQvc3NyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKXtcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cgZGl2IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc4cmVtKSB7XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1heC13aWR0aDogMjQwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAqIDUvNztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWRlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgKiAyLzc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IE1haW4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgU2lkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2lkZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuIl19 */\n/*@ sourceURL=components/layout/index.js */"
  }));
};

var Main = exports.Main = function Main(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement("div", { className: "main", __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, children);
};

var Sider = exports.Sider = function Sider(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement("div", { className: "sider", __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, children);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/layout/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/layout/index.js"); } } })();

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _style = __webpack_require__(547);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/components/Header/index.js';

// import Headroom from 'react-headroom';

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    _this.state = {
      theme: 'black'
    };
    _this.back = function () {
      history.goBack();
      console.log(history);
      console.log(document.referrer);
    };
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var theme = this.state.theme;

      return _react2.default.createElement('div', { className: 'header black', 'data-jsx': 2391329695,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', { className: 'container wrap', 'data-jsx': 2391329695,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', { className: 'logo', 'data-jsx': 2391329695,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('img', { src: '../../static/images/logo.jpeg', alt: '', className: 'logo', 'data-jsx': 2391329695,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('h1', {
        'data-jsx': 2391329695,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, '\u534E\u4EBA\u751F\u6D3B\u7F51')), _react2.default.createElement('div', { className: 'tools', 'data-jsx': 2391329695,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('img', { className: 'tool', src: '../../static/images/menu.svg', alt: '', 'data-jsx': 2391329695,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('a', { href: '', 'data-jsx': 2391329695,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, '\u767B\u5F55'))), _react2.default.createElement(_style2.default, {
        styleId: 2391329695,
        css: '.header[data-jsx="2391329695"]{border-bottom:1px solid #DBE2E8;margin-bottom:16px;height:60px;-webkit-transition:0.3s;transition:0.3s}.header[data-jsx="2391329695"] .wrap[data-jsx="2391329695"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 16px}.logo[data-jsx="2391329695"]{height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.logo[data-jsx="2391329695"] img[data-jsx="2391329695"]{max-width:36px;max-height:36px;border-radius:200px;margin-right:16px}.logo[data-jsx="2391329695"] h1[data-jsx="2391329695"]{display:none;font-size:20px;color:#fff}.tools[data-jsx="2391329695"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.tools[data-jsx="2391329695"] .tool[data-jsx="2391329695"]{width:25px;height:25px;opacity:0.7;margin-right:16px}.tools[data-jsx="2391329695"] a[data-jsx="2391329695"]{border:1px #fff solid;padding:7px 24px;border-radius:100px}.black[data-jsx="2391329695"]{background:#1b1b1f}.tools[data-jsx="2391329695"] a[data-jsx="2391329695"]{color:#fff}.tools[data-jsx="2391329695"] a[data-jsx="2391329695"]:hover{color:#1b1b1f;background:#fff}.white[data-jsx="2391329695"]{background:#fff}.white[data-jsx="2391329695"] a[data-jsx="2391329695"]{color:#000}.white[data-jsx="2391329695"] a[data-jsx="2391329695"]:hover{color:#fff;background:#1b1b1f}@media (max-width:768px){.box[data-jsx="2391329695"]{padding:0 16px}.tools[data-jsx="2391329695"] .tool[data-jsx="2391329695"]{width:18px;height:18px}.tools[data-jsx="2391329695"] a[data-jsx="2391329695"]{border:none;padding:14px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFHMkMsQUFDbkIsQUFDRCxBQUNHLEFBQ0YsQUFFQSxBQUNGLEFBQ1csQUFHSCxBQUNSLEFBQ0csQUFFRSxBQUNMLEFBQ0EsQUFFTSxBQUNKLEFBQ0EsWUFkcUIsQUFLZCxBQUlBLEFBQ3FCLEFBR0gsQUFDQyxDQW5CSCxDQUVHLENBU0UsQ0FWQyxBQWdCZCxDQUpILEdBSkcsR0FIc0IsRUFETyxBQWFSLENBQ0MsSUFqQlcsRUFTWCxBQUlBLENBakJZLEFBR1csS0FJYSxHQUNMLENBSlgsV0FKZSxDQUdpQixHQUlQLEtBRWpHLElBVGtILE9BR0QsS0FGekQsQUFLWCxhQUp1QixpQkFGdUQsbUVBTXJFLGFBSnVCLHFCQURTLGlHQUEwQixnQkFBUyIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGl1bWluL0Rlc2t0b3AvR2l0L3NzciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgSGVhZHJvb20gZnJvbSAncmVhY3QtaGVhZHJvb20nO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGhlbWU6ICdibGFjaycsXG4gICAgfTtcbiAgICB0aGlzLmJhY2sgPSAoKSA9PiB7XG4gICAgICBoaXN0b3J5LmdvQmFjaygpO1xuICAgICAgY29uc29sZS5sb2coaGlzdG9yeSk7XG4gICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5yZWZlcnJlcik7XG4gICAgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgYmxhY2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHdyYXBcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sb2dvLmpwZWdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJsb2dvXCIvPlxuICAgICAgICAgIDxoMT7ljY7kurrnlJ/mtLvnvZE8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sc1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0b29sXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9tZW51LnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGEgaHJlZj1cIlwiPueZu+W9lTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQkUyRTg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIC53cmFwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMzZweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyBoMSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAudG9vbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudG9vbHMgLnRvb2wge1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50b29scyBhIHtcbiAgICAgICAgICBib3JkZXI6IDFweCAjZmZmIHNvbGlkO1xuICAgICAgICAgIHBhZGRpbmc6IDdweCAyNHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibGFjayB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzFiMWIxZjtcbiAgICAgICAgfVxuICAgICAgICAudG9vbHMgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLnRvb2xzIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMWIxYjFmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAud2hpdGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLndoaXRlIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC53aGl0ZSBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWIxYjFmO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b29scyAudG9vbCB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvb2xzIGEge1xuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=components/Header/index.js */'
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/Header/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/Header/index.js"); } } })();

/***/ })

},[564]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnN0YW50cy9hcGkuanM/YTM3NTI4ZSIsIndlYnBhY2s6Ly8vLi9wYWdlcz9hMzc1MjhlIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzP2EzNzUyOGUiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanM/YTM3NTI4ZSIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9jb21tb24uanM/YTM3NTI4ZSIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9uZXdzLmpzP2EzNzUyOGUiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvZWZmZWN0cy9pbmRleC5qcz9hMzc1MjhlIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoLmpzP2EzNzUyOGUiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKT9hMzc1MjhlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZC9pbmRleC5qcz9hMzc1MjhlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3cy9MaXN0LmpzP2EzNzUyOGUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LmpzP2EzNzUyOGUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tbW9uLmpzP2EzNzUyOGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LmpzP2EzNzUyOGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdzL0l0ZW0uanM/YTM3NTI4ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcz9hMzc1MjhlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzP2EzNzUyOGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g5paw6Ze755u45YWzXG5leHBvcnQgY29uc3QgR0VUX05FV1MgPSAnL25ld3Mvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBHRVRfTkVXU1RZUEVTID0gJy9uZXdzL2ZpbmRUeXBlJztcbmV4cG9ydCBjb25zdCBBRERfTkVXUyA9ICcvbmV3cy9hZGQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ORVdTID0gJy9uZXdzL3VwZGF0ZSc7XG5leHBvcnQgY29uc3QgREVMRVRFX05FV1MgPSAnL25ld3MvZGVsZXRlJztcblxuLy8g5YWo5bGAYXBp5Zyw5Z2AXG5leHBvcnQgY29uc3QgQVBJVVJMID0gJ2h0dHBzOi8vZGF0YS5odWFyZW5ob3VzZS5jb20nO1xuXG4vLyDkuIPniZvoh6rlrprkuYnln5/lkI1cbmV4cG9ydCBjb25zdCBRSU5JVVVSTCA9ICdpbWdzLmh1YXJlbmhvdXNlLmNvbSc7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL2FwaS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgd2l0aFJlZHV4U2FnYSB9IGZyb20gJy4uL3N0b3JlJ1xuXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnXG5pbXBvcnQgTmV3c0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdzL0xpc3QnXG5pbXBvcnQgeyBDb250YWluZXIsIE1haW4sIFNpZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gPGRpdj5cbiAgICA8SGVhZCAvPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8TWFpbj5cbiAgICAgICAgPE5ld3NMaXN0IC8+XG4gICAgICA8L01haW4+XG4gICAgICA8U2lkZXI+c2lkZXI8L1NpZGVyPlxuICAgIDwvQ29udGFpbmVyPlxuPC9kaXY+XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSwgc3RvcmUgfSkgPT4ge1xuICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgdHlwZTogJ25ld3MvaW5pdCdcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U2FnYShJbmRleClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgbmV4dFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcblxuaW1wb3J0IHJvb3RSZWR1Y2VyLCB7ZXhhbXBsZUluaXRpYWxTdGF0ZX0gZnJvbSAnLi9yZWR1Y2VycydcbmltcG9ydCByb290U2FnYSBmcm9tICcuL2VmZmVjdHMnXG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUgKGluaXRpYWxTdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKVxuICApXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxuICByZXR1cm4gc3RvcmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhSZWR1eFNhZ2EgKEJhc2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIHdpdGhSZWR1eChjb25maWd1cmVTdG9yZSkobmV4dFJlZHV4U2FnYShCYXNlQ29tcG9uZW50KSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL2luZGV4LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uLmpzJztcbmltcG9ydCBuZXdzIGZyb20gJy4vbmV3cy5qcyc7XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBjb21tb24sXG4gIG5ld3MsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzIiwiY29uc3QgaW5pdFN0YXRlID0ge1xuICBzY3JvbGxIZWlnaHQ6IDAsXG59O1xuZnVuY3Rpb24gY29tbW9uKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2NvbW1vbi9zYXZlJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21tb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9yZWR1Y2Vycy9jb21tb24uanMiLCJjb25zdCBpbml0U3RhdGUgPSB7XG4gIGxpc3Q6IFtdLFxuICBkZXRhaWw6IHt9LFxufTtcbmZ1bmN0aW9uIG5ld3Moc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnbmV3cy9zYXZlJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvcmVkdWNlcnMvbmV3cy5qcyIsImltcG9ydCB7ZGVsYXl9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQge2FsbCwgY2FsbCwgc2VsZWN0LCBwdXQsIHRha2UsIHRha2VMYXRlc3R9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCB7IEdFVF9ORVdTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2FwaS5qcydcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoLmpzJ1xuXG5jb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICBwYWdlOiAxLFxuICBwYWdlU2l6ZTogMTAsXG59XG5cbmZ1bmN0aW9uKiBnZXROZXdzSW5pdCgpIHtcbiAgY29uc3QgeyBuZXdzIH0gPSB5aWVsZCBzZWxlY3QoKVxuICBjb25zdCBsaXN0ID0gbmV3cy5saXN0XG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnNvbGUubG9nKCfmsqHmnIlsaXN05a2Y5Zyo77yM5Yik5pat5Li656ys5LiA5qyh5riy5p+TJylcbiAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChyZXF1ZXN0LCBHRVRfTkVXUywgZGVmYXVsdFBhcmFtcyk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogJ25ld3Mvc2F2ZScsIHBheWxvYWQ6IHsgbGlzdDogZGF0YS5ib2R5LnJlc3VsdCB9IH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdsaXN05a2Y5Zyo77yM5LiN5YaN5Yqg6L29JylcbiAgfVxufVxuXG5mdW5jdGlvbiogZ2V0TmV3c0xpc3QoeyBwYXlsb2FkIH0pIHtcbiAgY29uc3QgeyBuZXdzIH0gPSB5aWVsZCBzZWxlY3QoKVxuICBjb25zdCBsaXN0ID0gbmV3cy5saXN0XG4gIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKHJlcXVlc3QsIEdFVF9ORVdTLCB7IC4uLmRlZmF1bHRQYXJhbXMsIC4uLnBheWxvYWQgfSk7XG4gIGNvbnNvbGUubG9nKCfkuIvmi4nliqDovb3miJDlip8nKVxuICB5aWVsZCBwdXQoeyB0eXBlOiAnbmV3cy9zYXZlJywgcGF5bG9hZDogeyBsaXN0OiBsaXN0LmNvbmNhdChkYXRhLmJvZHkucmVzdWx0KSB9IH0pO1xufVxuXG5mdW5jdGlvbiogZ2V0TmV3c0RldGFpbCh7IHBheWxvYWQgfSkge1xuICBjb25zdCB7IG5ld3MgfSA9IHlpZWxkIHNlbGVjdCgpXG4gIGNvbnN0IGRldGFpbCA9IG5ld3MuZGV0YWlsXG4gIGlmIChwYXlsb2FkLmlkID09PSBkZXRhaWwuaWQpIHtcbiAgICBjb25zb2xlLmxvZygnZGV0YWls5bey5a2Y5ZyoJylcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnZGV0YWls5LiN5a2Y5ZyoJylcbiAgICBjb25zdCBsaXN0ID0gbmV3cy5saXN0XG4gICAgbGV0IGRldGFpbCA9IGxpc3QuZmluZChpID0+IHtcbiAgICAgIHJldHVybiBpLmlkID09PSBwYXlsb2FkLmlkXG4gICAgfSlcbiAgICBpZiAoIWRldGFpbCkge1xuICAgICAgY29uc29sZS5sb2coJ2RldGFpbOiBlOe9keaJjeiiq+aJvuWIsCcpXG4gICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChyZXF1ZXN0LCBHRVRfTkVXUywgcGF5bG9hZCk7XG4gICAgICBkZXRhaWwgPSBkYXRhLmJvZHkucmVzdWx0WzBdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIGNvbnNvbGUubG9nKCdkZXRhaWzlnKjliJfooajkuK3ooqvmib7liLAnKVxuICAgIH1cbiAgICB5aWVsZCBwdXQoeyB0eXBlOiAnbmV3cy9zYXZlJywgcGF5bG9hZDogeyBkZXRhaWwgfSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiAqIHRlc3QgKCkge1xuICB5aWVsZCB0YWtlKCd0ZXN0MicpXG59XG5cbmZ1bmN0aW9uICogcm9vdFNhZ2EgKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIHRha2VMYXRlc3QoJ3Rlc3QnLCB0ZXN0KSxcbiAgICB0YWtlTGF0ZXN0KCduZXdzL2luaXQnLCBnZXROZXdzSW5pdCksXG4gICAgdGFrZUxhdGVzdCgnbmV3cy9sb2FkbW9yZScsIGdldE5ld3NMaXN0KSxcbiAgICB0YWtlTGF0ZXN0KCduZXdzL2dldERldGFpbCcsIGdldE5ld3NEZXRhaWwpLFxuICBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCByb290U2FnYVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvZWZmZWN0cy9pbmRleC5qcyIsImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBlczZwcm9taXNlIGZyb20gJ2VzNi1wcm9taXNlJ1xuXG5pbXBvcnQgeyBBUElVUkwgfSBmcm9tICcuLi9jb25zdGFudHMvYXBpLmpzJ1xuXG5lczZwcm9taXNlLnBvbHlmaWxsKClcblxuZXhwb3J0IGRlZmF1bHQgKHVybCwgcGFyYW1zID0ge30pID0+IHtcbiAgICBjb25zb2xlLmxvZygn6K6/6Zeu77yaJytBUElVUkwgKyB1cmwpXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4ucGFyYW1zIH0pLFxuICAgIH07XG4gICAgcmV0dXJuIGZldGNoKEFQSVVSTCArIHVybCwgb3B0aW9ucylcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJCYWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXJcIik7XG5cdFx0fVxuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pXG4gICAgLmNhdGNoKGVyciA9PiAoeyBlcnIgfSkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZmV0Y2guanMiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB2ZXJ0eCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDYxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIHRpdGxlID0gJ+WNjuS6uueUn+a0u+e9kScsXG4gIGRlc2NyaXB0aW9uID0gJ+WFqOe+juacgOWkp+WNjuS6uuekvuWMuidcbn0pID0+IChcbiAgPEhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9zdGF0aWMvdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL3N0YXRpYy90b3VjaC1pY29uLnBuZ1wiIC8+XG4gICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi1tYXNrLnN2Z1wiIGNvbG9yPVwiIzQ5Qjg4MlwiIC8+XG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8c3R5bGU+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYztcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgYSxib2R5IHtcbiAgICAgICAgICBjb2xvcjogIzI5MjUyNTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgICAgICB9XG5cbiAgICAgICAgYm9keSxoMSxoMixoMyxoNCxoNSxoNntcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFBpbmdGYW5nLVNDLVJlZ3VsYXIsICdIaXJhZ2lubyBTYW5zIEdCJywgJ01pY3Jvc29mdCBZYWhlaScsIEFyaWFsLCBzYW5zLXNlcmlmXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICA8L0hlYWQ+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWQvaW5kZXguanMiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFdheXBvaW50IGZyb20gJ3JlYWN0LXdheXBvaW50JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IGZvcm1hdE5ld3NMaXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJ1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgY29uc3QgeyBsaXN0ID0gW10gfSA9IHN0YXRlLm5ld3M7XG4gIHJldHVybiB7XG4gICAgbGlzdDogZm9ybWF0TmV3c0xpc3QobGlzdCksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSgoe2xpc3QsIGRpc3BhdGNofSkgPT4ge1xuICBmdW5jdGlvbiBnb3RvZGV0YWlsKGlkKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ25ld3MvZ2V0RGV0YWlsJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICB9KVxuICAgIFJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL2RldGFpbCcsXG4gICAgICBxdWVyeTogeyBpZCB9XG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiBsb2FkbW9yZSgpIHtcbiAgICBjb25zdCBsZW5ndGggPSBsaXN0Lmxlbmd0aFxuICAgIGNvbnNvbGUubG9nKGxlbmd0aCAvIDEwKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICduZXdzL2xvYWRtb3JlJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgcGFnZTogcGFyc2VJbnQobGVuZ3RoIC8gMTApICsgMSxcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiAoPGRpdj5cbiAgICB7XG4gICAgICBsaXN0Lm1hcChpID0+IDxkaXYgb25DbGljaz17Z290b2RldGFpbC5iaW5kKHRoaXMsIGkuaWQpfSBrZXk9e2kuaWR9PlxuICAgICAgICA8SXRlbSB7Li4uaX0+PC9JdGVtPlxuICAgICAgPC9kaXY+KVxuICAgIH1cbiAgICA8V2F5cG9pbnRcbiAgICAgIG9uRW50ZXI9e2xvYWRtb3JlfVxuICAgICAgb25MZWF2ZT17KCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnb25MZWF2ZScpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8c3Bhbj48TG9hZGluZyAvPjwvc3Bhbj5cbiAgICA8L1dheXBvaW50PlxuICA8L2Rpdj4pO1xufSk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OZXdzL0xpc3QuanMiLCJpbXBvcnQgeyBwcmVhdHlUaW1lLCBnZXRTdHJsZXNzIH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TmV3c0xpc3QgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gZGF0YS5tYXAoKGksIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmksXG4gICAgICBrZXk6IGkuaWQgfHwgaW5kZXgsXG4gICAgICBjcmVhdGVkQXQ6IHByZWF0eVRpbWUoaS5jcmVhdGVkQXQpIHx8IHVuZGVmaW5lZCxcbiAgICAgIHVwZGF0ZWRBdDogcHJlYXR5VGltZShpLnVwZGF0ZWRBdCkgfHwgdW5kZWZpbmVkLFxuICAgICAgdHlwZTogaS5uZXdzVHlwZSA/IGkubmV3c1R5cGUudHlwZU5hbWUgOiB1bmRlZmluZWQsXG4gICAgICBjb3ZlcjogaS5waG90b3MgPyBpLnBob3Rvc1swXSA6IHVuZGVmaW5lZCxcbiAgICAgIGNvbnRlbnQ6IGdldFN0cmxlc3MoaS5jb250ZW50LCA2MCwgMyksXG4gICAgfTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZm9ybWF0LmpzIiwiXG5leHBvcnQgY29uc3QgcHJlYXR5VGltZSA9IChzdHIpID0+IHtcbiAgY29uc3QgZGF0YSA9IG5ldyBEYXRlKHN0cik7XG4gIGlmIChkYXRhKSB7XG4gICAgcmV0dXJuIGAke2RhdGEuZ2V0RnVsbFllYXIoKX0tJHtkYXRhLmdldE1vbnRoKCkgKyAxfS0ke2RhdGEuZ2V0RGF0ZSgpfSAke2RhdGEuZ2V0SG91cnMoKX06JHtkYXRhLmdldE1pbnV0ZXMoKX06JHtkYXRhLmdldFNlY29uZHMoKX1gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAn5pyq55+lJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0cmxlc3MgPSAob3N0ciwgZW5kID0gMTUsIHN0YXJ0ID0gMCkgPT4ge1xuICBjb25zdCBzdHIgPSBvc3RyIHx8ICcnO1xuICBpZiAoc3RyLmxlbmd0aCA+IGVuZCkge1xuICAgIHJldHVybiBgJHtzdHIuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpfS4uLmA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNtYWxsSW1nID0gKHVybCwgcHJvcHNYLCBwcm9wc1kpID0+IHtcbiAgY29uc3QgeCA9IHByb3BzWCB8fCAyMDA7XG4gIGNvbnN0IHkgPSBwcm9wc1kgfHwgMjAwO1xuICByZXR1cm4gYCR7dXJsfT9pbWFnZU1vZ3IyL3RodW1ibmFpbC8hJHt4fXgke3l9ci9ncmF2aXR5L0NlbnRlci9jcm9wLyR7eH14JHt5fWA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V2luSGVpZ2h0ID0gKCkgPT4ge1xuICBsZXQgd2luSGVpZ2h0ID0gMDtcbiAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIHdpbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfSBlbHNlIGlmICgoZG9jdW1lbnQuYm9keSkgJiYgKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSkge1xuICAgIHdpbkhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICB9XG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgIHdpbkhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHdpbkhlaWdodDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7XG4gIGxldCBzY3JvbGxUb3AgPSAwO1xuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgfVxuICByZXR1cm4gc2Nyb2xsVG9wO1xufVxuXG4vLyDljrvpmaTmlbDnu4TkuK3nmoTnqbrlgLxcbmV4cG9ydCBjb25zdCB0cmltU3BhY2UgPSAoYXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJheVtpXSA9PT0gJycgfHwgdHlwZW9mIChhcnJheVtpXSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICBpIC09IDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cbmV4cG9ydCBjb25zdCBub3RFbXB0eSA9ICh2YWx1ZSwgbGFiZWwpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgcmVqZWN0KGAke2xhYmVsfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrRGF0YSA9ICh7IGRhdGEsIGNiIH0pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmNvZGUgPT09IDIwMCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0gaWYgKGNiICYmIGNiKGRhdGEuY29kZSkpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVqZWN0KHsgbXNnOiAn5pON5L2c5byC5bi4JyB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcodXJsKSB7XG4gIGNvbnN0IHN0ciA9IHVybC5zcGxpdCgnPycpWzFdO1xuICBjb25zdCBpdGVtcyA9IHN0ci5zcGxpdCgnJicpO1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgbGV0IGFycjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGFyciA9IGl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgcmVzdWx0W2FyclswXV0gPSBhcnJbMV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2NvbW1vbi5qcyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICA8aW1nIGNsYXNzTmFtZT1cImltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbG9hZGluZy5zdmdcIiBhbHQ9XCJcIiAvPlxuICDliqrlipvliqDovb3kuK0uLi5cbiAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAubG9hZGluZyB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgdHVybiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNzIwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEycHg7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICBhbmltYXRpb246IDJzIGluZmluaXRlIHR1cm47XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICB9XG4gIGB9PC9zdHlsZT5cbjwvZGl2PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgKHsgdGl0bGUsIGNvbnRlbnQsIHR5cGUsIGNvdmVyLCByZWFkQ291bnQsIGNvbW1lbnRDb3VudCwgZ29Ub1VybCwgaWQgfSkgPT4gPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgPlxuICA8aW1nIGNsYXNzTmFtZT1cImNvdmVyXCIgc3JjPXtjb3Zlcn0gYWx0PVwiXCIvPlxuICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgIDxzdW1tYXJ5IGNsYXNzTmFtZT1cImRlc2NcIj57Y29udGVudH08L3N1bW1hcnk+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJtZXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291cmNlXCI+PC9kaXY+XG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlrZVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbGlrZS5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAge3JlYWRDb3VudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY29tbWVudC5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAge3JlYWRDb3VudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5pdGVtIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg0Niw2MSw3MywuMDgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RiZTJlODtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4IDAgMXB4IDA7XG4gICAgfVxuXG4gICAgLmNvdmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgfVxuICAgIC5ib3gge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsUGluZ0ZhbmcgU0MsSGlyYWdpbm8gU2FucyBHQixNaWNyb3NvZnQgWWFIZWksaGVsdmV0aWNhIG5ldWUsaGVsdmV0aWNhLHVidW50dSxyb2JvdG8sbm90byxzZWdvZSB1aSxBcmlhbCxzYW5zLXNlcmlmO1xuXG4gICAgfVxuICAgIC5kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjg1O1xuICAgICAgY29sb3I6ICM0YTRhNGE7XG4gICAgfVxuICAgIC5tZXRhIHtcbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgfVxuXG4gICAgLmFjdGlvbnMsIC5saWtlLCAuY29tbWVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbW1lbnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICAgIC5pY29uIHtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc4cmVtKSB7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIH1cbiAgICAgIC5kZXNjIHtcbiAgICAgICAgY29sb3I6ICM0YTRhNGE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuXG4gIGB9PC9zdHlsZT5cbjwvZGl2PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OZXdzL0l0ZW0uanMiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcidcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pe1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDE1MDBweDtcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyBkaXYge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzhyZW0pIHtcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyNDAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlICogNS83O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAqIDIvNztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgTWFpbiA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBTaWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzaWRlclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgSGVhZHJvb20gZnJvbSAncmVhY3QtaGVhZHJvb20nO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGhlbWU6ICdibGFjaycsXG4gICAgfTtcbiAgICB0aGlzLmJhY2sgPSAoKSA9PiB7XG4gICAgICBoaXN0b3J5LmdvQmFjaygpO1xuICAgICAgY29uc29sZS5sb2coaGlzdG9yeSk7XG4gICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5yZWZlcnJlcik7XG4gICAgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgYmxhY2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHdyYXBcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sb2dvLmpwZWdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJsb2dvXCIvPlxuICAgICAgICAgIDxoMT7ljY7kurrnlJ/mtLvnvZE8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sc1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0b29sXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9tZW51LnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGEgaHJlZj1cIlwiPueZu+W9lTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQkUyRTg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIC53cmFwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMzZweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyBoMSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAudG9vbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudG9vbHMgLnRvb2wge1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50b29scyBhIHtcbiAgICAgICAgICBib3JkZXI6IDFweCAjZmZmIHNvbGlkO1xuICAgICAgICAgIHBhZGRpbmc6IDdweCAyNHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibGFjayB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzFiMWIxZjtcbiAgICAgICAgfVxuICAgICAgICAudG9vbHMgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLnRvb2xzIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMWIxYjFmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAud2hpdGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLndoaXRlIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC53aGl0ZSBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWIxYjFmO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b29scyAudG9vbCB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvb2xzIGEge1xuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFDQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBVUE7QUFDQTtBQXRCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUlBOztBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFFQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBSUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBTUE7QUFDQTtBQU5BO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUhBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQUE7QUFNQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBWUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQ0E7QUFHQTtBQUpBO0FBS0E7QUFDQTtBQU5BO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7QUFRQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFDQTtBQU1BO0FBQUE7QUFQQTtBQUFBO0FBVUE7QUFEQTtBQUNBO0FBRUE7QUFaQTtBQUFBO0FBYUE7QUFDQTtBQURBO0FBYkE7QUFjQTtBQUNBO0FBREE7QUFkQTtBQUNBO0FBY0E7QUFmQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFuQkE7QUFBQTtBQW9CQTtBQUNBO0FBckJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7QUF3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFTQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUdBO0FBRUE7QUFIQTtBQUlBO0FBQUE7QUFMQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFsQkE7QUFDQTs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUdBOztBQUlBO0FBSEE7QUFGQTtBQUtBO0FBRUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7O0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFBQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUhBOztBQUFBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBbkNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7O0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQVpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ21DQTtBQTJDQTtBQUNBO0FBakZBO0FBQ0E7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7O0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBREE7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBOzs7Ozs7QUFEQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQWlEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUZBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFIQTtBQUtBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQStGQTtBQS9GQTs7Ozs7QUFrR0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        