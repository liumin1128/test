
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

var _link = __webpack_require__(547);

var _link2 = _interopRequireDefault(_link);

var _reactWaypoint = __webpack_require__(568);

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

var _fetch = __webpack_require__(558);

var _api = __webpack_require__(544);

var _format = __webpack_require__(561);

var _Head = __webpack_require__(565);

var _Head2 = _interopRequireDefault(_Head);

var _NewsItem = __webpack_require__(563);

var _NewsItem2 = _interopRequireDefault(_NewsItem);

var _Loading = __webpack_require__(584);

var _Loading2 = _interopRequireDefault(_Loading);

var _layout = __webpack_require__(566);

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

              list = data.body.result;
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
    key: 'render',
    value: function render() {
      var _props$list = this.props.list,
          list = _props$list === undefined ? [] : _props$list;
      var _state$list = this.state.list,
          more = _state$list === undefined ? [] : _state$list;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement(_layout.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_layout.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, list.concat(more).map(function (i) {
        return _react2.default.createElement(_NewsItem2.default, (0, _extends3.default)({}, i, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }));
      }), _react2.default.createElement(_reactWaypoint2.default, {
        onEnter: this.loadMore,
        onLeave: function onLeave() {
          console.log('onLeave');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_Loading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })))), _react2.default.createElement(_layout.Sider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'sider')));
    }
  }]);

  return Index;
}(_react.Component);

var list = [];

Index.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref2) {
    var req = _ref2.req;
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

            list = data.body.result;
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

exports.default = Index;

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
    css: ".item[data-jsx=\"2834051166\"]{background:#fff;margin-bottom:16px;margin:16px 0;box-shadow:0 1px 3px rgba(46,61,73,.08);border:1px solid #dbe2e8;border-width:1px 0 1px 0}.cover[data-jsx=\"2834051166\"]{width:100%;height:240px;background-position:50% 50%;background-repeat:no-repeat;background-size:100% 100%}.box[data-jsx=\"2834051166\"]{padding:20px}.title[data-jsx=\"2834051166\"]{font-size:20px;line-height:1.4;margin:0 0 20px;font-family:-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,Microsoft YaHei,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,Arial,sans-serif}.desc[data-jsx=\"2834051166\"]{font-size:14px;line-height:1.85;color:#4a4a4a}.meta[data-jsx=\"2834051166\"]{color:#9b9b9b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:22px;font-size:14px}.actions[data-jsx=\"2834051166\"],.like[data-jsx=\"2834051166\"],.comment[data-jsx=\"2834051166\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.comment[data-jsx=\"2834051166\"]{margin-left:20px}.icon[data-jsx=\"2834051166\"]{width:14px;height:14px;margin-right:4px}@media (min-width:78rem){.item[data-jsx=\"2834051166\"]{border-radius:3px}.title[data-jsx=\"2834051166\"]{font-size:24px;line-height:1.5}.desc[data-jsx=\"2834051166\"]{color:#4a4a4a;line-height:1.625;font-size:16px;margin:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3c0l0ZW0vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JjLEFBR3VCLEFBRUwsQUFDRSxBQUVFLEFBRUEsQUFDRCxBQUdELEFBQ0ksQUFDTixBQUdTLEFBQ0gsQUFDRCxZQWhCZSxBQVdELEVBVlosQ0FLZ0IsQUFVUyxDQWJMLEFBRUMsQUFVRyxDQWpCQSxDQVlwQixDQUlLLE1BSDJCLENBWFksT0FHTCxBQVlaLENBVlcsQUFXTyxHQWxCSixNQWFKLE1BTk0sQ0FGbUssQUFhL0ksRUFsQnlCLEdBRVQsS0FnQlQsa0JBUHJELE1BVCtGLFNBRlEsQUFRdkUsa0JBTm9FLFFBRm1DLDBCQUFLLDhCQVd2SSxvQ0FMOUMsYUFFbUcsaUdBQXVCLGlCQUFzQixnQkFDaEoiLCJmaWxlIjoiY29tcG9uZW50cy9OZXdzSXRlbS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGl1bWluL0Rlc2t0b3AvR2l0L3NzciIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCBjb250ZW50LCB0eXBlLCBjb3ZlciwgcmVhZENvdW50LCBjb21tZW50Q291bnQsIGdvVG9VcmwsIGlkIH0pID0+IDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiID5cbiAgPGltZyBjbGFzc05hbWU9XCJjb3ZlclwiIHNyYz17Y292ZXJ9IGFsdD1cIlwiLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICA8c3VtbWFyeSBjbGFzc05hbWU9XCJkZXNjXCI+e2NvbnRlbnR9PC9zdW1tYXJ5PlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZVwiPjwvZGl2PlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xpa2Uuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NvbW1lbnQuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuaXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNDYsNjEsNzMsLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmUyZTg7XG4gICAgICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAwO1xuICAgIH1cblxuICAgIC5jb3ZlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIH1cbiAgICAuYm94IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFBpbmdGYW5nIFNDLEhpcmFnaW5vIFNhbnMgR0IsTWljcm9zb2Z0IFlhSGVpLGhlbHZldGljYSBuZXVlLGhlbHZldGljYSx1YnVudHUscm9ib3RvLG5vdG8sc2Vnb2UgdWksQXJpYWwsc2Fucy1zZXJpZjtcblxuICAgIH1cbiAgICAuZGVzYyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS44NTtcbiAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgIH1cbiAgICAubWV0YSB7XG4gICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIH1cblxuICAgIC5hY3Rpb25zLCAubGlrZSwgLmNvbW1lbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb21tZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICB3aWR0aDogMTRweDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3OHJlbSkge1xuICAgICAgLml0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG4gICAgICAuZGVzYyB7XG4gICAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42MjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICBgfTwvc3R5bGU+XG48L2Rpdj5cbiJdfQ== */\n/*@ sourceURL=components/NewsItem/index.js */"
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
  }, '\n        body {\n          background-color: #fafbfc;\n          font-weight: 400;\n          -webkit-font-smoothing: antialiased;\n        }\n\n        a,body {\n          color: #292525;\n          font-size: 16px;\n        }\n\n\n        a {\n          text-decoration: none\n        }\n\n        body,h1,h2,h3,h4,h5,h6{\n          margin: 0;\n          padding: 0;\n        }\n\n        html {\n          font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular, \'Hiragino Sans GB\', \'Microsoft Yahei\', Arial, sans-serif\n        }\n\n      '));
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

