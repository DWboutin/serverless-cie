"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

const PhoneShape = () => _react.default.createElement("svg", {
  width: "350",
  height: "438",
  viewBox: "0 0 350 438",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, _react.default.createElement("g", {
  filter: "url(#PhoneShape-filter0_d)"
}, _react.default.createElement("path", {
  d: "M15 55C15 32.9086 32.9086 15 55 15H295C317.091 15 335 32.9086 335 55V513H15V55Z",
  fill: "#fff"
}), _react.default.createElement("path", {
  d: "M16 55C16 33.4609 33.4609 16 55 16H295C316.539 16 334 33.4609 334 55V512H16V55Z",
  stroke: "#E5E1E6",
  strokeWidth: "2"
})), _react.default.createElement("path", {
  d: "M92.0005 16V19.8775C92.0005 30.436 100.597 39 111.195 39H232.82C243.418 39 252.014 30.436 252.014 19.8775V16C252 16 91.6785 16.3208 92.0005 16Z",
  fill: "#E5E1E6"
}), _react.default.createElement("circle", {
  cx: "141",
  cy: "28",
  r: "3",
  fill: "#B5A4A0"
}), _react.default.createElement("rect", {
  x: "150",
  y: "27",
  width: "56",
  height: "2",
  rx: "1",
  fill: "#B5A4A0"
}), _react.default.createElement("defs", null, _react.default.createElement("filter", {
  id: "PhoneShape-filter0_d",
  x: "0",
  y: "0",
  width: "350",
  height: "528",
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, _react.default.createElement("feFlood", {
  floodOpacity: "0",
  result: "BackgroundImageFix"
}), _react.default.createElement("feColorMatrix", {
  in: "SourceAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), _react.default.createElement("feOffset", null), _react.default.createElement("feGaussianBlur", {
  stdDeviation: "7.5"
}), _react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0.333333 0 0 0 0 0.243137 0 0 0 0 0.254902 0 0 0 0.15 0"
}), _react.default.createElement("feBlend", {
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), _react.default.createElement("feBlend", {
  in: "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
}))));

var _default = PhoneShape;
exports.default = _default;