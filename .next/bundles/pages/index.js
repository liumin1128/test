
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

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(547);

var _link2 = _interopRequireDefault(_link);

var _fetch = __webpack_require__(558);

var _api = __webpack_require__(544);

var _format = __webpack_require__(561);

var _Head = __webpack_require__(565);

var _Head2 = _interopRequireDefault(_Head);

var _NewsItem = __webpack_require__(563);

var _NewsItem2 = _interopRequireDefault(_NewsItem);

var _layout = __webpack_require__(566);

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
exports.formatNewsList = undefined;

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _common = __webpack_require__(562);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatNewsList = exports.formatNewsList = function formatNewsList(data) {
  return data.map(function (i, index) {
    console.log(i.photos);
    return (0, _extends3.default)({}, i, {
      key: i.id || index,
      createdAt: (0, _common.preatyTime)(i.createdAt) || undefined,
      updatedAt: (0, _common.preatyTime)(i.updatedAt) || undefined,
      type: i.newsType ? i.newsType.typeName : undefined,
      cover: i.photos ? i.photos[0] : undefined,
      content: (0, _common.getStrless)(i.content, 60, 3)
      // type: getNewsTypes()[i.type].text || undefined,
    });
  });
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/utils/format.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/utils/format.js"); } } })();

/***/ }),