/***/ }),

/***/ 584:
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

/***/ })

},[545]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnN0YW50cy9hcGkuanM/YjBhZWIxMSIsIndlYnBhY2s6Ly8vLi9wYWdlcz9iMGFlYjExIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoLmpzP2IwYWViMTEiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LmpzP2IwYWViMTEiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tbW9uLmpzP2IwYWViMTEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdzSXRlbS9pbmRleC5qcz9iMGFlYjExIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZC9pbmRleC5qcz9hYzUyMGZmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzP2FjNTIwZmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LmpzP2FjNTIwZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g5paw6Ze755u45YWzXG5leHBvcnQgY29uc3QgR0VUX05FV1MgPSAnL25ld3Mvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBHRVRfTkVXU1RZUEVTID0gJy9uZXdzL2ZpbmRUeXBlJztcbmV4cG9ydCBjb25zdCBBRERfTkVXUyA9ICcvbmV3cy9hZGQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ORVdTID0gJy9uZXdzL3VwZGF0ZSc7XG5leHBvcnQgY29uc3QgREVMRVRFX05FV1MgPSAnL25ld3MvZGVsZXRlJztcblxuLy8g5YWo5bGAYXBp5Zyw5Z2AXG5leHBvcnQgY29uc3QgQVBJVVJMID0gJ2h0dHBzOi8vZGF0YS5odWFyZW5ob3VzZS5jb20nO1xuXG4vLyDkuIPniZvoh6rlrprkuYnln5/lkI1cbmV4cG9ydCBjb25zdCBRSU5JVVVSTCA9ICdpbWdzLmh1YXJlbmhvdXNlLmNvbSc7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL2FwaS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBXYXlwb2ludCBmcm9tICdyZWFjdC13YXlwb2ludCc7XG5cbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9mZXRjaC5qcydcbmltcG9ydCB7IEdFVF9ORVdTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FwaS5qcydcbmltcG9ydCB7IGZvcm1hdE5ld3NMaXN0IH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0LmpzJ1xuXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnXG5pbXBvcnQgTmV3c0l0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9OZXdzSXRlbSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCB7IENvbnRhaW5lciwgTWFpbiwgU2lkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogJ3h4eCcsXG4gICAgICBsaXN0OiBbXVxuICAgIH1cbiAgICB0aGlzLmxvYWRNb3JlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wcm9wcy5saXN0Lmxlbmd0aCArIHRoaXMuc3RhdGUubGlzdC5sZW5ndGhcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgcGFnZTogKGxlbmd0aCAvIDIwKSArIDEsXG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdChHRVRfTkVXUywgcGFyYW1zKVxuICAgICAgbGlzdCA9IGRhdGEuYm9keS5yZXN1bHRcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaXN0OiB0aGlzLnN0YXRlLmxpc3QuY29uY2F0KGZvcm1hdE5ld3NMaXN0KGxpc3QpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBsaXN0ID0gW10gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGxpc3Q6IG1vcmUgPSBbXSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoPGRpdj5cbiAgICA8SGVhZCAvPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8TWFpbj5cbiAgICAgICAge1xuICAgICAgICAgIGxpc3QuY29uY2F0KG1vcmUpLm1hcChpID0+IDxOZXdzSXRlbSB7Li4uaX0gLz4pXG4gICAgICAgIH1cbiAgICAgICAgPFdheXBvaW50XG4gICAgICAgICAgb25FbnRlcj17dGhpcy5sb2FkTW9yZX1cbiAgICAgICAgICBvbkxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25MZWF2ZScpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj48TG9hZGluZyAvPjwvc3Bhbj5cbiAgICAgICAgPC9XYXlwb2ludD5cbiAgICAgIDwvTWFpbj5cbiAgICAgIDxTaWRlcj5zaWRlcjwvU2lkZXI+XG4gICAgPC9Db250YWluZXI+XG48L2Rpdj4pXG4gIH1cbn1cblxubGV0IGxpc3QgPSBbXVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdChHRVRfTkVXUylcbiAgICBsaXN0ID0gZGF0YS5ib2R5LnJlc3VsdFxuICAgIGNvbnNvbGUubG9nKCdsaXN05LiN5a2Y5ZyoJylcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnbGlzdOW3suWtmOWcqCcpXG4gIH1cbiAgcmV0dXJuIHsgbGlzdDogZm9ybWF0TmV3c0xpc3QobGlzdCkgfVxuLy8gICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCB7IEFQSVVSTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hcGkuanMnXG4gXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9ICh1cmwsIHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ+iuv+mXru+8micrQVBJVVJMICsgdXJsKVxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLnBhcmFtcyB9KSxcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChBUElVUkwgKyB1cmwsIG9wdGlvbnMpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyXCIpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KVxuICAgIC5jYXRjaChlcnIgPT4gKHsgZXJyIH0pKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9mZXRjaC5qcyIsImltcG9ydCB7IHByZWF0eVRpbWUsIGdldFN0cmxlc3MgfSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXROZXdzTGlzdCA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBkYXRhLm1hcCgoaSwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpLnBob3RvcylcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaSxcbiAgICAgIGtleTogaS5pZCB8fCBpbmRleCxcbiAgICAgIGNyZWF0ZWRBdDogcHJlYXR5VGltZShpLmNyZWF0ZWRBdCkgfHwgdW5kZWZpbmVkLFxuICAgICAgdXBkYXRlZEF0OiBwcmVhdHlUaW1lKGkudXBkYXRlZEF0KSB8fCB1bmRlZmluZWQsXG4gICAgICB0eXBlOiBpLm5ld3NUeXBlID8gaS5uZXdzVHlwZS50eXBlTmFtZSA6IHVuZGVmaW5lZCxcbiAgICAgIGNvdmVyOiBpLnBob3RvcyA/IGkucGhvdG9zWzBdIDogdW5kZWZpbmVkLFxuICAgICAgY29udGVudDogZ2V0U3RybGVzcyhpLmNvbnRlbnQsIDYwLCAzKSxcbiAgICAgIC8vIHR5cGU6IGdldE5ld3NUeXBlcygpW2kudHlwZV0udGV4dCB8fCB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZm9ybWF0LmpzIiwiXG5leHBvcnQgY29uc3QgcHJlYXR5VGltZSA9IChzdHIpID0+IHtcbiAgY29uc3QgZGF0YSA9IG5ldyBEYXRlKHN0cik7XG4gIGlmIChkYXRhKSB7XG4gICAgcmV0dXJuIGAke2RhdGEuZ2V0RnVsbFllYXIoKX0tJHtkYXRhLmdldE1vbnRoKCkgKyAxfS0ke2RhdGEuZ2V0RGF0ZSgpfSAke2RhdGEuZ2V0SG91cnMoKX06JHtkYXRhLmdldE1pbnV0ZXMoKX06JHtkYXRhLmdldFNlY29uZHMoKX1gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAn5pyq55+lJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0cmxlc3MgPSAob3N0ciwgZW5kID0gMTUsIHN0YXJ0ID0gMCkgPT4ge1xuICBjb25zdCBzdHIgPSBvc3RyIHx8ICcnO1xuICBpZiAoc3RyLmxlbmd0aCA+IGVuZCkge1xuICAgIHJldHVybiBgJHtzdHIuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpfS4uLmA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNtYWxsSW1nID0gKHVybCwgcHJvcHNYLCBwcm9wc1kpID0+IHtcbiAgY29uc3QgeCA9IHByb3BzWCB8fCAyMDA7XG4gIGNvbnN0IHkgPSBwcm9wc1kgfHwgMjAwO1xuICByZXR1cm4gYCR7dXJsfT9pbWFnZU1vZ3IyL3RodW1ibmFpbC8hJHt4fXgke3l9ci9ncmF2aXR5L0NlbnRlci9jcm9wLyR7eH14JHt5fWA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V2luSGVpZ2h0ID0gKCkgPT4ge1xuICBsZXQgd2luSGVpZ2h0ID0gMDtcbiAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIHdpbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfSBlbHNlIGlmICgoZG9jdW1lbnQuYm9keSkgJiYgKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSkge1xuICAgIHdpbkhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICB9XG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgIHdpbkhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHdpbkhlaWdodDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7XG4gIGxldCBzY3JvbGxUb3AgPSAwO1xuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgfVxuICByZXR1cm4gc2Nyb2xsVG9wO1xufVxuXG4vLyDljrvpmaTmlbDnu4TkuK3nmoTnqbrlgLxcbmV4cG9ydCBjb25zdCB0cmltU3BhY2UgPSAoYXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJheVtpXSA9PT0gJycgfHwgdHlwZW9mIChhcnJheVtpXSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICBpIC09IDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cbmV4cG9ydCBjb25zdCBub3RFbXB0eSA9ICh2YWx1ZSwgbGFiZWwpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgcmVqZWN0KGAke2xhYmVsfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrRGF0YSA9ICh7IGRhdGEsIGNiIH0pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmNvZGUgPT09IDIwMCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0gaWYgKGNiICYmIGNiKGRhdGEuY29kZSkpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVqZWN0KHsgbXNnOiAn5pON5L2c5byC5bi4JyB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcodXJsKSB7XG4gIGNvbnN0IHN0ciA9IHVybC5zcGxpdCgnPycpWzFdO1xuICBjb25zdCBpdGVtcyA9IHN0ci5zcGxpdCgnJicpO1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgbGV0IGFycjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGFyciA9IGl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgcmVzdWx0W2FyclswXV0gPSBhcnJbMV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2NvbW1vbi5qcyIsImV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCBjb250ZW50LCB0eXBlLCBjb3ZlciwgcmVhZENvdW50LCBjb21tZW50Q291bnQsIGdvVG9VcmwsIGlkIH0pID0+IDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiID5cbiAgPGltZyBjbGFzc05hbWU9XCJjb3ZlclwiIHNyYz17Y292ZXJ9IGFsdD1cIlwiLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICA8c3VtbWFyeSBjbGFzc05hbWU9XCJkZXNjXCI+e2NvbnRlbnR9PC9zdW1tYXJ5PlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZVwiPjwvZGl2PlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xpa2Uuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NvbW1lbnQuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuaXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNDYsNjEsNzMsLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmUyZTg7XG4gICAgICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAwO1xuICAgIH1cblxuICAgIC5jb3ZlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIH1cbiAgICAuYm94IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFBpbmdGYW5nIFNDLEhpcmFnaW5vIFNhbnMgR0IsTWljcm9zb2Z0IFlhSGVpLGhlbHZldGljYSBuZXVlLGhlbHZldGljYSx1YnVudHUscm9ib3RvLG5vdG8sc2Vnb2UgdWksQXJpYWwsc2Fucy1zZXJpZjtcblxuICAgIH1cbiAgICAuZGVzYyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS44NTtcbiAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgIH1cbiAgICAubWV0YSB7XG4gICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIH1cblxuICAgIC5hY3Rpb25zLCAubGlrZSwgLmNvbW1lbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb21tZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICB3aWR0aDogMTRweDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3OHJlbSkge1xuICAgICAgLml0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG4gICAgICAuZGVzYyB7XG4gICAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42MjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICBgfTwvc3R5bGU+XG48L2Rpdj5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmV3c0l0ZW0vaW5kZXguanMiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIHRpdGxlID0gJ+WNjuS6uueUn+a0u+e9kScsXG4gIGRlc2NyaXB0aW9uID0gJ+WFqOe+juacgOWkp+WNjuS6uuekvuWMuidcbn0pID0+IChcbiAgPEhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9zdGF0aWMvdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL3N0YXRpYy90b3VjaC1pY29uLnBuZ1wiIC8+XG4gICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi1tYXNrLnN2Z1wiIGNvbG9yPVwiIzQ5Qjg4MlwiIC8+XG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8c3R5bGU+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYztcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgYSxib2R5IHtcbiAgICAgICAgICBjb2xvcjogIzI5MjUyNTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgICAgICB9XG5cbiAgICAgICAgYm9keSxoMSxoMixoMyxoNCxoNSxoNntcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFBpbmdGYW5nLVNDLVJlZ3VsYXIsICdIaXJhZ2lubyBTYW5zIEdCJywgJ01pY3Jvc29mdCBZYWhlaScsIEFyaWFsLCBzYW5zLXNlcmlmXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICA8L0hlYWQ+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWQvaW5kZXguanMiLCJleHBvcnQgY29uc3QgQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8aDE+aGVhZGVyPC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKXtcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cgZGl2IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc4cmVtKSB7XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1heC13aWR0aDogMjQwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAqIDUvNztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWRlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgKiAyLzc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IE1haW4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgU2lkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2lkZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xvYWRpbmcuc3ZnXCIgYWx0PVwiXCIgLz5cbiAg5Yqq5Yqb5Yqg6L295LitLi4uXG4gIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgLmxvYWRpbmcge1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHR1cm4ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDcyMGRlZyk7XG4gICAgICB9XG4gICAgfVxuICAgIC5pbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMnB4O1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgYW5pbWF0aW9uOiAycyBpbmZpbml0ZSB0dXJuO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L2Rpdj5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9hZGluZy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFIQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFMQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUF0Q0E7QUFDQTtBQTJDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBUEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFHQTtBQUVBO0FBSEE7QUFJQTtBQUFBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBbEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVJBO0FBU0E7QUFkQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNtQ0E7QUEyQ0E7QUFDQTtBQWpGQTtBQUNBOzs7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBOztBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQURBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7Ozs7O0FBREE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQWlEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        