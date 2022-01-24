"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

const Close = () => _react.default.createElement("svg", {
  width: "11px",
  height: "13px",
  viewBox: "0 0 11 13",
  version: "1.1",
  className: "to-icon-close"
}, _react.default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, _react.default.createElement("g", {
  transform: "translate(0.000000, 1.000000)",
  stroke: "#572D2D"
}, _react.default.createElement("path", {
  d: "M0,0.35001 L10.44,10.79"
}), _react.default.createElement("path", {
  d: "M10.44,0.35001 L0,10.79"
}))));

var _default = Close;
exports.default = _default;