/***/ 562:
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

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(564);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

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
  return _react2.default.createElement("div", { className: "item", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    }
  }, _react2.default.createElement("img", { className: "cover", src: cover, alt: "", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }), _react2.default.createElement("div", { className: "box", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("h3", { className: "title", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, title), _react2.default.createElement("summary", { className: "desc", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, content), _react2.default.createElement("footer", { className: "meta", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("div", { className: "source", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement("span", {
    "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement("div", { className: "actions", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("span", { className: "like", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("img", { className: "icon", src: "../../static/images/like.svg", alt: "", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), readCount), _react2.default.createElement("span", { className: "comment", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement("img", { className: "icon", src: "../../static/images/comment.svg", alt: "", "data-jsx": 1281076370,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), readCount)))), _react2.default.createElement(_style2.default, {
    styleId: 1281076370,
    css: ".item[data-jsx=\"1281076370\"]{background:#fff;margin-bottom:16px;margin:16px 0;box-shadow:0 1px 3px rgba(46,61,73,.08);border:1px solid #dbe2e8}.cover[data-jsx=\"1281076370\"]{width:100%;height:240px;background-position:50% 50%;background-repeat:no-repeat;background-size:100% 100%}.box[data-jsx=\"1281076370\"]{padding:20px}.title[data-jsx=\"1281076370\"]{font-size:20px;line-height:1.4;margin:0 0 20px;font-family:-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,Microsoft YaHei,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,Arial,sans-serif}.desc[data-jsx=\"1281076370\"]{font-size:14px;line-height:1.85;color:#4a4a4a}.meta[data-jsx=\"1281076370\"]{color:#9b9b9b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:22px;font-size:14px}.actions[data-jsx=\"1281076370\"],.like[data-jsx=\"1281076370\"],.comment[data-jsx=\"1281076370\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.comment[data-jsx=\"1281076370\"]{margin-left:20px}.icon[data-jsx=\"1281076370\"]{width:14px;height:14px;margin-right:4px}@media (min-width:78rem){.item[data-jsx=\"1281076370\"]{border-radius:3px}.title[data-jsx=\"1281076370\"]{font-size:24px;line-height:1.5}.desc[data-jsx=\"1281076370\"]{color:#4a4a4a;line-height:1.625;font-size:16px;margin:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3c0l0ZW0vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JjLEFBR3VCLEFBRUwsQUFDRSxBQUVFLEFBRUEsQUFDRCxBQUdELEFBQ0ksQUFDTixBQUdTLEFBQ0gsQUFDRCxZQWhCZSxBQVdELEVBVlosQ0FLZ0IsQUFVUyxDQWJMLEFBRUMsQUFVRyxDQWpCQSxDQVlwQixDQUlLLE1BSDJCLENBWFksT0FHTCxBQVlaLENBVlcsQUFXTyxHQWxCSixNQWFKLE1BTk0sQ0FGbUssQUFhL0ksRUFsQnlCLEdBRVQsS0FnQlQsa0JBUHJELE1BVCtGLFNBRlEsQUFRdkUsa0JBTm9FLFFBRlEsd0RBV3ZHLG9DQUw5QyxhQUVtRyxpR0FBdUIsaUJBQXNCLGdCQUNoSiIsImZpbGUiOiJjb21wb25lbnRzL05ld3NJdGVtL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9saXVtaW4vRGVza3RvcC9HaXQvc3NyIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgdGl0bGUsIGNvbnRlbnQsIHR5cGUsIGNvdmVyLCByZWFkQ291bnQsIGNvbW1lbnRDb3VudCwgZ29Ub1VybCwgaWQgfSkgPT4gPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgPlxuICA8aW1nIGNsYXNzTmFtZT1cImNvdmVyXCIgc3JjPXtjb3Zlcn0gYWx0PVwiXCIvPlxuICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgIDxzdW1tYXJ5IGNsYXNzTmFtZT1cImRlc2NcIj57Y29udGVudH08L3N1bW1hcnk+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJtZXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291cmNlXCI+PC9kaXY+XG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlrZVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbGlrZS5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAge3JlYWRDb3VudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY29tbWVudC5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAge3JlYWRDb3VudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5pdGVtIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg0Niw2MSw3MywuMDgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RiZTJlODtcbiAgICB9XG5cbiAgICAuY292ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB9XG4gICAgLmJveCB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxQaW5nRmFuZyBTQyxIaXJhZ2lubyBTYW5zIEdCLE1pY3Jvc29mdCBZYUhlaSxoZWx2ZXRpY2EgbmV1ZSxoZWx2ZXRpY2EsdWJ1bnR1LHJvYm90byxub3RvLHNlZ29lIHVpLEFyaWFsLHNhbnMtc2VyaWY7XG5cbiAgICB9XG4gICAgLmRlc2Mge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuODU7XG4gICAgICBjb2xvcjogIzRhNGE0YTtcbiAgICB9XG4gICAgLm1ldGEge1xuICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICB9XG5cbiAgICAuYWN0aW9ucywgLmxpa2UsIC5jb21tZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuY29tbWVudCB7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzhyZW0pIHtcbiAgICAgIC5pdGVtIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgfVxuICAgICAgLmRlc2Mge1xuICAgICAgICBjb2xvcjogIzRhNGE0YTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgYH08L3N0eWxlPlxuPC9kaXY+XG4iXX0= */\n/*@ sourceURL=components/NewsItem/index.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/NewsItem/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/NewsItem/index.js"); } } })();

/***/ }),

/***/ 565:
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
  }, '\n        body {\n          background-color: #fafbfc;\n          font-weight: 400;\n          -webkit-font-smoothing: antialiased;\n        }\n\n        a,body {\n          color: #292525;\n          font-size: 16px;\n        }\n\n\n        a {\n          text-decoration: none\n        }\n\n        h1,h2,h3,h4,h5,h6{\n          margin: 0;\n          padding: 0;\n        }\n\n        html {\n          font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular, \'Hiragino Sans GB\', \'Microsoft Yahei\', Arial, sans-serif\n        }\n\n      '));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/liumin/Desktop/Git/ssr/components/Head/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/liumin/Desktop/Git/ssr/components/Head/index.js"); } } })();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sider = exports.Main = exports.Container = undefined;

