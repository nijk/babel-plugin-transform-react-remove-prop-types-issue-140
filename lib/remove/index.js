"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SFC = _interopRequireDefault(require("./SFC"));

var _ClassComponent = _interopRequireDefault(require("./ClassComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var App = function App() {
  return _react.default.createElement("div", null, _react.default.createElement(_SFC.default, {
    foo: "foo",
    bar: "bar",
    baz: "baz"
  }), _react.default.createElement(_ClassComponent.default, {
    foo: "foo",
    bar: "bar",
    baz: "baz"
  }));
};

_reactDom.default.render(_react.default.createElement(App, null), document.getElementById('app'));