"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("_styled-jsx@1.0.8@styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

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