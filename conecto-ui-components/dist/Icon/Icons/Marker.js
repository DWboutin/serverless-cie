"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

const Marker = () => _react.default.createElement("svg", {
  width: "11",
  height: "15",
  viewBox: "0 0 11 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  className: "to-icon-marker"
}, _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.5 14.3C5.5 14.3 11 8.07188 11 5.2C11 2.32812 8.53757 0 5.5 0C2.46243 0 0 2.32812 0 5.2C0 8.07188 5.5 14.3 5.5 14.3ZM5.4998 7.69999C6.71483 7.69999 7.6998 6.71501 7.6998 5.49999C7.6998 4.28496 6.71483 3.29999 5.4998 3.29999C4.28478 3.29999 3.2998 4.28496 3.2998 5.49999C3.2998 6.71501 4.28478 7.69999 5.4998 7.69999Z",
  fill: "#572D2D"
}));

var _default = Marker;
exports.default = _default;