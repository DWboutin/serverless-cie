"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

const ColoredFlag = () => _react.default.createElement("svg", {
  width: "12px",
  height: "13px",
  viewBox: "0 0 12 13",
  version: "1.1",
  className: "to-icon-colored-flag"
}, _react.default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, _react.default.createElement("g", {
  fillRule: "nonzero"
}, _react.default.createElement("polygon", {
  fill: "#572D2D",
  points: "1 2 0 2 0 13 1 13"
}), _react.default.createElement("path", {
  d: "M10.7852186,5.78656908 L11.9013195,7.24242537 C12.1419216,7.55204994 11.914676,8 11.5203815,8 L6,8 L6,3 L11.5203815,3 C11.914676,3 12.1419216,3.4479575 11.9013195,3.75757463 L10.7852186,5.21345322 C10.6582393,5.38471513 10.6582393,5.62188703 10.7852186,5.78656908 Z",
  fill: "#FE5143"
}), _react.default.createElement("polygon", {
  fill: "#572D2D",
  points: "6 5 6 8 3 5"
}), _react.default.createElement("path", {
  d: "M6,0.474308932 L6,5 L0,5 L0,0.474308932 C0,0.210803185 0.213808397,0 0.481068985,0 L5.52561493,0 C5.78620301,0 6,0.210803185 6,0.474308932 Z",
  fill: "#FE5143"
}))));

var _default = ColoredFlag;
exports.default = _default;