'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('_babel-runtime@6.23.0@babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('_styled-jsx@1.0.9@styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('_next@3.0.1-beta.18@next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _Head = require('../components/Layout/Head');

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/liumin/Desktop/Git/ssr/pages/_error.js?entry';


var Detail = function (_Component) {
  (0, _inherits3.default)(Detail, _Component);

  function Detail(props) {
    (0, _classCallCheck3.default)(this, Detail);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Detail.__proto__ || (0, _getPrototypeOf2.default)(Detail)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Detail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _index2.default.prefetch('/');
      setTimeout(function () {
        _index2.default.push({
          pathname: '/'
        });
      }, 2000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 1026062444,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('p', { className: 'errorInfo', 'data-jsx': 1026062444,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, '\u8BF6\u5440\uFF0C\u8FD9\u4E2A\u9875\u9762\u627E\u4E0D\u5230\u4E86\u3002\u3002\u3002'), _react2.default.createElement(_style2.default, {
        styleId: 1026062444,
        css: '.errorInfo[data-jsx="1026062444"]{text-align:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmtCLEFBRzZCLG1CQUFTIiwiZmlsZSI6InBhZ2VzL19lcnJvci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGl1bWluL0Rlc2t0b3AvR2l0L3NzciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWQnO1xuXG5jbGFzcyBEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgUm91dGVyLnByZWZldGNoKCcvJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnLycsXG4gICAgICB9KTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPEhlYWQgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9ySW5mb1wiPuivtuWRgO+8jOi/meS4qumhtemdouaJvuS4jeWIsOS6huOAguOAguOAgjwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmVycm9ySW5mbyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcbiJdfQ== */\n/*@ sourceURL=pages/_error.js?entry */'
      }));
    }
  }]);

  return Detail;
}(_react.Component);

exports.default = Detail;