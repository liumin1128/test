'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkData = exports.notEmpty = exports.trimSpace = exports.getWinHeight = exports.getSmallImg = exports.getStrless = exports.preatyTime = undefined;
exports.getScrollTop = getScrollTop;
exports.parseQueryString = parseQueryString;

var _promise = require('_babel-runtime@6.23.0@babel-runtime/core-js/promise');

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