var _style = __webpack_require__(564);

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

},[545]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnN0YW50cy9hcGkuanM/Zjg4MzdmNCIsIndlYnBhY2s6Ly8vLi9wYWdlcz9mODgzN2Y0Iiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoLmpzP2Y4ODM3ZjQiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LmpzP2Y4ODM3ZjQiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tbW9uLmpzP2Y4ODM3ZjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdzSXRlbS9pbmRleC5qcz9mODgzN2Y0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZC9pbmRleC5qcz9mODgzN2Y0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzP2Y4ODM3ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g5paw6Ze755u45YWzXG5leHBvcnQgY29uc3QgR0VUX05FV1MgPSAnL25ld3Mvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBHRVRfTkVXU1RZUEVTID0gJy9uZXdzL2ZpbmRUeXBlJztcbmV4cG9ydCBjb25zdCBBRERfTkVXUyA9ICcvbmV3cy9hZGQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ORVdTID0gJy9uZXdzL3VwZGF0ZSc7XG5leHBvcnQgY29uc3QgREVMRVRFX05FV1MgPSAnL25ld3MvZGVsZXRlJztcblxuLy8g5YWo5bGAYXBp5Zyw5Z2AXG5leHBvcnQgY29uc3QgQVBJVVJMID0gJ2h0dHBzOi8vZGF0YS5odWFyZW5ob3VzZS5jb20nO1xuXG4vLyDkuIPniZvoh6rlrprkuYnln5/lkI1cbmV4cG9ydCBjb25zdCBRSU5JVVVSTCA9ICdpbWdzLmh1YXJlbmhvdXNlLmNvbSc7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL2FwaS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3V0aWxzL2ZldGNoLmpzJ1xuaW1wb3J0IHsgR0VUX05FV1MgfSBmcm9tICcuLi9jb25zdGFudHMvYXBpLmpzJ1xuaW1wb3J0IHsgZm9ybWF0TmV3c0xpc3QgfSBmcm9tICcuLi91dGlscy9mb3JtYXQuanMnXG5cbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZCdcbmltcG9ydCBOZXdzSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL05ld3NJdGVtJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBNYWluLCBTaWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBQYWdlID0gKHsgbGlzdCA9IFtdIH0pID0+IDxkaXY+XG4gICAgPEhlYWQgLz5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPE1haW4+XG4gICAgICAgIHtcbiAgICAgICAgICBsaXN0Lm1hcChpID0+IDxOZXdzSXRlbSB7Li4uaX0gLz4pXG4gICAgICAgIH1cbiAgICAgIDwvTWFpbj5cbiAgICAgIDxTaWRlcj5zaWRlcjwvU2lkZXI+XG4gICAgPC9Db250YWluZXI+XG5cbjwvZGl2PlxuXG5sZXQgbGlzdCA9IFtdXG5cblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QoR0VUX05FV1MpXG4gICAgbGlzdCA9IGRhdGEuYm9keS5yZXN1bHRcbiAgICBjb25zb2xlLmxvZygnbGlzdOS4jeWtmOWcqCcpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2xpc3Tlt7LlrZjlnKgnKVxuICB9XG4gIHJldHVybiB7IGxpc3Q6IGZvcm1hdE5ld3NMaXN0KGxpc3QpIH1cbi8vICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCB7IEFQSVVSTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hcGkuanMnXG4gXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9ICh1cmwsIHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ+iuv+mXru+8micrQVBJVVJMICsgdXJsKVxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLnBhcmFtcyB9KSxcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChBUElVUkwgKyB1cmwsIG9wdGlvbnMpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyXCIpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KVxuICAgIC5jYXRjaChlcnIgPT4gKHsgZXJyIH0pKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9mZXRjaC5qcyIsImltcG9ydCB7IHByZWF0eVRpbWUsIGdldFN0cmxlc3MgfSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXROZXdzTGlzdCA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBkYXRhLm1hcCgoaSwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpLnBob3RvcylcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaSxcbiAgICAgIGtleTogaS5pZCB8fCBpbmRleCxcbiAgICAgIGNyZWF0ZWRBdDogcHJlYXR5VGltZShpLmNyZWF0ZWRBdCkgfHwgdW5kZWZpbmVkLFxuICAgICAgdXBkYXRlZEF0OiBwcmVhdHlUaW1lKGkudXBkYXRlZEF0KSB8fCB1bmRlZmluZWQsXG4gICAgICB0eXBlOiBpLm5ld3NUeXBlID8gaS5uZXdzVHlwZS50eXBlTmFtZSA6IHVuZGVmaW5lZCxcbiAgICAgIGNvdmVyOiBpLnBob3RvcyA/IGkucGhvdG9zWzBdIDogdW5kZWZpbmVkLFxuICAgICAgY29udGVudDogZ2V0U3RybGVzcyhpLmNvbnRlbnQsIDYwLCAzKSxcbiAgICAgIC8vIHR5cGU6IGdldE5ld3NUeXBlcygpW2kudHlwZV0udGV4dCB8fCB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZm9ybWF0LmpzIiwiXG5leHBvcnQgY29uc3QgcHJlYXR5VGltZSA9IChzdHIpID0+IHtcbiAgY29uc3QgZGF0YSA9IG5ldyBEYXRlKHN0cik7XG4gIGlmIChkYXRhKSB7XG4gICAgcmV0dXJuIGAke2RhdGEuZ2V0RnVsbFllYXIoKX0tJHtkYXRhLmdldE1vbnRoKCkgKyAxfS0ke2RhdGEuZ2V0RGF0ZSgpfSAke2RhdGEuZ2V0SG91cnMoKX06JHtkYXRhLmdldE1pbnV0ZXMoKX06JHtkYXRhLmdldFNlY29uZHMoKX1gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAn5pyq55+lJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0cmxlc3MgPSAob3N0ciwgZW5kID0gMTUsIHN0YXJ0ID0gMCkgPT4ge1xuICBjb25zdCBzdHIgPSBvc3RyIHx8ICcnO1xuICBpZiAoc3RyLmxlbmd0aCA+IGVuZCkge1xuICAgIHJldHVybiBgJHtzdHIuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpfS4uLmA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNtYWxsSW1nID0gKHVybCwgcHJvcHNYLCBwcm9wc1kpID0+IHtcbiAgY29uc3QgeCA9IHByb3BzWCB8fCAyMDA7XG4gIGNvbnN0IHkgPSBwcm9wc1kgfHwgMjAwO1xuICByZXR1cm4gYCR7dXJsfT9pbWFnZU1vZ3IyL3RodW1ibmFpbC8hJHt4fXgke3l9ci9ncmF2aXR5L0NlbnRlci9jcm9wLyR7eH14JHt5fWA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V2luSGVpZ2h0ID0gKCkgPT4ge1xuICBsZXQgd2luSGVpZ2h0ID0gMDtcbiAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIHdpbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfSBlbHNlIGlmICgoZG9jdW1lbnQuYm9keSkgJiYgKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSkge1xuICAgIHdpbkhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICB9XG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgIHdpbkhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHdpbkhlaWdodDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7XG4gIGxldCBzY3JvbGxUb3AgPSAwO1xuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgfVxuICByZXR1cm4gc2Nyb2xsVG9wO1xufVxuXG4vLyDljrvpmaTmlbDnu4TkuK3nmoTnqbrlgLxcbmV4cG9ydCBjb25zdCB0cmltU3BhY2UgPSAoYXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJheVtpXSA9PT0gJycgfHwgdHlwZW9mIChhcnJheVtpXSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICBpIC09IDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cbmV4cG9ydCBjb25zdCBub3RFbXB0eSA9ICh2YWx1ZSwgbGFiZWwpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgcmVqZWN0KGAke2xhYmVsfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrRGF0YSA9ICh7IGRhdGEsIGNiIH0pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmNvZGUgPT09IDIwMCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0gaWYgKGNiICYmIGNiKGRhdGEuY29kZSkpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVqZWN0KHsgbXNnOiAn5pON5L2c5byC5bi4JyB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcodXJsKSB7XG4gIGNvbnN0IHN0ciA9IHVybC5zcGxpdCgnPycpWzFdO1xuICBjb25zdCBpdGVtcyA9IHN0ci5zcGxpdCgnJicpO1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgbGV0IGFycjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGFyciA9IGl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgcmVzdWx0W2FyclswXV0gPSBhcnJbMV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2NvbW1vbi5qcyIsImV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCBjb250ZW50LCB0eXBlLCBjb3ZlciwgcmVhZENvdW50LCBjb21tZW50Q291bnQsIGdvVG9VcmwsIGlkIH0pID0+IDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiID5cbiAgPGltZyBjbGFzc05hbWU9XCJjb3ZlclwiIHNyYz17Y292ZXJ9IGFsdD1cIlwiLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICA8c3VtbWFyeSBjbGFzc05hbWU9XCJkZXNjXCI+e2NvbnRlbnR9PC9zdW1tYXJ5PlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZVwiPjwvZGl2PlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xpa2Uuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NvbW1lbnQuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuaXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNDYsNjEsNzMsLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmUyZTg7XG4gICAgfVxuXG4gICAgLmNvdmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgfVxuICAgIC5ib3gge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsUGluZ0ZhbmcgU0MsSGlyYWdpbm8gU2FucyBHQixNaWNyb3NvZnQgWWFIZWksaGVsdmV0aWNhIG5ldWUsaGVsdmV0aWNhLHVidW50dSxyb2JvdG8sbm90byxzZWdvZSB1aSxBcmlhbCxzYW5zLXNlcmlmO1xuXG4gICAgfVxuICAgIC5kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjg1O1xuICAgICAgY29sb3I6ICM0YTRhNGE7XG4gICAgfVxuICAgIC5tZXRhIHtcbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgfVxuXG4gICAgLmFjdGlvbnMsIC5saWtlLCAuY29tbWVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbW1lbnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICAgIC5pY29uIHtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc4cmVtKSB7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIH1cbiAgICAgIC5kZXNjIHtcbiAgICAgICAgY29sb3I6ICM0YTRhNGE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuXG4gIGB9PC9zdHlsZT5cbjwvZGl2PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OZXdzSXRlbS9pbmRleC5qcyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgdGl0bGUgPSAn5Y2O5Lq655Sf5rS7572RJyxcbiAgZGVzY3JpcHRpb24gPSAn5YWo576O5pyA5aSn5Y2O5Lq656S+5Yy6J1xufSkgPT4gKFxuICA8SGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgIDxsaW5rIHJlbD1cImljb25cIiBzaXplcz1cIjE5MngxOTJcIiBocmVmPVwiL3N0YXRpYy90b3VjaC1pY29uLnBuZ1wiIC8+XG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvc3RhdGljL3RvdWNoLWljb24ucG5nXCIgLz5cbiAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLW1hc2suc3ZnXCIgY29sb3I9XCIjNDlCODgyXCIgLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxuICAgIDxzdHlsZT57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZjO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBhLGJvZHkge1xuICAgICAgICAgIGNvbG9yOiAjMjkyNTI1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG4gICAgICAgIH1cblxuICAgICAgICBoMSxoMixoMyxoNCxoNSxoNntcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFBpbmdGYW5nLVNDLVJlZ3VsYXIsICdIaXJhZ2lubyBTYW5zIEdCJywgJ01pY3Jvc29mdCBZYWhlaScsIEFyaWFsLCBzYW5zLXNlcmlmXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICA8L0hlYWQ+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWQvaW5kZXguanMiLCJleHBvcnQgY29uc3QgQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8aDE+aGVhZGVyPC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKXtcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cgZGl2IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc4cmVtKSB7XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1heC13aWR0aDogMjQwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAqIDUvNztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWRlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgKiAyLzc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IE1haW4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgU2lkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2lkZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQVBBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBR0E7QUFFQTtBQUhBO0FBSUE7QUFBQTtBQUxBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQWxCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFSQTtBQVNBO0FBZEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbUNBO0FBMkNBO0FBQ0E7QUFqRkE7QUFDQTs7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTs7Ozs7OztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTs7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFEQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7Ozs7OztBQURBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFMQTtBQUFBO0FBQUE7QUFpREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        