
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 544:
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

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(546);


/***/ }),

/***/ 546:
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

var _head = __webpack_require__(510);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(547);

var _link2 = _interopRequireDefault(_link);

var _fetch = __webpack_require__(558);

var _api = __webpack_require__(544);

var _NewsItem = __webpack_require__(561);

var _NewsItem2 = _interopRequireDefault(_NewsItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/pages/index.js?entry',
    _this = undefined;

var Page = function Page(_ref) {
  var _ref$list = _ref.list,
      list = _ref$list === undefined ? [] : _ref$list;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'News'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Home'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'About'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Contact'))))), list.map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title,
        photos = _ref2.photos;
    return _react2.default.createElement(_NewsItem2.default, {
      key: id,
      title: title,
      photos: photos,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    });
  }));
};

var list = [];

Page.getInitialProps = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
    var req = _ref3.req;
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
            return _context.abrupt('return', { list: list
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
    return _ref4.apply(this, arguments);
  };
}();

exports.default = Page;

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

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = undefined;

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(539);

var _stringify2 = _interopRequireDefault(_stringify);

var _isomorphicFetch = __webpack_require__(559);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _api = __webpack_require__(544);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return (0, _isomorphicFetch2.default)(_api.APIURL + url, options).then(function (response) {
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

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _styled = __webpack_require__(562);

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/components/NewsItem/index.js';

exports.default = function (_ref) {
    var title = _ref.title,
        photos = _ref.photos;
    return _react2.default.createElement('div', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, title), _react2.default.createElement('img', { className: 'cover', src: photos[0], alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), _react2.default.createElement(_styled2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/NewsItem/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/NewsItem/index.js"); } } })();

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/components/NewsItem/styled.js';

exports.default = function () {
  return _react2.default.createElement('style', { jsx: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, '\n      .item {\n        color: red;\n        background: red;\n      }\n    ');
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/NewsItem/styled.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/NewsItem/styled.js"); } } })();

/***/ })

},[545]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnN0YW50cy9hcGkuanM/YzZmNWQ5YyIsIndlYnBhY2s6Ly8vLi9wYWdlcz9jNmY1ZDljIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoLmpzP2M2ZjVkOWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdzSXRlbS9pbmRleC5qcz9jNmY1ZDljIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3c0l0ZW0vc3R5bGVkLmpzP2U2MjExYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g5paw6Ze755u45YWzXG5leHBvcnQgY29uc3QgR0VUX05FV1MgPSAnL25ld3Mvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBHRVRfTkVXU1RZUEVTID0gJy9uZXdzL2ZpbmRUeXBlJztcbmV4cG9ydCBjb25zdCBBRERfTkVXUyA9ICcvbmV3cy9hZGQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ORVdTID0gJy9uZXdzL3VwZGF0ZSc7XG5leHBvcnQgY29uc3QgREVMRVRFX05FV1MgPSAnL25ld3MvZGVsZXRlJztcblxuLy8g5YWo5bGAYXBp5Zyw5Z2AXG5leHBvcnQgY29uc3QgQVBJVVJMID0gJ2h0dHBzOi8vZGF0YS5odWFyZW5ob3VzZS5jb20nO1xuXG4vLyDkuIPniZvoh6rlrprkuYnln5/lkI1cbmV4cG9ydCBjb25zdCBRSU5JVVVSTCA9ICdpbWdzLmh1YXJlbmhvdXNlLmNvbSc7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL2FwaS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9mZXRjaC5qcydcbmltcG9ydCB7IEdFVF9ORVdTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FwaS5qcydcblxuaW1wb3J0IE5ld3NJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3c0l0ZW0nXG5cbmNvbnN0IFBhZ2UgPSAoeyBsaXN0ID0gW10gfSkgPT4gPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5OZXdzPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPG5hdj5cbiAgICA8dWw+XG4gICAgICA8bGk+PExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+PGE+SG9tZTwvYT48L0xpbms+PC9saT5cbiAgICAgIDxsaT48TGluayBwcmVmZXRjaCBocmVmPScvYWJvdXQnPjxhPkFib3V0PC9hPjwvTGluaz48L2xpPlxuICAgICAgPGxpPjxMaW5rIHByZWZldGNoIGhyZWY9Jy9jb250YWN0Jz48YT5Db250YWN0PC9hPjwvTGluaz48L2xpPlxuICAgIDwvdWw+XG4gIDwvbmF2PlxuICAgIHtcbiAgICAgIGxpc3QubWFwKCh7XG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgcGhvdG9zXG4gICAgICB9KSA9PiA8TmV3c0l0ZW1cbiAgICAgICAga2V5PXtpZH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBwaG90b3M9e3Bob3Rvc31cbiAgICAgIC8+KVxuICAgIH1cbjwvZGl2PlxuXG5sZXQgbGlzdCA9IFtdXG5cblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QoR0VUX05FV1MpXG4gICAgbGlzdCA9IGRhdGEuYm9keS5yZXN1bHRcbiAgICBjb25zb2xlLmxvZygnbGlzdOS4jeWtmOWcqCcpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2xpc3Tlt7LlrZjlnKgnKVxuICB9XG4gIHJldHVybiB7IGxpc3QgfVxuLy8gICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCB7IEFQSVVSTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hcGkuanMnXG4gXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9ICh1cmwsIHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ+iuv+mXru+8micrQVBJVVJMICsgdXJsKVxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLnBhcmFtcyB9KSxcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChBUElVUkwgKyB1cmwsIG9wdGlvbnMpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyXCIpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KVxuICAgIC5jYXRjaChlcnIgPT4gKHsgZXJyIH0pKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9mZXRjaC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdHlsZSBmcm9tICAnLi9zdHlsZWQuanMnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCBwaG90b3MgfSkgPT4gPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgPlxuICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImNvdmVyXCIgc3JjPXtwaG90b3NbMF19IGFsdD1cIlwiLz5cbiAgICA8U3R5bGU+PC9TdHlsZT5cbjwvZGl2PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmV3c0l0ZW0vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IDxzdHlsZSBqc3g+e2BcbiAgICAgIC5pdGVtIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgfVxuICAgIGB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmV3c0l0ZW0vc3R5bGVkLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUhBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFiQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFQQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUdBO0FBRUE7QUFIQTtBQUlBO0FBQUE7QUFMQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFsQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        