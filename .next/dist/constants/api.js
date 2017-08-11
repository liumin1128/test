'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 新闻相关
var GET_NEWS = exports.GET_NEWS = '/news/search';
var GET_NEWSTYPES = exports.GET_NEWSTYPES = '/news/findType';
var ADD_NEWS = exports.ADD_NEWS = '/news/add';
var UPDATE_NEWS = exports.UPDATE_NEWS = '/news/update';
var DELETE_NEWS = exports.DELETE_NEWS = '/news/delete';

var ZAN = exports.ZAN = '/infoList/info_list_zan';
var GET_ZAN = exports.GET_ZAN = '/infoList/info_list_zanCount';
var GET_ZAN_STATUS = exports.GET_ZAN_STATUS = '/infoList/info_list_zanStatus';
var GET_COMMENT = exports.GET_COMMENT = '/news/commentList';
var ADD_COMMENT = exports.ADD_COMMENT = '/news/addComment';
var DEL_COMMENT = exports.DEL_COMMENT = '/news/deleteComment';

// 全局api地址
// export const APIURL = 'https://data.huarenhouse.com';
var APIURL = exports.APIURL = 'https://api.huarenshenghuo.com';

// 七牛自定义域名
var QINIUURL = exports.QINIUURL = 'imgs.huarenhouse.com';