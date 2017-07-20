'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNewsList = undefined;

var _extends2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _common = require('./common');

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