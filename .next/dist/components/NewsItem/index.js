"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("_styled-jsx@1.0.8@styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("_next@3.0.1-beta.17@next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

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
  return _react2.default.createElement(_link2.default, { href: "/news/detail?id=" + id, __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("div", { className: "item", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("img", { className: "cover", src: cover, alt: "", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }), _react2.default.createElement("div", { className: "box", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("h3", { className: "title", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, title), _react2.default.createElement("summary", { className: "desc", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, content), _react2.default.createElement("footer", { className: "meta", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("div", { className: "source", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement("span", {
    "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement("div", { className: "actions", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement("span", { className: "like", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("img", { className: "icon", src: "../../static/images/like.svg", alt: "", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), readCount), _react2.default.createElement("span", { className: "comment", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("img", { className: "icon", src: "../../static/images/comment.svg", alt: "", "data-jsx": 2834051166,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), readCount)))), _react2.default.createElement(_style2.default, {
    styleId: 2834051166,
    css: ".item[data-jsx=\"2834051166\"]{background:#fff;margin-bottom:16px;margin:16px 0;box-shadow:0 1px 3px rgba(46,61,73,.08);border:1px solid #dbe2e8;border-width:1px 0 1px 0}.cover[data-jsx=\"2834051166\"]{width:100%;height:240px;background-position:50% 50%;background-repeat:no-repeat;background-size:100% 100%}.box[data-jsx=\"2834051166\"]{padding:20px}.title[data-jsx=\"2834051166\"]{font-size:20px;line-height:1.4;margin:0 0 20px;font-family:-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,Microsoft YaHei,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,Arial,sans-serif}.desc[data-jsx=\"2834051166\"]{font-size:14px;line-height:1.85;color:#4a4a4a}.meta[data-jsx=\"2834051166\"]{color:#9b9b9b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:22px;font-size:14px}.actions[data-jsx=\"2834051166\"],.like[data-jsx=\"2834051166\"],.comment[data-jsx=\"2834051166\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.comment[data-jsx=\"2834051166\"]{margin-left:20px}.icon[data-jsx=\"2834051166\"]{width:14px;height:14px;margin-right:4px}@media (min-width:78rem){.item[data-jsx=\"2834051166\"]{border-radius:3px}.title[data-jsx=\"2834051166\"]{font-size:24px;line-height:1.5}.desc[data-jsx=\"2834051166\"]{color:#4a4a4a;line-height:1.625;font-size:16px;margin:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3c0l0ZW0vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JjLEFBR3VCLEFBRUwsQUFDRSxBQUVFLEFBRUEsQUFDRCxBQUdELEFBQ0ksQUFDTixBQUdTLEFBQ0gsQUFDRCxZQWhCZSxBQVdELEVBVlosQ0FLZ0IsQUFVUyxDQWJMLEFBRUMsQUFVRyxDQWpCQSxDQVlwQixDQUlLLE1BSDJCLENBWFksT0FHTCxBQVlaLENBVlcsQUFXTyxHQWxCSixNQWFKLE1BTk0sQ0FGbUssQUFhL0ksRUFsQnlCLEdBRVQsS0FnQlQsa0JBUHJELE1BVCtGLFNBRlEsQUFRdkUsa0JBTm9FLFFBRm1DLDBCQUFLLDhCQVd2SSxvQ0FMOUMsYUFFbUcsaUdBQXVCLGlCQUFzQixnQkFDaEoiLCJmaWxlIjoiY29tcG9uZW50cy9OZXdzSXRlbS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGl1bWluL0Rlc2t0b3AvR2l0L3NzciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKHsgdGl0bGUsIGNvbnRlbnQsIHR5cGUsIGNvdmVyLCByZWFkQ291bnQsIGNvbW1lbnRDb3VudCwgZ29Ub1VybCwgaWQgfSkgPT4gPExpbmsgaHJlZj17XCIvbmV3cy9kZXRhaWw/aWQ9XCIraWR9PjxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiID5cbiAgPGltZyBjbGFzc05hbWU9XCJjb3ZlclwiIHNyYz17Y292ZXJ9IGFsdD1cIlwiLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICA8c3VtbWFyeSBjbGFzc05hbWU9XCJkZXNjXCI+e2NvbnRlbnR9PC9zdW1tYXJ5PlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZVwiPjwvZGl2PlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xpa2Uuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NvbW1lbnQuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHtyZWFkQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuaXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNDYsNjEsNzMsLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmUyZTg7XG4gICAgICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAwO1xuICAgIH1cblxuICAgIC5jb3ZlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIH1cbiAgICAuYm94IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFBpbmdGYW5nIFNDLEhpcmFnaW5vIFNhbnMgR0IsTWljcm9zb2Z0IFlhSGVpLGhlbHZldGljYSBuZXVlLGhlbHZldGljYSx1YnVudHUscm9ib3RvLG5vdG8sc2Vnb2UgdWksQXJpYWwsc2Fucy1zZXJpZjtcblxuICAgIH1cbiAgICAuZGVzYyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS44NTtcbiAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgIH1cbiAgICAubWV0YSB7XG4gICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIH1cblxuICAgIC5hY3Rpb25zLCAubGlrZSwgLmNvbW1lbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb21tZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICB3aWR0aDogMTRweDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3OHJlbSkge1xuICAgICAgLml0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG4gICAgICAuZGVzYyB7XG4gICAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42MjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICBgfTwvc3R5bGU+XG48L2Rpdj48L0xpbms+XG4iXX0= */\n/*@ sourceURL=components/NewsItem/index.js */"
  })));
};