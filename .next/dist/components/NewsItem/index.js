'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('./styled.js');

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