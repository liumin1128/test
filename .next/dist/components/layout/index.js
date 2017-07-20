"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sider = exports.Main = exports.Container = undefined;

var _style = require("_styled-jsx@1.0.8@styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

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