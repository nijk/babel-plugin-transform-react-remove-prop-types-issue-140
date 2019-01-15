"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SFC = function SFC(_ref) {
  var foo = _ref.foo,
      bar = _ref.bar,
      baz = _ref.baz;
  return _react.default.createElement("div", null, foo, bar, baz);
};

SFC.propTypes = {
  foo: _propTypes.default.string,
  bar: _propTypes.default.string,
  baz: _propTypes.default.string
};
var _default = SFC;
exports.default = _default;