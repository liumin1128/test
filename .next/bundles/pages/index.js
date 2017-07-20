
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
    console.log(id);
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
      lineNumber: 41
    }
  }, list.map(function (i) {
    return _react2.default.createElement('div', { onClick: gotodetail.bind(_this, i.id), key: i.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, _react2.default.createElement(_Item2.default, (0, _extends3.default)({}, i, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    })));
  }), _react2.default.createElement(_reactWaypoint2.default, {
    onEnter: loadmore,
    onLeave: function onLeave() {
      console.log('onLeave');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement(_Loading2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
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

},[564]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnN0YW50cy9hcGkuanM/MDdiYTkwNyIsIndlYnBhY2s6Ly8vLi9wYWdlcz8wMDQ4NGE1Iiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzAwNDg0YTUiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanM/MDA0ODRhNSIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9jb21tb24uanM/MDA0ODRhNSIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9uZXdzLmpzPzAwNDg0YTUiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvZWZmZWN0cy9pbmRleC5qcz8wMDQ4NGE1Iiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoLmpzPzAwNDg0YTUiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKT8wMDQ4NGE1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZC9pbmRleC5qcz8wMDQ4NGE1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3cy9MaXN0LmpzPzAwNDg0YTUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LmpzPzAwNDg0YTUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tbW9uLmpzPzAwNDg0YTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LmpzPzAwNDg0YTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdzL0l0ZW0uanM/MDA0ODRhNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcz8wMDQ4NGE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIOaWsOmXu+ebuOWFs1xuZXhwb3J0IGNvbnN0IEdFVF9ORVdTID0gJy9uZXdzL3NlYXJjaCc7XG5leHBvcnQgY29uc3QgR0VUX05FV1NUWVBFUyA9ICcvbmV3cy9maW5kVHlwZSc7XG5leHBvcnQgY29uc3QgQUREX05FV1MgPSAnL25ld3MvYWRkJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTkVXUyA9ICcvbmV3cy91cGRhdGUnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ORVdTID0gJy9uZXdzL2RlbGV0ZSc7XG5cbi8vIOWFqOWxgGFwaeWcsOWdgFxuZXhwb3J0IGNvbnN0IEFQSVVSTCA9ICdodHRwczovL2RhdGEuaHVhcmVuaG91c2UuY29tJztcblxuLy8g5LiD54mb6Ieq5a6a5LmJ5Z+f5ZCNXG5leHBvcnQgY29uc3QgUUlOSVVVUkwgPSAnaW1ncy5odWFyZW5ob3VzZS5jb20nO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnN0YW50cy9hcGkuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHdpdGhSZWR1eFNhZ2EgfSBmcm9tICcuLi9zdG9yZSdcblxuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJ1xuaW1wb3J0IE5ld3NMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3cy9MaXN0J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBNYWluLCBTaWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBJbmRleCA9ICgpID0+IDxkaXY+XG4gICAgPEhlYWQgLz5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPE1haW4+XG4gICAgICAgIDxOZXdzTGlzdCAvPlxuICAgICAgPC9NYWluPlxuICAgICAgPFNpZGVyPnNpZGVyPC9TaWRlcj5cbiAgICA8L0NvbnRhaW5lcj5cbjwvZGl2PlxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEsIHN0b3JlIH0pID0+IHtcbiAgc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6ICduZXdzL2luaXQnXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eFNhZ2EoSW5kZXgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IG5leHRSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJ1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5cbmltcG9ydCByb290UmVkdWNlciwge2V4YW1wbGVJbml0aWFsU3RhdGV9IGZyb20gJy4vcmVkdWNlcnMnXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9lZmZlY3RzJ1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlIChpbml0aWFsU3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSlcbiAgKVxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoUmVkdXhTYWdhIChCYXNlQ29tcG9uZW50KSB7XG4gIHJldHVybiB3aXRoUmVkdXgoY29uZmlndXJlU3RvcmUpKG5leHRSZWR1eFNhZ2EoQmFzZUNvbXBvbmVudCkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9pbmRleC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGNvbW1vbiBmcm9tICcuL2NvbW1vbi5qcyc7XG5pbXBvcnQgbmV3cyBmcm9tICcuL25ld3MuanMnO1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgY29tbW9uLFxuICBuZXdzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcyIsImNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgc2Nyb2xsSGVpZ2h0OiAwLFxufTtcbmZ1bmN0aW9uIGNvbW1vbihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdjb21tb24vc2F2ZSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tbW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvcmVkdWNlcnMvY29tbW9uLmpzIiwiY29uc3QgaW5pdFN0YXRlID0ge1xuICBsaXN0OiBbXSxcbiAgZGV0YWlsOiB7fSxcbn07XG5mdW5jdGlvbiBuZXdzKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ25ld3Mvc2F2ZSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL3JlZHVjZXJzL25ld3MuanMiLCJpbXBvcnQge2RlbGF5fSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHthbGwsIGNhbGwsIHNlbGVjdCwgcHV0LCB0YWtlLCB0YWtlTGF0ZXN0fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgeyBHRVRfTkVXUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hcGkuanMnXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9mZXRjaC5qcydcblxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgcGFnZTogMSxcbiAgcGFnZVNpemU6IDEwLFxufVxuXG5mdW5jdGlvbiogZ2V0TmV3c0luaXQoKSB7XG4gIGNvbnN0IHsgbmV3cyB9ID0geWllbGQgc2VsZWN0KClcbiAgY29uc3QgbGlzdCA9IG5ld3MubGlzdFxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICBjb25zb2xlLmxvZygn5rKh5pyJbGlzdOWtmOWcqO+8jOWIpOaWreS4uuesrOS4gOasoea4suafkycpXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwocmVxdWVzdCwgR0VUX05FV1MsIGRlZmF1bHRQYXJhbXMpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6ICduZXdzL3NhdmUnLCBwYXlsb2FkOiB7IGxpc3Q6IGRhdGEuYm9keS5yZXN1bHQgfSB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnbGlzdOWtmOWcqO+8jOS4jeWGjeWKoOi9vScpXG4gIH1cbn1cblxuZnVuY3Rpb24qIGdldE5ld3NMaXN0KHsgcGF5bG9hZCB9KSB7XG4gIGNvbnN0IHsgbmV3cyB9ID0geWllbGQgc2VsZWN0KClcbiAgY29uc3QgbGlzdCA9IG5ld3MubGlzdFxuICBjb25zdCBkYXRhID0geWllbGQgY2FsbChyZXF1ZXN0LCBHRVRfTkVXUywgeyAuLi5kZWZhdWx0UGFyYW1zLCAuLi5wYXlsb2FkIH0pO1xuICBjb25zb2xlLmxvZygn5LiL5ouJ5Yqg6L295oiQ5YqfJylcbiAgeWllbGQgcHV0KHsgdHlwZTogJ25ld3Mvc2F2ZScsIHBheWxvYWQ6IHsgbGlzdDogbGlzdC5jb25jYXQoZGF0YS5ib2R5LnJlc3VsdCkgfSB9KTtcbn1cblxuZnVuY3Rpb24qIGdldE5ld3NEZXRhaWwoeyBwYXlsb2FkIH0pIHtcbiAgY29uc3QgeyBuZXdzIH0gPSB5aWVsZCBzZWxlY3QoKVxuICBjb25zdCBkZXRhaWwgPSBuZXdzLmRldGFpbFxuICBpZiAocGF5bG9hZC5pZCA9PT0gZGV0YWlsLmlkKSB7XG4gICAgY29uc29sZS5sb2coJ2RldGFpbOW3suWtmOWcqCcpXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2RldGFpbOS4jeWtmOWcqCcpXG4gICAgY29uc3QgbGlzdCA9IG5ld3MubGlzdFxuICAgIGxldCBkZXRhaWwgPSBsaXN0LmZpbmQoaSA9PiB7XG4gICAgICByZXR1cm4gaS5pZCA9PT0gcGF5bG9hZC5pZFxuICAgIH0pXG4gICAgaWYgKCFkZXRhaWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkZXRhaWzogZTnvZHmiY3ooqvmib7liLAnKVxuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwocmVxdWVzdCwgR0VUX05FV1MsIHBheWxvYWQpO1xuICAgICAgZGV0YWlsID0gZGF0YS5ib2R5LnJlc3VsdFswXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICBjb25zb2xlLmxvZygnZGV0YWls5Zyo5YiX6KGo5Lit6KKr5om+5YiwJylcbiAgICB9XG4gICAgeWllbGQgcHV0KHsgdHlwZTogJ25ld3Mvc2F2ZScsIHBheWxvYWQ6IHsgZGV0YWlsIH0gfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gKiB0ZXN0ICgpIHtcbiAgeWllbGQgdGFrZSgndGVzdDInKVxufVxuXG5mdW5jdGlvbiAqIHJvb3RTYWdhICgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICB0YWtlTGF0ZXN0KCd0ZXN0JywgdGVzdCksXG4gICAgdGFrZUxhdGVzdCgnbmV3cy9pbml0JywgZ2V0TmV3c0luaXQpLFxuICAgIHRha2VMYXRlc3QoJ25ld3MvbG9hZG1vcmUnLCBnZXROZXdzTGlzdCksXG4gICAgdGFrZUxhdGVzdCgnbmV3cy9nZXREZXRhaWwnLCBnZXROZXdzRGV0YWlsKSxcbiAgXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdFNhZ2FcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL2VmZmVjdHMvaW5kZXguanMiLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgZXM2cHJvbWlzZSBmcm9tICdlczYtcHJvbWlzZSdcblxuaW1wb3J0IHsgQVBJVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FwaS5qcydcblxuZXM2cHJvbWlzZS5wb2x5ZmlsbCgpXG5cbmV4cG9ydCBkZWZhdWx0ICh1cmwsIHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ+iuv+mXru+8micrQVBJVVJMICsgdXJsKVxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLnBhcmFtcyB9KSxcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChBUElVUkwgKyB1cmwsIG9wdGlvbnMpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyXCIpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KVxuICAgIC5jYXRjaChlcnIgPT4gKHsgZXJyIH0pKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2ZldGNoLmpzIiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gdmVydHggKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSA2MTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICB0aXRsZSA9ICfljY7kurrnlJ/mtLvnvZEnLFxuICBkZXNjcmlwdGlvbiA9ICflhajnvo7mnIDlpKfljY7kurrnpL7ljLonXG59KSA9PiAoXG4gIDxIZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIHNpemVzPVwiMTkyeDE5MlwiIGhyZWY9XCIvc3RhdGljL3RvdWNoLWljb24ucG5nXCIgLz5cbiAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24tbWFzay5zdmdcIiBjb2xvcj1cIiM0OUI4ODJcIiAvPlxuICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgPHN0eWxlPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEsYm9keSB7XG4gICAgICAgICAgY29sb3I6ICMyOTI1MjU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHksaDEsaDIsaDMsaDQsaDUsaDZ7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBQaW5nRmFuZy1TQy1SZWd1bGFyLCAnSGlyYWdpbm8gU2FucyBHQicsICdNaWNyb3NvZnQgWWFoZWknLCBBcmlhbCwgc2Fucy1zZXJpZlxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9IZWFkPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkL2luZGV4LmpzIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBXYXlwb2ludCBmcm9tICdyZWFjdC13YXlwb2ludCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBmb3JtYXROZXdzTGlzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcblxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIGNvbnN0IHsgbGlzdCA9IFtdIH0gPSBzdGF0ZS5uZXdzO1xuICByZXR1cm4ge1xuICAgIGxpc3Q6IGZvcm1hdE5ld3NMaXN0KGxpc3QpLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoKHtsaXN0LCBkaXNwYXRjaH0pID0+IHtcbiAgZnVuY3Rpb24gZ290b2RldGFpbChpZCkge1xuICAgIGNvbnNvbGUubG9nKGlkKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICduZXdzL2dldERldGFpbCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgfSlcbiAgICBSb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogJy9kZXRhaWwnLFxuICAgICAgcXVlcnk6IHsgaWQgfVxuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gbG9hZG1vcmUoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbGlzdC5sZW5ndGhcbiAgICBjb25zb2xlLmxvZyhsZW5ndGggLyAxMClcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnbmV3cy9sb2FkbW9yZScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHBhZ2U6IHBhcnNlSW50KGxlbmd0aCAvIDEwKSArIDEsXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gKDxkaXY+XG4gICAge1xuICAgICAgbGlzdC5tYXAoaSA9PiA8ZGl2IG9uQ2xpY2s9e2dvdG9kZXRhaWwuYmluZCh0aGlzLCBpLmlkKX0ga2V5PXtpLmlkfT5cbiAgICAgICAgPEl0ZW0gey4uLml9PjwvSXRlbT5cbiAgICAgIDwvZGl2PilcbiAgICB9XG4gICAgPFdheXBvaW50XG4gICAgICBvbkVudGVyPXtsb2FkbW9yZX1cbiAgICAgIG9uTGVhdmU9eygpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uTGVhdmUnKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHNwYW4+PExvYWRpbmcgLz48L3NwYW4+XG4gICAgPC9XYXlwb2ludD5cbiAgPC9kaXY+KTtcbn0pO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmV3cy9MaXN0LmpzIiwiaW1wb3J0IHsgcHJlYXR5VGltZSwgZ2V0U3RybGVzcyB9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IGZvcm1hdE5ld3NMaXN0ID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGRhdGEubWFwKChpLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5pLFxuICAgICAga2V5OiBpLmlkIHx8IGluZGV4LFxuICAgICAgY3JlYXRlZEF0OiBwcmVhdHlUaW1lKGkuY3JlYXRlZEF0KSB8fCB1bmRlZmluZWQsXG4gICAgICB1cGRhdGVkQXQ6IHByZWF0eVRpbWUoaS51cGRhdGVkQXQpIHx8IHVuZGVmaW5lZCxcbiAgICAgIHR5cGU6IGkubmV3c1R5cGUgPyBpLm5ld3NUeXBlLnR5cGVOYW1lIDogdW5kZWZpbmVkLFxuICAgICAgY292ZXI6IGkucGhvdG9zID8gaS5waG90b3NbMF0gOiB1bmRlZmluZWQsXG4gICAgICBjb250ZW50OiBnZXRTdHJsZXNzKGkuY29udGVudCwgNjAsIDMpLFxuICAgIH07XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2Zvcm1hdC5qcyIsIlxuZXhwb3J0IGNvbnN0IHByZWF0eVRpbWUgPSAoc3RyKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBuZXcgRGF0ZShzdHIpO1xuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiBgJHtkYXRhLmdldEZ1bGxZZWFyKCl9LSR7ZGF0YS5nZXRNb250aCgpICsgMX0tJHtkYXRhLmdldERhdGUoKX0gJHtkYXRhLmdldEhvdXJzKCl9OiR7ZGF0YS5nZXRNaW51dGVzKCl9OiR7ZGF0YS5nZXRTZWNvbmRzKCl9YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ+acquefpSc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHJsZXNzID0gKG9zdHIsIGVuZCA9IDE1LCBzdGFydCA9IDApID0+IHtcbiAgY29uc3Qgc3RyID0gb3N0ciB8fCAnJztcbiAgaWYgKHN0ci5sZW5ndGggPiBlbmQpIHtcbiAgICByZXR1cm4gYCR7c3RyLnN1YnN0cmluZyhzdGFydCwgZW5kKX0uLi5gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTbWFsbEltZyA9ICh1cmwsIHByb3BzWCwgcHJvcHNZKSA9PiB7XG4gIGNvbnN0IHggPSBwcm9wc1ggfHwgMjAwO1xuICBjb25zdCB5ID0gcHJvcHNZIHx8IDIwMDtcbiAgcmV0dXJuIGAke3VybH0/aW1hZ2VNb2dyMi90aHVtYm5haWwvISR7eH14JHt5fXIvZ3Jhdml0eS9DZW50ZXIvY3JvcC8ke3h9eCR7eX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFdpbkhlaWdodCA9ICgpID0+IHtcbiAgbGV0IHdpbkhlaWdodCA9IDA7XG4gIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICB3aW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH0gZWxzZSBpZiAoKGRvY3VtZW50LmJvZHkpICYmIChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCkpIHtcbiAgICB3aW5IZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgfVxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICB3aW5IZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG4gIHJldHVybiB3aW5IZWlnaHQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkge1xuICBsZXQgc2Nyb2xsVG9wID0gMDtcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB7XG4gICAgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gIH1cbiAgcmV0dXJuIHNjcm9sbFRvcDtcbn1cblxuLy8g5Y676Zmk5pWw57uE5Lit55qE56m65YC8XG5leHBvcnQgY29uc3QgdHJpbVNwYWNlID0gKGFycmF5KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09ICcnIHx8IHR5cGVvZiAoYXJyYXlbaV0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgaSAtPSAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5leHBvcnQgY29uc3Qgbm90RW1wdHkgPSAodmFsdWUsIGxhYmVsKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJlamVjdChgJHtsYWJlbH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0RhdGEgPSAoeyBkYXRhLCBjYiB9KSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5jb2RlID09PSAyMDApIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGlmIChjYiAmJiBjYihkYXRhLmNvZGUpKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlamVjdCh7IG1zZzogJ+aTjeS9nOW8guW4uCcgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKHVybCkge1xuICBjb25zdCBzdHIgPSB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgY29uc3QgaXRlbXMgPSBzdHIuc3BsaXQoJyYnKTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGxldCBhcnI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnIgPSBpdGVtc1tpXS5zcGxpdCgnPScpO1xuICAgIHJlc3VsdFthcnJbMF1dID0gYXJyWzFdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9jb21tb24uanMiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xvYWRpbmcuc3ZnXCIgYWx0PVwiXCIgLz5cbiAg5Yqq5Yqb5Yqg6L295LitLi4uXG4gIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgLmxvYWRpbmcge1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHR1cm4ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDcyMGRlZyk7XG4gICAgICB9XG4gICAgfVxuICAgIC5pbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMnB4O1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgYW5pbWF0aW9uOiAycyBpbmZpbml0ZSB0dXJuO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L2Rpdj5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9hZGluZy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCBjb250ZW50LCB0eXBlLCBjb3ZlciwgcmVhZENvdW50LCBjb21tZW50Q291bnQsIGdvVG9VcmwsIGlkIH0pID0+IDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiID5cbiAgPGltZyBjbGFzc05hbWU9XCJjb3ZlclwiIHNyYz17Y292ZXJ9IGFsdD1cIlwiLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICA8c3VtbWFyeSBjbGFzc05hbWU9XCJkZXNjXCI+e2NvbnRlbnR9PC9zdW1tYXJ5PlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZVwiPjwvZGl2PlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xpa2Uuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NvbW1lbnQuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuaXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNDYsNjEsNzMsLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmUyZTg7XG4gICAgICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAwO1xuICAgIH1cblxuICAgIC5jb3ZlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIH1cbiAgICAuYm94IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFBpbmdGYW5nIFNDLEhpcmFnaW5vIFNhbnMgR0IsTWljcm9zb2Z0IFlhSGVpLGhlbHZldGljYSBuZXVlLGhlbHZldGljYSx1YnVudHUscm9ib3RvLG5vdG8sc2Vnb2UgdWksQXJpYWwsc2Fucy1zZXJpZjtcblxuICAgIH1cbiAgICAuZGVzYyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS44NTtcbiAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgIH1cbiAgICAubWV0YSB7XG4gICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIH1cblxuICAgIC5hY3Rpb25zLCAubGlrZSwgLmNvbW1lbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb21tZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICB3aWR0aDogMTRweDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3OHJlbSkge1xuICAgICAgLml0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG4gICAgICAuZGVzYyB7XG4gICAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42MjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICBgfTwvc3R5bGU+XG48L2Rpdj5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmV3cy9JdGVtLmpzIiwiZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPGgxPmhlYWRlcjwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSl7XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1heC13aWR0aDogMTUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAucm93IGRpdiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3OHJlbSkge1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDI0MDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgKiA1Lzc7XG4gICAgICAgIH1cblxuICAgICAgICAuc2lkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlICogMi83O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IFNpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQVVBO0FBQ0E7QUF0QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFJQTs7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBRUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUlBOztBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQU1BO0FBQ0E7QUFOQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFLQTtBQUNBO0FBREE7QUFMQTtBQUFBO0FBTUE7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7OztBQVlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBR0E7QUFKQTtBQUtBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBUUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQ0E7QUFNQTtBQUFBO0FBUEE7QUFBQTtBQVVBO0FBREE7QUFDQTtBQUVBO0FBWkE7QUFBQTtBQWFBO0FBQ0E7QUFEQTtBQWJBO0FBY0E7QUFDQTtBQURBO0FBZEE7QUFDQTtBQWNBO0FBZkE7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBbkJBO0FBQUE7QUFvQkE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBd0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFHQTtBQUVBO0FBSEE7QUFJQTtBQUFBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBbEJBO0FBQ0E7Ozs7Ozs7O0FDUkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUNBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUdBOztBQUlBO0FBSEE7QUFGQTtBQUtBO0FBRUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7O0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFBQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUhBOztBQUFBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBcENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7O0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQVpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ21DQTtBQTJDQTtBQUNBO0FBakZBO0FBQ0E7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7O0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBREE7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7OztBQURBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFMQTtBQUFBO0FBQUE7QUFpREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        